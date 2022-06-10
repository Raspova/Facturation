import { c as create_ssr_component, e as escape } from "../../chunks/index-04ac6c45.js";
var facture_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";.Bloc-Recipient.svelte-rrz5p0{width:45%;height:15vh;border-style:solid;border-width:1px;text-align:center;font-size:80%;font-weight:bold;margin-left:50%;margin-top:-6%}td.svelte-rrz5p0,th.svelte-rrz5p0{border:1px solid rgb(190, 190, 190);padding:10px}td.svelte-rrz5p0{text-align:center}tr.svelte-rrz5p0:nth-child(even){background-color:#eee}th[scope="col"].svelte-rrz5p0{background-color:#507895;color:#fff}th[scope="row"].svelte-rrz5p0{background-color:#d7d9f2}table.svelte-rrz5p0{border-collapse:collapse;border:2px solid rgb(200, 200, 200);letter-spacing:1px;font-family:sans-serif;font-size:.8rem;width:100%}.Table-Margin.svelte-rrz5p0{margin-top:5%}',
  map: null
};
let company = "PLATEFORMATION";
let siret = "90211098000015";
let address = "48 RUE DU PROGRES 92700 COLOMBES";
const Facture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { formation } = $$props;
  let { number_invoice } = $$props;
  let { emission_date } = $$props;
  let { ref_edof } = $$props;
  let { civility } = $$props;
  let { lastname } = $$props;
  let { firstname } = $$props;
  let { begin_session } = $$props;
  let { end_session } = $$props;
  let { number_hours } = $$props;
  let { number_days } = $$props;
  let { puht } = $$props;
  let { mht } = $$props;
  let { mttc } = $$props;
  let { realisation_rate } = $$props;
  if ($$props.formation === void 0 && $$bindings.formation && formation !== void 0)
    $$bindings.formation(formation);
  if ($$props.number_invoice === void 0 && $$bindings.number_invoice && number_invoice !== void 0)
    $$bindings.number_invoice(number_invoice);
  if ($$props.emission_date === void 0 && $$bindings.emission_date && emission_date !== void 0)
    $$bindings.emission_date(emission_date);
  if ($$props.ref_edof === void 0 && $$bindings.ref_edof && ref_edof !== void 0)
    $$bindings.ref_edof(ref_edof);
  if ($$props.civility === void 0 && $$bindings.civility && civility !== void 0)
    $$bindings.civility(civility);
  if ($$props.lastname === void 0 && $$bindings.lastname && lastname !== void 0)
    $$bindings.lastname(lastname);
  if ($$props.firstname === void 0 && $$bindings.firstname && firstname !== void 0)
    $$bindings.firstname(firstname);
  if ($$props.begin_session === void 0 && $$bindings.begin_session && begin_session !== void 0)
    $$bindings.begin_session(begin_session);
  if ($$props.end_session === void 0 && $$bindings.end_session && end_session !== void 0)
    $$bindings.end_session(end_session);
  if ($$props.number_hours === void 0 && $$bindings.number_hours && number_hours !== void 0)
    $$bindings.number_hours(number_hours);
  if ($$props.number_days === void 0 && $$bindings.number_days && number_days !== void 0)
    $$bindings.number_days(number_days);
  if ($$props.puht === void 0 && $$bindings.puht && puht !== void 0)
    $$bindings.puht(puht);
  if ($$props.mht === void 0 && $$bindings.mht && mht !== void 0)
    $$bindings.mht(mht);
  if ($$props.mttc === void 0 && $$bindings.mttc && mttc !== void 0)
    $$bindings.mttc(mttc);
  if ($$props.realisation_rate === void 0 && $$bindings.realisation_rate && realisation_rate !== void 0)
    $$bindings.realisation_rate(realisation_rate);
  $$result.css.add(css);
  return `<main><img class="${""}" src="${"/logo.png"}" alt="${"Plateformation-Logo"}" width="${"200"}">
  <div class="${"Bloc-Recipient svelte-rrz5p0"}"><p>${escape(company)}<br>
    ${escape(address)}<br>
    Siret CDC: ${escape(siret)}</p></div>
  <table class="${"Table-Margin svelte-rrz5p0"}"><tr class="${"svelte-rrz5p0"}"><th scope="${"col"}" class="${"svelte-rrz5p0"}">N\xB0 de facture</th>
          <th scope="${"col"}" class="${"svelte-rrz5p0"}">Date d&#39;\xE9mission</th>
          <th scope="${"col"}" class="${"svelte-rrz5p0"}">R\xE9f\xE9rences</th></tr>
      <tr class="${"svelte-rrz5p0"}"><td class="${"svelte-rrz5p0"}">${escape(number_invoice)}</td>
          <td class="${"svelte-rrz5p0"}">${escape(emission_date)}</td>
          <td class="${"svelte-rrz5p0"}">N\xB0CLIENT</td></tr>
      <tr class="${"svelte-rrz5p0"}"><th scope="${"row"}" class="${"svelte-rrz5p0"}">N\xB0Convention</th>
          <td class="${"svelte-rrz5p0"}"></td>
          <td class="${"svelte-rrz5p0"}">R\xE9f EDOF: ${escape(ref_edof)}</td></tr></table>
  <table class="${"Table-Margin svelte-rrz5p0"}"><tr class="${"svelte-rrz5p0"}"><th scope="${"col"}" class="${"svelte-rrz5p0"}">Pour Stagiaire:</th>
          <th scope="${"col"}" class="${"svelte-rrz5p0"}">Session</th></tr>
      <tr class="${"svelte-rrz5p0"}"><td class="${"svelte-rrz5p0"}">${escape(civility)} ${escape(lastname)} ${escape(firstname)}</td>
          <td class="${"svelte-rrz5p0"}">${escape(begin_session)} au ${escape(end_session)}<br>Certification ICDL</td></tr></table>
  <table class="${"Table-Margin svelte-rrz5p0"}"><tr class="${"svelte-rrz5p0"}"><th scope="${"col"}" class="${"svelte-rrz5p0"}">D\xE9signation</th>
          <th scope="${"col"}" class="${"svelte-rrz5p0"}">Nbre heures</th>
          <th scope="${"col"}" class="${"svelte-rrz5p0"}">Nbre jours</th>
          <th scope="${"col"}" class="${"svelte-rrz5p0"}">P.U. H.T</th>
          <th scope="${"col"}" class="${"svelte-rrz5p0"}">Montant H.T.</th></tr>
      <tr class="${"svelte-rrz5p0"}"><td class="${"svelte-rrz5p0"}">ACTION DE FORMATION:<br>${escape(formation)}</td>
          <td class="${"svelte-rrz5p0"}">${escape(number_hours)}</td>
          <td class="${"svelte-rrz5p0"}">${escape(number_days)}</td>
          <td class="${"svelte-rrz5p0"}">${escape(puht)}</td>
          <td class="${"svelte-rrz5p0"}">${escape(mht)}</td></tr>
      <tr class="${"svelte-rrz5p0"}"><td class="${"svelte-rrz5p0"}">Taux de r\xE9alisation: ${escape(realisation_rate)}%</td></tr></table>
  <table class="${"Table-Margin svelte-rrz5p0"}"><tr class="${"svelte-rrz5p0"}"><th scope="${"col"}" class="${"svelte-rrz5p0"}">Montant H.T.</th>
          <td class="${"svelte-rrz5p0"}">${escape(mht)}</td></tr>
      <tr class="${"svelte-rrz5p0"}"><th scope="${"row"}" class="${"svelte-rrz5p0"}">Exon\xE9r\xE9 de T.V.A. selon art 261-4-4A du CGI</th>
          <td class="${"svelte-rrz5p0"}">-</td></tr>
      <tr class="${"svelte-rrz5p0"}"><th scope="${"row"}" class="${"svelte-rrz5p0"}">Montant T.T.C.</th>
          <td class="${"svelte-rrz5p0"}">${escape(mttc)}</td></tr></table>
  <table class="${"Table-Margin svelte-rrz5p0"}"><tr class="${"svelte-rrz5p0"}"><td class="${"svelte-rrz5p0"}"><b>Conditions de r\xE8glement:</b> \xC0 r\xE9ception de la facture</td></tr></table></main>`;
});
export { Facture as default };
