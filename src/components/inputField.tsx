import React, { forwardRef } from 'react';
import { Input } from "@nextui-org/react";
import { ColorButtonKey } from '../constants';

interface Props {
  type: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  className?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  isClearable?: boolean;
  color?: ColorButtonKey;
  labelPlacement?: 'inside' | 'outside';
  variant?: 'bordered' | 'flat' | 'faded';
  labelClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField = forwardRef<HTMLInputElement, Props>(({ type, label, isRequired, endContent, startContent, className, isInvalid, isClearable, labelPlacement, variant, placeholder, labelClassName, errorMessage, onChange }, ref) => {
  return (
    <div className="relative">
      {label && <label className={labelClassName || 'font-medium'}>{label}</label>}
      <Input
        type={type}
        placeholder={placeholder}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isClearable={isClearable}
        endContent={endContent}
        startContent={startContent}
        className={`w-full ${className}`} // Ensure full width
        variant={variant}
        labelPlacement={labelPlacement}
        onChange={onChange}
        ref={ref}
      />
      {errorMessage && (
        <div className="absolute left-0 top-15 text-red-500 text-xs mt-1">
          {errorMessage}
        </div>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;
