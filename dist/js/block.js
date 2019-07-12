!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=0)}([function(e,t,a){a(1),e.exports=a(3)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(2),lodash.times,wp.blocks.createBlock;var n=wp.components,r=(n.PanelBody,n.RangeControl,wp.editor),l=r.InnerBlocks,i=(r.InspectorControls,wp.element.Fragment,wp.i18n.__,["jonasm/slide"]),c=[["jonasm/slide"],["jonasm/slide"]],o=function(e){var t=e.attributes,a=(e.setAttributes,t.slides);return React.createElement("div",{className:"jonasm-slider__wrapper"},React.createElement("div",{className:"jonasm-slider has-".concat(a,"-slides")},React.createElement(l,{allowedBlocks:i,template:c,templatelock:!0})))},m=wp.editor.InnerBlocks,s=function(e){return React.createElement("div",{className:"slider"},React.createElement(m.Content,null))},u=wp.i18n.__;(0,wp.blocks.registerBlockType)("jonasm/slider",{title:u("Slider"),icon:"image-flip-horizontal",category:"layout",supports:{anchor:!0,align:!0},keywords:[u("slider"),u("slideshow")],attributes:{slides:{type:"number"}},edit:o,save:s});wp.blocks.registerBlockType;var d=wp.compose.withState,g=wp.components,p=g.ColorPalette,_=g.IconButton,f=(g.Panel,g.PanelBody),v=(g.PanelRow,wp.editor),b=v.InnerBlocks,k=v.InspectorControls,R=v.MediaPlaceholder,E=wp.element.Fragment,w=(wp.i18n.__,function(e){var t=e.attributes,a=e.setAttributes,n=(e.isSelected,d({color:"#fff"})(function(e){var t=e.color,n=e.setState;return React.createElement(p,{colors:[{name:"grey",color:"#efefef"},{name:"white",color:"#fff"}],value:t,onChange:function(e){return function(e){n({color:e}),a({backgroundColor:e})}(e)}})})),r=d({image_D:"",image_L:"",image_P:"",image_M:""})(function(e){return e.setState,React.createElement(k,null,React.createElement(f,{title:"Image for desktop view",initialOpen:!1},t.image_D?React.createElement("div",{className:"div-preview",style:{backgroundImage:"url("+t.image_D+")"}},React.createElement(_,{className:"remove-preview",icon:"dismiss",onClick:function(){return a({image_D:""})}})):React.createElement(R,{labels:{title:"Choose an image"},onSelect:function(e){a({image_D:e.url})}})),React.createElement(f,{title:"Image for tablet landcape",initialOpen:!1},t.image_L?React.createElement("div",{className:"div-preview",style:{backgroundImage:"url("+t.image_L+")"}},React.createElement(_,{className:"remove-preview",icon:"dismiss",onClick:function(){return a({image_L:""})}})):React.createElement(R,{labels:{title:"Choose an image"},onSelect:function(e){a({image_L:e.url})}})),React.createElement(f,{title:"Image for tablet portrait",initialOpen:!1},t.image_P?React.createElement("div",{className:"div-preview",style:{backgroundImage:"url("+t.image_P+")"}},React.createElement(_,{className:"remove-preview",icon:"dismiss",onClick:function(){return a({image_P:""})}})):React.createElement(R,{labels:{title:"Choose an image"},onSelect:function(e){a({image_P:e.url})}})),React.createElement(f,{title:"Image for mobile view",initialOpen:!1},t.image_M?React.createElement("div",{className:"div-preview",style:{backgroundImage:"url("+t.image_M+")"}},React.createElement(_,{className:"remove-preview",icon:"dismiss",onClick:function(){return a({image_M:""})}})):React.createElement(R,{labels:{title:"Choose an image"},onSelect:function(e){a({image_M:e.url})}})),React.createElement(f,{title:"Background Image",initialOpen:!1},t.backgroundImage?React.createElement("div",{className:"div-preview",style:{backgroundImage:"url("+t.backgroundImage+")"}},React.createElement(_,{className:"remove-preview",icon:"dismiss",onClick:function(){return a({backgroundImage:""})}})):React.createElement(R,{labels:{title:"Choose a background image"},onSelect:function(e){a({backgroundImage:e.url})}})),React.createElement(f,{title:"Background color",initialOpen:!0},React.createElement(n,null)))});return React.createElement(E,{key:"jonasm-slide__fragment"},React.createElement(r,null),React.createElement("div",{className:"jonasm-slide slide",style:{backgroundImage:'url(" '.concat(t.backgroundImage,' ")'),backgroundColor:t.backgroundColor}},React.createElement("div",{className:"slide-media__wrapper"},React.createElement("picture",{className:"slide-media"},React.createElement("source",{media:"(min-width: 1024px)",srcSet:t.image_D}),React.createElement("source",{media:"(min-width: 768px)",srcSet:t.image_L}),React.createElement("source",{media:"(min-width: 320px)",srcSet:t.image_P}),React.createElement("img",{className:"slide-media__image",src:t.image_M}))),React.createElement("div",{className:"slide-content"},React.createElement(b,null))))}),y=wp.editor.InnerBlocks,I=wp.element.Fragment,C=function(e){var t=e.attributes;return React.createElement(I,null,React.createElement("div",{className:"jonasm-slide slide",style:t.backgroundImage&&t.backgroundColor?{backgroundImage:"url("+t.backgroundImage+")",backgroundColor:t.backgroundColor}:t.backgroundImage?{backgroundImage:"url("+t.backgroundImage+")"}:t.backgroundColor?{backgroundColor:t.backgroundColor}:void 0},t.image_D||t.image_L||t.image_P||t.image_M?React.createElement("div",{className:"slide-media__wrapper"},React.createElement("picture",{className:"slide-media"},t.image_D?React.createElement("source",{media:"(min-width: 1439px)",srcSet:t.image_D}):"",t.image_L?React.createElement("source",{media:"(min-width: 1023px)",srcSet:t.image_L}):"",t.image_P?React.createElement("source",{media:"(min-width: 767px)",srcSet:t.image_P}):"",React.createElement("img",{className:"slide-media__image",src:t.image_M}))):"",React.createElement("div",{className:"jonasm-slide__content-wrapper slide__content-wrapper"},React.createElement("div",{className:"jonasm-slide__content slide__content"},React.createElement(y.Content,null)))))},h=wp.i18n.__;(0,wp.blocks.registerBlockType)("jonasm/slide",{title:h("Slide"),parent:["jonasm/slider"],icon:"format-image",description:h("A single slide within a slider block."),category:"layout",supports:{anchor:!0},attributes:{backgroundColor:{type:"string",default:""},backgroundImage:{type:"string",default:""},image_D:{type:"string",default:""},image_L:{type:"string",default:""},image_P:{type:"string",default:""},image_M:{type:"string",default:""}},edit:w,save:C})},function(e,t,a){e.exports=function(e,t){var a,n,r,l=0;function i(){var t,i,c=n,o=arguments.length;e:for(;c;){if(c.args.length===arguments.length){for(i=0;i<o;i++)if(c.args[i]!==arguments[i]){c=c.next;continue e}return c!==n&&(c===r&&(r=c.prev),c.prev.next=c.next,c.next&&(c.next.prev=c.prev),c.next=n,c.prev=null,n.prev=c,n=c),c.val}c=c.next}for(t=new Array(o),i=0;i<o;i++)t[i]=arguments[i];return c={args:t,val:e.apply(null,t)},n?(n.prev=c,c.next=n):r=c,l===a?(r=r.prev).next=null:l++,n=c,c.val}return t&&t.maxSize&&(a=t.maxSize),i.clear=function(){n=null,r=null,l=0},i}},function(e,t){}]);
//# sourceMappingURL=block.js.map