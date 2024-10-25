import { useGetBlogsQuery } from "../lib/features/blogs/blogs-api-slice";

export const BlogPage = () => {
  const { data } = useGetBlogsQuery(1);

  console.log("data", data);
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
};
