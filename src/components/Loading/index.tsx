import { useEffect, useState } from "react";
import { LoadingContainer } from "./styles";

const getDots = (num: number): string => {
  let res = "Loading ";
  for (let i = 0; i < num; ++ i)
    res += ".";
  return res;
};

export interface ILoadingProps {
  maxDotNum: number;
  freshInterval: number;
}

export const Loading = ({
  maxDotNum,
  freshInterval
}: ILoadingProps) => {
  const [dotNum, setDot] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setDot(dotNum % maxDotNum + 1);
    }, freshInterval);
  }, [dotNum]);

  return (
    <LoadingContainer>
      {getDots(dotNum)}
    </LoadingContainer>
  );
};
