import React from 'react';
import resume from "../assets/walshethan_resume.pdf";
import { Link } from 'react-router-dom';

const ResumePage: React.FC = () => {
  return (
    <div className="">
		<Link to="/">
				<button className="bg-neutral-300 my-6 ml-6 text-neutral-900 md:text-xl text-md font-bold py-1 px-3 rounded-full hover:scale-105 transition ease-in-out">
					Home
				</button>
		</Link>
		<iframe className="md:w-[80%] w-[100%] h-screen" src={resume}></iframe>
    </div>
  );
};

export default ResumePage;