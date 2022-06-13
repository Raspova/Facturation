import puppeteer from "puppeteer";
const browser = await puppeteer.launch({ headless: false });
async function click(page, selector) {
  await page.waitForSelector(selector);
  await page.click(selector);
}
async function type(page, selector, str) {
  await page.waitForSelector(selector);
  await page.type(selector, str);
}
async function post({ request }) {
  const data = await request.json();
  console.log(data);
  const page = await browser.newPage();
  await page.goto("https://edusign.app/", { waitUntil: "networkidle2" });
  page.waitForSelector("body > div.box-school > div > div.hover-bg");
  page.click("body > div.box-school > div > div.hover-bg");
  page.waitForNetworkIdle();
  await type(page, "#main-page > app-login > div > div > form > div:nth-child(2) > div > input", "direction@plateformation.fr");
  await type(page, "#main-page > app-login > div > div > form > div:nth-child(3) > div > input", "Eliejonas123");
  page.click("#main-page > app-login > div > div > form > div:nth-child(7) > button");
  await click(page, "#check");
  click(page, "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled");
  return {
    body: { "lol": "pop" }
  };
}
export { post };
