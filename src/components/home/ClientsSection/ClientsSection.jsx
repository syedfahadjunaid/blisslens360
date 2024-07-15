import React from "react";

const ClientsSection = () => {
  return (
    <div className="w-[90%] h-full flex flex-col items-center justify-center gap-[2rem]">
      <div className="flex gap-[1rem] w-full">
        <div className="sectionHeading flex flex-col items-start max-md:p-0">
          <h1 className="text-[70px] text-[#3D3D3D] max-md:text-[40px]">
            The Client’s Words
          </h1>
        </div>
      </div>
      <div className="bg-[#FAFFEB] h-full w-full p-[1rem]">
        <div className="grid grid-cols-3 gap-[1rem] w-full max-md:overflow-x-scroll max-md:flex max-md:flex-row">
          <div className="grid grid-rows-2 gap-[1rem] max-md:min-w-[90%]">
            <div className="grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">
              <div className="flex flex-col items-start bg-white p-[1rem] max-md:p-[10px]">
                <h4 className="text-[#FFBB00]">Sarah & James</h4>
                <p className="text-[#5D5D5D] text-justify text-[10px] max-md:text-start">
                  Blisslens captured the essence of our wedding day perfectly.
                  Every photo and video reflects the joy, love, and beauty of
                  our special day
                </p>
                <p className="underline text-[#FFBB00] text-[10px] cursor-pointer">
                  View Images
                </p>
              </div>
              <div className="flex flex-col items-start bg-white p-[1rem]">
                <h4 className="text-[#FFBB00]">Sarah & James</h4>
                <p className="text-[#5D5D5D] text-justify text-[10px] max-md:text-start">
                  Blisslens captured the essence of our wedding day perfectly.
                  Every photo and video reflects the joy, love, and beauty of
                  our special day
                </p>
                <p className="underline text-[#FFBB00] text-[10px] cursor-pointer">
                  View Images
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start bg-white p-[1rem]">
              <h4 className="text-[#FFBB00] text-[24px]">Sarah & James</h4>
              <p className="text-[#5D5D5D] text-justify max-md:text-start">
                Blisslens captured the essence of our wedding day perfectly.
                Every photo and video reflects the joy, love, and beauty of our
                special day
              </p>
              <p className="underline text-[#FFBB00] cursor-pointer">
                View Images
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-[1rem] max-md:min-w-[90%]">
            <div className="flex flex-col items-start bg-white p-[1rem] max-md:p-[10px]">
              <h4 className="text-[#FFBB00] text-[24px]">Sarah & James</h4>
              <p className="text-[#5D5D5D] text-justify max-md:text-start">
                Blisslens captured the essence of our wedding day perfectly.
                Every photo and video reflects the joy, love, and beauty of our
                special day
              </p>
              <p className="underline text-[#FFBB00] cursor-pointer">
                View Images
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">
              <div className="flex flex-col items-start bg-white p-[1rem]">
                <h4 className="text-[#FFBB00]">Sarah & James</h4>
                <p className="text-[#5D5D5D] text-justify text-[10px] max-md:text-start">
                  Blisslens captured the essence of our wedding day perfectly.
                  Every photo and video reflects the joy, love, and beauty of
                  our special day
                </p>
                <p className="underline text-[#FFBB00] text-[10px] cursor-pointer">
                  View Images
                </p>
              </div>
              <div className="flex flex-col items-start bg-white p-[1rem]">
                <h4 className="text-[#FFBB00]">Sarah & James</h4>
                <p className="text-[#5D5D5D] text-justify text-[10px] max-md:text-start">
                  Blisslens captured the essence of our wedding day perfectly.
                  Every photo and video reflects the joy, love, and beauty of
                  our special day
                </p>
                <p className="underline text-[#FFBB00] text-[10px] cursor-pointer">
                  View Images
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-[1rem] max-md:min-w-[90%]">
            <div className="grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">
              <div className="flex flex-col items-start bg-white p-[1rem] max-md:p-[10px]">
                <h4 className="text-[#FFBB00]">Sarah & James</h4>
                <p className="text-[#5D5D5D] text-justify text-[10px] max-md:text-start">
                  Blisslens captured the essence of our wedding day perfectly.
                  Every photo and video reflects the joy, love, and beauty of
                  our special day
                </p>
                <p className="underline text-[#FFBB00] text-[10px] cursor-pointer">
                  View Images
                </p>
              </div>
              <div className="flex flex-col items-start bg-white p-[1rem]">
                <h4 className="text-[#FFBB00]">Sarah & James</h4>
                <p className="text-[#5D5D5D] text-justify text-[10px] max-md:text-start">
                  Blisslens captured the essence of our wedding day perfectly.
                  Every photo and video reflects the joy, love, and beauty of
                  our special day
                </p>
                <p className="underline text-[#FFBB00] text-[10px] cursor-pointer">
                  View Images
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start bg-white p-[1rem]">
              <h4 className="text-[#FFBB00] text-[24px]">Sarah & James</h4>
              <p className="text-[#5D5D5D] text-justify max-md:text-start">
                Blisslens captured the essence of our wedding day perfectly.
                Every photo and video reflects the joy, love, and beauty of our
                special day
              </p>
              <p className="underline text-[#FFBB00] cursor-pointer">
                View Images
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
