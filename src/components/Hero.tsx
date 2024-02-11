import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "../index.css"
import MusicTrain from '../assets/train/musictrain.svg'
import SoftwareTrain from '../assets/train/softwaretrain.svg'
import ProjectTrain from '../assets/train/projecttrain.svg'
import ProblemTrain from '../assets/train/problemtrain.svg'
import TTile from '../assets/tiles/typescript.svg'
import JTile from '../assets/tiles/java.svg'
import PTile from '../assets/tiles/python.svg'
import CTile from '../assets/tiles/c.svg'
import MTile from '../assets/tiles/matlab.svg'
import RTile from '../assets/tiles/react.svg'
import OTile from '../assets/tiles/opencv.svg'

const Hero = () => {
	const softwareTrainRef = useRef<HTMLImageElement>(null);
	const projectTrainRef = useRef<HTMLImageElement>(null);
	const problemTrainRef = useRef<HTMLImageElement>(null);
	const musicTrainRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const trainRefs = [softwareTrainRef, projectTrainRef, problemTrainRef, musicTrainRef];
		const trains = trainRefs.map((ref) => ref.current);
		if (trains.length > 0) {
			const tl = gsap.timeline({ repeat: -1 });
		
			// Set initial position off-screen to the left for all trains
			gsap.set(trains[0], { x: '0%' });
			gsap.set(trains[1], { x: '0%' });
			gsap.set(trains[2], { x: '0%' });
			gsap.set(trains[3], { x: '0%' });
		
			tl.to(trains[0], { x: '165%', duration: 4, ease: 'power0.none' })
				.set({}, {}, '+=2') // Pause for 2 seconds
				.to(trains[0], { x: '300%', duration: 4, ease: 'power2.in' })
				.set(trains[0], { x: '0%' }) // Return the train to the initial position
				.to(trains[1], { x: '165%', duration: 4, ease: 'power0.none' })
				.set({}, {}, '+=2') // Pause for 2 seconds
				.to(trains[1], { x: '300%', duration: 4, ease: 'power2.in' })
				.set(trains[1], { x: '0%' }) // Return the train to the initial position
				.to(trains[2], { x: '165%', duration: 4, ease: 'power0.none' })
				.set({}, {}, '+=2') // Pause for 2 seconds
				.to(trains[2], { x: '300%', duration: 4, ease: 'power2.in' })
				.set(trains[2], { x: '0%' }) // Return the train to the initial position
				.to(trains[3], { x: '165%', duration: 4, ease: 'power0.none' })
				.set({}, {}, '+=2') // Pause for 2 seconds
				.to(trains[3], { x: '300%', duration: 4, ease: 'power2.in' })
				.set(trains[3], { x: '0%' }); // Return the train to the initial position
		}
	}, [softwareTrainRef,projectTrainRef,problemTrainRef,musicTrainRef]);

	return (
		<div className="w-full justify-center pt-20">
			<div className="bg-black rounded-lg w-[80%] ml-[10%] md:w-[60%] md:ml-[20%] mb-4">
				<div className="">
					<div className="relative flex md:py-5 py-2 items-center">
						<div className="flex-grow border-t border-neutral-300"></div>
					</div>
					<div className="grid md:grid-cols-3 grid-cols-2 md:pb-0 pb-2">
						<div className="md:col-span-2 col-span-1 md:ml-4 ml-1">
							<h1 className="text-neutral-300 md:text-7xl text-3xl font-bold ml-1">Ethan Walsh</h1>
							<h1 className="text-neutral-300 md:text-4xl text-xl font-bold mb-2 ml-1">Software Engineering Student</h1>
						</div>
						<div className="col-span-1 lg:ml-0 md:ml-0 sm:ml-4 ml-4">
							<div className="flex md:space-x-2 space-x-1 mb-2 w-[100%]">
								<img src={JTile} className="lg:w-[3rem] w-[2rem]" title="Java"></img>
								<img src={PTile} className="lg:w-[3rem] w-[2rem]" title="Python"></img>
								<img src={TTile} className="lg:w-[3rem] w-[2rem]" title="TypeScript"></img>
								<img src={CTile} className="lg:w-[3rem] w-[2rem]" title="(Self-explanatory)"></img>
							</div>
							<div className="flex md:space-x-2 space-x-1 w-[100%]">
								<img src={MTile} className="lg:w-[3rem] w-[2rem]" title="MATLAB"></img>
								<img src={RTile} className="lg:w-[3rem] w-[2rem]" title="React.JS"></img>
								<img src={OTile} className="lg:w-[3rem] w-[2rem]" title="OpenCV"></img>
							</div>
						</div>
					</div>
				</div>	
			</div>
			<div className="my-20 grid place-content-center">
				<img ref={softwareTrainRef} id="softwareTrain" src={SoftwareTrain} className="absolute left-[-100%] w-[60%] ml-[20%]"></img>
				<img ref={projectTrainRef} id="projectTrain" src={ProjectTrain} className="absolute left-[-100%] w-[60%] ml-[20%]"></img>
				<img ref={problemTrainRef} id="problemTrain" src={ProblemTrain} className="absolute left-[-100%] w-[60%] ml-[20%]"></img>
				<img ref={musicTrainRef} id="musicTrain" src={MusicTrain} className="absolute left-[-100%] w-[60%] ml-[20%]"></img>	
			</div>
			<div className="mt-14 h-[0.125rem] bg-gradient-to-r from-neutral-900 via-indigo-500 to-neutral-900 w-[95%] ml-[2.5%]"></div>
		</div>
	);
};

export default Hero;