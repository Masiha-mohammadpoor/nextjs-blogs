import PostList from "@/components/post/PostList";
import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import SortBar from "@/components/SortBar/SortBar";
import { cookies } from "next/headers";
import http from "@/services/httpService";

const getAllPosts = async ({ categorySlug }) => {
  const cookieStore = cookies();
  try {
    const { data } = await http.get(
      `/posts?limit=6&page=1&categorySlug=${categorySlug}`,
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

const CategoryPage = async ({ params }) => {
  const blogs = await getAllPosts(params);
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
      </div>
    </main>
  );
};

export default CategoryPage;
