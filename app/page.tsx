import Post from './ui/Post';
import Link from 'next/link';
import { getPosts } from './lib/posts';
import Sidebar from './ui/Sidebar';

export default function Home() {
  const posts = getPosts();
  const mainPosts = posts.slice(0,6);
  return (
    <main className="h-full w-full px-12 py-8">
      <h1 className='text-3xl font-bold mb-8'>Latest posts</h1>
      <div className='w-full flex gap-4 mb-14'>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-2/3">
          {mainPosts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
        <Sidebar posts={posts}/>
      </div>
      <Link href='/blog/page/1' className='px-5 py-3 bg-black text-white hover:bg-white hover:text-black hover:border-black
      hover:border border-gray-500 border transition-all box-border my-8 duration-300 ease-linear'>
        View all posts
      </Link>
    </main>
  ); 
}
