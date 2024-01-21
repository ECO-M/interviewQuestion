"use client"
import CardOne from "@/app/Card/CardOne";
import CardTwo from "@/app/Card/CardTwo";
import CardThree from "@/app/Card/CardThree";
import CardFour from "@/app/Card/CardFour";
import SliderContainer from "@/app/SliderContainer";

// 卡片组一模拟数据
const cardOneJson = {
  title: 'Introduction to programming',
  content: 'This course covers the most basic concepts in programming using Solidity as an example.'
}
// 卡片组二模拟数据
const cardTwoJson = {
  title: 'Moonshot 2023 Summer Hackathon',
}
// 卡片组三模拟数据
const cardThreeJson = {
  title: 'Web 3.0 Programming Basics',
  content: 'Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.'
}

// 自定义width
const WIDTH = 'calc(100% - 23rem)';

const Home: React.FC = () => {
  return (
    <SliderContainer width={WIDTH}>
      <CardOne {...cardOneJson}/>
      <CardTwo {...cardTwoJson}/>
      <CardThree {...cardThreeJson}/>
      <CardFour/>
    </SliderContainer>
  );
}

export default Home;