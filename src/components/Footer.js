import React from "react";
import { FaGithub } from "react-icons/fa";


const Footer = () => {


    return (
        <footer className="py-4 absolute w-full text-black">
            <div className="container mx-auto text-center">
                <p>© {new Date().getFullYear()} ChromaBoxes. All rights reserved. <a href="" target="_blank" rel="noopener noreferrer"><FaGithub className="inline-block ml-1" /></a></p>
            </div>
        </footer>
    );
}

export default Footer;
