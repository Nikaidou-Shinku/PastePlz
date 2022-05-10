import { CSSProperties } from "react";
import { TypedText } from "..";
import { TitleContainer } from "./styles";

export interface ITitleProps {
  title: string;
  style?: CSSProperties;
}

export const Title = ({
  title,
  style
}: ITitleProps) => (
  <TitleContainer style={style}>
    <TypedText
      texts={[
        `Hello,^750 ${title}!`,
        "Please feel free :)"
      ]}
    />
  </TitleContainer>
);
