import React from 'react'

function Certification() {
  return (
    <section
    id="certifications"
    className="text-neutral-900 dark:text-neutral-100 px-2 max-w-3xl mx-auto mb-8  "
  >
    <a
      href="#certifications"
      className="flex text-2xl font-semibold items-center space-x-2 mb-4 group  "
    >
      <h2 className="italic">Certifications</h2>
      <svg
        className="w-5 h-5 invisible group-hover:visible  "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
         strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          className=" "
        ></path>
      </svg>
      <hr className="flex-grow mt-1  " />
    </a>

    <ul className="list-none space-y-1 text-base tracking-tight  ">
      <li className=" ">
        <div
          className="font-semibold  "
         
        >
          <span className="text-neutral-500 mr-1  ">[June-2022]</span>
          <span className=" ">Algorithm Unlock - Daffodil Smart City </span>
          <span className="text-neutral-500 mr-1  ">[Position-3rd]</span>
        </div>
      </li>
    </ul>
  </section>
  )
}

export default Certification
