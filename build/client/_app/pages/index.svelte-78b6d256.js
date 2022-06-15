import{S as ae,i as le,s as se,e as _,t as M,k as O,c as g,a as j,h as T,d as p,m as B,b as a,g as N,J as s,N as R,O as H,n as J,$ as ie,T as oe,x as re,y as pe,z as ce,r as q,p as G,C as ue,l as te,M as de,a0 as V,q as me,w as fe,o as ve,P as U}from"../chunks/index-4f0fb457.js";import{c as $}from"../chunks/singletons-d1fb5791.js";$.disable_scroll_handling;const he=$.goto;$.invalidate;$.prefetch;$.prefetch_routes;$.before_navigate;$.after_navigate;function _e(r){let l,i,c,d,e,t,m,h,o,I,z,A,b,f,u,L,y,D;return{c(){l=_("div"),i=_("h2"),c=M("Connectez-vous \xE0 votre compte"),d=O(),e=_("div"),t=_("label"),m=M("Email"),h=O(),o=_("input"),I=O(),z=_("label"),A=M("Mot de passe"),b=O(),f=_("input"),u=O(),L=_("input"),this.h()},l(w){l=g(w,"DIV",{class:!0});var x=j(l);i=g(x,"H2",{class:!0});var K=j(i);c=T(K,"Connectez-vous \xE0 votre compte"),K.forEach(p),d=B(x),e=g(x,"DIV",{class:!0});var k=j(e);t=g(k,"LABEL",{for:!0,class:!0});var C=j(t);m=T(C,"Email"),C.forEach(p),h=B(k),o=g(k,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),I=B(k),z=g(k,"LABEL",{for:!0,class:!0});var P=j(z);A=T(P,"Mot de passe"),P.forEach(p),b=B(k),f=g(k,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),u=B(k),L=g(k,"INPUT",{type:!0,name:!0,class:!0}),k.forEach(p),x.forEach(p),this.h()},h(){a(i,"class","svelte-km9cz6"),a(t,"for","email"),a(t,"class","svelte-km9cz6"),a(o,"type","text"),a(o,"name","email"),a(o,"placeholder","Email"),a(o,"class","svelte-km9cz6"),a(z,"for","password"),a(z,"class","svelte-km9cz6"),a(f,"type","password"),a(f,"name","password"),a(f,"placeholder","Mot de passe"),a(f,"class","svelte-km9cz6"),a(L,"type","submit"),a(L,"name","submit"),L.value="Se connecter",a(L,"class","svelte-km9cz6"),a(e,"class","form svelte-km9cz6"),a(l,"class","container-form svelte-km9cz6")},m(w,x){N(w,l,x),s(l,i),s(i,c),s(l,d),s(l,e),s(e,t),s(t,m),s(e,h),s(e,o),R(o,r[0]),s(e,I),s(e,z),s(z,A),s(e,b),s(e,f),R(f,r[1]),s(e,u),s(e,L),y||(D=[H(o,"input",r[3]),H(f,"input",r[4]),H(L,"click",r[2])],y=!0)},p(w,[x]){x&1&&o.value!==w[0]&&R(o,w[0]),x&2&&f.value!==w[1]&&R(f,w[1])},i:J,o:J,d(w){w&&p(l),y=!1,ie(D)}}}function ge(r,l,i){const c=oe();let d,e;async function t(){try{let o=await fetch("/api/auth/login",{method:"POST",body:JSON.stringify({email:d,password:e}),headers:{"Content-Type":"application/json"}});console.log("res =>",o),o.ok?c("OK"):c("KO")}catch{console.log("ERRROR"),c("KO")}}function m(){d=this.value,i(0,d)}function h(){e=this.value,i(1,e)}return[d,e,t,m,h]}class be extends ae{constructor(l){super(),le(this,l,ge,_e,se,{})}}function ne(r){let l,i,c,d,e;return l=new be({}),l.$on("OK",r[8]),l.$on("KO",r[9]),{c(){re(l.$$.fragment),i=O(),c=_("style"),d=M(`.panel {
      height: 100px !important;
      box-shadow: none !important;
      border: 6px solid !important;
      border-color: #ffffff !important;
    }
    main {
      height: auto !important;
    }
    .panel h2 {
      font-size: 24px !important;
    }
    #div_id3 {
      background-image: url("elB.png") !important;
    }
    #div_id2 {
      background-image: url("profB.png") !important;
    }
    #div_id1 {
      background-image: url("adB.png") !important;
    }
    @media (max-width: 576px) {
      .panel {
        height: 50px !important;
      }
    }

    @media (max-width: 700px) {
      main {
        min-height: 20vh !important;
        padding-top: 20px !important;
      }
      .panel {
        min-height: 80px !important;
      }
    }

    @media (min-width: 768px) {
      .panel.active {
        flex: 1 !important;
      }
      .panel.selected {
        flex: 1.4 !important;
      }
    }`)},l(t){pe(l.$$.fragment,t),i=B(t),c=g(t,"STYLE",{});var m=j(c);d=T(m,`.panel {
      height: 100px !important;
      box-shadow: none !important;
      border: 6px solid !important;
      border-color: #ffffff !important;
    }
    main {
      height: auto !important;
    }
    .panel h2 {
      font-size: 24px !important;
    }
    #div_id3 {
      background-image: url("elB.png") !important;
    }
    #div_id2 {
      background-image: url("profB.png") !important;
    }
    #div_id1 {
      background-image: url("adB.png") !important;
    }
    @media (max-width: 576px) {
      .panel {
        height: 50px !important;
      }
    }

    @media (max-width: 700px) {
      main {
        min-height: 20vh !important;
        padding-top: 20px !important;
      }
      .panel {
        min-height: 80px !important;
      }
    }

    @media (min-width: 768px) {
      .panel.active {
        flex: 1 !important;
      }
      .panel.selected {
        flex: 1.4 !important;
      }
    }`),m.forEach(p)},m(t,m){ce(l,t,m),N(t,i,m),N(t,c,m),s(c,d),e=!0},p:J,i(t){e||(q(l.$$.fragment,t),e=!0)},o(t){G(l.$$.fragment,t),e=!1},d(t){ue(l,t),t&&p(i),t&&p(c)}}}function Ee(r){let l,i,c,d,e,t,m,h,o,I,z,A,b,f,u,L,y,D,w,x,K,k,C,P,v=r[3]&&ne(r);return{c(){l=_("div"),i=_("img"),d=O(),e=_("h1"),t=M("Espace connexion"),m=O(),h=_("main"),o=_("div"),I=_("h2"),z=M("Admin"),A=O(),b=_("div"),f=_("h2"),u=M("Enseignant"),L=O(),y=_("div"),D=_("h2"),w=M("Etudiant"),x=O(),v&&v.c(),K=te(),this.h()},l(n){l=g(n,"DIV",{class:!0});var E=j(l);i=g(E,"IMG",{src:!0,alt:!0,height:!0,width:!0}),E.forEach(p),d=B(n),e=g(n,"H1",{class:!0});var Y=j(e);t=T(Y,"Espace connexion"),Y.forEach(p),m=B(n),h=g(n,"MAIN",{class:!0});var S=j(h);o=g(S,"DIV",{class:!0,id:!0});var F=j(o);I=g(F,"H2",{class:!0});var Q=j(I);z=T(Q,"Admin"),Q.forEach(p),F.forEach(p),A=B(S),b=g(S,"DIV",{class:!0,id:!0});var W=j(b);f=g(W,"H2",{class:!0});var X=j(f);u=T(X,"Enseignant"),X.forEach(p),W.forEach(p),L=B(S),y=g(S,"DIV",{class:!0,id:!0});var Z=j(y);D=g(Z,"H2",{class:!0});var ee=j(D);w=T(ee,"Etudiant"),ee.forEach(p),Z.forEach(p),S.forEach(p),x=B(n),v&&v.l(n),K=te(),this.h()},h(){de(i.src,c="logo2.svg")||a(i,"src",c),a(i,"alt","Logo plateformation"),a(i,"height","50px"),a(i,"width","auto"),a(l,"class","logo svelte-1jjvygg"),a(e,"class","svelte-1jjvygg"),a(I,"class","svelte-1jjvygg"),a(o,"class","panel svelte-1jjvygg"),a(o,"id","div_id1"),V(o,"selected",r[3]==="admin"),a(f,"class","svelte-1jjvygg"),a(b,"class","panel active svelte-1jjvygg"),a(b,"id","div_id2"),V(b,"selected",r[3]==="prof"),a(D,"class","svelte-1jjvygg"),a(y,"class","panel svelte-1jjvygg"),a(y,"id","div_id3"),V(y,"selected",r[3]==="student"),a(h,"class","svelte-1jjvygg")},m(n,E){N(n,l,E),s(l,i),N(n,d,E),N(n,e,E),s(e,t),N(n,m,E),N(n,h,E),s(h,o),s(o,I),s(I,z),r[5](o),s(h,A),s(h,b),s(b,f),s(f,u),r[6](b),s(h,L),s(h,y),s(y,D),s(D,w),r[7](y),N(n,x,E),v&&v.m(n,E),N(n,K,E),k=!0,C||(P=[H(o,"click",r[4]("admin")),H(b,"click",r[4]("prof")),H(y,"click",r[4]("student"))],C=!0)},p(n,[E]){E&8&&V(o,"selected",n[3]==="admin"),E&8&&V(b,"selected",n[3]==="prof"),E&8&&V(y,"selected",n[3]==="student"),n[3]?v?(v.p(n,E),E&8&&q(v,1)):(v=ne(n),v.c(),q(v,1),v.m(K.parentNode,K)):v&&(ve(),G(v,1,1,()=>{v=null}),me())},i(n){k||(q(v),k=!0)},o(n){G(v),k=!1},d(n){n&&p(l),n&&p(d),n&&p(e),n&&p(m),n&&p(h),r[5](null),r[6](null),r[7](null),n&&p(x),v&&v.d(n),n&&p(K),C=!1,ie(P)}}}function ye(r,l,i){let c,d=null,e=null,t=null,m=null;fe(async()=>{c=[d,e,t],c&&c.forEach(u=>{u.addEventListener("mouseover",()=>{o(),u.classList.add("active")})})});const h=u=>()=>{i(3,m=u)},o=()=>{c.forEach(u=>{u.classList.remove("active")})};function I(u){U[u?"unshift":"push"](()=>{d=u,i(0,d)})}function z(u){U[u?"unshift":"push"](()=>{e=u,i(1,e)})}function A(u){U[u?"unshift":"push"](()=>{t=u,i(2,t)})}const b=()=>{he("/home")},f=()=>{alert("Nom d'utilistaeur ou mot de passe incorrecte")};return c=null,[d,e,t,m,h,I,z,A,b,f]}class we extends ae{constructor(l){super(),le(this,l,ye,Ee,se,{})}}export{we as default};
