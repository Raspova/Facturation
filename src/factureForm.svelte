<script>
    import FactureFormInner from "./factureFormInner.svelte";

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

    console.log(" popo " + ref_edof);
</script>

<style>

.form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 100%;
  padding: 30px;
  width: 100%;
}
.cut-short {
  width: 50px;
}
.title {
  color: #eee;
  top: 0;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  /* outline: 0; */
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: #06b;
}

</style>

<div class="form">
    <div class="title">N°{ref_edof}</div>
    <div class="subtitle">{lastname} {firstname} !</div>
    <FactureFormInner  bind:value={formation}  str="Formation" ></FactureFormInner>
    <FactureFormInner  bind:value={number_invoice}  str="Numéro de facture" ></FactureFormInner>
    <FactureFormInner  bind:value={begin_session}  str="Début de séssion" ></FactureFormInner>
    <FactureFormInner  bind:value={end_session}  str="Fin de session" ></FactureFormInner>
    <FactureFormInner  bind:value={emission_date}  str="Date d'émission" ></FactureFormInner>
    <!-- <FactureFormInner  bind:value={civility}  str="Civilité" ></FactureFormInner> -->
    <FactureFormInner  bind:value={number_days}  str="Nombre de jours" ></FactureFormInner>
    <FactureFormInner  bind:value={number_hours}  str="Nombre d'heures" ></FactureFormInner>
    <FactureFormInner  bind:value={realisation_rate}  str="Taux de réalisation" ></FactureFormInner>
    <FactureFormInner  bind:value={puht}  str="Prix Unité Hors Taxe" ></FactureFormInner>
    <FactureFormInner  bind:value={mht}  str="Montant Hors Taxe" ></FactureFormInner>
    <FactureFormInner  bind:value={mttc}  str="Montant Tout Compris" ></FactureFormInner>

    <button type="text" class="submit">submit</button>
</div>