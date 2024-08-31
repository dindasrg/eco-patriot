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
  const [disabled, setDisabled] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  function handleClickGenerate() {
    setModalVisible(true)
  }

  function handleModalClose() {
    setModalVisible(false)
  }

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

        <TopicModal handleModalClose={handleModalClose} isVisible={isModalVisible} handleTopicInput={()=>{}} disabled={disabled} /> 
      </div>


      
    </div>
  );
}
