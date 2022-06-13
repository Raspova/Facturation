export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\[404].svelte"),
	() => import("..\\..\\src\\routes\\facture.svelte"),
	() => import("..\\..\\src\\routes\\file\\[id].svelte"),
	() => import("..\\..\\src\\routes\\file\\facture.svelte"),
	() => import("..\\..\\src\\routes\\file\\index.svelte"),
	() => import("..\\..\\src\\routes\\home.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\login.svelte"),
	() => import("..\\..\\src\\routes\\scraper.svelte")
];

export const dictionary = {
	"": [[0, 8], [1]],
	"facture": [[0, 3], [1]],
	"file": [[0, 6], [1]],
	"home": [[0, 7], [1]],
	"login": [[0, 9], [1]],
	"scraper": [[0, 10], [1]],
	"file/facture": [[0, 5], [1]],
	"file/[id]": [[0, 4], [1], 1],
	"[404]": [[0, 2], [1]]
};