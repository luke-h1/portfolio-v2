/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  StyledHeader,
  StyledSection,
  StyledLink,
  StyledH1,
  StyledP,
  BlogArticle,
} from './BlogPostElements';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogArticle>
        <StyledHeader>
          <StyledH1 itemProp="headline">{post.frontmatter.title}</StyledH1>
          <StyledP style={{ fontSize: '15px', textAlign: 'center' }}>
            {post.frontmatter.date}
          </StyledP>
        </StyledHeader>
        <StyledSection
          style={{
            color: '#000',
            maxWidth: '80%',
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <nav className="blog-post-nav">
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <StyledLink to={`${previous.frontmatter.slug}`} rel="prev">
                  ←
                  {' '}
                  {previous.frontmatter.title}
                </StyledLink>
              )}
            </li>
            <li>
              {next && (
                <StyledLink to={`${next.frontmatter.slug}`} rel="next">
                  {next.frontmatter.title}
                  {' '}
                  →
                </StyledLink>
              )}
            </li>
          </ul>
        </nav>
      </BlogArticle>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;