import { JSX } from "solid-js";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export default (props: ButtonProps) => {
  // TODO: styles
  return <button {...props}></button>;
};
