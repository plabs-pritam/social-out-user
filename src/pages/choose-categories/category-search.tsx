import { IonIcon } from "@ionic/react";

interface CategorySearchProps {
  handleSearch?: any;
}

export const CategorySearch: React.FC<CategorySearchProps> = ({
  handleSearch,
}) => {
  return (
    <div className="relative flex mb-3">
      <IonIcon
        icon="/assets/icons/search.svg"
        className="absolute h-full ms-5 my-auto"
      />
      <input
        onChange={(e) => handleSearch(e.target.value)}
        className="border border-neutral-300 rounded-lg w-full p-3 ps-11 bg-[#F7F8F9]"
        placeholder="Search for more interests"
      />
    </div>
  );
};
