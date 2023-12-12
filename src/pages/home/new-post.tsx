import {
	IonContent,
	IonFooter,
	IonIcon,
	IonImg,
	IonModal,
	IonPage,
	IonText,
	IonTextarea,
	useIonRouter,
} from "@ionic/react";
import { FC, useState } from "react";
import PrimaryButton from "../../components/buttons/primary-button";
import PostInputs from "../../components/home/new-post-inputs";
import PostFooter from "../../components/home/post/post-footer";
import SelectCommuntiy from "../../components/home/post/select-community";

const posts = [
	{
		id: 1,
		image: "/assets/images/post.jpg",
	},
	{
		id: 2,
		image: "/assets/images/post.jpg",
	},
];

const NewPost: FC<{ handleClose: any }> = ({ handleClose }) => {
	const router = useIonRouter();
	const [showSelectCommunity, setShowSelectCommunity] = useState(false);

	const showSlectCommunityHandler = () => {
		setShowSelectCommunity(true);
	};

	return (
		<IonPage>
			<IonContent color="white">
				<div className="text-black h-full">
					{/* header */}
					<div className="sticky top-0 flex gap-3 items-center bg-white p-4">
						<IonIcon
							onClick={() => router.push("/user/home", "back", "pop")}
							className="text-2xl cursor-pointer"
							icon={"/assets/icons/solar_arrow-left-outline.svg"}
						/>
						<div className="text-[18px] font-bold">New Post</div>
					</div>

					<div className="p-4 flex flex-col gap-4 mt-1">
						{/* posts */}
						<textarea
							name="postodescription"
							placeholder="Type about your post."
							cols={30}
							rows={3}
							className="bg-transparent outline-none text-[#111729] text-base font-normal leading-[18px]"
						/>
						<div className="flex gap-3">
							{posts.map((post) => (
								<div
									key={post.id}
									className="w-[100px] h-[100px] relative rounded-lg overflow-hidden">
									<img src={post.image} className="bg-cover w-full h-full" />
									<p className="absolute top-0 right-0 w-5 h-5 bg-[#5B56F8] shadow-sm border border-[#E3E8EF] rounded-full text-center text-white text-[11px] flex items-center justify-center font-bold leading-[13px] tracking-[0.07px]">
										{post.id}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</IonContent>

			<PostFooter onSelectCommunity={showSlectCommunityHandler} />

			<IonModal isOpen={showSelectCommunity}>
				<SelectCommuntiy handleClose={() => setShowSelectCommunity(false)} />
			</IonModal>
		</IonPage>
	);
};

export default NewPost;
