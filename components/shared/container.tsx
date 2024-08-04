import React from 'react';
import {cn} from "@/lib/utils";

interface Props {
    className?: string
}
export const Container: React.FC<Props> = ({className, children}) => {
    return (
        <div className={cn('mx-auto max-w-[1280px]', className)}>
            {children}
        </div>
    );
}

export default Container;