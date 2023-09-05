import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function ProjectPage() {
  // Replace with your GitHub username
  const [repo, setRepo] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const username = process.env.REACT_APP_USER_NAME;

  const apiUrl = `https://api.github.com/users/${username}/repos?sort=created&direction=desc`;
  useEffect(() => {
    const fetchAndDisplayRepositories = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const repositories = await response.json();
        setRepo(repositories);
        // console.log(repositories);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchAndDisplayRepositories();
  }, [apiKey, apiUrl]);

  return (
    <Layout>
      <main>
        <div className="max-w-2xl mx-auto mb-12 text-neutral-900 dark:text-neutral-100">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4">
            Projects
          </h1>
          <p className="text-base text-center">
            Want to see what I've been working on?
          </p>
          <p className="text-base text-center">
            Check out some of my recent projects below.
          </p>
        </div>
        <div
          className="
            container
            mx-auto 
            px-2
            grid 
            gap-2
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            grid-rows-auto 
            
            mb-48
            text-neutral-900 
            dark:text-neutral-100
        "
        >
          {repo &&
            repo?.length > 0 &&
            repo.map((item) => (
              <Link
                key={item.id}
                to={item.html_url}
                className="
                flex
                flex-col
                justify-between
               
                px-4
                pt-4
                pb-4
                border-[1px]
                outline
                sm:outline-none
                outline-1
                outline-slate-300
                rounded-md
                hover:bg-neutral-200
                dark:hover:bg-neutral-800
            "
              >
                <div className="text-2xl font-bold tracking-tight">
                  {item.name}
                </div>
                <div className="text-base">{
                item.description?.length > 150 ? item.description?.substr(0,150) + "...." : 
                  item.description?.length === undefined ? "No Description added yet!" : item.description
                }</div>
                <br/>
                <div className="italic"><span>Tags: </span>{item?.language}</div>
              </Link>
            ))}
        </div>
      </main>
    </Layout>
  );
}

export default ProjectPage;
