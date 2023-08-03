"use strict";(self.webpackChunkng_new_app=self.webpackChunkng_new_app||[]).push([[592],{5743:(L,D,i)=>{i.d(D,{z:()=>w});var s=i(1180),p=i(5861),T=i(7582),u=i(95),h=i(8208),e=i(6689),C=i(5118),b=i(9576),m=i(4844),_=i(5219),f=i(707),y=i(7555),I=i(6814),M=i(4819);const O=function(r){return["w-[calc(792px)] h-[calc(100vh-500px)] border-2 rounded-sm items-center justify-center",r]};function N(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",7),e.NdJ("dragover",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.over=!0)})("dragleave",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.over=!1)}),e.TgZ(1,"div",8)(2,"div",9),e._UZ(3,"i",10),e.TgZ(4,"div",11)(5,"span",12),e._uU(6,"Choose a file"),e.qZA(),e._uU(7," or drag it here"),e.qZA()()()()}if(2&r){const t=e.oxw(2);e.Q6J("ngClass",e.VKq(1,O,t.over?" border-secondary-500":" border-text-300 border-dashed"))}}function E(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"p-fileUpload",5),e.NdJ("uploadHandler",function(c){e.CHM(t);const Z=e.oxw();return e.KtG(Z.onFileUpload(c))}),e.YNc(1,N,8,3,"ng-template",6),e.qZA()}2&r&&e.Q6J("multiple",!1)("maxFileSize",1e6)("auto",!0)("customUpload",!0)}let P=(()=>{class r{constructor(t){(0,s.Z)(this,"_snackBar",void 0),(0,s.Z)(this,"control",void 0),(0,s.Z)(this,"uploaded",!1),(0,s.Z)(this,"form",void 0),(0,s.Z)(this,"over",!1),this._snackBar=t}ngOnInit(){this.form=new u.cw({td:this.control})}onFileUpload(t){var a=this;return(0,p.Z)(function*(){const c=t.files;if(c.length>0){const R=yield c.at(0)?.text();a.uploaded=!0,a.control.setValue(R),a._snackBar.showMessage("TD File Uploaded")}})()}}return(0,s.Z)(r,"\u0275fac",function(t){return new(t||r)(e.Y36(y.c))}),(0,s.Z)(r,"\u0275cmp",e.Xpm({type:r,selectors:[["app-td-upload"]],inputs:{control:"control"},decls:6,vars:3,consts:[[3,"formGroup"],["name","myfile[]","accept",".jsonld,.json","chooseLabel","Choose a file","chooseIcon","pi pi-folder-open",3,"multiple","maxFileSize","auto","customUpload","uploadHandler",4,"ngIf"],[3,"hidden"],[2,"width","800px","height","calc(100vh - 362px)"],["formControlName","td"],["name","myfile[]","accept",".jsonld,.json","chooseLabel","Choose a file","chooseIcon","pi pi-folder-open",3,"multiple","maxFileSize","auto","customUpload","uploadHandler"],["pTemplate","content"],[3,"ngClass","dragover","dragleave"],[1,"w-full","h-full"],[1,"flex","flex-col","items-center","justify-center","w-full","h-full"],[1,"pi","pi-file-import",2,"font-size","2rem"],[1,"text-sm","font-medium"],[1,"font-bold"]],template:function(t,a){1&t&&(e.TgZ(0,"div")(1,"form",0),e.YNc(2,E,2,4,"p-fileUpload",1),e.TgZ(3,"div",2)(4,"div",3),e._UZ(5,"app-jsonld-editor",4),e.qZA()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("ngIf",!a.uploaded),e.xp6(1),e.Q6J("hidden",!a.uploaded))},dependencies:[I.mk,I.O5,_.jx,M.p,u._Y,u.JJ,u.JL,u.sg,u.u]})),r})();var v;function j(r,l){1&r&&(e.TgZ(0,"div",7),e._UZ(1,"i",8),e.TgZ(2,"div"),e._uU(3,"File"),e.qZA()())}function S(r,l){1&r&&(e.TgZ(0,"div",7),e._UZ(1,"i",9),e.TgZ(2,"div"),e._uU(3,"Code"),e.qZA()())}let U=((0,s.Z)(v=class{constructor(l,t){(0,s.Z)(this,"_dialogRef",void 0),(0,s.Z)(this,"_itemsService",void 0),(0,s.Z)(this,"disabledFile",!0),(0,s.Z)(this,"disabledCode",!0),(0,s.Z)(this,"loading",!1),(0,s.Z)(this,"fileControl",new u.NI("",{updateOn:"change",validators:[u.kI.required]})),(0,s.Z)(this,"codeControl",new u.NI("",{updateOn:"change",validators:[u.kI.required]})),this._dialogRef=l,this._itemsService=t}ngOnInit(){this.fileControl.valueChanges.pipe((0,h.t)(this)).subscribe(l=>{const t=this.fileControl.valid;this.disabledFile&&t?this.disabledFile=!1:!this.disabledFile&&!t&&(this.disabledFile=!0)}),this.codeControl.valueChanges.pipe((0,h.t)(this)).subscribe(l=>{const t=this.codeControl.valid;this.disabledCode&&t?this.disabledCode=!1:!this.disabledCode&&!t&&(this.disabledCode=!0)})}createItem(l){var t=this;return(0,p.Z)(function*(){if(l.valid){const a=l.value;t.loading=!0;try{yield t._itemsService.registerNewItem(JSON.parse(a)),t._dialogRef.close()}finally{t.loading=!1}}})()}},"\u0275fac",function(l){return new(l||v)(e.Y36(C.E7),e.Y36(b.L))}),(0,s.Z)(v,"\u0275cmp",e.Xpm({type:v,selectors:[["app-create-item"]],decls:14,vars:6,consts:[["styleClass","tabview-custom"],["pTemplate","header"],[3,"control"],[1,"flex","items-center","w-full","justify-end","mt-8"],["label","Create Item","icon","pi pi-plus",3,"disabled","loading","click"],[2,"width","800px","height","calc(100vh - 362px)"],[3,"formControl"],[1,"flex","items-center","gap-2"],[1,"pi","pi-file-import",2,"font-size","1.5rem"],[1,"pi","pi-code",2,"font-size","1.5rem"]],template:function(l,t){1&l&&(e.TgZ(0,"p-tabView",0)(1,"p-tabPanel"),e.YNc(2,j,4,0,"ng-template",1),e.TgZ(3,"div"),e._UZ(4,"app-td-upload",2),e.TgZ(5,"div",3)(6,"p-button",4),e.NdJ("click",function(){return t.createItem(t.fileControl)}),e.qZA()()()(),e.TgZ(7,"p-tabPanel"),e.YNc(8,S,4,0,"ng-template",1),e.TgZ(9,"div")(10,"div",5),e._UZ(11,"app-jsonld-editor",6),e.qZA(),e.TgZ(12,"div",3)(13,"p-button",4),e.NdJ("click",function(){return t.createItem(t.codeControl)}),e.qZA()()()()()),2&l&&(e.xp6(4),e.Q6J("control",t.fileControl),e.xp6(2),e.Q6J("disabled",t.disabledFile)("loading",t.loading),e.xp6(5),e.Q6J("formControl",t.codeControl),e.xp6(2),e.Q6J("disabled",t.disabledCode)("loading",t.loading))},dependencies:[m.xf,m.x4,_.jx,f.zx,u.JJ,u.oH,P]})),v);U=(0,T.gn)([(0,h.c)()],U);var J=i(1264),F=i(1122);const A=["menu"];let w=(()=>{class r{constructor(t,a,c){(0,s.Z)(this,"_itemsService",void 0),(0,s.Z)(this,"_dialogService",void 0),(0,s.Z)(this,"_router",void 0),(0,s.Z)(this,"menu",void 0),(0,s.Z)(this,"addItemMenuOptions",[{label:"Use Editor",icon:"pi pi-file-edit",command:()=>{this.openCreateItemDialog(!0)}},{label:"Upload TD",icon:"pi pi-upload",command:()=>{this.openCreateItemDialog(!1)}}]),(0,s.Z)(this,"ref",void 0),(0,s.Z)(this,"_hideMenu",()=>{this.menu.visible&&this.menu.hide()}),this._itemsService=t,this._dialogService=a,this._router=c}ngOnInit(){document.body.addEventListener("click",this._hideMenu)}toogleMenu(t){this.menu.visible||(this.menu.show(t),t.stopPropagation())}openCreateItemDialog(t){t?this._router.navigateByUrl("/td-editor"):this.ref=this._dialogService.open(U,{header:"Create New Item",width:"900px",contentStyle:{overflow:"auto"},baseZIndex:1e4,maximizable:!1})}}return(0,s.Z)(r,"\u0275fac",function(t){return new(t||r)(e.Y36(b.L),e.Y36(C.xA),e.Y36(J.F0))}),(0,s.Z)(r,"\u0275cmp",e.Xpm({type:r,selectors:[["app-register-item-button"]],viewQuery:function(t,a){if(1&t&&e.Gf(A,5),2&t){let c;e.iGM(c=e.CRH())&&(a.menu=c.first)}},features:[e._Bn([C.xA])],decls:4,vars:2,consts:[["appendTo","body",3,"model","popup"],["menu",""],["label","New item","icon","pi pi-plus","styleClass","p-button-outlined",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div"),e._UZ(1,"p-menu",0,1),e.TgZ(3,"p-button",2),e.NdJ("click",function(Z){return a.toogleMenu(Z)}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("model",a.addItemMenuOptions)("popup",!0))},dependencies:[f.zx,F.v2]})),r})()},5576:(L,D,i)=>{i.d(D,{q:()=>b});var s=i(1180),p=i(6689),T=i(8998),u=i(5597),h=i(5376),e=i(3716);function C(m,_){1&m&&p._UZ(0,"fa-icon",4)}let b=(()=>{class m{constructor(f){(0,s.Z)(this,"_nodeService",void 0),(0,s.Z)(this,"width",void 0),(0,s.Z)(this,"size",void 0),this._nodeService=f}ngOnInit(){}get agid(){return this._nodeService.myNode.agid}}return(0,s.Z)(m,"\u0275fac",function(f){return new(f||m)(p.Y36(T.Z))}),(0,s.Z)(m,"\u0275cmp",p.Xpm({type:m,selectors:[["app-node-pictogram"]],inputs:{width:"width",size:"size"},decls:5,vars:3,consts:[["shape","square",3,"size"],["pictogramRef",""],[1,"font-medium","text-text-500","h-8","w-fit"],["copyMessage","Agid copied to clipboard",3,"id","width"],["icon","circle-nodes",2,"font-size","1.5rem","color","#4d8a8c"]],template:function(f,y){1&f&&(p.TgZ(0,"app-pictogram",0),p.YNc(1,C,1,0,"ng-template",null,1,p.W1O),p.TgZ(3,"div",2),p._UZ(4,"app-long-id",3),p.qZA()()),2&f&&(p.Q6J("size",y.size),p.xp6(4),p.Q6J("id",y.agid)("width",y.width))},dependencies:[u.BN,h.u,e.a],styles:[".actions[_ngcontent-%COMP%]{background:rgb(248,249,250);background:linear-gradient(90deg,rgba(248,249,250,0) 0%,rgb(248,249,250) 50%)}"]})),m})()},8208:(L,D,i)=>{i.d(D,{c:()=>F,t:()=>R});var s=i(8645),p=i(7394),T=i(7715),u=i(6232),h=i(6689),e=i(1631),C=i(9360),b=i(8251),m=i(4829),_=i(2420);const y=h.GuJ,M=Symbol("__destroy"),x=Symbol("__decoratorApplied");function O(o){return"string"==typeof o?Symbol(`__destroy__${o}`):M}function E(o,n){o[n]||(o[n]=new s.x)}function P(o,n){o[n]&&(o[n].next(),o[n].complete(),o[n]=null)}function v(o){o instanceof p.w0&&o.unsubscribe()}function S(o,n){return function(){if(o&&o.call(this),P(this,O()),n.arrayName&&function j(o){Array.isArray(o)&&o.forEach(v)}(this[n.arrayName]),n.checkProperties)for(const d in this)n.blackList?.includes(d)||v(this[d])}}function F(o={}){return n=>{!function I(o){return!!o[y]}(n)?function U(o,n){o.prototype.ngOnDestroy=S(o.prototype.ngOnDestroy,n)}(n,o):function J(o,n){const d=o.\u0275pipe;d.onDestroy=S(d.onDestroy,n)}(n,o),function N(o){o.prototype[x]=!0}(n)}}const A=7,w=Symbol("CheckerHasBeenSet");function t(o){const n=h.dqk.Zone;return n&&"function"==typeof n.root?.run?n.root.run(o):o()}const c=!1;function R(o,n){return d=>{const g=O(n);"string"==typeof n?function Z(o,n,d){const g=o[n];if(c&&"function"!=typeof g)throw new Error(`${o.constructor.name} is using untilDestroyed but doesn't implement ${n}`);E(o,d),o[n]=function(){g.apply(this,arguments),P(this,d),o[n]=g}}(o,n,g):(c&&function Q(o){const n=Object.getPrototypeOf(o);if(!(x in n))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}(o),E(o,g));const B=o[g];return c&&function r(o,n){o[w]||function l(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&"[object process]"===Object.prototype.toString.call(process)}()||(t(()=>(0,T.D)(Promise.resolve()).pipe((0,e.z)(()=>{let d;try{d=(0,h.EEQ)(o)}catch{d=null}const g=d?.lView;if(null==g)return u.E;const B=g[A]||(g[A]=[]),z=new s.x;return B.push(function(){t(()=>{z.next(),z.complete()})}),z}),(0,e.z)(()=>Promise.resolve())).subscribe(()=>{(n.observed??n.observers.length>0)&&console.warn(function a(o){return`\n  The ${o.constructor.name} still has subscriptions that haven't been unsubscribed.\n  This may happen if the class extends another class decorated with @UntilDestroy().\n  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().\n  Let's look at the following example:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {}\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n    }\n  }\n  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()\n  on the ConcreteComponent, but not on the BaseDirective.\n  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {\n    ngOnDestroy(): void {}\n  }\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n      super.ngOnDestroy();\n    }\n  }\n  `}(o))})),o[w]=!0)}(o,B),d.pipe(function f(o){return(0,C.e)((n,d)=>{(0,m.Xf)(o).subscribe((0,b.x)(d,()=>d.complete(),_.Z)),!d.closed&&n.subscribe(d)})}(B))}}}}]);