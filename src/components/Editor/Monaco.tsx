import { Accessor, createEffect, createSignal, onCleanup, onMount, Setter } from "solid-js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "./userWorker";

interface MonacoProps {
  lang: Accessor<string>;
  setEditor: Setter<monaco.editor.IStandaloneCodeEditor>;
}

const Monaco = (props: MonacoProps) => {
  const [editor, setEditor] = createSignal<monaco.editor.IStandaloneCodeEditor>();
  let monacoEl: HTMLDivElement | undefined;

  onMount(() => {
    if (typeof monacoEl === "undefined") {
      throw new Error("monacoEl is undefined");
    }

    const edt = monaco.editor.create(monacoEl, {
      value: "",
      language: props.lang(),
      theme: "vs-dark",
    });

    setEditor(edt);
    props.setEditor(edt);
  });

  createEffect(() => {
    const edt = editor();

    if (typeof edt === "undefined") {
      return;
    }

    const model = edt.getModel();

    if (model === null) {
      return;
    }

    monaco.editor.setModelLanguage(model, props.lang());
  });

  onCleanup(() => {
    const edt = editor();

    if (typeof edt !== "undefined") {
      edt.dispose();
    }
  });

  return <div class="editor" ref={monacoEl}></div>;
};

export default Monaco;
