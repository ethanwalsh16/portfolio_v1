import { useEffect, useRef, useState } from 'react';
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
			gsap.set(trains[0], { x: '-150%' });
			gsap.set(trains[1], { x: '-150%' });
			gsap.set(trains[2], { x: '-150%' });
			gsap.set(trains[3], { x: '-150%' });
		
			tl.to(trains[0], { x: '0%', duration: 4, ease: 'power0.none' })
				.set({}, {}, '+=2') // Pause for 2 seconds
				.to(trains[0], { x: '150%', duration: 4, ease: 'power2.in' })
				.set(trains[0], { x: '-150%' }) // Return the train to the initial position
				.to(trains[1], { x: '0%', duration: 4, ease: 'power0.none' })
				.set({}, {}, '+=2') // Pause for 2 seconds
				.to(trains[1], { x: '150%', duration: 4, ease: 'power2.in' })
				.set(trains[1], { x: '-150%' }) // Return the train to the initial position
				.to(trains[2], { x: '0%', duration: 4, ease: 'power0.none' })
				.set({}, {}, '+=2') // Pause for 2 seconds
				.to(trains[2], { x: '150%', duration: 4, ease: 'power2.in' })
				.set(trains[2], { x: '-150%' }) // Return the train to the initial position
				.to(trains[3], { x: '0%', duration: 4, ease: 'power0.none' })
				.set({}, {}, '+=2') // Pause for 2 seconds
				.to(trains[3], { x: '150%', duration: 4, ease: 'power2.in' })
				.set(trains[3], { x: '-150%' }); // Return the train to the initial position
		}
	  }, [softwareTrainRef,projectTrainRef,problemTrainRef,musicTrainRef]);


  	return (
		<div className="w-full justify-center pt-20">
			<div className="bg-black rounded-lg w-[60%] ml-[20%] mb-4">
				<div className="">
					<div className="relative flex py-5 items-center">
						<div className="flex-grow border-t border-neutral-300"></div>
					</div>
					<div className="grid grid-cols-3">
						<div className="col-span-2 ml-4">
							<h1 className="text-neutral-300 text-7xl font-bold ml-1">Ethan Walsh</h1>
							<h1 className="text-neutral-300 text-4xl font-bold mb-2 ml-1">Software Engineering Student</h1>
						</div>
						<div className="col-span-1 ml-4">
							<div className="flex space-x-2 mb-2">
								<img src={JTile} className="w-[3rem]" title="Java"></img>
								<img src={PTile} className="w-[3rem]" title="Python"></img>
								<img src={TTile} className="w-[3rem]" title="TypeScript"></img>
								<img src={CTile} className="w-[3rem]" title="(Self-explanatory)"></img>
							</div>
							<div className="flex space-x-2">
								<img src={MTile} className="w-[3rem]" title="MATLAB"></img>
								<img src={RTile} className="w-[3rem]" title="React.JS"></img>
								<img src={OTile} className="w-[3rem]" title="OpenCV"></img>
							</div>
						</div>
					</div>
				</div>	
			</div>
			<div className="my-20 grid place-content-center">
				<img ref={softwareTrainRef} id="softwareTrain" src={SoftwareTrain} className="absolute w-[60%] ml-[20%]"></img>
				<img ref={projectTrainRef} id="projectTrain" src={ProjectTrain} className="absolute w-[60%] ml-[20%]"></img>
				<img ref={problemTrainRef} id="problemTrain" src={ProblemTrain} className="absolute w-[60%] ml-[20%]"></img>
				<img ref={musicTrainRef} id="musicTrain" src={MusicTrain} className="absolute w-[60%] ml-[20%]"></img>
				<div className="absolute mt-14 h-[0.125rem] bg-gradient-to-r from-neutral-900 via-indigo-500 to-neutral-900 w-[95%] ml-[2.5%]"></div>
			</div>
		</div>
  	);
};

export default Hero;