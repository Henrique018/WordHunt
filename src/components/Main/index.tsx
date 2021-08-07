import Description from 'components/Description';
import * as S from './styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Heading>Word hunt</S.Heading>
      <S.DescriptionWrapper>
        <Description
          heading={'ingenuity'}
          phonetics={'/ˌɪn·dʒəˈnu·ə·t̬i/'}
          partOfSpeech={'noun '}
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
      </S.DescriptionWrapper>
      <S.Footer>Developed with Next.JS, by Henrique Oliveira</S.Footer>
    </S.Wrapper>
  );
};

export default Main;
