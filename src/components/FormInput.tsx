import React, { FC, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { typescale } from "../utils";

const { big } = typescale.desktop;

const FormInputGoup = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  input {
    font-size: ${big};
    padding: 6px;
    color: ${({ theme }) => theme.neutral1000};
    box-sizing: border-box;
  }
  .form-input {
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.neutral700};
    margin: 10px 0 20px 0;
    background-color: transparent;

    &:focus ~ .form-input-label {
      top: -10px;
      font-size: 12px;
      opacity: 0.5;
    }
  }
  input[type="password"] {
    letter-spacing: 0.3em;
  }
  .form-input-label {
    color: ${({ theme }) => theme.neutral800};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    &.shrink {
      top: -10px;
      font-size: 12px;
    }
  }
`;

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FormInput: FC<IFormInputProps> = ({ name, label, type, onChange }) => {
  const [hasValue, setHasValue] = useState<boolean>(false);

  return (
    <FormInputGoup>
      <input
        id={name}
        type={type}
        className="form-input"
        onChange={(e) => {
          e.target.value.length ? setHasValue(true) : setHasValue(false);
          if (onChange) onChange(e);
        }}
      />
      <label
        htmlFor={name}
        className={`${hasValue ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    </FormInputGoup>
  );
};

export default FormInput;
