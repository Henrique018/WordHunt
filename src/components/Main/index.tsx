import Link from 'next/link';
import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';

import Select from 'components/Select';
import TextField from 'components/TextField';
import Description from 'components/Description';

import { mapToDescription } from 'utils/mappers';
import * as S from './styles';

const Main = () => {
  const [lang, setLang] = useState('en_US');
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState({
    heading: '',
    phonetics: '',
    partOfSpeech: '',
    definitions: {
      meaning: '',
      synonyms: [''],
      example: ''
    }
  });

  const handleChange = debounce((lang: string) => {
    setLang(lang);
    setWord('');
  }, 500);

  const handleWord = debounce((word: string) => {
    setWord(word);
  }, 700);

  useEffect(() => {
    async function getApiData() {
      if (!!word && !!lang)
        try {
          const { data } = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
          );

          data && setDefinitions(mapToDescription(data[0]));
        } catch (err) {
          console.log(err);
        }
    }
    getApiData();
  }, [word, lang]);

  return (
    <S.Wrapper>
      <S.Heading>{word ? word : 'Word hunt'}</S.Heading>
      <S.Content>
        <S.InputWrapper>
          <TextField onInputChange={(w) => handleWord(w)} />
          <Select onSelect={(l) => handleChange(l)} />
        </S.InputWrapper>
        {definitions.heading ? <Description {...definitions} /> : null}
      </S.Content>
      <S.Footer>
        Developed with <Link href="https://nextjs.org/">Next.JS</Link>, by
        <Link href="https://github.com/Henrique018"> Henrique Oliveira</Link>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Main;
