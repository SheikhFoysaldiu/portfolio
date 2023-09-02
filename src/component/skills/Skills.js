import React from 'react'

function Skills() {
  return (
    <section
    id="skills"
    className="text-neutral-900 dark:text-neutral-100 px-2 max-w-3xl mx-auto mb-8  "
  >
    <a
      href="#skills"
      className="flex text-2xl font-semibold items-center space-x-2 mb-4 group  "
    >
      <h2 className="italic">Skills</h2>
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

    <ul className="list-disc list-inside space-y-1 text-base tracking-tight  ">
      <li className=" ">Python</li>
      <li className=" ">Data Structure and Algorithm</li>
      <li className=" ">JavaScript/TypeScript</li>
      <li className=" ">SQL</li>
      <li className=" ">REST APIs</li>
      <li className=" ">React</li>
      <li className=" ">PostgreSQL</li>
      <li className=" ">MySQL</li>
      <li className=" ">MongoDB</li>
      <li className=" ">C++</li>
      <li className=" ">C Programming</li>
      <li className=" ">JAVA</li>
      <li className=" ">React Native</li>
      <li className=" ">Android Studio</li>
    </ul>
  </section>
  )
}

export default Skills
