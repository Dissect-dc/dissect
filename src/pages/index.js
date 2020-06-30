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


import logo from "../images/dissect-logo.png";

const bg1 = require('../images/Uten_navn-2.jpg');
const divStyle = {
    width: '100%',
    height: '100%',
    margin: '0px',
    padding: '0px',
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

                    <div className="row builds">
                        <div className="column hundred zoom">
                            <div className="rcorners-upper centering">Berserker</div>
                            <Link to="/berserker">
                                <Img
                                    className="blackwhite rcorners-lower"
                                    fluid={data.berserker.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="column hundred zoom">
                            <div className="rcorners-upper centering">Firebrand</div>
                            <Link to="/firebrand">
                                <Img className="blackwhite rcorners-lower"
                                     fluid={data.firebrand.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="column hundred zoom">
                            <div className="rcorners-upper centering">Renegade</div>

                            <Link to="/renegade">
                                <Img className="blackwhite rcorners-lower"
                                     fluid={data.renegade.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="column hundred zoom">
                            <div className="rcorners-upper centering">Soulbeast</div>

                            <Link to="/soulbeast">
                                <Img className="blackwhite rcorners-lower"
                                     fluid={data.soulbeast.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="column hundred zoom">
                            <div className="rcorners-upper centering">Weaver</div>

                            <Link to="/weaver">
                                <Img className="blackwhite rcorners-lower"
                                     fluid={data.weaver.childImageSharp.fluid}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        className="image_block"
                        src={logo}
                    />
                </div>
            </Slide>
        </FullPage>
    </Layout>
)

export const buildImage = graphql`
    fragment buildImage on File {
        childImageSharp {
            fluid(maxWidth: 200, quality: 90) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

export const query = graphql`
    query{
        berserker: file(relativePath: {eq: "Spec_image_Berserker.jpg"}) {
            ...buildImage
        }
        firebrand: file(relativePath: {eq: "Spec_image_Firebrand.jpg"}) {
            ...buildImage
        }
        renegade: file(relativePath: {eq: "Spec_image_Renegade.jpg"}) {
            ...buildImage
        }
        soulbeast: file(relativePath: {eq: "Spec_image_Soulbeast.jpg"}) {
            ...buildImage
        }
        weaver: file(relativePath: {eq: "Spec_image_Weaver.jpg"}) {
            ...buildImage
        }
    }
`

