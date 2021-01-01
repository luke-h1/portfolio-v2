import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(limit: 3) {
      edges {
        node {
          excerpt
          frontmatter {
            date
            description
            title
            slug
          }
        }
      }
    }
  }
  `);
  return data.allMarkdownRemark.edges.map((post) => ({
    date: post.node.frontmatter.date,
    description: post.node.frontmatter.description,
    title: post.node.frontmatter.title,
    slug: post.node.frontmatter.slug,
    excerpt: post.node.excerpt,
  }));
};
export default usePosts;
