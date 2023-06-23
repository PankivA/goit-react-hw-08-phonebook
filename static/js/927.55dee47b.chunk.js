"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[927],{3927:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(9434),a=t(2791),s=t(1614),o=t(3634),i=t(4515),c=t(4942),l=t(1413),u=t(9439),d=t(890),h=t(6151),m="ContactForm_form__xMklr",x="ContactForm_label__YXYvo",p=t(4141),f=t(3329),j={name:"",number:""},v=function(){var e=(0,a.useState)(j),n=(0,u.Z)(e,2),t=n[0],s=n[1],i=(0,r.I0)(),v=(0,r.v9)(p.mk),b=function(e){var n=e.target,t=n.name,r=n.value;s((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,c.Z)({},t,r))}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{variant:"h4",component:"h4",sx:{p:1},children:"Phonebook"}),(0,f.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault();var n=t,r=n.name.toLowerCase();if(v.some((function(e){return e.name.toLowerCase()===r}))){var a=n.name+" is already in contacts.";alert(a)}else i((0,o.uK)((0,l.Z)({},n))),s(j)},children:[(0,f.jsxs)("label",{className:x,children:["Name",(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t.name,onChange:b})]}),(0,f.jsxs)("label",{className:x,children:["Number",(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:t.number,onChange:b})]}),(0,f.jsx)(h.Z,{type:"submit",sx:{mt:1},color:"secondary",variant:"outlined",children:"Add contact"})]})]})},b=t(4554),Z=t(493),g=t(5021),C=t(6259),y=t(6278),_=t(9333),k=t(7247),w=function(){var e=(0,r.v9)(p.F4),n=(0,r.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{variant:"h4",component:"h4",sx:{p:1,pt:3},children:"Contacts"}),(0,f.jsx)(b.Z,{sx:{width:"100%",maxWidth:450,bgcolor:"background.paper",justifyContent:"space-between",pl:2},children:(0,f.jsx)(Z.Z,{children:e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,f.jsxs)(g.ZP,{disablePadding:!0,children:[(0,f.jsxs)(C.Z,{sx:{flexGrow:1},children:[r," ",a]}),(0,f.jsxs)(y.Z,{type:"button",color:"",onClick:function(){return e=t,void n((0,o.GK)(e));var e},sx:{p:1,justifyContent:"right",maxWidth:110},children:[(0,f.jsx)(d.Z,{variant:"subtitle2",children:"Delete"}),(0,f.jsx)(_.Z,{children:(0,f.jsx)(k.Z,{})})]})]},t)}))})})]})},F=t(1787),N=t(5653),A=function(e){return e.filter},z=function(){var e=(0,r.I0)(),n=(0,r.v9)(A);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(b.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:400}},noValidate:!0,autoComplete:"off",children:(0,f.jsxs)("div",{children:[" ",(0,f.jsx)(F.Z,{id:"outlined-filter-input",label:"Find a contact by name",type:"text",name:"filter",required:!0,value:n,onChange:function(n){e((0,N.T)(n.currentTarget.value))},color:"secondary"})]})})})},I=function(){var e=(0,r.I0)(),n=(0,r.v9)(p.Vc),t=(0,r.v9)(p.by);(0,a.useEffect)((function(){e((0,o.yF)())}),[e]);var c=(0,r.v9)(p.F4),l=Boolean(c.length);return(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(v,{}),(0,f.jsx)(z,{}),n&&!t&&(0,f.jsx)(i.Z,{}),l&&(0,f.jsx)(w,{}),!l&&!n&&(0,f.jsx)("p",{children:"No contacts in the list"})]})};function P(){return(0,f.jsx)(s.Z,{children:(0,f.jsx)(I,{})})}}}]);
//# sourceMappingURL=927.55dee47b.chunk.js.map