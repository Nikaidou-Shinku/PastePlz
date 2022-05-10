import { Cascader } from "antd";
import { SelectContainer } from "./styles";

export type IndentType = [string, string];

interface IndentOption {
  value: string;
  label: string;
  children?: IndentOption[];
}

export interface IIndentSelectProps {
  indents: IndentOption[];
  setIndent: (value: IndentType) => void;
}

export const IndentSelect = ({
  indents,
  setIndent
}: IIndentSelectProps) => (
  <SelectContainer>
    <span>
      Indentation:
    </span>
    <Cascader
      allowClear={false}
      size="large"
      defaultValue={[ "spaces", "4" ]}
      onChange={(value) => { setIndent(value as IndentType); }}
      options={indents}
    />
  </SelectContainer>
);
