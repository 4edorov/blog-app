import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutePath } from "./types";
import { NotFoundPage } from "./pages/not-found-page";
import { BlogPage } from "./pages/blog-page";
import { BlogDetailsPage } from "./pages/blog-details-page";

export const RootComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={RoutePath.BlogHome} element={<BlogPage />} />
        <Route path={RoutePath.BlogDetails} element={<BlogDetailsPage />} />
      </Routes>
    </Router>
  );
};
