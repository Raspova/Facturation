
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
        width: 600;
        height: 900;
    }
     
</style>


<script>
    import Facture from '../facture.svelte';
    import { page } from '$app/stores';
    import FactureForm from '../../factureForm.svelte';
    import HeadBar from '../../HeadBar.svelte';
    //import createPdf from "../downloadPDF"
    
    //const studentbyID = "https://ext.edusign.fr/v1/student/" + $page.params.id;
    //let studentsBuff = loadInfo(); 
    
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
    let emission_date = getDate();//= "16-mars-22";
    // TODO
    export let number_invoice;//= "2022-54";
    export  let number_hours;//= "12";
    export  let begin_session;//= "13/~12/2021";
    export  let end_session;//= "14/03/2022"; 
    export  let price;//= "45;00£";
    let number_days = "";//= "2";
    let realisation_rate;//= "0"
    let civility = "";//= "Mme"; check if important 

    console.log(price," " , lastname);
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
        "ref_edof=" + ref_edof,
        "lastname=" + lastname,
        "firstname=" + firstname,
        "emission_date=" + emission_date ,
        "number_invoice=" + number_invoice,
        "begin_session=" + begin_session,
        "end_session=" + end_session,
        "number_hours=" + number_hours,
        "number_days=" + number_days,
        "price=" + price,
        "realisation_rat=" + realisation_rate,];
        let mywindow = window.open(window.location.href.split('file')[0] + "file/facture?" + params.join('&'), 'PRINT', 'height=650,width=900,top=100,left=150');
        mywindow.print();
    }
</script>



<main>
    {#await formation}
    LOADING
    {:then a} 
   
    <div id="form">
       <FactureForm bind:number_invoice={number_invoice} bind:begin_session={begin_session} bind:end_session={end_session}
            bind:number_hours={number_hours} bind:number_days={number_days} bind:price={price} bind:ref_edof={ref_edof} 
            bind:realisation_rate={realisation_rate}  bind:formation={formation} bind:lastname={lastname} 
            bind:firstname={firstname} bind:emission_date={emission_date} bind:civility={civility}> </FactureForm>
    </div>
    <div  id="fac">
        <Facture  {number_invoice} {begin_session} {end_session}
            {number_hours} {number_days} {price}
            {realisation_rate}  {formation} {lastname} 
            {firstname} {emission_date} {civility}></Facture>
    </div>
    {/await}
</main>

<HeadBar grennText="Validé" redText="Annulé" linkRed ="/home"  on:Green_click={() => {storeInfo()}} >

</HeadBar>