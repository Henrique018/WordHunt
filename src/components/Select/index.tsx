import React, { useState } from 'react';

import * as S from './styles';

type SelectProps = {
  onSelect: (value: string) => void;
};

const Select = ({ onSelect }: SelectProps) => {
  const [value, setvalue] = useState('en_Us');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;

    setvalue(newLanguage);

    !!onSelect && onSelect(newLanguage);
  };

  return (
    <S.Select onChange={onChange} value={value}>
      <option value="en_US">English</option>
      <option value="ar">Arabic</option>
      <option value="pt-BR">Brazilian Portuguese</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="hi">Hindi</option>
      <option value="it">Italian</option>
      <option value="ja">Japanese</option>
      <option value="ko">Korean</option>
      <option value="ru">Russian</option>
      <option value="es">Spanish</option>
      <option value="tr">Turkish</option>
    </S.Select>
  );
};

export default Select;
