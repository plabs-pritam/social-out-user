/** @format */
import moment from "moment";
import { FC, useEffect, useState } from "react";
import { IonContent, IonIcon } from "@ionic/react";
import { getPostComment } from "../../services/post";
import { requestQuery } from "../../utils/request-query";
import CommentCard from "../../components/cards/comment-card";

const HomeComments: FC<{ postId: string; handleClose: any }> = ({
	postId,
	handleClose,
}) => {
	let [comments, setComments] = useState<any>([]);

	useEffect(() => {
		fetchPostComment();
	}, [postId]);

	const fetchPostComment = async () => {
		try {
			let payload = {
				search: "",
				pageno: 1,
				pagesize: 20,
				PostID: postId,
			};
			let query = requestQuery(payload);
			let response = await getPostComment(query);
			if (response.ok) {
				comments = (response.data as any)?.data;
				if (comments.length > 0) {
					setComments(JSON.parse(JSON.stringify(comments)));
				}
			}
		} catch (error: any) {
			console.log("Error occurred while getting post", error.message);
		}
	};

	return (
		<IonContent color="white">
			<div className="text-black">
				<div className="sticky top-0 flex gap-3 items-center bg-white p-4">
					<IonIcon
						onClick={handleClose}
						className="text-2xl cursor-pointer"
						icon={"/assets/icons/solar_arrow-left-outline.svg"}
					/>
					<div className="text-[18px] font-bold">Comments</div>
				</div>
				{comments?.length > 0 && (
					<div className="flex gap-5 flex-col p-4">
						{comments.map((comment: any) => (
							<CommentCard
								totalReplies={0}
								replierName={"none"}
								name={comment?.Name}
								key={comment.PCommentID}
								id={comment?.PCommentID}
								comment={comment?.Comment}
								profileImg={"/assets/images/Avatar.png"}
								replierProfileImg={"/assets/images/Avatar.png"}
								time={moment(comment?.CreatedOn).format("YYYY-MM-DD")}
							/>
						))}
					</div>
				)}
				{comments?.length === 0 && (
					<div className="flex flex-row justify-center w-full mt-10">
						No Comments found
					</div>
				)}
			</div>
		</IonContent>
	);
};

export default HomeComments;
