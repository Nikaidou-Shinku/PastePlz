import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paste } from "../../interfaces";
import { Corner, Title } from "../../components";
import { BackButton, Content } from "./components";
import { HomeContainer } from "./styles";
import { ClickCopy } from "./components/ClickCopy";

export const Display = () => {
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
  }, []);

  return (
    <>
      <Corner link="https://github.com/Nikaidou-Shinku/PastePlz" />
      <BackButton
        style={{
          position: "absolute",
          left: "60px",
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
            lang={data.lang}
            content={data.content}
          />
        </div>
      </HomeContainer>
    </>
  );
};
