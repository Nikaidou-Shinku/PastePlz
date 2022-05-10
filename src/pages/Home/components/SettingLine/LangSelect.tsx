import { Select } from "antd";
import { SelectContainer } from "./styles";

interface LangSetting {
  value: string;
  label: string;
}

export interface ILangSelectProps {
  langs: LangSetting[];
  setLanguage: (value: string) => void;
}

export const LangSelect = ({
  langs,
  setLanguage
}: ILangSelectProps) => (
  <SelectContainer>
    <span>
      Language:
    </span>
    <Select
      size="large"
      style={{ width: "120px" }}
      defaultValue="cpp"
      onChange={(value) => { setLanguage(value); }}
      options={langs}
    />
  </SelectContainer>
);
