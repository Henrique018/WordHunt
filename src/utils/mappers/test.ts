import { mapToDescription } from '.';

describe('mapToDescription()', () => {
  it('should create the correct structure for Description component', () => {
    const mock = [
      {
        word: 'ingenuity',
        phonetic: 'ˌɪndʒɪˈnjuːɪti',
        phonetics: [
          {
            text: 'ˌɪndʒɪˈnjuːɪti',
            audio:
              '//ssl.gstatic.com/dictionary/static/sounds/20200429/ingenuity--_gb_1.8.mp3'
          }
        ],
        origin:
          'late 16th century (also in the senses ‘nobility’ and ‘ingenuousness’): from Latin ingenuitas ‘ingenuousness’, from ingenuus ‘inborn’. The current meaning arose by confusion of ingenuous with ingenious.',
        meanings: [
          {
            partOfSpeech: 'noun',
            definitions: [
              {
                definition:
                  'the quality of being clever, original, and inventive.',
                example:
                  'considerable ingenuity must be employed in writing software',
                synonyms: [
                  'inventiveness',
                  'creativity',
                  'imagination',
                  'originality',
                  'innovation'
                ],
                antonyms: []
              }
            ]
          }
        ]
      }
    ];

    const mappedObj = mapToDescription(mock[0]);

    expect(mappedObj).toStrictEqual({
      heading: 'ingenuity',
      phonetics: 'ˌɪndʒɪˈnjuːɪti',
      partOfSpeech: 'noun',
      definitions: {
        meaning: 'the quality of being clever, original, and inventive.',
        synonyms: [
          'inventiveness',
          'creativity',
          'imagination',
          'originality',
          'innovation'
        ],
        example: 'considerable ingenuity must be employed in writing software'
      }
    });
  });
});
