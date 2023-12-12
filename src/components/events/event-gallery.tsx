import { IonImg } from "@ionic/react";

const EventGallery = () => {
  return (
    <div className="grid gap-3 grid-cols-3">
      <div>
        <IonImg
          className="rounded-3xl overflow-hidden aspect-square object-cover"
          src="/assets/images/post.jpg"
        />
      </div>
      <div>
        <IonImg
          className="rounded-3xl overflow-hidden aspect-square object-cover"
          src="/assets/images/post.jpg"
        />
      </div>
      <div className="relative grid place-items-center">
        <span className="absolute text-white ">+124</span>
        <IonImg
          className="rounded-3xl overflow-hidden w-full aspect-square object-cover"
          src="/assets/images/post.jpg"
        />
      </div>
    </div>
  );
};

export default EventGallery;
