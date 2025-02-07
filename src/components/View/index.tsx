import { Suspense } from "solid-js";
import { createAsync } from "@solidjs/router";
import { writeClipboard } from "@solid-primitives/clipboard";
import { render } from "~/lib";

interface ViewProps {
  id: string;
  lang: string;
  content: string;
  time: Date;
}

export default (props: ViewProps) => {
  const rendered = createAsync(() =>
    render(props.content, {
      lang: props.lang,
      theme: "snazzy-light",
    }),
  );

  return (
    <div class="flex w-full flex-col items-center space-y-4">
      <div class="flex w-4/5 flex-col items-center space-y-4">
        <div class="space-x-4">
          <button
            class="rounded border border-neutral-300 bg-neutral-100 px-2 py-1 transition-colors hover:bg-neutral-200 active:bg-neutral-300"
            onClick={() => {
              writeClipboard(props.content);
            }}
          >
            Copy
          </button>
          <button
            class="rounded border border-neutral-300 bg-neutral-100 px-2 py-1 transition-colors hover:bg-neutral-200 active:bg-neutral-300"
            onClick={() => {
              // TODO: server name
              writeClipboard(`https://paste.yurzhang.com/${props.id}`);
            }}
          >
            Share
          </button>
        </div>
        <span>Time: {props.time.toLocaleString()}</span>
      </div>
      <Suspense>
        <div
          class="w-4/5 overflow-scroll rounded border border-neutral-300"
          innerHTML={rendered.latest}
        ></div>
      </Suspense>
    </div>
  );
};
