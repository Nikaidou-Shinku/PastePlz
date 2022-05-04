export const cfg = {
  monacoCDN: "https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.33.0/min/vs",
  langs: [
    { value: "markdown", label: "Markdown" },
    { value: "cpp", label: "C/C++" }, // necessary
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" }
  ],
  indents: [
    {
      value: "spaces",
      label: "Spaces",
      children: [
        { value: "2", label: "2 Spaces" },
        { value: "4", label: "4 Spaces" }  // necessary
      ]
    },
    {
      value: "tabs",
      label: "Tabs",
      children: [
        { value: "2", label: "Length 2" },
        { value: "4", label: "Length 4" }
      ]
    }
  ]
};
