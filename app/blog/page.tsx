import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../ui/Post';

const Blog = () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((file) => {
    const contentWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
    const {data: frontmatter} = matter(contentWithMeta);
    return {
      slug: file.replace('.md', ''),
      frontmatter: frontmatter,
    }
  });
  return (
    <div className="h-full w-full px-12 py-8">
      <h1 className='text-3xl font-bold mb-8'>Latest posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  )
}

export default Blog