<script>
    import SimplebuttonRed from '../../SimplebuttonRED.svelte';
    import Facture from '../facture.svelte';
    import { page } from '$app/stores';
    import fileInfo from "../../store.js"
    import SimplebuttonGreen from "../../SimplebuttonGREEN.svelte";
    //import loadpdf from "../../createPDF"

    const studentbyID = "https://ext.edusign.fr/v1/student/" + $page.params.id;
    console.log($page.params)
    //const id = $page.params.id
    //export let data;
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
    //DONE
    let civility = "";//= "Mme"; check if important 
    let formation;
    let ref_edof;
    let lastname;
    let firstname;
    let emission_date = getDate();//= "16-mars-22";
    // TODO
    let number_invoice;//= "2022-54";
    let client_number;//= "";
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
    function storeInfo() {
        fileInfo.update(() => { return JSON.stringify( {
        "civility":civility,
        "formation":formation,
        "ref_edof":ref_edof,
        "lastname":lastname,
        "firstname":firstname,
        "emission_date":emission_date ,
        "number_invoice":number_invoice,
        "client_number":client_number,
        "begin_session":begin_session,
        "end_session":end_session,
        "number_hours":number_hours,
        "number_days":number_days,
        "puht":puht,
        "mht":mht,
        "mttc":mttc,
        "realisation_rat":realisation_rate}
        )});
    }
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
        return ret;
    }
    const print = () => {
        console.log(this.innerHTML)
    }
</script>


<style>
    :global(body) {
        margin: 10%;
        background: #BCAB79;
    }
    main {
        background: #fff;
        display: grid;
        grid-template-columns: 100%;
    }
    input {

        width: 60%;
    }
    #head {
        font-size: 18px;
        font-weight: 300;
        background-color: #9a8c63ae;
        display: grid;
        grid-template-columns: 100%;
        padding-left: 5%;
    }
    header {
        width: 25%;
        height:10%;
        /* background-color: rgba(255, 255, 255, 0.899); */
        position:fixed;
        top: 10%;
        right: 5%;
        display: grid;
        grid-template-rows: 50% 50%;
        column-gap: 20px;
    }

    header >  a {
        display: grid;
        grid-template-columns: 50%;
        margin-left: 25%;
        margin-top: 10%;

    }
</style>


<main>
    
  
    {#await studentsBuff}
        LOADING
    {:then data} 
        {#if data.status != "success"}
            (＞﹏＜) SOMETHING WHEN WRONG; (Bad id ?)  
        {:else}
        <div id="head">
           
            <p>{firstname + " " + lastname} 
            <select name="sexe" id="sexe" bind:value={civility} >
                <option value="Mr">Mr</option>
                <option value="Mme">Mme</option>
                <option value="">VIDE</option>
            </select>
            <br><br>
            { "N°file:" + ref_edof}
            </p>
            <p><label for="formation">Formation : </label> <input id="formation" type="text" bind:value={formation}></p>
            <p><label for="Emision date">Emision date : </label> <input id="Emision date" type="text" bind:value={emission_date}></p>  
            <p>UNSET</p>
            <p><label for="N° Facture">N° Facture : </label><input id="N° Facture" type="text" bind:value={number_invoice}></p>  
            <p><label for="Début de session">Début de session : </label><input id="Début de session" type="text" bind:value={begin_session}></p>  
            <p><label for="Fin de session">Fin de session : </label><input id="Fin de session" type="text" bind:value={end_session}></p>  
            <p><label for="Nombre D'heure">Nombre D'heure : </label> <input id="Nombre D'heure" type="text" bind:value={number_hours}></p>  
            <p><label for="Nombre de Jour">Nombre de Jour : </label> <input id="Nombre de Jour" type="text" bind:value={number_days}></p>  
            <p><label for="P.U H.T">P.U H.T : </label> <input id="P.U H.T" type="text" bind:value={puht}></p>  
            <p><label for="Montant H.T">Montant H.T: </label> <input id="Montant H.T" type="text" bind:value={mht}></p>  
            <p><label for="Montant TTC">Montant TTC: </label> <input id="Montant TTC" type="text" bind:value={mttc}></p>  
            <p><label for="Taux de réalisation">Taux de réalisation: </label> <input id="Taux de réalisation" type="text" bind:value={realisation_rate}></p>  
        </div>
        <div>
            <Facture {number_invoice} {begin_session} {end_session}
                {number_hours} {number_days} {puht} {mht}  
                {mttc} {realisation_rate}  {formation} {lastname} 
                {firstname} {emission_date} {civility}></Facture>
        </div>
        {/if}
    {/await}

</main>


   

<header>
    <a href="/"><SimplebuttonRed value="Back" on:click={() => { }}   ></SimplebuttonRed></a>
    <a href="/file/facture"><SimplebuttonGreen value="Validé" on:click={() => {
        storeInfo();
        fileInfo.subscribe(val =>{console.log(val)});
    //    loadpdf("/file/facture")
    }
    } ></SimplebuttonGreen> </a>        
</header>
<!-- {id} -->