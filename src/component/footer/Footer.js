import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer className="left-0 right-0 pb-12">
    <div className="left-0 right-0 h-6 bg-gradient-to-b from-neutral-500/10 dark:invisible"></div>

    <div className="max-w-md mx-auto my-4 text-neutral-900 dark:text-neutral-400">
        <div className="text-center mt-6 mb-4">
            Copyright © 2023 Sheikh Foysal. All rights reserved.
        </div>

        <ul className="list-none flex justify-center space-x-4">
            <li className="underline border-dotted decoration-dotted">
                <Link to="https://github.com/SheikhFoysaldiu?tab=repositories">
                    GitHub
                </Link>
            </li>
            <li className="underline border-dotted decoration-dotted">
                <Link to="https://www.linkedin.com/in/foysal-sheikh-b35541216/">
                    LinkedIn
                </Link>
            </li>
            <li className="underline border-dotted decoration-dotted">
                <Link to="https://mastodon.social/@sheikhfoysal" rel="me">
                    Mastodon
                </Link>
            </li>
        </ul>
    </div>

    
</footer>
</>
  )
}

export default Footer;
