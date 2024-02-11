import "../index.css"
import { HashLink as Link } from 'react-router-hash-link';

interface NavlinkProps {
	link: string;
	target: string;
}

const Navlink: React.FC<NavlinkProps> = ({ link, target }) => {
	return (
		<Link to={`#${target}`}><p className="cursor-pointer text-neutral-300 md:text-xl text-sm font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
		before:bottom-0 before:left-0 before:bg-gray-300
		before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
		before:transition before:ease-in-out before:duration-300">{ link }</p></Link>
	);
};

export default Navlink;