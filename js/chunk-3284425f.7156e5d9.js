(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3284425f"],{"8b24":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{attrs:{id:"index"}},[e("section",{staticClass:"blog-posts"},t._l(t.blogs,(function(a,n){return e("router-link",{key:n,staticClass:"item",attrs:{to:"/detail/"+a.id}},[e("figure",{staticClass:"avatar"},[e("img",{attrs:{src:a.user.avatar,alt:a.user.username}}),e("figcaption",[t._v(t._s(a.user.username))])]),e("h3",[t._v(t._s(a.title)),e("span",[t._v(t._s(t.beautyDate(a.createdAt)))])]),e("p",[t._v(t._s(a.description))])])})),1),e("section",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.onPageChange}})],1)])])},s=[],o=e("ebad"),r=e("864d"),i={name:"Index",components:{Layout:o["a"]},data:function(){return{total:0,page:1,blogs:[]}},created:function(){var t=this;this.page=parseInt(this.$route.query.page||"1"),r["a"].getIndexBlogs({page:this.page}).then((function(a){console.log(a),t.blogs=a.data,t.total=a.total,t.page=a.page}))},methods:{onPageChange:function(t){var a=this;r["a"].getIndexBlogs({page:t}).then((function(e){console.log(e),a.blogs=e.data,a.total=e.total,a.page=e.page,a.$router.push({path:"/",query:{page:t}})}))}}},u=i,c=(e("aee2"),e("2877")),l=Object(c["a"])(u,n,s,!1,null,"0f0ecd69",null);a["default"]=l.exports},aee2:function(t,a,e){"use strict";var n=e("b456"),s=e.n(n);s.a},b456:function(t,a,e){}}]);
//# sourceMappingURL=chunk-3284425f.7156e5d9.js.map