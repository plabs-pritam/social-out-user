import { IonIcon } from "@ionic/react";

interface QuickBallProps {
  quickBallHandler: () => void;
  showQuickBallList: boolean;
  showGuidelines: () => void;
}

const QuickBall: React.FC<QuickBallProps> = ({
  quickBallHandler,
  showQuickBallList,
  showGuidelines
}) => {
  return (
    <div>
      <div
        className="quickBall bg-[#B00DF6] p-[16px] gap-[10px] rounded-[50px] absolute z-[200] right-[20px] bottom-[105px]"
        onClick={quickBallHandler}
      >
        <div className="flex items-center justify-center relative">
          <IonIcon
            className="w-6 h-6 text-white"
            icon={"/assets/icons/plus-bold-white.svg"}
          />

          {/* Quickball items */}
          {showQuickBallList && (
            <>
              <div className="flex absolute top-[-70px] min-w-max right-[-9px] items-center gap-2">
                <p className="text-white text-right text-sm font-medium leading-[18px]">
                  Create event
                </p>
                <div className="bg-[#fff] flex items-center justify-center p-[12px] gap-[10px] rounded-[50px]"
                  onClick={showGuidelines}
                >
                  <IonIcon
                    className="w-5 h-5 text-[#B00DF6]"
                    icon={"/assets/icons/solar_golf-outline.svg"}
                  />
                </div>
              </div>

              <div className="flex absolute top-[-127px] min-w-max right-[-9px] items-center gap-2">
                <p className="text-white text-right text-sm font-medium leading-[18px]">
                  Create community
                </p>
                <div 
                  className="bg-[#fff] flex items-center justify-center p-[12px] gap-[10px] rounded-[50px]"
                  onClick={showGuidelines}
                >
                  <IonIcon
                    className="w-5 h-5 text-[#B00DF6]"
                    icon={"/assets/icons/solar_hand-stars-outline.svg"}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickBall;
