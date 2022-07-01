<script>  
    export let firstname;
    export let lastname;
    export let formation;
    export let date_session = "12/08/2021";
    export let begin_session = "10h30";
    export let end_session = "12h30";
    export let time_session = "2h";
    export let sigClient;
    export let firstname_inter;
    export let lastname_inter;
    export let sigIntervenant;
    export let table_session;

    async function addNewLine() {
        let id = table_session.length + 1;
        const newLine = {
            Id: id,
            Firstname: firstname,
            Lastname: lastname,
            Formation: formation,
            Date_session: date_session,
            Begin_session: begin_session,
            End_session: end_session,
            Time_session: time_session,
            Firstname_inter: firstname_inter,
            Lastname_inter: lastname_inter,
            Signature_client: "../testsig1.png",
            Signature_intervenant: "../testsig2.png"
        }
        table_session.push(newLine);
        table_session = [table_session, newline];
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
    <label>Apprenant</label>
    <input bind:value={firstname} id="firstname" class="input" type="text" placeholder="Prénom"/>
    <input bind:value={lastname} id="lastname" class="input" type="text" placeholder="Nom"/>
    <label>Formation</label>
    <input bind:value={formation} id="formation" class="input" type="text" placeholder="Formation"/>
    <input bind:value={date_session} id="date_session" class="input" type="text" placeholder="Date de la session"/>
    <input bind:value={begin_session} id="begin_session" class="input" type="text" placeholder="Heure de début"/>
    <input bind:value={end_session} id="end_session" class="input" type="text" placeholder="Heure de fin"/>
    <input bind:value={time_session} id="time_session" class="input" type="text" placeholder="Temps de la session"/>
    <label>Intervenant</label>
    <input bind:value={firstname_inter} id="firstname_inter" class="input" type="text" placeholder="Prénom intervenant"/>
    <input bind:value={lastname_inter} id="lastname_inter" class="input" type="text" placeholder="Nom intervenant"/>
    <button on:click={addNewLine} type="button" id="BtnPlusLineEmargement">Valider</button>
</main>