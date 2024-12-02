import { createSignal, For } from "solid-js";
import { action, redirect } from "@solidjs/router";
import { supportedLanguages } from "~/constants";
import { newPaste, validatePaste } from "~/utils/db";
import { Button, Editor } from "~/components";

const postNewPaste = action(async (formData: FormData) => {
  "use server";
  const lang = String(formData.get("lang"));
  const content = String(formData.get("content"));

  console.log("[lang]", lang);
  console.log("[content]", content);

  const err = validatePaste(lang, content);

  console.log("[err]", err);

  if (err) {
    return new Error(err);
  }

  try {
    const res = await newPaste(lang, content);
    return redirect(`/${res.id}`);
  } catch (err) {
    return err as Error;
  }
});

export default () => {
  const [lang, setLang] = createSignal("text");

  return (
    <form
      class="mt-3 flex flex-col items-center sm:mt-6 lg:mt-12"
      action={postNewPaste}
      method="post"
    >
      {/* TODO: styles */}
      <div class="my-4 flex w-full justify-evenly text-xl">
        <div class="space-x-2">
          <label for="lang">Language:</label>
          <select
            id="lang"
            name="lang"
            class="border p-1"
            onInput={(e) => setLang(e.currentTarget.value)}
          >
            <For each={Object.entries(supportedLanguages)}>
              {([key, value]) => (
                <option value={key} selected={lang() === key}>
                  {value}
                </option>
              )}
            </For>
          </select>
        </div>
        <Button type="submit">Submit</Button>
      </div>
      <Editor name="content" lang={lang()} />
    </form>
  );
};
