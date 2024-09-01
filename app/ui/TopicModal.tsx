'use client';

import { Button } from '@/app/ui/button'
import clsx from 'clsx';
import { useState } from 'react';

interface TopicModalProps {
    handleTopicInput : (e : React.ChangeEvent<HTMLInputElement>) => void;
    disabled : boolean;
    isVisible: boolean;
    handleModalClose : () => void;
    handleQuestionSum : (e : React.ChangeEvent<HTMLInputElement>) => void;
    questionSum : string;
    handleSubmit : () => void;
}

export default function TopicModal (props : TopicModalProps) {
    const {handleTopicInput, disabled, isVisible, handleModalClose, handleQuestionSum, questionSum, handleSubmit} = props;

    if (!isVisible) return null;

    return (
        <div onClick={handleModalClose} className='fixed inset-0 z-50 -top-20 flex justify-center items-center bg-grey-500 bg-opacity-75'>
            <div className='relative' onClick={(e) => e.stopPropagation()}>
                <div className={clsx(
                'border-[1px] bg-white border-grey-500 rounded-[20px] p-8 max-w-[342px] grid grid-flow-row space-y-[24px]',
                )}>
                    <div className='grid grid-flow-row space-y-[12px]'>
                        <p className='font-medium'>Apa topik dari kuis yang ingin kamu buat?</p>
                        <input 
                            className={clsx(
                                'border-[1px] rounded-[12px] py-3 px-4',
                                {"border-primary" : disabled===false},
                                {"border-grey-500" : disabled}
                            )} 
                            placeholder='contoh: Pencernaan Manusia' 
                            onChange={handleTopicInput}/>
                    </div>
                    <div className='grid grid-flow-row space-y-6'>
                        <p>Berapa jumlah soal yang kamu inginkan?</p>
                        <div className='grid grid-flow-col space-x-5'>
                            <input
                                className='w-8 h-8 bg-primary'
                                type="radio" 
                                id="10" 
                                name="10" 
                                value="10" 
                                checked={questionSum === "10"}
                                onChange={handleQuestionSum}
                            />
                            <div className='grid grid-flow-row space-y-2'>
                                <label className='font-semibold'>Buat 10 soal</label>
                                <p>Kamu akan mendapatkan 10 soal pilihan ganda</p>
                            </div>
    
                        </div>
                        <div className='grid grid-flow-col'>
                            <input 
                                className='w-8 h-8'
                                type="radio" 
                                id="custom" 
                                name="custom" 
                                value="custom" 
                                checked={questionSum !== "10"}
                                onChange={handleQuestionSum}
                            />
                            <div className='grid grid-flow-row space-y-2'>
                                <label className='font-semibold'>Tentukan jumlah soal</label>
                                <input
                                    onChange={handleQuestionSum} 
                                    className={clsx(
                                        'border-[1px] rounded-[12px] py-3 px-4',
                                        {"border-primary" : disabled===false},
                                        {"border-grey-500" : disabled}
                                    )} 
                                    placeholder='contoh: 20'
                                    type="text"
                                    />
                            </div>
                        </div>
                    </div>
                    <Button className='justify-self-end' disabled={disabled} onClick={handleSubmit} size="small">Submit</Button>
                </div>
            </div>
                
        </div>
        
    )
}