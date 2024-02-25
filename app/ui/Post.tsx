import Image from "next/image"
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

interface Post {
    slug: string;
    frontmatter: {
        [key: string]: any;
    };
}
const Post = (post: Post) => {
  return (
    <div className="rounded-lg px-12 py-8 w-full shadow-slate-400 shadow-lg flex flex-col justify-between items-center
     hover:scale-105 transition-all h-full">
        <Image src={post.frontmatter.cover_image} alt={post.frontmatter.title} width={420} height={600}/>
        <div className="w-full h-full">
          <div className="flex justify-between my-4 items-center">
            <p className="text-gray-500">{post.frontmatter.date}</p>
            <CategoryLabel category={post.frontmatter.category} />
          </div>
          <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600">
            <h2 className="text-xl font-bold">{post.frontmatter.title}</h2>
          </Link>
          <p className="text-gray-500 my-4">{post.frontmatter.excerpt}</p>
          <div className="flex w-full justify-between items-center">
            <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600">
              Read more
            </Link>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500 hidden sm:block">{post.frontmatter.author}</p>
              <Image src={post.frontmatter.author_image} width={30} height={30} className="rounded-full hidden sm:block"
              alt="Author image"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Post