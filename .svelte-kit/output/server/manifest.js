export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-b56378c2.js","js":["start-b56378c2.js","chunks/index-ec3b9e32.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "scraperMod",
				pattern: /^\/scraperMod\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/scraperMod.js')
			},
			{
				type: 'endpoint',
				id: "downloadPDF",
				pattern: /^\/downloadPDF\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/downloadPDF.js')
			},
			{
				type: 'page',
				id: "facture",
				pattern: /^\/facture\/?$/,
				names: [],
				types: [],
				path: "/facture",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "file",
				pattern: /^\/file\/?$/,
				names: [],
				types: [],
				path: "/file",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "scraper",
				pattern: /^\/scraper\/?$/,
				names: [],
				types: [],
				path: "/scraper",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "file/facture",
				pattern: /^\/file\/facture\/?$/,
				names: [],
				types: [],
				path: "/file/facture",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "file/[id]",
				pattern: /^\/file\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => import('./entries/endpoints/file/_id_.js'),
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "[404]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["404"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
