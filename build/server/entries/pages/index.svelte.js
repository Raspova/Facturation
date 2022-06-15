import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-832d1400.js";
var login_svelte_svelte_type_style_lang = "";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{width:100%;font-family:system-ui, "Gill Sans", sans-serif}main.svelte-1jjvygg.svelte-1jjvygg{display:flex;justify-content:center;align-items:center;padding-top:3rem;margin:auto}@media(min-width: 768px){.panel.active.svelte-1jjvygg.svelte-1jjvygg{flex:1.4}}@media(min-width: 1400px){main.svelte-1jjvygg.svelte-1jjvygg{width:1320px}main.svelte-1jjvygg .panel h2.svelte-1jjvygg{font-size:2.7rem}.panel.svelte-1jjvygg.svelte-1jjvygg{margin:0 3rem}h1.svelte-1jjvygg.svelte-1jjvygg{font-size:62px}}@media(min-width: 1201px) and (max-width: 1399px){main.svelte-1jjvygg.svelte-1jjvygg{width:1140px}.panel.svelte-1jjvygg.svelte-1jjvygg{margin:0 2rem}h1.svelte-1jjvygg.svelte-1jjvygg{font-size:54px}main.svelte-1jjvygg .panel h2.svelte-1jjvygg{font-size:2.7rem}}@media(min-width: 993px) and (max-width: 1200px){main.svelte-1jjvygg.svelte-1jjvygg{width:960px}.panel.svelte-1jjvygg.svelte-1jjvygg{margin:0 1.7rem}main.svelte-1jjvygg .panel h2.svelte-1jjvygg{font-size:2.5rem}h1.svelte-1jjvygg.svelte-1jjvygg{font-size:58px}}@media(min-width: 768px) and (max-width: 992px){main.svelte-1jjvygg.svelte-1jjvygg{width:720px}main.svelte-1jjvygg .panel h2.svelte-1jjvygg{font-size:2rem}.panel.svelte-1jjvygg.svelte-1jjvygg{margin:0 1.5rem}h1.svelte-1jjvygg.svelte-1jjvygg{font-size:46px}}@media(min-width: 579px) and (max-width: 768px){main.svelte-1jjvygg.svelte-1jjvygg{width:98%}.panel.svelte-1jjvygg.svelte-1jjvygg{margin:0 2%}h1.svelte-1jjvygg.svelte-1jjvygg{font-size:34px}}@media(max-width: 576px){main.svelte-1jjvygg.svelte-1jjvygg{width:98vw}.panel.svelte-1jjvygg.svelte-1jjvygg{margin:0 0.5rem}}@media(max-width: 600px){main.svelte-1jjvygg.svelte-1jjvygg{flex-direction:column;min-height:80vh;padding-top:120px}.panel.svelte-1jjvygg.svelte-1jjvygg{width:80%;margin:10px 0;height:40vh}}h1.svelte-1jjvygg.svelte-1jjvygg{padding-top:75px !important;width:100%;text-align:center;color:#222d3d;z-index:1}main.svelte-1jjvygg .panel h2.svelte-1jjvygg{font-size:3rem;font-weight:800;color:#fff;text-align:center}.selected.svelte-1jjvygg.svelte-1jjvygg{border:6px solid rgb(84, 105, 212) !important}h2.svelte-1jjvygg.svelte-1jjvygg{text-shadow:0px 4px 3px rgba(0, 0, 0, 0.3)}#div_id1.svelte-1jjvygg.svelte-1jjvygg{background-image:url("/Admin3.jpg");background-position:46% 8%}#div_id2.svelte-1jjvygg.svelte-1jjvygg{background-image:url("/Formateur.jpg");background-position:49% 24%}#div_id3.svelte-1jjvygg.svelte-1jjvygg{background-image:url("/Etudiant.jpg");background-position:46% 34%}.panel.svelte-1jjvygg.svelte-1jjvygg{height:55vh;background-repeat:no-repeat;background-size:cover;flex:1;position:relative;transition:flex 0.5s ease-in;-webkit-transition:all 500ms ease-in-out;cursor:pointer;border-radius:20px;display:flex;justify-content:center;align-items:center;box-shadow:4px 4px 40px rgba(0, 0, 0, 0.2)}.logo.svelte-1jjvygg.svelte-1jjvygg{position:absolute;margin-left:30px;margin-top:16px;z-index:3}html, body,div.svelte-1jjvygg.svelte-1jjvygg,h1.svelte-1jjvygg.svelte-1jjvygg,h2.svelte-1jjvygg.svelte-1jjvygg{margin:0;padding:0;border:0;vertical-align:baseline}',
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let panel1 = null;
  let panel2 = null;
  let panel3 = null;
  $$result.css.add(css);
  return `<div class="${"logo svelte-1jjvygg"}"><img src="${"logo2.svg"}" alt="${"Logo plateformation"}" height="${"50px"}" width="${"auto"}"></div>

<h1 class="${"svelte-1jjvygg"}">Espace connexion</h1>

<main class="${"svelte-1jjvygg"}"><div class="${["panel svelte-1jjvygg", ""].join(" ").trim()}" id="${"div_id1"}"${add_attribute("this", panel1, 0)}><h2 class="${"svelte-1jjvygg"}">Admin</h2></div>
  <div class="${["panel active svelte-1jjvygg", ""].join(" ").trim()}" id="${"div_id2"}"${add_attribute("this", panel2, 0)}><h2 class="${"svelte-1jjvygg"}">Enseignant</h2></div>
  <div class="${["panel svelte-1jjvygg", ""].join(" ").trim()}" id="${"div_id3"}"${add_attribute("this", panel3, 0)}><h2 class="${"svelte-1jjvygg"}">Etudiant</h2></div></main>


${``}

`;
});
export { Routes as default };
