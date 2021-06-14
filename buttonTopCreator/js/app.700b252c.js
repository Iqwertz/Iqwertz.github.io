(function(e){function t(t){for(var o,r,s=t[0],d=t[1],c=t[2],h=0,u=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);l&&l(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var d=n[s];0!==a[d]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/buttonTopCreator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("5c96"),i=n.n(a),r=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Scene")],1)}),s=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scene",staticClass:"scene"},[n("div",{attrs:{id:"three-scene-canvas"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isEditorEnabled,expression:"isEditorEnabled"}],ref:"svgEditor",staticClass:"svg-editor"},[e.isSvgUploaded?e._e():n("div",[n("button",{staticClass:"upload-svg-button",on:{click:e.onPickFile}},[e._v(" Upload SVG ↑ ")]),n("input",{ref:"fileInput",staticClass:"fileInput",attrs:{type:"file",accept:".svg"},on:{change:e.onFilePicked}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isSvgUploaded,expression:"isSvgUploaded"}],staticClass:"svg-container"},[n("svg",{ref:"svgContainer",attrs:{id:"stage",width:"510",height:"510",viewBox:"0 0 510 510"}})])]),e.isEditorEnabled?n("button",{staticClass:"finsih-edit-button button default green",on:{click:e.editFinished}},[e._v(" finish Edit ")]):e._e(),e.isEditorEnabled&&e.isSvgUploaded?n("button",{staticClass:"clear button round red",on:{click:e.clearSVG}},[e._v(" X ")]):e._e(),e.isEditorEnabled?e._e():n("div",{staticClass:"overlay"},[n("button",{staticClass:"start-svg-editor-button button default green",on:{click:e.startEditor}},[e._v(" Edit ")]),e.isObjDownloadReady?n("button",{staticClass:"download-button button default green",on:{click:e.downloadObj}},[e._v(" Download ↓ ")]):e._e()])])},c=[],l=(n("4160"),n("caad"),n("c975"),n("baa5"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("159b"),n("5a89")),h=n("4721"),u=n("53f9"),p=n("60b0"),v=n("22b5"),f=n("21a6"),g=n("be4c"),m={name:"Scene",data:function(){return{sceneCanvas:null,scene:null,camera:null,renderer:null,controls:null,buttonCapMesh:null,isEditorEnabled:!1,isSvgUploaded:!1,svgHover:!1,svgTranslation:{x:0,y:0,scale:1},svgScale:1,svgFilename:"",svgDraggable:null,maxBounding:{x:600,y:600},svgExtruded:null,isObjDownloadReady:!1,objDownloadData:null}},mounted:function(){var e=this,t=!1,n=!1;if(this.sceneCanvas=document.getElementById("three-scene-canvas"),this.scene=new l["Scene"],this.scene.background=new l["Color"](0),this.camera=new l["PerspectiveCamera"](55,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.set(0,150,220),this.camera.lookAt(0,0,0),t){var o=new l["GridHelper"](1e3,20);this.scene.add(o)}this.renderer=new l["WebGLRenderer"]({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputEncoding=l["sRGBEncoding"],this.controls=new h["a"](this.camera,this.renderer.domElement),this.controls.enablePan=!1,this.controls.addEventListener("change",this.animateThreeJs),this.renderer.setSize(this.sceneCanvas.offsetWidth,this.sceneCanvas.offsetHeight),this.renderer.setClearColor("#212121"),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=l["PCFSoftShadowMap"],this.renderer.shadowMapSoft=!0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.sceneCanvas.append(this.renderer.domElement);var a=new l["AmbientLight"](6316128);this.scene.add(a);var i=new l["PointLight"](16548637,1.5,100);i.position.set(0,80,0),i.castShadow=!0,i.shadow.radius=2,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,this.scene.add(i);var r=new l["PointLight"](65454,1,200);if(r.position.set(150,10,100),r.castShadow=!0,r.shadow.radius=2,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,this.scene.add(r),n){var s=new l["PointLightHelper"](r);this.scene.add(s)}var d=new l["PointLight"](16711680,1,200);if(d.position.set(-150,10,100),d.castShadow=!0,d.shadow.radius=2,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,this.scene.add(d),n){var c=new l["PointLightHelper"](d);this.scene.add(c)}var p=this,v=new u["MTLLoader"];v.load("/models/assemblyV4.mtl",(function(e){e.preload();var t=new u["OBJLoader"];t.setMaterials(e),t.load("/models/assemblyV4.obj",(function(e){e.position.x=-70,e.position.y=-27.6,e.position.z=70,p.buttonCapMesh=e.clone(),p.scene.add(e),p.animateThreeJs()}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}))}));var f=new u["OBJLoader"];f.load("/models/ButtonCap.obj",(function(e){e.position.x=-91,e.position.y=-9.9,e.position.z=30,e.rotateX(Math.PI/2),p.buttonCapMesh=e.clone(),p.scene.add(e),p.animateThreeJs()}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e),console.log("An error happened")})),this.animateThreeJs(),window.addEventListener("resize",(function(){e.resizeCanvas()}))},methods:{animateThreeJs:function(){this.renderer.render(this.scene,this.camera),this.renderer.shadowMap.needsUpdate=!0},resizeCanvas:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.animateThreeJs()},loadSVG:function(e){var t=new p["a"],n=this,o="/svg/phone-call.svg";void 0!=e&&(o=e),t.load(o,(function(e){var t=new l["Group"],o=.0372,a=o/n.svgScale;t.scale.y=-1*a,t.scale.x=a,t.scale.z=o;var i=9.5/a-n.svgTranslation.y,r=-9.5/a+n.svgTranslation.x,s=-118;t.rotateX(Math.PI/2);var d=[];e.paths.forEach((function(e){var t=n.colorToHex(e.color);d.includes(t)||d.push(t)})),e.paths.forEach((function(e){var o=e.toShapes(!1),a=n.colorToHex(e.color),i=d.indexOf(a);o.forEach((function(e){var o=n.createMesh(new l["ExtrudeGeometry"](e,{depth:20*i+20,bevelEnabled:!1}),a);t.add(o)}))}));var c=(new l["Box3"]).setFromObject(t),h=new l["Vector3"];c.getSize(h),t.children.forEach((function(e){e.position.x=r,e.position.y=i,e.position.z=s,e.updateWorldMatrix(!0,!0)}));var u=new g;setTimeout((function(){n.objDownloadData=u.parse(n.mergeExtrusion(t.clone())),n.isObjDownloadReady=!0}),1e3),n.scene.add(t),n.svgExtruded=t}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.error(e),console.log("An error happened")}))},mergeExtrusion:function(e){var t=this.buttonCapMesh;e.updateMatrix(!0),t.updateMatrix(!0);var n,o=[];e.traverse((function(e){void 0!==e.geometry&&o.push(e.geometry)})),t.traverse((function(e){void 0!==e.geometry&&(n=(new l["Geometry"]).fromBufferGeometry(e.geometry))}));for(var a=0;a<o.length;a++)o[a]=this.assignUVs(o[a]);n=this.assignUVs(n);var i=new l["Geometry"],r=new l["Matrix4"],s=.0392/this.svgScale;r.multiply((new l["Matrix4"]).makeScale(s,s,.0372)),r.multiply((new l["Matrix4"]).makeTranslation(-10/s,22.5/s,-93)),r.multiply((new l["Matrix4"]).makeRotationX(Math.PI));var d=new l["Matrix4"];d.multiply((new l["Matrix4"]).makeTranslation(-91,42.5,11));for(var c=0,h=o;c<h.length;c++){var u=h[c];i.merge(u,r)}i.merge(n,d),i.mergeVertices(),i.groupsNeedUpdate=!0;var p=new l["MeshNormalMaterial"];return new l["Mesh"](i,p)},assignUVs:function(e){return e.computeFaceNormals(),e.mergeVertices(),e.faceVertexUvs[0]=[],e.faces.forEach((function(t){var n=["x","y","z"].sort((function(e,n){return Math.abs(t.normal[e])>Math.abs(t.normal[n])})),o=e.vertices[t.a],a=e.vertices[t.b],i=e.vertices[t.c];e.faceVertexUvs[0].push([new l["Vector2"](o[n[0]],o[n[1]]),new l["Vector2"](a[n[0]],a[n[1]]),new l["Vector2"](i[n[0]],i[n[1]])])})),e.uvsNeedUpdate=!0,e},createMesh:function(e,t){var n=new l["MeshPhongMaterial"]({color:t,shininess:100,metal:!0}),o=new l["Mesh"](e,n);return o.rotation.x=Math.PI,o},downloadObj:function(){var e=new Blob([this.objDownloadData],{type:"text/plain"}),t=this.svgFilename.substring(0,this.svgFilename.lastIndexOf("."));f.saveAs(e,t+".obj")},startEditor:function(){var e=this,t={x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},n={x:0,y:85,z:70};new v["b"](t).to({x:n.x,y:n.y,z:n.z},1500).easing(v["a"].Sinusoidal.InOut).onUpdate((function(){e.camera.position.set(t.x,t.y,t.z),e.camera.lookAt(0,0,0)})).onComplete((function(){})).start().chain(new v["b"](t).to({x:0,y:35,z:0},1e3).easing(v["a"].Sinusoidal.InOut).onUpdate((function(){e.camera.position.set(t.x,t.y,t.z),e.camera.lookAt(0,0,0)})).onComplete((function(){e.isEditorEnabled=!0,e.scene.remove(e.svgExtruded),e.isObjDownloadReady=!1}))),this.animate((function(t){e.animateThreeJs(),v["c"](t)})),this.controls.enabled=!1},animate:function(e){function t(n){e(n),requestAnimationFrame(t)}requestAnimationFrame(t)},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t,n=this,o=e.target.files,a=o[0].name;console.log(a),this.svgFilename=a;var i=new FileReader;i.addEventListener("load",(function(){t=i.result,n.$refs.svgContainer.innerHTML=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement.innerHTML;var e=n.$refs.svgContainer.children[0].getBoundingClientRect();console.log(e),e.width>e.height?n.setZoom(e.width/n.maxBounding.x):n.setZoom(e.height/n.maxBounding.y)})),i.readAsText(o[0]),this.isSvgUploaded=!0},clearSVG:function(){this.$refs.svgContainer.innerHTML="",this.isSvgUploaded=!1,console.log(this.scene)},editFinished:function(){var e=this;this.loadSVG(this.svgToBase64(this.$refs.svgContainer));var t={x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z};new v["b"](t).to({x:0,y:150,z:220},1e3).easing(v["a"].Sinusoidal.InOut).onUpdate((function(){e.camera.position.set(t.x,t.y,t.z),e.camera.lookAt(0,0,0)})).onComplete((function(){console.log(e.camera.rotation)})).start(),this.animate((function(t){e.animateThreeJs(),v["c"](t)})),this.isEditorEnabled=!1,this.controls.enabled=!0},svgToBase64:function(e){var t=(new XMLSerializer).serializeToString(e);return"data:image/svg+xml;base64,"+window.btoa(t)},randomColor:function(){var e="#"+Math.floor(16777215*Math.random()).toString(16);return e},colorToHex:function(e){var t="#",n=255*e.r,o=255*e.g,a=255*e.b;return t+=((1<<24)+(n<<16)+(o<<8)+a).toString(16).slice(1),t},onSVGHover:function(){var e=this.$refs.svgContainer.children[0].getBoundingClientRect();this.$refs.svgBoundingBox.style.width=e.width+"px",this.$refs.svgBoundingBox.style.height=e.height+"px"},setZoom:function(e){console.log(e),this.svgScale=e;var t="0 0 "+510*e+" "+510*e;this.$refs.svgContainer.setAttribute("viewBox",t)}}},w=m,b=n("2877"),x=Object(b["a"])(w,d,c,!1,null,null,null),y=x.exports,S={name:"App",components:{Scene:y}},M=S,E=(n("5c0b"),Object(b["a"])(M,r,s,!1,null,null,null)),C=E.exports,z=n("8c4f"),P=n("5f35");o["default"].config.productionTip=!1,o["default"].use(i.a);var T=new z["a"]({mode:"history",base:P["publicPath"]});o["default"].use(T),new o["default"]({render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"5f35":function(e,t,n){e.exports={publicPath:"/buttonTopCreator/"}},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.700b252c.js.map