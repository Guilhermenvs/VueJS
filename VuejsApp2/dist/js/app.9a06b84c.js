(function(e){function t(t){for(var o,a,l=t[0],i=t[1],u=t[2],d=0,b=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==c[i]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"106b":function(e,t,n){},"4c21":function(e,t,n){"use strict";n("972e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={id:"app"},r=Object(o["createElementVNode"])("h1",null,"Projeto Vue",-1),a=Object(o["createElementVNode"])("hr",null,null,-1),l=Object(o["createTextVNode"])("Home"),i=Object(o["createTextVNode"])("   "),u=Object(o["createTextVNode"])("Desafio 1"),s=Object(o["createTextVNode"])("   "),d=Object(o["createTextVNode"])("Desafio 2"),b=Object(o["createTextVNode"])("   "),j=Object(o["createTextVNode"])("Desafio 3"),O=Object(o["createTextVNode"])("   "),m=Object(o["createTextVNode"])("Desafio 4"),p=Object(o["createTextVNode"])("   "),f=Object(o["createTextVNode"])("Desafio 5"),h=Object(o["createTextVNode"])("   "),v=Object(o["createTextVNode"])("Projeto 1"),V=Object(o["createElementVNode"])("hr",null,null,-1);function E(e,t,n,E,N,g){var k=Object(o["resolveComponent"])("router-link"),y=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[r,a,Object(o["createVNode"])(k,{to:"/"},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),i,Object(o["createVNode"])(k,{to:"/desafio1"},{default:Object(o["withCtx"])((function(){return[u]})),_:1}),s,Object(o["createVNode"])(k,{to:"/desafio2"},{default:Object(o["withCtx"])((function(){return[d]})),_:1}),b,Object(o["createVNode"])(k,{to:"/desafio3"},{default:Object(o["withCtx"])((function(){return[j]})),_:1}),O,Object(o["createVNode"])(k,{to:"/desafio4"},{default:Object(o["withCtx"])((function(){return[m]})),_:1}),p,Object(o["createVNode"])(k,{to:"/desafio5"},{default:Object(o["withCtx"])((function(){return[f]})),_:1}),h,Object(o["createVNode"])(k,{to:"/projeto1"},{default:Object(o["withCtx"])((function(){return[v]})),_:1}),V,Object(o["createVNode"])(y)])}var N={data:function(){return{}}},g=n("d959"),k=n.n(g);const y=k()(N,[["render",E]]);var B=y,S=n("6c02"),x={class:"home"},D=Object(o["createElementVNode"])("p",null,[Object(o["createTextVNode"])("Welcome to your new single-page application, built with "),Object(o["createElementVNode"])("a",{href:"https://vuejs.org",target:"_blank"},"Vue.js"),Object(o["createTextVNode"])(".")],-1);function w(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(e.msg),1),D])}const C={},L=k()(C,[["render",w]]);var _=L,T={id:"desafio"},I=["src"],M=Object(o["createElementVNode"])("br",null,null,-1),A=["value"];function P(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",T,[Object(o["createElementVNode"])("p",null,"Usando VueJS - "+Object(o["toDisplayString"])(r.nome)+" ("+Object(o["toDisplayString"])(r.idade)+")",1),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(3*r.idade)+" = "+Object(o["toDisplayString"])(a.idadeVezes3()),1),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(Math.random())+" / "+Object(o["toDisplayString"])(a.random()),1),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("img",{src:r.imagem,height:"200"},null,8,I)]),M,Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("input",{type:"text",value:r.nome},null,8,A)])])}var U={name:"desafio",data:function(){return{nome:"Guilherme Neves",idade:20,imagem:"http://files.cod3r.com.br/curso-vue/vue.jpg"}},methods:{idadeVezes3:function(){return 3*this.idade},random:function(){return Math.random()}}};const z=k()(U,[["render",P]]);var J=z,F={id:"desafio"};function R(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",F,[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return a.exibirAlerta&&a.exibirAlerta.apply(a,arguments)})},"Exibir Alerta")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("input",{type:"text",onKeyup:t[1]||(t[1]=function(e){return r.valor=e.target.value})},null,32),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(r.valor),1)]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("input",{type:"text",onKeydown:t[2]||(t[2]=Object(o["withKeys"])((function(){return a.alterarValor&&a.alterarValor.apply(a,arguments)}),["enter"]))},null,32),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(r.valor),1)])])}var q={name:"desafio",data:function(){return{valor:""}},methods:{exibirAlerta:function(){alert("Estou alertando agora!")},alterarValor:function(e){this.valor=e.target.value}}};const G=k()(q,[["render",R]]);var H=G,K={id:"desafio"};function $(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",K,[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("p",null,"Valor atual: "+Object(o["toDisplayString"])(r.valor),1),Object(o["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return r.valor+=5})},"Somar 5"),Object(o["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(e){return r.valor+=1})},"Somar 1"),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(a.resultado),1)])])}var W={name:"desafio",data:function(){return{valor:0}},computed:{resultado:function(){return 37==this.valor?"Valor Igual":"Valor Diferente"}},watch:{resultado:function(){var e=this;setTimeout((function(){e.valor=0}),5e3)}}};const Q=k()(W,[["render",$]]);var X=Q,Y=function(e){return Object(o["pushScopeId"])("data-v-4cb67ee6"),e=e(),Object(o["popScopeId"])(),e},Z={id:"desafio"},ee=Y((function(){return Object(o["createElementVNode"])("h2",null,"#01",-1)})),te=Y((function(){return Object(o["createElementVNode"])("h2",null,"#02",-1)})),ne=Y((function(){return Object(o["createElementVNode"])("h2",null,"#03",-1)})),oe=Y((function(){return Object(o["createElementVNode"])("h2",null,"#04",-1)})),ce=Y((function(){return Object(o["createElementVNode"])("h2",null,"#05",-1)})),re=Y((function(){return Object(o["createElementVNode"])("h2",null,"#06",-1)})),ae={class:"barra-progresso"};function le(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Z,[ee,Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return a.iniciarEfeito&&a.iniciarEfeito.apply(a,arguments)})},"Iniciar Efeito"),Object(o["createElementVNode"])("div",{id:"efeito",class:Object(o["normalizeClass"])(r.classe1)},null,2)]),te,Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])([{perigo:r.perigo},"quadrado"])},"Estou sem classe CSS :(",2),ne,Object(o["createElementVNode"])("div",null,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.classe3=e})},null,512),[[o["vModelText"],r.classe3]]),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(r.classe3)},null,2)]),oe,Object(o["createElementVNode"])("div",null,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.classe4=e})},null,512),[[o["vModelText"],r.classe4]]),Object(o["createElementVNode"])("input",{type:"text",onInput:t[3]||(t[3]=function(){return a.setPerigo&&a.setPerigo.apply(a,arguments)})},null,32),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])([{perigo:r.perigo},r.classe4])},null,2)]),ce,Object(o["createElementVNode"])("div",null,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.cor5=e})},null,512),[[o["vModelText"],r.cor5]]),Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])([r.estilo5,{backgroundColor:r.cor5}])},null,4)]),re,Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{onClick:t[5]||(t[5]=function(){return a.iniciarProgresso&&a.iniciarProgresso.apply(a,arguments)})},"Iniciar"),Object(o["createElementVNode"])("div",ae,[Object(o["createElementVNode"])("div",{class:"progresso",style:Object(o["normalizeStyle"])({width:r.width})},null,4)])])])}var ie={name:"desafio",data:function(){return{classe1:"destaque",perigo:!0,classe3:"",classe4:"",cor5:"",estilo5:{width:"100px",height:"100px"},width:"0"}},methods:{iniciarEfeito:function(){var e=this;setInterval((function(){e.classe1="destaque"==e.classe1?"encolher":"destaque"}),1e3)},iniciarProgresso:function(){var e=this,t=0,n=setInterval((function(){t+=5,e.width="".concat(t,"%"),100==t&&clearInterval(n)}),500)},setPerigo:function(e){"true"==e.target.value?this.perigo=!0:"false"==e.target.value&&(this.perigo=!1)}}};n("a20c");const ue=k()(ie,[["render",le],["__scopeId","data-v-4cb67ee6"]]);var se=ue,de={id:"desafio"},be=Object(o["createElementVNode"])("h2",null,"#01",-1),je={key:0},Oe={key:1},me=Object(o["createElementVNode"])("h2",null,"#02",-1),pe=Object(o["createElementVNode"])("h2",null,"#03",-1),fe=Object(o["createElementVNode"])("h2",null,"#04",-1),he=Object(o["createTextVNode"])(" Notas: ");function ve(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",de,[be,Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return r.expressao=!r.expressao})},"Alternar"),r.expressao?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",je,"Você quer me ver ...")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",Oe,"...ou eu")),Object(o["withDirectives"])(Object(o["createElementVNode"])("p",null,"Você quer me ver ...",512),[[o["vShow"],r.expressao]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("p",null,"...ou eu",512),[[o["vShow"],!r.expressao]])]),me,Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.nomes,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.id},Object(o["toDisplayString"])(e)+" - "+Object(o["toDisplayString"])(t),1)})),128))]),pe,Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.livro,(function(e,t,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.id},Object(o["toDisplayString"])(t)+": "+Object(o["toDisplayString"])(e)+" - "+Object(o["toDisplayString"])(n+1),1)})),128))]),fe,Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.aluno,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.id},[Array.isArray(e)?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:1},[he,Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.id},Object(o["toDisplayString"])(e),1)})),128))])],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e),1)],64))])})),128))])])}var Ve={name:"desafio",data:function(){return{expressao:!0,nomes:["Ana","Rafa","Lucas","Gui"],livro:{titulo:"O Senhor dos Anéis",autor:"J.R.R. Tolkiens",volume:"3"},aluno:{id:10,nome:"Maria",notas:[7.67,8.33,6.98,9.21]}}}};const Ee=k()(Ve,[["render",ve]]);var Ne=Ee,ge=function(e){return Object(o["pushScopeId"])("data-v-1241580f"),e=e(),Object(o["popScopeId"])(),e},ke={id:"app"},ye={class:"panel scores"},Be={class:"score"},Se=ge((function(){return Object(o["createElementVNode"])("h1",null,"Jogador",-1)})),xe={class:"life-bar"},De={class:"score"},we=ge((function(){return Object(o["createElementVNode"])("h1",null,"Monstro",-1)})),Ce={class:"life-bar"},Le={key:0,class:"panel result"},_e={key:0,class:"win"},Te={key:1,class:"lose"},Ie={class:"panel buttons"},Me={key:1,class:"panel logs"};function Ae(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ke,[Object(o["createElementVNode"])("div",ye,[Object(o["createElementVNode"])("div",Be,[Se,Object(o["createElementVNode"])("div",xe,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["life",{danger:r.playerLife<20}]),style:Object(o["normalizeStyle"])({width:r.playerLife+"%"})},null,6)]),Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(r.playerLife)+"%",1)]),Object(o["createElementVNode"])("div",De,[we,Object(o["createElementVNode"])("div",Ce,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["life",{danger:r.monsterLife<20}]),style:Object(o["normalizeStyle"])({width:r.monsterLife+"%"})},null,6)]),Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(r.monsterLife)+"%",1)])]),a.hasResult?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Le,[0==r.monsterLife?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_e,"Você ganhou!!! :)")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Te,"Você perdeu! :("))])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",Ie,[r.running?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[Object(o["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return a.attack(!1)}),class:"btn attack"}," Ataque "),Object(o["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(e){return a.attack(!0)}),class:"btn especial-attack"}," Ataque Especial "),Object(o["createElementVNode"])("button",{onClick:t[2]||(t[2]=function(){return a.healAndHurt&&a.healAndHurt.apply(a,arguments)}),class:"btn heal"}," Curar "),Object(o["createElementVNode"])("button",{onClick:t[3]||(t[3]=function(e){return r.running=!1}),class:"btn give-up"}," Desistir ")],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:1,onClick:t[4]||(t[4]=function(){return a.startGame&&a.startGame.apply(a,arguments)}),class:"btn new-game"}," Iniciar Jogo "))]),r.logs.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Me,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.logs,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{class:Object(o["normalizeClass"])([e.cls,"log"])},Object(o["toDisplayString"])(e.text),3)})),256))])])):Object(o["createCommentVNode"])("",!0)])}n("99af");var Pe={name:"projeto1",data:function(){return{running:!1,playerLife:100,monsterLife:100,logs:[]}},computed:{hasResult:function(){return 0==this.playerLife||0==this.monsterLife}},methods:{startGame:function(){this.running=!0,this.playerLife=100,this.monsterLife=100,this.logs=[]},attack:function(e){this.hurt("monsterLife",5,10,e,"Jogador","Monstro","player"),this.monsterLife>0&&this.hurt("playerLife",7,12,!1,"Monstro","Jogador","monster")},hurt:function(e,t,n,o,c,r,a){var l=o?5:0,i=this.getRandom(t+l,n+l);this[e]=Math.max(this[e]-i,0),this.registerLog("".concat(c," atingiu ").concat(r," com ").concat(i,"."),a)},healAndHurt:function(){this.heal(10,15),this.hurt("playerLife",7,12,!1,"Monstro","Jogador","monster")},heal:function(e,t){var n=this.getRandom(e,t);this.playerLife=Math.min(this.playerLife+n,100),this.registerLog("Jogador ganhou for de ".concat(n,"."),"player")},getRandom:function(e,t){var n=Math.random()*(t-e)+e;return Math.round(n)},registerLog:function(e,t){this.logs.unshift({text:e,cls:t})}},watch:{hasResult:function(e){e&&(this.running=!1)}}};n("ae83");const Ue=k()(Pe,[["render",Ae],["__scopeId","data-v-1241580f"]]);var ze=Ue,Je={id:"myusuario"};function Fe(e,t,n,c,r,a){var l=Object(o["resolveComponent"])("usuario-lista"),i=Object(o["resolveComponent"])("usuario-detalhe");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Je,[Object(o["createVNode"])(l,{usuarios:r.usuarios},null,8,["usuarios"]),Object(o["createVNode"])(i)])}var Re=function(e){return Object(o["pushScopeId"])("data-v-11a34ee4"),e=e(),Object(o["popScopeId"])(),e},qe={class:"usuario-lista"},Ge=Re((function(){return Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,"#ID"),Object(o["createElementVNode"])("th",null,"Nome")])],-1)})),He=["onClick"];function Ke(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",qe,[Object(o["createElementVNode"])("table",null,[Ge,Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.usuarios,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:e.id,onClick:function(t){return a.setUsuarioSelecionado(e)}},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.id),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.nome),1)],8,He)})),128))])])])}var $e=new o({methods:{setUsuarioSeleciondo:function(e){this.$emit("usuarioSelecionado",e)},onUsuarioSelecionado:function(e){this.$on("usuarioSelecionado",e)}}}),We={props:{usuarios:Array},methods:{setUsuarioSelecionado:function(e){$e.setUsuarioSeleciondo(e),this.usuarios.pop()}}};n("f7cf");const Qe=k()(We,[["render",Ke],["__scopeId","data-v-11a34ee4"]]);var Xe=Qe,Ye={class:"usuario-detalhe"},Ze={key:0},et={key:1};function tt(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Ye,[r.usuario?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",et,[Object(o["createElementVNode"])("h2",null,"ID: "+Object(o["toDisplayString"])(r.usuario.id),1),Object(o["createElementVNode"])("h2",null,"Nome: "+Object(o["toDisplayString"])(r.usuario.nome),1),Object(o["createElementVNode"])("h2",null,"Idade: "+Object(o["toDisplayString"])(r.usuario.idade),1)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("h2",Ze,"Usuário não selecionado!"))])}var nt={data:function(){return{usuario:null}},created:function(){var e=this;$e.onUsuarioSelecionado((function(t){e.usuario=t}))}};n("d3d9");const ot=k()(nt,[["render",tt]]);var ct=ot,rt={name:"myusuario",components:{UsuarioLista:Xe,UsuarioDetalhe:ct},data:function(){return{usuarios:[{id:1,nome:"Ana",idade:31},{id:2,nome:"Carlos",idade:22},{id:3,nome:"Daniel",idade:40},{id:4,nome:"Ema",idade:17},{id:5,nome:"Lia",idade:28}]}}};n("4c21");const at=k()(rt,[["render",Fe]]);var lt=at,it=[{path:"/",name:"Home",component:_},{path:"/desafio1",name:"Desafio_1",component:J},{path:"/desafio2",name:"Desafio_2",component:H},{path:"/desafio3",name:"Desafio_3",component:X},{path:"/desafio4",name:"Desafio_4",component:se},{path:"/desafio5",name:"Desafio_5",component:Ne},{path:"/projeto1",name:"Projeto_1",component:ze},{path:"/MyUsuario",name:"MyUsuario",component:lt}],ut=Object(S["a"])({history:Object(S["b"])("/"),routes:it}),st=ut;Object(o["createApp"])(B).use(st).mount("#app")},"6cc9":function(e,t,n){},"972e":function(e,t,n){},a20c:function(e,t,n){"use strict";n("106b")},ae83:function(e,t,n){"use strict";n("c6de")},c6de:function(e,t,n){},c7a0:function(e,t,n){},d3d9:function(e,t,n){"use strict";n("c7a0")},f7cf:function(e,t,n){"use strict";n("6cc9")}});
//# sourceMappingURL=app.9a06b84c.js.map