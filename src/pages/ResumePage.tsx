import React from 'react';
import resume from "../assets/walshethan_resume.pdf";
import { Link } from 'react-router-dom';

const ResumePage: React.FC = () => {
  return (
    <div className="">
		<Link to="/">
				<button className="bg-neutral-300 my-6 ml-6 text-neutral-900 text-xl font-bold py-1 px-3 rounded-full hover:scale-105 transition ease-in-out">
					Home
				</button>
		</Link>
		<iframe className="w-[80%] h-[71rem]" src={resume}></iframe>
    </div>
  );
};

export default ResumePage;