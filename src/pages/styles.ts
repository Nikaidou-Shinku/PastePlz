import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;

  &.light-theme {
    background-color: rgb(240, 240, 240);

    .ant-btn-primary {
      border-color: #6200EE;
      background-color: #6200EE;
    }
  }
  
  &.dark-theme {
    color: rgba(255, 255, 255, 0.9);
    background-color: rgb(18, 18, 18);

    .ant-btn-primary {
      border-color: #BB86FC;
      background-color: #BB86FC;
    }
  }

  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
`;
