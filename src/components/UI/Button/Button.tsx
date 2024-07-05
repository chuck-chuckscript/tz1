import {FC, MouseEventHandler, ReactNode} from "react";
import style from './button.module.scss';
type StyleType = 'gradient' | 'default' | 'unstyled';

interface ButtonProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    variant?: StyleType
}

export const Button : FC<ButtonProps> = ({variant, onClick, children, className}) => {

    if(variant === 'gradient'){
        return (
            <button onClick={onClick} className={[style.gradient, className].join(' ')}>{children}</button>
        );
    }
    else if(variant === 'default'){
        return (
            <button onClick={onClick} className={style.default}>{children}</button>
        );
    }


    return (
        <button onClick={onClick} className={className}>{children}</button>
    );
};

