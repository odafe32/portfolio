import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	// Updated counts based on your professional info
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 }); // 4 years experience
	useCountUp({ ref: 'projectsCounter', end: 120, duration: 2 }); // 120+ projects
	useCountUp({ ref: 'clientsCounter', end: 35, duration: 2 }); // 35+ satisfied clients
	useCountUp({ ref: 'feedbackCounter', end: 98, duration: 2 }); // 98% positive feedback

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
				<CounterItem
					title="Years of Experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Projects Completed"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Happy Clients"
					counter={<span id="clientsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Positive Feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
