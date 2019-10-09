(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"35wr":function(t,a,e){var n=e("oTva");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,s);n.locals&&(t.exports=n.locals)},"4T6e":function(t,a,e){var n=e("JzQN");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,s);n.locals&&(t.exports=n.locals)},"In/u":function(t,a,e){"use strict";var n=e("35wr");e.n(n).a},JzQN:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".error-explanation[data-v-533a82fc] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-533a82fc]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}\n.optional-badge[data-v-533a82fc] {\n  border-radius: 4px;\n  color: #283e59;\n  background-color: #edf2f9;\n  padding: 3px 4px;\n}",""])},LLkT:function(t,a,e){"use strict";var n=e("4T6e");e.n(n).a},kArM:function(t,a,e){"use strict";e.r(a);var n=e("pF+r"),s=e("rrJu"),r=e("Z84v"),o={components:{Layout:e("+SZM").a,TextInput:n.a,Errors:s.a,LoadingButton:r.a},props:{teams:{type:Array,default:null},notifications:{type:Array,default:null}},data:function(){return{modal:!1,form:{name:null,errors:[]},loadingState:"",errorTemplate:Error}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},mounted:function(){localStorage.success&&(this.$snotify.success(localStorage.success,{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),localStorage.clear())},methods:{displayAddModal:function(){var t=this;this.modal=!this.modal,this.$nextTick((function(){t.$refs.newTeam.$refs.input.focus()}))},close:function(t){this.$el.contains(t.target)||(this.modal=!1)},submit:function(){var t=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/account/teams",this.form).then((function(a){t.$snotify.success("The team has been created",{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.loadingState=null,t.form.name=null,t.modal=!1,t.teams.push(a.data.data)})).catch((function(a){t.loadingState=null,t.form.errors=_.flatten(_.toArray(a.response.data))}))}}},i=(e("In/u"),e("KHd+")),l=Object(i.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",{attrs:{title:"Home",notifications:t.notifications}},[e("div",{staticClass:"ph2 ph0-ns"},[e("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[e("ul",{staticClass:"list ph0 tc-l tl"},[e("li",{staticClass:"di"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),e("li",{staticClass:"di"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account"}},[t._v(t._s(t.$t("app.breadcrumb_account_home")))])],1),t._v(" "),e("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_account_manage_teams"))+"\n        ")])])]),t._v(" "),e("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[e("div",{staticClass:"pa3 mt5"},[e("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.$t("account.teams_title",{company:t.$page.auth.company.name}))+"\n        ")]),t._v(" "),e("div",{staticClass:"relative"},[e("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.teams.length,expression:"teams.length != 0"}],staticClass:"dib mb3 di-l"},[t._v("\n            "+t._s(t.$tc("account.teams_number_teams",t.teams.length,{company:t.$page.auth.company.name,count:t.teams.length}))+"\n          ")]),t._v(" "),e("a",{staticClass:"btn tc absolute-l relative dib-l db right-0",attrs:{"data-cy":"add-team-button"},on:{click:function(a){return a.preventDefault(),t.displayAddModal(a)}}},[t._v("\n            "+t._s(t.$t("account.teams_cta"))+"\n          ")]),t._v(" "),1==t.modal?e("div",{staticClass:"absolute add-modal br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[e("errors",{attrs:{errors:t.form.errors}}),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"mb3"},[e("text-input",{ref:"newTeam",attrs:{placeholder:"",name:"name",errors:t.$page.errors.name,required:"",label:t.$t("account.team_new_name"),"extra-class-upper-div":"mb0"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1),t._v(" "),e("div",{staticClass:"mv2"},[e("div",{staticClass:"flex-ns justify-between"},[e("div",[e("a",{staticClass:"btn btn-secondary dib tc w-auto-ns w-100 pv2 ph3",on:{click:function(a){t.modal=!1}}},[t._v("\n                      "+t._s(t.$t("app.cancel"))+"\n                    ")])]),t._v(" "),e("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 pv2 ph3",state:t.loadingState,text:t.$t("app.add"),"data-cy":"submit-add-team-button"}})],1)])])],1):t._e()]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:0!=t.teams.length,expression:"teams.length != 0"}],staticClass:"list pl0 mt0 center"},t._l(t.teams,(function(a){return e("li",{key:a.id,staticClass:"flex items-center lh-copy pa3-l pa1 ph0-l bb b--black-10 team-item"},[e("div",{staticClass:"flex-auto"},[e("span",{staticClass:"db b"},[t._v("\n                "+t._s(a.name)+"\n              ")]),t._v(" "),e("ul",{staticClass:"f6 list pl0"},[e("li",{staticClass:"di pr2"},[e("a",{attrs:{href:"/"+t.$page.auth.company.id+"/teams/"+a.id}},[t._v("\n                    "+t._s(t.$t("app.view"))+"\n                  ")])]),t._v(" "),e("li",{staticClass:"di pr2"},[e("a",{attrs:{href:"/"+t.$page.auth.company.id+"/teams/"+a.id+"/lock"}},[t._v("\n                    "+t._s(t.$t("app.rename"))+"\n                  ")])]),t._v(" "),e("li",{staticClass:"di"},[e("a",{attrs:{href:"/"+t.$page.auth.company.id+"/teams/"+a.id+"/destroy"}},[t._v("\n                    "+t._s(t.$t("app.delete"))+"\n                  ")])])])])])})),0)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.teams.length,expression:"teams.length == 0"}],staticClass:"pa3"},[e("p",{staticClass:"tc measure center mb4 lh-copy"},[t._v("\n          "+t._s(t.$t("account.teams_blank"))+"\n        ")]),t._v(" "),e("img",{staticClass:"db center mb4",attrs:{srcset:"/img/company/account/blank-team-1x.png, /img/company/account/blank-team-2x.png 2x"}})])])])])}),[],!1,null,"75c99248",null);a.default=l.exports},oTva:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,'\n.add-modal[data-v-75c99248] {\n  border: 1px solid rgba(27,31,35,.15);\n  box-shadow: 0 3px 12px rgba(27,31,35,.15);\n  top: 36px;\n  right: 0;\n}\n.add-modal[data-v-75c99248]:after,\n.add-modal[data-v-75c99248]:before {\n  content: "";\n  display: inline-block;\n  position: absolute;\n}\n.add-modal[data-v-75c99248]:after {\n  border: 7px solid transparent;\n  border-bottom-color: #fff;\n  left: auto;\n  right: 10px;\n  top: -14px;\n}\n.add-modal[data-v-75c99248]:before {\n  border: 8px solid transparent;\n  border-bottom-color: rgba(27,31,35,.15);\n  left: auto;\n  right: 9px;\n  top: -16px;\n}\n.team-item[data-v-75c99248]:last-child {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n',""])},"pF+r":function(t,a,e){"use strict";var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},customRef:{type:String,default:"input"},name:{type:String,default:"input"},datacy:{type:String,default:""},placeholder:{type:String,default:""},help:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},extraClassUpperDiv:{type:String,default:"mb3"},min:{type:Number,default:0},max:{type:Number,default:0},errors:{type:Array,default:function(){return[]}}},computed:{hasError:function(){return this.errors.length>0}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,a){this.$refs.input.setSelectionRange(t,a)},sendEscKey:function(){this.$emit("esc-key-pressed")}}},s=(e("LLkT"),e("KHd+")),r=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.extraClassUpperDiv},[t.label?e("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n    "),t.required?t._e():e("span",{staticClass:"optional-badge f7"},[t._v("\n      "+t._s(t.$t("app.optional"))+"\n    ")])]):t._e(),t._v(" "),e("input",t._b({ref:t.customRef,staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:t.id,required:t.required,type:t.type,name:t.name,max:t.max,min:t.min,placeholder:t.placeholder,"data-cy":t.datacy},domProps:{value:t.value},on:{input:function(a){return t.$emit("input",a.target.value)},keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:t.sendEscKey(a)}}},"input",t.$attrs,!1)),t._v(" "),t.hasError?e("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?e("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"533a82fc",null);a.a=r.exports},rrJu:function(t,a,e){"use strict";var n={props:{errors:{type:Array,default:function(){return[]}}}},s=e("KHd+"),r=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.errors.length>0?e("div",[e("p",[t._v("app.error_title")]),t._v(" "),e("br"),t._v("\n  "+t._s(t.errors[0])+"\n  "),e("ul",t._l(t.errors[1],(function(a){return e("li",{key:a.id},[t._v("\n      "+t._s(a[0])+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);a.a=r.exports}}]);
//# sourceMappingURL=12.js.map?id=c5a996307d5db742ac28