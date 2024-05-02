'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryList = ({listCategories} : {listCategories : Array<any>}) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-col gap-4 w-1/4">
        <h1 className="text-white font-bold text-xl bg-slate-800 rounded p-2 w-full">Blog categories</h1>
        {listCategories.map((category) => (
          <Link href={`/blog/categories/${category.toLowerCase()}`} key={category} className={`${pathname.includes(category.toLowerCase()) ? 'bg-blue-500 text-white' : 'text-slate-700'} rounded p-2 w-full hover:bg-blue-500 hover:text-white transition-colors`}>
              {category}
          </Link>
        ))}
    </div>
  )
}

export default CategoryList