(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{38:function(e,t,n){e.exports=n(65)},43:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(33),c=n.n(l),o=(n(43),n(19)),i=n(1),u=n(11),s=n(12),d=n(14),p=n(13),h=n(7),m=n.n(h),f=n(8),g=n(9);function E(){var e=Object(f.a)(["\n  margin: 2px;\n  padding: 4px;\n  font-size: 1.02rem;\n"]);return E=function(){return e},e}function b(){var e=Object(f.a)(["\n  border: 2px solid #ccc;\n  border-radius: 5px;\n  outline: none;\n  padding: 8px;\n  margin: 2px;\n  font-size: 0.95rem;\n"]);return b=function(){return e},e}var v=g.a.input(b()),w=g.a.p(E());function x(e){return e.children}function y(e){return r.a.createElement(x,null,r.a.createElement(w,null,e.label),r.a.createElement(v,{type:e.type,placeholder:e.placeholder,onChange:e.change}))}function k(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  border: none;\n  margin: 5px;\n  padding: 10px;\n  border-radius: 8px;\n  height: 200%;\n  width: 4rem;\n  letter-spacing: .3px;\n  background-color: ",";\n  color: white;\n  outline: none;\n  cursor: pointer;\n  }\n"]);return k=function(){return e},e}var j=g.a.button(k(),(function(e){return e.background}));function O(e){return r.a.createElement(j,{onClick:e.click,background:e.background},e.children)}var H=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{email:null,password:null},token:null},e.loginHandler=function(){m.a.post("https://shortenerapi.azurewebsites.net/entrar",e.state.credentials).then((function(t){var n=t.data.mensagem;localStorage.setItem("Authorization","Bearer "+n),e.setState({token:n,credentials:{password:null}})})).catch((function(e){return console.log(e)}))},e.inputHandler=function(t,n){var a=e.state.credentials;a[n]=t.target.value,e.setState({credentials:a})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex","flex-direction":"column","align-items":"center","margin-top":"13%"}},r.a.createElement(y,{label:"Insira seu e-mail:",change:function(t){return e.inputHandler(t,"email")},type:"email",placeholder:"email"}),r.a.createElement(y,{label:"Insira sua senha:",change:function(t){return e.inputHandler(t,"password")},type:"password",placeholder:"password"}),r.a.createElement("a",{style:{padding:"10px"},href:"/registrar"},"Ainda n\xe3o tenho uma conta."),r.a.createElement(O,{background:"#1390fc",click:this.loginHandler},"Entrar"),this.state.token?r.a.createElement(i.a,{to:"/perfil"}):null)}}]),n}(a.Component),R=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{email:null,password:null,confirmPassword:null},success:!1},e.inputHandler=function(t,n){var a=e.state.credentials;a[n]=t.target.value,e.setState({credentials:a})},e.registerHandler=function(){m.a.post("https://shortenerapi.azurewebsites.net/registrar",e.state.credentials).then((function(t){console.log(t.data.success),e.setState({success:t.data.success,credentials:{password:null,confirmPassword:null}})})).catch((function(e){return console.log(e)}))},e.inputHandler=function(t,n){var a=e.state.credentials;a[n]=t.target.value,e.setState({credentials:a})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex","flex-direction":"column","align-items":"center","margin-top":"13%"}},r.a.createElement(y,{label:"Insira seu e-mail:",change:function(t){return e.inputHandler(t,"email")},type:"email",placeholder:"email"}),r.a.createElement(y,{label:"Insira sua senha:",change:function(t){return e.inputHandler(t,"password")},type:"password",placeholder:"password"}),r.a.createElement(y,{label:"Confirme sua senha:",change:function(t){return e.inputHandler(t,"confirmPassword")},type:"password",placeholder:"password"}),r.a.createElement(O,{background:"#1390fc",click:this.registerHandler},"Registrar"),this.state.success?r.a.createElement(i.a,{to:"/entrar"}):null)}}]),n}(a.Component),S=n(37);function z(){var e=Object(f.a)(["\n  font-size: 1.02rem;\n  font-weight: 600; \n  padding: 2px;\n  color: ",";\n"]);return z=function(){return e},e}function I(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  border-radius: 8px;\n  width: 20%;\n  margin: 15px auto;\n  padding: 10px;\n  background-color: #f5f5f5;\n  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.1);\n\n  @media(max-width: 800px){\n    width: 100%;\n    align-items: center;\n  }\n"]);return I=function(){return e},e}var A=g.a.div(I()),U=g.a.span(z(),(function(e){return e.color}));function C(e){return r.a.createElement(x,null,r.a.createElement(A,null,r.a.createElement("p",null,r.a.createElement(U,{color:"#032d38"},"Url Encurtada:"),e.urlEncurtada),r.a.createElement("p",null,r.a.createElement(U,{color:"#032d38"},"Url Real:")," ",e.urlReal),r.a.createElement("p",null,r.a.createElement(U,{color:"#032d38"},"Acessos Redirecionados:"),r.a.createElement(U,{color:"#068bb8"},e.acessos))))}var J=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a.inputHandler=function(e){var t=a.state.urlReal;t=e.target.value,a.setState({urlReal:t})},a.urlHandler=function(){var e=JSON.stringify({urlReal:a.state.urlReal});m.a.post("https://shortenerapi.azurewebsites.net/encurtar",e,{headers:{Authorization:localStorage.getItem("Authorization"),"Content-Type":"application/json"}}).then((function(e){var t=[].concat(Object(S.a)(a.state.data),[e.data]);a.setState({urlReal:null,data:t,ultimaUrlEncurtada:e.data.urlEncurtada})})).catch((function(e){return console.log(e)}))},a.state={data:null,error:!1,loading:!0,urlReal:null,ultimaUrlEncurtada:null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://shortenerapi.azurewebsites.net/perfil",{headers:{Authorization:localStorage.getItem("Authorization")}}).then((function(t){e.setState({loading:!1,data:t.data})})).catch((function(t){return e.setState({error:!0})}))}},{key:"render",value:function(){var e=this,t=this.state.data?this.state.data.map((function(e){return r.a.createElement(C,{urlEncurtada:e.urlEncurtada,urlReal:e.urlReal,acessos:e.acessos})})):null,n=r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex","align-items":"center","flex-direction":"column"}},r.a.createElement("h2",{style:{"text-align":"center"}},"Encurte uma nova URL"),r.a.createElement(y,{change:function(t){return e.inputHandler(t)},type:"text",label:"Insira a URL que ir\xe1 encurtar:",placeholder:"http://localhost:3000/"}),this.state.ultimaUrlEncurtada?r.a.createElement("a",{href:"http://localhost:3000/".concat(this.state.ultimaUrlEncurtada)},"http://localhost:3000/",this.state.ultimaUrlEncurtada):null,r.a.createElement(O,{click:this.urlHandler,background:"#00a0cc"}," ","Encurtar"," ")),r.a.createElement("div",{style:{width:"100%",display:"flex","flex-wrap":"wrap"}},t));return r.a.createElement("div",null,this.state.loading?null:n,this.state.error?r.a.createElement(i.a,{to:"/entrar"}):null)}}]),n}(a.Component);function P(){var e=window.location.href,t=e.lastIndexOf("/"),n=e.substring(t+1,e.length);return m.a.get("https://shortenerapi.azurewebsites.net/".concat(n)).then((function(e){return window.location.href=function(e){var t=e.search("http://"),n=e.search("https://");return t>=0||n>=0?e:"https://"+e}(e.data.url)})).catch((function(e){return console.log(e)})),r.a.createElement("h1",null," ")}function B(){return r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/entrar"},r.a.createElement(H,null)),r.a.createElement(i.b,{path:"/registrar"},r.a.createElement(R,null)),r.a.createElement(i.b,{path:"/perfil"},r.a.createElement(J,null)),r.a.createElement(i.b,{path:"/"},r.a.createElement(P,null)))}var L=function(){return r.a.createElement(o.a,{basename:"/front-end-url-shortener"},r.a.createElement(B,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d87d1cff.chunk.js.map