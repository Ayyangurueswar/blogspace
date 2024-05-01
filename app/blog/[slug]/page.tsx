import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import CategoryLabel from '@/app/ui/CategoryLabel';
import Image from 'next/image';


const page = ({params}: {params: {
    slug: string,
}}) => {
  const files = fs.readdirSync(path.join('posts'));
  if(!files.find((file) => file === params.slug + '.md')){
    return (
        <div className="h-full w-full px-12 py-8 flex flex-col items-center">
            <h1 className='text-5xl font-bold mb-8'>404</h1>
            <div className="text-slate-500">Sorry, this post does not exist.</div>
        </div>
    )
  }
  const markdownWithMeta = fs.readFileSync(path.join('posts', params.slug + '.md'), 'utf-8');
  const {data: frontmatter, content} = matter(markdownWithMeta);
  return (
    <div className="h-full w-full px-12 py-8">
        <Link href='/' className='mb-4'>
            Go back
        </Link>
        <div className='w-full flex flex-col shadow-slate-400 shadow-lg gap-4 p-5 items-center'>
            <div className='flex w-full justify-between items-center'>
                <h2 className='text-3xl font-bold'>{frontmatter.title}</h2>
                <CategoryLabel category={frontmatter.category}/>
            </div>
            <Image src={frontmatter.cover_image} alt={frontmatter.title} width={750} height={700}/>
            <div className='w-full flex justify-between items-center p-3 bg-slate-100'>
                <div className='flex gap-2 items-center'>
                    <Image src={frontmatter.author_image} alt={frontmatter.author} width={30} height={10} className='rounded-full'/>
                    <p>{frontmatter.author}</p>
                </div>
                <p>{frontmatter.date}</p>
            </div>
            <div className="blog-text" dangerouslySetInnerHTML={{__html: marked(content)}}></div>
        </div>
    </div>
  )
}

export default page