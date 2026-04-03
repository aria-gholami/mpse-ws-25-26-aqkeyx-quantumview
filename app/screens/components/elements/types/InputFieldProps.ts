import type { ChangeEventHandler } from 'react';

export default interface InputFieldProps {
    id: string;
    name?: string;
    type: 'text';
    label: string;
    required: boolean;
    placeholder: string;
    onChange: ChangeEventHandler<any, HTMLTextAreaElement>;
    hasInputFieldTyped?: boolean;
    hasError?: boolean;
    error?: string;
}
