
<script>
    import fileInfo from "../../store.js"
    let company = "PLATEFORMATION"; // acount related;
    let siret ="90211098000015"; // acount related;
    let address = "48 RUE DU PROGRES 92700 COLOMBES"; // acount related;
    let formation;
    let number_invoice;
    let emission_date;
    let client_number;
    let ref_edof;
    let civility;
    let lastname;
    let firstname;
    let begin_session;
    let end_session;
    let number_hours;
    let number_days;
    let puht;
    let mht;
    let mttc;
    let realisation_rate;
    const unsub  = fileInfo.subscribe(
        valO  =>  {
    let val = JSON.parse(valO);
    formation = val.formation
    number_invoice = val.number_invoice
    emission_date = val.emission_date
    client_number = val.client_number
    ref_edof = val.ref_edof
    civility = val.civility
    lastname = val.lastname
    firstname = val.firstname
    begin_session = val.begin_session
    end_session = val.end_session
    number_hours = val.number_hours
    number_days = val.number_days
    puht = val.puht
    mht = val.mht
    mttc = val.mttc
    realisation_rate = val.realisation_rate
        }
    )
    unsub()
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
/* id changer tout; stocké num  */
:global(body) {
        margin: 10%;
        background: #fff;
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
          <td>N°CLIENT {client_number}</td>
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
