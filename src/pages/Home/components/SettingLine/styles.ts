import styled from "@emotion/styled";

export const SettingLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 40px;

  margin: 5px 0;

  &.dark-theme {
    .ant-select {
      color: rgba(255, 255, 255, 0.9);
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      background-color: rgb(30, 30, 30);
      border: 1px solid rgb(61, 61, 61);
    }

    .ant-select-arrow {
      color: rgba(255, 255, 255, 0.25);
    }
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 20px;
    margin-right: 5px;
  }
`;
