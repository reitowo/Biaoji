(this["webpackJsonpk1ee-tools"]=this["webpackJsonpk1ee-tools"]||[]).push([[0],{51:function(t,e,n){},52:function(t,e,n){},61:function(t,e){},63:function(t,e){},79:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),s=(n(51),n(20)),o=n(21),l=n(23),u=n(22),d=(n(52),n(83)),j=n(82),h=n(46),b=n(84),O=n(45),x=n(30),f=n(26),p=n(44),m=n(4);var v=function(t){return Object(m.jsxs)(f.a,Object(x.a)(Object(x.a)({},t),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(m.jsx)(f.a.Header,{closeButton:!0,children:Object(m.jsx)(p.a,{animation:"border",role:"status",children:Object(m.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(m.jsxs)(f.a.Body,{children:[Object(m.jsx)("h4",{children:"\u6b63\u5728\u5904\u7406"}),Object(m.jsx)("p",{children:"\u6b63\u5728\u4e0b\u8f7d\u5e76\u6807\u8bb0\u5f39\u5e55\ud83d\udc40\uff0c\u901f\u5ea6\u4e0e\u672c\u673a\u7f51\u901f\u6709\u5173\uff0c\u8bf7\u7a0d\u7b49\u3002"})]})]}))},g=n(56),y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleChange=function(t){a.setState({matsuriDetailId:t.target.value})},a.doFilter=function(t,e){for(var n=JSON.parse(t).data,c=[],r=0;r<n.length;++r){var i=n[r];void 0!==i.text&&i.text.includes(e)&&c.push(i)}var s="";for(r=0;r<c.length;++r)i=c[r],s+="".concat(i.username," (").concat(i.user_id,"): ").concat(i.text,"\r\n");a.setState({downloading:!1,outputStr:s})},a.handleSubmit=function(t){var e=a.doFilter,n=a.cache,c=t.target.searchFor.value;if(0!==c.length){var r=t.target.matsuriId.value;if(r in a.cache)e(a.cache[r],c);else{var i="https://api.matsuri.icu/clip/".concat(r,"/comments");a.setState({downloading:!0}),g.get(i,(function(t){var a="";t.on("data",(function(t){a+=t})),t.on("end",(function(){n[r]=a,e(a,c)}))})).on("error",(function(t){alert("\u4e0b\u8f7d\u9519\u8bef"),a.setState({downloading:!1})}))}t.preventDefault()}else alert("\u6807\u8bb0\u5185\u5bb9\u8fc7\u77ed")},a.state={matsuriDetailId:"",downloading:!1,outputStr:""},a.cache={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(O.a,{fluid:!0,children:[Object(m.jsxs)(d.a,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(d.a.Group,{controlId:"matsuriId",children:[Object(m.jsx)(d.a.Label,{children:"\u76f4\u64ad\u8be6\u60c5\u5730\u5740"}),Object(m.jsxs)(j.a,{className:"mb-3",children:[Object(m.jsx)(j.a.Prepend,{children:Object(m.jsx)(j.a.Text,{children:"https://matsuri.icu/detail/"})}),Object(m.jsx)(h.a,{type:"text",defaultValue:"ROoKW2xfgG1OR6BE"})]}),Object(m.jsxs)(d.a.Text,{className:"text-muted",children:["\u8bbf\u95ee ",Object(m.jsx)("a",{href:"https://matsuri.icu",target:"_blank",rel:"noreferrer",children:"matsuri.icu"})," \u83b7\u53d6\u76f4\u64ad\u8be6\u60c5\u9875\u5730\u5740"]})]}),Object(m.jsxs)(d.a.Group,{controlId:"searchFor",children:[Object(m.jsx)(d.a.Label,{children:"\u5173\u952e\u8bcd"}),Object(m.jsx)(d.a.Control,{type:"text",defaultValue:"\u5feb\u5feb\u5feb"})]}),Object(m.jsx)(d.a.Group,{children:Object(m.jsx)(b.a,{variant:"primary",type:"submit",children:" \u6807\u8bb0\ud83d\udc40 "})}),Object(m.jsx)(d.a.Group,{controlId:"output",children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(j.a.Prepend,{children:Object(m.jsx)(j.a.Text,{children:"\u6446\u70c2\u8f93\u51fa"})}),Object(m.jsx)(h.a,{as:"textarea",style:{height:"300px"},value:this.state.outputStr,readOnly:!0})]})})]}),Object(m.jsx)(v,{show:this.state.downloading})]})}}]),n}(c.a.Component),I=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={date:new Date},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("br",{}),Object(m.jsx)("h1",{children:"\u6807\u8bb0\ud83d\udc40"}),Object(m.jsx)("br",{}),Object(m.jsx)(y,{})]})})}}]),n}(c.a.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};n(78);i.a.render(Object(m.jsx)(I,{}),document.getElementById("root")),S()}},[[79,1,2]]]);
//# sourceMappingURL=main.f3b278d6.chunk.js.map