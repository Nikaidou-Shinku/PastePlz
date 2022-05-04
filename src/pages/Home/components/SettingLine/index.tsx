import { LangSelect } from "./LangSelect";
import { SettingLineContainer } from "./styles";
import { cfg } from "../../../../../pasteplz.config";
import { IndentSelect, IndentType } from "./IndentSelect";

export interface ISettingLineProps {
  setLanguage: (name: string) => void;
  setIndent: (value: IndentType) => void;
}

export const SettingLine = ({
  setLanguage,
  setIndent
}: ISettingLineProps) => {
  const langs = cfg.langs;
  const indents = cfg.indents;

  if (langs.length === 0) {
    return (
      <SettingLineContainer>
        <span>Error! Add at least one language(C/C++) to `pasteplz.config.ts`!</span>
      </SettingLineContainer>
    );
  }

  return (
    <SettingLineContainer>
      <LangSelect
        langs={langs}
        setLanguage={setLanguage}
      />
      <IndentSelect
        indents={indents}
        setIndent={setIndent}
      />
    </SettingLineContainer>
  );
};
