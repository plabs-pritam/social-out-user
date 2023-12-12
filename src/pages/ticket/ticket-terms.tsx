import { IonCheckbox } from "@ionic/react";

const TicketTerms = () => (
  <div className="flex items-center gap-3 my-10">
    {/* <input
      type="checkbox"
      className="w-6 h-6 bg-[#9962b0] accent-[#d5a9e7] shrink-0"
    /> */}
    <IonCheckbox
      className="w-6 h-6 shrink-0"
    />

    <p className="text-[#677489] text-sm not-italic font-medium leading-normal tracking-[0.07px]">
      I accept the SocialOut{" "}
      <a href="#" className="text-[#6E0699]">
        Terms of Services
      </a>
      ,{" "}
      <a href="#" className="text-[#6E0699]">
        Community Guidelines
      </a>
      and{" "}
      <a href="#" className="text-[#6E0699]">
        Privacy Policy
      </a>{" "}
      (required)
    </p>
  </div>
);

export default TicketTerms;
