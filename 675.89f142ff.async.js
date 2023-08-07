(self.webpackChunksvl_design=self.webpackChunksvl_design||[]).push([[675],{71100:function($,K,h){"use strict";var x=h(14570),P=h(67294),E=h(67915);function C(u,e){return M(u)||R(u,e)||j(u,e)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(u,e){if(u){if(typeof u=="string")return T(u,e);var r=Object.prototype.toString.call(u).slice(8,-1);if(r==="Object"&&u.constructor&&(r=u.constructor.name),r==="Map"||r==="Set")return Array.from(u);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(u,e)}}function T(u,e){(e==null||e>u.length)&&(e=u.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=u[r];return i}function R(u,e){var r=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(r!=null){var i,f,c,s,p=[],y=!0,o=!1;try{if(c=(r=r.call(u)).next,e===0){if(Object(r)!==r)return;y=!1}else for(;!(y=(i=c.call(r)).done)&&(p.push(i.value),p.length!==e);y=!0);}catch(d){o=!0,f=d}finally{try{if(!y&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(o)throw f}}return p}}function M(u){if(Array.isArray(u))return u}var L={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,i=[];return Object.entries(e.properties||{}).forEach(function(f){var c,s=C(f,2),p=s[0],y=s[1];i.push("".concat(p).concat((c=e.required)!==null&&c!==void 0&&c.includes(p)?"":"?",": ").concat(y.type==="object"?"object":r.toString(y)))}),i.length?"{ ".concat(i.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,i=e.signature,f="oneOf"in i?i.oneOf:[i];return f.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(s){return"".concat(s.key,": ").concat(r.toString(s))}).join(", "),") => ").concat(r.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(i){return r.getValidClassName(i)||r.toString(i)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},W=function(e){var r=useState(function(){return L.toString(e)}),i=C(r,2),f=i[0],c=i[1];return useEffect(function(){c(L.toString(e))},[e]),React.createElement("code",null,f)},H=function(e){var r,i=useRouteMeta(),f=i.frontmatter,c=useAtomAssets(),s=c.components,p=e.id||f.atomId,y=useIntl();if(!p)throw new Error("`id` properties if required for API component!");var o=s==null?void 0:s[p];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,y.formatMessage({id:"api.component.name"})),React.createElement("th",null,y.formatMessage({id:"api.component.description"})),React.createElement("th",null,y.formatMessage({id:"api.component.type"})),React.createElement("th",null,y.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,o&&(r=o.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(o.propsConfig.properties).map(function(d){var m,v=C(d,2),O=v[0],S=v[1];return React.createElement("tr",{key:O},React.createElement("td",null,O),React.createElement("td",null,S.description||"--"),React.createElement("td",null,React.createElement(W,S)),React.createElement("td",null,React.createElement("code",null,(m=o.propsConfig.required)!==null&&m!==void 0&&m.includes(O)?y.formatMessage({id:"api.component.required"}):JSON.stringify(S.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},y.formatMessage({id:"api.component.".concat(s?"not.found":"unavailable")},{id:p}))))))},F=null},35532:function($,K,h){"use strict";var x=h(67294);function P(){return P=Object.assign?Object.assign.bind():function(_){for(var j=1;j<arguments.length;j++){var T=arguments[j];for(var R in T)Object.prototype.hasOwnProperty.call(T,R)&&(_[R]=T[R])}return _},P.apply(this,arguments)}var E=function(j){return React.createElement("span",P({className:"dumi-default-badge"},j))},C=null},67915:function($,K,h){"use strict";h.d(K,{Z:function(){return u}});var x=h(93096),P=h.n(x),E=h(67294),C=["children"];function _(e,r){return L(e)||M(e,r)||T(e,r)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,r){if(e){if(typeof e=="string")return R(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return R(e,r)}}function R(e,r){(r==null||r>e.length)&&(r=e.length);for(var i=0,f=new Array(r);i<r;i++)f[i]=e[i];return f}function M(e,r){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var f,c,s,p,y=[],o=!0,d=!1;try{if(s=(i=i.call(e)).next,r===0){if(Object(i)!==i)return;o=!1}else for(;!(o=(f=s.call(i)).done)&&(y.push(f.value),y.length!==r);o=!0);}catch(m){d=!0,c=m}finally{try{if(!o&&i.return!=null&&(p=i.return(),Object(p)!==p))return}finally{if(d)throw c}}return y}}function L(e){if(Array.isArray(e))return e}function W(e,r){if(e==null)return{};var i=H(e,r),f,c;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)f=s[c],!(r.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(e,f)&&(i[f]=e[f])}return i}function H(e,r){if(e==null)return{};var i={},f=Object.keys(e),c,s;for(s=0;s<f.length;s++)c=f[s],!(r.indexOf(c)>=0)&&(i[c]=e[c]);return i}var F=function(r){var i=r.children,f=W(r,C),c=(0,E.useRef)(null),s=(0,E.useState)(!1),p=_(s,2),y=p[0],o=p[1],d=(0,E.useState)(!1),m=_(d,2),v=m[0],O=m[1];return(0,E.useEffect)(function(){var S=c.current;if(S){var t=P()(function(){o(S.scrollLeft>0),O(S.scrollLeft<S.scrollWidth-S.offsetWidth)},100);return t(),S.addEventListener("scroll",t),window.addEventListener("resize",t),function(){S.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}},[]),E.createElement("div",{className:"dumi-default-table"},E.createElement("div",{className:"dumi-default-table-content",ref:c,"data-left-folded":y||void 0,"data-right-folded":v||void 0},E.createElement("table",f,i)))},u=F},66313:function($,K,h){"use strict";var x=h(70593),P=h(67294);function E(t){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},E(t)}function C(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(I){return Object.getOwnPropertyDescriptor(t,I).enumerable})),a.push.apply(a,l)}return a}function _(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?C(Object(a),!0).forEach(function(l){j(t,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(a,l))})}return t}function j(t,n,a){return n=T(n),n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function T(t){var n=R(t,"string");return E(n)==="symbol"?n:String(n)}function R(t,n){if(E(t)!=="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var l=a.call(t,n||"default");if(E(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function M(t,n){return H(t)||W(t,n)||e(t,n)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(t,n){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var l,I,g,A,w=[],N=!0,D=!1;try{if(g=(a=a.call(t)).next,n===0){if(Object(a)!==a)return;N=!1}else for(;!(N=(l=g.call(a)).done)&&(w.push(l.value),w.length!==n);N=!0);}catch(B){D=!0,I=B}finally{try{if(!N&&a.return!=null&&(A=a.return(),Object(A)!==A))return}finally{if(D)throw I}}return w}}function H(t){if(Array.isArray(t))return t}function F(t){return i(t)||r(t)||e(t)||u()}function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(t,n){if(t){if(typeof t=="string")return f(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(t,n)}}function r(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function i(t){if(Array.isArray(t))return f(t)}function f(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,l=new Array(n);a<n;a++)l[a]=t[a];return l}function c(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(t).forEach(function(l,I){var g="".concat(n?"".concat(n,"-"):"").concat(I);switch(l==null?void 0:l.type){case"ul":{var A,w=((A=a[a.length-1])===null||A===void 0?void 0:A.children)||a,N=c(l.props.children||[],g);w.push.apply(w,F(N));break}case"li":{var D=c(l.props.children,g);a.push({title:[].concat(l.props.children).filter(function(B){return B.type!=="ul"}),key:g,children:D,isLeaf:!D.length});break}default:}}),a}var s=function(n){var a=useState(c(n)),l=M(a,2),I=l[0],g=l[1];return useEffect(function(){g(c(n))},[n]),I},p=function(n){var a=n.isLeaf,l=n.expanded;return a?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):l?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"}))},y=function(n){var a=n.isLeaf,l=n.expanded;return a?React.createElement("span",{className:"tree-switcher-leaf-line"}):l?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},o=function(){return{height:0,opacity:0}},d=function(n){var a=n.scrollHeight;return{height:a,opacity:1}},m=function(n){return{height:n?n.offsetHeight:0}},v=function(n,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},O={motionName:"ant-motion-collapse",onAppearStart:o,onEnterStart:o,onAppearActive:d,onEnterActive:d,onLeaveStart:m,onLeaveActive:o,onAppearEnd:v,onEnterEnd:v,onLeaveEnd:v,motionDeadline:500},S=function(t){var n=s(t.children),a=createRef(),l=function(g,A){var w=A.isLeaf;w||g.shiftKey||g.metaKey||g.ctrlKey||a.current.onNodeExpand(g,A)};return React.createElement(Tree,{className:"dumi-default-tree",icon:p,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_(_({},O),{},{motionAppear:!1}),onClick:l,treeData:[{key:"0",title:t.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:y})}},93096:function($,K,h){var x="Expected a function",P=NaN,E="[object Symbol]",C=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,T=/^0o[0-7]+$/i,R=parseInt,M=typeof h.g=="object"&&h.g&&h.g.Object===Object&&h.g,L=typeof self=="object"&&self&&self.Object===Object&&self,W=M||L||Function("return this")(),H=Object.prototype,F=H.toString,u=Math.max,e=Math.min,r=function(){return W.Date.now()};function i(o,d,m){var v,O,S,t,n,a,l=0,I=!1,g=!1,A=!0;if(typeof o!="function")throw new TypeError(x);d=y(d)||0,c(m)&&(I=!!m.leading,g="maxWait"in m,S=g?u(y(m.maxWait)||0,d):S,A="trailing"in m?!!m.trailing:A);function w(b){var k=v,U=O;return v=O=void 0,l=b,t=o.apply(U,k),t}function N(b){return l=b,n=setTimeout(V,d),I?w(b):t}function D(b){var k=b-a,U=b-l,X=d-k;return g?e(X,S-U):X}function B(b){var k=b-a,U=b-l;return a===void 0||k>=d||k<0||g&&U>=S}function V(){var b=r();if(B(b))return J(b);n=setTimeout(V,D(b))}function J(b){return n=void 0,A&&v?w(b):(v=O=void 0,t)}function G(){n!==void 0&&clearTimeout(n),l=0,v=a=O=n=void 0}function Z(){return n===void 0?t:J(r())}function z(){var b=r(),k=B(b);if(v=arguments,O=this,a=b,k){if(n===void 0)return N(a);if(g)return n=setTimeout(V,d),w(a)}return n===void 0&&(n=setTimeout(V,d)),t}return z.cancel=G,z.flush=Z,z}function f(o,d,m){var v=!0,O=!0;if(typeof o!="function")throw new TypeError(x);return c(m)&&(v="leading"in m?!!m.leading:v,O="trailing"in m?!!m.trailing:O),i(o,d,{leading:v,maxWait:d,trailing:O})}function c(o){var d=typeof o;return!!o&&(d=="object"||d=="function")}function s(o){return!!o&&typeof o=="object"}function p(o){return typeof o=="symbol"||s(o)&&F.call(o)==E}function y(o){if(typeof o=="number")return o;if(p(o))return P;if(c(o)){var d=typeof o.valueOf=="function"?o.valueOf():o;o=c(d)?d+"":d}if(typeof o!="string")return o===0?o:+o;o=o.replace(C,"");var m=j.test(o);return m||T.test(o)?R(o.slice(2),m?2:8):_.test(o)?P:+o}$.exports=f}}]);
