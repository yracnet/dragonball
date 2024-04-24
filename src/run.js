import axios from "axios";
import cheerio from "cheerio";

const baseURL = "https://mundodragonball.com/dragon-ball-episodio-";

async function scrapeData(startIndex, endIndex) {
  const result = [];
  for (let i = startIndex; i <= endIndex; i++) {
    try {
      const urlSite = `${baseURL}${i}`;
      const response = await axios.get(urlSite);
      const html = response.data;
      const $ = cheerio.load(html);
      const iframe = $("iframe");
      const url = iframe.attr("src");
      const title = `Dragon Ball Episodio ${i}`;
      console.log({ urlSite, url, title });
      result.push({ url, title });
    } catch (error) {
      console.error(`Error fetching data from page ${i}:`, error.message);
    }
  }
  return result;
}

scrapeData(1, 154)
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((error) => {
    console.error("Error:", error);
  });
