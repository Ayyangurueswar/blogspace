import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const files = fs.readdirSync(path.join('posts'));

export const getPosts = () => {
    const posts = files.map((file) => {
        const contentWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
        const {data: frontmatter} = matter(contentWithMeta);
        return {
          slug: file.replace('.md', ''),
          frontmatter: frontmatter,
        }
    });
    const sortedPosts = posts.sort((a, b) => (
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    ));
    return sortedPosts;
}