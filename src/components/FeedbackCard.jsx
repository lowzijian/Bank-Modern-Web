import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ id, content, name, title, img }) => {
  return (
    <div className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[27px] object-contain mb-4"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row mt-auto">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[20px] leading-[32px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
