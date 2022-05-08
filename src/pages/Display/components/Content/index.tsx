import { CSSProperties } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface IContentProps {
  lang: string;
  content: string;
}

export const Content = ({
  lang,
  content
}: IContentProps) => (
  <SyntaxHighlighter
    showLineNumbers
    language={lang}
    style={vscDarkPlus}
  >
    {content}
  </SyntaxHighlighter>
);
