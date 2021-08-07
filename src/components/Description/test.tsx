import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test-helper';
import Description from '.';

const mock = {
  heading: 'ingenuity',
  phonetics: '/ˌɪn·dʒəˈnu·ə·t̬i/',
  partOfSpeech: 'noun ',
  definitions: {
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
    example: 'considerable ingenuity must be employed in writing software'
  }
};

describe('<Description>', () => {
  it('should have a heading, phonetics, part of Speech and definitions', () => {
    renderWithTheme(<Description {...mock} />);

    expect(
      screen.getByRole('heading', { name: /ingenuity/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/ˌɪn·dʒəˈnu·ə·t̬i/i)).toBeInTheDocument();
    expect(screen.getByText(/clever/i)).toBeInTheDocument();
    expect(screen.getByText(/inventiveness/i)).toBeInTheDocument();
  });

  it("should't display phonetics", () => {
    renderWithTheme(<Description {...mock} phonetics={undefined} />);

    expect(screen.queryByText(/ˌɪn·dʒəˈnu·ə·t̬i/i)).not.toBeInTheDocument();
  });
});
