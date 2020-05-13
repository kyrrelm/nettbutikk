import React, { MouseEventHandler } from 'react';
import './Button.css';

interface Props {
    text: string;
    onClick: MouseEventHandler;
    classes?: string;
}

export default function Button({ text, onClick, classes }: Props) {
    const _classes = classes ?? '';
    return (
        <button className={`Button ${_classes}`} onClick={onClick}>
            {text}
        </button>
    );
}
