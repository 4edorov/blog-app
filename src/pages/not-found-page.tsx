import { useNavigate } from "react-router-dom";
import { RoutePath } from "../types";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate(RoutePath.BlogHome);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "4em" }}>Oops 404!</h1>
      <span style={{ cursor: "pointer" }} onClick={() => redirectToHomePage()}>
        BlogHome
      </span>
    </div>
  );
};
