import { getAllPost } from "../services/post";
import { setPostReload, setPosts } from "../store/reducer/post";
import { setReload } from "../store/reducer/ui-controller";
import { BASE_URL } from "../utils/constants";

export const fetchPost = async (
	userId: string,
	dispatch: any,
	type: string,
	name?: string,
) => {
	dispatch(setReload(true));
	try {
		let posts = [];
		let payload: any = {
			type: type,
			pageno: "1",
			value: name,
			pagesize: "10",
		};
		const response = await getAllPost(payload, userId);
		if (response.ok) {
			posts = (response.data as any)?.data || [];
			if (posts.length > 0) {
				posts = posts.map((post: any) => {
					return {
						id: post?.PostID || 0,
						likes: post?.LikeCount || 0,
						shares: post?.ShareCount || 0,
						username: post?.Name || "N/A",
						message: post?.Title || "N/A",
						profileImage: post?.profileImage,
						postdate: post?.postdate || "N/A",
						dislikes: post?.DislikeCount || 0,
						comments: post?.CommentCount || 0,
						postImage: `${BASE_URL}/${post.PostImg}`,
						communityName: `@${post?.Comname}` || "N/A",
					};
				});
			}
			dispatch(setPosts(JSON.parse(JSON.stringify(posts))));
			setTimeout(() => dispatch(setPostReload(false)), 1000);
		}
	} catch (error: any) {
		console.log("Error occurred while fetching post", error.message);
	}
	dispatch(setReload(false));
};
