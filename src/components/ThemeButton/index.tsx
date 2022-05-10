import { CSSProperties, useCallback } from "react";
import { Button, Tooltip } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";

export interface IThemeButtonProps {
  theme: string;
  setTheme: (theme: string) => void;
  style: CSSProperties;
}

export const ThemeButton = ({
  theme,
  setTheme,
  style
}: IThemeButtonProps) => {
  const title = theme === "light" ? "Dark theme" : "Light theme";

  const changeTheme = useCallback(() => {
    if (theme === "light")
      setTheme("dark");
    else setTheme("light");
  }, [theme, setTheme]);

  return (
    <Tooltip title={title}>
      <Button
        type="primary"
        shape="circle"
        icon={theme === "light" ?  <BulbOutlined /> : <BulbFilled />}
        size="large"
        onClick={changeTheme}
        style={style}
      />
    </Tooltip>
  );
};
