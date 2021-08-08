import { useState } from 'react';

import * as S from './style';

type TextFieldProps = {
  onInputChange: (value: string) => void;
};

const TextField = ({ onInputChange }: TextFieldProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    !!onInputChange && onInputChange(value);
  };

  return (
    <S.Input
      type="search"
      name="search"
      onChange={onChange}
      value={value}
      placeholder="search for a word"
    />
  );
};

export default TextField;
