import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;  

  .content-container {
    margin-top: 100px;
    width: min(80%, 1280px);
  }

  .tool-buttons {
    display: flex;
    justify-content: flex-end;

    > button {
      margin: 0 5px;
    }
  }
`;
