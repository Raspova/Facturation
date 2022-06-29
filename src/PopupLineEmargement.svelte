<script>
    import FactureFormInner from "./factureFormInner.svelte";
    
    export let firstname = "johan";
    export let lastname = "gaudisson";
    export let formation = "anglais";
    export let date_session = "12/08/2022";
    export let begin_session = "10h45";
    export let end_session = "12h15";
    export let time_session = "1h30";
    export let sigClient;
    export let firstname_inter = "Jean-Pierre";
    export let lastname_inter = "Ducoq";
    export let sigIntervenant;

    let fileSigClient;
    let fileSigIntervenant;

    function encodeImageFileAsURL(element) {
        console.log(fileSigClient)
        console.log(fileSigIntervenant)
        console.log(element)
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file);
    }

    function addNewLine() {
        const newLine = {
            Firstname: firstname,
            Lastname: lastname,
            Formation: formation,
            Date_session: date_session,
            Begin_session: begin_session,
            End_session: end_session,
            Time_session: time_session,
            Firstname_inter: firstname_inter,
            Lastname_inter: lastname_inter
        }
        encodeImageFileAsURL(fileSigClient);
        encodeImageFileAsURL(fileSigIntervenant);
        console.log(newLine);
    }

</script>

<style>
    .input {
        width: 95%;
        margin-top: 10px;
    }

    main {
        text-align: center;
    }

    #BtnPlusLineEmargement {
        width: 96%;
        margin-top: 10px;
    }
</style>

<main>
    <h3>Ajouter une nouvelle ligne</h3>
    <input bind:value={firstname} id="firstname" class="input" type="text" placeholder="Prénom"/>
    <input bind:value={lastname} id="lastname" class="input" type="text" placeholder="Nom"/>
    <input bind:value={formation} id="formation" class="input" type="text" placeholder="Formation"/>
    <input bind:value={date_session} id="date_session" class="input" type="text" placeholder="Date de la session"/>
    <input bind:value={begin_session} id="begin_session" class="input" type="text" placeholder="Heure de début"/>
    <input bind:value={end_session} id="end_session" class="input" type="text" placeholder="Heure de fin"/>
    <input bind:value={time_session} id="time_session" class="input" type="text" placeholder="Temps de la session"/>
    <label>Signature du client</label><br/>
    <input type="file" bind:value={fileSigClient}>
    <input bind:value={firstname_inter} id="firstname_inter" class="input" type="text" placeholder="Prénom intervenant"/>
    <input bind:value={lastname_inter} id="lastname_inter" class="input" type="text" placeholder="Nom intervenant"/>
    <label>Signature de l'intervenant</label><br/>
    <input type="file" bind:value={fileSigIntervenant}>
    <button on:click={addNewLine} type="button" id="BtnPlusLineEmargement">Valider</button>
</main>