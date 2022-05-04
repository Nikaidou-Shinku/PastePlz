import { useParams } from "react-router-dom";

export const Display = () => {
  const params = useParams();

  return (
    <h1>Hello, post `{params.id}`!</h1>
  );
};
