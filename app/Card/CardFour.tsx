/**
 * 卡片组件四
 * @constructor
 */
import Image from "next/image";
import React from "react";
import FooterTags from "@/app/components/FooterTags";

// 底部tags模拟数据
const footerJson = [
  {
    url: '../../time.svg',
    text: '36 Hour',
  }
]
const CardFour: React.FC = () => {
  return (
    <div className="card-four-bg w-[29.7142857rem] mr-[3.71428571rem] h-full">
      <div className="w-[29.7142857rem] h-full card-four relative">
        <div
          className="w-[3.28571429rem] h-[0.28571429rem] top-[2.07142857rem] left-[2.21428571rem] card-four-line absolute rounded-[0.78571429rem]"></div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] ml-4 dark:invert h-full"
          src={'../../transformed.svg'}
          alt="Next-default"
          width={380}
          height={238}
          priority
        />
        <span className="absolute left-[2.14285714rem] bottom-[5.85714286rem] four-text">What is Bitcoin</span>
        <div className="absolute right-[5.71428571rem] bottom-[1.01714286rem]">
          <FooterTags {...footerJson[0]}/>
        </div>
      </div>
    </div>
  )
}

export default CardFour;