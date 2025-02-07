import { JSX, Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";

interface RootProps {
  children?: JSX.Element;
}

const Root = (props: RootProps) => <Suspense>{props.children}</Suspense>;

export default () => (
  <Router root={Root}>
    <FileRoutes />
  </Router>
);
