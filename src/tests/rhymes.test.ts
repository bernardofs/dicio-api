import extractRhymes from "../scrappers/rhymes";
import axiosClient from "../utils/axiosClient";

describe('testing rhymes file', () => {
  test('the word \"kiwi\" has no rhymes', async () => {
    const { data: html } = await axiosClient.get('kiwi');
    expect(() => extractRhymes(html)).toThrow();
  });

  describe('testing the word \"apologia\"', () => {
    let rhymes: string[];
    beforeAll(async () => {
      const { data: html } = await axiosClient.get('apologia');
      rhymes = extractRhymes(html);
    });

    test(`should have a positive number of rhymes`, async () => {
      expect(rhymes.length).toBeGreaterThan(0);
    });

    test(`every rhyme should end with the suffix "ia"`, async () => {
      expect(rhymes.every(word => word.slice(-2) === 'ia')).toBe(true);
    });
  });
});