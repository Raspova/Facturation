<script>
    import FactureFormInner from "./factureFormInner.svelte";

    export let ref_edof;
    export let lastname;
    export let firstname;
    export let civility;
    export let formation;
    export let certification;
    export let place_formation;
    export let begin_session;
    export let end_session;
    export let number_hours;
    export let date_pdf;
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
    <FactureFormInner  bind:value={lastname}  str="Nom" ></FactureFormInner>
    <FactureFormInner  bind:value={firstname}  str="Prénom" ></FactureFormInner>
    <FactureFormInner  bind:value={formation}  str="Formation" ></FactureFormInner>
    <FactureFormInner  bind:value={certification}  str="Certification" ></FactureFormInner>
    <FactureFormInner  bind:value={place_formation}  str="Lieu formation" ></FactureFormInner>
    <FactureFormInner  bind:value={begin_session}  str="Début de la formation" ></FactureFormInner>
    <FactureFormInner  bind:value={end_session}  str="Fin de la formation" ></FactureFormInner>
    <FactureFormInner  bind:value={number_hours}  str="Nombres d'heures" ></FactureFormInner>
    <FactureFormInner  bind:value={date_pdf}  str="Date du document" ></FactureFormInner>
</div>