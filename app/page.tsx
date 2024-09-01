'use client';

import { useState } from "react";
import Image from "next/image";

import { Button } from '@/app/ui/button'
import QuizCard from "@/app/ui/QuizCard";
import TopicModal from "@/app/ui/TopicModal";

import IconPen from '@/app/ui/icons/IconPen'
import IconAI from '@/app/ui/icons/IconAI'
import IconBook from '@/app/ui/icons/IconBook'
import IconArrowRight from '@/app/ui/icons/IconArrowRight'

export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [questionSum, setQuestionSum] = useState("10");
  const [topic, setTopic] = useState("");

  function handleClickGenerate() {
    setModalVisible(true)
  }

  function handleModalClose() {
    setModalVisible(false)
  }

  const handleChangeSum = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuestionSum(event.target.value);
  };

  const handleTopic = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  }

  const handleSubmit = async () => {

    const data = {
      topics: topic,
      number_of_questions: questionSum,
    };

    try {
      const response = await fetch('http://147.139.246.230/generate_questions', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data submitted successfully:', data);
      } else {
        console.error('Failed to submit data:', response.status);
      }
    } catch (error) {
      console.error('Error occurred while submitting data:', error);
    }
  };

  return (
    <div className="mx-14 space-y-10 mb-[94px]">
      <div className="rounded-[20px] mt-10 py-5 bg-secondary-50 items-center grid grid-flow-row justify-center text-center space-y-10">
        <div className="grid grid-flow-row justify-center text-center space-y-3">
          <h1 className="font-semibold text-[32px] leading-[150%]">Create better quizzes with AI</h1>
          <h2 className="font-medium text-[16px] leading-[150%]">Experience seamless and optimized way to create higher quality quiz </h2>
        </div>
        <div className="grid grid-flow-col justify-between">
          <Button className="rounded-[12px] grid grid-flow-col px-[12px] space-x-3 max-w-[212px] max-h-[64px]" onClick={()=>{}} variant="outline" size="small">
            <IconPen/>
            <p className="text-left">Create your own questions</p>
          </Button>
          <Button className="rounded-[12px] grid grid-flow-col px-[12px] space-x-3 max-w-[238px] max-h-[64px]" onClick={handleClickGenerate} variant="outline">
            <IconAI />
            <p className="text-left">Generate questions with AI</p>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-flow-row space-y-[20px]">
        <div className="grid grid-flow-col justify-between">
          <div className="grid grid-flow-col space-x-4 items-center">
              <IconBook />
              <p className="font-bold">Koleksi Soal</p>
            </div>
            <div className="grid grid-flow-col space-x-4 items-center">
              <p className="font-semibold">Selengkapnya</p>
              <IconArrowRight />
            </div>
        </div>

        <div className="grid grid-flow-* grid-cols-4 justify-items-center space-y-[32px] items-end">
          <QuizCard title="Permutasi dan Kombinasi" onCta={()=>{}} questionNum="10" responseNum="12"/>
          <QuizCard title="Permutasi dan Kombinasi" onCta={()=>{}} questionNum="10" responseNum="12"/>
          <QuizCard title="Permutasi dan Kombinasi" onCta={()=>{}} questionNum="10" responseNum="12"/>
          <QuizCard title="Permutasi dan Kombinasi" onCta={()=>{}} questionNum="10" responseNum="12"/>
        </div>

        <TopicModal handleSubmit={handleSubmit} questionSum={questionSum} handleQuestionSum={handleChangeSum} handleModalClose={handleModalClose} isVisible={isModalVisible} handleTopicInput={handleTopic} disabled={topic==="" || questionSum==="custom"} /> 
      </div>


      
    </div>
  );
}
