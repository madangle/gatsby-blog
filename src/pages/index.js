import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      {
        data.allMarkdownRemark.edges.map( ({node}) => (
          <div key={node.id}> 
            <BlogLink to={node.fields.slug}>
            <h2>
              {node.frontmatter.title} -- {node.frontmatter.date} 
            </h2>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
)

export default IndexPage


export const query = graphql`
  query{
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          html
          excerpt
          fields{
            slug
          }
        }
      }
      totalCount
    }
  }  
`;