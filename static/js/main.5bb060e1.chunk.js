(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={contacts_list:"ContactsList_contacts_list__3qHEv",contacts_item:"ContactsList_contacts_item__2_K3-",contacts_list__button:"ContactsList_contacts_list__button__2dnXf"}},20:function(t,e,n){t.exports={filter:"Filter_filter__32voW",filter__label:"Filter_filter__label__1DoZX"}},7:function(t,e,n){t.exports={form:"Form_form__1YHoI",form__input:"Form_form__input__P6kSS",form__button:"Form_form__button__G7DmD"}},75:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),s=n(14),i=n(15),u=n(18),l=n(16),b=n(5),d=n(23),f=n.n(d),j=n(33),m=n(10),h=n.n(m),_=n(2),O=Object(_.b)("contacts/fetchContactRequest"),p=Object(_.b)("contacts/fetchContactSuccess"),v=Object(_.b)("contacts/fetchContactError"),C=Object(_.b)("contacts/addContactRequest"),x=Object(_.b)("contacts/addContactSuccess"),g=Object(_.b)("contacts/addContactError"),y=Object(_.b)("contacts/deleteContactRequest"),N=Object(_.b)("contacts/deleteContactSuccess"),F=Object(_.b)("contacts/deleteContactError"),I=Object(_.b)("contacts/changeFilter");h.a.defaults.baseURL="http://localhost:4000";var S,k=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(C()),h.a.post("/contacts",c).then((function(e){var n=e.data;return t(x(n))})).catch((function(e){return t(g(e))}))}},w=function(t){return function(e){e(y()),h.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(F(t))}))}},A=function(){return function(){var t=Object(j.a)(f.a.mark((function t(e){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O()),t.prev=1,t.next=4,h.a.get("/contacts");case 4:n=t.sent,c=n.data,e(p(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(v(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},D=n(13),q=function(t){return t.contacts.filter},L={getFilter:q,getFilteredContacts:Object(D.a)([function(t){return t.contacts.items},q],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},z=n(6),E=n(17),R=n(3),Z=Object(_.c)([],(S={},Object(z.a)(S,p,(function(t,e){return e.payload})),Object(z.a)(S,x,(function(t,e){var n=e.payload;return[].concat(Object(E.a)(t),[n])})),Object(z.a)(S,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),S)),J=Object(_.c)("",Object(z.a)({},I,(function(t,e){return e.payload}))),M=Object(_.c)(null,{}),B=Object(R.b)({items:Z,filter:J,error:M}),H=n(19),P=n.n(H),T=n(1),X=Object(b.b)((function(t){return{contacts:L.getFilteredContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(w(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(T.jsx)("ul",{className:P.a.contacts_list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(T.jsxs)("li",{className:P.a.contacts_item,children:[Object(T.jsxs)("p",{children:[c,":"]}),Object(T.jsx)("p",{children:a}),Object(T.jsx)("button",{className:P.a.contacts_list__button,onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})})),G=n(9),K=n.n(G),U=n(7),W=n.n(U),Y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=K.a.generate(),t.numberInputId=K.a.generate(),t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(z.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("form",{className:W.a.form,onSubmit:this.handleSubmit,children:[Object(T.jsx)("label",{className:W.a.form__lable,htmlFor:this.nameInputId,children:"Name"}),Object(T.jsx)("input",{className:W.a.form__input,value:this.state.name,onChange:this.handleChange,id:this.nameInputId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(T.jsx)("label",{className:W.a.form__lable,htmlFor:this.numberInputId,children:"Number"}),Object(T.jsx)("input",{className:W.a.form__input,id:this.numberInputId,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(T.jsx)("button",{className:W.a.form__button,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),$=Object(b.b)(null,(function(t){return{onSubmit:function(e,n){return t(k(e,n))}}}))(Y),Q=n(20),V=n.n(Q),tt=K.a.generate(),et=Object(b.b)((function(t){return{value:L.getFilter(t)}}),(function(t){return{onChange:function(e){return t(I(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(T.jsxs)("div",{className:V.a.filter,children:[Object(T.jsx)("label",{className:V.a.filter__label,htmlFor:tt,children:"Find contacts by name"}),Object(T.jsx)("input",{className:V.a.filter__input,type:"text",name:"filter",id:tt,value:e,onChange:n})]})})),nt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("h1",{className:"title",children:"Phonebook"}),Object(T.jsx)($,{onSubmit:this.addContact}),Object(T.jsx)("h2",{className:"title",children:"Contacts"}),Object(T.jsx)(et,{}),Object(T.jsx)(X,{})]})}}]),n}(c.Component),ct=Object(b.b)(null,(function(t){return{fetchContacts:function(){return t(A())}}}))(nt),at=n(34),rt=n.n(at),ot=n(8),st=[].concat(Object(E.a)(Object(_.d)({serializableCheck:{ignoredActions:[ot.a,ot.f,ot.b,ot.c,ot.d,ot.e]}})),[rt.a]),it=Object(_.a)({reducer:{contacts:B},middleware:st,devTools:!1});n(74),n(75);o.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(b.a,{store:it,children:Object(T.jsx)(ct,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.5bb060e1.chunk.js.map