import NewPost from "./new-post";
import { getAllPost } from "../../services/post";
import { useAppSelector } from "../../store/store";
import React, { useEffect, useState } from "react";
import HomeCard from "../../components/cards/home-card";
import DefaultLayout from "../../layouts/DefaultLayout";
import { IonModal, IonSegment, IonSegmentButton } from "@ionic/react";
import PostTabs from "../../components/home/tabs";
import { fetchPost } from "../../data/post";
import { useDispatch } from "react-redux";

const Home: React.FC = () => {
	let dispatch = useDispatch();
	let { user } = useAppSelector((state: any) => state.user);
	let { reload } = useAppSelector((state) => state.uiController);
	let { posts, postReload } = useAppSelector((state) => state.post);

	let [postSearch, setPostSearch] = useState<string>("");

	useEffect(() => {
		fetchPost(user.UserID, dispatch, "all", postSearch);
	}, []);

	useEffect(() => {
		if (postReload) {
			fetchPost(user.UserID, dispatch, "all", postSearch);
		}
	}, [postReload, reload]);

	return (
		<DefaultLayout
			showDropDown
			paddingBottom
			showChatButton
			showBellButton
			showSearchButton
			onClickSearch="/user/search-post">
			<PostTabs />
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
				{posts.length > 0 &&
					posts?.map((post: any) => (
						<HomeCard
							id={post?.id}
							key={post?.id}
							likes={post?.likes}
							name={post?.username}
							shares={post?.shares}
							time={post?.postdate}
							message={post?.message}
							image={post?.postImage}
							dislikes={post?.dislikes}
							comments={post?.comments}
							isUserLike={post?.UserLike === 1 ? true : false}
							profileImage={post?.profileImage}
							isUserDisLike={post?.UserDisLike}
							communityName={post?.communityName}
						/>
					))}
			</div>
		</DefaultLayout>
	);
};

export default Home;
