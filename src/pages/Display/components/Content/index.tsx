import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface IContentProps {
  theme: string;
  lang: string;
  content: string;
}

export const Content = ({
  theme,
  lang,
  content
}: IContentProps) => (
  <SyntaxHighlighter
    showLineNumbers
    language={lang}
    style={theme === "light" ? vs : vscDarkPlus}
  >
    {content}
  </SyntaxHighlighter>
);
