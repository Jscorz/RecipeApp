import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Wrapper>
        <main className="page">
          <div className="recipe-page">
            {/* hero */}
            <section className="recipe-hero">
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="about-img"
              />
              <article className="recipe-info">
                <h2>{title}</h2>
                <p>{description}</p>
                {/* recipe-icons */}
                <div className="recipe-icons">
                  <article>
                    <h5>list price</h5>
                    <p>$ {cookTime}</p>
                  </article>
                  <article>
                    <h5>In stock</h5>
                    <p>{prepTime}</p>
                  </article>
                </div>
                <section className="btn-container  margin-bottom">
                  <button className="btn margin-right">add to cart</button>
                  <button className="btn">buy now</button>
                </section>
                {/* tags */}
                <p className="recipe-tags">
                  Tags :{" "}
                  {tags.map((tag, index) => {
                    const slug = slugify(tag, { lower: true })
                    return (
                      <Link to={`/tags/${slug}`} key={index}>
                        {tag}
                      </Link>
                    )
                  })}
                </p>
              </article>
            </section>
          </div>
        </main>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

const Wrapper = styled.section`
  .btn-container {
    display: flex;
  }

  .margin-right {
    margin-right: 1rem;
  }

  .margin-bottom {
    margin-bottom: 1rem;
  }
`

export default RecipeTemplate
