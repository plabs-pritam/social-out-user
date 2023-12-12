import { IonButton, IonContent } from "@ionic/react";
import { useState } from "react";
import { initCommunity } from "../../../data/user-data";
import CategoryCard from "../../../pages/choose-categories/category-card";
import Header from "../../headers/header";
import SearchInput from "../../input/search-input";

const SelectCommuntiy = ({ handleClose }: { handleClose: any }) => {
  const [categories, setCategories] = useState(initCommunity);

  const handleCategoryClick = (id: string) => {
    let data = JSON.parse(JSON.stringify(categories));
    data[data.findIndex((value: any) => value.id === id)].active =
      !data[data.findIndex((value: any) => value.id === id)].active;
    setCategories(data);
  };

  return (
    <IonContent color="white">
      <div className="flex gap-2 flex-col min-h-full text-black px-3">
        <Header showBackButton title="Select Communities" />
        <SearchInput placeholder="Search community" />
        <div className="grid grid-cols-2 gap-4 text-center">
          {categories.map((value) => (
            <CategoryCard
              key={value.id}
              {...value}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
        <IonButton className="mt-auto mb-3" onClick={handleClose}>
          continue
        </IonButton>
      </div>
    </IonContent>
  );
};

export default SelectCommuntiy;
