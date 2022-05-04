import { useMemo, useRef } from "react";
import monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Editor, { OnMount } from "@monaco-editor/react";
import { Button, message } from "antd";
import { Loading } from "../../components/Loading";
import { HomeContainer, EditorContainer, TitleContainer } from "./styles";

export const Home = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const now = useMemo(() => new Date().toLocaleDateString(), []);

  const handleMount: OnMount = (editor, _monaco) => {
    editorRef.current = editor;
    editor.setPosition({
      lineNumber: 5,
      column: 1
    });
    editor.focus();
  };

  const onPaste = () => {
    const edt = editorRef.current;
    if (typeof edt === "undefined") {
      message.error("Can not get editor!");
    } else {
      console.log(edt.getValue());
    }
  };

  return (
    <HomeContainer>
      <TitleContainer>
        Hello, PastePlz!
      </TitleContainer>
      <EditorContainer>
        <Editor
          width="100%"
          height="100%"
          defaultLanguage="cpp"
          defaultValue={`/**\n *  Author: unknown\n *  Date: ${now}\n */\n`}
          onMount={handleMount}
          loading={(
            <Loading
              maxDotNum={3}
              freshInterval={500}
            />
          )}
        />
      </EditorContainer>
      <Button
        type="primary"
        size="large"
        onClick={onPaste}
      >
        OK~
      </Button>
    </HomeContainer>
  );
};
