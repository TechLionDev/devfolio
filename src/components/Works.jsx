import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_demo,
}) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
			>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt='project_image'
						className='w-full h-full object-cover rounded-2xl'
					/>

					<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() =>
								window.open(source_code_link, '_blank')
							}
							className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
						>
							<img
								src={github}
								alt='source code'
								className='w-1/2 h-1/2 object-contain'
							/>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-secondary text-[14px]'>
						{description}
					</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
				{live_demo ? (
					<div className='mt-4 flex flex-wrap gap-2 group'>
						<a
							href={live_demo}
							className='bg-[#915eff] rounded-lg p-2 hover:bg-[#7e3bff] transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:bg-opacity-0 hover:text-[#915eff]'
						>
							<div class='flex items-center justify-center space-x-3 '>
								<p>View Live Demo</p>
								<p className='flex'>
									<svg
										viewBox='0 0 24 24'
										width='24'
										height='24'
										stroke='currentColor'
										stroke-width='2'
										fill='none'
										stroke-linecap='round'
										stroke-linejoin='round'
										class='css-i6dzq1'
									>
										<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
										<polyline points='15 3 21 3 21 9'></polyline>
										<line
											x1='10'
											y1='14'
											x2='21'
											y2='3'
										></line>
									</svg>
								</p>
							</div>
						</a>
					</div>
				) : (
					''
				)}
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					Following projects showcases my skills and experience
					through real-world examples of my work. Each project is
					briefly described with links to code repositories and live
					demos in it. It reflects my ability to solve complex
					problems, work with different technologies, and manage
					projects effectively.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
