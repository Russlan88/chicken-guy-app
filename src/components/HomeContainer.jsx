/** @format */

import React from 'react';
import Delivery from '../assets/img/delivery.png';
import HeroBg from '../assets/img/heroBg.png';
import { heroData } from '../utils/data';

const HomeContainer = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
			<div className="py-2 flex-1 flex flex-col items-start justify-start gap-6">
				<div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full px-4 py-1">
					<p className="text-base text-orange-500 font-semibold">
						Bike Delivery
					</p>
					<div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl">
						<img
							src={Delivery}
							className="w-full h-full object-contain"
							alt="Delivery"
							draggable={false}
						/>
					</div>
				</div>

				<p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
					The Fastest Delivery in{' '}
					<span className="text-orange-600 text-[3rem] lg:text-[5rem]">
						{' '}
						Your City
					</span>
				</p>

				<p className="text-base text-textColor text-center md:text-left md:w-[80%]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non expedita
					tempore facilis omnis cum exercitationem ab autem. Iure minima cumque,
					sunt ipsa distinctio ad impedit amet nisi eaque doloremque numquam!
				</p>

				<button
					type="button"
					className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
				>
					Order now
				</button>
			</div>
			<div className="py-2 flex flex-1 items-center relative">
				<img
					src={HeroBg}
					className="lg:h-650 h-420 ml-auto bg-calc"
					alt="hero-bg"
				/>

				<div className="w-full h-full absolute top-[25px] left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
					{heroData &&
						heroData.map((item) => {
							return (
								<div
									key={item.id}
									className="lg:w-190 p-4 bg-cardOverlay 
                                    backdrop-blur-md rounded-3xl  flex flex-col items-center justify-center"
								>
									<img
										src={item.imageSrc}
										className="w-20 lg:w-40 -mt-10 lg:-mt-20"
										alt="I1"
										draggable={false}
									/>
									<p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
										{item.name}
									</p>
									<p className="text-[12px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
										{item.desc}
									</p>
									<p className="text-sm font-semibold text-headingColor">
										<span className="text-xs text-red-600">$</span> {item.price}
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default HomeContainer;
