import type { FC, ReactNode } from "react";

interface Props {
    className?: string
    children: ReactNode
    type: 'ELEMENT' | 'WHITE' | 'BLACK'
    onClick?: () => void
}

const Button: FC<Props> = ({className, children, type, onClick}) => {
    return(
        <button
            className={`
                ${className}
                
                ${type === 'BLACK' && 'text-foreground bg-[transparent] hover:bg-secondary border-[1px] border-border'}
                ${type === 'WHITE' && 'text-background bg-foreground hover:bg-muted-foreground'}

                font-[500]                
                rounded-full
                bg-[red]
                flex
                items-center
                justify-center
                min-h-[46px]
                px-[24px]
                transition-colors duration-300

            `}

            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button