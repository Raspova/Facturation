import { g as getContext, c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as createEventDispatcher, d as subscribe, i as is_promise, n as noop } from "../../../chunks/index-04ac6c45.js";
import Facture from "../facture.svelte.js";
import { S as SimplebuttonGREEN } from "../../../chunks/SimplebuttonRED.svelte_svelte_type_style_lang-608e3322.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var factureFormInner_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".input-container.svelte-1kn3rt.svelte-1kn3rt{height:50px;position:relative;width:100%;margin-top:30px}.input.svelte-1kn3rt.svelte-1kn3rt{background-color:#303245;border-radius:12px;border:0;box-sizing:border-box;color:#eee;font-size:18px;height:100%;outline:0;padding:4px 20px 0;width:100%}.cut.svelte-1kn3rt.svelte-1kn3rt{background-color:#15172b;border-radius:10px;height:20px;left:20px;position:absolute;top:-20px;transform:translateY(0);transition:transform 200ms;width:76px}.input.svelte-1kn3rt:focus~.cut.svelte-1kn3rt,.input.svelte-1kn3rt:not(:placeholder-shown)~.cut.svelte-1kn3rt{transform:translateY(8px)}.placeholder.svelte-1kn3rt.svelte-1kn3rt{color:#65657b;font-family:sans-serif;left:20px;line-height:14px;pointer-events:none;position:absolute;transform-origin:0 50%;transition:transform 200ms, color 200ms;top:20px}.input.svelte-1kn3rt:focus~.placeholder.svelte-1kn3rt,.input.svelte-1kn3rt:not(:placeholder-shown)~.placeholder.svelte-1kn3rt{transform:translateY(-30px) translateX(10px) scale(0.75)}.input.svelte-1kn3rt:not(:placeholder-shown)~.placeholder.svelte-1kn3rt{color:#808097}.input.svelte-1kn3rt:focus~.placeholder.svelte-1kn3rt{color:#dc2f55}",
  map: null
};
const FactureFormInner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { str } = $$props;
  let { value } = $$props;
  if ($$props.str === void 0 && $$bindings.str && str !== void 0)
    $$bindings.str(str);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$4);
  return `<div class="${"input-container svelte-1kn3rt"}"><input${add_attribute("id", str, 0)} class="${"input svelte-1kn3rt"}" type="${"text"}" placeholder="${" "}"${add_attribute("value", value, 0)}>
    <div class="${"cut svelte-1kn3rt"}"></div>
    <label${add_attribute("for", str, 0)} class="${"placeholder svelte-1kn3rt"}">${escape(str)}</label></div>`;
});
var factureForm_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".form.svelte-1l2plie{background-color:#15172b;border-radius:20px;box-sizing:border-box;height:100%;padding:30px;width:100%}.title.svelte-1l2plie{color:#eee;top:0;font-family:sans-serif;font-size:36px;font-weight:600;margin-top:30px}.subtitle.svelte-1l2plie{color:#eee;font-family:sans-serif;font-size:16px;font-weight:600;margin-top:10px}",
  map: null
};
const FactureForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { formation } = $$props;
  let { number_invoice } = $$props;
  let { emission_date } = $$props;
  let { ref_edof } = $$props;
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
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"form svelte-1l2plie"}"><div class="${"title svelte-1l2plie"}">N\xB0${escape(ref_edof)}</div>
    <div class="${"subtitle svelte-1l2plie"}">${escape(lastname)} ${escape(firstname)} !</div>
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, { str: "Formation", value: formation }, {
      value: ($$value) => {
        formation = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, {
      str: "Num\xE9ro de facture",
      value: number_invoice
    }, {
      value: ($$value) => {
        number_invoice = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, {
      str: "D\xE9but de s\xE9ssion",
      value: begin_session
    }, {
      value: ($$value) => {
        begin_session = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, {
      str: "Fin de session",
      value: end_session
    }, {
      value: ($$value) => {
        end_session = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, {
      str: "Date d'\xE9mission",
      value: emission_date
    }, {
      value: ($$value) => {
        emission_date = $$value;
        $$settled = false;
      }
    }, {})}
    
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, {
      str: "Nombre de jours",
      value: number_days
    }, {
      value: ($$value) => {
        number_days = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, {
      str: "Nombre d'heures",
      value: number_hours
    }, {
      value: ($$value) => {
        number_hours = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, {
      str: "Taux de r\xE9alisation",
      value: realisation_rate
    }, {
      value: ($$value) => {
        realisation_rate = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, { str: "Prix Unit\xE9 Hors Taxe", value: puht }, {
      value: ($$value) => {
        puht = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, { str: "Montant Hors Taxe", value: mht }, {
      value: ($$value) => {
        mht = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(FactureFormInner, "FactureFormInner").$$render($$result, { str: "Montant Tout Compris", value: mttc }, {
      value: ($$value) => {
        mttc = $$value;
        $$settled = false;
      }
    }, {})}

    </div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$2 = {
  code: ".bn632-hover.svelte-sh7p6h{font-size:16px;font-weight:600;color:#fff;cursor:pointer;text-align:center;border:none;background-size:300% 100%;border-radius:50px;width:100%;-o-transition:all .4s ease-in-out;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.bn632-hover.svelte-sh7p6h:hover{background-position:100% 0;-o-transition:all .4s ease-in-out;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.bn632-hover.svelte-sh7p6h:focus{outline:none}.bn632-hover.bn28.svelte-sh7p6h{background-image:linear-gradient(\n    to right,\n    #eb3941,\n    #f15e64,\n    #e14e53,\n    #e2373f\n  );box-shadow:0 5px 15px rgba(242, 97, 103, 0.4)}",
  map: null
};
const SimplebuttonRED = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$2);
  return `<button class="${"bn632-hover bn28 svelte-sh7p6h"}">${escape(value)}</button>`;
});
var HeadBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-197zr3n{width:100%;background-color:rgba(255, 255, 255, 0.827);position:absolute;top:0;left:0;display:grid;grid-template-columns:75% 15% 10%;column-gap:20px}#nav.svelte-197zr3n{display:grid;margin-top:10px;grid-template-columns:100%;row-gap:10%}",
  map: null
};
const HeadBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { grennText } = $$props;
  let { redText } = $$props;
  let { linkGreen = "" } = $$props;
  let { linkRed = "" } = $$props;
  if ($$props.grennText === void 0 && $$bindings.grennText && grennText !== void 0)
    $$bindings.grennText(grennText);
  if ($$props.redText === void 0 && $$bindings.redText && redText !== void 0)
    $$bindings.redText(redText);
  if ($$props.linkGreen === void 0 && $$bindings.linkGreen && linkGreen !== void 0)
    $$bindings.linkGreen(linkGreen);
  if ($$props.linkRed === void 0 && $$bindings.linkRed && linkRed !== void 0)
    $$bindings.linkRed(linkRed);
  $$result.css.add(css$1);
  return `<header class="${"svelte-197zr3n"}"><h1>Facturation</h1> 
    <nav><div id="${"nav"}" class="${"svelte-197zr3n"}"><div>${linkGreen != "" ? `<a${add_attribute("href", linkRed, 0)}>${validate_component(SimplebuttonGREEN, "SimplebuttonGreen").$$render($$result, { value: grennText }, {}, {})}</a>` : `${validate_component(SimplebuttonGREEN, "SimplebuttonGreen").$$render($$result, { value: grennText }, {}, {})}`}</div>
            <div>${linkRed != "" ? `<a${add_attribute("href", linkRed, 0)}>${validate_component(SimplebuttonRED, "SimplebuttonRed").$$render($$result, { value: redText }, {}, {})}</a>` : `${validate_component(SimplebuttonRED, "SimplebuttonRed").$$render($$result, { value: redText }, {}, {})}`}</div></div></nav></header>`;
});
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:10%;background:#ddd}main.svelte-fr9utl{display:grid;grid-template-columns:20% 80%}#form.svelte-fr9utl{border:2px;justify-self:center}#fac.svelte-fr9utl{background-color:#fff;margin-left:50px;background-size:120%;width:600;height:900}",
  map: null
};
function getDate() {
  let now = new Date();
  let month = "" + (now.getMonth() + 1);
  let day = "" + now.getDate();
  let year = now.getFullYear();
  if (month.length < 2)
    month = "0" + month;
  if (day.length < 2)
    day = "0" + day;
  return [year, month, day].join("-");
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const studentbyID = "https://ext.edusign.fr/v1/student/" + $page.params.id;
  let studentsBuff = loadInfo();
  let civility = "";
  let formation;
  let ref_edof;
  let lastname;
  let firstname;
  let emission_date = getDate();
  let number_invoice;
  let { number_hours } = $$props;
  let { begin_session } = $$props;
  let { end_session } = $$props;
  let { puht } = $$props;
  let { mht } = $$props;
  let { mttc } = $$props;
  let number_days = "";
  let realisation_rate;
  async function loadInfo() {
    let buff = await fetch(studentbyID, {
      headers: {
        "Authorization": "Bearer 1bd071cb742faf8823fbc0889cfbf23c4fbb3bf2aded73a75b4c167e3fd58b53",
        "Content-Type": "application/json"
      }
    });
    let ret = await buff.json();
    if (ret.status != "success")
      return;
    let res = ret.result;
    formation = res.TRAINING_NAME;
    ref_edof = res.FILE_NUMBER;
    firstname = res.FIRSTNAME;
    lastname = res.LASTNAME;
    return ret;
  }
  if ($$props.number_hours === void 0 && $$bindings.number_hours && number_hours !== void 0)
    $$bindings.number_hours(number_hours);
  if ($$props.begin_session === void 0 && $$bindings.begin_session && begin_session !== void 0)
    $$bindings.begin_session(begin_session);
  if ($$props.end_session === void 0 && $$bindings.end_session && end_session !== void 0)
    $$bindings.end_session(end_session);
  if ($$props.puht === void 0 && $$bindings.puht && puht !== void 0)
    $$bindings.puht(puht);
  if ($$props.mht === void 0 && $$bindings.mht && mht !== void 0)
    $$bindings.mht(mht);
  if ($$props.mttc === void 0 && $$bindings.mttc && mttc !== void 0)
    $$bindings.mttc(mttc);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main class="${"svelte-fr9utl"}">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
        LOADING
    `;
      }
      return function(data) {
        return ` 
        ${data.status != "success" ? `(\uFF1E\uFE4F\uFF1C) SOMETHING WHEN WRONG; (Bad id ?)` : `<div id="${"form"}" class="${"svelte-fr9utl"}">${validate_component(FactureForm, "FactureForm").$$render($$result, {
          number_invoice,
          begin_session,
          end_session,
          number_hours,
          number_days,
          puht,
          mht,
          ref_edof,
          mttc,
          realisation_rate,
          formation,
          lastname,
          firstname,
          emission_date,
          civility
        }, {
          number_invoice: ($$value) => {
            number_invoice = $$value;
            $$settled = false;
          },
          begin_session: ($$value) => {
            begin_session = $$value;
            $$settled = false;
          },
          end_session: ($$value) => {
            end_session = $$value;
            $$settled = false;
          },
          number_hours: ($$value) => {
            number_hours = $$value;
            $$settled = false;
          },
          number_days: ($$value) => {
            number_days = $$value;
            $$settled = false;
          },
          puht: ($$value) => {
            puht = $$value;
            $$settled = false;
          },
          mht: ($$value) => {
            mht = $$value;
            $$settled = false;
          },
          ref_edof: ($$value) => {
            ref_edof = $$value;
            $$settled = false;
          },
          mttc: ($$value) => {
            mttc = $$value;
            $$settled = false;
          },
          realisation_rate: ($$value) => {
            realisation_rate = $$value;
            $$settled = false;
          },
          formation: ($$value) => {
            formation = $$value;
            $$settled = false;
          },
          lastname: ($$value) => {
            lastname = $$value;
            $$settled = false;
          },
          firstname: ($$value) => {
            firstname = $$value;
            $$settled = false;
          },
          emission_date: ($$value) => {
            emission_date = $$value;
            $$settled = false;
          },
          civility: ($$value) => {
            civility = $$value;
            $$settled = false;
          }
        }, {})}</div>
        <div id="${"fac"}" class="${"svelte-fr9utl"}">${validate_component(Facture, "Facture").$$render($$result, {
          number_invoice,
          begin_session,
          end_session,
          number_hours,
          number_days,
          puht,
          mht,
          ref_edof,
          mttc,
          realisation_rate,
          formation,
          lastname,
          firstname,
          emission_date,
          civility
        }, {}, {})}</div>`}
    `;
      }(__value);
    }(studentsBuff)}</main>

${validate_component(HeadBar, "HeadBar").$$render($$result, {
      grennText: "Valid\xE9",
      redText: "Annul\xE9",
      linkRed: "/"
    }, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export { U5Bidu5D as default };
