import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

export interface IBackButtonProps {
  style: CSSProperties;
}

export const BackButton = ({
  style
}: IBackButtonProps) => {
  const navigate = useNavigate();
  return (
    <Tooltip title="Back to homepage">
      <Button
        type="primary"
        shape="circle"
        icon={<DoubleLeftOutlined />}
        size="large"
        onClick={() => navigate("/")}
        style={style}
      />
    </Tooltip>
  );
};
