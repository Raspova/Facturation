<script context="module">
    export function load({ url }) {
        let formation = url.searchParams.get('formation') || 'Undefined';
        let place_formation = url.searchParams.get('place_formation') || 'Undefined';
        let ref_edof = url.searchParams.get('ref_edof') || 'Undefined';
        let lastname = url.searchParams.get('lastname') || 'Undefined';
        let firstname = url.searchParams.get('firstname') || 'Undefined';
        let begin_session = url.searchParams.get('begin_session') || 'Undefined';
        let end_session = url.searchParams.get('end_session') || 'Undefined';
        let number_hours = url.searchParams.get('number_hours') || 'Undefined';
        let number_hours_off = url.searchParams.get('number_hours_off') || 'Undefined';
        let number_hours_off_justified = url.searchParams.get('number_hours_off_justified') || 'Undefined';
        let table_session = url.searchParams.get('table_session') || 'Undefined';

        return {
            props: {
                formation,
                place_formation,
                ref_edof,
                lastname,
                firstname,
                begin_session,
                end_session,
                number_hours,
                number_hours_off,
                number_hours_off_justified,
                table_session
            }
        };
    }
</script>

<script>
    import LineTableEmargement from '../../LineTableEmargement.svelte';

    export let firstname;
    export let lastname;
    export let formation;
    export let place_formation;
    export let ref_edof;
    export let begin_session;
    export let end_session;
    export let number_hours;
    export let number_hours_off;
    export let number_hours_off_justified;
    export let table_session; 
    export let isSuppLine = 0;

    table_session = table_session;
</script>

<style>
    :global(body) {
        font-family: Verdana, Arial, Helvetica, sans-serif;
    }

    .wrapper-logo {
        display: grid;
        grid-template-columns: 45% 30% 30%;
    }
    
    .wrapper-title {
        display: grid;
        grid-template-columns: 48% 4% 48%;
        text-align: left;
        margin-bottom: 25px;
    }

    .trace-title {
        width: 5px;
        background-color: #c3c3c5;
        height: 100%;
    }
       
    table {
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-family: sans-serif;
        font-size: .8rem;
        width: 100%;
    }

    td,
    th {
        border: 1px solid rgb(190, 190, 190);
        padding: 10px;
    }

    td {
        text-align: center;
        background-color: white;
    }

    tr:nth-child(even) {
        background-color: #eee;
    }

    th[scope="col"] {
        background-color: #b4b4b4;
        color: #111;
    }

    th[scope="row"] {
        background-color: #d7d9f2;
    }

    .wrapper-logo-footer {
        display: grid;
        grid-template-columns: 45% 35% 20%;
    }
</style>

<main>
    <div class="wrapper-logo">
        <div></div>
        <div>
            <img src="../logo2.svg" alt="logo" width="100"/>
        </div>
        <div></div>
    </div>
    <div style="text-align: center">
        <h2>Feuille d'émargement</h2>
    </div>
    <div class="wrapper-title">
        <div style="border: solid; padding-left: 5px; margin-left: 5px">
            <p><b>Apprenant:</b> {firstname} {lastname}</p>
            <p><b>Nom de la formation:</b> {formation}</p>
            <p><b>Lieu:</b> {place_formation}</p>
            <p><b>Référence:</b> {ref_edof}</p>
            <p><b>Période:</b> {begin_session} au {end_session}</p>
        </div>
        <div></div>
        <div style="border: solid; padding-left: 5px; margin-right: 5px">
            <h4>PLATEFORMATION</h4>
            <p>N° de déclaration: 11922431492</p>
            <p>48, rue du progrès 92700 Colombes</p>
            <p>Tel: 0612192326</p>
        </div>
    </div>
    <table class="Table-Margin">
        <tr>
            <th scope="col">Session(s)</th>
            <th scope="col">Durée</th>
            <th scope="col">Signature</th>
            <th scope="col">Intervenant(s)</th>
        </tr>
        {#each table_session as session}
            <LineTableEmargement idLineSig="Line{session.Id}" idInterSig="Inter{session.Id}" bind:session={session} bind:isSuppLine={isSuppLine}></LineTableEmargement>
        {/each}
    </table>
    <div>
        <p><b>DURÉE TOTALE DE PRÉSENCE:</b> {number_hours} heure(s)</p>
        <p><b>DURÉE TOTALE D'ABSENCE:</b> {number_hours_off} heure(s) (dont {number_hours_off_justified} heure(s) justifiée(s))</p>
    </div>
    <div>
        <p><b>Information: </b>Les données collectées par cette feuille d'émargement sont de nature à permettre la justification des heures
            effectuées dans le cadre de votre projet de formation. Nous, PLATEFORMATION sis 48, rue du progrès 92700 Colombes,
            attestons par la présente la réalité des informations portées ci-dessus à votre connaissance.
            <b>Pour valoir ce que de droit</b>.</p>
    </div>
</main>