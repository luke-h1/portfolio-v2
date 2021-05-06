/* eslint-disable global-require */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponents from '@src/components/MDXComponents';

export interface PostData {
  path: string;
  title: string;
  subtitle?: string;
  content: string;
  description?: string;
  canonicalUrl?: string;
  githubUrl?: string;
  siteUrl: string;
  published: string;
  datePublished: string;
  author?: string;
  authorPhoto: string;
  authorTwitter?: string;
  tags?: string[];
  bannerPhoto?: string;
  thumbnailPhoto?: string;
}

const root = `${process.cwd()}/src`;

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'md', type));
}

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'md', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'md', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
    },
  });
  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontmatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'md', type));

  return files.reduce((allPosts, postSlug): any => {
    const source = fs.readFileSync(
      path.join(root, 'md', type, postSlug),
      'utf-8',
    );
    const { data } = matter(source);
    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}
