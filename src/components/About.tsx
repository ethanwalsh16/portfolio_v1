interface AboutProps {
	point: string;
}

const About: React.FC<AboutProps> = ({ point }) => {

	return (
		<h1 className="text-neutral-300 text-xl w-[90%] ml-[5%]">{ point }</h1>
	);
};
  
export default About;