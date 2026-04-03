import type { ChangeEventHandler } from 'react';

export default interface TextareaProps {
    id: string;
    name: string;
    label: string;
    required: boolean;
    placeholder: string;
    onChange: ChangeEventHandler<any, HTMLTextAreaElement>;
    hasInputFieldTyped?: boolean;
    hasError?: boolean;
    error?: string;
}
