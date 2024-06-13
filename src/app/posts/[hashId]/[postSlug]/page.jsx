"use client";
import { toPersianDigits } from "@/utils/toPersianDigits";
import {
  FaRegBookmark,
  FaLink,
  FaTelegramPlane,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import PostInteraction from "@/components/post/PostInteraction";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import PostList from "@/components/post/PostList";
import PostComments from "@/components/PostComments/PostComments";
import { useCookies } from 'next-client-cookies';
import http from "@/services/httpService";

const PostPage = ({ params }) => {
  const [post, setPost] = useState(null);
  const [copied, setCopied] = useState(false);
  const cookies = useCookies();
  const userToken = cookies.get('userToken');

  useEffect(() => {
    const getPostData = async () => {
      try {
        const {
          data: { data },
        } = await http.get(
          `/posts/${params.postSlug}`,
          {
            catch: "no-store",
            headers: {
              Cookie: userToken || "",
            },
          }
        );
        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    getPostData();
  }, []);

  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  if (!post) return <div className="text-center mt-20">loading...</div>;
  return (
    <div className="container mx-auto lg:max-w-screen-xl">
      <header className="px-3 mb-20 flex flex-col sm:flex-row justify-between items-center max-w-screen-md mx-auto">
        <article className="flex mb-4 sm:mb-0">
          <img
            src="/images/nuxtjs.jpg"
            alt="writer"
            className="ml-4 w-16 h-16 rounded-full object-cover"
          />
          {/* info */}
          <div>
            <div className="flex justify-between items-center mb-0.5">
              <p className="font-bold">{post.author.name}</p>
              <Link href={`/blogs/${post.category.englishTitle}`}>
                <button className="px-2 rounded-2xl border border-blue-600 text-xs text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                  {post.category.title}
                </button>
              </Link>
            </div>
            <p className="text-xs mb-1">{post.author.biography}</p>
            <p className="text-sm">
              {new Date(post.createdAt).toLocaleDateString("fa-IR")} &bull;
              خواندن {toPersianDigits(`${post.readingTime}`)} دقیقه
            </p>
          </div>
        </article>
        <article className="w-36 flex justify-between">
          <CopyToClipboard
            text={`http://localhost:3000/posts/${post.hashId}/${post.slug}`}
            onCopy={copyHandler}
          >
            <button className="relative flex items-center border border-gray-600 rounded-2xl transition-all duration-300 hover:bg-gray-600 hover:text-white px-2 py-1">
              لینک <FaLink className="mr-1" />{" "}
              {copied ? (
                <span className="absolute top-6 left-12 w-16 inline-block px-2 py-1 rounded-2xl rounded-tl bg-blue-500 text-white z-10">
                  کپی شد
                </span>
              ) : null}
            </button>
          </CopyToClipboard>
          <button className="flex items-center border border-gray-600 rounded-2xl transition-all duration-300 hover:bg-gray-600 hover:text-white px-2 py-1">
            ذخیره <FaRegBookmark className="mr-1" />{" "}
          </button>
        </article>
      </header>
      <main className="mb-8 px-3 prose prose-xl prose-img:rounded-xl prose-h1:text-2xl prose-h1:font-black prose-h3:text-xl prose-h3:font-black sm:prose-h1:text-3xl sm:prose-h3:text-2xl max-w-screen-md mx-auto">
        <h1>{post.title}</h1>
        <div className="mb-28 w-full mx-auto aspect-w-16 aspect-h-9">
          <img
            src={post.coverImage}
            alt={post.englishTitle}
            className="object-cover"
          />
        </div>
        <h3>عنوان تستی اول</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <h3>عنوان تستی دوم</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </main>
      <section className="px-3 sm:px-0 max-w-screen-md mx-auto flex gap-x-4 gap-y-2 mb-8 flex-wrap">
        {["React.js", "Next.js", "Node.js", "Vue.js"].map((category) => {
          return (
            <div
              className="px-3 py-0.5 rounded-2xl bg-gray-400 text-gray-700 text-sm"
              key={category}
            >
              {category}
            </div>
          );
        })}
      </section>
      <section className="flex justify-between items-center px-3 sm:px-0 max-w-screen-md mx-auto gap-x-4">
        <PostInteraction blog={post} />
        <div className="flex gap-x-4 text-xl text-gray-500">
          <a
            target="_blank"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.DOMAIN_URL}/posts/${post.hashId}/${post.slug}&text=${post.title}`}
            className="transition-all duration-500 hover:text-black"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href={`https://telegram.me/share/url?url=${process.env.DOMAIN_URL}/posts/${post.hashId}/${post.slug}&text=${post.title}`}
            className="transition-all duration-500 hover:text-black"
          >
            <FaTelegramPlane />
          </a>
          <a
            target="_blank"
            href={`https://twitter.com/share?text=${post.title}&url=${process.env.DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
            className="transition-all duration-500 hover:text-black"
          >
            <FaTwitter />
          </a>
        </div>
      </section>
      {/* related posts */}
      <section className="my-10 max-w-screen-md mx-auto">
        <div className="mb-5 w-full h-0.5 bg-black"></div>
        <h1 className="mb-5 text-3xl font-black">پست های مشابه</h1>
        <div className="px-12 sm:px-0">
          <PostList blogData={post.related} />
        </div>
      </section>
      {/* comments */}
      <section className="max-w-screen-md mx-auto mb-20">
        <PostComments post={post} />
      </section>
    </div>
  );
};

export default PostPage;
