import EventHeader from "../../components/headers/events-header";

const ExperienceEvent = () => {
	return (
		<div>
			<EventHeader
				eventName="New Experiences"
				icon="/assets/icons/solar_routing-outline.svg"
				iconBg="bg-[#EAF6FF]"
				routerLink="/upcoming-events" 
			/>
			<div className="flex gap-3 overflow-auto scroll-m-0 px-4 no-scrollbar">
					<div className="flex h-[100px] w-[164px] relative items-center justify-center flex-shrink-0 rounded-lg overflow-hidden">
						<img src="/assets/images/post.jpg" alt="" />
						<p className="text-white text-sm font-medium leading-4 absolute">
							MUSIC
						</p>
					</div>
					<div className="flex h-[100px] w-[164px] relative items-center justify-center flex-shrink-0 rounded-lg overflow-hidden">
						<img src="/assets/images/venue/hotel.jpg" alt="" />
						<p className="text-white text-sm font-medium leading-4 absolute">
							TREKS
						</p>
					</div>
			</div>
		</div>
	);
};

export default ExperienceEvent;
