(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),s=a(2),c=a.n(s),i=a(14),h=a(10),u=a(4),f=a(5),d=a(7),m=a(6),k=a(8),b=(a(29),"https://reactnd-books-api.udacity.com"),p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:p},g=function(){return fetch("".concat(b,"/books"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(i.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},O=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(i.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=function(){return o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads-Tony Krikorian"))},j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleOnChangeBookshelf=function(e){var t=a.props,n=t.handleOnChangeBookShelf,o=t.bookId,r=t.book,l=e.currentTarget.value;console.log({shelfToMoveValue:l}),a.setState({shelfToMoveValue:l}),n(l,o,r)},a.state={shelfToMoveValue:e.actualShelf},a}return Object(k.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:this.state.shelfToMoveValue,onChange:function(t){e.handleOnChangeBookshelf(t)}},o.a.createElement("option",{disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}}]),t}(n.Component),S=function(e){var t=e.title,a=e.dataBooks,n=e.handleOnChangeBookShelf,r=e.shelfToMove;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},t),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},"error"in a?o.a.createElement("span",null,"There's no results"):o.a.createElement(o.a.Fragment,null,a.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks?e.imageLinks.thumbnail:"",")")}}),o.a.createElement(j,{handleOnChangeBookShelf:n,bookId:e.id,book:e,shelfToMove:r,actualShelf:e.shelf?e.shelf:"none"})),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))})))))},T=a(9),B=function(){return o.a.createElement("div",{className:"open-search"},o.a.createElement(T.b,{to:"/search"},o.a.createElement("button",null,"Add a book")))},C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(k.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentlyReading,a=e.wantToRead,n=e.read,r=e.handleOnChangeBookShelf,l=e.shelfToMove;return o.a.createElement("div",{className:"list-books"},o.a.createElement(y,null),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(S,{title:"Currently Reading",dataBooks:t,handleOnChangeBookShelf:r,shelfToMove:l}),o.a.createElement(S,{title:"Want to Read",dataBooks:a,handleOnChangeBookShelf:r,shelfToMove:l}),o.a.createElement(S,{title:"Read",dataBooks:n,handleOnChangeBookShelf:r,shelfToMove:l}))),o.a.createElement(B,null))}}]),t}(n.Component),w=a(13),R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleOnChange=function(){var e=Object(h.a)(c.a.mark(function e(t){var n,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.state.allBooks,o=t.currentTarget.value,a.setState({textSearch:o}),setTimeout(Object(h.a)(c.a.mark(function e(){var t,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(a.state.textSearch);case 2:"error"in(t=void 0===(t=e.sent)?a.state.error:t)?a.setState({searchResult:a.state.error}):(o=t.map(function(e){return n.find(function(t){return t.id===e.id})||e}),console.log({searchResultModified:o}),a.setState({searchResult:o}));case 5:case"end":return e.stop()}},e,this)})),100);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={textSearch:"",searchResult:[],allBooks:e.allBooks,error:{error:"empty query",items:Array(0)}},a}return Object(k.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state.searchResult,a=this.props.handleOnChangeBookShelf;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(T.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(){var t=Object(h.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleOnChange(a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),value:this.state.textSearch}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},""===this.state.textSearch?o.a.createElement("span",null,"Search a book"):o.a.createElement(S,{dataBooks:t,handleOnChangeBookShelf:a}))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={bookshelfs:{currentlyReading:[],wantToRead:[],read:[],none:[]},allBooks:[],shelfToMove:""},a.componentDidMount=Object(h.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.a)({},a.state.bookshelfs),e.next=3,g();case 3:n=e.sent,console.log(n),t.currentlyReading=n.filter(function(e){return"currentlyReading"===e.shelf}),t.wantToRead=n.filter(function(e){return"wantToRead"===e.shelf}),t.read=n.filter(function(e){return"read"===e.shelf}),a.setState({bookshelfs:t,allBooks:n});case 9:case"end":return e.stop()}},e,this)})),a.handleOnChangeBookShelf=function(){var e=Object(h.a)(c.a.mark(function e(t,n,o){var r,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({bookToMove:o}),r=Object(i.a)({},a.state.bookshelfs),a.setState({shelfToMove:t}),l="",l="shelf"in o?o.shelf:"none",o.shelf=t,r[l][o]=o,console.log({bookToMove:o,shelf:l,shelfToMove:t}),r[t].push(o),r[l]=r[l].filter(function(e){return e.shelf===l}),a.setState({bookshelfs:r}),e.next=13,E(o,t);case 13:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a}return Object(k.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.bookshelfs,n=a.currentlyReading,r=a.wantToRead,l=a.read,s=a.none,c=t.shelfToMove,i=t.allBooks,h={currentlyReading:n,wantToRead:r,read:l,shelfToMove:c,none:s};return o.a.createElement("div",{className:"app"},o.a.createElement(w.c,null,o.a.createElement(w.a,{exact:!0,path:"/",render:function(){return o.a.createElement(C,Object.assign({},h,{handleOnChangeBookShelf:e.handleOnChangeBookShelf}))}}),o.a.createElement(w.a,{path:"/search",render:function(){return o.a.createElement(R,{allBooks:i,handleOnChangeBookShelf:e.handleOnChangeBookShelf})}})))}}]),t}(o.a.Component);a(36);l.a.render(o.a.createElement(T.a,null,o.a.createElement(N,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.103f105f.chunk.js.map