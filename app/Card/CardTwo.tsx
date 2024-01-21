/**
 * 卡片组件二
 * @constructor
 */
import {CardTypes} from "@/app/Card/types/types";
import Tags from "../components/Fags";
import React from "react";
import FooterLine from "@/app/Card/components/FooterLine";

// tags模拟数据
const list = ['All Tracks', 'Solidity', 'ZK']
const footerLine = [
  {
    leftText: 'Signup',
    rightText: '4/15 - 6/15'
  },
  {
    leftText: 'Event',
    rightText: '6/15 - 7/15'
  },
  {
    leftText: 'Grant size',
    rightText: '200K'
  },
]
const CardTwo: React.FC<CardTypes> = ({title}) => {
  return (
    <div className="card-two-bg w-[29.7142857rem] mr-[3.71428571rem] h-full">
      <div
        className="w-[29.7142857rem] mr-[3.71428571rem] h-full card-two pl-[2.85714286rem] pr-[1.28571429rem]">
        <h4 className="text-[#EDEDED] card-h4 pt-7 pb-4">{title}</h4>
        <Tags list={list}/>
        <footer className="pt-[4.01428571rem]">
          <FooterLine {...footerLine[0]}/>
          <FooterLine {...footerLine[1]}/>
          <FooterLine {...footerLine[2]}/>
        </footer>
      </div>
    </div>
  )
}


export default CardTwo;