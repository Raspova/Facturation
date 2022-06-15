export const manifest = {
	appDir: "_app",
	assets: new Set(["Admin3.jpg","Etudiant.jpg","Formateur.jpg","adB.png","elB.png","favicon.png","logo.png","logo2.svg","profB.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-5580b5a7.js","js":["start-5580b5a7.js","chunks/index-4f0fb457.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/8.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/7.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/2.js')
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
				load: () => import('./server/entries/endpoints/scraperMod.js')
			},
			{
				type: 'endpoint',
				id: "downloadPDF",
				pattern: /^\/downloadPDF\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/downloadPDF.js')
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
				id: "home",
				pattern: /^\/home\/?$/,
				names: [],
				types: [],
				path: "/home",
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
				type: 'endpoint',
				id: "api/auth/register",
				pattern: /^\/api\/auth\/register\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/auth/register.js')
			},
			{
				type: 'endpoint',
				id: "api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/auth/login.js')
			},
			{
				type: 'endpoint',
				id: "api/admin-[offset]",
				pattern: /^\/api\/admin-([^/]+?)\/?$/,
				names: ["offset"],
				types: [null],
				load: () => import('./server/entries/endpoints/api/admin-_offset_.js')
			},
			{
				type: 'page',
				id: "file/[id]",
				pattern: /^\/file\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => import('./server/entries/endpoints/file/_id_.js'),
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
