!function(){"use strict";var e,t={178:function(e,t,n){var r=n(294),o=n(745),a=n(655),l=n(335),c=n(848),i=n(673),u=(0,c.LC)({reducerPath:"api",baseQuery:(0,i.ni)({baseUrl:"/api"}),tagTypes:["auth","todos"],endpoints:function(){return{}}}),s=u.injectEndpoints({endpoints:function(e){return{identification:e.query({query:function(){return"/identification"},providesTags:["auth"]}),authentication:e.mutation({query:function(e){return{url:"/authentication",method:"post",body:e}},invalidatesTags:["auth"]}),logout:e.mutation({query:function(){return{url:"/logout",method:"post"}},invalidatesTags:["auth"]})}}}),d=s.useIdentificationQuery,m=s.useAuthenticationMutation,f=s.useLogoutMutation,p=function(){return r.createElement("div",{className:"Su13Q_LCI5lVCj6YLf9Q"},r.createElement("h1",{className:"jfk1xgucWvD_1Ffb468s"},"Loading..."))},y=function(){var e=d().isLoading;return r.createElement("div",{className:"SgVYRKYPF6NUe8PYD2ML"},e?r.createElement(p,null):r.createElement(l.j3,null))},b="iEOieBzGZEfA48crrmpQ",v=u.injectEndpoints({endpoints:function(e){return{getTodos:e.query({query:function(e){return"/todos?".concat(function(e){return e?Object.entries(e).map((function(e){return e.join("=")})).join("&"):""}(e))},providesTags:["todos"]}),addTodo:e.mutation({query:function(e){return{url:"/todo",method:"post",body:e}}}),updateTodo:e.mutation({query:function(e){return{url:"/updateTodo",method:"post",body:e}}})}}}),h=v.useGetTodosQuery,g=v.useAddTodoMutation,E=v.useUpdateTodoMutation,O=n(743),w={container:"TOUjOi4xjdNo_eKvnDbL",caption:"_19FYTB0Q7o21hEqbO_4g",rotated:"GpRqbTAaFaJyZNdrjGwb",name:"KEExwoCOwmZchhTiFWd_",email:"gzBFPaQ70a_h9qpc1rPE",task:"jKHAbMiMwQjYDnV4JYHy",completed:"YFaCXfCpGzwq90iKWo0B",edited:"GQXrXrzcvDx4iJR6PlRA"},k=(0,r.memo)((function(e){var t=e.columnName,n=e.orderColumn,o=e.orderDirection,a=e.sort,l=[w.container];l.push(w[[t]]);var c="desc"===o?w.rotated:"",i=(0,r.useCallback)((function(){a(t)}));return r.createElement("th",{className:l.join(" "),onClick:i},r.createElement("span",{className:w.caption},t),n===t&&r.createElement("span",{className:c}," ▲ "))})),j=n(268);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===C(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=(0,j.oM)({name:"table",initialState:{limit:3,skip:0,orderColumn:"name",orderDirection:"asc"},reducers:{setSkip:function(e,t){e.skip=t.payload},setOrder:function(e,t){var n=t.payload,r=n.orderColumn,o=n.orderDirection;return M(M({},e),{},{orderColumn:r,orderDirection:r!==e.orderColumn?"asc":o})}}}),P=A.actions,N=P.setSkip,I=P.setOrder,x=A.reducer,D=(0,j.oM)({name:"modal",initialState:{owner:null},reducers:{open:function(e,t){e.owner=t.payload},close:function(e){e.owner=null}}}),F=D.actions,W=F.open,q=F.close,L=D.reducer,R=function(e){var t=e.header,n=e.children,o=e.closeModal;return r.createElement("div",{className:"RMSsEbe3zBfvcRZNRMr0",onClick:o},r.createElement("div",{className:"G4QuwkyErHGs4971bNem",onClick:function(e){return e.stopPropagation()}},r.createElement("div",{className:"H77kivpzk2VP_0sCm9WS"},r.createElement("h1",{className:"vX5ko3J9MgRYivHCGk1p"},t),r.createElement("div",{className:"rvDSkLc5tlgWBmQkbspg"},n))))},Q=["classesArr","caption","handleClick"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}var z=(0,r.memo)((function(e){var t=e.classesArr,n=void 0===t?[]:t,o=e.caption,a=e.handleClick,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,Q);return n.push("xkk653bW2v8FRhuncOGg"),r.createElement("button",B({className:n.join(" "),onClick:a},l),o)})),U=function(e){var t=e.message,n=e.closeModal,o=e.showButton;return r.createElement(r.Fragment,null,r.createElement("div",null,t),o&&r.createElement(z,{caption:"Close",handleClick:n,classesArr:["WXx_w0tqWDxxOnrT8eB3"]}))},X=function(e){return{name:e,email:e,task:e,completed:e}},_=(0,j.oM)({name:"newTodoWindow",initialState:{message:"",editedTodo:X("")},reducers:{setMessage:function(e,t){e.message=t.payload},setEditedTodo:function(e,t){e.editedTodo=t.payload},setEditedTodoField:function(e,t){var n=t.payload,r=n.id,o=n.value;e.editedTodo[r]=o},resetEditedTodo:function(e){e.editedTodo=X("")}}}),G=_.actions,Z=G.setMessage,H=G.setEditedTodo,J=G.setEditedTodoField,K=G.resetEditedTodo,Y=_.reducer,V=function(e){var t=e.id,n=e.checked,o=e.onChange;return r.createElement("label",{className:"LqFRuAZoXwXPjtW1g2ul"},r.createElement("input",{type:"checkbox",checked:n,className:"Ifp3XjycvEAfWgzjaLGA",id:t,onChange:o}),r.createElement("div",{className:"nNmM1RQej4_oA_KY44dD"}),r.createElement("div",{className:"IQTzNArO0qiFl1PN3SES"},t))},$=r.memo((function(e){var t=e.type,n=e.id,o=e.disabled,a=e.value,l=e.onChange,c="checkbox"===t?r.createElement(V,{id:n,checked:a,onChange:l}):r.createElement(r.Fragment,null,r.createElement("div",{className:"ACgI9pB49hUHUIGeN7s2"},n),r.createElement("input",{disabled:o,className:"YqWxsXiczAgZXZsjuTQe",type:t,id:n,value:a,onChange:o?null:l}));return r.createElement("div",{className:"qi50NSgOOOBwcwf6ANPE"},c)}));function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==ee(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==ee(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===ee(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var le=[{id:"name",type:"text",disabled:!0},{id:"email",type:"email",disabled:!0},{id:"task",type:"text",disabled:!1},{id:"completed",type:"checkbox",disabled:!1}],ce=function(e){var t,n,o=e.closeModal,a=d().refetch,l=(t=E(),n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,c=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],c=(0,O.v9)((function(e){return e.table})),i=h(c),u=i.data,s=i.refetch,m=(0,O.I0)(),f=(0,O.v9)((function(e){return e.editTodoWindow})),p=f.message,y=f.editedTodo,b=(0,r.useCallback)((function(e){var t=e.target,n=t.id,r=t.value,o=t.checked;"checkbox"===e.target.type&&(r=o),m(J({id:n,value:r}))}),[]),v=(0,r.useCallback)((function(){m(Z("")),m(K()),o()}),[]),g=(0,r.useMemo)((function(){return le.map((function(e){return r.createElement($,te({},e,{key:e.id,value:y[e.id],onChange:b}))}))}),[u,y]);return r.createElement(r.Fragment,null,p?r.createElement(U,{message:p,showButton:"In progress..."!==p,closeModal:v}):r.createElement("form",{className:"BXDsgVOMp87tn_PtsFAE",onSubmit:function(e){e.preventDefault(),m(Z("In progress..."));var t=u.todos.filter((function(e){return e.id===y.id}))[0],n=t.edited||y.task!==t.task;l(re(re({},y),{},{edited:n})).unwrap().then((function(e){e.status?(m(Z("Todo successfully edited")),m(K()),s()):(m(Z("Permission denied. Please, check your credentials.")),a())})).catch((function(e){m(Z("Something went wrong")),m(K())}))}},g,r.createElement("div",{className:"vPpiCt6_Hq14hDJ6DN7z"},r.createElement(z,{caption:"Save",handleClick:null,type:"submit"}),r.createElement(z,{caption:"Cancel",handleClick:v,classesArr:["sG8nZzMOJ7xYuclWrWmu"]}))))},ie=n(935),ue=["name","email","task","completed","edited"],se="table",de=function(){var e=d().data,t=(0,O.v9)((function(e){return e.table})),n=h(t),o=n.data,a=n.refetch,l=(0,O.v9)((function(e){return e.table})),c=l.orderColumn,i=l.orderDirection,u=(0,O.v9)((function(e){return e.modal})),s=(0,O.I0)(),m=(0,r.useMemo)((function(){return{open:function(){return s(W(se))},close:function(){return s(q())}}}),[]),f=(0,r.useMemo)((function(){return ue.map((function(e){var t=Math.random();return r.createElement(k,{key:t,columnName:e,orderColumn:c,orderDirection:i,sort:function(e){s(I({orderColumn:e,orderDirection:"asc"===i?"desc":"asc"})),a()}})}))}),[c,i]),p=o?o.todos:[],y=(0,r.useCallback)((function(e){var t=e.currentTarget.id,n=p.find((function(e){return e.id===+t}));s(H(n)),s(W(se))}),[o]),v=e&&"ADMIN"===e.role,g="",E=null;v&&(g="qxnLSRECXaobsZI5R5vE",E=y);var w=(0,r.useMemo)((function(){return p.map((function(e,t){return r.createElement("tr",{key:e.id,id:e.id,className:g,onClick:E},r.createElement("td",null,t+1),r.createElement("td",null,e.name),r.createElement("td",null,e.email),r.createElement("td",null,e.task),r.createElement("td",{className:b},e.completed?"✔":""),r.createElement("td",{className:b},e.edited?"✔":""))}))}),[p,e]);return r.createElement(r.Fragment,null,r.createElement("table",{className:"OFu9ntjG2dZJC6cKeFdL"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"№"),f)),r.createElement("tbody",null,w)),u.owner===se&&(0,ie.createPortal)(r.createElement(R,{header:"Edit Todo",closeModal:m.close},r.createElement(ce,{closeModal:m.close})),document.body))},me=r.memo((function(e){var t=e.type,n=e.id,o=e.placeholder,a=e.value,l=e.onChange,c=e.warning;return r.createElement("label",{className:"Yo_DItErARWf4f5JOPUq"},c&&r.createElement("div",{className:"_qh8ZJv4sbWtDgidi0yk"},"Check data in this field"),r.createElement("input",{autoFocus:"name"===n,className:"CnWTMu19QjFKH22c6AKQ",type:t,id:n,placeholder:o,value:a,onChange:l}))})),fe=function(e){return{name:e,email:e,task:e}},pe=(0,j.oM)({name:"newTodoWindow",initialState:{message:"",todo:fe(""),checks:fe(!0)},reducers:{setMessage:function(e,t){e.message=t.payload},setTodo:function(e,t){var n=t.payload,r=n.id,o=n.value;e.todo[r]=o},resetTodo:function(e){e.todo=fe("")},setChecks:function(e,t){e.checks=t.payload},resetChecks:function(e){e.checks=fe(!0)}}}),ye=pe.actions,be=ye.setMessage,ve=ye.setTodo,he=ye.resetTodo,ge=ye.setChecks,Ee=ye.resetChecks,Oe=pe.reducer;function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var je=[{id:"name",type:"text",placeholder:"Name"},{id:"email",type:"email",placeholder:"Email"},{id:"task",type:"text",placeholder:"Task"}],Ce=function(e){var t,n,o=e.closeModal,a=(t=g(),n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,c=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],l=(0,O.v9)((function(e){return e.table})),c=h(l).refetch,i=(0,O.I0)(),u=(0,O.v9)((function(e){return e.newTodoWindow})),s=u.message,d=u.todo,m=u.checks,f=(0,r.useCallback)((function(e){var t=e.target,n=t.id,r=t.value;i(ve({id:n,value:r}))}),[]),p=(0,r.useCallback)((function(){i(be("")),i(he()),i(Ee()),o()}),[]),y=(0,r.useMemo)((function(){return je.map((function(e){return r.createElement(me,we({},e,{key:e.id,value:d[e.id],onChange:f,warning:!m[e.id]}))}))}),[d,m]);return r.createElement(r.Fragment,null,s?r.createElement(U,{message:s,showButton:"In progress..."!==s,closeModal:p}):r.createElement("form",{className:"quA2OeBK1t5LUACN7a3T",onSubmit:function(e){e.preventDefault(),i(Ee()),i(be("In progress...")),a(d).unwrap().then((function(e){e.status?(i(be("Todo successfully added")),i(he()),c()):(i(ge(e.checks)),i(be("")))})).catch((function(e){i(be("Something went wrong")),i(he()),i(Ee())}))}},y,r.createElement("div",{className:"kUHwU6XMBYNQHpFUFO4g"},r.createElement(z,{caption:"Add",handleClick:null,type:"submit"}),r.createElement(z,{caption:"Cancel",handleClick:p,classesArr:["TfKMqQAH2zIAURZXzcAy"]}))))},Se="newTodo",Me=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e);var t=(0,O.v9)((function(e){return e.modal})),n=(0,O.I0)(),o=(0,r.useMemo)((function(){return{open:function(){return n(W(Se))},close:function(){return n(q())}}}),[]);return r.createElement(r.Fragment,null,r.createElement(z,{caption:"New Todo",handleClick:o.open}),t.owner===Se&&(0,ie.createPortal)(r.createElement(R,{header:"Create New Todo",closeModal:o.close},r.createElement(Ce,{closeModal:o.close})),document.body))},Te=function(e){return{login:e,password:e}},Ae=(0,j.oM)({name:"loginWindow",initialState:{credentials:Te(""),checks:Te(!0)},reducers:{setMessage:function(e,t){e.message=t.payload},setCredentials:function(e,t){var n=t.payload,r=n.id,o=n.value;e.credentials[r]=o},resetCredentials:function(e){e.credentials=Te("")},setChecks:function(e,t){e.checks=t.payload},resetChecks:function(e){e.checks=Te(!0)}}}),Pe=Ae.actions,Ne=Pe.setMessage,Ie=Pe.setCredentials,xe=Pe.resetCredentials,De=Pe.setChecks,Fe=Pe.resetChecks,We=Ae.reducer;function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qe.apply(this,arguments)}function Le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Re=[{id:"login",type:"text",placeholder:"Login"},{id:"password",type:"password",placeholder:"Password"}],Qe=function(e){var t,n,o=e.closeModal,a=(t=m(),n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,c=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Le(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],l=(0,O.I0)(),c=(0,O.v9)((function(e){return e.loginWindow})),i=c.message,u=c.credentials,s=c.checks,d=(0,r.useCallback)((function(e){var t=e.target,n=t.id,r=t.value;l(Ie({id:n,value:r}))}),[]),f=(0,r.useCallback)((function(){l(Ne("")),l(xe()),l(Fe()),o()}),[]),p=(0,r.useMemo)((function(){return Re.map((function(e){return r.createElement(me,qe({},e,{key:e.id,value:u[e.id],onChange:d,warning:!s[e.id]}))}))}),[u,s]);return r.createElement(r.Fragment,null,i?r.createElement(U,{message:i,showButton:"In progress..."!==i,closeModal:f}):r.createElement("form",{className:"nJ4KjMOSqXS9HJNOSuQK",onSubmit:function(e){e.preventDefault(),l(Fe()),l(Ne("In progress...")),a(u).unwrap().then((function(e){e.status?f():(l(De(e.checks)),l(Ne("")))})).catch((function(e){l(Ne("Something went wrong")),l(xe()),l(Fe())}))}},p,r.createElement("div",{className:"X2aaVDxIBLa8RREDaaaZ"},r.createElement(z,{caption:"Add",handleClick:null,type:"submit"}),r.createElement(z,{caption:"Cancel",handleClick:f,classesArr:["qohjqwkkhLLkJogUjcP3"]}))))},Be="login",ze=function(){var e=(0,O.v9)((function(e){return e.modal})),t=(0,O.I0)(),n=(0,r.useMemo)((function(){return{open:function(){return t(W(Be))},close:function(){return t(q())}}}),[]);return r.createElement(r.Fragment,null,r.createElement(z,{caption:"Login",handleClick:n.open}),e.owner===Be&&(0,ie.createPortal)(r.createElement(R,{header:"Login",closeModal:n.close},r.createElement(Qe,{closeModal:n.close})),document.body))};function Ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Xe,_e=function(){var e,t,n=(e=f(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,c=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ue(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement(z,{classesArr:["pBShoqCRC39VCPQo_h1_"],caption:"Logout",handleClick:n})},Ge=function(){var e=d().data;return r.createElement("div",{className:"zy1RnJFGIqMi0zRHX5nG"},r.createElement(Me,null),e?r.createElement(_e,null):r.createElement(ze,null))},Ze=function(){var e=(0,O.v9)((function(e){return e.table})),t=h(e),n=t.data,o=t.refetch,a=(0,O.v9)((function(e){return e.table})),l=a.limit,c=a.skip,i=(0,O.I0)(),u=(0,r.useCallback)((function(e){i(N(e*l)),o()}),[]),s=n?n.amount:0,d=Math.ceil(s/l),m=c/l,f=(0,r.useMemo)((function(){return Array(d).fill(null).map((function(e,t){var n=Math.random(),o=["kbBIep5hkxgPttzWTCzL"],a=function(){return u(t)};return t===m&&(o.push("sZx0lmeGAwzuXT3mIM0A"),a=null),r.createElement(z,{key:n,classesArr:o,caption:t+1,handleClick:a})}))}),[c,s]);return r.createElement("div",{className:"OZg1pObPHMnUr3Z0mJuQ"},f)},He=function(){return r.createElement(r.Fragment,null,r.createElement("header",{className:"RUlJ3TC32LHuErffWXmI"},r.createElement("h1",null,"ToDo list"),r.createElement("span",null,"Powered by PERN")),r.createElement("main",{className:"jLfS6a8suk8MMOOz7BOe"},r.createElement(Ge,null),r.createElement(de,null),r.createElement(Ze,null)))},Je=function(){return r.createElement("div",{className:"dPVg2ChxIUW_seVMIjew"},r.createElement("h1",null,"404 Not Found"))},Ke=function(){return r.createElement(a.VK,null,r.createElement(l.Z5,null,r.createElement(l.AW,{path:"/",element:r.createElement(y,null)},r.createElement(l.AW,{index:!0,element:r.createElement(He,null)}),r.createElement(l.AW,{path:"*",element:r.createElement(Je,null)}))))};function Ye(e){return Ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ye(e)}function Ve(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Ye(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Ye(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Ye(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $e=(0,j.xC)({reducer:(Xe={},Ve(Xe,u.reducerPath,u.reducer),Ve(Xe,"newTodoWindow",Oe),Ve(Xe,"editTodoWindow",Y),Ve(Xe,"loginWindow",We),Ve(Xe,"table",x),Ve(Xe,"modal",L),Xe),middleware:function(e){return e().concat(u.middleware)}});o.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(O.zt,{store:$e},r.createElement(Ke,null))))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],a=e[s][2];for(var c=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,l=n[0],c=n[1],i=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var s=i(r)}for(t&&t(n);u<l.length;u++)a=l[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},n=self.webpackChunkserver=self.webpackChunkserver||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[295],(function(){return r(178)}));o=r.O(o)}();
//# sourceMappingURL=index.js.map