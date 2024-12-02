import {
  createAsync,
  query,
  redirect,
  RoutePreloadFuncArgs,
} from "@solidjs/router";
import { useShiki } from "~/highlighter";
import { importLanguage } from "~/utils";
import { getPaste } from "~/utils/db";
import { Button } from "~/components";

const getPasteInfo = query(async (token: string) => {
  "use server";
  const paste = await getPaste(token);

  if (paste === null) {
    throw redirect("/404");
  }

  return paste;
}, "paste");

export const route = {
  preload: ({ params }: RoutePreloadFuncArgs) => getPasteInfo(params.token),
};

interface PastePageProps {
  params: { token: string };
}

export default (props: PastePageProps) => {
  const shikiPromise = useShiki();

  const rawHtml = createAsync(() => {
    const token = props.params.token;

    return (async () => {
      const paste = await getPasteInfo(token);
      const shiki = await shikiPromise;

      if (paste.lang !== "text") {
        await shiki.loadLanguage(importLanguage(paste.lang));
      }

      return shiki.codeToHtml(paste.content, {
        lang: paste.lang,
        // TODO: switch theme
        theme: "snazzy-light",
      });
    })();
  });

  // TODO: styles
  return (
    <div>
      <div>
        <div>
          <Button>Copy</Button>
          <Button>Share</Button>
        </div>
        <span></span>
      </div>
      <div class="my-2" innerHTML={rawHtml.latest}></div>
    </div>
  );
};
