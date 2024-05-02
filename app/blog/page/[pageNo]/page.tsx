import fs from 'fs';
import path from 'path';
import Post from '../../../ui/Post';
import Link from 'next/link';
import Pagination from '@/app/ui/Pagination';
import { getPosts } from '@/app/lib/posts';

export async function generateStaticParams(){
  const files = fs.readdirSync(path.join('posts'));
  const totalPages = Math.ceil(files.length/3);
  const pages = [];
  for(let i = 1; i <= totalPages; i++){
    pages.push(
      {
        pageNo: String(i),
      }
    )
  }
  return pages;
}

const page = ({params} : {params: {
    pageNo: string,
}}) => {
    const files = fs.readdirSync(path.join('posts'));
    const totalPages = Math.ceil(files.length/3);
    const currentPage = Number(params.pageNo);
    if(currentPage > totalPages){
        return (
            <div className="h-full w-full px-12 py-8 flex justify-center flex-col items-center">
                <h1 className='text-5xl font-bold mb-8'>404</h1>
                <p className='text-slate-500 mb-4'>
                    Sorry, this page does not exist.
                </p>
                <Link href='/' className='text-blue-500'>Go back</Link>
            </div>
        )
    }
    const posts = getPosts();
    const orderedPosts = posts.slice((currentPage-1)*3, Math.min(files.length, currentPage*3));
  return (
    <div className="h-full w-full px-12 py-8">
      <h1 className='text-3xl font-bold mb-8'>Latest posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {orderedPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage}/>
    </div>
  )
}

export default page