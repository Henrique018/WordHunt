import Link from 'next/link';
import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';

import Select from 'components/Select';
import TextField from 'components/TextField';
import Description from 'components/Description';

import * as S from './styles';

const Main = () => {
  const [lang, setLang] = useState('en_US');
  const [word, setWord] = useState('');

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
          console.log(data);
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
        <Description
          heading={'ingenuity'}
          phonetics={'/ˌɪn·dʒəˈnu·ə·t̬i/'}
          partOfSpeech={'noun'}
          definitions={{
            meaning: 'The quality of being clever, original, and inventive.',
            synonyms: [
              'inventiveness',
              'creativity',
              'imagination',
              'originality',
              'innovation',
              'resourcefulness',
              'inspiration'
            ],
            example:
              'considerable ingenuity must be employed in writing software'
          }}
        />
      </S.Content>
      <S.Footer>
        Developed with <Link href="https://nextjs.org/">Next.JS</Link>, by
        <Link href="https://github.com/Henrique018"> Henrique Oliveira</Link>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Main;
