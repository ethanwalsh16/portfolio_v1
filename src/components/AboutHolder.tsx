import About from "./About"

interface AboutProps {
	aboutText: Array<{
		point: string;
	}>;
}

const AboutHolder: React.FC<AboutProps> = ({ aboutText }) => {
	return (
		<div className="py-16">
			<h1 className="text-neutral-300 text-4xl font-bold ml-[10%]">About</h1>
			<div className="h-[0.125rem] bg-gradient-to-r from-neutral-900 via-[#FCCC0A] to-neutral-900 mb-4 mt-2 w-[95%] ml-[2.5%]"></div>
			<div className="bg-black rounded-lg w-[80%] ml-[10%] mb-4 py-10 space-y-4">
				{aboutText.map((about, index) => (
					<About key={index} {...about} />
				))}
			</div>
		</div>
	);
  };
  
  export default AboutHolder;