(function(){"use strict";var n={4988:function(n,o,e){var t=e(9242),r=e(3396);function i(n,o,e,t,i,a){const s=(0,r.up)("pokemon-page");return(0,r.wg)(),(0,r.j4)(s)}var a=e(7139);const s={key:0},c={key:1},m=(0,r._)("h1",null,"¿Quién es este Pokemón?",-1),u={key:0};function p(n,o,e,t,i,p){const d=(0,r.up)("pokemon-picture"),l=(0,r.up)("pokemon-options");return i.pokemon?((0,r.wg)(),(0,r.iD)("div",c,[m,(0,r.Wm)(d,{id:i.pokemon.id,showPokemon:i.showPokemon},null,8,["id","showPokemon"]),(0,r.Wm)(l,{options:i.pokemonOptions,onSelection:p.checkAnswer},null,8,["options","onSelection"]),i.showAnswer?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("h2",null,(0,a.zw)(i.message),1),(0,r._)("button",{onClick:o[0]||(o[0]=(...n)=>p.newGame&&p.newGame(...n))},"Volver a jugar")])):(0,r.kq)("",!0)])):((0,r.wg)(),(0,r.iD)("h1",s,"Cargando juego..."))}const d={class:"pokemon-container"},l=["src"],h=["src"];function k(n,o,e,t,i,a){return(0,r.wg)(),(0,r.iD)("div",d,[e.showPokemon?((0,r.wg)(),(0,r.iD)("img",{key:1,src:a.imgSrc,alt:"pokemon",class:"fade-in"},null,8,h)):((0,r.wg)(),(0,r.iD)("img",{key:0,src:a.imgSrc,alt:"pokemon",class:"hidden-pokemon"},null,8,l))])}var f={props:{id:{type:Number,required:!0},showPokemon:{type:Boolean,required:!0,default:!1}},computed:{imgSrc(){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`}}},w=e(89);const g=(0,w.Z)(f,[["render",k],["__scopeId","data-v-644112c9"]]);var v=g;const y=n=>((0,r.dD)("data-v-054ca95d"),n=n(),(0,r.Cn)(),n),P=y((()=>(0,r._)("h3",null,"Opciones:",-1))),O={class:"options-container"},b=["onClick"];function A(n,o,e,t,i,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[P,(0,r._)("div",O,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.options,(o=>((0,r.wg)(),(0,r.iD)("li",{onClick:e=>n.$emit("selection",o.id),key:o.id},(0,a.zw)(o.name),9,b)))),128))])])],64)}var _={props:{options:{type:Array,required:!0}}};const D=(0,w.Z)(_,[["render",A],["__scopeId","data-v-054ca95d"]]);var j=D,C=e(5939);const $=C.Z.create({baseURL:"https://pokeapi.co/api/v2/pokemon"});var x=$;const S=()=>{const n=Array.from(Array(650));return n.map(((n,o)=>o+1))},Z=async()=>{const n=S().sort((()=>Math.random()-.5)),o=await q(n.splice(0,4));return o},q=async([n,o,e,t]=[])=>{const r=[x.get(`/${n}`),x.get(`/${o}`),x.get(`/${e}`),x.get(`/${t}`)],[i,a,s,c]=await Promise.all(r);return[{name:i.data.name,id:i.data.id},{name:a.data.name,id:a.data.id},{name:s.data.name,id:s.data.id},{name:c.data.name,id:c.data.id}]};var M=Z,G={name:"PokemonPage",components:{PokemonPicture:v,PokemonOptions:j},mounted(){this.mixPokemonArray()},data(){return{pokemon:null,pokemonOptions:[],showPokemon:!1,message:"",showAnswer:!1}},methods:{async mixPokemonArray(){this.pokemonOptions=await M();const n=Math.floor(4*Math.random());this.pokemon=this.pokemonOptions[n],console.log(this.pokemon)},checkAnswer(n){this.showPokemon=!0,this.showAnswer=!0,n===this.pokemon.id?this.message=`Correcto, ${this.pokemon.name}`:this.message=`Ooops, era ${this.pokemon.name}`},newGame(){this.showPokemon=!1,this.showAnswer=!1,this.pokemonOptions=[],this.pokemon=null,this.mixPokemonArray()}}};const I=(0,w.Z)(G,[["render",p]]);var z=I,H={name:"App",components:{PokemonPage:z}};const T=(0,w.Z)(H,[["render",i]]);var W=T;(0,t.ri)(W).mount("#app")}},o={};function e(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(o,t,r,i){if(!t){var a=1/0;for(u=0;u<n.length;u++){t=n[u][0],r=n[u][1],i=n[u][2];for(var s=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](t[c])}))?t.splice(c--,1):(s=!1,i<a&&(a=i));if(s){n.splice(u--,1);var m=r();void 0!==m&&(o=m)}}return o}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[t,r,i]}}(),function(){e.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(o,{a:o}),o}}(),function(){e.d=function(n,o){for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){var n={143:0};e.O.j=function(o){return 0===n[o]};var o=function(o,t){var r,i,a=t[0],s=t[1],c=t[2],m=0;if(a.some((function(o){return 0!==n[o]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(c)var u=c(e)}for(o&&o(t);m<a.length;m++)i=a[m],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(u)},t=self["webpackChunkpokemon_game"]=self["webpackChunkpokemon_game"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(4988)}));t=e.O(t)})();
//# sourceMappingURL=app.fad815bf.js.map