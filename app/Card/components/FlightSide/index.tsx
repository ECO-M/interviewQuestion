// sign组件
import React from "react";
import Image from "next/image";
const FlightSide: React.FC = () => {
  return (
    <div className="flex flightSide py-[0.57142857rem] px-[1.14285714rem] bg-[#2A2A2A]">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert h-full mr-2"
        src={'../../flight-Sideway.svg'}
        alt="Next-default"
        width={20}
        height={20}
        priority
      />
      <span className="flightSide-text">45% COMPLETED</span>
    </div>
  )
}
export default FlightSide;