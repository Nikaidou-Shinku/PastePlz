import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Editor, { OnMount } from "@monaco-editor/react";
import { Button, message } from "antd";
import { Corner, Loading, Title } from "../../components";
import { SettingLine } from "./components";
import { IndentType } from "./components/SettingLine/IndentSelect";
import { HomeContainer, EditorContainer } from "./styles";

export const Home = () => {
  const navigate = useNavigate();

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

  const submit = async (code: string) => {
    const resp = await fetch("/api/paste", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        lang: lang,
        content: code
      })
    });
    const info = await resp.json();
    if (resp.status === 201) {
      return {
        status: "ok",
        token: info.token
      };
    } else {
      return {
        status: "error",
        msg: info.error
      };
    }
  };

  const onPaste = () => {
    const edt = editorRef.current;
    if (typeof edt === "undefined") {
      message.error("Unable to get editor!");
    } else {
      submit(edt.getValue().trim()).then((res) => {
        if (res.status === "error") {
          message.error(res.msg);
        } else {
          navigate(`/${res.token}`)
        }
      });
    }
  };

  const setIndent = (value: IndentType) => {
    setUseSpaces(value[0] === "spaces");
    setIndentLength(parseInt(value[1]));
  };

  return (
    <>
      <Corner link="https://github.com/Nikaidou-Shinku/PastePlz" />
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
        <Button
          type="primary"
          size="large"
          onClick={onPaste}
          style={ok ? {} : { visibility: "hidden" }}
        >
          OK~
        </Button>
      </HomeContainer>
    </>
  );
};
