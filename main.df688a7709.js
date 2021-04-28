(()=>{"use strict";var t,a={850:(t,a,e)=>{e.r(a)},307:(t,a,e)=>{e.r(a)},607:function(t,a,e){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0}),e(850),e(307);const n=i(e(755));n.default((function(){const t=`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=`;var a=["astronomy","travel","history","soccer","movies","anime"],e=0,i=[];function r(){n.default(".gif-buttons").children().remove(),a.forEach((function(a){var e=t+a+"&limit=1",i=n.default("<button>").text(a);i.val(a),function(t,a){n.default.ajax({url:t,method:"GET"}).then((function(t){a.css("background-image","url("+t.data[0].images.downsized_medium.url+")")}))}(e,i),n.default(".gif-buttons").append(i),n.default(".gif-buttons").scrollLeft()}))}null!==localStorage.getItem("newTopics")&&(i=JSON.parse(localStorage.getItem("newTopics"))),i.length&&i.forEach((function(t){a.unshift(t)})),r(),n.default(".add-gif__button").on("click",(function(){var e=n.default(".add-gif__input").val();if("string"==typeof e&&e.length>0){var l=t+e+"&limit=10";n.default.ajax({url:l,method:"GET"}).then((function(t){0===t.data.length||"string"!=typeof e||a.includes(e)||(i.push(e),localStorage.setItem("newTopics",JSON.stringify(i)),a.unshift(e),r())}))}n.default(".add-gif__input").val("")})),n.default(".add-gif__input").on("keypress",(function(t){13==t.which&&n.default(".add-gif__button").click()})),n.default(".gif-buttons").on("click","button",(function(a){var i=a.target.value,r=t+i+"&limit=10&offset="+e;e+=5,n.default.ajax({url:r,method:"GET"}).then((function(t){0!==t.data.length&&t.data.forEach((function(t){var a=n.default("<div>"),e=n.default("<span>");e.text("Rated: "+t.rating.toUpperCase());var i=t.images.fixed_height_downsampled.url,r=n.default("<img>").attr("src",i);r.attr({"data-stillGif":t.images.fixed_height_still.url,"data-animatedGif":r.attr("src"),"data-state":"animate"});var l=new Image;l.onload=function(){r.attr("src",i),a.append(r,e),n.default(".gif-images-area").prepend(a)},l.src=i}))}))})),n.default(".gif-images-area").on("click","img",(function(){"still"===n.default(this).attr("data-state")?(n.default(this).attr("src",n.default(this).attr("data-animatedGif")),n.default(this).attr("data-state","animate")):(n.default(this).attr("src",n.default(this).attr("data-stillGif")),n.default(this).attr("data-state","still"))}))}))}},e={};function i(t){var n=e[t];if(void 0!==n)return n.exports;var r=e[t]={exports:{}};return a[t].call(r.exports,r,r.exports,i),r.exports}i.m=a,t=[],i.O=(a,e,n,r)=>{if(!e){var l=1/0;for(u=0;u<t.length;u++){for(var[e,n,r]=t[u],o=!0,f=0;f<e.length;f++)(!1&r||l>=r)&&Object.keys(i.O).every((t=>i.O[t](e[f])))?e.splice(f--,1):(o=!1,r<l&&(l=r));o&&(t.splice(u--,1),a=n())}return a}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[e,n,r]},i.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={179:0};i.O.j=a=>0===t[a];var a=(a,e)=>{var n,r,[l,o,f]=e,u=0;for(n in o)i.o(o,n)&&(i.m[n]=o[n]);for(f&&f(i),a&&a(e);u<l.length;u++)r=l[u],i.o(t,r)&&t[r]&&t[r][0](),t[l[u]]=0;i.O()},e=self.webpackChunkgiphy_api=self.webpackChunkgiphy_api||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))})();var n=i.O(void 0,[755],(()=>i(607)));n=i.O(n)})();