import React from "react"
import {graphql} from "gatsby"
import {Coin, Skill, Trait, TraitLine} from "gw2-ui-components";
import * as rehypeReact from "rehype-react";
import Counter from "../components/counter";
import Header from "../components/header";
import Layout from "../components/layout";
import "../pages/global.css"
import {Div} from "atomize"

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {markdownRemark} = data // data.markdownRemark holds your post data

    const {frontmatter, htmlAst} = markdownRemark

    const code = (
        <Layout>
            <div className="bg">
                <Header/>
                <div className="dissect-horizontal">
                    <Coin value="1231231231"/>
                    <Trait id="229"/>
                    <Skill id="14375"/>
                    <TraitLine
                        id={41}
                        selected={[227, 214, 1672]}
                    />                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div>{renderAst(htmlAst)}</div>
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
        "interactive-counter": Counter,
        "trait": Trait,
        "skill": Skill,
    },
}).Compiler

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        date(formatString: "MM DD, YYYY")
        slug
        title
      }
    }
  }
`