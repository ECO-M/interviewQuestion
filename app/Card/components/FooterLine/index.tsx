import React from "react";
import {FooterLineTypes} from "@/app/Card/types/types";

const FooterLine: React.FC<FooterLineTypes> = ({leftText, rightText}) => {
  return (
    <div className="footerLine mb-[1.14285714rem] border-b border-[#282828] border-solid flex items-center justify-between">
      <span>{leftText}</span>
      <span>{rightText}</span>
    </div>
  )
}
export default FooterLine;