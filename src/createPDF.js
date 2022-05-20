const puppeteer = require('puppeteer');

const createPDF =  async (url) => {
  const browser = await puppeteer.launch();
  // Open a new `Page`.
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0"
  })

  // Store the PDF in a file named `invoice.pdf`.
  await page.pdf({
    printBackground: true,
    displayHeaderFooter: false,
    landscape: false,
    // footerTemplate: ,
    path: "./pdf/" + name + ".pdf",
    format: "A4",
    margin: {
      top: "20px",
      bottom: "90px",
      left: "10px",
      right: "20px"
    }
  }).then(_=> {
    console.log("File " + name + " Downloaded")
  }).catch(e => {
    console.log(e)
  })
  await browser.close();
}

export default createPDF