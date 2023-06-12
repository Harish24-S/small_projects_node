const cheerio = require("cheerio");
const axios = require("axios");

async function performScraping(url) {
    const axiosResponse = await axios.request({
        method: "GET",
        url: url,
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36" }
    });
    const $ = cheerio.load(axiosResponse.data);

    console.log("Page title: ", $("title").text());
    console.log("Page H1 content: ", $("h1").eq(0).text());
};

performScraping("https://www.w3schools.com/");
performScraping("https://brightdata.com/");
