import { IonIcon, useIonRouter } from "@ionic/react";
import SearchInput from "../../components/input/search-input";
import PostSearchCard from "../../components/cards/post-search-card";
import { useAppSelector } from "../../store/store";

const SearchPosts = () => {
	const router = useIonRouter();
	let { posts } = useAppSelector((state) => state.post);

	return (
		<div className="flex flex-col gap-4 items-start p-4">
			<div className="flex items-center gap-3 w-full">
				<IonIcon
					slot="icon-only"
					icon="/assets/icons/solar_arrow-left-outline.svg"
					className="text-[#222] text-2xl"
					onClick={() => router.goBack()}
				/>
				<SearchInput placeholder="Search" />
			</div>
			<div className="flex flex-col gap-3 items-start w-full overflow-scroll">
				{posts.length > 0 &&
					posts.map((post: any) => (
						<PostSearchCard
							title={post?.message}
							time={post?.postdate}
							image={post?.postImage}
							username={post?.communityName?.replace("@", "")}
						/>
					))}
			</div>
		</div>
	);
};

export default SearchPosts;
