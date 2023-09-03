import React from 'react'
import { Link } from "react-router-dom";
import Divider from '../divider/Divider';

const AboutMe = () => {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 tracking-tight mb-12 flex flex-col md:flex-row text-zinc-800 dark:text-neutral-200">
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="text-lg mt-4 mb-8 space-y-2">
            <p>
              Hi, I'm Sheikh Foysal. I'm a Data Scientist living in Dhaka, Bangladesh.
            </p>
            <p>
            As a Data Scientist, I leverage data analysis, machine learning, and statistical modeling to extract insights, build predictive models, and inform data-driven decisions, thus solving complex problems for organizations
            </p>
          </div>
        </div>
        <div>
          <Link
            className="
					flex
					w-fit
					mx-auto
					justify-between 
					items-center 
					space-x-3 
					rounded-full 
					px-4 
					py-2 
					bg-gradient-to-r 
					from-indigo-500 
					via-purple-500 
					to-pink-500
					text-neutral-50
					shadow-md
					shadow-purple-500/50
					hover:shadow-lg
					hover:shadow-purple-500/50
				"
            to="/about"
          >
            <span className="tracking-tight font-semibold">More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
               strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </Link>
        </div>
      </section>
      <Divider/>
    </>
  );
};

export default AboutMe;
