(this.webpackJsonpweather_web=this.webpackJsonpweather_web||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c);a(12),a(13),a(14);var o=function(){return r.a.createElement("header",{className:"bg-dark text-light py-5 text-center"},r.a.createElement("h1",null,"Weather Website"))},i=function(){return r.a.createElement("footer",{className:"bg-dark text-light py-5 text-center"},r.a.createElement("p",null,"Copyright \xa9 2020"))},s=a(1),u=a(2),m=a(4),h=a(3),d=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={cityName:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"card my-5 py-5 px-5"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"email",class:"form-control",id:"exampleFormControlInput1",placeholder:"Search",value:this.state.cityName,onChange:function(t){return e.setState({cityName:t.target.value})}})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){return e.props.handleSearchClick(e.state.cityName)}},"Search"))))}}]),a}(r.a.Component);var p=function(e){var t=e.weathers,a=e.handleWeatherSelect;return r.a.createElement("div",{className:"card my-5 py-5 px-5 text-center"},r.a.createElement("h1",null,"This is a weather table section"),r.a.createElement("table",null,r.a.createElement("thead",null),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.dt,onClick:function(){return a(e)}},r.a.createElement("td",null," ",r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")})),r.a.createElement("td",null,e.weather[0].main),r.a.createElement("td",null,new Date(1e3*e.dt).toDateString()),r.a.createElement("td",null,e.temp.day.toFixed(0)," \xb0 C"))})))))},f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSearchClick=function(t){console.log("clicked"),e.fetchApi("Kuala Lumpur")},e.handleWeatherSelect=function(t){console.log(t);var a=e.state.weathers.filter((function(e){return e.dt===t}));e.setState({selectedWeather:a})},e.state={weathers:[],selectedWeather:null},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container py-3 card my-3"},r.a.createElement(d,{handleSearchClick:this.handleSearchClick}),r.a.createElement(p,{weathers:this.state.weathers,handleWeatherSelect:this.handleWeatherSelect}))}},{key:"componentDidMount",value:function(){}},{key:"fetchApi",value:function(e){var t=this;fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q="+e+"&appid=9a875f3b663d836442770050455b2fbf&units=metric").then((function(e){return e.json()})).then((function(e){t.setState({weathers:e.list})})).catch((function(e){console.error("Error",e)}))}}]),a}(r.a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(f,null),r.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.57339c2d.chunk.js.map