import Project from "./Project"

interface ProjectsHolderProps {
	projects: Array<{
		title: string;
		description: string;
		link: string;
		colour: string;
		textcolour: string;
		stack: string;
	}>;
}

const ExperienceHolder: React.FC<ProjectsHolderProps> = ({ projects }) => {
	return (
	  <div className="mt-20">
			<h1 className="text-neutral-300 text-4xl font-bold ml-[10%]">Projects</h1>
			<div className="h-[0.125rem] bg-gradient-to-r from-neutral-900 via-[#00933C] to-neutral-900 mb-4 w-[95%] ml-[2.5%]"></div>
			<div className="space-y-6">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
	  </div>
	);
  };
  
  export default ExperienceHolder;