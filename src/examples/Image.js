import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import img from '../images/desert.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "ocean.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "mountain.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    example: file(relativePath: { eq: "mountain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data.fluid);
  return (
    <Wrapper>
      <article>
        <h3>Basic image</h3>
        <img src={img} alt="desert" className="basic" />
      </article>
      <article>
        <h3>Fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.example.childImageSharp.fluid} />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 1rem auto 10rem auto;
  .basic {
    width: 100%;
  }
  .small {
    width: 200px;
  }
  article {
    border: 3px solid lavender;
    padding: 1rem 0;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

export default Images;
