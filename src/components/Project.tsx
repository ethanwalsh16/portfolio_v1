interface ProjectProps {
	title: string;
	description: string;
	link: string;
	colour: string;
	textcolour: string;
	stack: string;
}

const Experience: React.FC<ProjectProps> = ({ title, description, link, colour, textcolour, stack }) => {

	return (
		<div className="bg-black rounded-lg md:w-[80%] md:ml-[10%] w-[90%] ml-[5%] mb-4 md:grid md:grid-cols-4 md:py-10 py-3">
		<div className="col-span-1 p-3">
			<p className="text-neutral-300 ml-3 pt-2 text-4xl font-bold">{ title }</p>
		</div>
		<div className="col-span-2 py-3 pr-3 ml-8 space-y-4">
			<p className="text-neutral-300 md:ml-3">{ description }</p>
			<p className="text-neutral-300 md:ml-3"><span className="font-bold"> Stops: </span>{ stack }</p>
		</div>
		<div className="col-span-1 px-3 pr-3 grid place-content-center">
			<a href={ link } target="_blank">
			<button className="md:text-3xl text-xl font-bold py-1 px-3 rounded-full hover:scale-105 transition ease-in-out" 
					style={{backgroundColor: colour, color: textcolour}}>
						Route</button>
			</a>
		</div>
		</div>
	);
  };
  
  export default Experience;