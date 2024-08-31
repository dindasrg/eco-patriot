import Image from "next/image"
import { Button } from "@/app/ui/button";

interface QuizCardProps {
    title : string;
    onCta : () => void;
    questionNum : string;
    responseNum : string;
}

export default function QuizCard (props: QuizCardProps) {
    const {title, onCta, questionNum, responseNum} = props;

    return (
        <div className="max-w-[272px]">
            <div className="">
                <Image className="rounded-t-[20px]" src="thumbnail-quiz.svg" alt="thumbnail quiz" width={272} height={160}/>
            </div>
            <div className="space-y-5 pt-4 px-5 border-[1px] border-grey-500 rounded-b-[20px] text-center">
                <div className="">
                    <h2 className="font-semibold text-[20px] leading-[150%]">{title}</h2>
                    <div className="flex space-x-3">
                        <p>{questionNum} soal</p>
                        <p>{responseNum} jawaban</p>
                    </div>
                </div>
                <div>
                    <Button className="my-[20px]" onClick={onCta} size="medium"><p>Lihat Detail</p></Button>
                </div>
            </div>
        </div>
        
    )
}