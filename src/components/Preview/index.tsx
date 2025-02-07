import { createAsync } from "@solidjs/router";
import { BundledTheme } from "shiki";
import { SupportedLanguages } from "~/constants";
import { render } from "~/lib";

interface PreviewProps {
  lang: SupportedLanguages;
  theme: BundledTheme;
  code: string;
}

export default (props: PreviewProps) => {
  const rendered = createAsync(() =>
    render(props.code, { lang: props.lang, theme: props.theme }),
  );

  return (
    <div class="flex w-full flex-col items-center space-y-4">
      <h2 class="text-2xl">Preview</h2>
      <div
        class="w-4/5 overflow-scroll rounded border border-neutral-300"
        innerHTML={rendered.latest}
      ></div>
    </div>
  );
};
