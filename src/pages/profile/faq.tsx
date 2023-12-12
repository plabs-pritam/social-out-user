import { IonIcon, IonText } from "@ionic/react";
import DefaultLayout from "../../layouts/DefaultLayout";
import FaqCard from "../../components/cards/faq-card";
import EventHeader from "../../components/headers/events-header";
import { useState } from "react";

const questions = [
  {
    question: "How to create a account?",
    answer:
      "Suspendisse et suscipit quam, vestibulum condimentum nisl. Sed euismod mi vel pellentesque feugiat.",
  },
  {
    question: "How to add a payment method by this app?",
    answer:
      "Suspendisse et suscipit quam, vestibulum condimentum nisl. Sed euismod mi vel pellentesque feugiat.",
  },
  {
    question: "What Time Does The Stock Market Open?",
    answer:
      "Suspendisse et suscipit quam, vestibulum condimentum nisl. Sed euismod mi vel pellentesque feugiat.",
  },
  {
    question: "Is The Stock Market Open On Weekends?",
    answer:
      "Suspendisse et suscipit quam, vestibulum condimentum nisl. Sed euismod mi vel pellentesque feugiat.",
  },
];

const Faq = ({ handleClose }: { handleClose: any }) => {

  const [questionStates, setQuestionStates] = useState(
    questions.map(() => false)
  );

  const toggleAnswer = (index: number) => {
    const newQuestionStates = [...questionStates];
    newQuestionStates[index] = !newQuestionStates[index];
    setQuestionStates(newQuestionStates);
  };

  return (
    <DefaultLayout
      title="FAQ’s"
      showBackButton
      onClickBack={handleClose}
      hideTabBar
    >
      <div className="flex flex-col flex-shrink-0 p-4 gap-[32px]">
        {/* cards */}
        <div className="flex items-start gap-4 overflow-scroll">
          <FaqCard />
          <FaqCard />
          <FaqCard />
        </div>

        <div className="flex flex-col items-start w-full gap-4">
          <EventHeader eventName="Top Questions" routerLink=" " />

          <div className="flex flex-col items-start gap-3 w-full">
            {questions.map((question, index) => (
              <div
                key={index}
                className="flex w-full px-3 py-[14px] items-center justify-center gap-3 rounded-lg border border-[#E3E8EF] bg-white"
              >
                <div className="flex flex-col items-start justify-center w-full gap-2">
                  <div className="flex items-center justify-between w-full">
                    <IonText className="text-black text-sm font-bold leading-[18px] tracking-[0.1px]">
                      {question.question}
                    </IonText>

                    <IonIcon
                      src={`${
                        questionStates[index]
                          ? "/assets/icons/minus-regular.svg"
                          : "/assets/icons/plus-bold-white.svg"
                      } `}
                      className="text-[#6E0699] w-6 h-6"
                      onClick={() => toggleAnswer(index)}
                    />
                  </div>
                  {questionStates[index] && (
                    <IonText className="text-[#898989] text-xs font-normal leading-normal">
                      {question.answer}
                    </IonText>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Faq;
