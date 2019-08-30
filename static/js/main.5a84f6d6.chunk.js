(window["webpackJsonpherolo-test"]=window["webpackJsonpherolo-test"]||[]).push([[0],{61:function(e,t,a){e.exports=a(75)},66:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(66),a(13)),s=a(12),l=a(14),u=a(15),h=a(16),m=(a(67),a(56)),p=a(126),y=a(57),d=a(116),f=a(121),v=a(43),g=a(123),E=a(111),b=a(112),C=a(113),k=a(108),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.switcher;return r.a.createElement("div",null,r.a.createElement(k.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(b.a,{variant:"h6"},r.a.createElement("a",{style:{textDecoration:"none",color:"white"},href:"/"}," Weather")),r.a.createElement(g.a,{style:j.Tabs,value:this.state.value,onChange:this.handleChange,"aria-label":"simple tabs example"},r.a.createElement(C.a,{label:"Home",onClick:function(){return e("home")}}),r.a.createElement(C.a,{label:"Favourites",onClick:function(){return e("favourites")}})))))}}]),t}(n.Component),j={Tabs:{marginLeft:"auto"}},w=O,F=a(125),I=a(122),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={cities:[{Version:1,Key:"215854",Type:"City",Rank:21,LocalizedName:"Tel Aviv"}]},a.mysSnackBar=function(e){return r.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"}})},a.handleChange=function(e){var t=e.target.value;if(a.getCities(t),0===a.state.cities.length)return r.a.createElement(F.a,null);1===a.state.cities.length&&a.props.updateCity(a.state.cities[0])},a.getCities=function(e){if(e){var t="http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat("z7csEsZvhMGEGXEnWi2HGjF9ZmJUraI2","&q=").concat(e);fetch(t).then(function(e){return e.json()}).then(function(e){return a.setState({cities:e})})}},a.submitCity=function(e){e.preventDefault(),a.state.cities.length>0&&a.props.updateCity(a.state.cities[0])},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.cities;return r.a.createElement("form",{onSubmit:this.submitCity,noValidate:!0,autoComplete:"off"},r.a.createElement(I.a,{style:this.styles,id:"standard-textarea",label:"Find weather",placeholder:1===e.length?this.state.cities[0].LocalizedName:this.props.location,margin:"normal",fullWidth:!0,onChange:this.handleChange}))}}]),t}(n.Component),x=a(30),T=a(55),B=a(114),D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:W.container},r.a.createElement(B.a,{onClick:this.props.addToFavourites,color:"secondary"},r.a.createElement(x.a,{style:W.icon,icon:T.a,size:"2x"}),r.a.createElement("span",{style:{marginLeft:"10px"}},"Add to favourites")))}}]),t}(n.Component),W={myStyle:{color:"yello"},icon:{verticalAlign:"middle",margin:"0 auto"},container:{textAlign:"right",marginTop:"10px"}},G=D,_=a(115),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isFailed:!1,error:null,isLoading:!0,today_forecast:void 0,description:"",temperature:0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getTodayWeatherByLocationKey",value:function(e){var t=this;this.setState({isLoading:!0});var a="https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/".concat(e,"?apikey=z7csEsZvhMGEGXEnWi2HGjF9ZmJUraI2&metric=true");fetch(a).then(function(e){return e.json()}).then(function(e){return t.setState({today_forecast:e[0],temperature:e[0].Temperature.Value,description:e[0].IconPhrase,isLoading:!1})}).catch(function(e){return t.setState({isFailed:!0,isLoading:!1,error:e})})}},{key:"componentDidMount",value:function(){this.getTodayWeatherByLocationKey(this.props.location_key)}},{key:"componentDidUpdate",value:function(e){this.props!==e&&this.getTodayWeatherByLocationKey(this.props.location_key)}},{key:"render",value:function(){if(this.state.isFailed)return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h4"},"There was a problem with the weather fetching"),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error.toString()));var e=this.props.location,t=this.state,a=t.description,n=t.temperature,i=this.props.getIconByDescription(a);return this.state.isLoading?r.a.createElement(_.a,{style:{marginLeft:"100px"}}):r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(x.a,{style:A.icon,icon:i[0],size:"9x",color:i[1]})),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(b.a,{style:A.h1},e),r.a.createElement(b.a,{style:A.h2}," ",n,"\xb0C ")),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"h3",align:"center",style:{marginBottom:"10px"}},a)))}}]),t}(n.Component),A={todayForecast:{color:"blue",display:"inline"},h1:{margin:"10px 34px",fontWeight:"bold"},h2:{margin:"10px 34px"},icon:{float:"right"}},M=L,z=a(117),J=a(118),N=a(119),Z=a(120),H={card:{maxWidth:170,marginBottom:"10px",marginLeft:"10px"},media:{},cardIcon:{verticalAlign:"middle"}},K=function(e){e.fIcon;var t=e.minTemp,a=e.maxTemp,n=e.temperature,i=e.description,o=e.dayOfTheWeek,c=e.city,s=e.hasButton,l=e.removeFromFavourites,u=(e.isDaily,(0,e.getIconByDescription)(i));return r.a.createElement(z.a,{style:H.card},r.a.createElement(J.a,null,r.a.createElement(N.a,null,r.a.createElement(x.a,{icon:u[0],color:u[1],size:"9x",style:H.cardIcon}),r.a.createElement(b.a,{gutterBottom:!0,variant:"h5"},o||c),s?r.a.createElement(b.a,{variant:"body2",color:"textSecondary"},i," ",n,"\xb0C"):r.a.createElement("div",null,i))),s?r.a.createElement(Z.a,null,r.a.createElement(B.a,{onClick:function(){return l(c)},size:"small",color:"primary"},"Remove")):r.a.createElement(Z.a,null,r.a.createElement(b.a,null,"Min ",t,"\xb0C"),r.a.createElement(b.a,null,"Max ",a,"\xb0C")))},U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dailyForeCasts:[]},a.daysOfTheWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a.getWeatherByKey=function(e){var t="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=z7csEsZvhMGEGXEnWi2HGjF9ZmJUraI2&metric=true");fetch(t).then(function(e){return e.json()}).then(function(e){return a.setState({dailyForeCasts:e.DailyForecasts})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getWeatherByKey(this.props.location_key)}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.getWeatherByKey(this.props.location_key)}},{key:"render",value:function(){var e=this,t=[],a=this.state.dailyForeCasts;if(0!==this.state.dailyForeCasts.length)for(var n=0,i=new Date(a[0].Date).getUTCDay();n<5;n++,i=++i%7)t.push(this.daysOfTheWeek[i]);return a?r.a.createElement(d.a,{container:!0,justify:"space-between"},t.map(function(t,n){return r.a.createElement(K,{key:t,dayOfTheWeek:t,minTemp:a[n].Temperature.Minimum.Value,maxTemp:a[n].Temperature.Maximum.Value,description:a[n].Day.IconPhrase,getIconByDescription:e.props.getIconByDescription})})):r.a.createElement(_.a,{style:{marginLeft:"100px"}})}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isFailed:!1,error:null,cities:[],citiesForeCasts:[]},a.removeFromFavourites=function(e){var t=a.state,n=t.cities,r=t.citiesForeCasts,i=[],o=[];n.map(function(t,a){t.location!==e&&(i.push(t),o.push(r[a]))}),localStorage.setItem("favouriteCities",JSON.stringify(i)),a.setState({cities:i,citiesForeCasts:o})},a.fetchWeather=function(){a.state.cities.map(function(e,t){var n="https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/".concat(e.location_key,"?apikey=z7csEsZvhMGEGXEnWi2HGjF9ZmJUraI2&metric=true");fetch(n).then(function(e){return e.json()}).then(function(e){var n=a.state.citiesForeCasts;n[t]=e[0],a.setState({citiesForeCasts:n})}).catch(function(e){a.setState({isFailed:!0,error:e})})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("favouriteCities");e&&this.setState({cities:JSON.parse(e)},this.fetchWeather)}},{key:"render",value:function(){var e=this,t=this.state,a=t.cities,n=t.citiesForeCasts,i=t.isFailed,o=t.error;return i?r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h4"},"There was a problem with the weather fetching"),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},o.toString())):r.a.createElement("div",null,0===a.length?r.a.createElement(b.a,{color:"primary",variant:"h4",style:V.h4},"No favourite cities added"):n.length!==a.length?"Waiting for wather":r.a.createElement(d.a,{container:!0},a.map(function(t,a){return r.a.createElement(K,{removeFromFavourites:e.removeFromFavourites,hasButton:"true",key:t.location_key,city:t.location,temperature:n[a].Temperature.Value,description:n[a].IconPhrase,getIconByDescription:e.props.getIconByDescription})})))}}]),t}(n.Component),V={h4:{textAlign:"center"},card:{maxWidth:170,marginBottom:"10px"},media:{},cardIcon:{color:"orange",verticalAlign:"middle"}},R=P,X=a(34),q=a(35),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h4"},"There was a problem with the weather fetching"),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}})):this.props.children}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).url="https://dataservice.accuweather.com/forecasts/v1/daily/1day/215854?apikey=z7csEsZvhMGEGXEnWi2HGjF9ZmJUraI2=true",a.state={favourites:0,location:"Tel aviv",location_key:215854,description:"",temperature:0},a.addToFavouritesClicked=function(){var e=localStorage.getItem("favouriteCities"),t=[];e?(t=JSON.parse(e),e.includes(a.state.location)||(t.push({location:a.state.location,location_key:a.state.location_key}),localStorage.setItem("favouriteCities",JSON.stringify(t)))):(t.push({location:a.state.location,location_key:a.state.location_key}),localStorage.setItem("favouriteCities",JSON.stringify(t)))},a.switchHomeFavourites=function(e){"home"===e?a.setState({favourites:0}):a.setState({favourites:1})},a.updateCity=function(e){var t=e.LocalizedName,n=e.Key;a.setState({location:t,location_key:n})},a.theme=Object(m.a)({palette:{primary:f.a,secondary:v.a},status:{danger:"orange"}}),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getIconByDescription",value:function(e){switch(e){case"Clear":return["sun","orange"];case"Mostly clear":return["cloud-sun","orange"];case"Sunny":return["sun","orange"];case"Partly sunny":return["cloud-sun","orange"];case"Showers":return["cloud-showers-heavy","#395877"];case"Intermittent clouds":return["cloud-sun","orange"];default:return["cloud","#88c3f1"]}}},{key:"componentDidCatch",value:function(e,t){console.log("CATCHED ERROR",e)}},{key:"render",value:function(){X.b.add(q.a,q.d,q.c,q.b);var e=this.state,t=e.location_key,a=e.location;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{theme:this.theme},r.a.createElement(w,{switcher:this.switchHomeFavourites}),r.a.createElement(y.a,null,this.state.favourites?r.a.createElement($,null,r.a.createElement(R,{getIconByDescription:this.getIconByDescription})):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{style:Y.Paper},r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{item:!0,xs:12,style:Y.GridItem},r.a.createElement(S,{location:this.state.location,updateCity:this.updateCity})),r.a.createElement($,null,r.a.createElement(d.a,{item:!0,xs:6,style:Y.GridItem},r.a.createElement(M,{location_key:t,location:a,getIconByDescription:this.getIconByDescription})),r.a.createElement(d.a,{item:!0,xs:6,style:Y.GridItem},r.a.createElement(G,{addToFavourites:this.addToFavouritesClicked}," "))))),r.a.createElement(d.a,{item:!0,style:Y.GridItem},r.a.createElement($,null,r.a.createElement(U,{city:a,location_key:t,getIconByDescription:this.getIconByDescription})))))))}}]),t}(n.Component),Y={Paper:{width:"100%",marginBottom:"20px"},GridItem:{}},ee=Q;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[61,1,2]]]);
//# sourceMappingURL=main.5a84f6d6.chunk.js.map