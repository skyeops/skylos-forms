"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("skylos-ui"),t=require("react-hook-form"),n=require("@hookform/resolvers/yup"),l=require("yup"),a=require("libphonenumber-js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var d=o(e),i=u(l);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=i.object().shape({password:i.string().min(8,"Password must be at least 8 characters").required("Password is required"),confirmPassword:i.string().min(8,"Password must be at least 8 characters").required("Password is required").oneOf([i.ref("password"),null],"Password and confirm password must match")}),E=i.object().shape({currentPassword:i.string().min(8,"Password must be at least 8 characters").required("Password is required"),newPassword:i.string().min(8,"Password must be at least 8 characters").required("Password is required"),confirmPassword:i.string().min(8,"Password must be at least 8 characters").required("Password is required").oneOf([i.ref("newPassword"),null],"New password and confirm password must match")}),v=i.object().shape({username:i.string().required("Email address or phone number is required"),password:i.string().min(8,"Password must be at least 8 characters").required("Password is required"),rememberMe:i.boolean().required()});i.addMethod(i.string,"phone",(function(){return this.test("phone","Phone number is not a valid Nigerian number",(function(e){var r;return!e||(null===(r=a.parsePhoneNumberFromString(e,"NG"))||void 0===r?void 0:r.isValid())}))}));var h=function(e){var r=e.isAdmin,t=e.requiredSender;return i.object().shape(p({allowDescription:i.boolean(),chargeRecipient:i.boolean(),customer:i.string(),description:i.string(),items:i.array().min(1,"Please enter at least one item").required("Item(s) are required"),recipient:i.object().shape({address:i.string().required("Address is required"),email:i.string().email("Email is invalid"),name:i.string().required("Name is required"),phoneNumber:i.string().phone().required("Phone number is required")}),sender:i.object().shape(p({address:i.string().required("Address is required"),email:i.string().email("Email is invalid")},t?{name:i.string().required("Name is required"),phoneNumber:i.string().phone().required("Phone number is required")}:{name:i.string(),phoneNumber:i.string().phone()}))},r?{deliveryFee:i.string().required("Delivery amount is required"),rider:i.string().required("Please select rider")}:{}))},b=function(e){var l,a,o,u,i,s,c,p,f,E,v,b,g,F,w,y,P,C,S,L=e.buttonText,q=e.isLoading,N=e.onSubmit,R=e.riders,G=e.schema,x=t.useForm({resolver:n.yupResolver(G||h({isAdmin:!0,requiredSender:!0})),defaultValues:{allowDescription:!1,chargeRecipient:!1,customer:"sender",items:[],rider:""}}),T=x.register,I=x.handleSubmit,O=x.errors,k=x.control,A=(0,x.watch)("allowDescription");return d.default.createElement(r.Stack,{as:"form",spacing:6,onSubmit:I(N)},d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.name"},"Senders Name"),d.default.createElement(r.Input,{id:"sender.name",name:"sender.name",placeholder:"Type name",ref:T}),d.default.createElement(r.FormError,{error:null==O||null===(l=O.sender)||void 0===l||null===(a=l.name)||void 0===a?void 0:a.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.phoneNumber"},"Senders number"),d.default.createElement(t.Controller,{control:k,name:"sender.phoneNumber",render:function(e){return d.default.createElement(r.Input,m({id:"sender.phoneNumber",onlyCountries:["ng"],type:"phone"},e))}}),d.default.createElement(r.FormError,{error:null==O||null===(o=O.sender)||void 0===o||null===(u=o.phoneNumber)||void 0===u?void 0:u.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.email"},"Senders Email"),d.default.createElement(r.Input,{id:"sender.email",name:"sender.email",placeholder:"Type Email Address (Optional)",ref:T}),d.default.createElement(r.FormError,{error:null==O||null===(i=O.sender)||void 0===i||null===(s=i.email)||void 0===s?void 0:s.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.address"},"Pick Up Address"),d.default.createElement(r.Input,{id:"sender.address",name:"sender.address",placeholder:"Type Address",ref:T}),d.default.createElement(r.FormError,{error:null==O||null===(c=O.sender)||void 0===c||null===(p=c.address)||void 0===p?void 0:p.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.address"},"Receiver Address"),d.default.createElement(r.Input,{id:"recipient.address",name:"recipient.address",placeholder:"Type Address",ref:T}),d.default.createElement(r.FormError,{error:null==O||null===(f=O.recipient)||void 0===f||null===(E=f.address)||void 0===E?void 0:E.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"items"},"Item(s)"),d.default.createElement(t.Controller,{control:k,name:"items",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.TagsInput,{value:n,onChange:t})}}),d.default.createElement(r.FormError,{error:null==O||null===(v=O.items)||void 0===v?void 0:v.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(t.Controller,{control:k,name:"allowDescription",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Checkbox,{active:n,onChange:t,title:"Allow Description"})}})),A?d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"description"},"Description"),d.default.createElement(r.Textarea,{id:"description",name:"description",placeholder:"Type Name",ref:T,required:!0}),d.default.createElement(r.FormError,{error:null==O||null===(b=O.description)||void 0===b?void 0:b.message})):null,d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.name"},"Receiver Name"),d.default.createElement(r.Input,{id:"recipient.name",name:"recipient.name",placeholder:"Type Name",ref:T}),d.default.createElement(r.FormError,{error:null==O||null===(g=O.recipient)||void 0===g||null===(F=g.name)||void 0===F?void 0:F.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.phoneNumber"},"Receiver Number"),d.default.createElement(t.Controller,{control:k,name:"recipient.phoneNumber",render:function(e){return d.default.createElement(r.Input,m({id:"recipient.phoneNumber",onlyCountries:["ng"],type:"phone"},e))}}),d.default.createElement(r.FormError,{error:null==O||null===(w=O.recipient)||void 0===w||null===(y=w.phoneNumber)||void 0===y?void 0:y.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"deliveryFee"},"Delivery Amount"),d.default.createElement(r.Input,{id:"deliveryFee",name:"deliveryFee",placeholder:"NGN",ref:T}),d.default.createElement(r.FormError,{error:null==O||null===(P=O.deliveryFee)||void 0===P?void 0:P.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(t.Controller,{control:k,name:"chargeRecipient",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Switch,{active:n,onChange:t,title:"The Receiver will be paying for delivery"})}})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"rider"},"Assign Rider"),d.default.createElement(r.Select,{id:"rider",name:"rider",placeholder:"Select option",ref:T},d.default.createElement("option",{value:"",disabled:!0},"Select Option"),null==R?void 0:R.map((function(e){return d.default.createElement("option",{key:e.id,value:e.id},e.name)}))),d.default.createElement(r.FormError,{error:null==O||null===(C=O.rider)||void 0===C?void 0:C.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(t.Controller,{control:k,name:"customer",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Stack,{spacing:6},d.default.createElement(r.Radio,{active:"sender"===n,onClick:function(){return t("sender")},subtitle:"Request was made by the sender",title:"Save sender’s details"}),d.default.createElement(r.Radio,{active:"recipient"===n,onClick:function(){return t("recipient")},subtitle:"Request was made by the receiver",title:"Save receiver’s details"}))}}),d.default.createElement(r.FormError,{error:null==O||null===(S=O.customer)||void 0===S?void 0:S.message})),d.default.createElement(r.Button,{defaultRightIcon:!0,isLoading:q,onClick:I(N)},L))};b.defaultProps={buttonText:"Submit Request",isLoading:!1,onSubmit:function(){},riders:[],schema:null};var g=function(e){var l,a,o,u,i,s,c,p,f,E,v,b,g,F=e.buttonText,w=e.isLoading,y=e.onSubmit,P=e.riders,C=e.schema,S="admin"===e.type,L=t.useForm({resolver:n.yupResolver(C||h({isAdmin:S,requiredSender:!1})),defaultValues:{allowDescription:!1,chargeRecipient:!1,customer:"sender",items:[],rider:""}}),q=L.register,N=L.handleSubmit,R=L.errors,G=L.control,x=(0,L.watch)("allowDescription");return d.default.createElement(r.Stack,{as:"form",spacing:6,onSubmit:N(y)},d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"customer"},S?"Customer is the?":"You are the?"),d.default.createElement(t.Controller,{control:G,name:"customer",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Stack,{direction:"row",spacing:4},d.default.createElement(r.Card,{onClick:function(){return t("sender")},sx:{boxShadow:"none"}},d.default.createElement(r.Radio,{title:"Sender",active:"sender"===n})),d.default.createElement(r.Card,{onClick:function(){return t("recipient")},sx:{boxShadow:"none"}},d.default.createElement(r.Radio,{active:"recipient"===n,title:"Receiver"})))}}),d.default.createElement(r.FormError,{error:null==R||null===(l=R.customer)||void 0===l?void 0:l.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.address"},"Pick Up Address"),d.default.createElement(r.Input,{id:"sender.address",name:"sender.address",placeholder:"Type Address",ref:q}),d.default.createElement(r.FormError,{error:null==R||null===(a=R.sender)||void 0===a||null===(o=a.address)||void 0===o?void 0:o.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.address"},"Receiver Address"),d.default.createElement(r.Input,{id:"recipient.address",name:"recipient.address",placeholder:"Type Address",ref:q}),d.default.createElement(r.FormError,{error:null==R||null===(u=R.recipient)||void 0===u||null===(i=u.address)||void 0===i?void 0:i.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"items"},"Item(s)"),d.default.createElement(t.Controller,{control:G,name:"items",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.TagsInput,{value:n,onChange:t})}}),d.default.createElement(r.FormError,{error:null==R||null===(s=R.items)||void 0===s?void 0:s.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(t.Controller,{control:G,name:"allowDescription",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Checkbox,{active:n,onChange:t,title:"Allow Description"})}})),x?d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"description"},"Description"),d.default.createElement(r.Textarea,{id:"description",name:"description",placeholder:"Type Name",ref:q,required:!0}),d.default.createElement(r.FormError,{error:null==R||null===(c=R.description)||void 0===c?void 0:c.message})):null,d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.name"},"Receiver Name"),d.default.createElement(r.Input,{id:"recipient.name",name:"recipient.name",placeholder:"Type Name",ref:q}),d.default.createElement(r.FormError,{error:null==R||null===(p=R.recipient)||void 0===p||null===(f=p.name)||void 0===f?void 0:f.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.phoneNumber"},"Receiver Number"),d.default.createElement(t.Controller,{control:G,name:"recipient.phoneNumber",render:function(e){return d.default.createElement(r.Input,m({id:"recipient.phoneNumber",onlyCountries:["ng"],type:"phone"},e))}}),d.default.createElement(r.FormError,{error:null==R||null===(E=R.recipient)||void 0===E||null===(v=E.phoneNumber)||void 0===v?void 0:v.message})),S?d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"deliveryFee"},"Delivery Amount"),d.default.createElement(r.Input,{id:"deliveryFee",name:"deliveryFee",placeholder:"NGN",ref:q}),d.default.createElement(r.FormError,{error:null==R||null===(b=R.deliveryFee)||void 0===b?void 0:b.message})):null,d.default.createElement(r.FormGroup,null,d.default.createElement(t.Controller,{control:G,name:"chargeRecipient",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Switch,{active:n,onChange:t,title:"The Receiver will be paying for delivery"})}})),S?d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"rider"},"Assign Rider"),d.default.createElement(r.Select,{id:"rider",name:"rider",placeholder:"Select option",ref:q},d.default.createElement("option",{value:"",disabled:!0},"Select Option"),null==P?void 0:P.map((function(e){return d.default.createElement("option",{key:e.id,value:e.id},e.name)}))),d.default.createElement(r.FormError,{error:null==R||null===(g=R.rider)||void 0===g?void 0:g.message})):d.default.createElement(r.Card,null,d.default.createElement(r.Text,null,"Request Submitted will have to be accepted and an estimate will be sent")),d.default.createElement(r.Button,{defaultRightIcon:!0,isLoading:w,onClick:N(y)},F))};g.defaultProps={buttonText:"Submit Request",isLoading:!1,onSubmit:function(){},riders:[],schema:null,type:"client"};var F=function(e){var l,a,o,u,i,s,c,p,f,E,v,b,g,F,w,y,P,C=e.buttonText,S=e.isLoading,L=e.onSubmit,q=e.schema,N=t.useForm({resolver:n.yupResolver(q||h({isAdmin:!1,requiredSender:!0})),defaultValues:{allowDescription:!1,chargeRecipient:!1,customer:"sender",items:[]}}),R=N.register,G=N.handleSubmit,x=N.errors,T=N.control,I=(0,N.watch)("allowDescription");return d.default.createElement(r.Stack,{as:"form",spacing:6,onSubmit:G(L)},d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"customer"},"You are the?"),d.default.createElement(t.Controller,{control:T,name:"customer",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Stack,{direction:"row",spacing:4},d.default.createElement(r.Card,{onClick:function(){return t("sender")},sx:{boxShadow:"none"}},d.default.createElement(r.Radio,{title:"Sender",active:"sender"===n})),d.default.createElement(r.Card,{onClick:function(){return t("recipient")},sx:{boxShadow:"none"}},d.default.createElement(r.Radio,{active:"recipient"===n,title:"Receiver"})))}}),d.default.createElement(r.FormError,{error:null==x||null===(l=x.customer)||void 0===l?void 0:l.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.name"},"Senders Name"),d.default.createElement(r.Input,{id:"sender.name",name:"sender.name",placeholder:"Type name",ref:R}),d.default.createElement(r.FormError,{error:null==x||null===(a=x.sender)||void 0===a||null===(o=a.name)||void 0===o?void 0:o.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.phoneNumber"},"Senders number"),d.default.createElement(t.Controller,{control:T,name:"sender.phoneNumber",render:function(e){return d.default.createElement(r.Input,m({id:"sender.phoneNumber",onlyCountries:["ng"],type:"phone"},e))}}),d.default.createElement(r.FormError,{error:null==x||null===(u=x.sender)||void 0===u||null===(i=u.phoneNumber)||void 0===i?void 0:i.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.email"},"Senders Email"),d.default.createElement(r.Input,{id:"sender.email",name:"sender.email",placeholder:"Type Email Address (Optional)",ref:R}),d.default.createElement(r.FormError,{error:null==x||null===(s=x.sender)||void 0===s||null===(c=s.email)||void 0===c?void 0:c.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"sender.address"},"Pick Up Address"),d.default.createElement(r.Input,{id:"sender.address",name:"sender.address",placeholder:"Type Address",ref:R}),d.default.createElement(r.FormError,{error:null==x||null===(p=x.sender)||void 0===p||null===(f=p.address)||void 0===f?void 0:f.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.address"},"Receiver Address"),d.default.createElement(r.Input,{id:"recipient.address",name:"recipient.address",placeholder:"Type Address",ref:R}),d.default.createElement(r.FormError,{error:null==x||null===(E=x.recipient)||void 0===E||null===(v=E.address)||void 0===v?void 0:v.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"items"},"Item(s)"),d.default.createElement(t.Controller,{control:T,name:"items",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.TagsInput,{value:n,onChange:t})}}),d.default.createElement(r.FormError,{error:null==x||null===(b=x.items)||void 0===b?void 0:b.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(t.Controller,{control:T,name:"allowDescription",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Checkbox,{active:n,onChange:t,title:"Allow Description"})}})),I?d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"description"},"Description"),d.default.createElement(r.Textarea,{id:"description",name:"description",placeholder:"Type Name",ref:R,required:!0}),d.default.createElement(r.FormError,{error:null==x||null===(g=x.description)||void 0===g?void 0:g.message})):null,d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.name"},"Receiver Name"),d.default.createElement(r.Input,{id:"recipient.name",name:"recipient.name",placeholder:"Type Name",ref:R}),d.default.createElement(r.FormError,{error:null==x||null===(F=x.recipient)||void 0===F||null===(w=F.name)||void 0===w?void 0:w.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"recipient.phoneNumber"},"Receiver Number"),d.default.createElement(t.Controller,{control:T,name:"recipient.phoneNumber",render:function(e){return d.default.createElement(r.Input,m({id:"recipient.phoneNumber",onlyCountries:["ng"],type:"phone"},e))}}),d.default.createElement(r.FormError,{error:null==x||null===(y=x.recipient)||void 0===y||null===(P=y.phoneNumber)||void 0===P?void 0:P.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(t.Controller,{control:T,name:"chargeRecipient",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Switch,{active:n,onChange:t,title:"The Receiver will be paying for delivery"})}})),d.default.createElement(r.Card,null,d.default.createElement(r.Text,null,"Request Submitted will have to be accepted and an estimate will be sent")),d.default.createElement(r.Button,{defaultRightIcon:!0,isLoading:S,onClick:G(L)},C))};F.defaultProps={buttonText:"Submit Request",extras:null,isLoading:!1,onSubmit:function(){},type:"client",schema:null};var w=function(e){var l,a,o=e.buttonText,u=e.extras,i=e.isLoading,s=e.onSubmit,m=e.schema,c=t.useForm({resolver:n.yupResolver(m||v),defaultValues:{rememberMe:!1}}),p=c.register,f=c.handleSubmit,E=c.errors,h=c.control;return d.default.createElement(r.Stack,{as:"form",spacing:6,onSubmit:f(s)},d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"username"},"Email Address or Phone Number"),d.default.createElement(r.Input,{id:"username",name:"username",placeholder:"Type your email address or Phone Number",ref:p}),d.default.createElement(r.FormError,{error:null==E||null===(l=E.username)||void 0===l?void 0:l.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"password"},"Password"),d.default.createElement(r.Input,{id:"password",placeholder:"Type your password",type:"password",name:"password",ref:p}),d.default.createElement(r.FormError,{error:null==E||null===(a=E.password)||void 0===a?void 0:a.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(t.Controller,{control:h,name:"rememberMe",render:function(e){var t=e.onChange,n=e.value;return d.default.createElement(r.Checkbox,{active:n,onChange:t,title:"Keep me logged in"})}})),d.default.createElement(r.Button,{defaultRightIcon:!0,isLoading:i,onClick:f(s)},o),u)};w.defaultProps={buttonText:"Login",extras:null,isLoading:!1,onSubmit:function(){},schema:null};var y=function(e){var l,a,o,u=e.buttonText,i=e.extras,s=e.isLoading,m=e.onSubmit,c=e.schema,p=t.useForm({resolver:n.yupResolver(c||E),defaultValues:{rememberMe:!1}}),f=p.register,v=p.handleSubmit,h=p.errors;return d.default.createElement(r.Stack,{as:"form",spacing:6,onSubmit:v(m)},d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"currentPassword"},"Current Password"),d.default.createElement(r.Input,{id:"currentPassword",placeholder:"Type your password",type:"password",name:"currentPassword",ref:f}),d.default.createElement(r.FormError,{error:null==h||null===(l=h.currentPassword)||void 0===l?void 0:l.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"newPassword"},"New Password"),d.default.createElement(r.Input,{id:"newPassword",placeholder:"Type your password",type:"password",name:"newPassword",ref:f}),d.default.createElement(r.FormError,{error:null==h||null===(a=h.newPassword)||void 0===a?void 0:a.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"confirmPassword"},"Re-enter New Password"),d.default.createElement(r.Input,{id:"confirmPassword",placeholder:"Type your password",type:"password",name:"confirmPassword",ref:f}),d.default.createElement(r.FormError,{error:null==h||null===(o=h.confirmPassword)||void 0===o?void 0:o.message})),d.default.createElement(r.Button,{defaultRightIcon:!0,isLoading:s,onClick:v(m)},u),i)};y.defaultProps={buttonText:"Update Password",extras:null,isLoading:!1,onSubmit:function(){},schema:null};var P=function(e){var l,a,o=e.buttonText,u=e.extras,i=e.isLoading,s=e.onSubmit,m=e.schema,c=t.useForm({resolver:n.yupResolver(m||f),defaultValues:{rememberMe:!1}}),p=c.register,E=c.handleSubmit,v=c.errors;return d.default.createElement(r.Stack,{as:"form",spacing:6,onSubmit:E(s)},d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"password"},"Password"),d.default.createElement(r.Input,{id:"password",placeholder:"Type your password",type:"password",name:"password",ref:p}),d.default.createElement(r.FormError,{error:null==v||null===(l=v.password)||void 0===l?void 0:l.message})),d.default.createElement(r.FormGroup,null,d.default.createElement(r.Label,{htmlFor:"confirmPassword"},"Re-enter Password"),d.default.createElement(r.Input,{id:"confirmPassword",placeholder:"Type your password",type:"password",name:"confirmPassword",ref:p}),d.default.createElement(r.FormError,{error:null==v||null===(a=v.confirmPassword)||void 0===a?void 0:a.message})),d.default.createElement(r.Button,{defaultRightIcon:!0,isLoading:i,onClick:E(s)},o),u)};P.defaultProps={buttonText:"Reset Password",extras:null,isLoading:!1,onSubmit:function(){},schema:null},exports.AdminOrderForm=b,exports.ChangePasswordForm=y,exports.CustomerOrderForm=g,exports.GuestOrderForm=F,exports.LoginForm=w,exports.PasswordForm=P,exports.confirmPasswordSchema=E,exports.loginSchema=v,exports.orderSchema=h,exports.passwordSchema=f;
