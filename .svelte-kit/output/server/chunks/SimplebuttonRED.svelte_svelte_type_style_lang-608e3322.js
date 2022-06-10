import { c as create_ssr_component, e as escape } from "./index-04ac6c45.js";
var SimplebuttonGREEN_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bn632-hover.svelte-1656vdp{font-weight:600;font-size:16px;color:#fff;cursor:pointer;text-align:center;width:100%;border:none;background-size:300% 100%;border-radius:50px;-o-transition:all .4s ease-in-out;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.bn632-hover.svelte-1656vdp:hover{background-position:100% 0;-o-transition:all .4s ease-in-out;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.bn632-hover.svelte-1656vdp:focus{outline:none}.bn632-hover.bn22.svelte-1656vdp{background-image:linear-gradient(\n    to right,\n    #0ba360,\n    #3cba92,\n    #30dd8a,\n    #2bb673\n  );box-shadow:0 4px 15px 0 rgba(23, 168, 108, 0.75)}",
  map: null
};
const SimplebuttonGREEN = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `<button class="${"bn632-hover bn22 svelte-1656vdp"}">${escape(value)}</button>`;
});
var SimplebuttonRED_svelte_svelte_type_style_lang = "";
export { SimplebuttonGREEN as S };
