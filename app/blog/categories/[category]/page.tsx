import Post from '../../../ui/Post';
import { getPosts } from '@/app/lib/posts';
import CategoryList from '@/app/ui/CategoryList';

export async function generateStaticParams(){
  const listCategories = new Array<string>();
  const posts = getPosts();
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = new Set<string>(categories);
  uniqueCategories.forEach((category: string) => {
    listCategories.push(category);
  })
  const params = listCategories.map((category) => (
    {
      category: category.toLowerCase(),
    }
  ))
  return params;
}

const CategoryPage = ({params}: {
    params: {
        category: string,
    }
}) => {
    const posts = getPosts();
    const categories = posts.map((post) => post.frontmatter.category);
    const uniqueCategories = new Set<string>(categories);
    const listCategories = new Array<string>();
    uniqueCategories.forEach((category: string) => {
      listCategories.push(category);
    })
    const filteredPosts = posts.filter((post) => post.frontmatter.category.toLowerCase() === params.category);
    return (
      <main className="h-full w-full px-12 py-4">
        <div className='flex w-full justify-between gap-4'>
          <div className='w-3/4'>
            <h1 className='text-3xl font-bold mb-8'>Posts in {params.category.toUpperCase()}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {filteredPosts.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            </div>
          </div>
          <CategoryList listCategories={listCategories}/>
        </div>
      </main>
    )
}

export default CategoryPage