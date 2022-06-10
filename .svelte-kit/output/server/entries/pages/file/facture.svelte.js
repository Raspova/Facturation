import { c as create_ssr_component, e as escape } from "../../../chunks/index-832d1400.js";
var facture_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";.Bloc-Recipient.svelte-k4tspi{width:45%;height:15vh;border-style:solid;border-width:1px;text-align:center;font-size:80%;font-weight:bold;margin-left:50%;margin-top:-6%}td.svelte-k4tspi,th.svelte-k4tspi{border:1px solid rgb(190, 190, 190);padding:10px}td.svelte-k4tspi{text-align:center}tr.svelte-k4tspi:nth-child(even){background-color:#eee}th[scope="col"].svelte-k4tspi{background-color:#507895;color:#111}th[scope="row"].svelte-k4tspi{background-color:#d7d9f2}main.svelte-k4tspi{background-color:#fff;width:600;height:900}table.svelte-k4tspi{border-collapse:collapse;border:2px solid rgb(200, 200, 200);letter-spacing:1px;font-family:sans-serif;font-size:.8rem;width:100%}.Table-Margin.svelte-k4tspi{margin-top:5%}',
  map: null
};
function load({ url }) {
  url.searchParams.get("") || "Undefiend";
  let formation = url.searchParams.get("formation") || "Undefiend";
  let number_invoice = url.searchParams.get("number_invoice") || "Undefiend";
  let emission_date = url.searchParams.get("emission_date") || "Undefiend";
  let ref_edof = url.searchParams.get("ref_edof") || "Undefiend";
  let civility = url.searchParams.get("civility") || "Undefiend";
  let lastname = url.searchParams.get("lastname") || "Undefiend";
  let firstname = url.searchParams.get("firstname") || "Undefiend";
  let begin_session = url.searchParams.get("begin_session") || "Undefiend";
  let end_session = url.searchParams.get("end_session") || "Undefiend";
  let number_hours = url.searchParams.get("number_hours") || "Undefiend";
  let number_days = url.searchParams.get("number_days") || "Undefiend";
  let puht = url.searchParams.get("puht") || "Undefiend";
  let mht = url.searchParams.get("mht") || "Undefiend";
  let mttc = url.searchParams.get("mttc") || "Undefiend";
  let realisation_rate = url.searchParams.get("realisation_rate") || "Undefiend";
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
      realisation_rate
    }
  };
}
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
  return `<main class="${"svelte-k4tspi"}"><img class="${""}" src="${"/logo.png"}" alt="${"Plateformation-Logo"}" width="${"200"}">
  <div class="${"Bloc-Recipient svelte-k4tspi"}"><p>${escape(company)}<br>
    ${escape(address)}<br>
    Siret CDC: ${escape(siret)}</p></div>
  <table class="${"Table-Margin svelte-k4tspi"}"><tr class="${"svelte-k4tspi"}"><th scope="${"col"}" class="${"svelte-k4tspi"}">N\xB0 de facture</th>
          <th scope="${"col"}" class="${"svelte-k4tspi"}">Date d&#39;\xE9mission</th>
          <th scope="${"col"}" class="${"svelte-k4tspi"}">R\xE9f\xE9rences</th></tr>
      <tr class="${"svelte-k4tspi"}"><td class="${"svelte-k4tspi"}">${escape(number_invoice)}</td>
          <td class="${"svelte-k4tspi"}">${escape(emission_date)}</td>
          <td class="${"svelte-k4tspi"}">N\xB0CLIENT</td></tr>
      <tr class="${"svelte-k4tspi"}"><th scope="${"row"}" class="${"svelte-k4tspi"}">N\xB0Convention</th>
          <td class="${"svelte-k4tspi"}"></td>
          <td class="${"svelte-k4tspi"}">R\xE9f EDOF: ${escape(ref_edof)}</td></tr></table>
  <table class="${"Table-Margin svelte-k4tspi"}"><tr class="${"svelte-k4tspi"}"><th scope="${"col"}" class="${"svelte-k4tspi"}">Pour Stagiaire:</th>
          <th scope="${"col"}" class="${"svelte-k4tspi"}">Session</th></tr>
      <tr class="${"svelte-k4tspi"}"><td class="${"svelte-k4tspi"}">${escape(civility)} ${escape(lastname)} ${escape(firstname)}</td>
          <td class="${"svelte-k4tspi"}">${escape(begin_session)} au ${escape(end_session)}<br>Certification ICDL</td></tr></table>
  <table class="${"Table-Margin svelte-k4tspi"}"><tr class="${"svelte-k4tspi"}"><th scope="${"col"}" class="${"svelte-k4tspi"}">D\xE9signation</th>
          <th scope="${"col"}" class="${"svelte-k4tspi"}">Nbre heures</th>
          <th scope="${"col"}" class="${"svelte-k4tspi"}">Nbre jours</th>
          <th scope="${"col"}" class="${"svelte-k4tspi"}">P.U. H.T</th>
          <th scope="${"col"}" class="${"svelte-k4tspi"}">Montant H.T.</th></tr>
      <tr class="${"svelte-k4tspi"}"><td class="${"svelte-k4tspi"}">ACTION DE FORMATION:<br>${escape(formation)}</td>
          <td class="${"svelte-k4tspi"}">${escape(number_hours)}</td>
          <td class="${"svelte-k4tspi"}">${escape(number_days)}</td>
          <td class="${"svelte-k4tspi"}">${escape(puht)}</td>
          <td class="${"svelte-k4tspi"}">${escape(mht)}</td></tr>
      <tr class="${"svelte-k4tspi"}"><td class="${"svelte-k4tspi"}">Taux de r\xE9alisation: ${escape(realisation_rate)}%</td></tr></table>
  <table class="${"Table-Margin svelte-k4tspi"}"><tr class="${"svelte-k4tspi"}"><th scope="${"col"}" class="${"svelte-k4tspi"}">Montant H.T.</th>
          <td class="${"svelte-k4tspi"}">${escape(mht)}</td></tr>
      <tr class="${"svelte-k4tspi"}"><th scope="${"row"}" class="${"svelte-k4tspi"}">Exon\xE9r\xE9 de T.V.A. selon art 261-4-4A du CGI</th>
          <td class="${"svelte-k4tspi"}">-</td></tr>
      <tr class="${"svelte-k4tspi"}"><th scope="${"row"}" class="${"svelte-k4tspi"}">Montant T.T.C.</th>
          <td class="${"svelte-k4tspi"}">${escape(mttc)}</td></tr></table>
  <table class="${"Table-Margin svelte-k4tspi"}"><tr class="${"svelte-k4tspi"}"><td class="${"svelte-k4tspi"}"><b>Conditions de r\xE8glement:</b> \xC0 r\xE9ception de la facture</td></tr></table></main>`;
});
export { Facture as default, load };
