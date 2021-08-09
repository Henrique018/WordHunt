import Link from 'next/link';

import Description from 'components/Description';

import * as S from './styles';
import Select from 'components/Select';
import TextField from 'components/TextField';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Heading>Word hunt</S.Heading>
      <S.Content>
        <S.InputWrapper>
          <TextField />
          <Select />
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
