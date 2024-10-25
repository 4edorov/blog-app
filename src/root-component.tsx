import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutePath } from "./types";
import { NotFoundPage } from "./pages/not-found-page";
import { BlogPage } from "./pages/blog-page";
import { BlogDetailsPage } from "./pages/blog-details-page";
import "./styles/main.sass";
import { useAppSelector } from "./lib/hooks";
import { selectIsModalOpen } from "./lib/features/modal/modal-slice";
import { CreateBlogModal } from "./components/blogs/create-blog-modal";

export const RootComponent = () => {
  const isModalOpen = useAppSelector(selectIsModalOpen);

  return (
    <>
      {isModalOpen && <CreateBlogModal />}
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={RoutePath.BlogHome} element={<BlogPage />} />
          <Route path={RoutePath.BlogDetails} element={<BlogDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
};
