import "../index.css"
import Navlink from "./Navlink"

interface HeaderLinkProps {
	links: Array<{
		link: string;
		target: string;
	}>;
}

const Header: React.FC<HeaderLinkProps> = ({ links }) => {
  	return (
		<>
			<div className="bg-neutral-900 fixed top-0 w-full z-10 grid place-content-center pt-4 pb-2" id="header-container">
				<div className="flex space-x-32" id="navlinks-container">
					{links.map((link, index) => (
        				<Navlink key={index} {...link} />
      				))}
				</div>
			</div>
		</>
  	);
};

export default Header;