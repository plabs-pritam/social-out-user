const Step2 = ({ handleAccountSelection }: { handleAccountSelection: any }) => {
  return (
    <>
      <div className="text-[28px] font-bold">Type of Account 🧑🏽</div>
      <div className="text-[14px] text-gray-600 mb-4">
        Choose the type of account from the list below
      </div>
      <div className="flex flex-col items-start gap-3">
        {/* list 1 */}
        <div className="flex p-4 w-full justify-center items-center gap-1 border rounded-xl border-[#D0D0D0]">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="flex w-7 h-7 p-2 justify-center items-center rounded-[40px] bg-[#1212121a]">
              <img
                src="/assets/icons/Frame.svg"
                alt="frame"
                className="text-white"
              />
            </div>
            <h1 className="text-[#121212] text-[28px] leading-8 font-medium">
              Artist
            </h1>
            <p className="text-[#BDBDBD] text-xs leading-normal font-normal">
              Lorem ipsum dolor sit amet consectetur. Massa facilisi enim
              viverra tempor.
            </p>
          </div>

          <input
            type="radio"
            name="Artist"
            id="Artist"
            className="rounded-full border-2 border-black accent-[#6E0699]"
            onChange={() => handleAccountSelection("artist")}
          />
        </div>
        {/* list 2 */}
        <div className="flex p-4 w-full justify-center items-center gap-1 border rounded-xl border-[#D0D0D0]">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="flex w-7 h-7 p-2 justify-center items-center rounded-[40px] bg-[#1212121a]">
              <img
                src="/assets/icons/Frame.svg"
                alt="frame"
                className="text-white"
              />
            </div>
            <h1 className="text-[#121212] text-[28px] leading-8 font-medium">
              Service Provider
            </h1>
            <p className="text-[#BDBDBD] text-xs leading-normal font-normal">
              Lorem ipsum dolor sit amet consectetur. Massa facilisi enim
              viverra tempor.
            </p>
          </div>

          <input
            type="radio"
            name="Service Provider"
            id="Service Provider"
            className="rounded-full border-2 border-transparent accent-[#6E0699]"
            onChange={() => handleAccountSelection("serviceProvider")}
          />
        </div>
        {/* list 3 */}
        <div className="flex p-4 w-full justify-center items-center gap-1 border rounded-xl border-[#D0D0D0]">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="flex w-7 h-7 p-2 justify-center items-center rounded-[40px] bg-[#1212121a]">
              <img
                src="/assets/icons/Frame.svg"
                alt="frame"
                className="text-white"
              />
            </div>
            <h1 className="text-[#121212] text-[28px] leading-8 font-medium">
              Venue Provider
            </h1>
            <p className="text-[#BDBDBD] text-xs leading-normal font-normal">
              Lorem ipsum dolor sit amet consectetur. Massa facilisi enim
              viverra tempor.
            </p>
          </div>

          <input
            type="radio"
            name="Venue Provider"
            id="Venue Provider"
            className="rounded-full border-2 border-black accent-[#6E0699]"
            onChange={() => handleAccountSelection("venueProvider")}
          />
        </div>
      </div>
    </>
  );
};

export default Step2;