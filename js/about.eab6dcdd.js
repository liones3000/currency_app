(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1148:function(t,e,r){"use strict";var n=r("a691"),o=r("1d80");t.exports="".repeat||function(t){var e=String(o(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},5809:function(t,e,r){},"61c2":function(t,e,r){"use strict";r("f6a6")},a5dd:function(t,e,r){"use strict";r("5809")},b680:function(t,e,r){"use strict";var n=r("23e7"),o=r("a691"),a=r("408a"),i=r("1148"),s=r("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));n({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,r,n,s,c=a(this),m=o(t),d=[0,0,0,0,0,0],b="",v="0",_=function(t,e){var r=-1,n=e;while(++r<6)n+=t*d[r],d[r]=n%1e7,n=l(n/1e7)},h=function(t){var e=6,r=0;while(--e>=0)r+=d[e],d[e]=l(r/t),r=r%t*1e7},p=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var r=String(d[t]);e=""===e?r:e+i.call("0",7-r.length)+r}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(b="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,r=e<0?c*u(2,-e,1):c/u(2,e,1),r*=4503599627370496,e=52-e,e>0){_(0,r),n=m;while(n>=7)_(1e7,0),n-=7;_(u(10,n,1),0),n=e-1;while(n>=23)h(1<<23),n-=23;h(1<<n),_(1,1),h(2),v=p()}else _(0,r),_(1<<-e,0),v=p()+i.call("0",m);return m>0?(s=v.length,v=b+(s<=m?"0."+i.call("0",m-s)+v:v.slice(0,s-m)+"."+v.slice(s-m))):v=b+v,v}})},beb0:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"convert"},[r("BContainer",[r("h1",{staticClass:"convert__title"},[t._v("Конвертер")]),r("Convert")],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form"},[r("BContainer",[r("BForm",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("BFormGroup",{staticClass:"mb-1 mb-sm-3 font-weight-bold",attrs:{label:"Получить","label-for":"currency_in","label-cols-sm":"4"}},[r("BCol",{staticClass:"form__column",attrs:{sm:"8"}},[r("BFormSelect",{staticClass:"form__input",attrs:{id:"currency_in",options:t.getListForSelect},model:{value:t.form.currency_in,callback:function(e){t.$set(t.form,"currency_in",e)},expression:"form.currency_in"}})],1)],1),r("BFormGroup",{staticClass:"mb-1 mb-sm-3 font-weight-bold",attrs:{label:"Отдать","label-for":"currency_out","label-cols-sm":"4"}},[r("BCol",{attrs:{sm:"8"}},[r("BFormSelect",{staticClass:"form__input",attrs:{id:"currency_out",options:t.getListForSelect,state:t.validation},model:{value:t.form.currency_out,callback:function(e){t.$set(t.form,"currency_out",e)},expression:"form.currency_out"}}),r("BFormInvalidFeedback",{attrs:{state:t.validation}},[t._v(" выберите валюту ")]),r("BFormValidFeedback",{attrs:{state:t.validation}},[t._v(" отлично ")])],1)],1),r("BFormGroup",{staticClass:"mb-1 mb-sm-3 font-weight-bold",attrs:{label:"Количество","label-for":"value_rate","label-cols-sm":"4"}},[r("BCol",{attrs:{sm:"8"}},[r("BFormInput",{staticClass:"form__input mx-auto",attrs:{id:"value_rate",type:"number",state:t.validation2},model:{value:t.form.value_rate,callback:function(e){t.$set(t.form,"value_rate",t._n(e))},expression:"form.value_rate"}}),r("BFormInvalidFeedback",{attrs:{state:t.validation2}},[t._v(" введите число больше 0 ")]),r("BFormValidFeedback",{attrs:{state:t.validation2}},[t._v(" отлично ")])],1)],1),r("BButton",{staticClass:"ml-sm-5",attrs:{type:"submit",variant:"dark"}},[t._v("Рассчитать")])],1),r("BFormGroup",{staticClass:"mt-3 mb-1 mb-sm-3 font-weight-bold",attrs:{label:"Результат","label-for":"result","label-cols-sm":"4"}},[r("BCol",{attrs:{sm:"8"}},[r("BFormInput",{staticClass:"form__input mx-auto font-weight-bold",attrs:{id:"result",type:"text",readonly:""},model:{value:t.result,callback:function(e){t.result=t._n(e)},expression:"result"}})],1)],1)],1)],1)},i=[],s=(r("b680"),r("5530")),c=r("2f62"),l={name:"Convert",mounted:function(){this.form.currency_in=this.currency_in||this.selected},data:function(){return{form:{currency_in:"",currency_out:"",value_rate:1},result:""}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])("currency",["getListForSelect","selected","getCurrency"])),{},{validation:function(){return Boolean(this.form.currency_out)},validation2:function(){return Boolean(this.form.value_rate>0)}}),methods:{onSubmit:function(){if(this.validation&&this.validation2){var t=this.getCurrency[this.form.currency_in].rate,e=this.getCurrency[this.form.currency_out].rate,r=this.form.value_rate;this.result=(t/e*r).toFixed(3)}else this.result=""},changeSelected:function(t){this.form.currency_in=t}},watch:{selected:"changeSelected"}},u=l,f=(r("61c2"),r("2877")),m=Object(f["a"])(u,a,i,!1,null,"b8381e32",null),d=m.exports,b={components:{Convert:d}},v=b,_=(r("a5dd"),Object(f["a"])(v,n,o,!1,null,"1228039e",null));e["default"]=_.exports},f6a6:function(t,e,r){}}]);
//# sourceMappingURL=about.eab6dcdd.js.map