/**
 * 底部的tags
 */
import React from 'react';
import Image from "next/image";
import {footerTagsInterfaces} from "@/app/components/FooterTags/types/types";
import '@/app/components/FooterTags/styles/index.css'

const FooterTags: React.FC<footerTagsInterfaces> = ({url, text}) => {
  return (
    <div className="flex footer-tags">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert h-full"
        src={url}
        alt="Next-default"
        width={14}
        height={14}
        priority
      />
      <span className="flex text-[#F2F2F2] pl-2 tags-text">{text}</span>
    </div>
  )
}

export default FooterTags;