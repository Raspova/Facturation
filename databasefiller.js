import fetch from 'node-fetch';
import 'dotenv/config'
import puppeteer from "puppeteer"
import pg from 'pg'

const pool = new pg.Pool();

const insertStudent = 
"Insert Into\
  student_contacts (lastname, firstname, email, phone, pass)\
values\
  ( $1, $2, $3, $4, 'NULL') returning id;"
const insertFacturation  = "INSERT INTO \
facturation (\
  fk_user_contact,\
  formation,\
  ref,\
  ref_edof,\
  begin_session,\
  end_seesion,\
  nmb_hour,\
  puht,\
  mht,\
  mttc,\
  id_edusign\
) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);" 


//const client = new pg.Client({
//    connectionString: process.env.STRCONNECT,
//    ssl: {
//      rejectUnauthorized: false
//    }
//  });
//  
//await client.connect();
  


const browser = await puppeteer.launch();//{ headless: false }
async function clickUntil(page, selector, selectortarget) {
    try {
        await page.waitForSelector(selector, {timeout: 300} );//
        await page.click(selector);
    } 
    catch {
        try {
            await page.waitForSelector(selectortarget, {timeout: 1000});//
        }catch {
            clickUntil(page, selector, selectortarget)
        }
    }
    try {
        await page.waitForSelector(selectortarget, {timeout: 1000});//
    }catch {
        clickUntil(page, selector, selectortarget)
        return;
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

async function get_restInfo(id) {
    //const data = await request.json();
    return new Promise (async (resolve, reject) => {
    if (id == "favicon.png")
        return;
    const url  = "https://edusign.app/school/students/"+ id
    const page = await browser.newPage();
    await page.goto( url, { waitUntil: "networkidle2" });
    if (page.url() !== url ) {
           
        await type(page, "#main-page > app-login > div > div > form > div:nth-child(2) > div > input", "direction@plateformation.fr");
        
        await type(page, "#main-page > app-login > div > div > form > div:nth-child(3) > div > input", "Eliejonas123"); // Chage that shit
        page.click("#main-page > app-login > div > div > form > div:nth-child(7) > button")
        // CGU
        await click(page, "#check")
        await click(page, "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled")
        
    } 
    
    await click(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div" )
    
    await clickUntil(page, "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div.header-close",
    "#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div.header-open")
    
    await page.waitForSelector("#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > input");
    
    const info = await page.$$eval("#main-page > app-view-student > div:nth-child(3) > app-student-information > div > div > div.data-form:nth-child(2) > div:nth-child(2) > div:nth-child(7)  > div > input" ,(el) => el.map((a) => a.value))
    
     
 
    let number_hours;//= "12";
    let begin_session;//= "13/12/2021";
    let end_session;//= "14/03/2022"; 
    let puht;//= "45;00£";
    let mht;//= "45;00£";
    let mttc;//= "45;00£";
    
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
    page.close();
    
    //Certificateur
    const resStr = JSON.stringify({
        begin_session,
        end_session,
        number_hours,
        puht,
        mht,
        mttc})
    resolve( resStr);
    })
}
async function getStudents(pageIndex) {
    const getAll  = "https://ext.edusign.fr/v1/student?page=";
    let studentsBuff = await fetch( getAll + String(pageIndex), {
        headers: {
            "Authorization": "Bearer " + process.env.VITE_TOKEN,  //add VITE_TOKEN=1bd071cb742faf8823fbc0889cfbf23c4fbb3bf2aded73a75b4c167e3fd58b53
            "Content-Type": "application/json"
        }
    }) 
    let res = await studentsBuff.json()
    if (res.status == "error")
        throw () => {}
    //console.log(res)
    return res.result;
}

/*
async function forloop(array) {
    let studID;
    for (const el of array) {
        console.log(el.id);
        await pool.query(insertStudent, [
            el.LASTNAME,
            el.FIRSTNAME,
            el.EMAIL,
            el.PHONE], (err, res) => {
                if (err) {
                    studID = -1;
                    console.log("ISSERT STUDENT ERROR: " + err)
                } else { 
                    studID =  res.rows[0].id;
                    //console.log(el.LASTNAME + " Added id : " + )
                }
            })
        if (studID == -1)
            continue;
        const res = await get_restInfo(el.id);
        console.log(res);
        /*pool.query(insertFacturation, [
                studID,
                el.TRAINING_NAME,
                el.FILE_NUMBER,
                el.FILE_NUMBER,
                res.begin_session,
                res.end_session,
                res.number_hours,
                res.puht,
                res.mht,
                res.mttc,
                el.id
                ], (err, res) => {
                    if (err) {
                        studID = -1;
                        console.log("ISSERT STUDENT ERROR: " + err)
                    } else { 
                        console.log(el.LASTNAME + "Facturation added")
                    }
        })
        
    }
}*/
var resRet = [];

async function forloop(array, skipTil = "") {
    let  skip = 0; 
    if (skipTil != "")
        skip = 1;
    for (const el of array) {
        if (el.id ==  skipTil)
            skip  = 0;
        if (skip == 1)
            continue; 
        const resbuff = await get_restInfo(el.id);//JSON.parse();
        //console.log(resbuff);
        let res = JSON.parse(resbuff);
        const add = {
        lastname:el.LASTNAME,
        firstname:el.FIRSTNAME,
        email:el.EMAIL,
        phone:el.PHONE,
        // Contact
        formation:el.TRAINING_NAME,
        ref:el.FILE_NUMBER,
        ref_edof:el.FILE_NUMBER,
        begin_session:res.begin_session,
        end_session:res.end_session,
        number_hours:res.number_hours,
        puht:res.puht,
        mht:res.mht,
        mttc:res.mttc,
        id:el.id
        }
    let studID;

    pool.query(insertStudent, [
        add.lastname,
        add.firstname,
        add.email,
        add.phone], (err, res) => {
            if (err) {
                studID = -1;
                console.log("INSERT STUDENT ERROR: "+ add.lastname + ":"  + err)
            } else { 
                studID =  res.rows[0].id;
        
        pool.query(insertFacturation, [
            studID,
            add.formation,
            add.ref,
            add.ref_edof,
            add.begin_session,
            add.end_session,
            add.number_hours,
            add.puht,
            add.mht,
            add.mttc,
            add.id
            ], (err, res) => {
                if (err) {
                    studID = -1;
                    console.log("INSERT FACTURATION ERROR: "+ add.lastname + ":" + err)
                } else { 
                    console.log( "Facturation "+ add.lastname+ " added")
                }
    }) 
    }
    })
    }
}
async function  mainloop() {
    for (let i = 0; true; i++) {
        try {
            await forloop(await getStudents(i))
        } catch {
            return;
        }
   
} }

await mainloop();




console.log("bye")
//await forloop(res0);
browser.close();