(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,n){},146:function(e){e.exports=[{key:"1",locality:"Irkutsk",system:"Billing",description:"Billing doesn't work in Irkutsk from 6 am",entryid:"000001",isopen:1,bdate:"2018-01-01 06:00:00",edate:""},{key:"2",locality:"Rostov-on-Don",system:"CRM",description:"There is something wrong with CRM sytem",entryid:"000002",isopen:0,bdate:"2018-02-01 09:00:00",edate:"2018-02-01 10:00:00"},{key:"3",locality:"Saransk",system:"Mail",description:"All users have a problem with mail",entryid:"000003",isopen:0,bdate:"2018-02-01 09:00:00",edate:"2018-02-01 10:00:00"},{key:"4",locality:"Chelyabinsk",system:"Internet",description:"Internet connection lost",entryid:"000004",isopen:0,bdate:"2018-02-01 09:00:00",edate:"2018-02-01 10:00:00"}]},182:function(e,t,n){e.exports=n(349)},187:function(e,t,n){},349:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),l=n.n(o),i=(n(187),n(42)),c=n(43),s=n(45),d=n(44),u=n(46),m=n(354),p=(n(130),n(163)),f=n(358),v=n(110),h=n(356),b=[{dataIndex:"locality",title:"Locality (City)",visible:!0,required:!0,sorter:function(e,t){return(""+e.locality).localeCompare(t.locality)},onFilter:function(e,t){return 0===t.locality.indexOf(e)},filters:[{text:"Irkutsk",value:"Irkutsk"},{text:"Rostov",value:"Rostov"},{text:"Saransk",value:"Saransk"},{text:"Chelyabinsk",value:"Chelyabinsk"}],formComponent:r.a.createElement(p.a,null,r.a.createElement(p.a.Option,{value:"0"},"Irkutsk"),r.a.createElement(p.a.Option,{value:"1"},"Rostov-on-Don"),r.a.createElement(p.a.Option,{value:"2"},"Saransk"),r.a.createElement(p.a.Option,{value:"3"},"Chelyabinsk"))},{dataIndex:"system",title:"System name",visible:!0,required:!1,sorter:function(e,t){return e.system>t.system},formComponent:r.a.createElement(p.a,null,r.a.createElement(p.a.Option,{value:"0"},"BPM"),r.a.createElement(p.a.Option,{value:"1"},"CRM"),r.a.createElement(p.a.Option,{value:"2"},"Mail"),r.a.createElement(p.a.Option,{value:"3"},"Internet"))},{dataIndex:"description",title:"Description",visible:!1,required:!1,formComponent:r.a.createElement(f.a.TextArea,{autosize:{minRows:2}})},{dataIndex:"entryid",title:"BPM Ticket",visible:!0,required:!1,render:function(e){return r.a.createElement("a",{href:"https://bpmonline.com/?tt=".concat(e),target:"_blank",rel:"noreferrer noopener"},e)},formComponent:r.a.createElement(f.a,null)},{dataIndex:"isopen",title:"Is open?",visible:!0,required:!1,render:function(e,t){return r.a.createElement(v.a,{disabled:!0,checked:e})},sorter:function(e,t){return e.isopen-t.isopen},onFilter:function(e,t){return parseInt(e)===t.isopen},filters:[{text:"Open",value:1},{text:"Close",value:0}],formComponent:r.a.createElement(v.a,null)},{dataIndex:"bdate",title:"Date start",visible:!1,required:!1,formComponent:r.a.createElement(h.a,null)},{dataIndex:"edate",title:"Date end",visible:!1,required:!1,formComponent:r.a.createElement(h.a,null)}],E=b.filter(function(e){return e.visible}),k=n(146),y=function(e){return b.filter(function(e){return!e.visible}).map(function(t){return r.a.createElement("div",{key:t.dataIndex},r.a.createElement("b",null,t.title,":")," ",e[t.dataIndex])})},O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{columns:E,dataSource:k,expandedRowRender:y,pagination:!1,size:"middle",rowClassName:function(e,t){return e.isopen?"ticket-opened":"ticket-closed"}})}}]),t}(r.a.Component),I=n(180),x=n(30),C=n(351),g=n(355),w=n(357),M=n(12),j=n.n(M),R=g.a.create()(function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("Render ModalForm, record =",this.props.record);var e=this.props,t=e.visible,n=e.onCancel,a=e.onOk,o=e.form,l=e.record,i=o.getFieldDecorator,c={labelCol:{span:6},wrapperCol:{span:18}},s=b.map(function(e){var t=null;return l&&(t="bdate"!==e.dataIndex&&"edate"!==e.dataIndex||!j()(l[e.dataIndex]).isValid()?l[e.dataIndex]:j()(l[e.dataIndex])),r.a.createElement(g.a.Item,Object.assign({},c,{label:e.title,key:e.dataIndex}),i(e.dataIndex,{rules:[{required:e.required,message:"Please Input ".concat(e.title,"!")}],valuePropName:"isopen"===e.dataIndex?"checked":"value",initialValue:t})(e.formComponent))});return r.a.createElement(w.a,{visible:t,title:"Ticket properties",onCancel:n,onOk:a},r.a.createElement(g.a,null,s))}}]),t}(r.a.Component)),S=n(146),T=function(e){return b.filter(function(e){return!e.visible}).map(function(t){return r.a.createElement("div",{key:t.dataIndex},r.a.createElement("b",null,t.title,":")," ",e[t.dataIndex])})},F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isModalOpen:!1,modalRecord:{}},n.showModal=function(e){n.setState({isModalOpen:!0,modalRecord:e})},n.handleModalCancel=function(){n.setState({isModalOpen:!1})},n.handleModalOk=function(){var e=n.formRef.props.form;e.validateFields(function(t,a){t||(console.log("Received values of form: ",a),e.resetFields(),n.setState({isModalOpen:!1}))})},n.saveFormRef=function(e){n.formRef=e},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;console.info("TableTicketsAdmin render");var t=Object(I.a)(E).concat([{title:"Action",dataIndex:"action",render:function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{shape:"circle",icon:"edit",title:"edit",onClick:function(){return e.showModal(n)}}),"\xa0",r.a.createElement(C.a,{title:"Sure to cancel?",onConfirm:function(){return console.log(n.key)}},r.a.createElement(x.a,{shape:"circle",icon:"delete",title:"delete"})))}}]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{type:"primary",onClick:function(){return e.showModal(null)}},"New Ticket"),r.a.createElement(R,{wrappedComponentRef:this.saveFormRef,visible:this.state.isModalOpen,onCancel:this.handleModalCancel,onOk:this.handleModalOk,record:this.state.modalRecord}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{columns:t,dataSource:S,expandedRowRender:T,pagination:!1,size:"middle",rowClassName:function(e,t){return e.isopen?"ticket-opened":"ticket-closed"}}))}}]),t}(r.a.Component),q=n(352),A=n(359),N=n(179),B=n(10),D=n(177),P=n.n(D),z=n(360),H=n(353),_=n(362),J=n(361),V=n(363),W=function(e,t){return t.some(function(t){return e.roles.includes(t)})},L={roles:["admin"],rights:["can_view_articles"]},$=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={user:L},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(q.a,{locale:P.a},r.a.createElement(z.a,null,r.a.createElement(A.a,null,r.a.createElement(A.a.Header,null,r.a.createElement("div",{className:"h-logo"},"ITSM"),r.a.createElement(N.a,{mode:"horizontal",theme:"dark",style:{lineHeight:"64px"}},r.a.createElement(N.a.Item,null,r.a.createElement(H.a,{to:"/"},"Tickets")),W(t,["admin"])&&r.a.createElement(N.a.Item,null,r.a.createElement(H.a,{to:"admin"},"Admin"))),r.a.createElement("div",{className:"h-user"},r.a.createElement(B.a,{type:t.roles.includes("admin")?"logout":"login",title:t.roles.includes("admin")?"logout":"login",onClick:function(){return e.setState(function(e){return{user:{roles:e.user.roles.includes("admin")?["user"]:["admin"]}}})}}))),r.a.createElement(A.a.Content,{style:{padding:"0 50px"}},r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"calc(100vh - 64px - 68px)"}},r.a.createElement(_.a,null,r.a.createElement(J.a,{exact:!0,from:"/",to:"/ITSM/"}),r.a.createElement(V.a,{exact:!0,path:"/ITSM",component:O}),W(t,["admin"])&&r.a.createElement(V.a,{exact:!0,path:"/ITSM/admin",component:F}),r.a.createElement(V.a,{component:function(){return r.a.createElement("div",null,"404. Page Not Found")}})))),r.a.createElement(A.a.Footer,{style:{textAlign:"center"}},"IT Service Management \xa9"," ",r.a.createElement("a",{href:"https://github.com/baitun/ITSM"},"baitun")))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[182,2,1]]]);
//# sourceMappingURL=main.2994c4d8.chunk.js.map