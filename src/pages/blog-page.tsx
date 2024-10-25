import { MainLayout, MainSection } from "../components/layouts";
import { Pagination } from "../components/blogs/paginations";
import { BlogCard } from "../components/blogs/blog-card";
import { useGetBlogsQuery } from "../lib/features/blogs/blogs-api-slice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
  selectLimit,
  selectPage,
} from "../lib/features/pagination/pagination-slice";
import { useGetUsersQuery } from "../lib/features/users/users-api-slice";
import { useMemo } from "react";
import { openModal } from "../lib/features/modal/modal-slice";

export const BlogPage = () => {
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);

  const dispatch = useAppDispatch();

  const { data: blogsData } = useGetBlogsQuery({
    page,
    limit,
  });

  const { data: usersData } = useGetUsersQuery();

  const usersNameMap = useMemo(() => {
    const map = new Map<number, string>();
    if (!usersData) {
      return map;
    }
    usersData.forEach((user) => {
      map.set(user.id, user.name);
    });
    return map;
  }, [usersData]);

  return (
    <MainLayout>
      <MainSection>
        <h1>Blogs</h1>
        <div className="create-blog-modal">
          <button
            className="blog-card-view-btn pagination-btn"
            onClick={() => dispatch(openModal())}
          >
            Create
          </button>
        </div>
        {blogsData &&
          blogsData.map((blog, key) => {
            const author = usersNameMap?.get(blog.userId);
            return <BlogCard key={key} blog={blog} author={author} />;
          })}
        <Pagination />
      </MainSection>
    </MainLayout>
  );
};
