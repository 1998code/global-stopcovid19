(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{293:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2cb42184",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";var r=n(293);n.n(r).a},298:function(t,e,n){(e=n(15)(!1)).push([t.i,".header[data-v-55eabffa]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-55eabffa]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-55eabffa]{font-size:2rem}}",""]),t.exports=e},300:function(t,e,n){"use strict";var r=n(0).a.extend({props:{icon:{type:String}}}),l=(n(297),n(5)),o=n(40),d=n.n(o),c=n(285),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"55eabffa",null);e.a=component.exports;d()(component,{VIcon:c.a})},325:function(t,e,n){var content=n(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("958aea08",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";var r=n(325);n.n(r).a},402:function(t,e,n){(e=n(15)(!1)).push([t.i,".Contacts-Card{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px}.Contacts-Card-Table{width:100%;border-collapse:collapse}.Contacts-Card-Table th{padding:1em 0;font-size:1.4rem !important}.Contacts-Card-Table td{padding:1em 16px;font-size:1.4rem}.Contacts-Card-Table .importantContact{font-weight:bold;font-size:1.6rem !important}.Contacts-Card-Table .tel ul{list-style:none;padding:0}.Contacts-Card-Table .tel li{margin:8px 0}@media screen and (min-width: 769px){.Contacts-Card-Table th.tel{width:35%}.Contacts-Card-Table th,.Contacts-Card-Table tr:not(:last-child){border-top:none;border-left:none;border-right:none;border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table tr:last-child{border:none}}@media screen and (max-width: 768px){.Contacts-Card-Table thead{display:none}.Contacts-Card-Table tbody tr{height:auto}.Contacts-Card-Table tbody tr .content{font-weight:bold;border-bottom:none !important;padding-top:12px;padding-bottom:8px}.Contacts-Card-Table tbody tr .bureau{border-bottom:none !important}.Contacts-Card-Table tbody tr .tel{padding-bottom:12px}.Contacts-Card-Table tbody tr:not(:last-child){border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table td{display:block}}.Contacts-Card-Table p.caution{margin:0;font-size:1.2rem}",""]),t.exports=e},539:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(300),o=r.a.extend({components:{PageHeader:l.a},data:function(){return{pc:!0}},computed:{tableAttrs:function(){return this.pc?{}:{role:"presentation"}},headingAttrs:function(){return this.pc?{}:{role:"heading","aria-level":"3"}}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.pc=window.innerWidth>768}},head:function(){return{title:this.$t("お問い合わせ先一覧")}}}),d=(n(401),n(5)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Contacts"},[n("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("お問い合わせ先一覧"))+"\n  ")]),t._v(" "),n("div",{staticClass:"Contacts-Card"},[n("table",t._b({staticClass:"Contacts-Card-Table"},"table",t.tableAttrs,!1),[n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("お問い合わせ内容"))+"\n          ")]),t._v(" "),n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v(t._s(t.$t("局名")))]),t._v(" "),n("th",{staticClass:"text-center tel",attrs:{scope:"col"}},[t._v(t._s(t.$t("電話番号")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",t._b({staticClass:"content importantContact"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("新型コロナウイルス感染症の予防・検査・医療に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau importantContact"},[t._v("\n            "+t._s(t.$t("新型コロナコールセンター"))+"\n          ")]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{staticClass:"importantContact",attrs:{href:"tel:0570-550-571"}},[t._v("0570-550-571")]),n("br"),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n              "+t._s(t.$t("午前9時00分から午後10時00分（土日祝含む）"))+"\n            ")]),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n              "+t._s(t.$t("電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。"))+"\n            ")])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content importantContact"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("特措法に定める要請・指示、感染拡大防止協力金等に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau importantContact"},[t._v("\n            "+t._s(t.$t("東京都緊急事態措置等・感染拡大防止協力金相談センター"))+"\n          ")]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{staticClass:"importantContact",attrs:{href:"tel:03-5388-0567"}},[t._v("03-5388-0567")]),n("br"),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n              "+t._s(t.$t("午前9時00分から午後7時00分（土日祝含む）"))+"\n            ")])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("本サイトの管理・運営に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("政策企画局")))]),t._v(" "),t._m(0)]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("新型コロナウイルス感染症対策本部会議に関すること"))),n("br"),t._v(t._s(t.$t("都庁来庁者データに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("総務局")))]),t._v(" "),n("td",{staticClass:"tel"},[n("ul",[n("li",[t._v("\n                "+t._s(t.$t("新型コロナウイルス感染症対策本部会議に関すること"))+"\n                "),n("br"),t._v(" "),n("a",{attrs:{href:"tel:03-5388-2453"}},[t._v("\n                  03-5388-2453\n                ")])]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("都庁来庁者データに関すること"))+"\n                "),n("br"),t._v(" "),n("a",{attrs:{href:"tel:03-5388-2319"}},[t._v("\n                  03-5388-2319\n                ")])])])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("都公式ホームページに関すること"))),n("br"),t._v(t._s(t.$t("都公式SNSアカウントに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("生活文化局")))]),t._v(" "),n("td",{staticClass:"tel"},[n("ul",[n("li",[t._v("\n                "+t._s(t.$t("都公式ホームページに関すること"))),n("br"),n("a",{attrs:{href:"tel:03-5388-3061"}},[t._v("03-5388-3061")])]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("都公式SNSアカウントに関すること"))),n("br"),n("a",{attrs:{href:"tel:03-5388-3094"}},[t._v("03-5388-3094")])])])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("中小企業支援、テレワークに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("産業労働局")))]),t._v(" "),n("td",{staticClass:"tel"},[n("ul",[n("li",[t._v("\n                "+t._s(t.$t("資金繰りに関すること"))),n("br"),n("a",{attrs:{href:"tel:03-5320-4877"}},[t._v("03-5320-4877")])]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("経営に関すること"))),n("br"),n("a",{attrs:{href:"tel:03-3251-7881"}},[t._v("03-3251-7881")])]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("労働関係に関すること"))),n("br"),n("a",{attrs:{href:"tel:0570-00-6110"}},[t._v("0570-00-6110")])])])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("都立学校に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("教育庁")))]),t._v(" "),t._m(1)]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("スムーズビズに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("都市整備局")))]),t._v(" "),t._m(2)]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("都営交通に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("交通局")))]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{attrs:{href:"tel:03-3816-5700"}},[t._v("03-3816-5700")]),n("br"),t._v("\n            "+t._s(t.$t("（都営交通お客様センター）"))+"\n          ")])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("ご家庭でのマスク等の捨て方に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("環境局")))]),t._v(" "),t._m(3)])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:03-5388-2171"}},[this._v("03-5388-2171")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:03-5320-6705"}},[this._v("03-5320-6705")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:03-5388-3317"}},[this._v("03-5388-3317")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:03-5388-3581"}},[this._v("03-5388-3581")])])}],!1,null,null,null);e.default=component.exports}}]);