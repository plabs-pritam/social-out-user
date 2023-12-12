import { IonIcon, IonImg, IonRadio } from "@ionic/react";
import { FC } from "react";

export interface CategoryCardType {
  id: string;
  image: string;
  title: string;
  active: boolean;
  onClick: any;
}

const CategoryCard: FC<CategoryCardType> = ({
  id,
  image,
  title,
  active,
  onClick,
}) => {
  return (
    <div
      className="group transition-all relative cursor-pointer rounded-2xl p-1"
      data-active={active}
      onClick={() => onClick(id)}
    >
      <IonImg
        className="rounded-lg overflow-hidden h-[120px] object-cover"
        src={image}
      />
      {active && (
        <IonIcon
          src="/assets/icons/much-order.svg"
          className="text-xl absolute top-2 right-2"
        />
      )}
      <p className="text-neutral-500 text-left mt-1 group-data-[active=true]:text-black">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
