import { useParams } from "react-router-dom";
import { MainLayout, MainSection } from "../components/layouts";
import { BlogDetails } from "../components/blogs/blog-details";
import { useGetUserQuery } from "../lib/features/users/users-api-slice";
import { useGetBlogQuery } from "../lib/features/blogs/blogs-api-slice";

export const BlogDetailsPage = () => {
  const { blogId } = useParams();

  const { data: blogData } = useGetBlogQuery(blogId, { skip: !blogId });

  const userId = blogData?.userId;

  const { data: userData } = useGetUserQuery(userId, { skip: !userId });

  return (
    <MainLayout>
      <MainSection>
        <h1>Details</h1>
        <BlogDetails blog={blogData} author={userData?.name} />
      </MainSection>
    </MainLayout>
  );
};
