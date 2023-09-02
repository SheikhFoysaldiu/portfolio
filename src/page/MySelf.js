import React from "react";
import Layout from "./Layout";
import Education from "../component/education/Education";
import Experience from "../component/experience/Experience";
import Certification from "../component/certification/Certification";
import Skills from "../component/skills/Skills";

function MySelf() {
  return (
    <Layout>
      <main>
        <div className="max-w-2xl mx-auto mb-12 text-neutral-900 dark:text-neutral-100  ">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4  ">
            About Me
          </h1>
          <li className="text-base">
          I am an accomplished Data Scientist with a proven track record of leveraging advanced statistical and machine learning techniques to extract valuable insights from large datasets. 
          </li>
          <li className="text-base   ">
          My expertise lies in designing and implementing cutting-edge algorithms that drive actionable decisions and deliver tangible business results.
          </li>
        </div>
        <div className="container mx-auto  ">
            <Education/>
            <Experience/>
            <Certification/>
            <Skills/>
        </div>
      </main>
    </Layout>
  );
}

export default MySelf;
