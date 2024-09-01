'use client'

import { Button } from '@/app/ui/button'
import IconLamp from '@/app/ui/icons/IconLamp'
import IconTrash from '@/app/ui/icons/IconTrash'
import clsx from 'clsx'
import { useState } from 'react'

export default function Page () {
    // dummt data
    const number = generateNumber(5);
    const dummyData = [
        {
          question: "This is the editable text",
          options: [
            { text: "Option 1", isCorrect: true },
            { text: "Option 2", isCorrect: false }
          ]
        },
        {
          question: "This is another question",
          options: [
            { text: "Option A", isCorrect: true },
            { text: "Option B", isCorrect: false }
          ]
        },
        {
            question: "This is yet another question",
            options: [
              { text: "Option A", isCorrect: true },
              { text: "Option B", isCorrect: false }
            ]
          },
        {
        question: "This is come the sun another question",
        options: [
            { text: "Option A", isCorrect: true },
            { text: "Option B", isCorrect: false }
        ]
        },
        {
        question: "This is hackkkk another question",
        options: [
            { text: "Option A", isCorrect: true },
            { text: "Option B", isCorrect: false }
        ]
        }
      ]
    

    const [selectedNumber, setSelectedNumber] = useState('1');
    const [data, setData] = useState(dummyData);
    const [question, setQuestion] = useState(dummyData[0].question)
    const [option, setOption] = useState(dummyData[0].options)

    function generateNumber (number : number) {
        const result = [];
        for (let i = 1; i <= number; i++) {
            result.push(i.toString());
        }
        return result;
    }

    const handleClickNumber = (number : string) => {
        setSelectedNumber(number);
        setQuestion(data[parseInt(number)-1].question);
        setOption(data[parseInt(number)-1].options)
    }

    function handleEditQuestion (number : string, newQuestion : string) {
        const updatedQuestion = [...data];
        updatedQuestion[parseInt(number)-1].question= newQuestion;
        setData(updatedQuestion);
        setQuestion(data[parseInt(number)-1].question);
    }

    return (
        <div className="my-10 mx-14 grid grid-flow-row space-y-5">
            <div className="flex justify-between pb-5 border-b-[1px] border-grey-100">
                <div className="grid grid-flow-row space-y-1">
                    <p className='text-grey-500 text-[14px] font-normal'>Topik</p>
                    <p className='font-semibold text-[16px]'>Statistika</p>
                </div>
                <Button className='text-[14px] rounded-full px-5 max-h-10' onClick={()=>{}} size='small' variant='secondary'>
                    <p>Publish Quiz</p>
                </Button>
            </div>
            <div className="grid grid-cols-6 space-x-20">
                <div className='grid grid-flow-row space-y-10'>
                    <div>
                        <p>Daftar Soal</p>
                        <div className='grid grid-flow-* grid-cols-4 space-x-[12px] space-y-[12px] items-end justify-items-end'>
                            {number.map((i) => (<QuizNumber key={i} number={i} isSelected={selectedNumber === i} onClick={handleClickNumber}/>))}
                            
                        </div>
                    </div>
                    <div className='grid grid-flow-row space-y-3'>
                        <Button onClick={()=>{}} variant='secondary' className='text-[14px]'>Tambah Soal</Button>
                        <Button onClick={()=>{}} variant='secondary' size='small' className='bg-danger-600 text-[14px] px-10'>
                            <div className='grid grid-flow-col space-x-2 justify-center'>
                                <IconTrash /> 
                                <p>Hapus Soal</p>
                            </div>
                        </Button>
                    </div>
                    <div className='rounded-[12px] grid grid-flow-row space-y-3 p-5 bg-grey-50 justify-items-center text-center'>
                        <IconLamp />
                        <p>Soal-soal ini adalah hasil rekomendasi AI yang sudah diatur sesuai dengan topik dan dokumen materi yang kamu unggah. Kamu dapat mengubah soal sesuai keinginan kamu.</p>
                    </div>
                </div>

                <div className='col-span-5'>
                    <QuestionInput onChangeText={(number, newQuestion) => handleEditQuestion(number, newQuestion)} number={selectedNumber} question={question}/>

                    <Option char='A' text='badabom'/>
                </div>
            </div>
        </div>
    )
}

interface QuizNumberProps {
    number : string;
    isSelected : boolean;
    onClick: (number : string) => void;
}

export function QuizNumber (props : QuizNumberProps) {
    const {number, isSelected, onClick} = props;

    const handleClick = () => {
        onClick(number);
    }

    return (
        <div>
            <Button 
            className={clsx(
                'rounded-[8px] font-bold text-[20px] text-primary px-[8px] py-[2px] w-[40px] whitespace-normal text-center',
                {"bg-primary-500 text-white" : isSelected},
            )} 
            variant='outline' 
            size='small'
            onClick={handleClick}>{number}</Button>
        </div>
    )
}


interface QuestionInputProps {
    number : string;
    question: string;
    onChangeText : (number: string, text: string) => void;
}

export function QuestionInput (props : QuestionInputProps) {
    const {number, question, onChangeText} = props;

    return (
        <div className='grid grid-flow-row space-y-5'>
            <h1>Soal {number}</h1>
            <input className='border-primary border-[1px] py-4 px-3 rounded-[12px]' onChange={(e) => {onChangeText(number, e.target.value)}} type='text' value={question}/>
        </div>
    )
}

interface OptionProps {
    char : string;
    text: string;
    isAnswer ? : boolean;
    isEdited ? : boolean;
}

export function Option (props : OptionProps) {
    const {char, text, isAnswer, isEdited} = props;
    
    return (
        <Button variant='outline' onClick={()=>{}}><p>{text}</p></Button>
    )
}