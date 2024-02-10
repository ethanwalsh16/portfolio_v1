import "../index.css"

interface NavlinkProps {
	link: string;
	target: string;
}

const Navlink: React.FC<NavlinkProps> = ({ link, target }) => {
	return (
		<a id="navlink" href={`#${target}`} className="cursor-pointer text-neutral-300 text-xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
		before:bottom-0 before:left-0 before:bg-gray-300
		before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
		before:transition before:ease-in-out before:duration-300">{ link }</a>
	);
};

export default Navlink;