import styled from "@emotion/styled";
import { Typography } from "antd";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled(Typography.Title)`
  margin: 100px 0;
`;

export const EditorContainer = styled.div`
  margin: 20px 0;

  width: min(80%, 1280px);
  height: 720px;

  background-color: white;
  border: groove;
`;
