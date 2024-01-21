/**
 * tags components
 */
import React from "react";
import './style/index.css'
import {tagsInterfaces} from "@/app/components/Fags/types/types";

const Tags: React.FC<tagsInterfaces> = ({list}) => {
  return (
    <div className="tags flex flex-wrap">
      {
        list.map((item, index) => {
          return <span className="tags-span px-[0.57142857rem] py-[0.28571429rem]" key={index}>{item}</span>
        })
      }
    </div>
  )
}

export default Tags;