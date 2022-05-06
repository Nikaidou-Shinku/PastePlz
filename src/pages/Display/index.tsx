import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paste } from "../../interfaces";
import { Corner, Title } from "../../components";
import { Content } from "./components/Content";
import { HomeContainer } from "./styles";

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
      <HomeContainer>
        <Title title="PastePlz" />
        <Content
          lang={data.lang}
          content={data.content}
          style={{ width: "min(80%, 1280px)" }}
        />
      </HomeContainer>
    </>
  );
};
