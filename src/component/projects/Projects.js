import React, { useEffect, useState } from 'react'

import Divider from '../divider/Divider';
import { Link } from 'react-router-dom';

const SingleRepo = ({item}) =>{
    return(
        <li  class="my-4 md:border-l-4 border-neutral-200 dark:border-neutral-800 md:pl-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <a class="" href="https://github.com/a-poor/watercooler">
            <h3 class="text-lg font-semibold underline decoration-dotted">
                {item.name}
            </h3>
            <p class="text-sm tracking-tight">
                {item.description}
            </p>
        </a>
        </li>
    )
}


function Projects() {
 // Replace with your GitHub username
    const [repo, setRepo] = useState([])

    const apiKey = process.env.REACT_APP_API_KEY;
    const username = process.env.REACT_APP_USER_NAME;
    console.log(apiKey)
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=3`;
    useEffect(()=>{
     const  fetchAndDisplayRepositories = async ()=> {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repositories = await response.json();
        setRepo(repositories)
        console.log(repositories)

    } catch (error) {
        console.error('Error:', error);
    }
}
    return()=>{
         fetchAndDisplayRepositories()
    }
    },[])

  return (
    <>
    <section class="max-w-4xl mx-auto px-4 tracking-tight mb-12 flex flex-col md:flex-row text-zinc-800 dark:text-neutral-200">
		<div class="flex-grow text-center md:text-left">
			<h2 class="text-4xl font-bold tracking-wide">
				Projects
			</h2>
			<p class="text-lg">
				Check out some of the projects I've been working on recently!
			</p>
			<p class="mb-4 text-lg">
				Here are some of my latest projects:
			</p>
			<ul class="list-none list-inside mb-8">
				{
                    repo.map((item)=>
                        <SingleRepo key={item.id} item={item}/>
                    )

                }
			</ul>
		</div>
		<div>
			<Link class="
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
				" to="/projects">
				<span class="tracking-tight font-semibold">
					More projects
				</span>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
				</svg>
			</Link>
		</div>
	</section>
    <Divider/>
    </>
  )
}

export default Projects
