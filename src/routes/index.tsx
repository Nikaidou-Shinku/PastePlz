import { createSignal, For, Show } from "solid-js";
import { useSubmission } from "@solidjs/router";
// import { BundledTheme } from "shiki";
import { supportedLanguages, SupportedLanguages } from "~/constants";
import { submitPaste } from "~/lib";
import Preview from "~/components/Preview";

export default () => {
  const [lang, setLang] = createSignal<SupportedLanguages>("text");
  // TODO: change theme
  // const [theme, setTheme] = createSignal<BundledTheme>("snazzy-light");

  const [code, setCode] = createSignal("");

  const submission = useSubmission(submitPaste);

  return (
    <div class="flex flex-col items-center space-y-8 bg-neutral-50 py-8">
      <h1 class="text-3xl">Hello, PastePlz!</h1>
      <form
        class="flex w-full flex-col items-center space-y-4"
        action={submitPaste}
        method="post"
      >
        <div class="space-x-2">
          <label for="lang">Language</label>
          <select
            id="lang"
            name="lang"
            class="rounded border border-neutral-300 bg-white px-2 py-1"
            onInput={(e) =>
              setLang(e.currentTarget.value as SupportedLanguages)
            }
          >
            <For each={Object.entries(supportedLanguages)}>
              {([key, name]) => (
                <option value={key} selected={lang() === key}>
                  {name}
                </option>
              )}
            </For>
          </select>
        </div>
        <textarea
          class="h-32 w-4/5 rounded border border-neutral-300 bg-white p-1"
          name="content"
          value={code()}
          onInput={(e) => setCode(e.currentTarget.value)}
        ></textarea>
        <button
          class="rounded border border-neutral-300 bg-neutral-100 px-2 py-1 transition-colors hover:bg-neutral-200 active:bg-neutral-300"
          disabled={submission.pending}
        >
          {submission.pending ? "Submitting..." : "Submit"}
        </button>
        <Show when={submission.result?.error}>
          {(error) => <p class="text-red-500">{error()}</p>}
        </Show>
      </form>
      <Show when={lang() !== "text" && code().trim() !== ""}>
        <Preview lang={lang()} theme="snazzy-light" code={code()} />
      </Show>
    </div>
  );
};
