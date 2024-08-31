'use client';

import { Button } from '@/app/ui/button'
import clsx from 'clsx';

interface TopicModalProps {
    handleTopicInput : () => void;
    disabled : boolean;
    isVisible: boolean;
    handleModalClose : () => void;
}

export default function TopicModal (props : TopicModalProps) {
    const {handleTopicInput, disabled, isVisible, handleModalClose} = props;

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
                                'border-[1px] rounded-[12px] py-3 px-4 text-grey-500',
                                {"border-primary" : disabled===false},
                                {"border-grey-500" : disabled}
                            )} 
                            placeholder='contoh: Pencernaan Manusia'></input>
                    </div>
                    <div className='grid grid-flow-row space-y-6'>
                        <p>Berapa jumlah soal yang kamu inginkan?</p>
                        
                    </div>
                    <Button className='justify-self-end' disabled={disabled} onClick={()=>{}} size="small">Submit</Button>
                </div>
            </div>
                
        </div>
        
    )
}