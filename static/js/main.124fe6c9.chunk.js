(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(15),a(1)),m=a(2),u=a(4),l=a(3),i=a(5),p=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"ELF Computing | Laptops"))},d=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.features;return r.a.createElement("form",{className:"main__form"},r.a.createElement("h2",null,"Customize your laptop"),e)}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.features;return r.a.createElement(d,{features:e})}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.features;return r.a.createElement(f,{features:e})}}]),t}(n.Component),h=function(e){return e.summary},b=function(e){var t=e.USCurrencyFormat,a=e.total;return r.a.createElement("div",{className:"summary__total"},r.a.createElement("div",{className:"summary__total__label"},"Total"),r.a.createElement("div",{className:"summary__total__value"},t.format(a)))},E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.summary,a=e.USCurrencyFormat,n=e.total;return r.a.createElement("section",{className:"main__summary"},r.a.createElement("h2",null,"Your cart"),r.a.createElement(h,{summary:t}),r.a.createElement(b,{USCurrencyFormat:a,total:n}))}}]),t}(n.Component),_=a(6),v=a.n(_),O=(a(16),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={selected:{Processor:{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},"Operating System":{name:"Ubuntu Linux 16.04",cost:200},"Video Card":{name:"Toyota Corolla 1.5v",cost:1150.98},Display:{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500}}},a.FEATURES={Processor:[{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},{name:"Professor X AMD Fire Breather with sidewinder technology",cost:1200}],"Operating System":[{name:"Ubuntu Linux 16.04",cost:200},{name:"Bodhi Linux",cost:300}],"Video Card":[{name:"Toyota Corolla 1.5v",cost:1150.98},{name:"Mind mild breeze 2000",cost:1345}],Display:[{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500},{name:'15.3" HGTV (3840 x 2160) Home makeover edition',cost:1400}]},a.updateFeature=function(e,t){var n=Object.assign({},a.state.selected);n[e]=t,a.setState({selected:n})},a}return Object(i.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.FEATURES).map(function(t,a){var n=t+"-"+a,c=e.FEATURES[t].map(function(a){var n=v()(JSON.stringify(a));return r.a.createElement("div",{key:n,className:"feature__item"},r.a.createElement("input",{type:"radio",id:n,className:"feature__option",name:v()(t),checked:a.name===e.state.selected[t].name,onChange:function(n){return e.updateFeature(t,a)}}),r.a.createElement("label",{htmlFor:n,className:"feature__label"},a.name," (",O.format(a.cost),")"))});return r.a.createElement("fieldset",{className:"feature",key:n},r.a.createElement("legend",{className:"feature__name"},r.a.createElement("h3",null,t)),c)}),a=Object.keys(this.state.selected).map(function(t,a){var n=t+"-"+a,c=e.state.selected[t];return r.a.createElement("div",{className:"summary__option",key:n},r.a.createElement("div",{className:"summary__option__label"},t," "),r.a.createElement("div",{className:"summary__option__value"},c.name),r.a.createElement("div",{className:"summary__option__cost"},O.format(c.cost)))}),n=Object.keys(this.state.selected).reduce(function(t,a){return t+e.state.selected[a].cost},0);return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement("main",null,r.a.createElement(y,{features:t}),r.a.createElement(E,{summary:a,USCurrencyFormat:O,total:n})))}}]),t}(n.Component);s.a.render(r.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.124fe6c9.chunk.js.map