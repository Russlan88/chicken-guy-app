/** @format */

import React, { useEffect, useRef, useState } from 'react';
import Delivery from '../assets/img/delivery.png';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

const MainContainer = () => {
	const [{ foodItems }, dispatch] = useStateValue();
	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {}, [scrollValue]);

	return (
		<div className="w-full h-auto flex flex-col items-center justify-center overflow-hidden">
			<HomeContainer />

			<section className="w-full my-6">
				<div className="w-full flex items-center justify-between">
					<p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
						Our fresh & healthy fruits
					</p>

					<div className="hidden md:flex gap-3 items-center">
						<motion.div
							whileTap={{ scale: 0.75 }}
							className="w-8 h-8 rounded-lg bg-orange-300 cursor-pointer flex items-center justify-center transition-all duration-100 ease-in-out hover:bg-orange-500"
							onClick={() => setScrollValue(-200)}
						>
							<MdChevronLeft className="text-lg text-white" />
						</motion.div>
						<motion.div
							whileTap={{ scale: 0.75 }}
							className="w-8 h-8 rounded-lg bg-orange-300 cursor-pointer flex items-center justify-center transition-all duration-100 ease-in-out hover:bg-orange-500"
							onClick={() => setScrollValue(200)}
						>
							<MdChevronRight className="text-lg text-white" />
						</motion.div>
					</div>
				</div>
				<RowContainer
					scrollValue={scrollValue}
					flag={true}
					data={foodItems?.filter((item) => item.category === 'icecreams')}
				/>
			</section>
		</div>
	);
};

export default MainContainer;
