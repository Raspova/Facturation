import { c as create_ssr_component, a as add_attribute, i as is_promise, n as noop, d as each, v as validate_component } from "../../chunks/index-832d1400.js";
import { S as SimplebuttonGREEN } from "../../chunks/SimplebuttonRED.svelte_svelte_type_style_lang-24aab50a.js";
var butonCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");@media(hover: hover){#creditcard.svelte-16ileht.svelte-16ileht{transform:translateY(110px);transition:transform 0.1s ease-in-out}#money.svelte-16ileht.svelte-16ileht{transform:translateY(180px);transition:transform 0.1s ease-in-out}button.svelte-16ileht:hover #creditcard.svelte-16ileht{transform:translateY(0px);transition:transform 0.2s ease-in-out}button.svelte-16ileht:hover #money.svelte-16ileht{transform:translateY(0px);transition:transform 0.3s ease-in-out}}@keyframes svelte-16ileht-bounce{0%{transform:translateY(0)}50%{transform:translateY(-0.25rem)}100%{transform:translateY(0)}}.button.svelte-16ileht:hover .button__text span.svelte-16ileht{transform:translateY(-0.25rem);transition:transform .2s ease-in-out}.button.svelte-16ileht.svelte-16ileht{width:100%;border:none;outline:none;background-color:purple;padding:1rem 90px 1rem 2rem;position:relative;border-radius:8px;letter-spacing:0.7px;background-color:#5086bd;color:#A9FFF7;font-size:21px;font-family:"Lato", sans-serif;cursor:pointer;box-shadow:rgba(0, 9, 61, 0.2) 0px 4px 8px 0px}.button.svelte-16ileht.svelte-16ileht:active{transform:translateY(1px)}.button__svg.svelte-16ileht.svelte-16ileht{position:absolute;overflow:visible;bottom:6px;right:0.2rem;height:140%}',
  map: null
};
let wallet_colorsPrim = "#a4bdc1";
let wallet_colorsSeg = "#7b8f91";
const ButonCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const buttonInner = data.lastname + " " + data.firstname + "<br>" + data.email;
  const link = "/file/" + data.id;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", link, 0)}><button class="${"button svelte-16ileht"}"><span class="${"button__text svelte-16ileht"}">
      
      
      
        <!-- HTML_TAG_START -->${buttonInner}<!-- HTML_TAG_END -->
      <svg class="${"button__svg svelte-16ileht"}" viewBox="${"0 0 600 600"}"><defs><clipPath id="${"myClip"}"><rect x="${"0"}" y="${"0"}" width="${"100%"}" height="${"50%"}"></rect></clipPath></defs><g clip-path="${"url(#myClip)"}"><g id="${"money"}" class="${"svelte-16ileht"}"><path d="${"M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z"}" fill="${"#699e64"}" stroke="${"#323c44"}" stroke-miterlimit="${"10"}" stroke-width="${"14"}"></path><path d="${"M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z"}" fill="${"#699e64"}" stroke="${"#323c44"}" stroke-miterlimit="${"10"}" stroke-width="${"14"}"></path></g><g id="${"creditcard"}" class="${"svelte-16ileht"}"><path d="${"M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z"}" fill="${"#a76fe2"}" stroke="${"#323c44"}" stroke-miterlimit="${"10"}" stroke-width="${"14"}"></path><path d="${"M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z"}" fill="${"#ffdc67"}"></path><path d="${"M249.73,183.76h28.85v274.8H249.73Z"}" fill="${"#323c44"}"></path></g></g><g id="${"wallet"}"><path d="${"M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z"}"${add_attribute("fill", wallet_colorsPrim, 0)} stroke="${"#323c44"}" stroke-miterlimit="${"10"}" stroke-width="${"14"}"></path><path d="${"M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z"}"${add_attribute("fill", wallet_colorsPrim, 0)} stroke="${"#323c44"}" stroke-miterlimit="${"10"}" stroke-width="${"14"}"></path><path d="${"M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z"}"${add_attribute("fill", wallet_colorsPrim, 0)} stroke="${"#323c44"}" stroke-miterlimit="${"10"}" stroke-width="${"14"}"></path><path d="${"M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z"}"${add_attribute("fill", wallet_colorsSeg, 0)}></path><path d="${"M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z"}" fill="${"#323c44"}"></path></g></svg></span></button></a>`;
});
var home_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1opyav{color:#253031;border-radius:5%;margin-left:10%}body{margin:10%;min-height:100vh;background:#fff}header.svelte-1opyav{width:100%;background-color:rgba(255, 255, 255, 0.899);position:fixed;top:0;left:0;display:grid;grid-template-columns:75% 15% 10%;column-gap:20px}#nav.svelte-1opyav{display:grid;margin-top:10px}",
  map: null
};
async function load({ session }) {
  if (!session.authentificated) {
    return { status: 302, redirect: "/" };
  }
  return { status: 200 };
}
async function getStudents(offset) {
  let studentsBuff = await fetch("/api/admin-" + String(offset));
  let res = await studentsBuff.json();
  console.log(res);
  return res.results;
}
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset = 0;
  let students = getStudents(offset);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Facturation Center</title>`, ""}`, ""}




<main><div>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
            <h2>LOADING</h2>    
        `;
    }
    return function(stuInfo) {
      return `        
            ${each(stuInfo, (data) => {
        return `<p>${validate_component(ButonCard, "ButonCard").$$render($$result, { data }, {}, {})}</p>`;
      })}
        `;
    }(__value);
  }(students)}</div></main>

<header class="${"svelte-1opyav"}"><h1 class="${"svelte-1opyav"}">Facturation</h1> 
    <nav><div id="${"nav"}" class="${"svelte-1opyav"}">${validate_component(SimplebuttonGREEN, "SimplebuttonGreen").$$render($$result, { value: "Next" }, {}, {})}
            ${``}</div></nav></header>`;
});
export { Home as default, load };
