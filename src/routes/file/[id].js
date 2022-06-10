/*import puppeteer from "puppeteer"

async function clickUntil(page, selector, selectortarget) {
    try {
        await page.waitForSelector(selector, {timeout: 300} );//
        await page.click(selector);
    } 
    catch {
        try {
            await page.waitForSelector(selectortarget, {timeout: 1000});//
            return;
        }catch {
            clickUntil(page, selector, selectortarget)
        }
    }
    try {
        await page.waitForSelector(selectortarget, {timeout: 1000});//
    }catch {
        clickUntil(page, selector, selectortarget)
    }
}

async function click(page, selector) {
    try {
        await page.waitForSelector(selector );//{timeout: 500}
        await page.click(selector);
    } 
    catch {
        console.log( "CLICK FAIL : " + selector )
    }
}

async function evalElem(page, selector) {
    try {
        await page.waitForSelector(selector );//{timeout: 500}
        const input  = await page.$eval(selector);
        return input;
    } 
    catch {
        console.log("EVAL FAIL : " + selector)
    }
}


async function type(page, selector, str) {
    await page.waitForSelector(selector);
    await page.type(selector, str);
}

export async function get({params}) {
    //const data = await request.json();
    const browser = await puppeteer.launch( { headless: false });
    if (params.id == "favicon.png")
        return;
    const url  = "https://edusign.app/school/students/"+ params.id
    const page = await browser.newPage();
    await page.goto( url, { waitUntil: "networkidle2" });
    if (page.url() !== url ) {
        //await page.goto("https://edusign.app/", { waitUntil: "networkidle2" });
        //page.waitForSelector("body > div.box-school > div > div.hover-bg", );
        //page.click("body > div.box-school > div > div.hover-bg");
        //page.waitForNetworkIdle();
        
        await type(page, "#main-page > app-login > div > div > form > div:nth-child(2) > div > input", "direction@plateformation.fr");
        //console.log(import.meta.env.PSD)
        await type(page, "#main-page > app-login > div > div > form > div:nth-child(3) > div > input", "Eliejonas123"); // Chage that shit
        page.click("#main-page > app-login > div > div > form > div:nth-child(7) > button")
        // CGU
        await click(page, "#check")
        await click(page, "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled")
        //page
    } 
    //"#main-page > app-view-student > div.ng-tns-c22-12.ng-star-inserted > app-student-information > div > div.ng-tns-c24-13 > div  > div > span"
    //await click(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div" )
    await click(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div" )
    //await click(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div" )
    await clickUntil(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div.header-close",
    "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div.header-open")
    //const inputs = await evalElem(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div > input", el => el.values)
    // input;
    await page.waitForSelector("#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > input");
    //console.log(await  page.content());
    const info = await page.$$eval("#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div:nth-child(2) > div:nth-child(7)  > div > input" ,(el) => el.map((a) => a.value))
    
     
 
    let number_hours;//= "12";
    let begin_session;//= "13/12/2021";
    let end_session;//= "14/03/2022"; 
    let puht;//= "45;00£";
    let mht;//= "45;00£";
    let mttc;//= "45;00£";
   // let realisation_rate;
    //Durée de formation
    number_hours = info[0];
    //Date entrée en formation
    begin_session = info[1]; 
    //Date sortie de formation
    end_session = info[2];
    //Prix de la formation
    puht = info[3];
    mht = info[3];
    mttc = info[3];
    //Date de début - Date de fin de session
    //await page.close();
    browser.close();
    //Certificateur
   // console.log("imp " + inp[0] );
    return {
        body: {
            number_hours,
            begin_session,
            end_session,
            puht,
            mht,
            mttc}
    };
}
*/

import pg from 'pg'
import 'dotenv/config'

export async function get({params}) {
    const pool = new pg.Pool();
    
    
    let resultUser =  await pool.query("SELECT * FROM student_contacts WHERE id = $1;" , [params.id]);
    let resultFac =  await pool.query("SELECT * FROM facturation WHERE fk_user_contact = $1;" , [params.id]);
    //console.log(resultFac.rows[0].id)
    let user = resultUser.rows[0];
    let fac = resultFac.rows[0];
    let formation = fac.formation;
    let ref_edof = fac.ref;
    let lastname = user.lastname;
    let firstname = user.firstname;
    let number_hours = fac.nmb_hour;//= "12";
    let begin_session = fac.begin_session;//= "13/12/2021";
    let end_session = fac.end_seesion;//= "14/03/2022"; 
    let puht = fac.puht;//= "45;00£";
    let mht = fac.mht;//= "45;00£";
    let mttc = fac.mttc;//= "45;00£";
 
    return {
        body: {
            user:user,
            fac:fac,
            formation:formation,
            ref_edof:ref_edof,
            lastname:lastname,
            firstname:firstname,
            number_hours:number_hours,
            begin_session:begin_session,
            end_session:end_session,
            puht:puht,
            mht:mht,
            mttc:mttc,
 
        }
    }
}