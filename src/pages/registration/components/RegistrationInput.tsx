import { ContainerInput, StyleInput } from '../styles';

interface RegistrationInputProps {
  labelOne: string;
  labelTwo: string;
}

export function RegistrationInput({
  labelOne,
  labelTwo,
}: RegistrationInputProps) {
  return (
    <ContainerInput>
      <label style={{ width: '100%' }}>
        {labelOne}
        <StyleInput />
      </label>
      <label style={{ width: '100%' }}>
        {labelTwo}
        <StyleInput />
      </label>
    </ContainerInput>
  );
}
