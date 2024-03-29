import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from './ui/Post';
import Link from 'next/link';

export default function Home() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((file) => {
    const contentWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
    const {data: frontmatter} = matter(contentWithMeta);
    return {
      slug: file.replace('.md', ''),
      frontmatter: frontmatter,
    }
  });
  const sortedPosts = posts.sort((a, b) => (
     new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )).slice(0, 6);
  return (
    <main className="h-full w-full px-12 py-8">
      <h1 className='text-3xl font-bold mb-8'>Latest posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {sortedPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <Link href='/blog' className='px-5 py-3 bg-black text-white hover:bg-white hover:text-black hover:border-black
      hover:border border-gray-500 border transition-all box-border my-8 duration-300 ease-linear'>
        View all posts
      </Link>
    </main>
  ); 
}
