(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[4],{1342:function(e,a){},1343:function(e,a){},1366:function(e,a,t){"use strict";t.r(a);var n=t(253),r=t(158),l=t(1301),c=t(610),o=t(0),s=t.n(o),i=t(6),u=t(98),m=t(157),d=(t(1342),t(1333)),p=t(1303),f=t(1256),b=t(1257),g=t(217),E=t(1311),h=t(218),v=(t(75),t(71)),x=t(118),O=t.n(x),y="[CONTACTS APP] GET USER DATA";var j="[CONTACTS APP] GET CONTACTS",P="[CONTACTS APP] SET SEARCH TEXT";var w=function(e){var a=Object(i.b)(),t=Object(i.c)((function(e){return e.contactsApp.contacts.searchText})),r=Object(i.c)((function(e){return e.fuse.settings.mainTheme}));return s.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},s.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},s.a.createElement(d.a,{lgUp:!0},s.a.createElement(f.a,{onClick:function(a){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},s.a.createElement(p.a,null,"menu"))),s.a.createElement("div",{className:"flex items-center"},s.a.createElement(n.a,{animation:"transition.expandIn",delay:300},s.a.createElement(p.a,{className:"text-32"},"account_box")),s.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},s.a.createElement(h.a,{variant:"h6",className:"mx-12 hidden sm:flex"},"Demo Dashboard")))),s.a.createElement("div",{className:"flex flex-1 items-center justify-center px-8 sm:px-12"},s.a.createElement(E.a,{theme:r},s.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},s.a.createElement(g.a,{className:"flex p-4 items-center w-full max-w-512 h-48 px-8 py-4",elevation:1},s.a.createElement(p.a,{color:"action"},"search"),s.a.createElement(b.a,{placeholder:"Buscar",className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a({type:P,searchText:e.target.value})}}))))))},C=t(19),N=t(22),T=(t(1343),t(14)),S=t(200),A=t(1334),k=t(1360),H=t(1364),R=t(1363),I=t(1359),L=t(1365),D=t(1361),B=t(1368),F=t(1362),G=t(1367),M=t(1344),U=t(2),_=t(1348),z=t.n(_),J=t(1350),W=t.n(J),X=t(1349),q=t.n(X),K=t(1347),Q=t.n(K),V=t(41),Y=function(e){var a=Object(V.a)(),t=e.count,n=e.page,r=e.rowsPerPage,l=e.onChangePage;return s.a.createElement("div",{className:"flex-shrink-0 px-12 overflow-hidden"},s.a.createElement(f.a,{onClick:function(e){l(e,0)},disabled:0===n,"aria-label":"first page"},"rtl"===a.direction?s.a.createElement(Q.a,null):s.a.createElement(z.a,null)),s.a.createElement(f.a,{onClick:function(e){l(e,n-1)},disabled:0===n,"aria-label":"previous page"},"rtl"===a.direction?s.a.createElement(q.a,null):s.a.createElement(W.a,null)),s.a.createElement(f.a,{onClick:function(e){l(e,n+1)},disabled:n>=Math.ceil(t/r)-1,"aria-label":"next page"},"rtl"===a.direction?s.a.createElement(W.a,null):s.a.createElement(q.a,null)),s.a.createElement(f.a,{onClick:function(e){l(e,Math.max(0,Math.ceil(t/r)-1))},disabled:n>=Math.ceil(t/r)-1,"aria-label":"last page"},"rtl"===a.direction?s.a.createElement(z.a,null):s.a.createElement(Q.a,null)))},Z=s.a.forwardRef((function(e,a){var t=e.indeterminate,n=Object(S.a)(e,["indeterminate"]),r=s.a.useRef(),l=a||r;return s.a.useEffect((function(){l.current.indeterminate=t}),[l,t]),s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,Object.assign({ref:l},n)))})),$=function(e){var a=e.columns,t=e.data,n=(e.onRowClick,Object(M.useTable)({columns:a,data:t,autoResetPage:!0},M.useGlobalFilter,M.useSortBy,M.usePagination,M.useRowSelect,(function(e){e.allColumns.push((function(e){return[{id:"selection",sortable:!1,Header:function(e){var a=e.getToggleAllRowsSelectedProps;return s.a.createElement("div",null,s.a.createElement(Z,a()))},Cell:function(e){var a=e.row;return s.a.createElement("div",null,s.a.createElement(Z,Object.assign({},a.getToggleRowSelectedProps(),{onClick:function(e){return e.stopPropagation()}})))}}].concat(Object(T.a)(e))}))}))),r=(n.getTableProps,n.headerGroups),l=n.prepareRow,c=n.page,o=n.gotoPage,i=n.setPageSize,u=n.state,m=u.pageIndex,d=u.pageSize;return s.a.createElement(I.a,{className:"min-h-full sm:border-1 sm:rounded-16"},s.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small"},s.a.createElement(D.a,null,r.map((function(e){return s.a.createElement(F.a,e.getHeaderGroupProps(),e.headers.map((function(e){return s.a.createElement(R.a,Object.assign({className:"whitespace-no-wrap p-12"},e.sortable?e.getHeaderProps(e.getSortByToggleProps()):e.getHeaderProps()),e.render("Header"),e.sortable?s.a.createElement(G.a,{active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"}):null)})))}))),s.a.createElement(H.a,null,c.map((function(e,a){return l(e),s.a.createElement(F.a,Object.assign({},e.getRowProps(),{className:"truncate cursor-pointer"}),e.cells.map((function(e){return s.a.createElement(R.a,Object.assign({},e.getCellProps(),{className:Object(U.a)("p-12",e.column.className)}),e.render("Cell"))})))}))),s.a.createElement(L.a,null,s.a.createElement(F.a,null,s.a.createElement(B.a,{classes:{root:"overflow-hidden",spacer:"w-0 max-w-0"},rowsPerPageOptions:[5,10,25,{label:"All",value:t.length+1}],colSpan:5,count:t.length,rowsPerPage:d,page:m,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!1},onChangePage:function(e,a){o(a)},onChangeRowsPerPage:function(e){i(Number(e.target.value))},ActionsComponent:Y})))))};var ee=function(e){var a=Object(i.b)(),t=Object(i.c)((function(e){return e.contactsApp.contacts.entities})),r=Object(i.c)((function(e){return e.contactsApp.contacts.searchText})),l=Object(i.c)((function(e){return e.contactsApp.user})),c=Object(o.useState)(null),u=Object(C.a)(c,2),m=u[0],d=u[1],p=s.a.useMemo((function(){return[{Header:"Fecha de Captura",accessor:"Fecha_de_captura",className:"font-bold",sortable:!0},{Header:"Telefono",accessor:"Telefono",className:"font-bold",sortable:!0},{Header:"Nombre",accessor:"Nombre",sortable:!0},{Header:"Apellido",accessor:"Apellido",sortable:!0},{Header:"Email",accessor:"Email",sortable:!0},{Header:"Seleccion",accessor:"Seleccion",sortable:!0},{Header:"Comentarios",accessor:"Comentarios",sortable:!0},{Header:"Interes de compra",accessor:"Interes_de_compra",sortable:!0},{Header:"Estado",accessor:"Estado",sortable:!0}]}),[a,l.starred]);return Object(o.useEffect)((function(){t&&d(function(e,a){var t=Object.keys(e).map((function(a){return e[a]}));return 0===a.length?t:N.a.filterArrayByString(t,a)}(t,r))}),[t,r]),m?0===m.length?s.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},s.a.createElement(h.a,{color:"textSecondary",variant:"h5"},"No hay contactos")):s.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},s.a.createElement($,{columns:p,data:m})):null},ae=t(107),te=t(1322),ne=t(1306),re=t(1259),le=t(1317),ce=Object(l.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}}}}));var oe=function(e){Object(i.b)();var a=ce(e),t=Object(i.c)((function(e){return e.contactsApp.user}));if(!t)return null;var r=Object.values(t);return r?s.a.createElement("div",{className:"p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4"},s.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:200},s.a.createElement(g.a,{className:"rounded-0 shadow-none lg:rounded-8 lg:shadow-1"},t.length>0&&s.a.createElement("div",{className:"p-24 flex items-center"},"Lista de Archivos"),s.a.createElement(te.a,null),s.a.createElement(ne.a,null,r.map((function(e){return s.a.createElement(re.a,{key:e.id,button:!0,component:ae.a,to:"/apps/contacts/"+e.id,activeClassName:"active",className:a.listItem},s.a.createElement(le.a,{className:"truncate",primary:e.descripcion,disableTypography:!0}))})))))):null},se=t(69),ie=t(9),ue=t(7),me={entities:null,searchText:"",routeParams:{},contactDialog:{type:"new",props:{open:!1},data:null}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case j:return Object(ie.a)({},e,{entities:ue.a.keyBy(a.payload,"id"),routeParams:a.routeParams});case P:return Object(ie.a)({},e,{searchText:a.searchText});default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y:return a.payload;default:return e}},fe=Object(se.d)({contacts:de,user:pe}),be=Object(l.a)({addButton:{position:"absolute",right:12,bottom:12,zIndex:99}});a.default=Object(c.a)("contactsApp",fe)((function(e){var a=Object(i.b)(),t=(be(e),Object(o.useRef)(null)),n=Object(u.h)();return Object(m.b)((function(){a(function(e){var a=v.a.getSpreadData(e.id);return function(t){return a.then((function(a){return t({type:j,payload:a,routeParams:e})}))}}(n)),a(function(){var e=O.a.auth().currentUser,a=v.a.getArchivos(e.email);return function(e){return a.then((function(a){return e({type:y,payload:a})}))}}())}),[a,n]),s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex h-full",leftSidebar:"w-256 border-0"},header:s.a.createElement(w,{pageLayout:t}),content:s.a.createElement(ee,null),leftSidebarContent:s.a.createElement(oe,null),sidebarInner:!0,ref:t,innerScroll:!0}))}))}}]);