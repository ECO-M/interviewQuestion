/**
 * 卡片组件一
 * @constructor
 */
import {CardTypes} from "@/app/Card/types/types";
import Tags from '../components/Fags'
import FooterTags from "../components/FooterTags";
import React from "react";
import FlightSide from "@/app/Card/components/FlightSide";

// tags模拟数据
const list = ['Beginner']
// footer tags模拟数据
const footerJson = [
  {
    url: '../../time.svg',
    text: '36 Hour',
    styles: ''
  },
  {
    url: '../../book.svg',
    text: '5 Course'
  }
]
const CardOne: React.FC<CardTypes> = ({title, content}) => {
  return (
    <div className="card-one-bg w-[29.7142857rem] mr-[3.71428571rem] h-full">
      <div
        className="w-[29.7142857rem] mr-[3.71428571rem] h-full card-one pl-[2.85714286rem] pr-[1.28571429rem] pt-[2.57142857rem]">
        <div className="w-[3.28571429rem] h-[0.28571429rem] card-one-line rounded-[0.78571429rem]"></div>
        <h4 className="text-[#EDEDED] card-h4 pt-7 pb-4">{title}</h4>
        <Tags list={list}/>
        <p className="text-[#676767] pt-4">{content}</p>
        <footer className="flex pt-[3.5rem] items-center justify-between">
          <FooterTags {...footerJson[0]}/>
          <FooterTags {...footerJson[1]}/>
          <FlightSide/>
        </footer>
      </div>
    </div>
  )
}

export default CardOne;