import { debounce } from "lodash";
import { IonIcon } from "@ionic/react";
import { useState, useMemo, useEffect } from "react";
import { fetchPost } from "../../data/post";
import { useAppSelector } from "../../store/store";
import { useDispatch } from "react-redux";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
	let dispatch = useDispatch();

	let [search, setSearch] = useState<string>("");
	let { user } = useAppSelector((state) => state.user);

	useEffect(() => {
		fetchPost(user.UserID, dispatch, "search", search);
	}, [search]);

	const handleSearch = (search: string) => {
		setSearch(search);
	};

	const debouncedResults = useMemo(() => {
		return debounce(handleSearch, 1000);
	}, []);

	return (
		<div className="relative flex w-full">
			<IonIcon
				icon="/assets/icons/search.svg"
				className="absolute h-full ms-5 my-auto text-[#BFBEBF]"
			/>
			<input
				placeholder={placeholder}
				onChange={(e) => debouncedResults(e.target.value)}
				className="border border-neutral-300 rounded-lg w-full p-3 ps-11 bg-[#F7F8F9] text-[#222] font-medium leading-normal"
			/>
			<IonIcon
				icon="/assets/icons/solar_close-circle-bold.svg"
				className="absolute h-full ms-5 my-auto right-[14px] text-[#BFBEBF]"
			/>
		</div>
	);
};

export default SearchInput;
