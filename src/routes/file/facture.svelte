<script context="module">
    export function load({ url }) {
      const ref = url.searchParams.get('') || 'Undefiend';
    let formation = url.searchParams.get('formation') || 'Undefiend';
    let number_invoice = url.searchParams.get('number_invoice') || 'Undefiend';
    let emission_date = url.searchParams.get('emission_date') || 'Undefiend';
    let ref_edof = url.searchParams.get('ref_edof') || 'Undefiend';
    let civility = url.searchParams.get('civility') || 'Undefiend';
    let lastname = url.searchParams.get('lastname') || 'Undefiend';
    let firstname = url.searchParams.get('firstname') || 'Undefiend';
    let begin_session = url.searchParams.get('begin_session') || 'Undefiend';
    let end_session = url.searchParams.get('end_session') || 'Undefiend';
    let number_hours = url.searchParams.get('number_hours') || 'Undefiend';
    let number_days = url.searchParams.get('number_days') || 'Undefiend';
    let puht = url.searchParams.get('puht') || 'Undefiend';
    let mht = url.searchParams.get('mht') || 'Undefiend';
    let mttc = url.searchParams.get('mttc') || 'Undefiend';
    let realisation_rate = url.searchParams.get('realisation_rate') || 'Undefiend';

    return {
        props: {
        formation,
        number_invoice,
        emission_date,
        ref_edof,
        civility,
        lastname,
        firstname,
        begin_session,
        end_session,
        number_hours,
        number_days,
        puht,
        mht,
        mttc,
        realisation_rate,
        }
      };
    }
</script>


<script>
    //import {fileInfo} from "../../store.js"
    import { onMount } from 'svelte';

    let company = "PLATEFORMATION"; // acount related;
    let siret ="90211098000015"; // acount related;
    let address = "48 RUE DU PROGRES 92700 COLOMBES"; // acount related;
    export let formation;
    export let number_invoice;
    export let emission_date;
    export let ref_edof;
    export let civility;
    export let lastname;
    export let firstname;
    export let begin_session;
    export let end_session;
    export let number_hours;
    export let number_days;
    export let puht;
    export let mht;
    export let mttc;
    export let realisation_rate;
    //onMount(() => {
    //formation  =  localStorage.getItem("formation");
    //number_invoice =  localStorage.getItem("number_invoice");
    //emission_date = localStorage.getItem("emission_date" );
    //ref_edof = localStorage.getItem("ref_edof");
    //civility = localStorage.getItem("civility");
    //lastname = localStorage.getItem("lastname");
    //firstname = localStorage.getItem("firstname");
    //begin_session = localStorage.getItem("begin_session");
    //end_session = localStorage.getItem("end_session");
    //number_hours = localStorage.getItem("number_hours");
    //number_days = localStorage.getItem("number_days");
    //puht = localStorage.getItem("puht");
    //mht = localStorage.getItem("mht");
    //mttc = localStorage.getItem("mttc");
    //realisation_rate = localStorage.getItem("realisation_rat");
    //}) 

</script>

<style>
    @charset "UTF-8";

.Bloc-Recipient {
	width: 45%;
	height: 15vh;
	border-style: solid;
	border-width: 1px;
	text-align: center;
	font-size: 80%;
	font-weight: bold;
	margin-left: 50%;
	margin-top: -6%;
}

td,
th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
}

td {
    text-align: center;
}

tr:nth-child(even) {
    background-color: #eee;
}

th[scope="col"] {
    background-color: #507895;
    color: #fff;
}

th[scope="row"] {
    background-color: #d7d9f2;
}

main {
    background-color: #fff;
}
    
table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: .8rem;
    width: 100%;
}

.Table-Margin {
	margin-top: 5%;
}
</style>

<main>
  <img class="" src="/logo.png" alt="Plateformation-Logo" width="200">
  <div class="Bloc-Recipient">
    <p>{company}<br/>
    {address}<br/>
    Siret CDC: {siret}</p>
  </div>
  <table class="Table-Margin">
      <tr>
          <th scope="col">N° de facture</th>
          <th scope="col">Date d'émission</th>
          <th scope="col">Références</th>
      </tr>
      <tr>
          <td >{number_invoice}</td>
          <td>{emission_date}</td>
          <td>N°CLIENT</td>
      </tr>
      <tr>
          <th scope="row">N°Convention</th>
          <td></td>
          <td>Réf EDOF: {ref_edof}</td>
      </tr>
  </table>
  <table class="Table-Margin">
      <tr>
          <th scope="col">Pour Stagiaire:</th>
          <th scope="col">Session</th>
      </tr>
      <tr>
          <td >{civility} {lastname} {firstname}</td>
          <td>{begin_session} au {end_session}<br/>Certification ICDL</td>
      </tr>
  </table>
  <table class="Table-Margin">
      <tr>
          <th scope="col">Désignation</th>
          <th scope="col">Nbre heures</th>
          <th scope="col">Nbre jours</th>
          <th scope="col">P.U. H.T</th>
          <th scope="col">Montant H.T.</th>
      </tr>
      <tr>
          <td >ACTION DE FORMATION:<br/>{formation}</td>
          <td>{number_hours}</td>
          <td>{number_days}</td>
          <td>{puht}</td>
          <td>{mht}</td>
      </tr>
      <tr>
          <td >Taux de réalisation: {realisation_rate}%</td>
      </tr>
  </table>
  <table class="Table-Margin">
      <tr>
          <th scope="col">Montant H.T.</th>
          <td >{mht}</td>
      </tr>
      <tr>
          <th scope="row">Exonéré de T.V.A. selon art 261-4-4A du CGI</th>
          <td>-</td>
      </tr>
      <tr>
          <th scope="row">Montant T.T.C.</th>
          <td>{mttc}</td>
      </tr>
  </table>
  <table class="Table-Margin">
      <tr>
          <td ><b>Conditions de règlement:</b> À réception de la facture</td>
      </tr>
  </table>
</main>
