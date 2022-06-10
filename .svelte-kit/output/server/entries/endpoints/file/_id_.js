import puppeteer from "puppeteer";
async function clickUntil(page, selector, selectortarget) {
  try {
    await page.waitForSelector(selector, { timeout: 300 });
    await page.click(selector);
  } catch {
    try {
      await page.waitForSelector(selectortarget, { timeout: 1e3 });
      return;
    } catch {
      clickUntil(page, selector, selectortarget);
    }
  }
  try {
    await page.waitForSelector(selectortarget, { timeout: 1e3 });
  } catch {
    clickUntil(page, selector, selectortarget);
  }
}
async function click(page, selector) {
  try {
    await page.waitForSelector(selector);
    await page.click(selector);
  } catch {
    console.log("CLICK FAIL : " + selector);
  }
}
async function type(page, selector, str) {
  await page.waitForSelector(selector);
  await page.type(selector, str);
}
async function get({ params }) {
  const browser = await puppeteer.launch({ headless: false });
  const url = "https://edusign.app/school/students/" + params.id;
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  if (page.url() !== url) {
    await type(page, "#main-page > app-login > div > div > form > div:nth-child(2) > div > input", "direction@plateformation.fr");
    await type(page, "#main-page > app-login > div > div > form > div:nth-child(3) > div > input", "Eliejonas123");
    page.click("#main-page > app-login > div > div > form > div:nth-child(7) > button");
    await click(page, "#check");
    await click(page, "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled");
  }
  await click(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div");
  await clickUntil(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div.header-close", "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div.header-open");
  await page.waitForSelector("#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > input");
  const info = await page.$$eval("#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div:nth-child(2) > div:nth-child(7)  > div > input", (el) => el.map((a) => a.value));
  let number_hours;
  let begin_session;
  let end_session;
  let puht;
  let mht;
  let mttc;
  number_hours = info[0];
  begin_session = info[1];
  end_session = info[2];
  puht = info[3];
  mht = info[3];
  mttc = info[3];
  browser.close();
  return {
    body: {
      number_hours,
      begin_session,
      end_session,
      puht,
      mht,
      mttc
    }
  };
}
export { get };
