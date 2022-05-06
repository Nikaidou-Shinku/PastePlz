import { CSSProperties } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface IContentProps {
  lang: string;
  content: string;
  style?: CSSProperties;
}

export const Content = ({
  lang,
  content,
  style
}: IContentProps) => (
  <SyntaxHighlighter
    showLineNumbers
    language={lang}
    style={vscDarkPlus}
    customStyle={style}
  >
    {content}
  </SyntaxHighlighter>
);
