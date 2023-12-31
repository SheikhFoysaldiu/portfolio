import React from 'react'
import { Link } from "react-router-dom";
import Divider from "../divider/Divider";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <>
      <section
        className="
			mx-auto
			mb-8
			max-w-4xl 
			px-4 
			py-14 
			flex 
			flex-col
			lg:flex-row
			space-x-0
			lg:space-x-12
			space-y-2
			lg:space-y-0
			items-center
			justify-items-center
		"
      >
        <div
          className="
				lg:basis-2/3
				flex
				flex-col
				text-center
				lg:text-end
				justify-center
				justify-items-center
				lg:justify-end
				lg:justify-items-end
			"
        >
      <h1 className="text-4xl sm:text-7xl font-extrabold font-sans mb-4 tracking-tight lg:tracking-normal text-neutral-900 dark:text-neutral-100">
				Hello! I'm
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Sheikh Foysal</span>.
			</h1>

          <p className="text-base sm:text-xl tracking-tight lg:justify-self-end text-neutral-900 dark:text-neutral-100">
            I'm a Data Scientist living in Dhaka, Bangladesh.
          </p>
          <ul className="list-none flex flex-wrap justify-center lg:justify-end mt-4 space-x-1 lg:space-x-2 font-semibold text-neutral-50">
            <li className="my-1">
              <Link
                to="https://github.com/SheikhFoysaldiu?tab=repositories"
                className="bg-purple-600 rounded-full px-3 py-1 flex space-x-2"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-neutral-50"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                <span>GitHub</span>
              </Link>
            </li>
            <li className="my-1">
              <Link
                href="https://www.linkedin.com/in/foysal-sheikh-b35541216/"
                className="bg-purple-600 rounded-full px-3 py-1 flex space-x-2"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-neutral-50"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                <span>LinkedIn</span>
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="https://mastodon.social/@sheikhfoysal"
                className="bg-purple-600 rounded-full px-3 py-1 flex space-x-2"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-neutral-50"
                >
                  <title>Mastodon</title>
                  <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"></path>
                </svg>
                <span>Mastodon</span>
              </Link>
            </li>
          </ul>
        </div>

        <img
          src={require("../../assets/user.jpg")}
          className="
				scale-90
				lg:scale-100
				lg:basis-1/4
				bg-cover 
				bg-center 
				bg-clip-border 
				rounded-[3rem] 
				mx-auto
				aspect-square 
				max-w-md
				w-full
				shadow-sm
			"
          alt="Photo_SheikhFoysal."
        />
      </section>
      <Divider />
    </>
  );
};
export default Hero;
