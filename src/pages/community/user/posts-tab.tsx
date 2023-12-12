/** @format */

import HomeCard from "../../../components/cards/home-card";
import getRandomId from "../../../helperFunctions/getRandomId";
import CreatePostCard from "../../../components/cards/create-post-card";
import { Posts } from "../../../data/user-data";
import { useState } from "react";
import { IonContent, IonModal } from "@ionic/react";
import HomeComments from "../../home/home-comments";
import NewPost from "../../home/new-post";
import PostOptions from "../../../components/home/PostOptions";

const PostsTab = () => {
	const [showComments, setShowComments] = useState(false);
	const [postMenu, setPostMenu] = useState(false);
	const [newPost, setNewPost] = useState(false);

	return (
		<IonContent className="ion-padding">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
				{Posts.length === 0 ? (
					<CreatePostCard />
				) : (
					<>
						{Posts.map((post) => (
							<HomeCard
								// showComments={() => setShowComments(true)}
								// showPostOption={() => setPostMenu(true)}
								key={post.id}
								{...post}
							/>
						))}

						{/* Comments */}
						<IonModal isOpen={showComments}>
							<HomeComments handleClose={() => setShowComments(false)} />
						</IonModal>

						{/* New Post */}
						<IonModal isOpen={newPost}>
							<NewPost handleClose={() => setNewPost(false)} />
						</IonModal>

						{/* Post Options */}
						<IonModal
							isOpen={postMenu}
							onDidDismiss={() => setPostMenu(false)}
							breakpoints={[0, 0.3, 1]}
							initialBreakpoint={0.3}
							backdropBreakpoint={0}
							className="post-option-modal">
							<PostOptions closePostOption={() => setPostMenu(false)} />
						</IonModal>
					</>
				)}
			</div>
		</IonContent>
	);
};

export default PostsTab;
