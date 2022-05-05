import { useRef, useState } from "react";
import monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Editor, { OnMount } from "@monaco-editor/react";
import { Button, message } from "antd";
import { Loading } from "../../components";
import { SettingLine, Title } from "./components";
import { IndentType } from "./components/SettingLine/IndentSelect";
import { HomeContainer, EditorContainer } from "./styles";

export const Home = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const [lang, setLanguage] = useState("cpp");
  const [replaceTabWithSpaces, setUseSpaces] = useState(true);
  const [indentLength, setIndentLength] = useState(4);
  const [ok, setOk] = useState(false);

  const handleMount: OnMount = (editor, _monaco) => {
    editorRef.current = editor;
    editor.focus();
    setOk(true);
  };

  const onPaste = () => {
    const edt = editorRef.current;
    if (typeof edt === "undefined") {
      message.error("Unable to get editor!");
    } else {
      console.log(edt.getValue()); // TODO: submit content to backend
    }
  };

  const setIndent = (value: IndentType) => {
    setUseSpaces(value[0] === "spaces");
    setIndentLength(parseInt(value[1]));
  };

  return (
    <HomeContainer>
      <Title title="PastePlz" />
      <EditorContainer>
        <SettingLine
          setLanguage={setLanguage}
          setIndent={setIndent}
        />
        <Editor
          width="100%"
          height="calc(100% - 50px)"
          language={lang}
          onMount={handleMount}
          loading={(
            <Loading
              maxDotNum={3}
              freshInterval={500}
            />
          )}
          options={{
            tabSize: indentLength,
            insertSpaces: replaceTabWithSpaces,
            detectIndentation: false
          }}
        />
      </EditorContainer>
      {
        ok && (
          <Button
            type="primary"
            size="large"
            onClick={onPaste}
          >
            OK~
          </Button>
        )
      }
    </HomeContainer>
  );
};
