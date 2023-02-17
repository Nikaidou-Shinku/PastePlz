import { createEffect, createSignal, For, onMount } from "solid-js";
import type * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import Monaco from "./Monaco";
import { API_URL, langDisplay, supportedLangs } from "../../consts";

const submit = async (lang: string, content: string): Promise<string | null> => {
  const resp = await fetch(`${API_URL}/paste`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lang, content }),
  });

  if (resp.status !== 200) {
    return null;
  }

  const data = await resp.json();
  return data.token;
};

const Editor = () => {
  const [lang, setLang] = createSignal<keyof typeof supportedLangs>("md");
  const [editor, setEditor] = createSignal<monaco.editor.IStandaloneCodeEditor>();
  let langEl: HTMLSelectElement | undefined;
  let submitEl: HTMLButtonElement | undefined;

  onMount(() => {
    if (typeof langEl === "undefined") {
      throw new Error("langEl is undefined");
    }

    langEl.addEventListener("change", (e) => {
      // @ts-ignore
      setLang(e.target.value);
    });
  });

  createEffect(() => {
    if (typeof submitEl === "undefined") {
      throw new Error("submitEl is undefined");
    }

    const edt = editor();

    if (typeof edt === "undefined") {
      return;
    }

    submitEl.addEventListener("click", () => {
      const value = edt.getValue().trim();

      if (value === "") {
        alert("Cannot submit empty code");
      }

      submit(lang(), value).then((token) => {
        if (token === null) {
          alert("Something went wrong");
        } else {
          location.assign(`/${token}`);
        }
      });
    });
  });

  const monacoLang = () => supportedLangs[lang()];

  return (
    <div class="container">
      <div class="config">
        <div>
          <label for="lang">Language: </label>
          <select id="lang" ref={langEl}>
            <For each={Object.entries(langDisplay)}>
              {([key, value]) => (
                <option value={key} selected={lang() === key}>
                  {value}
                </option>
              )}
            </For>
          </select>
        </div>
        <button ref={submitEl}>Submit</button>
      </div>
      <Monaco lang={monacoLang} setEditor={setEditor} />
    </div>
  );
};

export default Editor;
