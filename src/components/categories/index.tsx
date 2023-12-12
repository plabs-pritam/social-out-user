import { useEffect, useState } from "react";
import { categoriesList } from "../../data/user-data";
import { getCategories } from "../../services/category";
import { requestQuery } from "../../utils/request-query";
import { IonSegment, IonSegmentButton } from "@ionic/react";

const Categories = () => {
	let [categories, setCategories] = useState<any>([]);

	useEffect(() => {
		fetchCategories();
	}, []);

	const fetchCategories = async () => {
		try {
			let query: any = {
				pageno: 1,
				pagesize: 20,
				search: "",
			};
			query = requestQuery(query);
			const response = await getCategories(query);
			if (response.ok) {
				let categoryList = [];
				let list = (response.data as any).data;
				if (list.length > 0) {
					categoryList.push({
						id: "all",
						title: "all",
					});
					list.map((category: any) => {
						categoryList.push({
							id: category.CategoryID,
							title: category.CategoryName,
						});
						return category;
					});
				}
				setCategories(JSON.parse(JSON.stringify(categoryList)));
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<>
			<IonSegment
				scrollable={true}
				value={categories[0]?.title}
				className="tag-selection bg-white sticky top-0 px-2 z-20 mt-1 no-scrollbar flex flex-row">
				{categories?.map((category: any) => (
					<div key={category?.id}>
						<IonSegmentButton className="capitalize" value={category?.id}>
							{category?.title}
						</IonSegmentButton>
					</div>
				))}
			</IonSegment>
		</>
	);
};

export default Categories;
