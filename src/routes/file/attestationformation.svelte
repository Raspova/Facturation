<script context="module">
    export function load({ url }) {
        const ref = url.searchParams.get('') || 'Undefined';
        let ref_edof = url.searchParams.get('ref_edof') || 'Undefined';
        let lastname = url.searchParams.get('lastname') || 'Undefined';
        let firstname = url.searchParams.get('firstname') || 'Undefined';
        let formation = url.searchParams.get('formation') || 'Undefined';
        let certification = url.searchParams.get('certification') || 'Undefined';
        let place_formation = url.searchParams.get('place_formation') || 'Undefined';
        let begin_session = url.searchParams.get('begin_session') || 'Undefined';
        let end_session = url.searchParams.get('end_session') || 'Undefined';
        let number_hours = url.searchParams.get('number_hours') || 'Undefined';
        let date_pdf = url.searchParams.get('date_pdf') || 'Undefined';

        return {
            props: {
                ref_edof,
                lastname,
                firstname,
                formation,
                certification,
                place_formation,
                begin_session,
                end_session,
                number_hours,
                date_pdf
            }
        };
    }
</script>

<script>
    export let ref_edof;
    export let lastname;
    export let firstname;
    export let formation;
    export let certification;
    export let place_formation;
    export let begin_session;
    export let end_session;
    export let number_hours;
    export let date_pdf;
</script>

<style>
    .wrapper {
        display: grid;
        grid-template-columns: 70% 30%;
    }

    .wrapper-logo-footer {
        display: grid;
        grid-template-columns: 45% 35% 20%;
    }

    :global(body) {
        height: 100vh !important;
        font-family: Verdana, Arial, Helvetica, sans-serif;
    }

    p {
        font-size: 12px;
    }

    main {
        height: 83vh;
        margin-left: 10px;
    }
</style>

<main>
    <div class="wrapper">
        <div>
            <h4>Plateformation</h4>
            <p>48, rue du progrès</p>
            <p>92700 COLOMBES</p>
            <p><u>Email:</u> administration@plateformation.fr</p>
            <p><u>Tel:</u> 06 13 96 99 56</p>
        </div>
        <div style="margin-top: 50px">
            <img src="../logo2.svg" alt="logo" width="200"/>
        </div>
    </div>
    <br/>
    <br/>

    <div style="text-align: center">
        <h2>Attestation individuelle de formation</h2>
    </div>
    <br/>
    <br/>
    <div>
        <p>Je soussigné <b>SERFATY Jonas</b></p>
        <p>Réprésentant de l'organisme de formation <b>Plateformation</b></p>
        <p>Atteste que <b>{lastname} {firstname}</b> a suivi la formation suivante:</p>
        <div style="margin-left: 3%; color: #145084">
            <h5>{formation} + {certification}</h5>
        </div>
        <p>Lieu de la formation: <b>{place_formation}</b></p>
        <p>Dates de la formation: <b>{begin_session}</b> au <b>{end_session}</b></p>
        <p>Durée de la formation: <b>{number_hours} heures</b></p>
        <br/><br/>
        <p>Fait à <b>Paris, le {date_pdf}</b></p>
        <br/><br/>
    </div>
    <div>
        <img src="../Tampon_Plateformation.PNG" alt="logo" width="200"/>
    </div>
</main>

<footer>
    <div class="background">
        <div class="wrapper-logo-footer">
            <div></div>
            <div>
                <img src="../logo2.svg" alt="logo" width="85"/>
            </div>
            <div></div>
        </div>
        <div style="text-align: center">
            <p>PLATEFORMATION - 48, rue du progrès 92700 COLOMBES - Email: administration@plateformation.fr</p>
            <p>- Tel: 06.13.96.99.56 SIRET: 30211098000015 - Numéro d'activité: 11922431492</p>
        </div>
        <div style="text-align: right">
            <p><b>PAGE 1/1</b></p>
        </div>
    </div>
</footer>