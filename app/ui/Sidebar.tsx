'use client';
import Link from "next/link"
import { useState } from "react";

const Sidebar = ({posts}: {
  posts: Array<any>
}) => {
  const categories = posts.map((post) => post.frontmatter.category);
    const uniqueCategories = new Set<string>(categories);
    const listCategories = new Array<string>();
    uniqueCategories.forEach((category) => {
      listCategories.push(category);
  })
  const [hidden, setHidden] = useState<boolean>(true);
  const [filteredPosts, setFilteredPosts] = useState<Array<any>>([]);
  const handleSearch = (searchTerm: string) => {
    if(searchTerm === '' || searchTerm === undefined){
      setHidden(true);
      return;
    }
    setHidden(false);
    const newPosts = posts.filter((post) => post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPosts(newPosts);
  }
  return (
    <div className='w-1/3 rounded border-2 border-slate-700 p-4 hidden sm:block h-1/2'>
        <div className='relative mb-8'>
            <input className='w-full p-2 border rounded-md border-slate-500 outline-none' placeholder='Search...' onChange={(e) => {handleSearch(e.target.value)}}/>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='w-7 h-7 absolute right-2 top-2 z-10'>
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
            <div className={`border border-slate-600 rounded p-2 ${hidden ? 'hidden' : ''} absolute z-10 bg-white flex flex-col gap-2 w-full`}>
              {filteredPosts.length === 0 ? (<p>No results</p>) :
              filteredPosts.map((post, index) => (
                <Link href={`/blog/${post.slug}`} key={index} className={`${index !== filteredPosts.length-1 ? 'border-b border-slate-700' : ''} text-slate-700 rounded p-2 w-full hover:bg-orange-500 hover:text-white transition-colors`}>
                  <h3 className="text-lg font-semibold">{post.frontmatter.title}</h3>
                  <p className="text-sm">{post.frontmatter.excerpt}</p>
                </Link>
              ))}
            </div>
        </div>
        <div>
            <h2 className='text-xl mb-4 underline'>Categories</h2>
            <div className='flex flex-col gap-2'>
            {listCategories.map((category) => (
              <Link href={`/blog/categories/${category.toLowerCase()}`} key={category} className={`text-slate-700 rounded p-2 w-full hover:bg-blue-500 hover:text-white transition-colors`}>
                  {category}
              </Link>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar