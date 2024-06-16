import PostList from "@/components/post/PostList";
import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import SortBar from "@/components/SortBar/SortBar";
import { cookies } from "next/headers";
import http from "@/services/httpService";
import queryString from 'query-string';
import PaginationComponent from "@/components/Pagination/Pagination";



const getAllPosts = async ({ categorySlug } , searchParams) => {
  const cookieStore = cookies();
  const sort = queryString.stringify(searchParams);


  try {
    const { data } = await http.get(
      `/posts?categorySlug=${categorySlug}&${sort}`,
      {
        catch: "no-store",
        headers: {
          Cookie: cookieStore || "",
        },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getCategories = async () => {
  try {
    const { data } = await http.get("http://localhost:5000/api/post-category", { catch: "no-store" });
    return data;
  } catch (err) {
    console.error(err);
  }
};

const CategoryPage = async ({ params , searchParams}) => {
  const blogs = await getAllPosts(params , searchParams);
  const categories = await getCategories();

  return (
    <main className="container mx-auto lg:max-w-screen-xl px-3">
      <div className="grid gap-5 md:grid-cols-12 min-h-screen md:grid-rows-[60px_minmax(300px,_1fr)]">
        {/* category */}
        <CategoryMenu categories={categories} />
        {/* sortBar */}
        <SortBar />
        {/* blogs */}
        <PostList blogData={blogs.data.docs} categoryPage={true} />
        {blogs.data.totalPages > 1 ? (
          <PaginationComponent count={blogs.data.totalPages} />
        ) : (
          ""
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
