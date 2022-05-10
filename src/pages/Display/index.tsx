import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paste } from "../../interfaces";
import { Corner, Title, ThemeButton } from "../../components";
import { BackButton, ClickCopy, Content } from "./components";
import { Container } from "../styles";
import { HomeContainer } from "./styles";

export interface IDisplayProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Display = ({
  theme,
  setTheme
}: IDisplayProps) => {
  const now = new Date();
  const params = useParams();
  const token = params.token;

  const [data, setData] = useState<Paste>({
    lang: "markdown",
    content: "## Loading\n\nPlease wait for the loading to complete...",
    time: now
  });

  useEffect(() => {
    const handle = async () => {
      const resp = await fetch(`/api/paste/${token}`, { method: "GET" });
      const info = await resp.json();
      if (resp.status === 200) {
        return {
          lang: info.lang,
          content: info.content,
          time: new Date(info.time)
        };
      } else {
        return {
          lang: "markdown",
          content: `## Error\n\n${info.error}`,
          time: now
        };
      }
    };

    handle().then((res) => setData(res));
  }, [token]);

  return (
    <Container className={`${theme}-theme`}>
      <Corner
        theme={theme}
        link="https://github.com/Nikaidou-Shinku/PastePlz"
      />
      <BackButton
        style={{
          position: "absolute",
          left: "60px",
          top: "60px"
        }}
      />
      <ThemeButton
        theme={theme}
        setTheme={setTheme}
        style={{
          position: "absolute",
          left: "130px",
          top: "60px"
        }}
      />
      <HomeContainer>
        <Title
          title="PastePlz"
          style={{ marginTop: "100px" }}
        />
        <div className="content-container">
          <div className="tool-buttons">
            <ClickCopy
              title="Share"
              text={window.location.href}
              msg="Share link copied successfully!"
            />
            <ClickCopy
              title="Copy"
              text={data.content}
              msg="Code copied successfully!"
            />
          </div>
          <Content
            theme={theme}
            lang={data.lang}
            content={data.content}
          />
        </div>
      </HomeContainer>
    </Container>
  );
};
