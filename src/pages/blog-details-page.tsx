import { MainLayout, MainSection } from "../components/layouts";
import { useGetUserQuery } from "../lib/features/users/users-api-slice";

export const BlogDetailsPage = () => {
  const { data: userData } = useGetUserQuery(1);

  console.log("userData", userData);
  return (
    <MainLayout>
      <MainSection>
        <h1>Blog Details Page</h1>
      </MainSection>
    </MainLayout>
  );
};
