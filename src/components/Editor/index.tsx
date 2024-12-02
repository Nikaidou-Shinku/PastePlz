import { createEffect, createSignal, JSX, splitProps } from "solid-js";
import { createAsync } from "@solidjs/router";
import { importLanguage } from "~/utils";
import { useShiki } from "~/highlighter";

interface EditorProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  lang: string;
}

export default (props: EditorProps) => {
  const [local, others] = splitProps(props, ["lang"]);

  const shikiPromise = useShiki();

  const [content, setContent] = createSignal("");

  const rawHtml = createAsync(() => {
    const lang = local.lang;
    const contentVal = content();

    return (async () => {
      const shiki = await shikiPromise;

      if (lang !== "text") {
        await shiki.loadLanguage(importLanguage(lang));
      }

      return shiki.codeToHtml(contentVal, {
        lang,
        // TODO: switch theme
        theme: "snazzy-light",
        transformers: [
          {
            code: (node) => {
              node.children.push({ type: "text", value: "\n" });
            },
          },
        ],
      });
    })();
  });

  let renderedEl: HTMLDivElement | undefined;

  const [scrollTop, setScrollTop] = createSignal(0);
  const [scrollLeft, setScrollLeft] = createSignal(0);

  createEffect(() => {
    rawHtml();

    if (typeof renderedEl !== "undefined") {
      renderedEl.scrollTop = scrollTop();
      renderedEl.scrollLeft = scrollLeft();
    }
  });

  return (
    <div class="relative h-[30rem] w-full sm:h-[40rem]">
      <div
        class="absolute left-0 top-0 h-full w-full overflow-scroll bg-[#fafbfc]"
        innerHTML={rawHtml.latest}
        ref={renderedEl}
      ></div>
      <textarea
        class="absolute left-0 top-0 h-full w-full text-nowrap bg-transparent font-mono"
        style="-webkit-text-fill-color: transparent;"
        spellcheck={false}
        onInput={(e) => setContent(e.currentTarget.value)}
        value={content()}
        onScroll={(e) => {
          const { scrollTop, scrollLeft } = e.currentTarget;

          setScrollTop(scrollTop);
          setScrollLeft(scrollLeft);

          if (typeof renderedEl !== "undefined") {
            renderedEl.scrollTop = scrollTop;
            renderedEl.scrollLeft = scrollLeft;
          }
        }}
        {...others}
      ></textarea>
    </div>
  );
};
