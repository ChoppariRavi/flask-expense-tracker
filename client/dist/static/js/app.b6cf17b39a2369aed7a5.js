webpackJsonp([0],{BN1Y:function(t,e){},IYLo:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r={name:"MainPage",data:function(){return{title:"Expense Tracker",totalIncome:0,totalExpenses:0,month:["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()],year:(new Date).getFullYear(),type:"EXPENSE",text:null,amount:null,incomes:[],expenses:[]}},methods:{toggleType:function(){this.type="EXPENSE"===this.type?"INCOME":"EXPENSE"},checkForm:function(t){t.preventDefault(),"EXPENSE"===this.type?this.expenses.push({text:this.text,amount:this.amount}):this.incomes.push({text:this.text,amount:this.amount}),this.totalIncome=this.incomes.reduce(function(t,e){var s=e.amount;return t+Math.round(s)},0),this.totalExpenses=this.expenses.reduce(function(t,e){var s=e.amount;return t+Math.round(s)},0),this.text=null,this.amount=null},removeIt:function(t,e,s){"EXPENSE"===s?this.expenses.splice(e,1):this.incomes.splice(e,1),this.totalIncome=this.incomes.reduce(function(t,e){var s=e.amount;return t+Math.round(s)},0),this.totalExpenses=this.expenses.reduce(function(t,e){var s=e.amount;return t+Math.round(s)},0)}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container",attrs:{id:"app-container"}},[s("h2",{staticClass:"text-xl font-medium m-0 p-0 mt-2 w-full border-0 border-b border-solid border-gray-400"},[t._v(t._s(t.title))]),t._v(" "),s("h3",{staticClass:"text-xs font-medium m-0 p-0 mt-4 uppercase"},[t._v("Your Savings:")]),t._v(" "),s("h4",{staticClass:"text-2xl font-bold m-0 p-0 mt-2"},[t._v("₹ "+t._s(t.totalIncome-t.totalExpenses))]),t._v(" "),s("div",{staticClass:"flex bg-white p-5 mt-2 text-center shadow-lg"},[s("div",{staticClass:"w-1/2 border-0 border-r-2 border-solid border-gray-400"},[s("span",{staticClass:"text-green-700 font-medium text-xl"},[t._v("INCOME")]),t._v(" "),s("br"),t._v("\n      ₹ "+t._s(t.totalIncome)+"\n    ")]),t._v(" "),s("div",{staticClass:"w-1/2"},[s("span",{staticClass:"text-red-700 font-medium text-xl"},[t._v("EXPENSE")]),t._v(" "),s("br"),t._v("\n      ₹ "+t._s(t.totalExpenses)+"\n    ")])]),t._v(" "),s("div",{staticClass:"bg-white mt-2 p-2 shadow-lg mb-2"},[s("div",{staticClass:"inline-flex mt-2 w-full items-end"},["EXPENSE"===t.type?s("div",{staticClass:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer select-none",on:{click:function(e){return t.toggleType(e)}}},[t._v(t._s(t.type))]):t._e(),t._v(" "),"INCOME"===t.type?s("div",{staticClass:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer select-none",on:{click:function(e){return t.toggleType(e)}}},[t._v(t._s(t.type))]):t._e(),t._v(" "),s("p",{staticClass:"text-xs m-0 p-0 text-gray-600"},[t._v("\n        (Click this button to change as\n        "),s("span",{staticClass:"lowercase"},[t._v(t._s(t.type))]),t._v(".)\n      ")])]),t._v(" "),s("form",{on:{submit:function(e){return t.checkForm(e)}}},[s("div",{staticClass:"flex mt-2"},[s("div",{staticClass:"w-1/2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"appearance-none block text-gray-700 border border-gray-500 py-2 mb-2 pl-2 leading-tight focus:outline-none focus:bg-white input-text",attrs:{id:"grid-first-name",type:"text",placeholder:"Enter Text Here.",required:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"w-1/2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"appearance-none block text-gray-700 border border-gray-500 py-2 pl-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 input-text",attrs:{id:"grid-last-name",type:"number",placeholder:"Amount",required:""},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})])]),t._v(" "),t._m(0)])]),t._v(" "),s("h2",{staticClass:"text-base font-bold m-0 p-0 w-full border-0 border-b border-solid border-gray-400"},[t._v("History - "+t._s(t.month)+", "+t._s(t.year))]),t._v(" "),s("div",[s("div",[s("div",{staticClass:"flex w-full bg-green-600 text-white mt-1 py-2 font-bold"},[s("div",{staticClass:"w-1/2 pl-2"},[t._v("Total Income")]),t._v(" "),s("div",{staticClass:"w-1/2 pr-2 text-right"},[t._v("₹ "+t._s(t.totalIncome))])]),t._v(" "),s("div",t._l(t.incomes,function(e,n){return s("div",{key:n,staticClass:"flex w-full text-sm py-1 border-0 border-b border-solid border-gray-400 relative"},[s("div",{staticClass:"absolute right--10 bg-black p-1 rounded-r-lg cursor-pointer text-white font-bold select-none",on:{click:function(e){return t.removeIt(e,n,"INCOME")}}},[t._v("X")]),t._v(" "),s("div",{staticClass:"w-1/2 pl-2"},[t._v(t._s(e.text))]),t._v(" "),s("div",{staticClass:"w-1/2 pr-2 text-right"},[t._v("₹ "+t._s(e.amount))])])}),0)]),t._v(" "),s("div",[s("div",{staticClass:"flex w-full bg-red-600 text-white mt-1 py-2 font-bold"},[s("div",{staticClass:"w-1/2 pl-2"},[t._v("Total Expense")]),t._v(" "),s("div",{staticClass:"w-1/2 pr-2 text-right"},[t._v("₹ "+t._s(t.totalExpenses))])]),t._v(" "),s("div",t._l(t.expenses,function(e,n){return s("div",{key:n,staticClass:"flex w-full text-sm py-1 border-0 border-b border-solid border-gray-400 relative"},[s("div",{staticClass:"absolute right--10 bg-black p-1 rounded-r-lg cursor-pointer text-white font-bold select-none",on:{click:function(e){return t.removeIt(e,n,"EXPENSE")}}},[t._v("X")]),t._v(" "),s("div",{staticClass:"w-1/2 pl-2"},[t._v(t._s(e.text))]),t._v(" "),s("div",{staticClass:"w-1/2 pr-2 text-right"},[t._v("₹ "+t._s(e.amount))])])}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-8 text-center mb-2"},[e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer select-none",attrs:{type:"submit"}},[this._v("ADD")])])}]};var a={name:"APP",components:{MainPage:s("VU/8")(r,o,!1,function(t){s("mNTp")},"data-v-44915cc6",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("MainPage")],1)},staticRenderFns:[]};var l=s("VU/8")(a,i,!1,function(t){s("BN1Y")},null,null).exports;s("IYLo");n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:l},template:"<App/>"})},mNTp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b6cf17b39a2369aed7a5.js.map