(this.webpackJsonplab5=this.webpackJsonplab5||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),l=a(12),c=a(11),u=a(0),s=a.n(u),i=a(10),o=a.n(i),m=a(18),h=a(1),d=(a(25),a(26),function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={data:[],isLoading:!0},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.exchangeratesapi.io/latest?base=RUB").then((function(e){return e.json()})).then((function(t){e.setState({data:t.rates,isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?s.a.createElement("h1",null,"Loading..."):s.a.createElement("div",{className:"Table"},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"TableHeader"},"\u041a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b"),s.a.createElement("th",{className:"TableHeader"},"\u041f\u043e\u043b\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0430\u043b\u044e\u0442\u044b"),s.a.createElement("th",{className:"TableHeader"},"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442\u044b \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u0440\u0443\u0431\u043b\u044e")),this.getExchangeData())))}},{key:"getExchangeData",value:function(){for(var e=[],t=["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"],a=["\u041a\u0430\u043d\u0430\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u0413\u043e\u043d\u043a\u043e\u043d\u0433\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u0418\u0441\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","\u0414\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u0412\u0435\u043d\u0433\u0435\u0440\u0441\u043a\u0438\u0439 \u0444\u043e\u0440\u0438\u043d\u0442","\u0427\u0435\u0448\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u0424\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432","\u0420\u0443\u043c\u044b\u043d\u0441\u043a\u0438\u0439 \u043b\u0435\u0439","\u0428\u0432\u0435\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","\u0418\u043d\u0434\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","\u0411\u0440\u0430\u0437\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0440\u0435\u0430\u043b","\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c","\u0425\u043e\u0440\u0432\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0443\u043d\u0430","\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u0435\u043d\u0430","\u0422\u0430\u0439\u0441\u043a\u0438\u0439 \u0431\u0430\u0442","\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0444\u0440\u0430\u043d\u043a","\u0415\u0432\u0440\u043e","\u041c\u0430\u043b\u0430\u0439\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0438\u043d\u0433\u0433\u0438\u0442","\u0411\u043e\u043b\u0433\u0430\u0440\u0441\u043a\u0438\u0439 \u043b\u0435\u0432","\u0422\u0443\u0440\u0435\u0446\u043a\u0430\u044f \u043b\u0438\u0440\u0430","\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044e\u0430\u043d\u044c","\u041d\u043e\u0440\u0432\u0435\u0436\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u041d\u043e\u0432\u043e\u0437\u0435\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u042e\u0436\u043d\u043e\u0430\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0440\u044d\u043d\u0434","\u0414\u043e\u043b\u043b\u0430\u0440","\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u0418\u0437\u0440\u0430\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0448\u0435\u043a\u0435\u043b\u044c","\u042e\u0436\u043d\u043e\u043a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0432\u043e\u043d\u0430","\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u043b\u043e\u0442\u044b\u0439"],n=this.state.data,r=0;r<t.length;r++){var l=t[r],c=a[r],u=n[t[r]];e.push(s.a.createElement("tr",null,s.a.createElement("th",null,l),s.a.createElement("th",null,c),s.a.createElement("th",null,u)))}return e}}]),a}(u.Component)),E=d;o.a.render(s.a.createElement(d,null),document.getElementById("root"));var b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(m.a,null,this.renderHeader(),s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/"},s.a.createElement(E,null))))}},{key:"renderHeader",value:function(){return s.a.createElement("div",{className:"headerContainer"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"\u041a\u041e\u041d\u0412\u0415\u0420\u0422\u0415\u0420 \u0412\u0410\u041b\u042e\u0422"),s.a.createElement("div",{className:"userInfo"},s.a.createElement("a",{href:"#/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),s.a.createElement("button",{className:"btn-login"},"\u0412\u043e\u0439\u0442\u0438"))))}}]),a}(u.Component);t.default=b;o.a.render(s.a.createElement(b,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.56ca1c94.chunk.js.map