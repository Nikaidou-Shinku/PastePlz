import { TypedText } from "..";
import { TitleContainer } from "./styles";

export interface ITitleProps {
  title: string;
}

export const Title = ({
  title
}: ITitleProps) => {
  return (
    <TitleContainer>
      <TypedText
        texts={[
          `Hello,^750 ${title}!`,
          "Please feel free :)"
        ]}
      />
    </TitleContainer>
  );
};
