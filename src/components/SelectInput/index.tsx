import React from 'react';
import { Container } from './styles';

interface ISelectInput {
  options: {
    label: string | number,
    value: number
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void | undefined;
  value: number;
}

const SelectInput: React.FC<ISelectInput> = ({ options, onChange, value }) => {
  return (
    <Container onChange={ onChange } value={ value }>
      {
        options.map((option) => (
          <option key={ option.value } value={ option.value }>
            { option.label }
          </option>
        ))
      }
    </Container>
  )
}

export default SelectInput;
