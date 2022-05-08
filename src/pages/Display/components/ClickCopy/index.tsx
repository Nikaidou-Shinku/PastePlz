import { useCallback } from "react";
import { Button, message } from "antd";

export interface IClickCopyProps {
  title: string;
  text: string;
  msg: string;
}

export const ClickCopy = ({
  title,
  text,
  msg
}: IClickCopyProps) => {
  const copyText = useCallback(() => {
    const input = document.createElement("textarea");
    input.value = text;
    document.getElementById("root")?.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.getElementById("root")?.removeChild(input);
    message.success(msg);
  }, [text, msg]);

  return (
    <Button
      type="primary"
      onClick={copyText}
    >
      {title}
    </Button>
  );
};
