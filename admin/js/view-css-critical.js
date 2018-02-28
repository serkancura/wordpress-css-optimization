O10N[1](function(C,a,D,J,g,m){function F(){var b=a("#critical_css_conditions_container").data("file");try{var e=l.get()}catch(c){return void g[51]("error","Failed to parse condition JSON: "+c.message,!1,!0,function(){})}var h=a('<span class="spinner"></span>');h.insertAfter(a("#critical_css_conditions_container .cancel"));h.css("visibility","visible");h={};h.file=b;h.conditions=JSON.stringify(e);g[24]("critical_css_save_conditions",h,function(c,e,d){if(a("#critical_css_conditions_container .spinner").remove(),
c)g[51]("error",c,!1,!0,function(){}),g[11]("","failed to delete",b,c);else if(v(),c=b.replace(/\.json$/,".css"),c=a('#critical-css-files tr[data-file="'+c+'"]'),c.length){if(c.data("conditions",d&&d[0]?d[0]:""),d[0])1===d[0].length?a(".conditions span",c).html(m[28]):a(".conditions span",c).html(m[29].replace("%d",d[0].length)),d=JSON.stringify(d[0]),50<d.length&&(d=d.substr(0,40)+"&hellip;]"),a(".conditions .json",c).html(d);a("html, body").animate({scrollTop:c.offset().top-50},200)}})}function G(){a(this);
var b=a(this).closest("tr");if(b.hasClass("edit_conditions"))return v(b);var e=b.data("file"),h=b.data("conditions"),c=e.replace(/\.css$/,".json");a("#critical-css-files tr").removeClass("edit_conditions");b.addClass("edit_conditions");a("td.options a.conditions",b).addClass("button-green");a("#critical_css_conditions_container").show();a("#critical_css_conditions_container").data("file",c);a("#critical_css_conditions_container .subhead .file").html(c);a("html, body").animate({scrollTop:a("#critical_css_conditions_container").offset().top-
150},200);g[55](function(b){g[15](function(){a("#critical_css_conditions").html("");var d,e={name:c,mode:"code",modes:["code","tree"],onError:function(a){g[11]("","JSON",a.toString());alert("JSON error. Please verify your input.\n\nSee console for details.")},onChange:function(){try{var b=l.get()}catch(L){return}a("#critical_css_conditions_src").val(JSON.stringify(b))},onModeChange:function(a){"tree"===a&&l.expandAll()},search:!1,schema:g[4]("css.critical.conditions"),ajv:g[59]};if(h)if("string"==
typeof h)try{d=JSON.parse(h)}catch(K){d=[]}else d=h;else d=[];(l=new b(a("#critical_css_conditions")[0],e,d)).compact();l.aceEditor.setOptions({autoScrollEditorIntoView:!0,maxLines:1/0});l.focus();a("#critical_css_conditions_src").data("json-editor",l)})})}function v(b){b||(b=a("#critical-css-files tr"));b.removeClass("edit_conditions");a("td.options a.conditions",b).removeClass("button-green");a("#critical_css_conditions_container").hide()}function H(){var b=a(this),e=a(this).closest("tr"),h=e.data("file");
e.addClass("delete");g[15](function(){setTimeout(function(){if(confirm(m[24])){v();var c=a('<span class="spinner"></span>');b.replaceWith(c);c.css("visibility","visible");c={};c.file=h;c.files=JSON.stringify(p());g[24]("critical_css_delete_file",c,function(b){b?(g[51]("error",b,!1,!0,function(){}),g[11]("","failed to delete",h,b)):(a('tr[rel="'+h+'"]',a("#critical-css-files")).remove(),A(function(){var b=p();b instanceof Array||(b=[]);for(var c=b.length,e=0;e<c;e++)b[e]&&b[e].file===h&&b.splice(e,
1);a('input[name="o10n[css.critical.files]"]').val(JSON.stringify(b));q()}))})}else e.removeClass("delete")})})}function B(){var b=a(this).closest(".submit"),e={};if(e.file=a(".add_critical_file input.file").val(),e.title=a(".add_critical_file input.title").val(),e.priority=a(".add_critical_file input.priority").val(),e.files=JSON.stringify(p()),""!==a.trim(e.file)){if(!/^[a-zA-Z0-9\-\_]+(\.css)?$/.test(e.file))return a(".add_critical_file input.file").focus(),void g[61](b,a(".add_critical_file input.file").data("invalid"));
if(/^[a-zA-Z0-9\-\_]+\.css$/.test(e.file)||(e.file+=".css"),""===a.trim(e.priority)||isNaN(parseInt(e.priority))||1>parseInt(e.priority))return a(".add_critical_file input.priority").focus(),void g[61](b,a(".add_critical_file input.priority").data("invalid"));a(".add_critical_file button").prop("disabled",!0);var h=setTimeout(function(){a(".add_critical_file button").prop("disabled",!1)},3E3);g[61](b,m[21]);g[62](b);g[24]("critical_css_add_file",e,function(c,y){if(g[62](b,!0),a(".add_critical_file button").prop("disabled",
!1),h&&clearTimeout(h),c)g[51]("error",c,!1,!0,function(){}),g[11]("","failed to save",e,c);else{if(y)return void g[61](b,y);a(".add_critical_file input.file").val("");a(".add_critical_file input.title").val("");a(".add_critical_file input.priority").val("");a(".add_critical_file input.file").blur();A(function(){q();g[61](b,m[22],3E3)})}})}}function I(){if(w){for(var b,e=w,h=document.createDocumentFragment(),c=e.length,g=0;g<c;g++){if((b=e[g]).error)(d=a("tr",z.cloneNode(!0))).data("type","error"),
a(".title",d).html(b.title?b.title:b.file),a(".error",d).html(b.error),a(".filepath",d).html(b.D);else{if(b.file)(d=a("tr",t.cloneNode(!0))).data("type","file"),d.data("file",b.D),a(".edit",d).attr("href",b.edit_url),a(".title",d).html(b.title?b.title:b.file),a(".title",d).attr("href",b.edit_url),a(".filepath",d).html(b.D),a(".date",d).html(b.date),a(".size span",d).html(b.hsize);else{if(!b.W)continue;var d=a("tr",u.cloneNode(!0));d.data("type","auto");d.data("auto",JSON.stringify(b));a(".title",
d).html(b.title?b.title:b.file);a(".error",d).html(b.error)}a(".priority input",d).val(b.priority);a(".priority input",d).attr("name","o10n[sort]["+b.file+"]")}b.conditions&&(d.data("conditions",b.conditions),1===b.conditions.length?a(".conditions span",d).html(m[28]):a(".conditions span",d).html(m[29].replace("%d",b.conditions.length)),b=JSON.stringify(b.conditions),50<b.length&&(b=b.substr(0,40)+"&hellip;]"),a(".conditions .json",d).html(b));a(h).append(d)}a("#critical-css-files tr").remove();a("#critical-css-files").append(h)}}
function A(b){var e={files:0};g[24]("critical_css_files_list",e,function(h,c,y){h?(g[51]("error",h,!1,!0,function(){}),g[11]("","failed to save",e,h)):(w=y[0],a('input[name="o10n[css.critical.files]"]').val(JSON.stringify(y[1])),I(),b&&b())})}function q(b){var e=p();if(e instanceof Array||(e=[]),0===a("#critical-css-files tr").length)a("#critical-css-files-empty").show();else{if(a("#critical-css-files-empty").hide(),b)if(n=parseInt(b.val()),!isNaN(n)){var h=b.closest("tr"),c=h.prev(),h=h.next(),g=
!1;c.length&&(d=parseInt(a(".priority input",c).val()),isNaN(d)||n!==d||(a(".priority input",c).val(n+1),a(b).val(d),g=!0));!g&&h.length&&(c=parseInt(a(".priority input",h).val()),isNaN(c)||n!==c||(a(".priority input",h).val(n+1),b.val(c)))}b=a("#critical-css-files tr").get();b.sort(function(b,c){var d=parseInt(a(".priority input",b).val()),e=parseInt(a(".priority input",c).val());return isNaN(d)&&(d=1),isNaN(e)&&(e=1),d===e?0:d<e?-1:1});a.each(b,function(b,c){a("#critical-css-files").append(c)});
var d=0;a("#critical-css-files tr").each(function(b,c){var e=parseInt(a(".priority input",c).val());isNaN(e)&&(e=1);e<=d&&(e=d+1,a(".priority input",c).val(e));d=e});var n;b=e.length;for(c=0;c<b;c++)e[c].file&&(n=parseInt(a('#critical-css-files tr[data-file="'+e[c].file+'"] .priority input').val()),isNaN(n)||(e[c].priority=n));e.sort(function(a,b){return isNaN(a.priority)&&(a.priority=1),isNaN(b.priority)&&(b.priority=1),a.priority===b.priority?0:a.priority<b.priority?-1:1});a('input[name="o10n[css.critical.files]"]').val(JSON.stringify(e))}}
function p(){var b=a('input[name="o10n[css.critical.files]"]').val();if(b)try{return JSON.parse(b)}catch(e){}return[]}!function(a,e,h,c){function b(a,b){return Math.max(0,a[0]-b[0],b[0]-a[1])+Math.max(0,a[2]-b[1],b[1]-a[3])}function d(f,b,c,e){var k=f.length;e=e?"offset":"position";for(c=c||0;k--;){var d=f[k].el?f[k].el:a(f[k]),r=d[e]();r.left+=parseInt(d.css("margin-left"),10);r.top+=parseInt(d.css("margin-top"),10);b[k]=[r.left-c,r.left+d.outerWidth()+c,r.top-c,r.top+d.outerHeight()+c]}}function g(a,
b){var f=b.offset();return{left:a.left-f.left,top:a.top-f.top}}function m(a,k,c){k=[k.left,k.top];c=c&&[c.left,c.top];for(var f,d=a.length,e=[];d--;)f=a[d],e[d]=[d,b(f,k),c&&b(f,c)];return e=e.sort(function(a,f){return f[1]-a[1]||f[2]-a[2]||f[0]-a[0]})}function l(f){this.options=a.extend({},x,f);this.containers=[];this.options.a||(this.scrollProxy=a.proxy(this.scroll,this),this.dragProxy=a.proxy(this.drag,this),this.dropProxy=a.proxy(this.drop,this),this.placeholder=a(this.options.placeholder),f.isValidTarget||
(this.options.isValidTarget=c))}function q(f,b){this.el=f;this.options=a.extend({},v,b);this.group=l.get(this.options);this.a=this.options.a||this.group;this.handle=this.a.options.handle||this.a.options.itemSelector;var c=this.a.options.itemPath;this.target=c?this.el.find(c):this.el;this.target.on(t.start,this.handle,a.proxy(this.o,this));this.options.drop&&this.group.containers.push(this)}var v={drag:!0,drop:!0,exclude:"",nested:!0,vertical:!0},x={afterMove:function(){},containerPath:"",containerSelector:"ol, ul",
distance:0,delay:0,handle:"",itemPath:"",itemSelector:"li",bodyClass:"dragging",draggedClass:"dragged",isValidTarget:function(){return!0},onCancel:function(){},onDrag:function(a,b){a.css(b)},onDragStart:function(f,b){f.css({height:f.outerHeight(),width:f.outerWidth()});f.addClass(b.group.options.draggedClass);a("body").addClass(b.group.options.bodyClass)},onDrop:function(f,b){f.removeClass(b.group.options.draggedClass).removeAttr("style");a("body").removeClass(b.group.options.bodyClass)},onMousedown:function(a,
b,c){if(!c.target.nodeName.match(/^(input|select|textarea)$/i))return c.preventDefault(),!0},placeholderClass:"placeholder",placeholder:'<li class="placeholder"></li>',pullPlaceholder:!0,serialize:function(f,b,c){f=a.extend({},f.data());return c?[b]:(b[0]&&(f.children=b),delete f.X,delete f.sortable,f)},tolerance:0},p={},w=0,z={left:0,top:0,bottom:0,right:0},t={start:"touchstart.sortable mousedown.sortable",drop:"touchend.sortable touchcancel.sortable mouseup.sortable",drag:"touchmove.sortable mousemove.sortable",
scroll:"scroll.sortable"};l.get=function(a){return p[a.group]||(a.group===c&&(a.group=w++),p[a.group]=new l(a)),p[a.group]};l.prototype={o:function(f,b){this.L=a(b.el[0].ownerDocument);var c=a(f.target).closest(this.options.itemSelector);c.length&&(this.item=c,this.H=b,!this.item.is(this.options.exclude)&&this.options.onMousedown(this.item,x.onMousedown,f))&&(this.J(f),this.K("on"),this.V(),this.C=!0)},drag:function(a){if(!this.s){if(!this.N(a)||!this.m)return;this.options.onDragStart(this.item,this.H,
x.onDragStart,a);this.item.before(this.placeholder);this.s=!0}this.J(a);this.options.onDrag(this.item,g(this.b,this.item.offsetParent()),x.onDrag,a);a=this.v(a);var f=this.h,b=this.options.tolerance;(!f||f.top-b>a.top||f.bottom+b<a.top||f.left-b>a.left||f.right+b<a.left)&&(this.i()||(this.placeholder.detach(),this.w=c))},drop:function(a){this.K("off");this.C=!1;this.s&&(this.placeholder.closest("html")[0]?this.placeholder.before(this.item).detach():this.options.onCancel(this.item,this.H,x.onCancel,
a),this.options.onDrop(this.item,this.O(this.item),x.onDrop,a),this.A(),this.B(),this.w=this.h=c,this.s=!1)},i:function(a,b){a||(a=this.I||this.b,b=this.U||this.T);for(var f=m(this.P(),a,b),d=f.length;d--;){var e=f[d][0];if(!f[d][1]||this.options.pullPlaceholder)if(e=this.containers[e],!e.disabled){if(!this.c()){var k=e.u();a=g(a,k);b=g(b,k)}if(e.i(a,b))return!0}}this.h&&(this.h=c)},g:function(a,b,c,d){var f=this.w;!d&&f&&f[0]===b[0]||(b[c](this.placeholder),this.w=b,this.h=d,this.options.afterMove(this.placeholder,
a,b))},P:function(){return this.l||d(this.containers,this.l=[],this.options.tolerance,!this.c()),this.l},O:function(a){return a.closest(this.options.containerSelector).data("sortable")},c:function(){if(this.offsetParent===c){var a=this.containers.length-1,b=this.containers[a].u();if(!this.options.a)for(;a--;)if(b[0]!=this.containers[a].u()[0]){b=!1;break}this.offsetParent=b}return this.offsetParent},J:function(a){a=this.v(a);if(this.c()){var b=g(a,this.c());this.U=this.I;this.I=b}this.T=this.b;this.b=
a},N:function(a){a=this.v(a);return Math.max(Math.abs(this.b.left-a.left),Math.abs(this.b.top-a.top))>=this.options.distance},v:function(a){var b=a.originalEvent||a.originalEvent.touches&&a.originalEvent.touches[0];return{left:a.pageX||b.pageX,top:a.pageY||b.pageY}},V:function(){var a=this;(this.m=!this.options.delay)||(clearTimeout(this.M),this.M=setTimeout(function(){a.m=!0},this.options.delay))},scroll:function(){this.A();this.B()},K:function(b){var f=this;a.each(["drag","drop","scroll"],function(a,
c){f.L[b](t[c],f[c+"Proxy"])})},B:function(){this.offsetParent=c},A:function(){this.traverse(function(a){a._clearDimensions()})},traverse:function(a){a(this);for(var b=this.containers.length;b--;)this.containers[b].traverse(a)},_clearDimensions:function(){this.l=c},_destroy:function(){p[this.options.group]=c}};q.prototype={o:function(a){var b=this.a;!this.disabled&&!b.C&&this.options.drag&&this.S(a)&&b.o(a,this)},S:function(a){return 1==a.which||"touchstart"==a.type&&1==a.originalEvent.touches.length},
i:function(a,b){var c=m(this.R(),a,b),f=c.length,d=this.a,e=!d.options.isValidTarget||d.options.isValidTarget(d.item,this);if(!f&&e)return d.g(this,this.target,"append"),!0;for(;f--;)if(d=c[f][0],!c[f][1]&&this.G(d)){if(this.F(d).i(a,b))return!0}else if(e)return this.g(d,a),!0},g:function(b,c){var d=a(this.items[b]),f=this.f[b],e="after",h=d.outerWidth(),g=d.outerHeight(),k=d.offset(),k={left:k.left,right:k.left+h,top:k.top,bottom:k.top+g};this.options.vertical?c.top<=(f[2]+f[3])/2?(e="before",k.bottom-=
g/2):k.top+=g/2:c.left<=(f[0]+f[1])/2?(e="before",k.right-=h/2):k.left+=h/2;this.G(b)&&(k=z);this.a.g(this,d,e,k)},R:function(){return this.f||(this.items=this.j(this.el,"item").filter(":not(."+this.group.options.placeholderClass+", ."+this.group.options.draggedClass+")").get(),d(this.items,this.f=[],this.options.tolerance)),this.f},u:function(){var a=this.el;return"relative"===a.css("position")||"absolute"===a.css("position")||"fixed"===a.css("position")?a:a.offsetParent()},G:function(a){return this.options.nested&&
this.F(a)},F:function(b){var d=a.data(this.items[b],"subContainers");if(d===c){var e=this.j(this.items[b],"container");if(d=!1,e[0])d=a.extend({},this.options,{a:this.a,group:w++}),d=e.sortable(d).data("sortable").group;a.data(this.items[b],"subContainers",d)}return d},j:function(b,c){var d=this.a.options,e=d[c+"Path"],d=d[c+"Selector"];return b=a(b),e&&(b=b.find(e)),b.children(d)},_serialize:function(b,c){var d=this,e=this.j(b,c?"item":"container").not(this.options.exclude).map(function(){return d._serialize(a(this),
!c)}).get();return this.a.options.serialize(b,e,c)},traverse:function(b){a.each(this.items||[],function(){var c=a.data(this,"subContainers");c&&c.traverse(b)});b(this)},_clearDimensions:function(){this.f=c},_destroy:function(){var b=this;this.target.off(t.start,this.handle);this.el.removeData("sortable");this.options.drop&&(this.group.containers=a.grep(this.group.containers,function(a){return a!=b}));a.each(this.items||[],function(){a.removeData(this,"subContainers")})}};var u={enable:function(){this.traverse(function(a){a.disabled=
!1})},disable:function(){this.traverse(function(a){a.disabled=!0})},serialize:function(){return this._serialize(this.el,!0)},refresh:function(){this.traverse(function(a){a._clearDimensions()})},destroy:function(){this.traverse(function(a){a._destroy()})}};a.extend(q.prototype,u);a.fn.sortable=function(b){var d=Array.prototype.slice.call(arguments,1);return this.map(function(){var e=a(this),f=e.data("sortable");return f&&u[b]?u[b].apply(f,d)||this:(f||b!==c&&"object"!=typeof b||e.data("sortable",new q(e,
b)),this)})}}(jQuery);var t,u,z,w,l;return g[45](function(){q()}),g[14](function(){t||(t=document.importNode(a("#critical-css-files-file")[0].content,!0));u||(u=document.importNode(a("#critical-css-files-auto")[0].content,!0));z||(z=document.importNode(a("#critical-css-files-error")[0].content,!0));a("#critical-css-files > template").remove();g[15](function(){function b(b){var e=a("#criticalcss_editor select")[0].selectize.getValue();""!==e?(/\?/.test(e)?e+="&":e+="?",C.open(e+"o10n-css=1"+(b?"#editor":
""),"o10n-css")):a("#criticalcss_editor select")[0].selectize.open()}a("#critical-css-files").sortable({containerSelector:"tbody",itemPath:"",handle:"span.grip",itemSelector:"tr",placeholder:'<tr class="placeholder"><td colspan="3" style="border-bottom-color:'+g[33]()+'">&nbsp;</td></tr>',onDrop:function(b,g){b.removeClass(g.group.options.draggedClass).removeAttr("style");a("body").removeClass(g.group.options.bodyClass);var c=b.prev(),e=b.next();if(c.length){var d=parseInt(a(".priority input",c).val());
isNaN(d)&&(d=1);c=d+1;a(".priority input",b).val(c)}else c=parseInt(a(".priority input",b).val()),isNaN(c)&&(c=1),e.length&&(c=(d=parseInt(a(".priority input",e).val()))<c&&1<d?d-1:d,a(".priority input",b).val(c));if(e.length&&(d=parseInt(a(".priority input",e).val()),isNaN(d)&&(d=1),d<=c))for(d=c;e.length;)d++,a(".priority input",e).val()<d&&a(".priority input",e).val(d),e=e.next();q(a(".priority input",b))}});a(".add_critical_file button").on("click",B);a(".add_critical_file input").on("keypress",
function(a){"13"==(a.keyCode?a.keyCode:a.which)&&B.call(this)});a("#critical-css-files").on("click",".options .delete",H);a("#critical-css-files").on("click","a.conditions",G);a("#critical-css-files").on("change",".priority input",function(){q(a(this))});a("#critical-css-files-empty a.add").on("click",function(){a("#critical_css_add_file").focus()});a("#critical_css_add_file").on("focus",function(){a(this).addClass("active");a(this).data("idle-placeholder")||a(this).data("idle-placeholder",a(this).attr("placeholder"));
a(this).attr("placeholder",a(this).data("placeholder"));a(".hidden",a(this).parent()).fadeIn("150")});a("#critical_css_add_file").on("blur",function(){""===a(this).val()&&(a(this).attr("placeholder",a(this).data("idle-placeholder")),a(".hidden",a(this).parent()).fadeOut("150"),a(this).removeClass("active"))});a("#critical_css_conditions_container .cancel").on("click",function(){v()});a("#critical_css_conditions_container .save").on("click",F);a("#criticalcss_editor .splitview").on("click",function(){b()});
a("#criticalcss_editor .editor").on("click",function(){b(!0)})})}),D});