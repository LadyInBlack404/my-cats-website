import * as React from "react";
import Layout from "./layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome Home">
      <p>If you're a cat lover, you will be pleased.</p>
      <StaticImage
        alt="two hugging cats on a scratching post"
        src="../images/DSC_0625.JPG"
      />
    </Layout>
  );
};

export default IndexPage;
