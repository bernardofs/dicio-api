import * as cheerio from 'cheerio';

function extractRhymes(html: string) {
  const $ = cheerio.load(html);

  const rhymesTable = $('.list.col-4-row.small').first().text();
  let rhymes = rhymesTable.match(/[^\s]+/g);

  if (!rhymes) {
    throw new Error(`Could not parse rhymes from "${rhymesTable}"`);
  }
  return rhymes;
}

export default extractRhymes;
