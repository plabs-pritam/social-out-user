/** @format */

import { debounce } from 'lodash'
import { getCategories } from '../../services/category'
import { requestQuery } from '../../utils/request-query'
import { FC, useEffect, useState, useMemo } from 'react'
import {
	IonButton,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonRadio,
	useIonRouter,
} from '@ionic/react'
import { CategorySearch } from './category-search'
import { setOnBoard } from '../../store/reducer/user'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/store'

const ChooseCategories: FC = () => {
	const router = useIonRouter()
	const dispatch = useDispatch()
	let [categories, setCategories] = useState<any>([])
	let [searchCategory, setSearchCategory] = useState<string>('')

	let { user, onBoard } = useAppSelector((state) => state.user)

	useEffect(() => {
		fetchCategories()
	}, [searchCategory])

	const handleCategoryClick = (id: string) => {
		let data = JSON.parse(JSON.stringify(categories))
		data[data.findIndex((value: any) => value.id === id)].active =
			!data[data.findIndex((value: any) => value.id === id)].active
		setCategories(data)
	}

	const fetchCategories = async () => {
		try {
			let query: any = {
				pageno: 1,
				pagesize: 20,
				search: searchCategory,
			}
			query = requestQuery(query)
			const response = await getCategories(query)
			if (response.ok) {
				categories = (response.data as any).data
				if (categories.length > 0) {
					categories = categories.map((category: any) => {
						return {
							id: category.CategoryID,
							title: category.CategoryName,
							active: false,
						}
					})
				}
				setCategories(JSON.parse(JSON.stringify(categories)))
			}
		} catch (error: any) {
			console.log(error.message)
		}
	}

	const handleSearch = (search: string) => {
		setSearchCategory(search)
	}

	const debouncedResults = useMemo(() => {
		return debounce(handleSearch, 1000)
	}, [])

	const handleSubmit = () => {
		let payload = {
			LocationID: 0,
			LanguageID: 0,
			OnBoardID: '',
			CategoryID: '',
			UserID: user.userId,
		}
		let categoryId = categories.filter((category: any) => category.active)
		payload.CategoryID = categoryId.map((category: any) => category.id).join(',')
		dispatch(setOnBoard(payload))
		router.push('/choose-location', 'forward', 'push')
	}

	return (
		<IonContent color='white'>
			<div className='flex gap-2 flex-col min-h-full text-black px-3'>
				<h1 className='text-[28px] font-bold leading-tight mt-3'>
					Choose a few categories your interested!
				</h1>
				<p className='text-neutral-500 mb-3'>Fusce lobortis sodales est elementum vulputate.</p>
				<CategorySearch handleSearch={debouncedResults} />
				<ul className='flex items-center gap-4 flex-wrap list-none'>
					{categories.map((category: any) => (
						<div
							key={category.id}
							className={`flex py-2 px-3 items-center rounded-3xl text-xs font-medium capitalize ${
								category.active ? 'bg-[#6E0699] text-white' : 'bg-[#F5F5F5] text-black'
							}`}
							onClick={() => handleCategoryClick(category.id)}
						>
							<div>{category.title}</div>
						</div>
					))}
				</ul>
				<IonButton className='mt-auto mb-3' onClick={() => handleSubmit()}>
					continue
				</IonButton>
			</div>
		</IonContent>
	)
}

export default ChooseCategories
