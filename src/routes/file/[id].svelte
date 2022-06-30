
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
    
    #tabs {
        margin-left: 50px;
    }    

    [type="button"] {
        background-color: white;
        border: none;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    [type="button2"] {
        background-color: #15172b;
        color: white;
        border: none;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    #fac, #attestation, #emargement {
        background-color: #fff;
        margin-left: 50px;
        background-size: 120%;
        width: 600;
        height: 900;
    }
</style>


<script>
    import { onMount } from 'svelte';
    import Facture from '../facture.svelte';
    import AttestationFormation from './attestationformation.svelte';
    import Emargement from './emargement.svelte';
    import { page } from '$app/stores';
    import FactureForm from '../../factureForm.svelte';
    import FactureFormAttestation from '../../factureFormAttestation.svelte';
    import FactureFormEmargement from '../../factureFormEmargement.svelte';
    import HeadBar from '../../HeadBar.svelte';
    import Attestationformation from './attestationformation.svelte';
    //import createPdf from "../downloadPDF"
    
    //const studentbyID = "https://ext.edusign.fr/v1/student/" + $page.params.id;
    //let studentsBuff = loadInfo(); 
    
    let nameDoc;
    onMount(async () => {
        nameDoc = "facture";
        document.getElementById("attestation").style.display = "none";
        document.getElementById("fac").style.display = "block";
        document.getElementById("formattestation").style.display = "none";
        document.getElementById("formemargement").style.display = "none";
        document.getElementById("formfac").style.display = "block";
        document.getElementById("tab-2").style.backgroundColor = "#eaebec";
        document.getElementById("emargement").style.display = "none";
        document.getElementById("tab-3").style.backgroundColor = "#eaebec";
	});

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
    
    export let formation;
    export let ref_edof;
    export let lastname;
    export let firstname;
    export let lastname_inter = "Pltfaurmacion";
    export let firstname_inter = "Jean-Michel";
    let emission_date = getDate();//= "16-mars-22";
    // TODO
    export let number_invoice;//= "2022-54";
    export  let number_hours;//= "12";
    export  let begin_session;//= "13/12/2021";
    export  let end_session;//= "14/03/2022"; 
    export  let puht;//= "45;00£";
    export  let mht;//= "45;00£";
    export  let mttc;//= "45;00£";
    let number_days = "";//= "2";
    let realisation_rate;//= "0"
    let civility = "";//= "Mme"; check if important 
    export let certification = "test";
    export let place_formation = "télétravail";
    export let date_pdf = "12/09/2022"
    export let number_hours_off_justified = "3";
    export let number_hours_off = "12";
    
    const newLine1 = {
        Id: 1,
        Firstname: firstname,
        Lastname: lastname,
        Formation: "anglais",
        Date_session: "19/07/2020",
        Begin_session: "10h45",
        End_session: "12h30",
        Time_session: "1h45",
        Firstname_inter: "Jean-Michel",
        Lastname_inter: "Pltefaurmacion",
        Signature_client: "../testsig1.png",
        Signature_intervenant: "../testsig2.png"
    }
    const newLine2 = {
        Id: 2,
        Firstname: firstname,
        Lastname: lastname,
        Formation: "anglais",
        Date_session: "21/07/2020",
        Begin_session: "14h45",
        End_session: "16h30",
        Time_session: "1h45",
        Firstname_inter: "Jean-Michel",
        Lastname_inter: "Pltefaurmacion",
        Signature_client: "Undefined",
        Signature_intervenant: "Undefined",
    }

    const newLine3 = {
        Id: 3,
        Firstname: firstname,
        Lastname: lastname,
        Formation: "anglais",
        Date_session: "24/07/2020",
        Begin_session: "13h45",
        End_session: "16h30",
        Time_session: "2h45",
        Firstname_inter: "Jean-Michel",
        Lastname_inter: "Pltefaurmacion",
        Signature_client: "../testsig1.png",
        Signature_intervenant: "../testsig2.png"
    }

    export let table_session = [newLine1, newLine2, newLine3];
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
    //

    async function storeInfo() {   
    let params = ["civility=" + civility,
        "formation=" + formation,
        "certification=" + certification,
        "ref_edof=" + ref_edof,
        "lastname=" + lastname,
        "firstname=" + firstname,
        "emission_date=" + emission_date ,
        "place_formation=" + place_formation,
        "date_pdf=" + date_pdf,
        "number_invoice=" + number_invoice,
        "begin_session=" + begin_session,
        "end_session=" + end_session,
        "number_hours=" + number_hours,
        "number_hours_off=" + number_hours_off,
        "number_hours_off_justified=" + number_hours_off_justified,
        "table_session=" + table_session,
        "number_days=" + number_days,
        "puht=" + puht,
        "mht=" + mht,
        "mttc=" + mttc,
        "realisation_rat=" + realisation_rate,];
        let mywindow = window.open(window.location.href.split('file')[0] + "file/" + nameDoc + "?" + params.join('&'), 'PRINT', 'height=650,width=900,top=100,left=150');
        mywindow.print();
    }

    function printAttestation() {
        document.getElementById("attestation").style.display = "block";
        document.getElementById("tab-2").style.backgroundColor = "white";
        document.getElementById("fac").style.display = "none";
        document.getElementById("tab-1").style.backgroundColor = "#eaebec";
        document.getElementById("formattestation").style.display = "block";
        document.getElementById("formfac").style.display = "none";
        document.getElementById("emargement").style.display = "none";
        document.getElementById("tab-3").style.backgroundColor = "#eaebec";
        document.getElementById("formemargement").style.display = "none";
        nameDoc = "attestationformation";
    }

    function printFacture() {
        document.getElementById("attestation").style.display = "none";
        document.getElementById("tab-2").style.backgroundColor = "#eaebec";
        document.getElementById("fac").style.display = "block";
        document.getElementById("tab-1").style.backgroundColor = "white";
        document.getElementById("formattestation").style.display = "none";
        document.getElementById("formfac").style.display = "block";
        document.getElementById("emargement").style.display = "none";
        document.getElementById("tab-3").style.backgroundColor = "#eaebec";
        document.getElementById("formemargement").style.display = "none";
        nameDoc = "facture";
    }

    function printEmargement() {
        document.getElementById("attestation").style.display = "none";
        document.getElementById("tab-2").style.backgroundColor = "#eaebec";
        document.getElementById("fac").style.display = "none";
        document.getElementById("tab-1").style.backgroundColor = "#eaebec";
        document.getElementById("formattestation").style.display = "none";
        document.getElementById("formfac").style.display = "none";
        document.getElementById("emargement").style.display = "block";
        document.getElementById("tab-3").style.backgroundColor = "white";
        document.getElementById("formemargement").style.display = "block";
        nameDoc = "emargement";
    }
</script>



<main>
    {#await formation}
    LOADING
    {:then a} 
   
    <div id="form">
        <div id="formfac">
            <FactureForm bind:number_invoice={number_invoice} bind:begin_session={begin_session} bind:end_session={end_session}
                bind:number_hours={number_hours} bind:number_days={number_days} bind:puht={puht} bind:mht={mht} bind:ref_edof={ref_edof} 
                bind:mttc={mttc} bind:realisation_rate={realisation_rate}  bind:formation={formation} bind:lastname={lastname} 
                bind:firstname={firstname} bind:emission_date={emission_date}> </FactureForm>
        </div>
        <div id="formattestation">
            <FactureFormAttestation bind:ref_edof={ref_edof} bind:lastname={lastname}  bind:firstname={firstname} bind:formation={formation}
            bind:certification={certification} bind:place_formation={place_formation} bind:begin_session={begin_session} bind:end_session={end_session} 
            bind:number_hours={number_hours} bind:date_pdf={date_pdf}></FactureFormAttestation>
        </div>
        <div id="formemargement">
            <FactureFormEmargement bind:ref_edof={ref_edof} bind:lastname={lastname}  bind:firstname={firstname} bind:formation={formation}
            bind:place_formation={place_formation} bind:begin_session={begin_session} bind:end_session={end_session} 
            bind:number_hours={number_hours} bind:number_hours_off={number_hours_off} bind:number_hours_off_justified={number_hours_off_justified} 
            bind:table_session={table_session} {firstname_inter} {lastname_inter} ></FactureFormEmargement>
        </div>
    </div>
    <div>
        <div id="tabs">
            <button type="button" id="tab-1" on:click={printFacture}>Facture</button>
            <button type="button" id="tab-2" on:click={printAttestation}>Attestation</button>
            <button type="button" id="tab-3" on:click={printEmargement}>Emargement</button>
        </div>
        <div id="fac">
            <Facture  {number_invoice} {begin_session} {end_session}
                {number_hours} {number_days} {puht} {mht} {ref_edof}  
                {mttc} {realisation_rate}  {formation} {lastname} 
                {firstname} {emission_date}></Facture>
        </div>
        <div id="attestation">
            <AttestationFormation {ref_edof} {lastname} {firstname} {formation} {certification} {place_formation} {begin_session} 
            {end_session} {number_hours} {date_pdf}></AttestationFormation>
        </div>
        <div id="emargement">
            <Emargement {firstname} {lastname} {formation} {place_formation} {ref_edof} {begin_session} {end_session} {number_hours} {number_hours_off} 
            {number_hours_off_justified} {table_session}></Emargement>
        </div>
    </div>
    {/await}
</main>

<HeadBar grennText="Validé" redText="Annulé" linkRed ="/home"  on:Green_click={() => {storeInfo()}} >

</HeadBar>