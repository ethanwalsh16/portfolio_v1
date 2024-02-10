import { Link } from 'react-router-dom';

const Resume: React.FC = () => {
  	return (
		<>
			<Link to="/resume">
				<button className="bg-neutral-300 text-neutral-900 text-3xl font-bold py-1 px-3 rounded-full hover:scale-105 transition ease-in-out">
					Resume
				</button>
			</Link>
		</>
  	);
};

export default Resume;