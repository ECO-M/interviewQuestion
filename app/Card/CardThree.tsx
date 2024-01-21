import Tags from "@/app/components/Fags";
import FooterTags from "@/app/components/FooterTags";
import React from "react";
import {CardTypes} from "@/app/Card/types/types";

/**
 * 卡片组件三
 * @constructor
 */
// tags模拟数据
const list = ['Beginner']
// 底部tags模拟数据
const footerJson = [
  {
    url: '../../time.svg',
    text: '36 Hour',
  },
  {
    url: '../../book.svg',
    text: '5 Course'
  }
]
const CardThree: React.FC<CardTypes> = ({title, content}) => {
  return (
    <div className="card-three-bg w-[29.7142857rem] mr-[3.71428571rem] h-full">
      <div
        className="w-[29.7142857rem] mr-[3.71428571rem] pt-[2.57142857rem] pl-[2.85714286rem] pr-[1.28571429rem] h-full card-three">
        <div
          className="card-three-line w-[3.28571429rem] h-[0.28571429rem] card-one-line rounded-[0.78571429rem]"></div>
        <h4 className="text-[#EDEDED] card-h4 pt-7 pb-4">{title}</h4>
        <Tags list={list}/>
        <p className="text-[#676767] pt-4 pl-4">{content}</p>
        <footer className="flex pt-[3.5rem] items-center">
          <FooterTags {...footerJson[0]}/>
          <FooterTags {...footerJson[1]}/>
        </footer>
      </div>
    </div>
  )
}

export default CardThree;