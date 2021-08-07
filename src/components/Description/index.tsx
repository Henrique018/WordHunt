import * as S from './style';
import { Soundwave } from '@styled-icons/bootstrap';

type DescriptionProps = {
  heading: string;
  phonetics?: string;
  partOfSpeech: string;
  definitions: {
    meaning: string;
    synonyms: string[];
    example: string;
  };
};

const Description = ({
  heading,
  phonetics,
  partOfSpeech,
  definitions
}: DescriptionProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <S.Heading>{heading}</S.Heading>
          <S.PartofSpeech>{partOfSpeech}</S.PartofSpeech>
        </div>
        <S.Pronunciation>
          <S.SoundButton title="hear the pronunciation">
            <Soundwave size={35} color={'#f2f2f2'} />
          </S.SoundButton>
          {phonetics && (
            <S.Phonetics title="phonetic of the word">{phonetics}</S.Phonetics>
          )}
        </S.Pronunciation>
      </S.Header>

      <S.Definitions>
        <S.Separator />
        <S.Text>{definitions.meaning}</S.Text>

        <S.Separator />
        <div>
          <S.Text>
            Synonyms:
            <br />
            {definitions.synonyms.map((synonym) => synonym.concat(', '))}
          </S.Text>
        </div>

        <S.Separator />
        <S.Text>
          Example: <br />
          {definitions.example}
        </S.Text>
      </S.Definitions>
    </S.Wrapper>
  );
};

export default Description;
