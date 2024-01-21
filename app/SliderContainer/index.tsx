/**
 * SliderContainer 滑块容器
 */
import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import useResizeObserver from "@/app/hooks/useResizeObserver";
import {SliderContainerProps} from "@/app/SliderContainer/types/types";
import './style/index.css'
import '../Card/style/style.css'

const LEFT = "left";
const RIGHT = "right";
const SliderContainer: React.FC<SliderContainerProps> = ({width = "inherit", children}) => {

  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useResizeObserver(containerRef);
  const [listWidth, setListWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  // 缓存
  const cache = useRef(containerWidth);

  // 处理容器宽度变化时，内部元素的吸附效果
  useEffect(() => {
    if (
      containerWidth > cache.current && // 当容器可拖拽时，表示用户正在向右拖拽
      translateX < 0 && // 表示左侧有内容被隐藏
      listWidth - Math.abs(translateX) - containerWidth <= 0 //表示右侧已经没有被隐藏的内容了
    ) {
      const distance = containerWidth - cache.current;
      setTranslateX((cur) => cur + distance);
    }
    // 更新缓存
    cache.current = containerWidth;
  }, [containerWidth, translateX, listWidth]);

  useLayoutEffect(() => {
    setListWidth((listRef.current as HTMLDivElement).clientWidth);
  }, [children]);

  // 判断按钮是否可见
  const [leftArrowVisible, rightArrowVisible] = useMemo(() => {
    let leftArrowVisible,
      rightArrowVisible = false;
    // listWidth - Math.abs(translateX) - containerWidth 为右侧隐藏内容
    if (listWidth - Math.abs(translateX) - containerWidth > 0) {
      rightArrowVisible = true;
    }

    if (translateX < 0) {
      leftArrowVisible = true;
    }

    return [leftArrowVisible, rightArrowVisible];
  }, [listWidth, translateX, containerWidth]);

  const handleArrowClick = (direction: string) => {
    if (direction === LEFT) {
      // 左侧隐藏内容
      const leftSpaceWidth = Math.abs(translateX);
      if (leftSpaceWidth > containerWidth) {
        setTranslateX((cur) => cur + containerWidth);
      } else {
        setTranslateX((cur) => cur + leftSpaceWidth);
      }
    }

    if (direction === RIGHT) {
      // 右侧隐藏内容
      const rightSpaceWidth = listWidth - Math.abs(translateX) - containerWidth;
      if (rightSpaceWidth > containerWidth) {
        setTranslateX((cur) => cur - containerWidth);
      } else {
        setTranslateX((cur) => cur - rightSpaceWidth);
      }
    }
  };
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section ref={containerRef} style={{width: width}} className="flex p-[4px] relative overflow-hidden h-full">
        {leftArrowVisible && (
          <aside
            className="absolute z-[9] items-center flex h-full aside-right left-[-9.8rem] w-[13.7142857rem] leftGradient">
            <span onClick={() => handleArrowClick(LEFT)}
                  className="w-12 text-2xl text-[#ffffff] absolute right-0 flex items-center justify-center h-12 bg-[#000000] hover:bg-[#303030] border border-[#676767] rounded-[50%] border-solid ">
              &lt;
            </span>
          </aside>
        )}
        <section
          ref={listRef}
          className="list h-[19.8571429rem]"
          style={{transform: `translateX(${translateX}px)`, transition: "all 0.3s linear",}}>
          <>
            {children}
          </>
        </section>
        {rightArrowVisible && (
          <aside
            className="absolute z-[9] flex h-full aside-right items-center right-[-10.2rem] w-[13.7142857rem] rightGradient">
            <span onClick={() => handleArrowClick(RIGHT)}
                  className="w-12 text-2xl text-[#ffffff] flex items-center justify-center h-12 bg-[#000000] hover:bg-[#303030] border border-[#676767] rounded-[50%] border-solid ">
              &gt;
            </span>
          </aside>
        )}
      </section>
    </main>
  )
}

export default SliderContainer;