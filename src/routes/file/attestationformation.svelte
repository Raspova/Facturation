<script context="module">
    export let civility_client = "Mme"
    export let lastname_client = "DESBUISSON"
    export let firstname_client = "Mael"
    export let formation = "ANGLAIS EN VISIOCONFERENCE"
    export let certification = "CERTIFICATION TOEIC"
    export let place_formation = "100% à distance en visionconférence."
    export let begin_date_formation = "25/05/2022"
    export let end_date_formation = "15/06/2022"
    export let time_formation = "4 heures"
    export let date_pdf= "21 juin 2022"

    export function load({ url }) {
 
        return {
            props: {
                civility_client,
                lastname_client,
                firstname_client,
                formation,
                certification,
                place_formation,
                begin_date_formation,
                end_date_formation,
                time_formation,
                date_pdf
            }
        };
    }
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
        <p>Atteste que <b>{civility_client}.{lastname_client} {firstname_client}</b> a suivi la formation suivante:</p>
        <div style="margin-left: 3%; color: #145084">
            <h5>{formation} + {certification}</h5>
        </div>
        <p>Lieu de la formation: <b>{place_formation}</b></p>
        <p>Dates de la formation: <b>{begin_date_formation}</b> au <b>{end_date_formation}</b></p>
        <p>Durée de la formation: <b>{time_formation}</b></p>
        <br/><br/>
        <p>Fait à <b>Paris, le {date_pdf}</b></p>
        <br/>
    </div>
    <div>
        <img src="../testtampon.jpg" alt="logo" width="200"/>
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