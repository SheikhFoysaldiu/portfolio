import React from 'react'

function Chat() {
  return (
<>
<section class="max-w-4xl mx-auto px-4 mb-12 flex flex-col space-y-8 justify-center justify-items-center py-8 text-zinc-800 dark:text-neutral-200">
		<h2 class="text-3xl font-bold text-center">
			Want to Chat?
		</h2>
		<div class="relative w-48 mx-auto">
			<a class="
					w-48
					flex 
					justify-between 
					items-center 
					space-x-1
					rounded-full 
					mx-auto
					px-6
					py-3 
					bg-gradient-to-r 
					from-indigo-500 
					via-purple-500 
					to-pink-500
					text-neutral-50
					shadow-md
					shadow-purple-500/25
					hover:shadow-lg
					hover:shadow-purple-400/75
					dark:hover:shadow-purple-400/25
				" href="https://linkedin.com/in/austinpoor">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
				</svg>			  
				<span class="text-xl tracking-tight font-semibold">
					Contact Me
				</span>
			</a>
			<div class="absolute top-0 bottom-0 left-0 right-0 box-content bg-rose-400/70 rounded-full -z-10 blur-lg animate-pulse skew-y-6"></div>
			<div class="absolute top-0 bottom-0 left-0 right-0 box-content bg-sky-500/70 rounded-full -z-10 blur-xl animate-pulse -skew-y-6"></div>
		</div>
	</section>
</>
  )
}

export default Chat
