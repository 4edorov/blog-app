import { Link } from "react-router-dom";
import { AppOrg, Blog } from "../../types";
import { sanitizeTitle } from "../../utils";

interface BlogCardProps {
  blog: Blog;
  author?: string;
}

export const BlogCard = ({ blog, author = "" }: BlogCardProps) => {
  const { title = "", id } = blog;

  return (
    <div className="blog-card">
      <div className="blog-card-left">
        <div>
          <img
            key={title}
            className="blog-card-image"
            src={AppOrg.BlogImageUrl}
          />
        </div>
      </div>
      <div className="blog-card-right">
        <div className="blog-card-title">
          <h3>{sanitizeTitle(title)}</h3>
        </div>
        <div className="blog-card-author">Author: {author}</div>
        <div className="blog-card-more">
          <Link to={`/details/${id}`}>
            <button className="blog-card-view-btn">Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
