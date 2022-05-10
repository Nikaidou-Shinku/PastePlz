import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
`;

export const EditorContainer = styled.div`
  width: min(80%, 1280px);
  height: 60%;

  border-style: groove;
  border-width: medium;

  &.light-theme {
    background-color: white;
    border-color: rgb(238, 238, 238);
  }

  &.dark-theme {
    background-color: rgb(30, 30, 30);
    border-color: rgb(17, 17, 17);
  }

  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
`;
