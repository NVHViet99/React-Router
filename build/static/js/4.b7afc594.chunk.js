(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{44:function(e,t,c){e.exports={comments:"Comments_comments__11YXP"}},45:function(e,t,c){e.exports={form:"NewCommentForm_form__3eaIb",loading:"NewCommentForm_loading__2-YV5",control:"NewCommentForm_control__1_8qj",actions:"NewCommentForm_actions__2u_mW"}},46:function(e,t,c){e.exports={item:"CommentItem_item__29Aq6"}},47:function(e,t,c){e.exports={comments:"CommentsList_comments__zf8bl"}},48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__1rS8Z"}},53:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(8),o=c(37),a=c(0),r=c(35),m=c(36),j=c(44),i=c.n(j),d=c(45),u=c.n(d),l=c(14),b=c(1),x=function(e){var t=Object(a.useRef)(),c=Object(r.a)(m.a),n=c.sendRequest,s=c.status,o=c.error,j=e.onAddComment;Object(a.useEffect)((function(){"completed"!==s||o||j()}),[s,o,j]);var i=function(c){c.preventDefault();var s=t.current.value;""!==s&&n({commentData:{text:s},quoteId:e.quoteId}),t.current.value=""};return Object(b.jsxs)("form",{className:u.a.form,onSubmit:i,children:["pending"===s&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})}),Object(b.jsxs)("div",{className:u.a.control,onSubmit:i,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:u.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(46),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(47),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],j=Object(n.j)().quoteId,d=Object(r.a)(m.c),u=d.sendRequest,O=d.status,h=d.data;Object(a.useEffect)((function(){u(j)}),[j,u]);var f,p=Object(a.useCallback)((function(){u(j)}),[u,j]);return"pending"===O&&(f=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})})),"completed"===O&&(h||h.length>0)&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(b.jsxs)("section",{className:i.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:j,onAddComment:p}),f]})},C=c(48),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(n.k)(),t=Object(n.j)().quoteId,c=Object(r.a)(m.e,!0),o=c.sendRequest,j=c.status,i=c.data,d=c.error;return Object(a.useEffect)((function(){o(t)}),[o,t]),"pending"===j?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})}):d?Object(b.jsx)("p",{className:"centered",children:d}):i.text?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{text:i.text,author:i.author}),Object(b.jsx)(n.c,{path:e.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(s.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(n.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:" No Quote found"})}}}]);
//# sourceMappingURL=4.b7afc594.chunk.js.map