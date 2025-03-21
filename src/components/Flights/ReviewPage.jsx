import React, { useState } from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const ReviewPage = () => {
  const [showReviewEdit, setShowReviewEdit] = useState(false);
  const [showTravellersEdit, setShowTravellersEdit] = useState(false);

  return (
    <div className="mt-0 bg-white py-2 shadow-lg bg-purple300">
      <ol className="space-x-4 ml-8 flex paragraphFonts">
        <li
          className={`rev ${showReviewEdit ? "block" : "hidden"} text-orange500 hover:text-orange400`}
        >
          <a href="javascript:void(0)" className="text-lg font-semibold">1. Review</a>
        </li>
        <li className="rev text-orange500 hover:text-orange400">
          <span className="text-lg font-semibold">1. Review</span>
        </li>
        <li> 
            <RiArrowRightDoubleFill className="mt-2 mx-4 text-xl text-blue600"/>
          {/* <span className="arr block bg-gray-300 h-1 w-12 mx-auto rounded"></span> */}
        </li>
        <li
          className={`rev1 ${showTravellersEdit ? "block" : "hidden"} text-orange500 hover:text-orange400`}
        >
          <a href="javascript:void(0)" className="text-lg font-semibold">2. Travellers</a>
        </li>
        <li className="rev1 text-orange500 hover:text-orange400">
          <span className="text-lg font-semibold">2. Travellers</span>
        </li>
        <li>
        <RiArrowRightDoubleFill className="mt-2 mx-4 text-xl text-blue600"/>
          {/* <span className="arr block bg-gray-300 h-1 w-12 mx-auto rounded"></span> */}
        </li>
        <li className="rev2 text-orange500 hover:text-orange400">
          <span className="text-lg font-semibold">3. Payment</span>
        </li>
      </ol>
    </div>
  );
};

export default ReviewPage;
