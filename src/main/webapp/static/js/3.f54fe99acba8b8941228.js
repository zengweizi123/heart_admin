webpackJsonp([3,6,9,10],{1014:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table"},[s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-menu"}),e._v(" 测试管理")]),e._v(" "),s("el-breadcrumb-item",[e._v("添加测试")])],1)],1),e._v(" "),s("el-steps",{staticStyle:{margin:"10px 30px"},attrs:{space:240,active:e.step,"finish-status":e.status}},[s("el-step",{attrs:{title:"添加测试"}}),e._v(" "),s("el-step",{attrs:{title:"添加测试题"}}),e._v(" "),s("el-step",{attrs:{title:"添加答案"}})],1),e._v(" "),s("div",{staticClass:"handle-box"},[0==e.step?s("div",{staticStyle:{margin:"60px auto"}},[s("test-paper",{attrs:{showCrumb:e.showCrumb},on:{paper:e.addQuestion}})],1):e._e(),e._v(" "),1==e.step?s("div",{staticStyle:{margin:"60px auto"}},[s("test-question",{attrs:{newId:e.testId,showCrumb:e.showCrumb},on:{question:e.addResult}})],1):e._e(),e._v(" "),2==e.step?s("div",{staticStyle:{margin:"60px auto"}},[s("test-answer",{attrs:{newId:e.testId,showCrumb:e.showCrumb},on:{test:e.addFinished}})],1):e._e()])],1)},staticRenderFns:[]}},1037:function(e,t,s){var a=s(716);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(197)("1cf2de0a",a,!0)},505:function(e,t,s){s(582);var a=s(198)(s(549),s(574),"data-v-2b36bfe3",null);e.exports=a.exports},506:function(e,t,s){s(585);var a=s(198)(s(550),s(577),"data-v-6c16fbf7",null);e.exports=a.exports},507:function(e,t,s){s(586);var a=s(198)(s(551),s(578),"data-v-7d810e6a",null);e.exports=a.exports},525:function(e,t,s){s(1037);var a=s(198)(s(613),s(1014),"data-v-6c3fd570",null);e.exports=a.exports},530:function(e,t,s){e.exports={default:s(531),__esModule:!0}},531:function(e,t,s){s(533),e.exports=s(65).Object.keys},532:function(e,t,s){var a=s(88),o=s(65),i=s(59);e.exports=function(e,t){var s=(o.Object||{})[e]||Object[e],n={};n[e]=t(s),a(a.S+a.F*i(function(){s(1)}),"Object",n)}},533:function(e,t,s){var a=s(137),o=s(66);s(532)("keys",function(){return function(e){return o(a(e))}})},534:function(e,t,s){var a=s(198)(s(535),s(544),null,null);e.exports=a.exports},535:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ElButton",props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean},methods:{handleClick:function(e){this.$emit("click",e)}}}},544:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"el-button",class:[e.type?"el-button--"+e.type:"",e.size?"el-button--"+e.size:"",{"is-disabled":e.disabled,"is-loading":e.loading,"is-plain":e.plain}],attrs:{disabled:e.disabled,autofocus:e.autofocus,type:e.nativeType},on:{click:e.handleClick}},[e.loading?s("i",{staticClass:"el-icon-loading"}):e._e(),e._v(" "),e.icon&&!e.loading?s("i",{class:"el-icon-"+e.icon}):e._e(),e._v(" "),e.$slots.default?s("span",[e._t("default")],2):e._e()])},staticRenderFns:[]}},549:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(534),o=s.n(a);t.default={components:{ElButton:o.a},name:"test-answer",props:{showCrumb:{type:Boolean,required:!1},newId:{type:Number,required:!1}},data:function(){return{testId:this.$route.params.testId,answer:{},disabled:!1,show:!1}},mounted:function(){var e=this;e.testId>0?(e.disabled=!0,e.getTestResults(),e.show=!0):e.disabled=!1},methods:{getTestResults:function(){var e=this;e.$axios.post("/mapis/test/getAnswer",{testId:e.testId}).then(function(t){t.data.state&&(e.answer=t.data.list)})},sendAnswers:function(){var e=this;e.testId>0?e.editAnswers():e.addAnswers()},editAnswers:function(){var e=this;if(e.answer.region_one.length<=0||e.answer.region_two.length<=0||e.answer.region_three.length<=0)return void e.$message.error("内容不可为空");e.$axios.post("/mapis/test/editAnswer",{answers:e.answer,testId:e.testId}).then(function(t){t.data.state&&(e.disabled=!0,e.getTestResults())})},addAnswers:function(){var e=this;if(e.answer.region_one.length<=0||e.answer.region_two.length<=0||e.answer.region_three.length<=0)return void e.$message.error("内容不可为空");e.$axios.post("/mapis/test/addAnswer",{answers:e.answer,testId:e.newId}).then(function(t){t.data.state?e.$emit("test",!0):e.$emit("test",!1)})}}}},550:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(530),o=s.n(a);t.default={name:"test-paper",data:function(){return{testId:this.$route.params.testId,test:{},typeList:[],disabled:!1,shwSelf:!1}},props:{showCrumb:{type:Boolean,required:!1}},created:function(){this.getTestType()},mounted:function(){var e=this;e.testId>0?(e.disabled=!0,e.getTestById(e.testId),e.shwSelf=!0):e.test.test_num=1},methods:{getTestType:function(){var e=this;e.$axios.post("/mapis/test/getLabels").then(function(t){t.data.state&&(e.typeList=t.data.list)})},getTestById:function(e){var t=this;t.$axios.post("/mapis/test/getTestById",{testId:e}).then(function(e){e.data.state&&(t.test=e.data.list)})},getFormData:function(e,t,s){var a=this;if(o()(a.test).length<e.length)return void a.$message.error("请检查内容，内容都不可为空");for(var i in a.test)if(-1==s.indexOf(i)){if(!a.test[i]||-1==e.indexOf(i))return console.log("err "+i),a.$message.error("请检查内容，内容都不可为空"),!1;t.append(i,a.test[i])}return!0},editTestPaper:function(){var e=this,t=["test_id","test_name","test_num","typeId"],s=new FormData,a=["picture_addr"];if(e.getFormData(t,s,a)){e.$refs.file.files[0]?s.append("picture_addr",e.$refs.file.files[0]):s.append("picture_addr",e.test.picture_addr);var o={headers:{"Content-Type":"multipart/form-data"}};e.$axios.post("/mapis/test/editTestPaper",s,o).then(function(t){t.data.state&&(e.getTestById(e.testId),e.disabled=!0)})}},addTestPaper:function(){var e=this,t=["test_name","test_num","typeId"],s=new FormData;if(!e.$refs.file.files[0])return void e.$message.error("请检查内容，内容都不可为空");if(e.getFormData(t,s,[])){s.append("picture_addr",e.$refs.file.files[0]);var a={headers:{"Content-Type":"multipart/form-data"}};e.$axios.post("/mapis/test/addTestPaper",s,a).then(function(t){t.data.state?e.$emit("paper",!0,t.data.testId):e.$emit("paper",!1)})}},sendArticle:function(){var e=this;e.testId>0?e.editTestPaper():e.addTestPaper()}}}},551:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(534),o=s.n(a);t.default={components:{ElButton:o.a},name:"test-question",props:{showCrumb:{type:Boolean,required:!1},newId:{type:Number,required:!1}},data:function(){return{testId:this.$route.params.testId,tableData:[],disabled:!1,show:!1}},mounted:function(){var e=this;e.testId>0?(e.disabled=!0,e.getTestQuestions(e.testId),e.show=!0):(e.disabled=!1,e.addRow())},methods:{deleteTestQuestion:function(){var e=this,t=[];if(e.multipleSelection.length<=0)return void e.$message.error("请至少选择一条数据");t=e.multipleSelection.map(function(e){return e.title_id}),e.$axios.post("/mapis/test/deleteTestQuestions",{titlesId:t}).then(function(t){e.multipleSelection=[],t.data.state&&e.getTestQuestions()})},handleSelectionChange:function(e){this.multipleSelection=e},addRow:function(){var e=this;e.tableData.length>10?e.$message.error("题目过多，请慎重"):e.tableData.push({title_name:"",choose_one:"",choose_two:"",choose_three:"",choose_four:""})},editTestQuestion:function(){this.disabled=!1},sendTestQuestions:function(){var e=this;e.testId>0?e.sendOldTestQuestions():e.sendNewTestQuestions()},sendOldTestQuestions:function(){var e=this,t=e.sortingData();e.$axios.post("/mapis/test/editQuestions",{questions:t,testId:e.testId}).then(function(t){t.data.state&&(e.getTestQuestions(e.testId),e.disabled=!0)})},sendNewTestQuestions:function(){var e=this,t=e.sortingData();e.$axios.post("/mapis/test/addQuestions",{questions:t,testId:e.newId}).then(function(t){t.data.state?e.$emit("question",!0):e.$emit("question",!1)})},sortingData:function(){var e=this,t=[];if(e.tableData.forEach(function(e,s){var a=0;if(!(e.title_name.length<=0)){for(var o in e)"title_name"!=o&&e[o].length>0&&a++;a>=2&&t.push(e)}}),t.length>=1)return t},getTestQuestions:function(){var e=this;e.$axios.post("/mapis/test/getQuestions",{testId:e.testId}).then(function(t){t.data.state&&(e.tableData=t.data.list)})}}}},556:function(e,t,s){t=e.exports=s(87)(!1),t.push([e.i,".file[data-v-2b36bfe3]{position:relative;display:inline-block;background:#20a0ff;border:1px solid #20a0ff;border-radius:4px;padding:4px 15px;overflow:hidden;color:#fff;text-decoration:none;text-indent:0;line-height:20px}.file input[data-v-2b36bfe3]{position:absolute;font-size:100px;right:0;top:0;opacity:0}.file[data-v-2b36bfe3]:hover{background:#2085c5;border-color:#2085c5;color:#fff;text-decoration:none}",""])},559:function(e,t,s){t=e.exports=s(87)(!1),t.push([e.i,".file[data-v-6c16fbf7]{position:relative;display:inline-block;background:#20a0ff;border:1px solid #20a0ff;border-radius:4px;padding:4px 15px;overflow:hidden;color:#fff;text-decoration:none;text-indent:0;line-height:20px}.file input[data-v-6c16fbf7]{position:absolute;font-size:100px;right:0;top:0;opacity:0}.file[data-v-6c16fbf7]:hover{background:#2085c5;border-color:#2085c5;color:#fff;text-decoration:none}",""])},560:function(e,t,s){t=e.exports=s(87)(!1),t.push([e.i,".file[data-v-7d810e6a]{position:relative;display:inline-block;background:#20a0ff;border:1px solid #20a0ff;border-radius:4px;padding:4px 15px;overflow:hidden;color:#fff;text-decoration:none;text-indent:0;line-height:20px}.file input[data-v-7d810e6a]{position:absolute;font-size:100px;right:0;top:0;opacity:0}.file[data-v-7d810e6a]:hover{background:#2085c5;border-color:#2085c5;color:#fff;text-decoration:none}",""])},574:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table"},[e.showCrumb||e.show?s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-menu"}),e._v(" 测试管理")]),e._v(" "),s("el-breadcrumb-item",[e._v("测试答案")])],1)],1):e._e(),e._v(" "),s("div",{staticClass:"handle-box"},[s("div",{staticClass:"table"},[s("el-form",{ref:"article",staticClass:"demo-admin",attrs:{model:e.answer,"label-width":"120px"}},[s("el-form-item",{attrs:{prop:"region_one",label:"结论1"}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},placeholder:"请输入结论",disabled:e.disabled},model:{value:e.answer.region_one,callback:function(t){e.$set(e.answer,"region_one",t)},expression:"answer.region_one"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"region_two",label:"结论2"}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},placeholder:"请输入结论",disabled:e.disabled},model:{value:e.answer.region_two,callback:function(t){e.$set(e.answer,"region_two",t)},expression:"answer.region_two"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"region_three",label:"结论3"}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},placeholder:"请输入结论",disabled:e.disabled},model:{value:e.answer.region_three,callback:function(t){e.$set(e.answer,"region_three",t)},expression:"answer.region_three"}})],1)],1),e._v(" "),e.disabled?s("el-button",{staticClass:"right",attrs:{size:"medium",type:"info"},on:{click:function(t){e.disabled=!1}}},[e._v("修改")]):s("el-button",{staticClass:"right",attrs:{size:"medium",type:"info"},on:{click:e.sendAnswers}},[e._v("确定")])],1)])])},staticRenderFns:[]}},577:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table"},[e.showCrumb||e.shwSelf?s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-menu"}),e._v(" 测试管理")]),e._v(" "),s("el-breadcrumb-item",[e._v("测试")])],1)],1):e._e(),e._v(" "),s("div",{staticClass:"handle-box"},[s("div",{staticClass:"table"},[s("el-form",{ref:"test",staticClass:"demo-admin",attrs:{model:e.test,"label-width":"120px"}},[s("el-form-item",{attrs:{prop:"test_name",label:"测试标题"}},[s("el-input",{attrs:{placeholder:"请输入测试标题",disabled:e.disabled},model:{value:e.test.test_name,callback:function(t){e.$set(e.test,"test_name",t)},expression:"test.test_name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"类型"}},[s("el-select",{attrs:{placeholder:"类型",disabled:e.disabled},on:{change:function(e){}},model:{value:e.test.typeId,callback:function(t){e.$set(e.test,"typeId",t)},expression:"test.typeId"}},e._l(e.typeList,function(t,a){return s("el-option",{key:a,attrs:{label:t.paper_label_name,value:t.paper_label_id,disabled:e.disabled}})}))],1),e._v(" "),e.disabled?s("el-form-item",{attrs:{prop:"test_num",label:"测试人数"}},[s("el-input",{attrs:{placeholder:"",disabled:e.disabled},model:{value:e.test.test_num,callback:function(t){e.$set(e.test,"test_num",e._n(t))},expression:"test.test_num"}})],1):e._e(),e._v(" "),s("el-form-item",{attrs:{prop:"picture_addr",label:"照片"}},[e.disabled?s("img",{staticStyle:{width:"270px"},attrs:{src:e.test.picture_addr}}):s("span",{staticClass:"file",attrs:{href:"javascript:void 0;"}},[e._v("选择文件\n                        "),s("input",{ref:"file",attrs:{type:"file",name:"picture_addr",multiple:"multiple"}})])])],1),e._v(" "),e.disabled?s("el-button",{staticClass:"right",attrs:{size:"medium",type:"info"},on:{click:function(t){e.disabled=!1}}},[e._v("修改")]):s("el-button",{staticClass:"right",attrs:{size:"medium",type:"info"},on:{click:e.sendArticle}},[e._v("确定")])],1)])])},staticRenderFns:[]}},578:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table"},[e.showCrumb||e.show?s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-menu"}),e._v(" 测试管理")]),e._v(" "),s("el-breadcrumb-item",[e._v("问题")])],1)],1):e._e(),e._v(" "),s("div",{staticClass:"handle-box"},[s("div",{staticClass:"handle-box mb15"},[e.disabled?s("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"edit"},on:{click:e.editTestQuestion}},[e._v("编辑")]):e._e(),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],staticClass:"handle-del mr10",attrs:{type:"primary",icon:"check"},on:{click:e.sendTestQuestions}},[e._v("提交")]),e._v(" "),s("div",{staticStyle:{float:"right"}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],staticClass:"handle-del mr10",attrs:{icon:"plus"},on:{click:e.addRow}},[e._v("添加题目")]),e._v(" "),e.disabled?s("el-button",{staticClass:"handle-del mr10",attrs:{icon:"delete"},on:{click:e.deleteTestQuestion}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),s("div",{staticClass:"table"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[e.disabled?s("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),e._v(" "),s("el-table-column",{attrs:{label:"#",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"title_name",label:"题目"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],attrs:{placeholder:"请输入选项"},model:{value:t.row.title_name,callback:function(s){e.$set(t.row,"title_name",s)},expression:"scope.row.title_name"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}]},[e._v(e._s(t.row.title_name))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"choose_one",label:"选项1",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],attrs:{placeholder:"请输入选项"},model:{value:t.row.choose_one,callback:function(s){e.$set(t.row,"choose_one",s)},expression:"scope.row.choose_one"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}]},[e._v(e._s(t.row.choose_one?t.row.choose_one:""))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"choose_two",label:"选项2",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],attrs:{placeholder:"请输入选项"},model:{value:t.row.choose_two,callback:function(s){e.$set(t.row,"choose_two",s)},expression:"scope.row.choose_two"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}]},[e._v(e._s(t.row.choose_two?t.row.choose_two:""))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"choose_three",label:"选项3",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],attrs:{placeholder:"请输入选项"},model:{value:t.row.choose_three,callback:function(s){e.$set(t.row,"choose_three",s)},expression:"scope.row.choose_three"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}]},[e._v(e._s(t.row.choose_three?t.row.choose_three:""))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"choose_four",label:"选项4",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}],attrs:{placeholder:"请输入选项"},model:{value:t.row.choose_four,callback:function(s){e.$set(t.row,"choose_four",s)},expression:"scope.row.choose_four"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.disabled,expression:"disabled"}]},[e._v(e._s(t.row.choose_four?t.row.choose_four:""))])]}}])})],1)],1)])])},staticRenderFns:[]}},582:function(e,t,s){var a=s(556);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(197)("10d7674c",a,!0)},585:function(e,t,s){var a=s(559);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(197)("313ea9d8",a,!0)},586:function(e,t,s){var a=s(560);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(197)("69670863",a,!0)},613:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(506),o=s.n(a),i=s(507),n=s.n(i),r=s(505),l=s.n(r);t.default={components:{TestAnswer:l.a,TestQuestion:n.a,TestPaper:o.a},name:"add-test",data:function(){return{showCrumb:!1,step:0,status:"wait",testId:""}},methods:{addQuestion:function(e,t){var s=this;e?(s.step=1,s.status="success",s.testId=t):s.$message.error("添加失败，请重新尝试")},addResult:function(e){var t=this;e?t.step=2:t.$message.error("添加失败，请重新尝试")},addFinished:function(e){var t=this;e&&(t.step=3,setTimeout(function(){t.$router.push("/testlist")},500))}}}},716:function(e,t,s){t=e.exports=s(87)(!1),t.push([e.i,"",""])}});