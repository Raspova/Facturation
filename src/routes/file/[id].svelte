<script>
    import Facture from '../facture.svelte';
    import { page } from '$app/stores';
import { now } from 'svelte/internal';
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
    let civility = "";//= "Mme"; check if important 
    let formation;
    let ref_edof;
    let lastname;
    let firstname;
    let emission_date = getDate();//= "16-mars-22";
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
        </div>
            <Facture {formation} {lastname} {firstname} {emission_date} {civility}></Facture>
        {/if}
    {/await}

</main>
<!-- {id} -->