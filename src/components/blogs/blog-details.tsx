import { AppOrg, Blog } from "../../types";
import { sanitizeTitle } from "../../utils";

interface BlogDetailsProps {
  blog?: Blog;
  author?: string;
}

export const BlogDetails = ({ blog, author = "" }: BlogDetailsProps) => {
  const { title = "", body = "" } = blog || {};
  return (
    <div className="blog-details">
      <div className="blog-details-image-block">
        <img
          className="blog-card-image blog-details-image"
          src={AppOrg.BlogImageUrl}
        />
      </div>
      <div>
        <h2>{sanitizeTitle(title)}</h2>
      </div>
      <div>
        <h4>by {author}</h4>
      </div>
      <div>{sanitizeTitle(body)}</div>
    </div>
  );
};
