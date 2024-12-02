import { JSX, Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { MetaProvider, Title } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";
import { ShikiProvider } from "~/highlighter";
import { Corner, Header } from "~/components";
import "./app.css";

interface RootProps {
  children?: JSX.Element;
}

const Root = (props: RootProps) => (
  <MetaProvider>
    <Title>PastePlz</Title>
    <Suspense>
      <Corner url="https://github.com/Nikaidou-Shinku/PastePlz" />
      <Header />
      {props.children}
    </Suspense>
  </MetaProvider>
);

export default () => (
  <ShikiProvider>
    <Router root={Root}>
      <FileRoutes />
    </Router>
  </ShikiProvider>
);
