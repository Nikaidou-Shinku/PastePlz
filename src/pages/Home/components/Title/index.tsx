import { TypedText } from "../../../../components";
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
          "Hello,",
          `Hello, ${title}!`,
          "Please feel free :)"
        ]}
      />
    </TitleContainer>
  );
};
