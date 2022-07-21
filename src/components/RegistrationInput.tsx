/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContainerInput, StyleInput } from './styles/registerStyles';

interface RegistrationInputProps {
  labelOne: string;
  typeOne?: string;
  nameOne?: string;
  idOne?: string;
  valueOne?: string;
  onChangeOne?: (e: any) => void;
  labelTwo: string;
  typeTwo?: string;
  nameTwo?: string;
  idTwo?: string;
  valueTwo?: string;
  onChangeTwo?: (e: any) => void;
}

export function RegistrationInput({
  labelOne,
  typeOne,
  nameOne,
  idOne,
  valueOne,
  onChangeOne,
  labelTwo,
  typeTwo,
  nameTwo,
  idTwo,
  valueTwo,
  onChangeTwo,
}: RegistrationInputProps) {
  return (
    <ContainerInput>
      <label style={{ width: '100%' }}>
        {labelOne}
        <StyleInput
          type={typeOne}
          name={nameOne}
          id={idOne}
          value={valueOne}
          onChange={onChangeOne}
        />
      </label>
      <label style={{ width: '100%' }}>
        {labelTwo}
        <StyleInput
          type={typeTwo}
          name={nameTwo}
          id={idTwo}
          value={valueTwo}
          onChange={onChangeTwo}
        />
      </label>
    </ContainerInput>
  );
}
