
<style>
    :global(body) {
        margin: 10%;
        background: #ddd;
    }
    main {
        display: grid;
        grid-template-columns: 20% 80%;
    }
    #form{
        border: 2px;
        justify-self: center;
    }
    
    
    #fac {
        background-color: #fff;
        margin-left: 50px;
        background-size: 120%;

    }
     
</style>


<script>
    import Facture from '../facture.svelte';
    import { page } from '$app/stores';
    import FactureForm from '../../factureForm.svelte';
    import HeadBar from '../../HeadBar.svelte';
    import { onMount } from "svelte";
    //const jsPDF = require("jspdf");

    //import domtoimage from 'dom-to-image';
    //import { jsPDF } from 'jspdf';
    //import downL from '../../dowloadPDF'
    //import {fileInfo} from "../../store.js"
    
    let PDFDocument;
    onMount(async () => {
		PDFDocument = (await import('https://github.com/foliojs/pdfkit')).default
	})
    const studentbyID = "https://ext.edusign.fr/v1/student/" + $page.params.id;
    console.log($page.params)
    //const id = $page.params.id
    
    let studentsBuff = loadInfo(); 
    
    function getDate()  {
        let now = new Date();
        let month = '' + (now.getMonth() + 1);
        let day = '' + now.getDate();
        let year = now.getFullYear();
        
        if (month.length < 2) 
        month = '0' + month;
        if (day.length < 2) 
        day = '0' + day;
        
        return [year, month, day].join('-');
	}
    let facture;
    //DONE
    let civility = "";//= "Mme"; check if important 
    let formation;
    let ref_edof;
    let lastname;
    let firstname;
    let emission_date = getDate();//= "16-mars-22";
    // TODO
    let number_invoice;//= "2022-54";
    let begin_session;//= "13/12/2021";
    let end_session;//= "14/03/2022"; 
    let number_hours;//= "12";
    let number_days;//= "2";
    let puht;//= "45;00£";
    let mht;//= "45;00£";
    let mttc;//= "45;00£";
    let realisation_rate;//= "0"
    //civility,
    //formation,
    //ref_edof,
    //lastname,
    //firstname,
    //emission_date ,
    //number_invoice,
    //client_number,
    //begin_session,
    //end_session,
    //number_hours,
    //number_days,
    //puht,
    //mht,
    //mttc,
    //realisation_rate,
   
    async function storeInfo() {   
    
    var pageUrl = encodeURIComponent(window.location.href);
    var opts = ['save-link=' + pageUrl, 'pageOrientation=auto',  'usePrintMedia=true'];
    window.open('https://www.sejda.com/html-to-pdf?' + opts.join('&'));
        //let a = await fetch ("/downloadPDF");
        //let b = await a.json()
        console.log(a)
        //localStorage.setItem("civility",civility);
        //localStorage.setItem("formation",formation);
        //localStorage.setItem("ref_edof",ref_edof);
        //localStorage.setItem("lastname",lastname);
        //localStorage.setItem("firstname",firstname);
        //localStorage.setItem("emission_date",emission_date );
        //localStorage.setItem("number_invoice",number_invoice);
        //localStorage.setItem("begin_session",begin_session);
        //localStorage.setItem("end_session",end_session);
        //localStorage.setItem("number_hours",number_hours);
        //localStorage.setItem("number_days",number_days);
        //localStorage.setItem("puht",puht);
        //localStorage.setItem("mht",mht);
        //localStorage.setItem("mttc",mttc);
        //localStorage.setItem("realisation_rat",realisation_rate);
        ////domtoimage.toPng(document.getElementById("fac"))
        ////pdf.create(document.getElementById("fac").innerHTML, { format: 'A4' }).toFile('./businesscard.pdf', function(err, res) {
       
    }

   /* function storeInfo() {console.log("pop") ;
        fileInfo.update(() => { return JSON.stringify( {
        "civility":civility,
        "formation":formation,
        "ref_edof":ref_edof,
        "lastname":lastname,
        "firstname":firstname,
        "emission_date":emission_date ,
        "number_invoice":number_invoice,
        "begin_session":begin_session,
        "end_session":end_session,
        "number_hours":number_hours,
        "number_days":number_days,
        "puht":puht,
        "mht":mht,
        "mttc":mttc,
        "realisation_rat":realisation_rate}
        )});
    }*/
    async function loadInfo()  { 
        let buff = await fetch( studentbyID, {
            headers: {
                "Authorization": "Bearer " + import.meta.env.VITE_TOKEN,
                "Content-Type": "application/json"
            }
        })
        let ret = await buff.json();
        if (ret.status != "success")
            return;
        let res = ret.result;
        formation = res.TRAINING_NAME;
        ref_edof = res.FILE_NUMBER;
        firstname = res.FIRSTNAME;
        lastname = res.LASTNAME;
        console.log(ret + " " + ref_edof)
        return ret;
    }
</script>



<main>
    {#await studentsBuff}
        LOADING
    {:then data} 
        {#if data.status != "success"}
            (＞﹏＜) SOMETHING WHEN WRONG; (Bad id ?)  
        {:else}
        <div id="form">
           <FactureForm bind:number_invoice={number_invoice} bind:begin_session={begin_session} bind:end_session={end_session}
                bind:number_hours={number_hours} bind:number_days={number_days} bind:puht={puht} bind:mht={mht} bind:ref_edof={ref_edof} 
                bind:mttc={mttc} bind:realisation_rate={realisation_rate}  bind:formation={formation} bind:lastname={lastname} 
                bind:firstname={firstname} bind:emission_date={emission_date} bind:civility={civility}> </FactureForm>
        </div>
        <div  id="fac">
            <Facture bind:this={facture} {number_invoice} {begin_session} {end_session}
                {number_hours} {number_days} {puht} {mht} {ref_edof}  
                {mttc} {realisation_rate}  {formation} {lastname} 
                {firstname} {emission_date} {civility}></Facture>
        </div>
        {/if}
    {/await}

</main>
 <button href="/download"> test</button>

<HeadBar grennText="Validé" redText="Annulé" linkRed ="/"  on:Green_click={() => {storeInfo()}} >

</HeadBar>