import React from "react"
import {graphql} from "gatsby"
import {
    Coin,
    Item,
    Skill,
    Trait,
    TraitLine,
    Effect,
    Profession,
} from "gw2-ui";
import * as rehypeReact from "rehype-react";
import Header from "../components/header";
import Layout from "../components/layout";
import "../pages/global.css"
import "./buildTemplate.css"
import BuildHeader from "../components/buildheader";


export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {markdownRemark} = data // data.markdownRemark holds your post data

    const {frontmatter, htmlAst} = markdownRemark
    const code = (
        <Layout>
            <div className="bg">
                <Header/>

                <BuildHeader/>
                <div className="dissect-horizontal">


                    <div className="dissect-build">
                        <Profession eliteSpecialization="Weaver"></Profession>
                        <div>{renderAst(htmlAst)}</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
    return code;
}

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        "coin": Coin,
        "trait": Trait,
        "skill": Skill,
        "traitLine": TraitLine,
        "item": Item,
        "effect": Effect,
        "profession": Profession,
    },
}).Compiler

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        date(formatString: "MM DD YYYY")
        slug
        title
        spec
      }
    }
  }
`