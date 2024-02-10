import Experience from "./Experience"

interface ExperienceHolderProps {
	experiences: Array<{
		title: string;
		company: string;
		oneliner: string;
		link: string;
		colour: string;
		textcolour: string;
		stack: string;
	}>;
	
}

const ExperienceHolder: React.FC<ExperienceHolderProps> = ({ experiences }) => {
	return (
		<div>
			<h1 className="text-neutral-300 text-4xl font-bold ml-[10%]">Experience</h1>
			<div className="h-[0.125rem] bg-gradient-to-r from-neutral-900 via-[#EE352E] to-neutral-900 mb-4 mt-2 w-[95%] ml-[2.5%]"></div>
			<div className="space-y-6">
				{experiences.map((experience, index) => (
					<Experience key={index} {...experience}/>
				))}
			</div>
		</div>
	);
  };
  
  export default ExperienceHolder;