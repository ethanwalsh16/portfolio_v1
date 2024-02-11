interface ExperienceProps {
	title: string;
	company: string;
	oneliner: string;
	link: string;
	colour: string;
	textcolour: string;
	stack: string;
}

const Experience: React.FC<ExperienceProps> = ({ title, company, oneliner, colour, link, textcolour, stack }) => {

	return (
		<div className="bg-black rounded-lg md:w-[80%] md:ml-[10%] w-[90%] ml-[5%] mb-4 md:grid md:grid-cols-4 md:py-10 py-3">
			<div className="col-span-1 p-3">
				<p className="text-neutral-300 ml-3 pt-2 md:text-4xl text-xl font-bold">{ title }</p>
				<p className="text-neutral-300 italic text-sm ml-3">{ company }</p>
			</div>
			<div className="col-span-2 p-3 ml-8 grid place-content-start space-y-4">
				<p className="text-neutral-300 ml-3">{ oneliner }</p>
				<p className="text-neutral-300 ml-3"><span className="font-bold"> Stops: </span>{ stack }</p>
			</div>
			<div className="col-span-1 sm:row-span-1 p-3 grid place-content-center">
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