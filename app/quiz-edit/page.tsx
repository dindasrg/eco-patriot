'use client'

import { Button } from '@/app/ui/button'
import IconLamp from '@/app/ui/icons/IconLamp'
import IconTrash from '@/app/ui/icons/IconTrash'
import IconGreenCheck from '@/app/ui/icons/IconGreenCheck'
import IconGreyCheck from '@/app/ui/icons/IconGreyCheck'
import { useRouter, useSearchParams  } from 'next/navigation';

import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { parse } from 'path'

export default function Page () {
    const [data, setData] = useState<any[]>([])
    const [isLoading, setLoading] = useState(true)

    const [selectedNumber, setSelectedNumber] = useState('1');
    const [question, setQuestion] = useState<string>('');
    const [options, setOptions] = useState<string[]>([])
    const [correctAns, setCorrectAns] = useState<string>('');

    const searchParams = useSearchParams();
    const amount = searchParams.get('amount')

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=easy&type=multiple`)
          .then((res) => res.json())
          .then((data) => {
            setData(data.results)
            setQuestion(data.results[0].question)
            setOptions([...data.results[0].incorrect_answers, data.results[0].correct_answer])
            setCorrectAns(data.results[0].correct_answer)
            setLoading(false)
          })
    }, [amount])

    if (isLoading) return <p>Loading...</p>
    if (!data || !amount) return <p>No data</p>

    // dummt data
    const number = generateNumber(parseInt(amount) || 0);
    const optNum = generateNumber (4);
    const chars = ['A', 'B', 'C', 'D']

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
        setOptions([...data[parseInt(number)-1].incorrect_answers, data[parseInt(number)-1].correct_answer])
    }

    function handleEditQuestion (number : string, newQuestion : string) {
        const updatedQuestion = [...data];
        updatedQuestion[parseInt(number)-1].question= newQuestion;
        setData(updatedQuestion);
        setQuestion(data[parseInt(number)-1].question);
    }

    function onChangeAnswerText (questionNumber : string, index : number, e : React.ChangeEvent<HTMLInputElement>) {
        const updatedAns = [...data][parseInt(questionNumber)-1].opsi_jawaban
        updatedAns[index-1] = e.target.value;
        const updatedData = [...data]
        updatedData[parseInt(questionNumber)-1].opsi_jawaban = updatedAns;
        setData(updatedData)
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
                        <Button onClick={()=>{}} variant='secondary' size='small' className='bg-danger text-[14px] px-10'>
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

                <div className='col-span-5 grid-rows-subgrid space-y-10'>
                    <QuestionInput onChangeText={(number, newQuestion) => handleEditQuestion(number, newQuestion)} number={selectedNumber} question={question}/>

                    <div className='grid grid-flow-row space-y-3'>
                        <p>Pilihan Ganda</p>
                        {optNum.map((i) => <Option key={i} isAnswer={chars[parseInt(i)-1] === correctAns} onChangeText={(questionNumber, index, e) => onChangeAnswerText(questionNumber, index, e)} questionNumer={selectedNumber} answerIndex={parseInt(i)} char={chars[parseInt(i)-1]} text={options[parseInt(i)-1]}/>)}
                        
                    </div>
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
                {"bg-primary-300 !important text-white" : isSelected},
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
            <input className='border-primary border-[1px] py-4 px-3 rounded-[12px] focus:outline-none' onChange={(e) => {onChangeText(number, e.target.value)}} type='text' value={question}/>
        </div>
    )
}

interface OptionProps {
    char : string;
    text: string;
    isAnswer ? : boolean;
    isEdited ? : boolean;
    onChangeText ? : (questionNumber : string, index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
    questionNumer : string;
    answerIndex : number;
}

export function Option (props : OptionProps) {
    const {char, text, isAnswer, isEdited, onChangeText, questionNumer, answerIndex} = props;

    if (!onChangeText){
        return;
    }
    
    return (
        <Button className='rounded-[12px] border-[1px] px-4 py-3' variant='outline' onClick={()=>{}}>
            <div className='grid grid-flow-col justify-between'>
                <div className='flex space-x-3 items-center'>
                    <div 
                        className={clsx(
                            'rounded-[8px] font-bold text-[20px] text-primary px-[8px] py-[2px] w-[40px] whitespace-normal text-center border-2 border-primary',
                            // {"bg-primary-500 text-white" : isSelected},
                        )} 
                    >
                        {char}
                    </div>
                    <input type='text' className='border-0 focus:outline-none flex' value={text} onChange={(e) => onChangeText(questionNumer, answerIndex, e)}/>
                </div>
                <div className='rounded-full border-1 border-primary'>
                    {isAnswer ? <IconGreenCheck/> : <IconGreyCheck/>}
                </div>
            </div>
                     
        </Button>
    )
}