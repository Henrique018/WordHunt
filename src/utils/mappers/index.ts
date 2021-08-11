type ApiData = {
  word: string;
  phonetic: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      example: string;
    };
  }[];
};

export const mapToDescription = (data: ApiData) => {
  return {
    heading: data.word,
    phonetics: data.phonetic,
    partOfSpeech: data.meanings[0].partOfSpeech,
    definitions: {
      meaning: data.meanings[0].definitions[0].definition,
      synonyms: data.meanings[0].definitions[0].synonyms,
      example: data.meanings[0].definitions[0].example
    }
  };
};
