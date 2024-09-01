import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick: () => void;
    variant ? :
    | "primary"
    | "secondary"
    | "outline";
    size ? :
    | "large"
    | "medium"
    | "small";
}

export function Button ({children, className, variant="primary", size="small", ...rest}: ButtonProps){
    return (
        <button 
            {...rest}
            className={clsx(
            "rounded-[20px] font-semibold disabled:cursor-not-allowed",
            {"bg-primary text-grey disabled:bg-disable-100 disabled:text-disable-500" : variant === "primary"},
            {"bg-secondary text-grey" : variant === "secondary"},
            {"border-2 border-primary bg-white px-3 py-2" : variant === "outline"},
            {"px-[60px] py-2" : size === "medium"},
            {"px-[20px] py-2" : size === "small"},
            className
        )}>
            {children}
        </button>
    )
}