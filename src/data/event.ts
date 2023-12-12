import { getEvents } from "../services/event";
import { likePost } from "../services/post";
import { BASE_URL } from "../utils/constants";

export const likeAndDislikeEvent = async (
	userId: string,
	postId: string,
	isLike: boolean,
) => {
	try {
		let payload = {
			PostShare: 0,
			PostlogID: 0,
			UserID: userId,
			PostID: postId,
			PostLike: true,
			type: isLike ? "Like" : "DisLike",
			PostDislike: true,
		};
		if (isLike) {
			payload.PostLike = true;
			payload.PostDislike = false;
		} else {
			payload.PostLike = false;
			payload.PostDislike = true;
		}
		const response = await likePost(payload);
		if (response.ok) {
		}
	} catch (error: any) {
		console.log("Error occurred while like the event", error.message);
	}
};

export const fetchEvent = async (callBack: any, type: string) => {
	try {
		let events = [];
		let payload: any = {
			type,
			pageno: "1",
			pagesize: "20",
		};
		payload.value = 34;
		const response = await getEvents(payload);
		if (response.ok) {
			events = (response.data as any)?.data;
			if (events.length > 0) {
				events = events.map((event: any) => {
					return {
						ratings: true,
						totalMembers: 0,
						id: event?.EventID,
						price: event?.Amount || 0,
						membersProfileImg: "",
						title: event?.EventName,
						location: event?.Location || "N/A",
						date: `${event?.eday}th ${event?.eyear}`,
						image: `${BASE_URL}/${event?.EventImage}`,
					};
				});
				callBack(JSON.parse(JSON.stringify(events)));
			}
		}
	} catch (error: any) {
		console.log("Error occurred while getting event", error.message);
	}
};
