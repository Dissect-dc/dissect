import React from "react"
import Header from "../components/header";
import {
    FullPage,
    Slide
} from "react-full-page";
import {
    graphql,
    Link
} from "gatsby"
import Img from "gatsby-image"
import "./index.css"
import Layout from "../components/layout";
import {
    Image,
    Text
} from "atomize"
import logo from "../images/dissect-logo.png";

const bg1 = require('../images/Uten_navn-2.jpg');
const divStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover'
};

export default ({data}) => (
    <Layout>
        <FullPage>
            <Slide>
                <div className="cComponent" style={divStyle}>
                    <Header/>
                </div>
            </Slide>
            <Slide className="bg">
                <div className="dissect-vertical">
                    <h1 className="centering" hidden tag="h1">
                        Guides
                    </h1>

                    <div className="row builds">
                        <div className="column hundred zoom">
                            <Text textAlign="center"
                                  textColor="black"
                                  tag="h1"
                                  textWeight="500"
                                  textSize="title"
                                  bg="white"
                                  className="rcorners-upper">
                                Berserker
                            </Text>
                            <Link to="/berserker">
                                <Img
                                    className="blackwhite rcorners-lower"
                                    fluid={data.berserker.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="column hundred zoom">
                            <Text textAlign="center"
                                  textColor="black"
                                  tag="h1"
                                  textWeight="500"
                                  textSize="title"
                                  bg="white"
                                  className="rcorners-upper">
                                Firebrand
                            </Text>
                            <Link to="/firebrand">
                                <Img className="blackwhite rcorners-lower"
                                     fluid={data.firebrand.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="column hundred zoom">
                            <Text textAlign="center"
                                  textColor="black"
                                  tag="h1"
                                  textWeight="500"
                                  textSize="title"
                                  bg="white"
                                  className="rcorners-upper">
                                Renegade
                            </Text>
                            <Link to="/renegade">
                                <Img className="blackwhite rcorners-lower"
                                     fluid={data.renegade.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="column hundred zoom">
                            <Text textAlign="center"
                                  textColor="black"
                                  tag="h1"
                                  textWeight="500"
                                  textSize="title"
                                  bg="white"
                                  className="rcorners-upper">
                                Soulbeast
                            </Text>
                            <Link to="/soulbeast">
                                <Img className="blackwhite rcorners-lower"
                                     fluid={data.soulbeast.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="column hundred zoom">
                            <Text textAlign="center"
                                  textColor="black"
                                  tag="h1"
                                  textWeight="500"
                                  textSize="title"
                                  bg="white"
                                  className="rcorners-upper">
                                Weaver
                            </Text>
                            <Link to="/weaver">
                                <Img className="blackwhite rcorners-lower"
                                     fluid={data.weaver.childImageSharp.fluid}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <Image
                        className="image_block"
                        src={logo}
                        h="100px"
                        w="auto"
                    />
                </div>
            </Slide>
        </FullPage>
    </Layout>
)

export const query = graphql`query
{
  berserker: file(relativePath: {eq: "Spec_image_Berserker.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  firebrand: file(relativePath: {eq: "Spec_image_Firebrand.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  renegade: file(relativePath: {eq: "Spec_image_Renegade.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  soulbeast: file(relativePath: {eq: "Spec_image_Soulbeast.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  weaver: file(relativePath: {eq: "Spec_image_Weaver.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

