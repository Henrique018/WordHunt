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
  language: string;
};

const Description = ({
  heading,
  phonetics,
  partOfSpeech,
  definitions,
  language
}: DescriptionProps) => {
  const speak = () => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    const selectedVoice = voices.find(
      (voice) => voice.lang === language.replace('_', '-')
    );

    const utterance = new SpeechSynthesisUtterance(heading);
    utterance.lang = selectedVoice?.lang ? selectedVoice?.lang : 'en-US';
    utterance.volume = 1;
    utterance.rate = 0.8;
    synth.speak(utterance);
  };
  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <S.Heading>{heading}</S.Heading>
          <S.PartofSpeech>{partOfSpeech}</S.PartofSpeech>
        </div>
        <S.Pronunciation>
          <S.SoundButton title="hear the pronunciation" onClick={speak}>
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
        <S.Text>
          Example: <br />
          {definitions.example}
        </S.Text>

        <S.Separator />
        <div>
          <S.Text>
            Synonyms:
            <br />
            {definitions.synonyms.map((synonym) => synonym.concat(', '))}
          </S.Text>
        </div>
      </S.Definitions>
    </S.Wrapper>
  );
};

export default Description;
