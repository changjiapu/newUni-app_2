var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3cf56ac4'])
Z([[7],[3,'canvasId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'10015b92'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'10015b92'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'10a01032'])
Z([3,'_view data-v-73fff5a6 content'])
Z([3,'_view data-v-73fff5a6 addimg'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'imglist']])
Z(z[3])
Z([[2,'!=='],[[6],[[7],[3,'imglist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'imglist']],[3,'length']],[1,5]])
Z([3,'_view data-v-73fff5a6 msg'])
Z([[2,'=='],[[7],[3,'expressId']],[1,0]])
Z([[2,'=='],[[7],[3,'expressId']],[1,1]])
Z(z[11])
Z(z[10])
Z([[7],[3,'categoryName']])
Z([[7],[3,'isShowshangj']])
Z([3,'_view data-v-73fff5a6 btn'])
Z([[2,'!'],[[7],[3,'productId']]])
Z([[7],[3,'productId']])
Z([3,'_view data-v-73fff5a6 btn_2'])
Z(z[17])
Z(z[18])
Z([[7],[3,'isshow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'10a01032'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'12ea4312'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'12ea4312'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3281b45c'])
Z([3,'_view data-v-653b219e content'])
Z([3,'_view data-v-653b219e product'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'productList']])
Z(z[3])
Z([[2,'>'],[[6],[[7],[3,'productList']],[3,'length']],[1,0]])
Z([3,'_view data-v-653b219e item'])
Z([[7],[3,'index']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'publishStatus']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'publishStatus']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'productList']],[3,'length']],[1,0]])
Z([[7],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3281b45c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5914375c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5914375c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'28cad39e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'28cad39e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4ecfa638'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4ecfa638'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'609606d0'])
Z([3,'_view data-v-4d2806f4 content'])
Z([3,'pie'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'609606d0-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3cf56ac4'])
Z([3,'pieChart'])
Z([3,'line'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'609606d0-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[4])
Z([3,'lineChart'])
Z([3,'bar'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'609606d0-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[4])
Z([3,'barChart'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'609606d0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5a5d8af2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5a5d8af2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'612c6f32'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'612c6f32'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'343a76b8'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'productList']])
Z(z[1])
Z([3,'_view data-v-5e16b7b2 footer'])
Z([[2,'=='],[[7],[3,'currentTabs']],[1,1]])
Z(z[6])
Z([[2,'=='],[[7],[3,'currentTabs']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'343a76b8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'922e77e4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'922e77e4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0570b592'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0570b592'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'d0169188'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'d0169188'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0f34477c'])
Z([3,'_view data-v-3f0d2ee5 content'])
Z([[2,'=='],[[7],[3,'currentTabs']],[1,0]])
Z([[2,'=='],[[7],[3,'currentTabs']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0f34477c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7f7950b2'])
Z([[7],[3,'ishow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7f7950b2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'71d77020'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'71d77020'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'452c5c46'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'452c5c46'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'251da032'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'251da032'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4deb1fdc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4deb1fdc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/components/echarts/echarts.vue.wxml','./components/echarts/echarts.vue.wxml','./pages/Account_center/Account_center.vue.wxml','./pages/Account_center/Account_center.wxml','./Account_center.vue.wxml','./pages/addProduct/addProduct.vue.wxml','./pages/addProduct/addProduct.wxml','./addProduct.vue.wxml','./pages/callCenter/callCenter.vue.wxml','./pages/callCenter/callCenter.wxml','./callCenter.vue.wxml','./pages/commodity_management/commodity_management.vue.wxml','./pages/commodity_management/commodity_management.wxml','./commodity_management.vue.wxml','./pages/complain/complain.vue.wxml','./pages/complain/complain.wxml','./complain.vue.wxml','./pages/cz_psssword/cz_psssword.vue.wxml','./pages/cz_psssword/cz_psssword.wxml','./cz_psssword.vue.wxml','./pages/gonggaoFabu/gonggaoFabu.vue.wxml','./pages/gonggaoFabu/gonggaoFabu.wxml','./gonggaoFabu.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/logn/logn.vue.wxml','./pages/logn/logn.wxml','./logn.vue.wxml','./pages/merchant/merchant.vue.wxml','./pages/merchant/merchant.wxml','./merchant.vue.wxml','./pages/myOrder/myOrder.vue.wxml','./pages/myOrder/myOrder.wxml','./myOrder.vue.wxml','./pages/productList/productList.vue.wxml','./pages/productList/productList.wxml','./productList.vue.wxml','./pages/register/register.vue.wxml','./pages/register/register.wxml','./register.vue.wxml','./pages/shiwuzhaoling/shiwuzhaoling.vue.wxml','./pages/shiwuzhaoling/shiwuzhaoling.wxml','./shiwuzhaoling.vue.wxml','./pages/shop_administration/shop_administration.vue.wxml','./pages/shop_administration/shop_administration.wxml','./shop_administration.vue.wxml','./pages/shouruTJ/shouruTJ.vue.wxml','./pages/shouruTJ/shouruTJ.wxml','./shouruTJ.vue.wxml','./pages/userMsg/userMsg.vue.wxml','./pages/userMsg/userMsg.wxml','./userMsg.vue.wxml','./pages/user_center/user_center.vue.wxml','./pages/user_center/user_center.wxml','./user_center.vue.wxml','./pages/wjPassword/wjPassword.vue.wxml','./pages/wjPassword/wjPassword.wxml','./wjPassword.vue.wxml','./pages/xiaolingTJ/xiaolingTJ.vue.wxml','./pages/xiaolingTJ/xiaolingTJ.wxml','./xiaolingTJ.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["3cf56ac4"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':3cf56ac4'
r.wxVkey=b
gg.f=$gdc(f_["./components/echarts/echarts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/echarts/echarts.vue.wxml:canvas:1:27")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["10015b92"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':10015b92'
r.wxVkey=b
gg.f=$gdc(f_["./pages/Account_center/Account_center.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cF=e_[x[4]].i
_ai(cF,x[5],e_,x[4],1,1)
var hG=_v()
_(r,hG)
cs.push("./pages/Account_center/Account_center.wxml:template:2:6")
var oH=_oz(z,1,e,s,gg)
var cI=_gd(x[4],oH,e_,d_)
if(cI){
var oJ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[4],2,18)
cs.pop()
cF.pop()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["10a01032"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[6]+':10a01032'
r.wxVkey=b
gg.f=$gdc(f_["./pages/addProduct/addProduct.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./pages/addProduct/addProduct.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/addProduct/addProduct.vue.wxml:view:1:393")
var cF=_n('view')
_rz(z,cF,'class',2,e,s,gg)
var oH=_v()
_(cF,oH)
cs.push("./pages/addProduct/addProduct.vue.wxml:image:1:628")
var cI=function(lK,oJ,aL,gg){
var eN=_v()
_(aL,eN)
if(_oz(z,7,lK,oJ,gg)){eN.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:image:1:628")
cs.pop()
}
eN.wxXCkey=1
return aL
}
oH.wxXCkey=2
_2z(z,5,cI,e,s,gg,oH,'item','index','index')
cs.pop()
var hG=_v()
_(cF,hG)
if(_oz(z,8,e,s,gg)){hG.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:image:1:814")
cs.pop()
}
hG.wxXCkey=1
cs.pop()
_(oB,cF)
cs.push("./pages/addProduct/addProduct.vue.wxml:view:1:1454")
var bO=_n('view')
_rz(z,bO,'class',9,e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,10,e,s,gg)){oP.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:image:1:1494")
cs.pop()
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,11,e,s,gg)){xQ.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:image:1:1688")
cs.pop()
}
var oR=_v()
_(bO,oR)
if(_oz(z,12,e,s,gg)){oR.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:image:1:1927")
cs.pop()
}
var fS=_v()
_(bO,fS)
if(_oz(z,13,e,s,gg)){fS.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:image:1:2121")
cs.pop()
}
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cs.pop()
_(oB,bO)
var xC=_v()
_(oB,xC)
if(_oz(z,14,e,s,gg)){xC.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:text:1:2490")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,15,e,s,gg)){oD.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:view:1:4674")
cs.push("./pages/addProduct/addProduct.vue.wxml:view:1:4674")
var cT=_n('view')
_rz(z,cT,'class',16,e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,17,e,s,gg)){hU.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:text:1:4739")
cs.pop()
}
var oV=_v()
_(cT,oV)
if(_oz(z,18,e,s,gg)){oV.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:text:1:4893")
cs.pop()
}
hU.wxXCkey=1
oV.wxXCkey=1
cs.pop()
_(oD,cT)
cs.pop()
}
else{oD.wxVkey=2
cs.push("./pages/addProduct/addProduct.vue.wxml:view:1:5053")
cs.push("./pages/addProduct/addProduct.vue.wxml:view:1:5053")
var cW=_n('view')
_rz(z,cW,'class',19,e,s,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,20,e,s,gg)){oX.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:text:1:5103")
cs.pop()
}
var lY=_v()
_(cW,lY)
if(_oz(z,21,e,s,gg)){lY.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:text:1:5181")
cs.pop()
}
oX.wxXCkey=1
lY.wxXCkey=1
cs.pop()
_(oD,cW)
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,22,e,s,gg)){fE.wxVkey=1
cs.push("./pages/addProduct/addProduct.vue.wxml:view:1:5265")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var tM=e_[x[7]].i
_ai(tM,x[8],e_,x[7],1,1)
var eN=_v()
_(r,eN)
cs.push("./pages/addProduct/addProduct.wxml:template:2:6")
var bO=_oz(z,1,e,s,gg)
var oP=_gd(x[7],bO,e_,d_)
if(oP){
var xQ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[7],2,18)
cs.pop()
tM.pop()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["12ea4312"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[9]+':12ea4312'
r.wxVkey=b
gg.f=$gdc(f_["./pages/callCenter/callCenter.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[9]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cT=e_[x[10]].i
_ai(cT,x[11],e_,x[10],1,1)
var hU=_v()
_(r,hU)
cs.push("./pages/callCenter/callCenter.wxml:template:2:6")
var oV=_oz(z,1,e,s,gg)
var cW=_gd(x[10],oV,e_,d_)
if(cW){
var oX=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[10],2,18)
cs.pop()
cT.pop()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["3281b45c"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[12]+':3281b45c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/commodity_management/commodity_management.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
cs.push("./pages/commodity_management/commodity_management.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/commodity_management/commodity_management.vue.wxml:view:1:395")
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var cF=_v()
_(oD,cF)
cs.push("./pages/commodity_management/commodity_management.vue.wxml:view:1:439")
var hG=function(cI,oH,oJ,gg){
var aL=_v()
_(oJ,aL)
if(_oz(z,7,cI,oH,gg)){aL.wxVkey=1
cs.push("./pages/commodity_management/commodity_management.vue.wxml:view:1:439")
cs.push("./pages/commodity_management/commodity_management.vue.wxml:view:1:439")
var tM=_mz(z,'view',['class',8,'key',1],[],cI,oH,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,10,cI,oH,gg)){eN.wxVkey=1
cs.push("./pages/commodity_management/commodity_management.vue.wxml:text:1:760")
cs.pop()
}
var bO=_v()
_(tM,bO)
if(_oz(z,11,cI,oH,gg)){bO.wxVkey=1
cs.push("./pages/commodity_management/commodity_management.vue.wxml:text:1:857")
cs.pop()
}
eN.wxXCkey=1
bO.wxXCkey=1
cs.pop()
_(aL,tM)
cs.pop()
}
aL.wxXCkey=1
return oJ
}
cF.wxXCkey=2
_2z(z,5,hG,e,s,gg,cF,'item','index','index')
cs.pop()
var fE=_v()
_(oD,fE)
if(_oz(z,12,e,s,gg)){fE.wxVkey=1
cs.push("./pages/commodity_management/commodity_management.vue.wxml:view:1:1359")
cs.pop()
}
fE.wxXCkey=1
cs.pop()
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,13,e,s,gg)){xC.wxVkey=1
cs.push("./pages/commodity_management/commodity_management.vue.wxml:view:1:1605")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[12]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var t1=e_[x[13]].i
_ai(t1,x[14],e_,x[13],1,1)
var e2=_v()
_(r,e2)
cs.push("./pages/commodity_management/commodity_management.wxml:template:2:6")
var b3=_oz(z,1,e,s,gg)
var o4=_gd(x[13],b3,e_,d_)
if(o4){
var x5=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[13],2,18)
cs.pop()
t1.pop()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[15]]={}
d_[x[15]]["5914375c"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[15]+':5914375c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/complain/complain.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[15]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var c8=e_[x[16]].i
_ai(c8,x[17],e_,x[16],1,1)
var h9=_v()
_(r,h9)
cs.push("./pages/complain/complain.wxml:template:2:6")
var o0=_oz(z,1,e,s,gg)
var cAB=_gd(x[16],o0,e_,d_)
if(cAB){
var oBB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[16],2,18)
cs.pop()
c8.pop()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[18]]={}
d_[x[18]]["28cad39e"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[18]+':28cad39e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/cz_psssword/cz_psssword.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[18]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var tEB=e_[x[19]].i
_ai(tEB,x[20],e_,x[19],1,1)
var eFB=_v()
_(r,eFB)
cs.push("./pages/cz_psssword/cz_psssword.wxml:template:2:6")
var bGB=_oz(z,1,e,s,gg)
var oHB=_gd(x[19],bGB,e_,d_)
if(oHB){
var xIB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eFB.wxXCkey=3
oHB(xIB,xIB,eFB,gg)
gg.f=cur_globalf
}
else _w(bGB,x[19],2,18)
cs.pop()
tEB.pop()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[x[20]],ic:[]}
d_[x[21]]={}
d_[x[21]]["4ecfa638"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[21]+':4ecfa638'
r.wxVkey=b
gg.f=$gdc(f_["./pages/gonggaoFabu/gonggaoFabu.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[21]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var cLB=e_[x[22]].i
_ai(cLB,x[23],e_,x[22],1,1)
var hMB=_v()
_(r,hMB)
cs.push("./pages/gonggaoFabu/gonggaoFabu.wxml:template:2:6")
var oNB=_oz(z,1,e,s,gg)
var cOB=_gd(x[22],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[22],2,18)
cs.pop()
cLB.pop()
return r
}
e_[x[22]]={f:m15,j:[],i:[],ti:[x[23]],ic:[]}
d_[x[24]]={}
d_[x[24]]["609606d0"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[24]+':609606d0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:1:80")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:template:1:3165")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[24],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[24],1,3266)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/index/index.vue.wxml:template:1:3368")
var oH=_oz(z,8,e,s,gg)
var cI=_gd(x[24],oH,e_,d_)
if(cI){
var oJ=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[24],1,3471)
cs.pop()
var lK=_v()
_(oB,lK)
cs.push("./pages/index/index.vue.wxml:template:1:3573")
var aL=_oz(z,12,e,s,gg)
var tM=_gd(x[24],aL,e_,d_)
if(tM){
var eN=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[24],1,3674)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var aRB=e_[x[24]].i
_ai(aRB,x[1],e_,x[24],1,1)
aRB.pop()
return r
}
e_[x[24]]={f:m16,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[25]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var eTB=e_[x[25]].i
_ai(eTB,x[26],e_,x[25],1,1)
var bUB=_v()
_(r,bUB)
cs.push("./pages/index/index.wxml:template:2:6")
var oVB=_oz(z,1,e,s,gg)
var xWB=_gd(x[25],oVB,e_,d_)
if(xWB){
var oXB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bUB.wxXCkey=3
xWB(oXB,oXB,bUB,gg)
gg.f=cur_globalf
}
else _w(oVB,x[25],2,18)
cs.pop()
eTB.pop()
return r
}
e_[x[25]]={f:m17,j:[],i:[],ti:[x[26]],ic:[]}
d_[x[27]]={}
d_[x[27]]["5a5d8af2"]=function(e,s,r,gg){
var z=gz$gwx_19()
var b=x[27]+':5a5d8af2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/logn/logn.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[27]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var h1B=e_[x[28]].i
_ai(h1B,x[29],e_,x[28],1,1)
var o2B=_v()
_(r,o2B)
cs.push("./pages/logn/logn.wxml:template:2:6")
var c3B=_oz(z,1,e,s,gg)
var o4B=_gd(x[28],c3B,e_,d_)
if(o4B){
var l5B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o2B.wxXCkey=3
o4B(l5B,l5B,o2B,gg)
gg.f=cur_globalf
}
else _w(c3B,x[28],2,18)
cs.pop()
h1B.pop()
return r
}
e_[x[28]]={f:m19,j:[],i:[],ti:[x[29]],ic:[]}
d_[x[30]]={}
d_[x[30]]["612c6f32"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[30]+':612c6f32'
r.wxVkey=b
gg.f=$gdc(f_["./pages/merchant/merchant.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[30]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[30]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var e8B=e_[x[31]].i
_ai(e8B,x[32],e_,x[31],1,1)
var b9B=_v()
_(r,b9B)
cs.push("./pages/merchant/merchant.wxml:template:2:6")
var o0B=_oz(z,1,e,s,gg)
var xAC=_gd(x[31],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[31],2,18)
cs.pop()
e8B.pop()
return r
}
e_[x[31]]={f:m21,j:[],i:[],ti:[x[32]],ic:[]}
d_[x[33]]={}
d_[x[33]]["343a76b8"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[33]+':343a76b8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myOrder/myOrder.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[33]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/myOrder/myOrder.vue.wxml:view:1:451")
var xC=function(fE,oD,cF,gg){
cs.push("./pages/myOrder/myOrder.vue.wxml:view:1:1083")
var oH=_n('view')
_rz(z,oH,'class',5,fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,6,fE,oD,gg)){cI.wxVkey=1
cs.push("./pages/myOrder/myOrder.vue.wxml:text:1:1126")
cs.pop()
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,7,fE,oD,gg)){oJ.wxVkey=1
cs.push("./pages/myOrder/myOrder.vue.wxml:text:1:1299")
cs.pop()
}
var lK=_v()
_(oH,lK)
if(_oz(z,8,fE,oD,gg)){lK.wxVkey=1
cs.push("./pages/myOrder/myOrder.vue.wxml:text:1:1472")
cs.pop()
}
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
cs.pop()
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','index')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[33]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var hEC=e_[x[34]].i
_ai(hEC,x[35],e_,x[34],1,1)
var oFC=_v()
_(r,oFC)
cs.push("./pages/myOrder/myOrder.wxml:template:2:6")
var cGC=_oz(z,1,e,s,gg)
var oHC=_gd(x[34],cGC,e_,d_)
if(oHC){
var lIC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oFC.wxXCkey=3
oHC(lIC,lIC,oFC,gg)
gg.f=cur_globalf
}
else _w(cGC,x[34],2,18)
cs.pop()
hEC.pop()
return r
}
e_[x[34]]={f:m23,j:[],i:[],ti:[x[35]],ic:[]}
d_[x[36]]={}
d_[x[36]]["922e77e4"]=function(e,s,r,gg){
var z=gz$gwx_25()
var b=x[36]+':922e77e4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/productList/productList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[36]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[36]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var eLC=e_[x[37]].i
_ai(eLC,x[38],e_,x[37],1,1)
var bMC=_v()
_(r,bMC)
cs.push("./pages/productList/productList.wxml:template:2:6")
var oNC=_oz(z,1,e,s,gg)
var xOC=_gd(x[37],oNC,e_,d_)
if(xOC){
var oPC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bMC.wxXCkey=3
xOC(oPC,oPC,bMC,gg)
gg.f=cur_globalf
}
else _w(oNC,x[37],2,18)
cs.pop()
eLC.pop()
return r
}
e_[x[37]]={f:m25,j:[],i:[],ti:[x[38]],ic:[]}
d_[x[39]]={}
d_[x[39]]["0570b592"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[39]+':0570b592'
r.wxVkey=b
gg.f=$gdc(f_["./pages/register/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[39]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[39]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var hSC=e_[x[40]].i
_ai(hSC,x[41],e_,x[40],1,1)
var oTC=_v()
_(r,oTC)
cs.push("./pages/register/register.wxml:template:2:6")
var cUC=_oz(z,1,e,s,gg)
var oVC=_gd(x[40],cUC,e_,d_)
if(oVC){
var lWC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oTC.wxXCkey=3
oVC(lWC,lWC,oTC,gg)
gg.f=cur_globalf
}
else _w(cUC,x[40],2,18)
cs.pop()
hSC.pop()
return r
}
e_[x[40]]={f:m27,j:[],i:[],ti:[x[41]],ic:[]}
d_[x[42]]={}
d_[x[42]]["d0169188"]=function(e,s,r,gg){
var z=gz$gwx_29()
var b=x[42]+':d0169188'
r.wxVkey=b
gg.f=$gdc(f_["./pages/shiwuzhaoling/shiwuzhaoling.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[42]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[42]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var eZC=e_[x[43]].i
_ai(eZC,x[44],e_,x[43],1,1)
var b1C=_v()
_(r,b1C)
cs.push("./pages/shiwuzhaoling/shiwuzhaoling.wxml:template:2:6")
var o2C=_oz(z,1,e,s,gg)
var x3C=_gd(x[43],o2C,e_,d_)
if(x3C){
var o4C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b1C.wxXCkey=3
x3C(o4C,o4C,b1C,gg)
gg.f=cur_globalf
}
else _w(o2C,x[43],2,18)
cs.pop()
eZC.pop()
return r
}
e_[x[43]]={f:m29,j:[],i:[],ti:[x[44]],ic:[]}
d_[x[45]]={}
d_[x[45]]["0f34477c"]=function(e,s,r,gg){
var z=gz$gwx_31()
var b=x[45]+':0f34477c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/shop_administration/shop_administration.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[45]);return}
p_[b]=true
try{
cs.push("./pages/shop_administration/shop_administration.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/shop_administration/shop_administration.vue.wxml:view:1:507")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/shop_administration/shop_administration.vue.wxml:view:1:2287")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[45]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var h7C=e_[x[46]].i
_ai(h7C,x[47],e_,x[46],1,1)
var o8C=_v()
_(r,o8C)
cs.push("./pages/shop_administration/shop_administration.wxml:template:2:6")
var c9C=_oz(z,1,e,s,gg)
var o0C=_gd(x[46],c9C,e_,d_)
if(o0C){
var lAD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o8C.wxXCkey=3
o0C(lAD,lAD,o8C,gg)
gg.f=cur_globalf
}
else _w(c9C,x[46],2,18)
cs.pop()
h7C.pop()
return r
}
e_[x[46]]={f:m31,j:[],i:[],ti:[x[47]],ic:[]}
d_[x[48]]={}
d_[x[48]]["7f7950b2"]=function(e,s,r,gg){
var z=gz$gwx_33()
var b=x[48]+':7f7950b2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/shouruTJ/shouruTJ.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[48]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/shouruTJ/shouruTJ.vue.wxml:view:1:1605")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[48]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var eDD=e_[x[49]].i
_ai(eDD,x[50],e_,x[49],1,1)
var bED=_v()
_(r,bED)
cs.push("./pages/shouruTJ/shouruTJ.wxml:template:2:6")
var oFD=_oz(z,1,e,s,gg)
var xGD=_gd(x[49],oFD,e_,d_)
if(xGD){
var oHD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bED.wxXCkey=3
xGD(oHD,oHD,bED,gg)
gg.f=cur_globalf
}
else _w(oFD,x[49],2,18)
cs.pop()
eDD.pop()
return r
}
e_[x[49]]={f:m33,j:[],i:[],ti:[x[50]],ic:[]}
d_[x[51]]={}
d_[x[51]]["71d77020"]=function(e,s,r,gg){
var z=gz$gwx_35()
var b=x[51]+':71d77020'
r.wxVkey=b
gg.f=$gdc(f_["./pages/userMsg/userMsg.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[51]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[51]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var hKD=e_[x[52]].i
_ai(hKD,x[53],e_,x[52],1,1)
var oLD=_v()
_(r,oLD)
cs.push("./pages/userMsg/userMsg.wxml:template:2:6")
var cMD=_oz(z,1,e,s,gg)
var oND=_gd(x[52],cMD,e_,d_)
if(oND){
var lOD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oLD.wxXCkey=3
oND(lOD,lOD,oLD,gg)
gg.f=cur_globalf
}
else _w(cMD,x[52],2,18)
cs.pop()
hKD.pop()
return r
}
e_[x[52]]={f:m35,j:[],i:[],ti:[x[53]],ic:[]}
d_[x[54]]={}
d_[x[54]]["452c5c46"]=function(e,s,r,gg){
var z=gz$gwx_37()
var b=x[54]+':452c5c46'
r.wxVkey=b
gg.f=$gdc(f_["./pages/user_center/user_center.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[54]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[54]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var eRD=e_[x[55]].i
_ai(eRD,x[56],e_,x[55],1,1)
var bSD=_v()
_(r,bSD)
cs.push("./pages/user_center/user_center.wxml:template:2:6")
var oTD=_oz(z,1,e,s,gg)
var xUD=_gd(x[55],oTD,e_,d_)
if(xUD){
var oVD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bSD.wxXCkey=3
xUD(oVD,oVD,bSD,gg)
gg.f=cur_globalf
}
else _w(oTD,x[55],2,18)
cs.pop()
eRD.pop()
return r
}
e_[x[55]]={f:m37,j:[],i:[],ti:[x[56]],ic:[]}
d_[x[57]]={}
d_[x[57]]["251da032"]=function(e,s,r,gg){
var z=gz$gwx_39()
var b=x[57]+':251da032'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wjPassword/wjPassword.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[57]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[57]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var hYD=e_[x[58]].i
_ai(hYD,x[59],e_,x[58],1,1)
var oZD=_v()
_(r,oZD)
cs.push("./pages/wjPassword/wjPassword.wxml:template:2:6")
var c1D=_oz(z,1,e,s,gg)
var o2D=_gd(x[58],c1D,e_,d_)
if(o2D){
var l3D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oZD.wxXCkey=3
o2D(l3D,l3D,oZD,gg)
gg.f=cur_globalf
}
else _w(c1D,x[58],2,18)
cs.pop()
hYD.pop()
return r
}
e_[x[58]]={f:m39,j:[],i:[],ti:[x[59]],ic:[]}
d_[x[60]]={}
d_[x[60]]["4deb1fdc"]=function(e,s,r,gg){
var z=gz$gwx_41()
var b=x[60]+':4deb1fdc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/xiaolingTJ/xiaolingTJ.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[60]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[60]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var e6D=e_[x[61]].i
_ai(e6D,x[62],e_,x[61],1,1)
var b7D=_v()
_(r,b7D)
cs.push("./pages/xiaolingTJ/xiaolingTJ.wxml:template:2:6")
var o8D=_oz(z,1,e,s,gg)
var x9D=_gd(x[61],o8D,e_,d_)
if(x9D){
var o0D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b7D.wxXCkey=3
x9D(o0D,o0D,b7D,gg)
gg.f=cur_globalf
}
else _w(o8D,x[61],2,18)
cs.pop()
e6D.pop()
return r
}
e_[x[61]]={f:m41,j:[],i:[],ti:[x[62]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/commodity_management/commodity_management","pages/index/index","pages/logn/logn","pages/merchant/merchant","pages/shop_administration/shop_administration","pages/register/register","pages/user_center/user_center","pages/userMsg/userMsg","pages/productList/productList","pages/xiaolingTJ/xiaolingTJ","pages/shouruTJ/shouruTJ","pages/addProduct/addProduct","pages/myOrder/myOrder","pages/Account_center/Account_center","pages/cz_psssword/cz_psssword","pages/callCenter/callCenter","pages/complain/complain","pages/gonggaoFabu/gonggaoFabu","pages/shiwuzhaoling/shiwuzhaoling","pages/wjPassword/wjPassword"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"","navigationBarBackgroundColor":"#6d71d5","backgroundColor":"#6d71d5"},"usingComponents":{},"tabBar":{"color":"#7A7E83","selectedColor":"#ed7185","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/commodity_management/commodity_management","iconPath":"static/shnagpinguanli_23.png","selectedIconPath":"static/shangpinguanlixuanzhong_25.png","text":"商品管理"},{"pagePath":"pages/shop_administration/shop_administration","iconPath":"static/shangpuguanli_20.png","selectedIconPath":"static/shangpuguanlixuanzhong_03.png","text":"店铺管理"},{"pagePath":"pages/user_center/user_center","iconPath":"static/gerenzhongxin_25.png","selectedIconPath":"static/wodexuanzhong_22.png","text":"个人中心"},{"pagePath":"pages/index/index","iconPath":"static/baobiaotongjiweixuanzhong_22.png","selectedIconPath":"static/baobiaotongji_17.png","text":"报表统计"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"西港商户端","compilerVersion":"1.9.9"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/Account_center/Account_center.json']={"usingComponents":{},"navigationBarTitleText":"账户设置"};
__wxAppCode__['pages/Account_center/Account_center.wxml']=$gwx('./pages/Account_center/Account_center.wxml');

__wxAppCode__['pages/addProduct/addProduct.json']={"usingComponents":{},"navigationBarTitleText":"商品添加"};
__wxAppCode__['pages/addProduct/addProduct.wxml']=$gwx('./pages/addProduct/addProduct.wxml');

__wxAppCode__['pages/callCenter/callCenter.json']={"usingComponents":{},"navigationBarTitleText":"联系客服"};
__wxAppCode__['pages/callCenter/callCenter.wxml']=$gwx('./pages/callCenter/callCenter.wxml');

__wxAppCode__['pages/commodity_management/commodity_management.json']={"usingComponents":{},"navigationBarTitleText":"商品管理"};
__wxAppCode__['pages/commodity_management/commodity_management.wxml']=$gwx('./pages/commodity_management/commodity_management.wxml');

__wxAppCode__['pages/complain/complain.json']={"usingComponents":{},"navigationBarTitleText":"意见反馈"};
__wxAppCode__['pages/complain/complain.wxml']=$gwx('./pages/complain/complain.wxml');

__wxAppCode__['pages/cz_psssword/cz_psssword.json']={"usingComponents":{},"navigationBarTitleText":"重置密码"};
__wxAppCode__['pages/cz_psssword/cz_psssword.wxml']=$gwx('./pages/cz_psssword/cz_psssword.wxml');

__wxAppCode__['pages/gonggaoFabu/gonggaoFabu.json']={"usingComponents":{},"navigationBarTitleText":"公告发布"};
__wxAppCode__['pages/gonggaoFabu/gonggaoFabu.wxml']=$gwx('./pages/gonggaoFabu/gonggaoFabu.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{},"navigationBarTitleText":"报表统计"};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/logn/logn.json']={"usingComponents":{},"navigationBarTitleText":"商户端登录"};
__wxAppCode__['pages/logn/logn.wxml']=$gwx('./pages/logn/logn.wxml');

__wxAppCode__['pages/merchant/merchant.json']={"usingComponents":{},"navigationBarTitleText":"商家入驻"};
__wxAppCode__['pages/merchant/merchant.wxml']=$gwx('./pages/merchant/merchant.wxml');

__wxAppCode__['pages/myOrder/myOrder.json']={"usingComponents":{},"navigationBarTitleText":"订单确认"};
__wxAppCode__['pages/myOrder/myOrder.wxml']=$gwx('./pages/myOrder/myOrder.wxml');

__wxAppCode__['pages/productList/productList.json']={"usingComponents":{},"navigationBarTitleText":"商品统计表"};
__wxAppCode__['pages/productList/productList.wxml']=$gwx('./pages/productList/productList.wxml');

__wxAppCode__['pages/register/register.json']={"usingComponents":{},"navigationBarTitleText":"注册"};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/shiwuzhaoling/shiwuzhaoling.json']={"usingComponents":{},"navigationBarTitleText":"失物招领"};
__wxAppCode__['pages/shiwuzhaoling/shiwuzhaoling.wxml']=$gwx('./pages/shiwuzhaoling/shiwuzhaoling.wxml');

__wxAppCode__['pages/shop_administration/shop_administration.json']={"usingComponents":{},"navigationBarTitleText":"店铺管理"};
__wxAppCode__['pages/shop_administration/shop_administration.wxml']=$gwx('./pages/shop_administration/shop_administration.wxml');

__wxAppCode__['pages/shouruTJ/shouruTJ.json']={"usingComponents":{},"navigationBarTitleText":"收入统计表"};
__wxAppCode__['pages/shouruTJ/shouruTJ.wxml']=$gwx('./pages/shouruTJ/shouruTJ.wxml');

__wxAppCode__['pages/user_center/user_center.json']={"usingComponents":{},"navigationBarTitleText":"个人中心"};
__wxAppCode__['pages/user_center/user_center.wxml']=$gwx('./pages/user_center/user_center.wxml');

__wxAppCode__['pages/userMsg/userMsg.json']={"usingComponents":{},"navigationBarTitleText":"个人信息"};
__wxAppCode__['pages/userMsg/userMsg.wxml']=$gwx('./pages/userMsg/userMsg.wxml');

__wxAppCode__['pages/wjPassword/wjPassword.json']={"usingComponents":{},"navigationBarTitleText":"忘记密码"};
__wxAppCode__['pages/wjPassword/wjPassword.wxml']=$gwx('./pages/wjPassword/wjPassword.wxml');

__wxAppCode__['pages/xiaolingTJ/xiaolingTJ.json']={"usingComponents":{},"navigationBarTitleText":"销量统计表"};
__wxAppCode__['pages/xiaolingTJ/xiaolingTJ.wxml']=$gwx('./pages/xiaolingTJ/xiaolingTJ.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1ea1":function(t,e,n){"use strict";n.r(e);var o=n("b566");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("5026");var u,c,a=n("2877"),f=Object(a["a"])(o["default"],u,c,!1,null,null,null);e["default"]=f.exports},5026:function(t,e,n){"use strict";var o=n("73ac"),r=n.n(o);r.a},"55f0":function(t,e,n){"use strict";n("0cb7");var o=c(n("f3d3")),r=c(n("1ea1")),u=c(n("37d1"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,o.default.prototype.$store=u.default,r.default.mpType="app";var i=new o.default(a({store:u.default},r.default));i.$mount()},"73ac":function(t,e,n){},b566:function(t,e,n){"use strict";n.r(e);var o=n("ff02"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},ff02:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){var e=t.getStorageSync("userId"),n=t.getStorageSync("token"),o=t.getStorageSync("shopId");e&&(this.$store.commit("SET_SHOPID",o),this.$store.commit("SET_USERID",e),this.$store.commit("SET_TOKEN",n))},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=n}).call(this,n("6e42")["default"])}},[["55f0","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0cb7":function(t,e,n){},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return P}),n.d(e,"mapState",function(){return I}),n.d(e,"mapMutations",function(){return C}),n.d(e,"mapGetters",function(){return j}),n.d(e,"mapActions",function(){return E}),n.d(e,"createNamespacedHelpers",function(){return T});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,f);var p=function(t){this.register([],t,!1)};function l(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;l(t.concat(r),e.getChild(r),n.modules[r])}}p.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},p.prototype.update=function(t){l([],this.root,t)},p.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new c(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var h=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&P(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,u=s.dispatch,c=s.commit;this.dispatch=function(t,e){return u.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,g(this,o,[],this._modules.root),m(this,o),n.forEach(function(t){return t(e)}),d.config.devtools&&i(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;g(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:i}),d.config.silent=s,t.strict&&A(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),d.nextTick(function(){return r.$destroy()}))}function g(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=S(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){d.set(s,u,r.state)})}var c=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;w(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;O(t,r,o,c)}),r.forEachGetter(function(e,n){var r=a+n;x(t,r,e,c)}),r.forEachChild(function(r,i){g(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,u=i.type;return s&&s.root||(u=e+u),t.dispatch(u,a)},commit:r?t.commit:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,u=i.type;s&&s.root||(u=e+u),t.commit(u,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return $(t,e)}},state:{get:function(){return S(t.state,n)}}}),o}function $(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function w(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function O(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return u(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function x(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function A(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function S(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function P(t){d&&t===d||(d=t,r(d))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var r=this,o=k(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),u=this._mutations[i];u&&(this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},h.prototype.dispatch=function(t,e){var n=this,r=k(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},h.prototype.subscribe=function(t){return y(t,this._subscribers)},h.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),g(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=S(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),_(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var I=M(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=R(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),C=M(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=R(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),j=M(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||R(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),E=M(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=R(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),T=function(t){return{mapState:I.bind(null,t),mapGetters:j.bind(null,t),mapMutations:C.bind(null,t),mapActions:E.bind(null,t)}};function N(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function M(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function R(t,e,n){var r=t._modulesNamespaceMap[n];return r}var D={Store:h,install:P,version:"3.0.1",mapState:I,mapMutations:C,mapGetters:j,mapActions:E,createNamespacedHelpers:T};e["default"]=D},"37d1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("f3d3")),o=i(n("2f62"));function i(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var a=new o.default.Store({state:{userId:"",token:"",shopId:""},mutations:{SET_USERID:function(t,e){t.userId=e},SET_TOKEN:function(t,e){t.token=e},SET_SHOPID:function(t,e){t.shopId=e}},actions:{}}),s=a;e.default=s},"6e42":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=xt,e.createPage=kt,e.createComponent=It,e.default=void 0;var r=o(n("f3d3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=Object.prototype.toString,s=Object.prototype.hasOwnProperty;function u(t){return"function"===typeof t}function c(t){return"string"===typeof t}function f(t){return"[object Object]"===a.call(t)}function p(t,e){return s.call(t,e)}function l(){}function d(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var h=/-(\w)/g,v=d(function(t){return t.replace(h,function(t,e){return e?e.toUpperCase():""})}),y=/subNVue|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/,_=/^create|Manager$/,m=/^on/;function g(t){return _.test(t)}function b(t){return y.test(t)}function $(t){return m.test(t)}function w(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function O(t){return!(g(t)||b(t)||$(t))}function x(t,e){return O(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return u(t.success)||u(t.fail)||u(t.complete)?e.apply(void 0,[t].concat(r)):w(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}:e}var A=1e-4,S=750,k=!1,P=0,I=0;function C(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;P=r,I=n,k="ios"===e}function j(t,e){if(0===P&&C(),t=Number(t),0===t)return 0;var n=t/S*(e||P);return n<0&&(n=-n),n=Math.floor(n+A),0===n?1!==I&&k?.5:1:t<0?-n:n}var E={},T=[],N=[],M=["success","fail","cancel","complete"];function R(t,e,n){return function(r){return e(B(t,r,n))}}function D(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(f(e)){var i=!0===o?e:{};for(var a in u(n)&&(n=n(e,i)||{}),e)if(p(n,a)){var s=n[a];u(s)&&(s=s(e[a],e,i)),s?c(s)?i[s]=e[a]:f(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==M.indexOf(a)?i[a]=R(t,e[a],r):o||(i[a]=e[a]);return i}return u(e)&&(e=R(t,e,r)),e}function B(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return u(E.returnValue)&&(e=E.returnValue(t,e)),D(t,e,n,{},r)}function U(t,e){if(p(E,t)){var n=E[t];return n?function(e,r){var o=n;u(n)&&(o=n(e)),e=D(t,e,o.args,o.returnValue);var i=wx[o.name||t](e,r);return b(t)?B(t,i,o.returnValue,g(t)):i}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var q=Object.create(null),L=["subscribePush","unsubscribePush","onPush","offPush","share"];function V(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};u(n)&&n(o),u(r)&&r(o)}}function H(t){if(t.$processed=!0,t.__uniapp_mask_id){var e=t.__uniapp_mask,n=plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,o=t.hide,i=t.close,a=function(){n.setStyle({mask:e})},s=function(){n.setStyle({mask:"none"})};t.show=function(){a();for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r.apply(t,n)},t.hide=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){s(),u=[];for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e,options:{id:t.id}},t.id)};var u=[];t.onMessage=function(t){u.push(t)},t.$consumeMessage=function(t){u.forEach(function(e){return e(t)})}}}L.forEach(function(t){q[t]=V(t)});var W={getSubNVueById:function(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&H(e),e}};function F(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var G=Object.freeze({requireNativePlugin:F,subNVue:W}),z=Page,J=Component,K=/:/g,X=d(function(t){return v(t.replace(K,"-"))});function Z(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[X(n)].concat(o))}}}function Q(t,e){var n=e[t];e[t]=n?function(){Z(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Z(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Q("onLoad",t),z(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Q("created",t),J(t)};var Y=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function tt(t){return Behavior(t)}function et(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function nt(t,e){t.triggerEvent("__l",t.$vm||e,{bubbles:!0,composed:!0})}function rt(t){t.detail.$mp?t.detail.$parent||(t.detail.$parent=this.$vm,t.detail.$parent.$children.push(t.detail),t.detail.$root=this.$vm.$root):t.detail.parent||(t.detail.parent=this.$vm)}function ot(t){return it(t)}function it(t){return t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},Component(t)}function at(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){p(n,e)&&(t[e]=n[e])})}function st(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm.__call_hook(e,t)}})}function ut(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return f(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||p(n,t)||(n[t]=r[t])}),n}var ct=[String,Number,Boolean,Object,Array,null];function ft(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function pt(t){var e=t["behaviors"],n=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var i=[];return Array.isArray(e)&&e.forEach(function(t){i.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]=String,o["value"]=null))}),f(n)&&n.props&&i.push(tt({properties:dt(n.props,!0)})),Array.isArray(r)&&r.forEach(function(t){f(t)&&t.props&&i.push(tt({properties:dt(t.props,!0)}))}),i}function lt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function dt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:ft(t)}}):f(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(f(o)){var i=o["default"];u(i)&&(i=i()),o.type=lt(e,o.type,i,n),r[e]={type:-1!==ct.indexOf(o.type)?o.type:null,value:i,observer:ft(e)}}else{var a=lt(e,o,null,n);r[e]={type:-1!==ct.indexOf(a)?a:null,observer:ft(e)}}}),r}function ht(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=l,t.preventDefault=l,t.target=t.target||{},p(t,"detail")||(t.detail={}),f(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function vt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):f(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function yt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=vt(t,e)}),r}function _t(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function mt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=yt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(_t(t)):"string"===typeof t&&p(s,t)?u.push(s[t]):u.push(t)}),u}var gt="~",bt="^";function $t(t){var e=this;t=ht(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===bt;o=a?o.slice(1):o;var s=o.charAt(0)===gt;o=s?o.slice(1):o,i&&r===o&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm[r];if(!u(o))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(e.$vm,mt(e.$vm,t,n[1],n[2],a,r))}})})}var wt=["onHide","onError","onPageNotFound","onUniNViewMessage"];function Ot(t){this.$vm||(this.$vm=t,this.$vm.$mp={app:this})}function xt(t){r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(et(this),at(this,Y)))},created:function(){this.__init_injections(this),this.__init_provide(this)}});var e={onLaunch:function(e){Ot.call(this,t),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onLaunch",e)},onShow:function(e){Ot.call(this,t),this.$vm.__call_hook("onShow",e)}};return e.globalData=t.$options.globalData||{},st(e,wt),App(e),t}var At=["onShow","onHide","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap","onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function St(t){this.$vm||(this.$vm=new t({mpType:"page",mpInstance:this}),this.$vm.__call_hook("created"),this.$vm.$mount())}function kt(t){var e;t=t.default||t,u(t)?(e=t,t=e.extendOptions):e=r.default.extend(t);var n={options:{multipleSlots:!0,addGlobalClass:!0},data:ut(t,r.default.prototype),lifetimes:{attached:function(){St.call(this,e)},ready:function(){this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},methods:{onLoad:function(t){St.call(this,e),this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},onUnload:function(){this.$vm.__call_hook("onUnload")},__e:$t,__l:rt}};return st(n.methods,At),ot(n,t)}function Pt(t){if(!this.$vm){var e=this.properties,n={mpType:"component",mpInstance:this,propsData:e};this.$vm=new t(n);var r=e.vueSlots;if(Array.isArray(r)&&r.length){var o=Object.create(null);r.forEach(function(t){o[t]=!0}),this.$vm.$scopedSlots=this.$vm.$slots=o}this.$vm.$mount()}}function It(t){var e;t=t.default||t,u(t)?(e=t,t=e.extendOptions):e=r.default.extend(t);var n=pt(t),o=dt(t.props,!1,t.__file),i={options:{multipleSlots:!0,addGlobalClass:!0},data:ut(t,r.default.prototype),behaviors:n,properties:o,lifetimes:{attached:function(){Pt.call(this,e)},ready:function(){Pt.call(this,e),nt(this),this.$vm.__call_hook("created"),this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__e:$t,__l:rt}};return it(i,t)}T.forEach(function(t){E[t]=!1}),N.forEach(function(t){var e=E[t]&&E[t].name?E[t].name:t;wx.canIUse(e)||(E[t]=!1)});var Ct={};"undefined"!==typeof Proxy?Ct=new Proxy({},{get:function(t,e){return"upx2px"===e?j:G[e]?x(e,G[e]):p(wx,e)||p(E,e)?x(e,U(e,wx[e])):void 0}}):(Ct.upx2px=j,Object.keys(G).forEach(function(t){Ct[t]=x(t,G[t])}),Object.keys(wx).forEach(function(t){(p(wx,t)||p(E,t))&&(Ct[t]=x(t,U(t,wx[t])))}));var jt=Ct,Et=jt;e.default=Et},a021:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imgURl=e.baseURL=void 0;var r="http://114.115.211.170:8028/web";e.baseURL=r;var o="http://114.115.211.170:8028/web/file/showPicture?imageId=";e.imgURl=o},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},b607:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addUserBySystem=o,e.login=i,e.retrievePassword=a,e.updUserPassword=s,e.getCustomerService=u,e.customerFeedback=c,e.addShopInfo=f,e.getShopInfoById=p,e.getCommentByShopId=l,e.getProductByShopId=d,e.addProduct=h,e.getProductCategory=v,e.shelvesProduct=y,e.delProductById=_,e.updProduct=m,e.getShopProductById=g,e.getShopStatusByUserId=b,e.getUserById=$,e.updUserPhoto=w,e.updUserName=O,e.updUserNikeName=x,e.updUserPhone=A,e.updUserSpecName=S,e.updUserSex=k,e.getSaleProductAnalysisByShopId=P,e.getMoneyAnalysisByShopId=I,e.queryOrderList=C,e.confirmOrder=j,e.cancelOrder=E,e.addNotice=T,e.addShop=N,e.updateUserInfo=M,e.sendSmsCode=R,e.weChatLogin=D;var r=n("d8aa");function o(t){return(0,r.postRequest)(t,"/user/addUserBySystem").then(function(t){return t})}function i(t){return(0,r.postRequest)(t,"/user/login").then(function(t){return t})}function a(t){return(0,r.postRequest)(t,"/user/retrievePassword").then(function(t){return t})}function s(t){return(0,r.postRequest)(t,"/user/updUserPassword").then(function(t){return t})}function u(){return(0,r.getRequest)("/user/getCustomerService").then(function(t){return t})}function c(t){return(0,r.postRequest)(t,"/user/customerFeedback").then(function(t){return t})}function f(t){return(0,r.postRequest)(t,"/shop/addShopInfo").then(function(t){return t})}function p(t){return(0,r.getRequest)("/shop/getShopInfoById?shopId="+t).then(function(t){return t})}function l(t,e,n){return(0,r.getRequest)("/comment/getCommentByShopId?pageNo="+t+"&pageSize="+e+"&shopId="+n).then(function(t){return t})}function d(t,e,n,o){return(0,r.getRequest)("/product/getProductByShopId?pageNo="+t+"&pageSize="+e+"&shopId="+n+"&sortWay="+o).then(function(t){return t})}function h(t){return(0,r.postRequest)(t,"/product/addProduct").then(function(t){return t})}function v(t,e){return(0,r.getRequest)("/category/getProductCategory?level="+t+"&type="+e).then(function(t){return t})}function y(t,e){return(0,r.postGetRequest)("/product/shelvesProduct?productId="+t+"&publishStatus="+e).then(function(t){return t})}function _(t){return(0,r.deleteGetRequest)("/product/delProductById?productIds="+t).then(function(t){return t})}function m(t){return(0,r.postRequest)(t,"/product/updProduct").then(function(t){return t})}function g(t){return(0,r.getRequest)("/product/getShopProductById?productId="+t).then(function(t){return t})}function b(t){return(0,r.getRequest)("/shop/getShopStatusByUserId?userId="+t).then(function(t){return t})}function $(t){return(0,r.postGetRequest)("/user/getUserById?userId="+t).then(function(t){return t})}function w(t){return(0,r.postRequest)(t,"/user/updUserPhoto").then(function(t){return t})}function O(t){return(0,r.postRequest)(t,"/user/updUserName").then(function(t){return t})}function x(t){return(0,r.postRequest)(t,"/user/updUserNikeName").then(function(t){return t})}function A(t){return(0,r.postRequest)(t,"/user/updUserPhone").then(function(t){return t})}function S(t){return(0,r.postRequest)(t,"/user/updUserSpecName").then(function(t){return t})}function k(t){return(0,r.postRequest)(t,"/user/updUserSex").then(function(t){return t})}function P(t,e,n,o,i){return(0,r.getRequest)("/analysis/getSaleProductAnalysisByShopId?pageNo="+t+"&pageSize="+e+"&shopId="+n+"&categoryId="+o+"&startTime="+i).then(function(t){return t})}function I(t,e,n,o){return(0,r.getRequest)("/analysis/getMoneyAnalysisByShopId?shopId="+t+"&dateType="+e+"&startTime="+n+"&endTime="+o).then(function(t){return t})}function C(t,e,n,o,i){return(0,r.postGetRequest)("/order/queryOrderList?userId="+t+"&queryType="+e+"&state="+n+"&pageNo="+o+"&pageSize="+i).then(function(t){return t})}function j(t,e,n){return(0,r.postGetRequest)("/order/confirmOrder?addressId="+t+"&detailId="+e+"&orderStatus="+n).then(function(t){return t})}function E(t){return(0,r.postGetRequest)("/order/cancelOrder?detailId="+t).then(function(t){return t})}function T(t){return(0,r.postRequest)(t,"/notice/addNotice").then(function(t){return t})}function N(t){return(0,r.postRequest)(t,"/shop/addShop").then(function(t){return t})}function M(t){return(0,r.postRequest)(t,"/user/updateUserInfo").then(function(t){return t})}function R(t){return(0,r.getRequest)("/user/sendSmsCode?userPhone="+t).then(function(t){return t})}function D(t){return(0,r.postRequest)(t,"/user/weChatLogin").then(function(t){return t})}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d8aa:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.postRequest=u,e.deleteGetRequest=c,e.deleteRequest=f,e.postGetRequest=p,e.getRequest=l;var r=o(n("37d1"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s="http://114.115.211.170:8028/web";function u(e,n){return console.log(r.default.state),new Promise(function(o,a){t.showLoading(),setTimeout(function(e){t.hideLoading()},5e3),t.request({url:s+n,method:"post",data:i({},e),header:{"content-type":"application/json",token:r.default.state.token},success:function(e){t.hideLoading(),-30==e.data.code&&t.showModal({title:"",content:"登录失效是否从新登录？",success:function(e){e.confirm?t.navigateTo({url:"/pages/logn/logn"}):e.cancel&&console.log("用户点击取消")}}),o(e)}})}).catch(function(t){return console.log(t)})}function c(e){return console.log(r.default.state),new Promise(function(n,o){t.showLoading(),setTimeout(function(e){t.hideLoading()},5e3),t.request({url:s+e,method:"DELETE",header:{"content-type":"application/json",token:r.default.state.token},success:function(e){t.hideLoading(),-30==e.data.code&&t.showModal({title:"",content:"登录失效是否从新登录？",success:function(e){e.confirm?t.navigateTo({url:"/pages/logn/logn"}):e.cancel&&console.log("用户点击取消")}}),n(e)}})}).catch(function(t){return console.log(t)})}function f(e,n){return console.log(r.default.state),new Promise(function(o,a){t.showLoading(),setTimeout(function(e){t.hideLoading()},5e3),t.request({url:s+n,method:"DELETE",data:i({},e),header:{"content-type":"application/json",token:r.default.state.token},success:function(e){t.hideLoading(),-30==e.data.code&&t.showModal({title:"",content:"登录失效是否从新登录？",success:function(e){e.confirm?t.navigateTo({url:"/pages/logn/logn"}):e.cancel&&console.log("用户点击取消")}}),o(e)}})}).catch(function(t){return console.log(t)})}function p(e){return new Promise(function(n,o){t.showLoading(),setTimeout(function(e){t.hideLoading()},5e3),t.request({url:s+e,method:"post",header:{"content-type":"application/json",token:r.default.state.token},success:function(e){t.hideLoading(),-30==e.data.code&&t.showModal({title:"",content:"登录失效是否从新登录？",success:function(e){e.confirm?t.navigateTo({url:"/pages/logn/logn"}):e.cancel&&console.log("用户点击取消")}}),n(e)}})}).catch(function(t){return console.log(t)})}function l(e){return console.log(r.default.state),new Promise(function(n,o){t.showLoading(),setTimeout(function(e){t.hideLoading()},5e3),t.request({url:s+e,method:"get",header:{"content-type":"application/x-www-form-urlencoded",token:r.default.state.token},success:function(e){t.hideLoading(),-30==e.data.code&&t.showModal({title:"",content:"登录失效是否从新登录？",success:function(e){e.confirm?t.navigateTo({url:"/pages/logn/logn"}):e.cancel&&console.log("用户点击取消")}}),n(e)}})}).catch(function(t){return console.log(t)})}}).call(this,n("6e42")["default"])},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),u=Object.keys(o);if(s.length!==u.length)e[n]=r;else{var c=Object.create(null);for(i=0,a=s.length;i<a;++i)c[s[i]]=!0,c[u[i]]=!0;if(Object.keys(c).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],u=s.split("."),c=n[u[0]],f=1,p=u.length;f<p&&void 0!==c;++f)c=c[u[f]];t(o,s,e[s],c)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t}function c(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function p(t){return"[object Object]"===f.call(t)}function l(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function b(t,e){return g.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,O=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),x=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/([^-])([A-Z])/g,S=$(function(t){return t.replace(A,"$1-$2").replace(A,"$1-$2").toLowerCase()});function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function I(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&I(e,t[n]);return e}function j(t,e,n){}var E=function(t,e,n){return!1},T=function(t){return t};function N(t,e){var r=c(t),o=c(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function M(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var D="data-server-rendered",B=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:j,parsePlatformTagName:T,mustUseProp:E,_lifecycleHooks:U},L=Object.freeze({});function V(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=/[^\w.$]/;function F(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G=j;function z(t,e,n){if(q.errorHandler)q.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var J,K="__proto__"in{},X="undefined"!==typeof window,Z=["mpvue-runtime"].join(),Q=(Z&&/msie|trident/.test(Z),Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),Y=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)),tt=(Z&&/chrome\/\d+/.test(Z),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===J&&(J=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),J},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Y&&setTimeout(j)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){z(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=0,ct=function(){this.id=ut++,this.subs=[]};ct.prototype.addSub=function(t){this.subs.push(t)},ct.prototype.removeSub=function(t){m(this.subs,t)},ct.prototype.depend=function(){ct.target&&ct.target.addDep(this)},ct.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ct.target=null;var ft=[];function pt(t){ct.target&&ft.push(ct.target),ct.target=t}function lt(){ct.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];H(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),yt={shouldConvert:!0},_t=function(t){if(this.value=t,this.dep=new ct,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)){var e=K?mt:gt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function gt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function bt(t,e){var n;if(c(t))return b(t,"__ob__")&&t.__ob__ instanceof _t?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new _t(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,o){var i=new ct,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set,c=!o&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ct.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(e)&&xt(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(u?u.call(t,e):n=e,c=!o&&bt(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ot(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function xt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&xt(e)}_t.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n],t[e[n]])},_t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var At=q.optionMergeStrategies;function St(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],b(t,n)?p(r)&&p(o)&&St(r,o):wt(t,n,o);return t}function kt(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?St(r,o):o}:void 0:e?t?function(){return St("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function Pt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function It(t,e){var n=Object.create(t||null);return e?I(n,e):n}At.data=function(t,e,n){return n?kt(t,e,n):e&&"function"!==typeof e?t:kt.call(this,t,e)},U.forEach(function(t){At[t]=Pt}),B.forEach(function(t){At[t+"s"]=It}),At.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in I(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},At.props=At.methods=At.inject=At.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return I(n,t),I(n,e),n},At.provide=kt;var Ct=function(t,e){return void 0===e?t:e};function jt(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=O(r),i[o]={type:null})}else if(p(e))for(var a in e)r=e[a],o=O(a),i[o]=p(r)?r:{type:r};t.props=i}}function Et(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Nt(t,e,n){"function"===typeof e&&(e=e.options),jt(e),Et(e),Tt(e);var r=e.extends;if(r&&(t=Nt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Nt(t,e.mixins[o],n);var a,s={};for(a in t)u(a);for(a in e)b(t,a)||u(a);function u(r){var o=At[r]||Ct;s[r]=o(t[r],e[r],n,r)}return s}function Mt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=x(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Rt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t];if(Ut(Boolean,o.type)&&(i&&!b(o,"default")?a=!1:Ut(String,o.type)||""!==a&&a!==S(t)||(a=!0)),void 0===a){a=Dt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,bt(a),yt.shouldConvert=s}return a}function Dt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Ut(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var qt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Lt={child:{}};Lt.child.get=function(){return this.componentInstance},Object.defineProperties(qt.prototype,Lt);var Vt=function(t){void 0===t&&(t="");var e=new qt;return e.text=t,e.isComment=!0,e};function Ht(t){return new qt(void 0,void 0,void 0,String(t))}function Wt(t){var e=new qt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Ft(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Wt(t[r]);return n}var Gt,zt=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Jt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,r,i){var a,s,u,c;for(a in t)s=t[a],u=e[a],c=zt(a),o(s)||(o(u)?(o(s.fns)&&(s=t[a]=Jt(s)),n(c.name,s,c.once,c.capture,c.passive)):s!==u&&(u.fns=s,t[a]=u));for(a in e)o(t[a])&&(c=zt(a),r(c.name,e[a],c.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,u=t.props;if(i(s)||i(u))for(var c in r){var f=S(c);Zt(a,u,c,f,!0)||Zt(a,s,c,f,!1)}return a}}function Zt(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return u(t)?[Ht(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,c=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=c[c.length-1],Array.isArray(r)?c.push.apply(c,ee(r,(e||"")+"_"+n)):u(r)?te(s)?s.text+=String(r):""!==r&&c.push(Ht(r)):te(r)&&te(s)?c[c.length-1]=Ht(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),c.push(r)));return c}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),c(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Vt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,u=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=R(function(n){t.resolved=ne(n,e),s||u()}),p=R(function(e){i(t.errorComp)&&(t.error=!0,u())}),l=t(f,p);return c(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(f,p):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(f,p),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,u())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&p(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ce(t,e)}function se(t,e,n){n?Gt.$once(t,e):Gt.$on(t,e)}function ue(t,e){Gt.$off(t,e)}function ce(t,e,n){Gt=t,Kt(e,n||{},se,ue,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var u=s.length;while(u--)if(a=s[u],a===e||a.fn===e){s.splice(u,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?P(r):r;for(var o=P(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){z(n,e,'event handler for "'+t+'"')}}return e}}function pe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,u=n[s]||(n[s]=[]);"template"===a.tag?u.push.apply(u,a.children):u.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function _e(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Vt),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Re(t,r,j),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function me(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==L);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],u=0;u<s.length;u++){var c=s[u];a[c]=Rt(c,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ce(t,n,f)}i&&(t.$slots=pe(o,r.context),t.$forceUpdate())}function ge(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"activated")}}function $e(t,e){if((!e||(t._directInactive=!0,!ge(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){z(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Oe=[],xe=[],Ae={},Se=!1,ke=!1,Pe=0;function Ie(){Pe=Oe.length=xe.length=0,Ae={},Se=ke=!1}function Ce(){var t,e;for(ke=!0,Oe.sort(function(t,e){return t.id-e.id}),Pe=0;Pe<Oe.length;Pe++)t=Oe[Pe],e=t.id,Ae[e]=null,t.run();var n=xe.slice(),r=Oe.slice();Ie(),Te(n),je(r),rt&&q.devtools&&rt.emit("flush")}function je(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Ee(t){t._inactive=!1,xe.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function Ne(t){var e=t.id;if(null==Ae[e]){if(Ae[e]=!0,ke){var n=Oe.length-1;while(n>Pe&&Oe[n].id>t.id)n--;Oe.splice(n+1,0,t)}else Oe.push(t);Se||(Se=!0,st(Ce))}}var Me=0,Re=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Me,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=F(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Re.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;z(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),lt(),this.cleanupDeps()}return t},Re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Re.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Re.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ne(this)},Re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){z(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Re.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Re.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Re.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var De=new it;function Be(t){De.clear(),Ue(t,De)}function Ue(t,e){var n,r,o=Array.isArray(t);if((o||c(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Ue(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Ue(t[r[n]],e)}}}var qe={enumerable:!0,configurable:!0,get:j,set:j};function Le(t,e,n){qe.get=function(){return this[e][n]},qe.set=function(t){this[e][n]=t},Object.defineProperty(t,n,qe)}function Ve(t){t._watchers=[];var e=t.$options;e.props&&He(t,e.props),e.methods&&Xe(t,e.methods),e.data?We(t):bt(t._data={},!0),e.computed&&ze(t,e.computed),e.watch&&e.watch!==tt&&Ze(t,e.watch)}function He(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Rt(i,e,n,t);$t(r,i,a),i in t||Le(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function We(t){var e=t.$options.data;e=t._data="function"===typeof e?Fe(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&b(r,i)||V(i)||Le(t,"_data",i)}bt(e,!0)}function Fe(t,e){try{return t.call(e)}catch(n){return z(n,e,"data()"),{}}}var Ge={lazy:!0};function ze(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Re(t,i,j,Ge),r in t||Je(t,r,o)}}function Je(t,e,n){"function"===typeof n?(qe.get=Ke(e),qe.set=j):(qe.get=n.get?!1!==n.cache?Ke(e):n.get:j,qe.set=n.set?n.set:j),Object.defineProperty(t,e,qe)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ct.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?j:k(e[n],t)}function Ze(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Qe(t,n,r[o]);else Qe(t,n,r)}}function Qe(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=Ot,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var o=new Re(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){$t(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var u in s)a[u]=Rt(u,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var c=Object.create(r),f=function(t,e,n,r){return vn(c,t,e,n,r,!0)},p=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return pe(o,r)}});return p instanceof qt&&(p.functionalContext=r,p.functionalOptions=t.options,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}function on(t,e){for(var n in e)t[O(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=cn(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ee(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$e(e,!0):e.$destroy())}},sn=Object.keys(an);function un(t,e,n,r,s){if(!o(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,u,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&ln(t.options,e);var p=Xt(e,t,s);if(a(t.options.functional))return rn(t,p,e,n,r);var l=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new qt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:r},f);return v}}}function cn(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?pn(o,r):o}}function pn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||u(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Vt();if(i(n)&&i(n.is)&&(e=n.is),!e)return Vt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Yt(r):o===dn&&(r=Qt(r)),"string"===typeof e)?(s=q.getTagNamespace(e),a=q.isReservedTag(e)?new qt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):i(u=Mt(t.$options,"components",e))?un(u,n,t,r,e):new qt(e,n,r,void 0,void 0,t)):a=un(e,n,t,r);return i(a)?(s&&_n(a,s),a):Vt()}function _n(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&_n(a,e)}}function mn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function gn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=I(I({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function bn(t){return Mt(this.$options,"filters",t,!0)||T}function $n(t,e,n){var r=q.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=C(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||q.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function On(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Ft(n):Wt(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),An(n,"__static__"+t,!1),n)}function xn(t,e,n){return An(t,"__once__"+e+(n?"_"+n:""),!0),t}function An(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Sn(t[r],e+"_"+r,n);else Sn(t,e,n)}function Sn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function kn(t,e){if(e)if(p(e)){var n=t.on=t.on?I({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Pn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=pe(t.$options._renderChildren,n),t.$scopedSlots=L,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;$t(t,"$attrs",r&&r.attrs,null,!0),$t(t,"$listeners",r&&r.on,null,!0)}function In(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Ft(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||L,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){z(n,e,"render function"),t=e._vnode}return t instanceof qt||(t=Vt()),t.parent=a,t},t.prototype._o=xn,t.prototype._n=v,t.prototype._s=h,t.prototype._l=mn,t.prototype._t=gn,t.prototype._q=N,t.prototype._i=M,t.prototype._m=On,t.prototype._f=bn,t.prototype._k=$n,t.prototype._b=wn,t.prototype._v=Ht,t.prototype._e=Vt,t.prototype._u=de,t.prototype._g=kn}var Cn=0;function jn(t){t.prototype._init=function(t){var e=this;e._uid=Cn++,e._isVue=!0,t&&t._isComponent?En(e,t):e.$options=Nt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Pn(e),we(e,"beforeCreate"),en(e),Ve(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function En(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Nn(t);o&&I(t.extendOptions,o),e=t.options=Nt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Nn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Mn(n[i],r[i],o[i]));return e}function Mn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Rn(t){this._init(t)}function Dn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Nt(this.options,t),this}}function Un(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Nt(n.options,t),a["super"]=n,a.options.props&&qn(a),a.options.computed&&Ln(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=I({},a.options),o[r]=a,a}}function qn(t){var e=t.options.props;for(var n in e)Le(t.prototype,"_props",n)}function Ln(t){var e=t.options.computed;for(var n in e)Je(t.prototype,n,e[n])}function Vn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}jn(Rn),Ye(Rn),fe(Rn),ye(Rn),In(Rn);var Hn=[String,RegExp,Array];function Wn(t){return t&&(t.Ctor.options.name||t.tag)}function Fn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Gn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Wn(o.componentOptions);i&&!n(i)&&(o!==e&&zn(o),t[r]=null)}}}function zn(t){t&&t.componentInstance.$destroy()}var Jn={name:"keep-alive",abstract:!0,props:{include:Hn,exclude:Hn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)zn(t.cache[e])},watch:{include:function(t){Gn(this.cache,this._vnode,function(e){return Fn(t,e)})},exclude:function(t){Gn(this.cache,this._vnode,function(e){return!Fn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Wn(e);if(n&&(this.include&&!Fn(this.include,n)||this.exclude&&Fn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:Jn};function Xn(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:G,extend:I,mergeOptions:Nt,defineReactive:$t},t.set=wt,t.delete=Ot,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,I(t.options.components,Kn),Dn(t),Bn(t),Un(t),Vn(t)}Xn(Rn),Object.defineProperty(Rn.prototype,"$isServer",{get:nt}),Object.defineProperty(Rn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rn.version="2.4.1",Rn.mpvueVersion="1.0.12";var Zn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function ur(t){return or}function cr(t,e,n){}function fr(t,e){}function pr(t,e){}function lr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var _r=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:ur,insertBefore:cr,removeChild:fr,appendChild:pr,parentNode:lr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:yr}),mr={create:function(t,e){gr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(gr(t,!0),gr(e))},destroy:function(t){gr(t,!0)}};function gr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?m(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var br=new qt("",{},[]),$r=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Or(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function Or(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function xr(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Ar(t){var e,n,r={},s=t.modules,c=t.nodeOps;for(e=0;e<$r.length;++e)for(r[$r[e]]=[],n=0;n<s.length;++n)i(s[n][$r[e]])&&r[$r[e]].push(s[n][$r[e]]);function f(t){return new qt(c.tagName(t).toLowerCase(),{},[],void 0,t)}function p(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=c.parentNode(t);i(e)&&c.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,u=t.children,f=t.tag;i(f)?(t.elm=t.ns?c.createElementNS(t.ns,f):c.createElement(f,t),w(t),g(t,u,e),i(s)&&$(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=c.createComment(t.text),m(n,t.elm,r)):(t.elm=c.createTextNode(t.text),m(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&_(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?($(t,e),w(t)):(gr(t),e.push(t))}function _(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](br,s);e.push(s);break}m(n,t.elm,o)}function m(t,e,n){i(t)&&(i(n)?n.parentNode===t&&c.insertBefore(t,e,n):c.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else u(t.text)&&c.appendChild(t.elm,c.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function $(t,n){for(var o=0;o<r.create.length;++o)r.create[o](br,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(br,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&c.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&c.setAttribute(t.elm,e,"")}function O(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function x(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)x(t.children[n])}function A(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(S(o),x(o)):l(o.elm))}}function S(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=p(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&S(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function k(t,e,n,r,a){var s,u,f,p,l=0,h=0,v=e.length-1,y=e[0],_=e[v],m=n.length-1,g=n[0],b=n[m],$=!a;while(l<=v&&h<=m)o(y)?y=e[++l]:o(_)?_=e[--v]:wr(y,g)?(P(y,g,r),y=e[++l],g=n[++h]):wr(_,b)?(P(_,b,r),_=e[--v],b=n[--m]):wr(y,b)?(P(y,b,r),$&&c.insertBefore(t,y.elm,c.nextSibling(_.elm)),y=e[++l],b=n[--m]):wr(_,g)?(P(_,g,r),$&&c.insertBefore(t,_.elm,y.elm),_=e[--v],g=n[++h]):(o(s)&&(s=xr(e,l,v)),u=i(g.key)?s[g.key]:null,o(u)?(d(g,r,t,y.elm),g=n[++h]):(f=e[u],wr(f,g)?(P(f,g,r),e[u]=void 0,$&&c.insertBefore(t,f.elm,y.elm),g=n[++h]):(d(g,r,t,y.elm),g=n[++h])));l>v?(p=o(n[m+1])?null:n[m+1].elm,O(t,p,n,h,m,r)):h>m&&A(t,e,l,v)}function P(t,e,n,s){if(t!==e){var u=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?j(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var l=t.children,d=e.children;if(i(p)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(l)&&i(d)?l!==d&&k(u,l,d,n,s):i(d)?(i(t.text)&&c.setTextContent(u,""),O(u,null,d,0,d.length-1,n)):i(l)?A(u,l,0,l.length-1):i(t.text)&&c.setTextContent(u,""):t.text!==e.text&&c.setTextContent(u,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function I(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var C=y("attrs,style,class,staticClass,staticStyle,key");function j(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,u=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(u))if(t.hasChildNodes()){for(var c=!0,f=t.firstChild,p=0;p<u.length;p++){if(!f||!j(f,u[p],r)){c=!1;break}f=f.nextSibling}if(!c||f)return!1}else g(n,u,r);if(i(s))for(var l in s)if(!C(l)){$(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,u,p){if(!o(e)){var l=!1,h=[];if(o(t))l=!0,d(e,h,u,p);else{var v=i(t.nodeType);if(!v&&wr(t,e))P(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(D)&&(t.removeAttribute(D),n=!0),a(n)&&j(t,e,h))return I(e,h,!0),t;t=f(t)}var y=t.elm,_=c.parentNode(y);if(d(e,h,y._leaveCb?null:_,c.nextSibling(y)),i(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if(b(e))for(var g=0;g<r.create.length;++g)r.create[g](br,e.parent)}i(_)?A(_,[t],0,0):i(t.tag)&&x(t)}}return I(e,h,l),e.elm}i(t)&&x(t)}}var Sr=[mr],kr=Ar({nodeOps:_r,modules:Sr});function Pr(){kr.apply(this,arguments),this.$updateDataToMP()}function Ir(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){z(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Ir(t,e,r)}),o}function Cr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function jr(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=O(o),e[i]={type:null})}else if(p(t))for(var a in t)o=t[a],i=O(a),e[i]=p(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];u.default&&(u.value=u.default);var c=u.observer;u.observer=function(t,e){n[i]=t,"function"===typeof c&&c.call(n,t,e)}}return e}}function Er(t){var e=t.$options.properties,n=t.$options.props,r={};return jr(e,r,t),jr(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Le(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function Nr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Ir(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,Ir(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Ir(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Ir(r,"onShow",t)},onHide:function(){o.status="hide",Ir(r,"onHide")},onError:function(t){Ir(r,"onError",t)},onUniNViewMessage:function(t){Ir(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Er(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Ir(r,"attached")},ready:function(){o.status="ready",Ir(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Ir(r,"moved")},detached:function(){o.status="detached",Ir(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",Cr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Ir(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",Ir(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Ir(r,"onReady"),n()},onHide:function(){o.status="hide",Ir(r,"onHide")},onUnload:function(){o.status="unload",Ir(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Ir(r,"onPullDownRefresh")},onReachBottom:function(){Ir(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Ir(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Ir(r,"onPageScroll",t)},onTabItemTap:function(t){Ir(r,"onTabItemTap",t)}})}}function Mr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Rr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Rr(r,e):e):e}function Dr(t){var e=Rr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Mr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Dr(t))}function Ur(t,e,n){var r,o,i,a=null,s=0;function u(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(c,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[c,Object.assign(o[1],f)]:[c,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(u,l)),i}}var qr=Ur(function(t,e){t&&t(e)},50);function Lr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Vr(){var t=Lr(this);if(t){var e=JSON.parse(JSON.stringify(Dr(this)));qr(t.setData.bind(t),r(e,t.data))}}function Hr(){var t=Lr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Wr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function Fr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(Fr(t,e,n))})}):a.forEach(function(t){r=r.concat(Fr(t,e,n))});var u=i.attrs,c=i.on;return u&&c&&u["eventid"]===e?(n.forEach(function(t){var e=c[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Gr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,u=o.y,c={mp:t,type:e,timeStamp:n,x:s,y:u,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:j,preventDefault:j};return r&&r.length&&(Object.assign(c,r[0]),c.touches=r),c}function zr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var u=a.eventid,c=Wr(e,s.split(","));if(c){var f=rr[n]||[n],p=Fr(c._vnode,u,f);if(p.length){var l=Gr(t);if(1===p.length){var d=p[0](l);return d}p.forEach(function(t){return t(l)})}}}return Rn.config.mustUseProp=Yn,Rn.config.isReservedTag=Zn,Rn.config.isReservedAttr=Qn,Rn.config.getTagNamespace=tr,Rn.config.isUnknownElement=er,Rn.prototype.__patch__=Pr,Rn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return _e(n,void 0,void 0)})}return _e(this,void 0,void 0)},Rn.prototype._initMP=Nr,Rn.prototype.$updateDataToMP=Vr,Rn.prototype._initDataToMP=Hr,Rn.prototype.$handleProxyWithVue=zr,Rn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/commodity_management/commodity_management';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/commodity_management/commodity_management.js';

define('pages/commodity_management/commodity_management.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commodity_management/commodity_management"],{1277:function(t,e,o){"use strict";var i=o("55a5"),n=o.n(i);n.a},"29dd":function(t,e,o){"use strict";o.r(e);var i=o("a0ed"),n=o("c4be");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("1277");var s=o("2877"),c=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"653b219e",null);e["default"]=c.exports},4326:function(t,e,o){"use strict";o("0cb7");var i=a(o("b0ce")),n=a(o("29dd"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},"55a5":function(t,e,o){},a0ed:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"content"},[o("view",{staticClass:"title"},[o("view",{staticClass:"tianjia",attrs:{eventid:"3281b45c-0"},on:{click:t.gotoAdd}},[o("image",{attrs:{src:"../../static/shangchuandianpu_03.png",mode:""}}),o("text",[t._v("添加商品")])])]),o("view",{staticClass:"product"},[t._l(t.productList,function(e,i){return t.productList.length>0?o("view",{key:i,staticClass:"item"},[o("image",{attrs:{src:t.imgURl+e.imgList[0],mode:""}}),o("text",[t._v(t._s(e.productName))]),1==e.publishStatus?o("text",{staticClass:"shangjia"},[t._v("已上架")]):t._e(),0==e.publishStatus?o("text",{staticClass:"shangjia2"},[t._v("未上架")]):t._e(),o("view",{staticClass:"price"},[o("text",[t._v("￥"+t._s(e.price))]),o("view",{staticClass:"yuan",attrs:{eventid:"3281b45c-1-"+i},on:{click:function(o){t.isShowChange(e.productId)}}},[o("text",{staticClass:"yuandian"}),o("text",{staticClass:"yuandian"}),o("text",{staticClass:"yuandian"})])])]):t._e()}),0==t.productList.length?o("view",{staticClass:"kong"},[o("image",{attrs:{src:"../../static/meiyoudingdan-01.png",mode:""}}),o("text",[t._v("~快去添加商品吧~")])]):t._e()],2),t.isShow?o("view",{staticClass:"zhedang",attrs:{eventid:"3281b45c-6"},on:{click:function(e){e.stopPropagation(),t.isShowChange2()}}},[o("view",{staticClass:"edit"},[o("view",{staticClass:"item",attrs:{eventid:"3281b45c-2"},on:{click:function(e){t.compile()}}},[o("image",{attrs:{src:"../../static/bianji_07.png",mode:""}}),o("text",[t._v("编辑")])]),o("view",{staticClass:"item",attrs:{eventid:"3281b45c-3"},on:{click:t.Delete}},[o("image",{attrs:{src:"../../static/bianji_07.png",mode:""}}),o("text",[t._v("删除")])]),o("view",{staticClass:"item",attrs:{eventid:"3281b45c-4"},on:{click:function(e){t.putaway()}}},[o("image",{attrs:{src:"../../static/bianji_07.png",mode:""}}),o("text",[t._v("上架")])]),o("view",{staticClass:"item",attrs:{eventid:"3281b45c-5"},on:{click:function(e){t.soldOut()}}},[o("image",{attrs:{src:"../../static/bianji_07.png",mode:""}}),o("text",[t._v("下架")])])])]):t._e()])},n=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return n})},c4be:function(t,e,o){"use strict";o.r(e);var i=o("fe13"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e["default"]=n.a},fe13:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o("a021"),n=o("b607"),a=o("2f62");function s(t){return u(t)||r(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},i=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),i.forEach(function(e){l(t,e,o[e])})}return t}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var h={data:function(){return{shopStatus:-1,imgURl:"",productId:"",productList:[],isShow:!1,pageNo:1,sortWay:0}},onLoad:function(){var e=this,o=t.getStorageSync("userId"),i=t.getStorageSync("token"),n=t.getStorageSync("shopId");o?(this.$store.commit("SET_SHOPID",n),this.$store.commit("SET_USERID",o),this.$store.commit("SET_TOKEN",i)):t.reLaunch({url:"/pages/logn/logn"}),this.version=plus.runtime.version,t.getSystemInfo({success:function(t){console.log(t.platform),"android"==t.platform&&e.AndroidCheckUpdate()}})},onShow:function(){this.shopId&&(this.imgURl=i.imgURl,this.getShopStatusByUserId(this.userId),this.productList=[],this.pageNo=1,this.getProductByShopId(this.pageNo,10,this.shopId,this.sortWay))},onReachBottom:function(){this.pageNo++,this.getProductByShopId(this.pageNo,10,this.shopId,this.sortWay)},computed:d({},(0,a.mapState)(["userId","shopId"])),methods:{AndroidCheckUpdate:function(){var e=this;t.request({url:"http://114.115.211.170:8018/system/version/getNewVersionNumber?type=2",method:"GET",data:{},success:function(o){if(console.log(o.data.data),console.log(e.version),o.data.data>e.version){if(3!=plus.networkinfo.getCurrentType())return void t.showToast({title:"有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止自动更新，将在您连接WIFI之后重新检测更新。",mask:!1,duration:7e3,icon:"none"});t.showToast({title:"有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序。",mask:!1,duration:7e3,icon:"none"});var i=plus.downloader.createDownload("http://114.115.211.170:8008/app/shanghu.apk",{},function(e,o){200==o?plus.runtime.install(plus.io.convertLocalFileSystemURL(e.filename),{},{},function(e){t.showToast({title:"安装失败",mask:!1,icon:"none",duration:1500})}):t.showToast({title:"更新失败",mask:!1,icon:"none",duration:1500})});i.start()}},fail:function(){},complete:function(){}})},isShowChange2:function(){this.isShow=!1},getShopStatusByUserId:function(t){var e=this;(0,n.getShopStatusByUserId)(t).then(function(t){0==t.data.code&&(e.shopStatus=t.data.data.shopStatus)})},getProductByShopId:function(e,o,i,a){var c=this;(0,n.getProductByShopId)(e,o,i,a).then(function(e){0==e.data.code&&(0==e.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),c.productList=[].concat(s(c.productList),s(e.data.data.list)))})},isShowChange:function(t){this.productId=t,this.isShow=!0},compile:function(){this.isShow=!1,t.navigateTo({url:"/pages/addProduct/addProduct?id="+this.productId})},Delete:function(){var e=this;(0,n.delProductById)(this.productId).then(function(o){0==o.data.code&&(t.showToast({title:"删除成功",icon:"none",duration:1e3}),e.productList=[],e.pageNo=1,e.getProductByShopId(e.pageNo,10,e.shopId,e.sortWay))}),this.isShow=!1},putaway:function(){var e=this,o=1;(0,n.shelvesProduct)(this.productId,o).then(function(o){0==o.data.code&&(t.showToast({title:"上架成功",icon:"none",duration:1e3}),e.productList=[],e.pageNo=1,e.getProductByShopId(e.pageNo,10,e.shopId,e.sortWay))}),this.isShow=!1},soldOut:function(){var e=this,o=0;(0,n.shelvesProduct)(this.productId,o).then(function(o){0==o.data.code&&(t.showToast({title:"下架成功",icon:"none",duration:1e3}),e.productList=[],e.pageNo=1,e.getProductByShopId(e.pageNo,10,e.shopId,e.sortWay))}),this.isShow=!1},gotoAdd:function(){-1!=this.shopStatus?0!=this.shopStatus?2!=this.shopStatus?t.navigateTo({url:"/pages/addProduct/addProduct"}):t.showToast({title:"商家入驻驳回，请重新入驻",icon:"none",duration:1e3}):t.showToast({title:"信息审核中",icon:"none",duration:1e3}):t.showToast({title:"请先添加店铺,在申请入驻商家",icon:"none",duration:3e3})}}};e.default=h}).call(this,o("6e42")["default"])}},[["4326","common/runtime","common/vendor"]]]);
});
require('pages/commodity_management/commodity_management.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1a28":function(t,e,n){"use strict";n("0cb7");var i=a(n("b0ce")),r=a(n("7250"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(r.default))},"29e8":function(t,e,n){"use strict";n.r(e);var i=n("a9fc"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},"2f0f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.canvasId?n("canvas",{staticClass:"ec-canvas",attrs:{id:t.canvasId,canvasId:t.canvasId,eventid:"3cf56ac4-0"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,error:t.error}}):t._e()},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"322a":function(t,e,n){},"3fa3":function(t,e,n){"use strict";n.r(e);var i=n("ca74"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},4034:function(t,e,n){},7250:function(t,e,n){"use strict";n.r(e);var i=n("a898"),r=n("3fa3");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("e0c8");var o=n("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"4d2806f4",null);e["default"]=s.exports},a898:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t._m(0),n("view",{staticClass:"liubai"}),n("view",{staticClass:"classify"},[n("navigator",{staticClass:"item",attrs:{url:"../productList/productList"}},[n("image",{attrs:{src:"../../static/shangpintongjibiao_03.png",mode:""}}),n("text",[t._v("商品统计表")])]),n("navigator",{staticClass:"item",attrs:{url:"../xiaolingTJ/xiaolingTJ"}},[n("image",{attrs:{src:"../../static/xiaoliangtongjibiao_05.png",mode:""}}),n("text",[t._v("销量统计表")])]),n("navigator",{staticClass:"item",attrs:{url:"../shouruTJ/shouruTJ"}},[n("image",{attrs:{src:"../../static/shourutongjibiao_07.png",mode:""}}),n("text",[t._v("收入统计表")])])],1),n("view",{staticClass:"liubai"}),n("view",{staticClass:"date"},[n("picker",{attrs:{mode:"date",eventid:"609606d0-0"},on:{change:t.bindPickerChange}},[n("image",{attrs:{src:"../../static/rili_13.png"}})]),t._v("起始"),n("text",[t._v(t._s(t.startTime))]),n("picker",{attrs:{mode:"date",eventid:"609606d0-1"},on:{change:t.bindPickerChange2}},[n("image",{attrs:{src:"../../static/rili_13.png"}})]),t._v("结束"),n("text",[t._v(t._s(t.endTime))])],1),n("view",{staticClass:"tabs"},[n("text",{class:{active:0==t.currentTabs},attrs:{eventid:"609606d0-2"},on:{click:function(e){t.tabs(0)}}},[t._v("日报表")]),n("text",{class:{active:1==t.currentTabs},attrs:{eventid:"609606d0-3"},on:{click:function(e){t.tabs(1)}}},[t._v("月报表")]),n("text",{class:{active:2==t.currentTabs},attrs:{eventid:"609606d0-4"},on:{click:function(e){t.tabs(2)}}},[t._v("季报表")]),n("text",{class:{active:3==t.currentTabs},attrs:{eventid:"609606d0-5"},on:{click:function(e){t.tabs(3)}}},[t._v("年报表")])]),n("view",{staticClass:"liubai"}),n("view",{staticClass:"tabsAll"},[n("view",{staticClass:"tabs2"},[n("text",{class:{active:1==t.tab},attrs:{eventid:"609606d0-6"},on:{click:function(e){t.zhutu()}}},[t._v("柱状图")]),n("text",{class:{active:2==t.tab},attrs:{eventid:"609606d0-7"},on:{click:function(e){t.bing()}}},[t._v("饼状图")]),n("text",{class:{active:3==t.tab},attrs:{eventid:"609606d0-8"},on:{click:function(e){t.zhexian()}}},[t._v("折线图")])])]),n("view",{directives:[{name:"show",rawName:"v-show",value:2==t.tab,expression:"tab == 2"}],staticClass:"canvasView"},[n("mpvue-echarts",{ref:"pieChart",attrs:{echarts:t.echarts,onInit:t.pieInit,canvasId:"pie",mpcomid:"609606d0-0"}})],1),n("view",{directives:[{name:"show",rawName:"v-show",value:3==t.tab,expression:"tab == 3"}],staticClass:"canvasView"},[n("mpvue-echarts",{ref:"lineChart",attrs:{echarts:t.echarts,onInit:t.lineInit,canvasId:"line",mpcomid:"609606d0-1"}})],1),n("view",{directives:[{name:"show",rawName:"v-show",value:1==t.tab,expression:"tab == 1"}],staticClass:"canvasView"},[n("mpvue-echarts",{ref:"barChart",attrs:{echarts:t.echarts,onInit:t.barInit,canvasId:"bar",mpcomid:"609606d0-2"}})],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"banner"},[n("image",{attrs:{src:"../../static/banner_02.png",mode:""}})])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},a9fc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("b80f"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={props:{echarts:{required:!0,type:Object,default:function(){return null}},onInit:{required:!0,type:Function,default:null},canvasId:{type:String,default:"ec-canvas"},lazyLoad:{type:Boolean,default:!1},disableTouch:{type:Boolean,default:!1},throttleTouch:{type:Boolean,default:!1}},onReady:function(){this.echarts?this.lazyLoad||this.init():console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>')},methods:{init:function(){var t=this;if(this.onInit){var e=this.canvasId;this.ctx=wx.createCanvasContext(e);var n=new i.default(this.ctx,e);this.echarts.setCanvasCreator(function(){return n});var r=wx.createSelectorQuery();r.select("#".concat(e)).boundingClientRect(function(e){e?t.chart=t.onInit(n,e.width,e.height):setTimeout(function(){return t.init()},50)}).exec()}else console.warn("请传入 onInit 函数进行初始化")},canvasToTempFilePath:function(t){var e=this.canvasId;this.ctx.draw(!0,function(){wx.canvasToTempFilePath(a({canvasId:e},t))})},touchStart:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n&&t.mp.touches.length){var i=t.mp.touches[0];n._zr.handler.dispatch("mousedown",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("mousemove",{zrX:i.x,zrY:i.y})}},touchMove:function(t){var e=this.disableTouch,n=this.throttleTouch,i=this.chart,r=this.lastMoveTime;if(!e&&i&&t.mp.touches.length){if(n){var a=Date.now();if(a-r<240)return;this.lastMoveTime=a}var o=t.mp.touches[0];i._zr.handler.dispatch("mousemove",{zrX:o.x,zrY:o.y})}},touchEnd:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n){var i=t.mp.changedTouches?t.mp.changedTouches[0]:{};n._zr.handler.dispatch("mouseup",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("click",{zrX:i.x,zrY:i.y})}}}};e.default=s},b80f:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function t(e,n){i(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return a(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};var e=[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}];e.forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments,n=["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"];n.forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=o},ca74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),r=l(n("f7b4")),a=s(n("ddd0")),o=n("b607");function s(t){return t&&t.__esModule?t:{default:t}}function l(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){h(t,e,n[e])})}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={animation:!1,backgroundColor:"#F8F8F8",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]},d={xAxis:{type:"category",data:[],axisLabel:{rotate:40}},yAxis:{type:"value",splitArea:{show:!0},name:"销售金额(元)"},series:[{data:[],type:"bar",barWidth:30}]},f={animation:!1,color:["#37A2DA","#9FE6B8"],grid:{x:35,x2:10,y:30,y2:25},calculable:!1,xAxis:[{type:"category",data:[]}],yAxis:[{type:"value",splitArea:{show:!0},name:"销售金额(元)"}],series:[{name:"蒸发量",type:"line",data:[]}]},p={data:function(){return{version:"",tab:1,dateType:0,startTime:"",endTime:"",currentTabs:0,echarts:r}},components:{mpvueEcharts:a.default},computed:u({},(0,i.mapState)(["userId","shopId"])),onLoad:function(){this.startTime=this.getNowFormatDate(),1==this.tab&&(c.series[0].data=[],f.xAxis[0].data=[],f.series[0].data=[],d.xAxis.data=[],d.series[0].data=[],this.getMoneyAnalysisByShopId(this.shopId,this.dateType,this.startTime,this.endTime))},methods:{zhexian:function(){var t=this;this.tab=3,c.series[0].data=[],f.xAxis[0].data=[],f.series[0].data=[],d.xAxis.data=[],d.series[0].data=[],(0,o.getMoneyAnalysisByShopId)(this.shopId,this.dateType,this.startTime,this.endTime).then(function(e){if(0==e.data.code){var n=!0,i=!1,r=void 0;try{for(var a,o=e.data.data[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value,l=s.dateTime,u=s.saleMoney;f.xAxis[0].data.push(l),f.series[0].data.push(u),t.$refs.lineChart.init()}}catch(h){i=!0,r=h}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}}})},bing:function(){var t=this;this.tab=2,c.series[0].data=[],f.xAxis[0].data=[],f.series[0].data=[],d.xAxis.data=[],d.series[0].data=[],(0,o.getMoneyAnalysisByShopId)(this.shopId,this.dateType,this.startTime,this.endTime).then(function(e){if(0==e.data.code){var n=!0,i=!1,r=void 0;try{for(var a,o=e.data.data[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value,l={name:s.dateTime,value:s.saleMoney};c.series[0].data.push(l),t.$refs.pieChart.init()}}catch(u){i=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}}})},zhutu:function(){var t=this;this.tab=1,c.series[0].data=[],f.xAxis[0].data=[],f.series[0].data=[],d.xAxis.data=[],d.series[0].data=[],(0,o.getMoneyAnalysisByShopId)(this.shopId,this.dateType,this.startTime,this.endTime).then(function(e){if(0==e.data.code){var n=!0,i=!1,r=void 0;try{for(var a,o=e.data.data[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value,l=s.dateTime,u=s.saleMoney;d.xAxis.data.push(l),d.series[0].data.push(u),t.$refs.barChart.init()}}catch(h){i=!0,r=h}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}}})},getMoneyAnalysisByShopId:function(t,e,n,i){var r=this;(0,o.getMoneyAnalysisByShopId)(t,e,n,i).then(function(t){if(0==t.data.code){var e=!0,n=!1,i=void 0;try{for(var a,o=t.data.data[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var s=a.value,l=s.dateTime,u=s.saleMoney;d.xAxis.data.push(l),d.series[0].data.push(u),r.$refs.barChart.init()}}catch(h){n=!0,i=h}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}}})},bindPickerChange:function(t){var e=this;this.startTime=t.detail.value,this.tab=1,c.series[0].data=[],f.xAxis[0].data=[],f.series[0].data=[],d.xAxis.data=[],d.series[0].data=[0],(0,o.getMoneyAnalysisByShopId)(this.shopId,this.dateType,this.startTime,this.endTime).then(function(t){if(0==t.data.code){var n=!0,i=!1,r=void 0;try{for(var a,o=t.data.data[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value,l=s.dateTime,u=s.saleMoney;d.xAxis.data.push(l),d.series[0].data.push(u),e.$refs.barChart.init()}}catch(h){i=!0,r=h}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}}})},bindPickerChange2:function(t){var e=this;this.endTime=t.detail.value,this.tab=1,c.series[0].data=[],f.xAxis[0].data=[],f.series[0].data=[],d.xAxis.data=[],d.series[0].data=[0],(0,o.getMoneyAnalysisByShopId)(this.shopId,this.dateType,this.startTime,this.endTime).then(function(t){if(0==t.data.code){var n=!0,i=!1,r=void 0;try{for(var a,o=t.data.data[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value,l=s.dateTime,u=s.saleMoney;d.xAxis.data.push(l),d.series[0].data.push(u),e.$refs.barChart.init()}}catch(h){i=!0,r=h}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}}})},getNowFormatDate:function(){var t=new Date,e="-",n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();i>=1&&i<=9&&(i="0"+i),r>=0&&r<=9&&(r="0"+r);var a=n+e+i+e+r;return a},pieInit:function(t,e,n){var i=r.init(t,null,{width:e,height:n});return t.setChart(i),i.setOption(c),i},lineInit:function(t,e,n){var i=r.init(t,null,{width:e,height:n});return t.setChart(i),i.setOption(f),i},barInit:function(t,e,n){var i=r.init(t,null,{width:e,height:n});return t.setChart(i),i.setOption(d),i},tabs:function(t){var e=this;this.currentTabs=t,this.tab=1,this.dateType=t,c.series[0].data=[],f.xAxis[0].data=[],f.series[0].data=[],d.xAxis.data=[],d.series[0].data=[],(0,o.getMoneyAnalysisByShopId)(this.shopId,this.dateType,this.startTime,this.endTime).then(function(t){if(0==t.data.code){var n=!0,i=!1,r=void 0;try{for(var a,o=t.data.data[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value,l=s.dateTime,u=s.saleMoney;d.xAxis.data.push(l),d.series[0].data.push(u),e.$refs.barChart.init()}}catch(h){i=!0,r=h}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}}})}}};e.default=p},ddd0:function(t,e,n){"use strict";n.r(e);var i=n("2f0f"),r=n("29e8");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("ea32");var o=n("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"78492db8",null);e["default"]=s.exports},e0c8:function(t,e,n){"use strict";var i=n("4034"),r=n.n(i);r.a},ea32:function(t,e,n){"use strict";var i=n("322a"),r=n.n(i);r.a},f7b4:function(t,e,n){"use strict";!function(t,n){n(e)}(0,function(t,e,n){function i(t,e){"createCanvas"===t&&(Pu=null),Au[t]=e}function r(t){if(null==t||"object"!=typeof t)return t;var e=t,n=Su.call(t);if("[object Array]"===n){if(!B(t)){e=[];for(var i=0,a=t.length;i<a;i++)e[i]=r(t[i])}}else if(bu[n]){if(!B(t)){var o=t.constructor;if(t.constructor.from)e=o.from(t);else{e=new o(t.length);for(i=0,a=t.length;i<a;i++)e[i]=r(t[i])}}}else if(!wu[n]&&!B(t)&&!I(t))for(var s in e={},t)t.hasOwnProperty(s)&&(e[s]=r(t[s]));return e}function a(t,e,n){if(!S(e)||!S(t))return n?r(e):t;for(var i in e)if(e.hasOwnProperty(i)){var o=t[i],s=e[i];!S(s)||!S(o)||x(s)||x(o)||I(s)||I(o)||M(s)||M(o)||B(s)||B(o)?!n&&i in t||(t[i]=r(e[i],!0)):a(o,s,n)}return t}function o(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)n=a(n,t[i],e);return n}function s(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function l(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function u(){return Pu||(Pu=Lu().getContext("2d")),Pu}function h(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function c(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function d(t,e,n){l(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function f(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function p(t,e,n){if(t&&e)if(t.forEach&&t.forEach===Tu)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(n,t[a],a,t)}function g(t,e,n){if(t&&e){if(t.map&&t.map===ku)return t.map(e,n);for(var i=[],r=0,a=t.length;r<a;r++)i.push(e.call(n,t[r],r,t));return i}}function v(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===Du)return t.reduce(e,n,i);for(var r=0,a=t.length;r<a;r++)n=e.call(i,n,t[r],r,t);return n}}function m(t,e,n){if(t&&e){if(t.filter&&t.filter===Iu)return t.filter(e,n);for(var i=[],r=0,a=t.length;r<a;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function y(t,e){var n=Cu.call(arguments,2);return function(){return t.apply(e,n.concat(Cu.call(arguments)))}}function _(t){var e=Cu.call(arguments,1);return function(){return t.apply(this,e.concat(Cu.call(arguments)))}}function x(t){return"[object Array]"===Su.call(t)}function w(t){return"function"==typeof t}function b(t){return"[object String]"===Su.call(t)}function S(t){var e=typeof t;return"function"===e||!!t&&"object"==e}function M(t){return!!wu[Su.call(t)]}function T(t){return!!bu[Su.call(t)]}function I(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function C(t){return t!==t}function k(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]}function D(t,e){return null!=t?t:e}function A(t,e,n){return null!=t?t:null!=e?e:n}function L(){return Function.call.apply(Cu,arguments)}function P(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function O(t,e){if(!t)throw new Error(e)}function E(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function N(t){t[Ou]=!0}function B(t){return t[Ou]}function z(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=x(t),i=this;t instanceof z?t.each(e):t&&p(t,e)}function R(t){return new z(t)}function F(){}function V(t,e){var n=new Eu(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function W(t){var e=new Eu(2);return e[0]=t[0],e[1]=t[1],e}function H(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function G(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function j(t){return Math.sqrt(X(t))}function X(t){return t[0]*t[0]+t[1]*t[1]}function q(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function Y(t,e){var n=j(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function U(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function Z(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function $(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function K(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function J(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function Q(t,e){return{target:t,topTarget:e&&e.topTarget}}function tt(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}function et(){}function nt(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||Fu}return!1}function it(){var t=new Hu(6);return rt(t),t}function rt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function at(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function ot(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],a=e[0]*n[2]+e[2]*n[3],o=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t}function st(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function lt(t,e,n){var i=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(n),h=Math.cos(n);return t[0]=i*h+o*u,t[1]=-i*u+o*h,t[2]=r*h+s*u,t[3]=-r*u+h*s,t[4]=h*a+u*l,t[5]=h*l-u*a,t}function ut(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function ht(t,e){var n=e[0],i=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=n*o-a*i;return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-o*r)*l,t[5]=(a*r-n*s)*l,t):null}function ct(t){return t>ju||t<-ju}function dt(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function ft(t){return(t=Math.round(t))<0?0:t>255?255:t}function pt(t){return t<0?0:t>1?1:t}function gt(t){return ft(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function vt(t){return pt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function mt(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function yt(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function _t(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function xt(t,e){nh&&_t(nh,e),nh=eh.put(t,nh||e.slice())}function wt(t,e){if(t){e=e||[];var n=eh.get(t);if(n)return _t(e,n);var i=(t+="").replace(/ /g,"").toLowerCase();if(i in th)return _t(e,th[i]),xt(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),a=i.indexOf(")");if(-1!==r&&a+1===i.length){var o=i.substr(0,r),s=i.substr(r+1,a-(r+1)).split(","),l=1;switch(o){case"rgba":if(4!==s.length)return void yt(e,0,0,0,1);l=vt(s.pop());case"rgb":return 3!==s.length?void yt(e,0,0,0,1):(yt(e,gt(s[0]),gt(s[1]),gt(s[2]),l),xt(t,e),e);case"hsla":return 4!==s.length?void yt(e,0,0,0,1):(s[3]=vt(s[3]),bt(s,e),xt(t,e),e);case"hsl":return 3!==s.length?void yt(e,0,0,0,1):(bt(s,e),xt(t,e),e);default:return}}yt(e,0,0,0,1)}else{if(4===i.length)return(u=parseInt(i.substr(1),16))>=0&&u<=4095?(yt(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),xt(t,e),e):void yt(e,0,0,0,1);if(7===i.length){var u=parseInt(i.substr(1),16);return u>=0&&u<=16777215?(yt(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),xt(t,e),e):void yt(e,0,0,0,1)}}}}function bt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=vt(t[1]),r=vt(t[2]),a=r<=.5?r*(i+1):r+i-r*i,o=2*r-a;return e=e||[],yt(e,ft(255*mt(o,a,n+1/3)),ft(255*mt(o,a,n)),ft(255*mt(o,a,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function St(t,e){var n=wt(t);if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return Mt(n,4===n.length?"rgba":"rgb")}}function Mt(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}function Tt(t,e){return t[e]}function It(t,e,n){t[e]=n}function Ct(t,e,n){return(e-t)*n+t}function kt(t,e,n){return n>.5?e:t}function Dt(t,e,n,i,r){var a=t.length;if(1==r)for(s=0;s<a;s++)i[s]=Ct(t[s],e[s],n);else for(var o=a&&t[0].length,s=0;s<a;s++)for(var l=0;l<o;l++)i[s][l]=Ct(t[s][l],e[s][l],n)}function At(t,e,n){var i=t.length,r=e.length;if(i!==r)if(i>r)t.length=r;else for(o=i;o<r;o++)t.push(1===n?e[o]:ih.call(e[o]));for(var a=t[0]&&t[0].length,o=0;o<t.length;o++)if(1===n)isNaN(t[o])&&(t[o]=e[o]);else for(var s=0;s<a;s++)isNaN(t[o][s])&&(t[o][s]=e[o][s])}function Lt(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(a=0;a<i;a++)if(t[a]!==e[a])return!1}else for(var r=t[0].length,a=0;a<i;a++)for(var o=0;o<r;o++)if(t[a][o]!==e[a][o])return!1;return!0}function Pt(t,e,n,i,r,a,o,s,l){var u=t.length;if(1==l)for(c=0;c<u;c++)s[c]=Ot(t[c],e[c],n[c],i[c],r,a,o);else for(var h=t[0].length,c=0;c<u;c++)for(var d=0;d<h;d++)s[c][d]=Ot(t[c][d],e[c][d],n[c][d],i[c][d],r,a,o)}function Ot(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function Et(t){if(f(t)){var e=t.length;if(f(t[0])){for(var n=[],i=0;i<e;i++)n.push(ih.call(t[i]));return n}return ih.call(t)}return t}function Nt(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function Bt(t){var e=t[t.length-1].value;return f(e&&e[0])?2:1}function zt(t,e,n,i,r,a){var o=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var h,c=f(i[0].value),d=!1,p=!1,g=c?Bt(i):0;i.sort(function(t,e){return t.time-e.time}),h=i[u-1].time;for(var v=[],m=[],y=i[0].value,_=!0,x=0;x<u;x++){v.push(i[x].time/h);var w=i[x].value;if(c&&Lt(w,y,g)||!c&&w===y||(_=!1),y=w,"string"==typeof w){var b=wt(w);b?(w=b,d=!0):p=!0}m.push(w)}if(a||!_){var S=m[u-1];for(x=0;x<u-1;x++)c?At(m[x],S,g):!isNaN(m[x])||isNaN(S)||p||d||(m[x]=S);c&&At(o(t._target,r),S,g);var M,T,I,C,k,D=0,A=0;if(d)var L=[0,0,0,0];var P=new dt({target:t._target,life:h,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(e<0)n=0;else if(e<A){for(n=Math.min(D+1,u-1);n>=0&&!(v[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=D;n<u&&!(v[n]>e);n++);n=Math.min(n-1,u-2)}D=n,A=e;var i=v[n+1]-v[n];if(0!==i)if(M=(e-v[n])/i,l)if(I=m[n],T=m[0===n?n:n-1],C=m[n>u-2?u-1:n+1],k=m[n>u-3?u-1:n+2],c)Pt(T,I,C,k,M,M*M,M*M*M,o(t,r),g);else{if(d)a=Pt(T,I,C,k,M,M*M,M*M*M,L,1),a=Nt(L);else{if(p)return kt(I,C,M);a=Ot(T,I,C,k,M,M*M,M*M*M)}s(t,r,a)}else if(c)Dt(m[n],m[n+1],M,o(t,r),g);else{var a;if(d)Dt(m[n],m[n+1],M,L,1),a=Nt(L);else{if(p)return kt(m[n],m[n+1],M);a=Ct(m[n],m[n+1],M)}s(t,r,a)}},ondestroy:n});return e&&"spline"!==e&&(P.easing=e),P}}}function Rt(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function Ft(t){for(var e=0;t>=gh;)e|=1&t,t>>=1;return t+e}function Vt(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++;Wt(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++;return r-e}function Wt(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}function Ht(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var a,o=t[i],s=e,l=i;s<l;)r(o,t[a=s+l>>>1])<0?l=a:s=a+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=o}}function Gt(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])>0){for(s=i-r;l<s&&a(t,e[n+r+l])>0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),o+=r,l+=r}else{for(s=r+1;l<s&&a(t,e[n+r-l])<=0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=o;o=r-l,l=r-u}for(o++;o<l;){var h=o+(l-o>>>1);a(t,e[n+h])>0?o=h+1:l=h}return l}function jt(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])<0){for(s=r+1;l<s&&a(t,e[n+r-l])<0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=o;o=r-l,l=r-u}else{for(s=i-r;l<s&&a(t,e[n+r+l])>=0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),o+=r,l+=r}for(o++;o<l;){var h=o+(l-o>>>1);a(t,e[n+h])<0?l=h:o=h+1}return l}function Xt(t,e){function n(n){var s=a[n],u=o[n],h=a[n+1],c=o[n+1];o[n]=u+c,n===l-3&&(a[n+1]=a[n+2],o[n+1]=o[n+2]),l--;var d=jt(t[h],t,s,u,0,e);s+=d,0!==(u-=d)&&0!==(c=Gt(t[s+u-1],t,h,c,c-1,e))&&(u<=c?i(s,u,h,c):r(s,u,h,c))}function i(n,i,r,a){var o=0;for(o=0;o<i;o++)u[o]=t[n+o];var l=0,h=r,c=n;if(t[c++]=t[h++],0!=--a)if(1!==i){for(var d,f,p,g=s;;){d=0,f=0,p=!1;do{if(e(t[h],u[l])<0){if(t[c++]=t[h++],f++,d=0,0==--a){p=!0;break}}else if(t[c++]=u[l++],d++,f=0,1==--i){p=!0;break}}while((d|f)<g);if(p)break;do{if(0!==(d=jt(t[h],u,l,i,0,e))){for(o=0;o<d;o++)t[c+o]=u[l+o];if(c+=d,l+=d,(i-=d)<=1){p=!0;break}}if(t[c++]=t[h++],0==--a){p=!0;break}if(0!==(f=Gt(u[l],t,h,a,0,e))){for(o=0;o<f;o++)t[c+o]=t[h+o];if(c+=f,h+=f,0===(a-=f)){p=!0;break}}if(t[c++]=u[l++],1==--i){p=!0;break}g--}while(d>=vh||f>=vh);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===i){for(o=0;o<a;o++)t[c+o]=t[h+o];t[c+a]=u[l]}else{if(0===i)throw new Error;for(o=0;o<i;o++)t[c+o]=u[l+o]}}else{for(o=0;o<a;o++)t[c+o]=t[h+o];t[c+a]=u[l]}else for(o=0;o<i;o++)t[c+o]=u[l+o]}function r(n,i,r,a){var o=0;for(o=0;o<a;o++)u[o]=t[r+o];var l=n+i-1,h=a-1,c=r+a-1,d=0,f=0;if(t[c--]=t[l--],0!=--i)if(1!==a){for(var p=s;;){var g=0,v=0,m=!1;do{if(e(u[h],t[l])<0){if(t[c--]=t[l--],g++,v=0,0==--i){m=!0;break}}else if(t[c--]=u[h--],v++,g=0,1==--a){m=!0;break}}while((g|v)<p);if(m)break;do{if(0!=(g=i-jt(u[h],t,n,i,i-1,e))){for(i-=g,f=1+(c-=g),d=1+(l-=g),o=g-1;o>=0;o--)t[f+o]=t[d+o];if(0===i){m=!0;break}}if(t[c--]=u[h--],1==--a){m=!0;break}if(0!=(v=a-Gt(t[l],u,0,a,a-1,e))){for(a-=v,f=1+(c-=v),d=1+(h-=v),o=0;o<v;o++)t[f+o]=u[d+o];if(a<=1){m=!0;break}}if(t[c--]=t[l--],0==--i){m=!0;break}p--}while(g>=vh||v>=vh);if(m)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===a){for(f=1+(c-=i),d=1+(l-=i),o=i-1;o>=0;o--)t[f+o]=t[d+o];t[c]=u[h]}else{if(0===a)throw new Error;for(d=c-(a-1),o=0;o<a;o++)t[d+o]=u[o]}}else{for(f=1+(c-=i),d=1+(l-=i),o=i-1;o>=0;o--)t[f+o]=t[d+o];t[c]=u[h]}else for(d=c-(a-1),o=0;o<a;o++)t[d+o]=u[o]}var a,o,s=vh,l=0,u=[];a=[],o=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&o[t-1]<=o[t]+o[t+1]||t>=2&&o[t-2]<=o[t]+o[t-1])o[t-1]<o[t+1]&&t--;else if(o[t]>o[t+1])break;n(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&o[t-1]<o[t+1]&&t--,n(t)}},this.pushRun=function(t,e){a[l]=t,o[l]=e,l+=1}}function qt(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(r<2)){var a=0;if(r<gh)return a=Vt(t,n,i,e),void Ht(t,n,i,n+a,e);var o=new Xt(t,e),s=Ft(r);do{if((a=Vt(t,n,i,e))<s){var l=r;l>s&&(l=s),Ht(t,n,n+l,n+a,e),a=l}o.pushRun(n,a),o.mergeRuns(),r-=a,n+=a}while(0!==r);o.forceMergeRuns()}}function Yt(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function Ut(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,a=null==e.y?0:e.y,o=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,a=a*n.height+n.y,o=o*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,a=isNaN(a)?0:a,o=isNaN(o)?0:o,t.createLinearGradient(i,a,r,o)}function Zt(t,e,n){var i=n.width,r=n.height,a=Math.min(i,r),o=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(o=o*i+n.x,s=s*r+n.y,l*=a),t.createRadialGradient(o,s,0,o,s,l)}function $t(){return!1}function Kt(t,e,n){var i=Lu(),r=e.getWidth(),a=e.getHeight(),o=i.style;return o&&(o.position="absolute",o.left=0,o.top=0,o.width=r+"px",o.height=a+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=a*n,i}function Jt(t){if("string"==typeof t){var e=kh.get(t);return e&&e.image}return t}function Qt(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var a=kh.get(t),o={hostEl:n,cb:i,cbPayload:r};return a?!ee(e=a.image)&&a.pending.push(o):(!e&&(e=new Image),e.onload=te,kh.put(t,e.__cachedImgObj={image:e,pending:[o]}),e.src=e.__zrImageSrc=t),e}return t}return e}function te(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function ee(t){return t&&t.width&&t.height}function ne(t,e){var n=t+":"+(e=e||Oh);if(Dh[n])return Dh[n];for(var i=(t+"").split("\n"),r=0,a=0,o=i.length;a<o;a++)r=Math.max(pe(i[a],e).width,r);return Ah>Lh&&(Ah=0,Dh={}),Ah++,Dh[n]=r,r}function ie(t,e,n,i,r,a,o){return a?ae(t,e,n,i,r,a,o):re(t,e,n,i,r,o)}function re(t,e,n,i,r,a){var o=ge(t,e,r,a),s=ne(t,e);r&&(s+=r[1]+r[3]);var l=o.outerHeight,u=new Rt(oe(0,s,n),se(0,l,i),s,l);return u.lineHeight=o.lineHeight,u}function ae(t,e,n,i,r,a,o){var s=ve(t,{rich:a,truncate:o,font:e,textAlign:n,textPadding:r}),l=s.outerWidth,u=s.outerHeight;return new Rt(oe(0,l,n),se(0,u,i),l,u)}function oe(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function se(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function le(t,e,n){var i=e.x,r=e.y,a=e.height,o=e.width,s=a/2,l="left",u="top";switch(t){case"left":i-=n,r+=s,l="right",u="middle";break;case"right":i+=n+o,r+=s,u="middle";break;case"top":i+=o/2,r-=n,l="center",u="bottom";break;case"bottom":i+=o/2,r+=a+n,l="center";break;case"inside":i+=o/2,r+=s,l="center",u="middle";break;case"insideLeft":i+=n,r+=s,u="middle";break;case"insideRight":i+=o-n,r+=s,l="right",u="middle";break;case"insideTop":i+=o/2,r+=n,l="center";break;case"insideBottom":i+=o/2,r+=a-n,l="center",u="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=o-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=a-n,u="bottom";break;case"insideBottomRight":i+=o-n,r+=a-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}}function ue(t,e,n,i,r){if(!e)return"";var a=(t+"").split("\n");r=he(e,n,i,r);for(var o=0,s=a.length;o<s;o++)a[o]=ce(a[o],r);return a.join("\n")}function he(t,e,n,i){(i=s({},i)).font=e;n=D(n,"...");i.maxIterations=D(i.maxIterations,2);var r=i.minChar=D(i.minChar,0);i.cnCharWidth=ne("国",e);var a=i.ascCharWidth=ne("a",e);i.placeholder=D(i.placeholder,"");for(var o=t=Math.max(0,t-1),l=0;l<r&&o>=a;l++)o-=a;var u=ne(n);return u>o&&(n="",u=0),o=t-u,i.ellipsis=n,i.ellipsisWidth=u,i.contentWidth=o,i.containerWidth=t,i}function ce(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var a=ne(t,i);if(a<=n)return t;for(var o=0;;o++){if(a<=r||o>=e.maxIterations){t+=e.ellipsis;break}var s=0===o?de(t,r,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*r/a):0;a=ne(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function de(t,e,n,i){for(var r=0,a=0,o=t.length;a<o&&r<e;a++){var s=t.charCodeAt(a);r+=0<=s&&s<=127?n:i}return a}function fe(t){return ne("国",t)}function pe(t,e){return Eh.measureText(t,e)}function ge(t,e,n,i){null!=t&&(t+="");var r=fe(e),a=t?t.split("\n"):[],o=a.length*r,s=o;if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth;if(null!=l&&s>l)t="",a=[];else if(null!=u)for(var h=he(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),c=0,d=a.length;c<d;c++)a[c]=ce(a[c],h)}return{lines:a,height:o,outerHeight:s,lineHeight:r}}function ve(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=Ph.lastIndex=0;null!=(i=Ph.exec(t));){var a=i.index;a>r&&me(n,t.substring(r,a)),me(n,i[2],i[1]),r=Ph.lastIndex}r<t.length&&me(n,t.substring(r,t.length));var o=n.lines,s=0,l=0,u=[],h=e.textPadding,c=e.truncate,d=c&&c.outerWidth,f=c&&c.outerHeight;for(h&&(null!=d&&(d-=h[1]+h[3]),null!=f&&(f-=h[0]+h[2])),k=0;k<o.length;k++){for(var p=o[k],g=0,v=0,m=0;m<p.tokens.length;m++){var y=(L=p.tokens[m]).styleName&&e.rich[L.styleName]||{},_=L.textPadding=y.textPadding,x=L.font=y.font||e.font,w=L.textHeight=D(y.textHeight,fe(x));if(_&&(w+=_[0]+_[2]),L.height=w,L.lineHeight=A(y.textLineHeight,e.textLineHeight,w),L.textAlign=y&&y.textAlign||e.textAlign,L.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=f&&s+L.lineHeight>f)return{lines:[],width:0,height:0};L.textWidth=ne(L.text,x);var b=y.textWidth,S=null==b||"auto"===b;if("string"==typeof b&&"%"===b.charAt(b.length-1))L.percentWidth=b,u.push(L),b=0;else{if(S){b=L.textWidth;var M=y.textBackgroundColor,T=M&&M.image;T&&ee(T=Jt(T))&&(b=Math.max(b,T.width*w/T.height))}var I=_?_[1]+_[3]:0;b+=I;var C=null!=d?d-v:null;null!=C&&C<b&&(!S||C<I?(L.text="",L.textWidth=b=0):(L.text=ue(L.text,C-I,x,c.ellipsis,{minChar:c.minChar}),L.textWidth=ne(L.text,x),b=L.textWidth+I))}v+=L.width=b,y&&(g=Math.max(g,L.lineHeight))}p.width=v,p.lineHeight=g,s+=g,l=Math.max(l,v)}n.outerWidth=n.width=D(e.textWidth,l),n.outerHeight=n.height=D(e.textHeight,s),h&&(n.outerWidth+=h[1]+h[3],n.outerHeight+=h[0]+h[2]);for(var k=0;k<u.length;k++){var L=u[k],P=L.percentWidth;L.width=parseInt(P,10)/100*l}return n}function me(t,e,n){for(var i=""===e,r=e.split("\n"),a=t.lines,o=0;o<r.length;o++){var s=r[o],l={styleName:n,text:s,isLineHolder:!s&&!i};if(o)a.push({tokens:[l]});else{var u=(a[a.length-1]||(a[0]={tokens:[]})).tokens,h=u.length;1===h&&u[0].isLineHolder?u[0]=l:(s||!h||i)&&u.push(l)}}}function ye(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&E(e)||t.textFont||t.font}function _e(t,e){var n,i,r,a,o,s=e.x,l=e.y,u=e.width,h=e.height,c=e.r;u<0&&(s+=u,u=-u),h<0&&(l+=h,h=-h),"number"==typeof c?n=i=r=a=c:c instanceof Array?1===c.length?n=i=r=a=c[0]:2===c.length?(n=r=c[0],i=a=c[1]):3===c.length?(n=c[0],i=a=c[1],r=c[2]):(n=c[0],i=c[1],r=c[2],a=c[3]):n=i=r=a=0,n+i>u&&(n*=u/(o=n+i),i*=u/o),r+a>u&&(r*=u/(o=r+a),a*=u/o),i+r>h&&(i*=h/(o=i+r),r*=h/o),n+a>h&&(n*=h/(o=n+a),a*=h/o),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+h-r),0!==r&&t.arc(s+u-r,l+h-r,r,0,Math.PI/2),t.lineTo(s+a,l+h),0!==a&&t.arc(s+a,l+h-a,a,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function xe(t){return we(t),p(t.rich,we),t}function we(t){if(t){t.font=ye(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Nh[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||Bh[n]?n:"top",t.textPadding&&(t.textPadding=P(t.textPadding))}}function be(t,e,n,i,r){i.rich?Me(t,e,n,i,r):Se(t,e,n,i,r)}function Se(t,e,n,i,r){var a=Pe(e,"font",i.font||Oh),o=i.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=ge(n,a,o,i.truncate));var l=s.outerHeight,u=s.lines,h=s.lineHeight,c=Le(l,i,r),d=c.baseX,f=c.baseY,p=c.textAlign,g=c.textVerticalAlign;Ie(e,i,r,d,f);var v=se(f,l,g),m=d,y=v,_=ke(i);if(_||o){var x=ne(n,a);o&&(x+=o[1]+o[3]);var w=oe(d,x,p);_&&De(t,e,i,w,v,x,l),o&&(m=Be(d,p,o),y+=o[0])}Pe(e,"textAlign",p||"left"),Pe(e,"textBaseline","middle"),Pe(e,"shadowBlur",i.textShadowBlur||0),Pe(e,"shadowColor",i.textShadowColor||"transparent"),Pe(e,"shadowOffsetX",i.textShadowOffsetX||0),Pe(e,"shadowOffsetY",i.textShadowOffsetY||0),y+=h/2;var b=i.textStrokeWidth,S=Oe(i.textStroke,b),M=Ee(i.textFill);S&&(Pe(e,"lineWidth",b),Pe(e,"strokeStyle",S)),M&&Pe(e,"fillStyle",M);for(var T=0;T<u.length;T++)S&&e.strokeText(u[T],m,y),M&&e.fillText(u[T],m,y),y+=h}function Me(t,e,n,i,r){var a=t.__textCotentBlock;a&&!t.__dirty||(a=t.__textCotentBlock=ve(n,i)),Te(t,e,a,i,r)}function Te(t,e,n,i,r){var a=n.width,o=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=Le(s,i,r),h=u.baseX,c=u.baseY,d=u.textAlign,f=u.textVerticalAlign;Ie(e,i,r,h,c);var p=oe(h,o,d),g=se(c,s,f),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+a;ke(i)&&De(t,e,i,p,g,o,s);for(var _=0;_<n.lines.length;_++){for(var x,w=n.lines[_],b=w.tokens,S=b.length,M=w.lineHeight,T=w.width,I=0,C=v,k=y,D=S-1;I<S&&(!(x=b[I]).textAlign||"left"===x.textAlign);)Ce(t,e,x,i,M,m,C,"left"),T-=x.width,C+=x.width,I++;for(;D>=0&&"right"===(x=b[D]).textAlign;)Ce(t,e,x,i,M,m,k,"right"),T-=x.width,k-=x.width,D--;for(C+=(a-(C-v)-(y-k)-T)/2;I<=D;)Ce(t,e,x=b[I],i,M,m,C+x.width/2,"center"),C+=x.width,I++;m+=M}}function Ie(t,e,n,i,r){if(n&&e.textRotation){var a=e.textOrigin;"center"===a?(i=n.width/2+n.x,r=n.height/2+n.y):a&&(i=a[0]+n.x,r=a[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function Ce(t,e,n,i,r,a,o,s){var l=i.rich[n.styleName]||{},u=n.textVerticalAlign,h=a+r/2;"top"===u?h=a+n.height/2:"bottom"===u&&(h=a+r-n.height/2),!n.isLineHolder&&ke(l)&&De(t,e,l,"right"===s?o-n.width:"center"===s?o-n.width/2:o,h-n.height/2,n.width,n.height);var c=n.textPadding;c&&(o=Be(o,s,c),h-=n.height/2-c[2]-n.textHeight/2),Pe(e,"shadowBlur",A(l.textShadowBlur,i.textShadowBlur,0)),Pe(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),Pe(e,"shadowOffsetX",A(l.textShadowOffsetX,i.textShadowOffsetX,0)),Pe(e,"shadowOffsetY",A(l.textShadowOffsetY,i.textShadowOffsetY,0)),Pe(e,"textAlign",s),Pe(e,"textBaseline","middle"),Pe(e,"font",n.font||Oh);var d=Oe(l.textStroke||i.textStroke,p),f=Ee(l.textFill||i.textFill),p=D(l.textStrokeWidth,i.textStrokeWidth);d&&(Pe(e,"lineWidth",p),Pe(e,"strokeStyle",d),e.strokeText(n.text,o,h)),f&&(Pe(e,"fillStyle",f),e.fillText(n.text,o,h))}function ke(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function De(t,e,n,i,r,a,o){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,h=b(s);if(Pe(e,"shadowBlur",n.textBoxShadowBlur||0),Pe(e,"shadowColor",n.textBoxShadowColor||"transparent"),Pe(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),Pe(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),h||l&&u){e.beginPath();var c=n.textBorderRadius;c?_e(e,{x:i,y:r,width:a,height:o,r:c}):e.rect(i,r,a,o),e.closePath()}if(h)Pe(e,"fillStyle",s),e.fill();else if(S(s)){var d=s.image;(d=Qt(d,null,t,Ae,s))&&ee(d)&&e.drawImage(d,i,r,a,o)}l&&u&&(Pe(e,"lineWidth",l),Pe(e,"strokeStyle",u),e.stroke())}function Ae(t,e){e.image=t}function Le(t,e,n){var i=e.x||0,r=e.y||0,a=e.textAlign,o=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+Ne(s[0],n.width),r=n.y+Ne(s[1],n.height);else{var l=le(s,n,e.textDistance);i=l.x,r=l.y,a=a||l.textAlign,o=o||l.textVerticalAlign}var u=e.textOffset;u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:a,textVerticalAlign:o}}function Pe(t,e,n){return t[e]=_h(t,e,n),t[e]}function Oe(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ee(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ne(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function Be(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function ze(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function Re(t){for(var e in t=t||{},hh.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new wh(t.style,this),this._rect=null,this.__clipPaths=[]}function Fe(t){Re.call(this,t)}function Ve(t){return parseInt(t,10)}function We(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function He(t,e,n){return Fh.copy(t.getBoundingRect()),t.transform&&Fh.applyTransform(t.transform),Vh.width=e,Vh.height=n,!Fh.intersect(Vh)}function Ge(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}function je(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function Xe(t,e){var i=n.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}function qe(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function Ye(t,e,n,i){return n=n||{},i||!xu.canvasSupported?Ue(t,e,n):xu.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):Ue(t,e,n),n}function Ue(t,e,n){var i=qe(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function Ze(t,n,i){if(null!=(n=n||e.event).zrX)return n;var r=n.type;if(r&&r.indexOf("touch")>=0){var a="touchend"!=r?n.targetTouches[0]:n.changedTouches[0];a&&Ye(t,a,n,i)}else Ye(t,n,n,i),n.zrDelta=n.wheelDelta?n.wheelDelta/120:-(n.detail||0)/3;var o=n.button;return null==n.which&&void 0!==o&&Gh.test(n.type)&&(n.which=1&o?1:2&o?3:4&o?2:0),n}function $e(t,e,n){Hh?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function Ke(t,e,n){Hh?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function Je(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function Qe(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function tn(t){return"mousewheel"===t&&xu.browser.firefox?"DOMMouseScroll":t}function en(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var a=r.type;e.gestureEvent=a,t.handler.dispatchToElement({target:r.target},a,r.event)}}function nn(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function rn(t){var e=t.pointerType;return"pen"===e||"touch"===e}function an(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}p(Uh,function(e){t._handlers[e]=y(Kh[e],t)}),p($h,function(e){t._handlers[e]=y(Kh[e],t)}),p(Yh,function(n){t._handlers[n]=e(Kh[n],t)})}function on(t){function e(e,n){p(e,function(e){$e(t,tn(e),n._handlers[e])},n)}Ru.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new Xh,this._handlers={},an(this),xu.pointerEventsSupported?e($h,this):(xu.touchEventsSupported&&e(Uh,this),e(Yh,this))}function sn(t,e){return new ec(_u(),t,e)}function ln(t){return t instanceof Array?t:null==t?[]:[t]}function un(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;i<r;i++){var a=n[i];!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a])}}}function hn(t){return!ic(t)||rc(t)||t instanceof Date?t:t.value}function cn(t){return ic(t)&&!(t instanceof Array)}function dn(t,e){e=(e||[]).slice();var n=g(t||[],function(t,e){return{exist:t}});return nc(e,function(t,i){if(ic(t)){for(r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var a=n[r].exist;if(!(n[r].option||null!=a.id&&null!=t.id||null==t.name||gn(t)||gn(a)||a.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),nc(e,function(t,e){if(ic(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!gn(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n}function fn(t){var e=R();nc(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),nc(t,function(t,n){var i=t.option;O(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),!t.keyInfo&&(t.keyInfo={})}),nc(t,function(t,n){var i=t.exist,r=t.option,a=t.keyInfo;if(ic(r)){if(a.name=null!=r.name?r.name+"":i?i.name:ac+n,i)a.id=i.id;else if(null!=r.id)a.id=r.id+"";else{var o=0;do{a.id="\0"+a.name+"\0"+o++}while(e.get(a.id))}e.set(a.id,t)}})}function pn(t){var e=t.name;return!(!e||!e.indexOf(ac))}function gn(t){return ic(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function vn(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?x(e.dataIndex)?g(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?x(e.name)?g(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function mn(){var t="__\0ec_inner_"+sc+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function yn(t,e,n){if(b(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||_n(e,r+"Index")||_n(e,r+"Id")||_n(e,r+"Name")||(e[r+"Index"]=0);var a={};return nc(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var o=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=o[1],l=(o[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&h(n.includeMainTypes,s)<0)){var u={mainType:s};"index"===l&&"all"===i||(u[l]=i);var c=t.queryComponents(u);a[s+"Models"]=c,a[s+"Model"]=c[0]}}else a[r]=i}),a}function _n(t,e){return t&&t.hasOwnProperty(e)}function xn(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function wn(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function bn(t){var e={main:"",sub:""};return t&&(t=t.split(lc),e.main=t[0]||"",e.sub=t[1]||""),e}function Sn(t){O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function Mn(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return s(n.prototype,t),n.extend=this.extend,n.superCall=In,n.superApply=Cn,c(n,this),n.superClass=e,n}}function Tn(t){var e=["__\0is_clz",hc++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function In(t,e){var n=L(arguments,2);return this.superClass.prototype[e].apply(t,n)}function Cn(t,e,n){return this.superClass.prototype[e].apply(t,n)}function kn(t,e){function n(t){var e=i[t.main];return e&&e[uc]||((e=i[t.main]={})[uc]=!0),e}e=e||{};var i={};if(t.registerClass=function(t,e){return e&&(Sn(e),(e=bn(e)).sub?e.sub!==uc&&(n(e)[e.sub]=t):i[e.main]=t),t},t.getClass=function(t,e,n){var r=i[t];if(r&&r[uc]&&(r=e?r[e]:null),n&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=bn(t);var e=[],n=i[t.main];return n&&n[uc]?p(n,function(t,n){n!==uc&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=bn(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return p(i,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=bn(t);var e=i[t.main];return e&&e[uc]},t.parseClassType=bn,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var n=r.call(this,e);return t.registerClass(n,e.type)})}return t}function Dn(t){return t>-yc&&t<yc}function An(t){return t>yc||t<-yc}function Ln(t,e,n,i,r){var a=1-r;return a*a*(a*t+3*r*e)+r*r*(r*i+3*a*n)}function Pn(t,e,n,i,r){var a=1-r;return 3*(((e-t)*a+2*(n-e)*r)*a+(i-n)*r*r)}function On(t,e,n,i,r,a){var o=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,h=s*s-3*o*l,c=s*l-9*o*u,d=l*l-3*s*u,f=0;if(Dn(h)&&Dn(c))Dn(s)?a[0]=0:(M=-l/s)>=0&&M<=1&&(a[f++]=M);else{var p=c*c-4*h*d;if(Dn(p)){var g=c/h,v=-g/2;(M=-s/o+g)>=0&&M<=1&&(a[f++]=M),v>=0&&v<=1&&(a[f++]=v)}else if(p>0){var m=mc(p),y=h*s+1.5*o*(-c+m),_=h*s+1.5*o*(-c-m);(M=(-s-((y=y<0?-vc(-y,wc):vc(y,wc))+(_=_<0?-vc(-_,wc):vc(_,wc))))/(3*o))>=0&&M<=1&&(a[f++]=M)}else{var x=(2*h*s-3*o*c)/(2*mc(h*h*h)),w=Math.acos(x)/3,b=mc(h),S=Math.cos(w),M=(-s-2*b*S)/(3*o),T=(v=(-s+b*(S+xc*Math.sin(w)))/(3*o),(-s+b*(S-xc*Math.sin(w)))/(3*o));M>=0&&M<=1&&(a[f++]=M),v>=0&&v<=1&&(a[f++]=v),T>=0&&T<=1&&(a[f++]=T)}}return f}function En(t,e,n,i,r){var a=6*n-12*e+6*t,o=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(Dn(o))An(a)&&(c=-s/a)>=0&&c<=1&&(r[l++]=c);else{var u=a*a-4*o*s;if(Dn(u))r[0]=-a/(2*o);else if(u>0){var h=mc(u),c=(-a+h)/(2*o),d=(-a-h)/(2*o);c>=0&&c<=1&&(r[l++]=c),d>=0&&d<=1&&(r[l++]=d)}}return l}function Nn(t,e,n,i,r,a){var o=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-o)*r+o,h=(l-s)*r+s,c=(h-u)*r+u;a[0]=t,a[1]=o,a[2]=u,a[3]=c,a[4]=c,a[5]=h,a[6]=l,a[7]=i}function Bn(t,e,n,i,r,a,o,s,l,u,h){var c,d,f,p,g,v=.005,m=1/0;bc[0]=l,bc[1]=u;for(var y=0;y<1;y+=.05)Sc[0]=Ln(t,n,r,o,y),Sc[1]=Ln(e,i,a,s,y),(p=Bu(bc,Sc))<m&&(c=y,m=p);m=1/0;for(var _=0;_<32&&!(v<_c);_++)d=c-v,f=c+v,Sc[0]=Ln(t,n,r,o,d),Sc[1]=Ln(e,i,a,s,d),p=Bu(Sc,bc),d>=0&&p<m?(c=d,m=p):(Mc[0]=Ln(t,n,r,o,f),Mc[1]=Ln(e,i,a,s,f),g=Bu(Mc,bc),f<=1&&g<m?(c=f,m=g):v*=.5);return h&&(h[0]=Ln(t,n,r,o,c),h[1]=Ln(e,i,a,s,c)),mc(m)}function zn(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function Rn(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function Fn(t,e,n,i,r){var a=t-2*e+n,o=2*(e-t),s=t-i,l=0;if(Dn(a))An(o)&&(c=-s/o)>=0&&c<=1&&(r[l++]=c);else{var u=o*o-4*a*s;if(Dn(u))(c=-o/(2*a))>=0&&c<=1&&(r[l++]=c);else if(u>0){var h=mc(u),c=(-o+h)/(2*a),d=(-o-h)/(2*a);c>=0&&c<=1&&(r[l++]=c),d>=0&&d<=1&&(r[l++]=d)}}return l}function Vn(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function Wn(t,e,n,i,r){var a=(e-t)*i+t,o=(n-e)*i+e,s=(o-a)*i+a;r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=n}function Hn(t,e,n,i,r,a,o,s,l){var u,h=.005,c=1/0;bc[0]=o,bc[1]=s;for(var d=0;d<1;d+=.05)Sc[0]=zn(t,n,r,d),Sc[1]=zn(e,i,a,d),(v=Bu(bc,Sc))<c&&(u=d,c=v);c=1/0;for(var f=0;f<32&&!(h<_c);f++){var p=u-h,g=u+h;Sc[0]=zn(t,n,r,p),Sc[1]=zn(e,i,a,p);var v=Bu(Sc,bc);if(p>=0&&v<c)u=p,c=v;else{Mc[0]=zn(t,n,r,g),Mc[1]=zn(e,i,a,g);var m=Bu(Mc,bc);g<=1&&m<c?(u=g,c=m):h*=.5}}return l&&(l[0]=zn(t,n,r,u),l[1]=zn(e,i,a,u)),mc(c)}function Gn(t,e,n,i,r,a){r[0]=Tc(t,n),r[1]=Tc(e,i),a[0]=Ic(t,n),a[1]=Ic(e,i)}function jn(t,e,n,i,r,a,o,s,l,u){var h,c=En,d=Ln,f=c(t,n,r,o,Oc);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,h=0;h<f;h++){var p=d(t,n,r,o,Oc[h]);l[0]=Tc(p,l[0]),u[0]=Ic(p,u[0])}for(f=c(e,i,a,s,Ec),h=0;h<f;h++){var g=d(e,i,a,s,Ec[h]);l[1]=Tc(g,l[1]),u[1]=Ic(g,u[1])}l[0]=Tc(t,l[0]),u[0]=Ic(t,u[0]),l[0]=Tc(o,l[0]),u[0]=Ic(o,u[0]),l[1]=Tc(e,l[1]),u[1]=Ic(e,u[1]),l[1]=Tc(s,l[1]),u[1]=Ic(s,u[1])}function Xn(t,e,n,i,r,a,o,s){var l=Vn,u=zn,h=Ic(Tc(l(t,n,r),1),0),c=Ic(Tc(l(e,i,a),1),0),d=u(t,n,r,h),f=u(e,i,a,c);o[0]=Tc(t,r,d),o[1]=Tc(e,a,f),s[0]=Ic(t,r,d),s[1]=Ic(e,a,f)}function qn(t,e,n,i,r,a,o,s,l){var u=$,h=K,c=Math.abs(r-a);if(c%Dc<1e-4&&c>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(Ac[0]=kc(r)*n+t,Ac[1]=Cc(r)*i+e,Lc[0]=kc(a)*n+t,Lc[1]=Cc(a)*i+e,u(s,Ac,Lc),h(l,Ac,Lc),(r%=Dc)<0&&(r+=Dc),(a%=Dc)<0&&(a+=Dc),r>a&&!o?a+=Dc:r<a&&o&&(r+=Dc),o){var d=a;a=r,r=d}for(var f=0;f<a;f+=Math.PI/2)f>r&&(Pc[0]=kc(f)*n+t,Pc[1]=Cc(f)*i+e,u(s,Pc,s),h(l,Pc,l))}function Yn(t,e,n,i,r,a,o){if(0===r)return!1;var s=r,l=0;if(o>e+s&&o>i+s||o<e-s&&o<i-s||a>t+s&&a>n+s||a<t-s&&a<n-s)return!1;if(t===n)return Math.abs(a-t)<=s/2;var u=(l=(e-i)/(t-n))*a-o+(t*i-n*e)/(t-n);return u*u/(l*l+1)<=s/2*s/2}function Un(t,e,n,i,r,a,o,s,l,u,h){if(0===l)return!1;var c=l;return!(h>e+c&&h>i+c&&h>a+c&&h>s+c||h<e-c&&h<i-c&&h<a-c&&h<s-c||u>t+c&&u>n+c&&u>r+c&&u>o+c||u<t-c&&u<n-c&&u<r-c&&u<o-c)&&Bn(t,e,n,i,r,a,o,s,u,h,null)<=c/2}function Zn(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var u=o;return!(l>e+u&&l>i+u&&l>a+u||l<e-u&&l<i-u&&l<a-u||s>t+u&&s>n+u&&s>r+u||s<t-u&&s<n-u&&s<r-u)&&Hn(t,e,n,i,r,a,s,l,null)<=u/2}function $n(t){return(t%=Uc)<0&&(t+=Uc),t}function Kn(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var u=o;s-=t,l-=e;var h=Math.sqrt(s*s+l*l);if(h-u>n||h+u<n)return!1;if(Math.abs(i-r)%Zc<1e-4)return!0;if(a){var c=i;i=$n(r),r=$n(c)}else i=$n(i),r=$n(r);i>r&&(r+=Zc);var d=Math.atan2(l,s);return d<0&&(d+=Zc),d>=i&&d<=r||d+Zc>=i&&d+Zc<=r}function Jn(t,e,n,i,r,a){if(a>e&&a>i||a<e&&a<i)return 0;if(i===e)return 0;var o=i<e?1:-1,s=(a-e)/(i-e);1!==s&&0!==s||(o=i<e?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?o:0}function Qn(t,e){return Math.abs(t-e)<Jc}function ti(){var t=td[0];td[0]=td[1],td[1]=t}function ei(t,e,n,i,r,a,o,s,l,u){if(u>e&&u>i&&u>a&&u>s||u<e&&u<i&&u<a&&u<s)return 0;var h=On(e,i,a,s,u,Qc);if(0===h)return 0;for(var c,d,f=0,p=-1,g=0;g<h;g++){var v=Qc[g],m=0===v||1===v?.5:1;Ln(t,n,r,o,v)<l||(p<0&&(p=En(e,i,a,s,td),td[1]<td[0]&&p>1&&ti(),c=Ln(e,i,a,s,td[0]),p>1&&(d=Ln(e,i,a,s,td[1]))),2==p?v<td[0]?f+=c<e?m:-m:v<td[1]?f+=d<c?m:-m:f+=s<d?m:-m:v<td[0]?f+=c<e?m:-m:f+=s<c?m:-m)}return f}function ni(t,e,n,i,r,a,o,s){if(s>e&&s>i&&s>a||s<e&&s<i&&s<a)return 0;var l=Fn(e,i,a,s,Qc);if(0===l)return 0;var u=Vn(e,i,a);if(u>=0&&u<=1){for(var h=0,c=zn(e,i,a,u),d=0;d<l;d++)f=0===Qc[d]||1===Qc[d]?.5:1,(p=zn(t,n,r,Qc[d]))<o||(Qc[d]<u?h+=c<e?f:-f:h+=a<c?f:-f);return h}var f=0===Qc[0]||1===Qc[0]?.5:1,p=zn(t,n,r,Qc[0]);return p<o?0:a<e?f:-f}function ii(t,e,n,i,r,a,o,s){if((s-=e)>n||s<-n)return 0;u=Math.sqrt(n*n-s*s),Qc[0]=-u,Qc[1]=u;var l=Math.abs(i-r);if(l<1e-4)return 0;if(l%Kc<1e-4)return i=0,r=Kc,p=a?1:-1,o>=Qc[0]+t&&o<=Qc[1]+t?p:0;if(a){var u=i;i=$n(r),r=$n(u)}else i=$n(i),r=$n(r);i>r&&(r+=Kc);for(var h=0,c=0;c<2;c++){var d=Qc[c];if(d+t>o){var f=Math.atan2(s,d),p=a?1:-1;f<0&&(f=Kc+f),(f>=i&&f<=r||f+Kc>=i&&f+Kc<=r)&&(f>Math.PI/2&&f<1.5*Math.PI&&(p=-p),h+=p)}}return h}function ri(t,e,n,i,r){for(var a=0,o=0,s=0,l=0,u=0,h=0;h<t.length;){var c=t[h++];switch(c===$c.M&&h>1&&(n||(a+=Jn(o,s,l,u,i,r))),1==h&&(l=o=t[h],u=s=t[h+1]),c){case $c.M:o=l=t[h++],s=u=t[h++];break;case $c.L:if(n){if(Yn(o,s,t[h],t[h+1],e,i,r))return!0}else a+=Jn(o,s,t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case $c.C:if(n){if(Un(o,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],e,i,r))return!0}else a+=ei(o,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case $c.Q:if(n){if(Zn(o,s,t[h++],t[h++],t[h],t[h+1],e,i,r))return!0}else a+=ni(o,s,t[h++],t[h++],t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case $c.A:var d=t[h++],f=t[h++],p=t[h++],g=t[h++],v=t[h++],m=t[h++],y=(t[h++],1-t[h++]),_=Math.cos(v)*p+d,x=Math.sin(v)*g+f;h>1?a+=Jn(o,s,_,x,i,r):(l=_,u=x);var w=(i-d)*g/p+d;if(n){if(Kn(d,f,g,v,v+m,y,e,w,r))return!0}else a+=ii(d,f,g,v,v+m,y,w,r);o=Math.cos(v+m)*p+d,s=Math.sin(v+m)*g+f;break;case $c.R:l=o=t[h++],u=s=t[h++];_=l+t[h++],x=u+t[h++];if(n){if(Yn(l,u,_,u,e,i,r)||Yn(_,u,_,x,e,i,r)||Yn(_,x,l,x,e,i,r)||Yn(l,x,l,u,e,i,r))return!0}else a+=Jn(_,u,_,x,i,r),a+=Jn(l,x,l,u,i,r);break;case $c.Z:if(n){if(Yn(o,s,l,u,e,i,r))return!0}else a+=Jn(o,s,l,u,i,r);o=l,s=u}}return n||Qn(s,u)||(a+=Jn(o,s,l,u,i,r)||0),0!==a}function ai(t,e,n){return ri(t,0,!1,e,n)}function oi(t,e,n,i){return ri(t,e,!0,n,i)}function si(t){Re.call(this,t),this.path=null}function li(t,e,n,i,r,a,o,s,l,u,h){var c=l*(fd/180),d=dd(c)*(t-n)/2+cd(c)*(e-i)/2,f=-1*cd(c)*(t-n)/2+dd(c)*(e-i)/2,p=d*d/(o*o)+f*f/(s*s);p>1&&(o*=hd(p),s*=hd(p));var g=(r===a?-1:1)*hd((o*o*(s*s)-o*o*(f*f)-s*s*(d*d))/(o*o*(f*f)+s*s*(d*d)))||0,v=g*o*f/s,m=g*-s*d/o,y=(t+n)/2+dd(c)*v-cd(c)*m,_=(e+i)/2+cd(c)*v+dd(c)*m,x=vd([1,0],[(d-v)/o,(f-m)/s]),w=[(d-v)/o,(f-m)/s],b=[(-1*d-v)/o,(-1*f-m)/s],S=vd(w,b);gd(w,b)<=-1&&(S=fd),gd(w,b)>=1&&(S=0),0===a&&S>0&&(S-=2*fd),1===a&&S<0&&(S+=2*fd),h.addData(u,y,_,o,s,x,S,c,a)}function ui(t){if(!t)return[];var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<ud.length;e++)n=n.replace(new RegExp(ud[e],"g"),"|"+ud[e]);var i,r=n.split("|"),a=0,o=0,s=new Yc,l=Yc.CMD;for(e=1;e<r.length;e++){var u,h=r[e],c=h.charAt(0),d=0,f=h.slice(1).replace(/e,-/g,"e-").split(",");f.length>0&&""===f[0]&&f.shift();for(var p=0;p<f.length;p++)f[p]=parseFloat(f[p]);for(;d<f.length&&!isNaN(f[d])&&!isNaN(f[0]);){var g,v,m,y,_,x,w,b=a,S=o;switch(c){case"l":a+=f[d++],o+=f[d++],u=l.L,s.addData(u,a,o);break;case"L":a=f[d++],o=f[d++],u=l.L,s.addData(u,a,o);break;case"m":a+=f[d++],o+=f[d++],u=l.M,s.addData(u,a,o),c="l";break;case"M":a=f[d++],o=f[d++],u=l.M,s.addData(u,a,o),c="L";break;case"h":a+=f[d++],u=l.L,s.addData(u,a,o);break;case"H":a=f[d++],u=l.L,s.addData(u,a,o);break;case"v":o+=f[d++],u=l.L,s.addData(u,a,o);break;case"V":o=f[d++],u=l.L,s.addData(u,a,o);break;case"C":u=l.C,s.addData(u,f[d++],f[d++],f[d++],f[d++],f[d++],f[d++]),a=f[d-2],o=f[d-1];break;case"c":u=l.C,s.addData(u,f[d++]+a,f[d++]+o,f[d++]+a,f[d++]+o,f[d++]+a,f[d++]+o),a+=f[d-2],o+=f[d-1];break;case"S":g=a,v=o;var M=s.len(),T=s.data;i===l.C&&(g+=a-T[M-4],v+=o-T[M-3]),u=l.C,b=f[d++],S=f[d++],a=f[d++],o=f[d++],s.addData(u,g,v,b,S,a,o);break;case"s":g=a,v=o;M=s.len(),T=s.data;i===l.C&&(g+=a-T[M-4],v+=o-T[M-3]),u=l.C,b=a+f[d++],S=o+f[d++],a+=f[d++],o+=f[d++],s.addData(u,g,v,b,S,a,o);break;case"Q":b=f[d++],S=f[d++],a=f[d++],o=f[d++],u=l.Q,s.addData(u,b,S,a,o);break;case"q":b=f[d++]+a,S=f[d++]+o,a+=f[d++],o+=f[d++],u=l.Q,s.addData(u,b,S,a,o);break;case"T":g=a,v=o;M=s.len(),T=s.data;i===l.Q&&(g+=a-T[M-4],v+=o-T[M-3]),a=f[d++],o=f[d++],u=l.Q,s.addData(u,g,v,a,o);break;case"t":g=a,v=o;M=s.len(),T=s.data;i===l.Q&&(g+=a-T[M-4],v+=o-T[M-3]),a+=f[d++],o+=f[d++],u=l.Q,s.addData(u,g,v,a,o);break;case"A":m=f[d++],y=f[d++],_=f[d++],x=f[d++],w=f[d++],li(b=a,S=o,a=f[d++],o=f[d++],x,w,m,y,_,u=l.A,s);break;case"a":m=f[d++],y=f[d++],_=f[d++],x=f[d++],w=f[d++],li(b=a,S=o,a+=f[d++],o+=f[d++],x,w,m,y,_,u=l.A,s)}}"z"!==c&&"Z"!==c||(u=l.Z,s.addData(u)),i=u}return s.toStatic(),s}function hi(t,e){var n=ui(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){ld(n,t),this.dirty(!0)},e}function ci(t,e){return new si(hi(t,e))}function di(t,e){return si.extend(hi(t,e))}function fi(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function pi(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var a=Md(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var o=i.length,s=0;s<(n?o:o-1);s++){var l=a[2*s],u=a[2*s+1],h=i[(s+1)%o];t.bezierCurveTo(l[0],l[1],u[0],u[1],h[0],h[1])}}else{"spline"===r&&(i=Sd(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var c=i.length;s<c;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function gi(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?Pn:Ln)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?Pn:Ln)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?Rn:zn)(t.x1,t.cpx1,t.x2,e),(n?Rn:zn)(t.y1,t.cpy1,t.y2,e)]}function vi(t){Re.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function mi(t){return si.extend(t)}function yi(t,e,n,i){var r=ci(t,e),a=r.getBoundingRect();return n&&("center"===i&&(n=xi(n,a)),wi(r,n)),r}function _i(t,e,n){var i=new Fe({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(xi(e,r))}}});return i}function xi(t,e){var n,i=e.width/e.height,r=t.height*i;return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function wi(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}function bi(t){var e=t.shape,n=t.style.lineWidth;return zd(2*e.x1)===zd(2*e.x2)&&(e.x1=e.x2=Si(e.x1,n,!0)),zd(2*e.y1)===zd(2*e.y2)&&(e.y1=e.y2=Si(e.y1,n,!0)),t}function Si(t,e,n){var i=zd(2*t);return(i+zd(e))%2==0?i/2:(i+(n?1:-1))/2}function Mi(t){return null!=t&&"none"!=t}function Ti(t){return"string"==typeof t?St(t,-.1):t}function Ii(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl;i.fill=i.fill||(Mi(n)?Ti(n):null),i.stroke=i.stroke||(Mi(e)?Ti(e):null);var r={};for(var a in i)null!=i[a]&&(r[a]=t.style[a]);t.__normalStl=r,t.__hoverStlDirty=!1}}function Ci(t){if(!t.__isHover){if(Ii(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,n=e.insideRollbackOpt;n&&ji(e),e.extendFrom(t.__hoverStl),n&&(Gi(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function ki(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function Di(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Ci(t)}):Ci(t)}function Ai(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&ki(t)}):ki(t)}function Li(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&Ii(t)}function Pi(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Di(this)}function Oi(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Ai(this)}function Ei(){this.__isEmphasis=!0,Di(this)}function Ni(){this.__isEmphasis=!1,Ai(this)}function Bi(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&Li(t,e)}):Li(t,e),t.on("mouseover",Pi).on("mouseout",Oi),t.on("emphasis",Ei).on("normal",Ni)}function zi(t,e,n,i,r,a,o){var s,l=(r=r||Vd).labelFetcher,u=r.labelDataIndex,h=r.labelDimIndex,c=n.getShallow("show"),d=i.getShallow("show");(c||d)&&(l&&(s=l.getFormattedLabel(u,"normal",null,h)),null==s&&(s=w(r.defaultText)?r.defaultText(u,r):r.defaultText));var f=c?s:null,p=d?D(l?l.getFormattedLabel(u,"emphasis",null,h):null,s):null;null==f&&null==p||(Ri(t,n,a,r),Ri(e,i,o,r,!0)),t.text=f,e.text=p}function Ri(t,e,n,i,r){return Fi(t,e,i,r),n&&s(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function Fi(t,e,n,i){if((n=n||Vd).isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var a=e.getShallow("rotate");null!=a&&(a*=Math.PI/180),t.textRotation=a,t.textDistance=D(e.getShallow("distance"),i?null:5)}var o,s=e.ecModel,l=s&&s.option.textStyle,u=Vi(e);if(u)for(var h in o={},u)if(u.hasOwnProperty(h)){var c=e.getModel(["rich",h]);Wi(o[h]={},c,l,n,i)}return t.rich=o,Wi(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function Vi(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||Vd).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}function Wi(t,e,n,i,r,a){if(n=!r&&n||Vd,t.textFill=Hi(e.getShallow("color"),i)||n.color,t.textStroke=Hi(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=D(e.getShallow("textBorderWidth"),n.textBorderWidth),!r){if(a){var o=t.textPosition;t.insideRollback=Gi(t,o,i),t.insideOriginalTextPosition=o,t.insideRollbackOpt=i}null==t.textFill&&(t.textFill=i.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),a&&i.disableBox||(t.textBackgroundColor=Hi(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=Hi(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function Hi(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Gi(t,e,n){var i,r=n.useInsideStyle;return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function ji(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}function Xi(t,e){var n=e||e.getModel("textStyle");return E([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function qi(t,e,n,i,r,a){if("function"==typeof r&&(a=r,r=null),i&&i.isAnimationEnabled()){var o=t?"Update":"",s=i.getShallow("animationDuration"+o),l=i.getShallow("animationEasing"+o),u=i.getShallow("animationDelay"+o);"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,a,!!a):(e.stopAnimation(),e.attr(n),a&&a())}else e.stopAnimation(),e.attr(n),a&&a()}function Yi(t,e,n,i,r){qi(!0,t,e,n,i,r)}function Ui(t,e,n,i,r){qi(!1,t,e,n,i,r)}function Zi(t,e,n){return e&&!f(e)&&(e=Xu.getLocalTransform(e)),n&&(e=ht([],e)),Z([],t,e)}function $i(t,e,n,i){function r(t){var e={position:W(t.position),rotation:t.rotation};return t.shape&&(e.shape=s({},t.shape)),e}if(t&&e){var a=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=a[t.anid];if(e){var i=r(t);t.attr(r(e)),Yi(t,i,n,t.dataIndex)}}})}}function Ki(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function Ji(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==typeof t?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function Qi(t,e){var n=Yd(t).getParent;return n?n.call(t,e):t.parentModel}function tr(t){return[t||"",Ud++,Math.random().toFixed(5)].join("_")}function er(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function nr(t,e,n,i){var r=e[1]-e[0],a=n[1]-n[0];if(0===r)return 0===a?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*a+n[0]}function ir(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?er(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function rr(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function ar(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r}function or(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),a=Math.round(n(Math.abs(e[1]-e[0]))/i),o=Math.min(Math.max(-r+a,0),20);return isFinite(o)?o:20}function sr(t,e,n){if(!t[e])return 0;var i=v(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),a=g(t,function(t){return(isNaN(t)?0:t)/i*r*100}),o=100*r,s=g(a,function(t){return Math.floor(t)}),l=v(s,function(t,e){return t+e},0),u=g(a,function(t,e){return t-s[e]});l<o;){for(var h=Number.NEGATIVE_INFINITY,c=null,d=0,f=u.length;d<f;++d)u[d]>h&&(h=u[d],c=d);++s[c],u[c]=0,++l}return s[e]/r}function lr(t){var e=2*Math.PI;return(t%e+e)%e}function ur(t){return t>-Zd&&t<Zd}function hr(t){if(t instanceof Date)return t;if("string"==typeof t){var e=$d.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function cr(t){return Math.pow(10,dr(t))}function dr(t){return Math.floor(Math.log(t)/Math.LN10)}function fr(t,e){var n,i=dr(t),r=Math.pow(10,i),a=t/r;return n=e?a<1.5?1:a<2.5?2:a<4?3:a<7?5:10:a<1?1:a<2?2:a<3?3:a<5?5:10,t=n*r,i>=-20?+t.toFixed(i<0?-i:0):t}function pr(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function gr(t){return null==t?"":(t+"").replace(Jd,function(t,e){return Qd[e]})}function vr(t,e,n){x(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],a=0;a<r.length;a++){var o=tf[a];t=t.replace(ef(o),ef(o,0))}for(var s=0;s<i;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(ef(tf[l],s),n?gr(u):u)}return t}function mr(t,e){var n=(t=b(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type;e=t.extraCssText;return n?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8upx;margin-left:3upx;border-radius:4upx;width:4upx;height:4upx;background-color:'+gr(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5upx;border-radius:10upx;width:10upx;height:10upx;background-color:'+gr(n)+";"+(e||"")+'"></span>':""}function yr(t,e){return t+="","0000".substr(0,e-t.length)+t}function _r(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=hr(e),r=n?"UTC":"",a=i["get"+r+"FullYear"](),o=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),h=i["get"+r+"Seconds"](),c=i["get"+r+"Milliseconds"]();return t.replace("MM",yr(o,2)).replace("M",o).replace("yyyy",a).replace("yy",a%100).replace("dd",yr(s,2)).replace("d",s).replace("hh",yr(l,2)).replace("h",l).replace("mm",yr(u,2)).replace("m",u).replace("ss",yr(h,2)).replace("s",h).replace("SSS",yr(c,3))}function xr(t,e,n,i,r){var a=0,o=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var h,c,d=l.position,f=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=f.width+(g?-g.x+f.x:0);(h=a+v)>i||l.newline?(a=0,h=v,o+=s+n,s=f.height):s=Math.max(s,f.height)}else{var m=f.height+(g?-g.y+f.y:0);(c=o+m)>r||l.newline?(a+=s+n,o=0,c=m,s=f.width):s=Math.max(s,f.width)}l.newline||(d[0]=a,d[1]=o,"horizontal"===t?a=h+n:o=c+n)})}function wr(t,e,n){n=Kd(n||0);var i=e.width,r=e.height,a=ir(t.left,i),o=ir(t.top,r),s=ir(t.right,i),l=ir(t.bottom,r),u=ir(t.width,i),h=ir(t.height,r),c=n[2]+n[0],d=n[1]+n[3],f=t.aspect;switch(isNaN(u)&&(u=i-s-d-a),isNaN(h)&&(h=r-l-c-o),null!=f&&(isNaN(u)&&isNaN(h)&&(f>i/r?u=.8*i:h=.8*r),isNaN(u)&&(u=f*h),isNaN(h)&&(h=u/f)),isNaN(a)&&(a=i-s-u-d),isNaN(o)&&(o=r-l-h-c),t.left||t.right){case"center":a=i/2-u/2-n[3];break;case"right":a=i-u-d}switch(t.top||t.bottom){case"middle":case"center":o=r/2-h/2-n[0];break;case"bottom":o=r-h-c}a=a||0,o=o||0,isNaN(u)&&(u=i-d-a-(s||0)),isNaN(h)&&(h=r-c-o-(l||0));var p=new Rt(a+n[3],o+n[0],u,h);return p.margin=n,p}function br(t,e,n){function i(n,i){var o={},l=0,u={},h=0;if(rf(n,function(e){u[e]=t[e]}),rf(n,function(t){r(e,t)&&(o[t]=u[t]=e[t]),a(o,t)&&l++,a(u,t)&&h++}),s[i])return a(e,n[1])?u[n[2]]=null:a(e,n[2])&&(u[n[1]]=null),u;if(2!==h&&l){if(l>=2)return o;for(var c=0;c<n.length;c++){var d=n[c];if(!r(o,d)&&r(t,d)){o[d]=t[d];break}}return o}return u}function r(t,e){return t.hasOwnProperty(e)}function a(t,e){return null!=t[e]&&"auto"!==t[e]}function o(t,e,n){rf(t,function(t){e[t]=n[t]})}!S(n)&&(n={});var s=n.ignoreSize;!x(s)&&(s=[s,s]);var l=i(of[0],0),u=i(of[1],1);o(of[0],t,l),o(of[1],t,u)}function Sr(t){return Mr({},t)}function Mr(t,e){return e&&t&&rf(af,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function Tr(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i];return t[n-1]}function Ir(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:R(),categoryAxisMap:R()},i=pf[e];if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}function Cr(t){return"category"===t.get("type")}function kr(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===yf?{}:[]),this.sourceFormat=t.sourceFormat||_f,this.seriesLayoutBy=t.seriesLayoutBy||wf,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&R(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function Dr(t){var e=t.option.source,n=_f;if(T(e))n=xf;else if(x(e))for(var i=0,r=e.length;i<r;i++){var a=e[i];if(null!=a){if(x(a)){n=vf;break}if(S(a)){n=mf;break}}}else if(S(e)){for(var o in e)if(e.hasOwnProperty(o)&&f(e[o])){n=yf;break}}else if(null!=e)throw new Error("Invalid data");Sf(t).sourceFormat=n}function Ar(t){return Sf(t).source}function Lr(t){Sf(t).datasetMap=R()}function Pr(t){var e=t.option,n=e.data,i=T(n)?xf:gf,r=!1,a=e.seriesLayoutBy,o=e.sourceHeader,s=e.dimensions,l=Rr(t);if(l){var u=l.option;n=u.source,i=Sf(l).sourceFormat,r=!0,a=a||u.seriesLayoutBy,null==o&&(o=u.sourceHeader),s=s||u.dimensions}var h=Or(n,i,a,o,s),c=e.encode;!c&&l&&(c=zr(t,l,n,i,a,h)),Sf(t).source=new kr({data:n,fromDataset:r,seriesLayoutBy:a,sourceFormat:i,dimensionsDefine:h.dimensionsDefine,startIndex:h.startIndex,dimensionsDetectCount:h.dimensionsDetectCount,encodeDefine:c})}function Or(t,e,n,i,r){if(!t)return{dimensionsDefine:Er(r)};var a,o,s,l;if(e===vf)"auto"===i||null==i?Nr(function(t){null!=t&&"-"!==t&&(b(t)?null==o&&(o=1):o=0)},n,t,10):o=i?1:0,r||1!==o||(r=[],Nr(function(t,e){r[e]=null!=t?t:""},n,t)),a=r?r.length:n===bf?t.length:t[0]?t[0].length:null;else if(e===mf)r||(r=Br(t),s=!0);else if(e===yf)r||(r=[],s=!0,p(t,function(t,e){r.push(e)}));else if(e===gf){var u=hn(t[0]);a=x(u)&&u.length||1}return s&&p(r,function(t,e){"name"===(S(t)?t.name:t)&&(l=e)}),{startIndex:o,dimensionsDefine:Er(r),dimensionsDetectCount:a,potentialNameDimIndex:l}}function Er(t){if(t){var e=R();return g(t,function(t,n){if(null==(t=s({},S(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var i=e.get(t.name);return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function Nr(t,e,n,i){if(null==i&&(i=1/0),e===bf)for(a=0;a<n.length&&a<i;a++)t(n[a]?n[a][0]:null,a);else for(var r=n[0]||[],a=0;a<r.length&&a<i;a++)t(r[a],a)}function Br(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return p(e,function(t,e){i.push(e)}),i}}function zr(t,e,n,i,r,a){var o=Ir(t),s={},l=[],u=[],h=t.subType,c=R(["pie","map","funnel"]),d=R(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(o&&null!=d.get(h)){var f=t.ecModel,g=Sf(f).datasetMap,v=e.uid+"_"+r,m=g.get(v)||g.set(v,{categoryWayDim:1,valueWayDim:0});p(o.coordSysDims,function(t){if(null==o.firstCategoryDimIndex)e=m.valueWayDim++,s[t]=e,u.push(e);else if(o.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=c.get(h)){for(var y,_=0;_<5&&null==y;_++)Vr(n,i,r,a.dimensionsDefine,a.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=a.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}function Rr(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}function Fr(t,e){return Vr(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function Vr(t,e,n,i,r,a){function o(t){return(null==t||!isFinite(t)||""===t)&&(!(!b(t)||"-"===t)||void 0)}var s,l;if(T(t))return!1;if(i&&(l=S(l=i[a])?l.name:l),e===vf)if(n===bf){for(var u=t[a],h=0;h<(u||[]).length&&h<5;h++)if(null!=(s=o(u[r+h])))return s}else for(h=0;h<t.length&&h<5;h++){var c=t[r+h];if(c&&null!=(s=o(c[a])))return s}else if(e===mf){if(!l)return;for(h=0;h<t.length&&h<5;h++)if((d=t[h])&&null!=(s=o(d[l])))return s}else if(e===yf){if(!l)return;if(!(u=t[l])||T(u))return!1;for(h=0;h<u.length&&h<5;h++)if(null!=(s=o(u[h])))return s}else if(e===gf)for(h=0;h<t.length&&h<5;h++){var d=t[h],f=hn(d);if(!x(f))return!1;if(null!=(s=o(f[a])))return s}return!1}function Wr(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}function Hr(t,e){var n=t.color&&!t.colorLayer;p(e,function(e,i){"colorLayer"===i&&n||uf.hasClass(i)||("object"==typeof e?t[i]=t[i]?a(t[i],e,!1):r(e):null==t[i]&&(t[i]=e))})}function Gr(t){t=t,this.option={},this.option[Mf]=1,this._componentsMap=R({series:[]}),this._seriesIndices,this._seriesIndicesMap,Hr(t,this._theme.option),a(t,cf,!1),this.mergeOption(t)}function jr(t,e){x(e)||(e=e?[e]:[]);var n={};return p(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function Xr(t,e,n){return e.type?e.type:n?n.subType:uf.determineSubType(t,e)}function qr(t,e){t._seriesIndicesMap=R(t._seriesIndices=g(e,function(t){return t.componentIndex})||[])}function Yr(t,e){return e.hasOwnProperty("subType")?m(t,function(t){return t.subType===e.subType}):t}function Ur(t){p(If,function(e){this[e]=y(t[e],t)},this)}function Zr(){this._coordinateSystems=[]}function $r(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Kr(t,e,n){var i,r,a=[],o=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},a=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;kf(l,function(t){t&&t.option&&(t.query?o.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),kf([r].concat(a).concat(g(o,function(t){return t.option})),function(t){kf(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:a,mediaDefault:i,mediaList:o}}function Jr(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return p(t,function(t,e){var n=e.match(Pf);if(n&&n[1]&&n[2]){var a=n[1],o=n[2].toLowerCase();Qr(i[o],t,a)||(r=!1)}}),r}function Qr(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e}function ta(t,e){return t.join(",")===e.join(",")}function ea(t,e){kf(e=e||{},function(e,n){if(null!=e){var i=t[n];if(uf.hasClass(n)){e=ln(e);var r=dn(i=ln(i),e);t[n]=Af(r,function(t){return t.option&&t.exist?Lf(t.exist,t.option,!0):t.exist||t.option})}else t[n]=Lf(i,e,!0)}})}function na(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=Nf.length;n<i;n++){var r=Nf[n],o=e.normal,s=e.emphasis;o&&o[r]&&(t[r]=t[r]||{},t[r].normal?a(t[r].normal,o[r]):t[r].normal=o[r],o[r]=null),s&&s[r]&&(t[r]=t[r]||{},t[r].emphasis?a(t[r].emphasis,s[r]):t[r].emphasis=s[r],s[r]=null)}}function ia(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,l(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function ra(t){ia(t,"itemStyle"),ia(t,"lineStyle"),ia(t,"areaStyle"),ia(t,"label"),ia(t,"labelLine"),ia(t,"upperLabel"),ia(t,"edgeLabel")}function aa(t,e){var n=Ef(t)&&t[e],i=Ef(n)&&n.textStyle;if(i)for(var r=0,a=oc.length;r<a;r++){e=oc[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function oa(t){t&&(ra(t),aa(t,"label"),t.emphasis&&aa(t.emphasis,"label"))}function sa(t){if(Ef(t)){na(t),ra(t),aa(t,"label"),aa(t,"upperLabel"),aa(t,"edgeLabel"),t.emphasis&&(aa(t.emphasis,"label"),aa(t.emphasis,"upperLabel"),aa(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(na(e),oa(e));var n=t.markLine;n&&(na(n),oa(n));var i=t.markArea;i&&oa(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var a=t.links||t.edges;if(a&&!T(a))for(s=0;s<a.length;s++)oa(a[s]);p(t.categories,function(t){ra(t)})}if(r&&!T(r))for(s=0;s<r.length;s++)oa(r[s]);if((e=t.markPoint)&&e.data)for(var o=e.data,s=0;s<o.length;s++)oa(o[s]);if((n=t.markLine)&&n.data){var l=n.data;for(s=0;s<l.length;s++)x(l[s])?(oa(l[s][0]),oa(l[s][1])):oa(l[s])}"gauge"===t.type?(aa(t,"axisLabel"),aa(t,"title"),aa(t,"detail")):"treemap"===t.type?(ia(t.breadcrumb,"itemStyle"),p(t.levels,function(t){ra(t)})):"tree"===t.type&&ra(t.leaves)}}function la(t){return x(t)?t:t?[t]:[]}function ua(t){return(x(t)?t[0]:t)||{}}function ha(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}function ca(t,e,n,i){e=e.split(",");for(var r,a=t,o=0;o<e.length-1;o++)null==a[r=e[o]]&&(a[r]={}),a=a[r];(i||null==a[e[o]])&&(a[e[o]]=n)}function da(t){p(zf,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function fa(t){p(t,function(e,n){var i=[],r=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],o=e.data,s=e.isStackedByIndex,l=o.map(a,function(a,l,u){var h,c,d=o.get(e.stackedDimension,u);if(isNaN(d))return r;s?c=o.getRawIndex(u):h=o.get(e.stackedByDimension,u);for(var f=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(c=g.data.rawIndexOf(g.stackedByDimension,h)),c>=0){var v=g.data.getByRawIndex(g.stackResultDimension,c);if(d>=0&&v>0||d<=0&&v<0){d+=v,f=v;break}}}return i[0]=d,i[1]=f,i});o.hostModel.setData(l),e.data=l})}function pa(t,e){kr.isInstance(t)||(t=kr.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===xf&&(this._offset=0,this._dimSize=e,this._data=n),s(this,Wf[i===vf?i+"_"+t.seriesLayoutBy:i])}function ga(){return this._data.length}function va(t){return this._data[t]}function ma(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function ya(t,e,n,i){return null!=n?t[n]:t}function _a(t,e,n,i){return xa(t[i],this._dimensionInfos[e])}function xa(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+hr(t)),null==t||""===t?NaN:+t}function wa(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,a,o=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,a=s.index),Hf[o](i,e,a,r)}}}function ba(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===gf||i===mf){var r=t.getRawDataItem(e);return i!==gf||S(r)||(r=null),r?r[n]:void 0}}}function Sa(t){return new Ma(t)}function Ma(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function Ta(t,e,n,i,r,a){Yf.reset(n,i,r,a),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:Yf.next},t.context)}function Ia(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),x(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}function Ca(t){var e=t.name;pn(t)||(t.name=ka(t)||e)}function ka(t){var e=t.getRawData(),n=[];return p(e.mapDimension("seriesName",!0),function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}function Da(t){return t.model.getRawData().count()}function Aa(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),La}function La(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function Pa(t,e){p(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,_(Oa,e))})}function Oa(t){var e=Ea(t);e&&e.setOutputEnd(this.count())}function Ea(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function Na(){this.group=new ph,this.uid=tr("viewChart"),this.renderTask=Sa({plan:Ra,reset:Fa}),this.renderTask.context={view:this}}function Ba(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)Ba(t.childAt(n),e)}function za(t,e,n){var i=vn(t,e);null!=i?p(ln(i),function(e){Ba(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){Ba(t,n)})}function Ra(t){return tp(t.model)}function Fa(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,a=e.pipelineContext.progressiveRender,o=t.view,s=r&&Qf(r).updateMethod,l=a?"incrementalPrepareRender":s&&o[s]?s:"render";return"render"!==l&&o[l](e,n,i,r),np[l]}function Va(t,e,n){function i(){h=(new Date).getTime(),c=null,t.apply(o,s||[])}var r,a,o,s,l,u=0,h=0,c=null;e=e||0;var d=function(){r=(new Date).getTime(),o=this,s=arguments;var t=l||e,d=l||n;l=null,a=r-(d?u:h)-t,clearTimeout(c),d?c=setTimeout(i,t):a>=0?i():c=setTimeout(i,-a),u=r};return d.clear=function(){c&&(clearTimeout(c),c=null)},d.debounceNextCall=function(t){l=t},d}function Wa(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=R()}function Ha(t,e,n,i,r){function a(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var o;r=r||{},p(e,function(e,s){if(!r.visualType||r.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,h=l.overallTask;if(h){var c,d=h.agentStubMap;d.each(function(t){a(r,t)&&(t.dirty(),c=!0)}),c&&h.dirty(),lp(h,i);var f=t.getPerformArgs(h,r.block);d.each(function(t){t.perform(f)}),o|=h.perform(f)}else u&&u.each(function(s,l){a(r,s)&&s.dirty();var u=t.getPerformArgs(s,r.block);u.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),lp(s,i),o|=s.perform(u)})}}),t.unfinished|=o}function Ga(t,e,n,i,r){function a(n){var a=n.uid,s=o.get(a)||o.set(a,Sa({plan:Za,reset:$a,count:Ja}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},Qa(t,n,s)}var o=n.seriesTaskMap||(n.seriesTaskMap=R()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(a):s?i.eachRawSeriesByType(s,a):l&&l(i,r).each(a);var u=t._pipelineMap;o.each(function(t,e){u.get(e)||(t.dispose(),o.removeKey(e))})}function ja(t,e,n,i,r){function a(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,Sa({reset:qa,onDirty:Ua})),o.dirty()),i.context={model:e,overallProgress:h,modifyOutputEnd:c},i.agent=o,i.__block=h,Qa(t,e,i)}var o=n.overallTask=n.overallTask||Sa({reset:Xa});o.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=o.agentStubMap=o.agentStubMap||R(),l=e.seriesType,u=e.getTargetSeries,h=!0,c=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,a):u?u(i,r).each(a):(h=!1,p(i.getSeries(),a));var d=t._pipelineMap;s.each(function(t,e){d.get(e)||(t.dispose(),o.dirty(),s.removeKey(e))})}function Xa(t){t.overallReset(t.ecModel,t.api,t.payload)}function qa(t,e){return t.overallProgress&&Ya}function Ya(){this.agent.dirty(),this.getDownstream().dirty()}function Ua(){this.agent&&this.agent.dirty()}function Za(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function $a(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=ln(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?g(e,function(t,e){return Ka(e)}):up}function Ka(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var a=e.start;a<e.end;a++)r.dataEach(i,a);else r&&r.progress&&r.progress(e,i)}}function Ja(t){return t.data.count()}function Qa(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function to(t){hp=null;try{t(cp,dp)}catch(t){}return hp}function eo(t,e){for(var n in e.prototype)t[n]=F}function no(t){return function(e,n,i){e=e&&e.toLowerCase(),Ru.prototype[t].call(this,e,n,i)}}function io(){Ru.call(this)}function ro(t,e,n){function i(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=Fp[e]),this.id,this.group,this._dom=t;var a=this._zr=sn(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Va(y(a.flush,a),17),(e=r(e))&&Ff(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Zr;var o=this._api=So(this);qt(Rp,i),qt(Np,i),this._scheduler=new Wa(this,o,Np,Rp),Ru.call(this),this._messageCenter=new io,this._initEvents(),this.resize=y(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),fo(a,this),N(this)}function ao(t,e,n){var i,r=this._model,a=this._coordSysMgr.getCoordinateSystems();e=yn(r,e);for(var o=0;o<a.length;o++){var s=a[o];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function oo(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),po(t,"component",e,n),po(t,"chart",e,n),n.plan()}function so(t,e,n,i,r){function a(i){i&&i.__alive&&i[e]&&i[e](i.__model,o,t._api,n)}var o=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=R(ln(u))),o&&o.eachComponent(l,function(e){u&&null!=u.get(e.id)||a(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else yp(t._componentsViews.concat(t._chartsViews),a)}function lo(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function uo(t,e){var n=t.type,i=t.escapeConnect,r=Op[n],a=r.actionInfo,o=(a.update||"update").split(":"),u=o.pop();o=null!=o[0]&&wp(o[0]),this[Cp]=!0;var h=[t],c=!1;t.batch&&(c=!0,h=g(t.batch,function(e){return e=l(s({},e),t),e.batch=null,e}));var d,f=[],p="highlight"===n||"downplay"===n;yp(h,function(t){d=r.action(t,this._model,this._api),(d=d||s({},t)).type=a.event||d.type,f.push(d),p?so(this,u,t,"series"):o&&so(this,u,t,o.main,o.sub)},this),"none"===u||p||o||(this[kp]?(oo(this),Lp.update.call(this,t),this[kp]=!1):Lp[u].call(this,t)),d=c?{type:a.event||n,escapeConnect:i,batch:f}:f[0],this[Cp]=!1,!e&&this._messageCenter.trigger(d.type,d)}function ho(t){for(var e=this._pendingActions;e.length;){var n=e.shift();uo.call(this,n,t)}}function co(t){!t&&this.trigger("updated")}function fo(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[kp]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function po(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var h=wp(t.type);(r=new(a?$f.getClass(h.main,h.sub):Na.getClass(h.sub))).init(n,u),s[e]=r,o.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!a&&i.prepareView(r,t,n,u)}for(var a="component"===e,o=a?t._componentsViews:t._chartsViews,s=a?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,h=0;h<o.length;h++)o[h].__alive=!1;for(a?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r),h=0;h<o.length;){var c=o[h];c.__alive?h++:(!a&&c.renderTask.dispose(),l.remove(c.group),c.dispose(n,u),o.splice(h,1),delete s[c.__id],c.__id=c.group.__ecComponentInfo=null)}}function go(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function vo(t,e,n,i){mo(t,e,n,i),yp(t._chartsViews,function(t){t.__alive=!1}),yo(t,e,n,i),yp(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function mo(t,e,n,i,r){yp(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),bo(r,t)})}function yo(t,e,n,i,r){var a,o=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;o.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),a|=s.perform(o.getPerformArgs(s)),n.group.silent=!!e.get("silent"),bo(e,n),wo(e,n)}),o.unfinished|=a,xo(t._zr,e),ap(t._zr.dom,e)}function _o(t,e){yp(zp,function(n){n(t,e)})}function xo(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!xu.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function wo(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}function bo(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function So(t){var e=t._coordSysMgr;return s(new Ur(t),{getCoordinateSystems:y(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function Mo(t){function e(t,e){for(var i=0;i<t.length;i++)t[i][n]=e}var n="__connectUpdateStatus";yp(Ep,function(i,r){t._messageCenter.on(r,function(i){if(Hp[t.group]&&0!==t[n]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),a=[];yp(Wp,function(e){e!==t&&e.group===t.group&&a.push(e)}),e(a,0),yp(a,function(t){1!==t[n]&&t.dispatchAction(r)}),e(a,2)}})})}function To(t){Hp[t]=!1}function Io(t){return Wp[wn(t,Xp)]}function Co(t,e){Fp[t]=e}function ko(t){Bp.push(t)}function Do(t,e){Oo(Np,t,e,Sp)}function Ao(t,e,n){"function"==typeof e&&(n=e,e="");var i=xp(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,mp(Dp.test(i)&&Dp.test(e)),Op[i]||(Op[i]={action:n,actionInfo:t}),Ep[e]=i}function Lo(t,e){Oo(Rp,t,e,Mp,"layout")}function Po(t,e){Oo(Rp,t,e,Tp,"visual")}function Oo(t,e,n,i,r){(_p(e)||xp(e))&&(n=e,e=i);var a=Wa.wrapStageHandler(n,r);return a.__prio=e,a.__raw=n,t.push(a),a}function Eo(t,e){Vp[t]=e}function No(t){return $f.extend(t)}function Bo(t){return Zf.extend(t)}function zo(t){return Na.extend(t)}function Ro(t){return t}function Fo(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||Ro,this._newKeyGetter=i||Ro,this.context=r}function Vo(t,e,n,i,r){for(var a=0;a<t.length;a++){var o="_ec_"+r[i](t[a],a),s=e[o];null==s?(n.push(o),e[o]=a):(s.length||(e[o]=s=[s]),s.push(a))}}function Wo(t){var e={},n=e.encode={},i=R(),r=[],a=[];p(t.dimensions,function(e){var o=t.getDimensionInfo(e),s=o.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[o.coordDimIndex]=e,o.isExtraCoord||(i.set(s,1),Go(o.type)&&(r[0]=e)),o.defaultTooltip&&a.push(e)}Zp.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=o.otherDims[e];null!=r&&!1!==r&&(i[r]=o.name)})});var o=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],o=o.concat(i)}),e.dataDimsOnCoord=o,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var u=n.tooltip;return u&&u.length?a=u.slice():a.length||(a=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=a,e}function Ho(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function Go(t){return!("ordinal"===t||"time"===t)}function jo(t){return t._rawCount>65535?Qp:tg}function Xo(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function qo(t,e){p(eg.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,p(ng,function(n){t[n]=r(e[n])}),t._calculationInfo=s(e._calculationInfo)}function Yo(t){var e=t._invertedIndicesMap;p(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){for(n=e[i]=new Qp(r.categories.length),a=0;a<n.length;a++)n[a]=NaN;for(var a=0;a<t._count;a++)n[t.get(i,a)]=a}})}function Uo(t,e,n){var i;if(null!=e){var r=t._chunkSize,a=Math.floor(n/r),o=n%r,s=t.dimensions[e],l=t._storage[s][a];if(l){i=l[o];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function Zo(t){return t}function $o(t){return t<this._count&&t>=0?this._indices[t]:-1}function Ko(t,e){var n=t._idList[e];return null==n&&(n=Uo(t,t._idDimIdx,e)),null==n&&(n=Kp+e),n}function Jo(t){return x(t)||(t=[t]),t}function Qo(t,e){var n=t.dimensions,i=new ig(g(n,t.getDimensionInfo,t),t.hostModel);qo(i,t);for(var r=i._storage={},a=t._storage,o=0;o<n.length;o++){var s=n[o];a[s]&&(h(e,s)>=0?(r[s]=ts(a[s]),i._rawExtent[s]=es(),i._extent[s]=null):r[s]=a[s])}return i}function ts(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=Xo(t[n]);return e}function es(){return[1/0,-1/0]}function ns(t,e,n){function i(t,e,n){null!=Zp.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,h.set(e,!0))}kr.isInstance(e)||(e=kr.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var a=(n.dimsDef||[]).slice(),o=R(n.encodeDef),u=R(),h=R(),c=[],d=is(e,t,a,n.dimCount),f=0;f<d;f++){var g=a[f]=s({},S(a[f])?a[f]:{name:a[f]}),v=g.name,m=c[f]={otherDims:{}};null!=v&&null==u.get(v)&&(m.name=m.displayName=v,u.set(v,f)),null!=g.type&&(m.type=g.type),null!=g.displayName&&(m.displayName=g.displayName)}o.each(function(t,e){t=ln(t).slice();var n=o.set(e,[]);p(t,function(t,r){b(t)&&(t=u.get(t)),null!=t&&t<d&&(n[r]=t,i(c[t],e,r))})});var y=0;p(t,function(t,e){var n,a,s;if(b(t))n=t,t={};else{n=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=r(t)).ordinalMeta=u,a=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var h=ln(o.get(n));if(!h.length)for(var d=0;d<(a&&a.length||1);d++){for(;y<c.length&&null!=c[y].coordDim;)y++;y<c.length&&h.push(y++)}p(h,function(e,r){var o=c[e];if(i(l(o,t),n,r),null==o.name&&a){var u=a[r];!S(u)&&(u={name:u}),o.name=o.displayName=u.name,o.defaultTooltip=u.defaultTooltip}s&&l(o.otherDims,s)})});var _=n.generateCoord,x=n.generateCoordCount,w=null!=x;x=_?x||1:0;for(var M=_||"value",T=0;T<d;T++)null==(m=c[T]=c[T]||{}).coordDim&&(m.coordDim=rs(M,h,w),m.coordDimIndex=0,(!_||x<=0)&&(m.isExtraCoord=!0),x--),null==m.name&&(m.name=rs(m.coordDim,u)),null==m.type&&Fr(e,T,m.name)&&(m.type="ordinal");return c}function is(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return p(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}function rs(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function as(t,e,n){var i,r,a,o,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(p(e,function(t,n){b(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){a="__\0ecstackresult",o="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var h=r.coordDim,c=r.type,d=0;p(e,function(t){t.coordDim===h&&d++}),e.push({name:a,coordDim:h,coordDimIndex:d,type:c,isExtraCoord:!0,isCalculationCoord:!0}),d++,e.push({name:o,coordDim:o,coordDimIndex:d,type:c,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:o,stackResultDimension:a}}function os(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function ss(t,e){return os(t,e)?t.getCalculationInfo("stackResultDimension"):e}function ls(t,e,n){n=n||{},kr.isInstance(t)||(t=kr.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),a=Zr.get(r),o=Ir(e);o&&(i=g(o.coordSysDims,function(t){var e={name:t},n=o.axisMap.get(t);if(n){var i=n.get("type");e.type=Ho(i)}return e})),i||(i=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"]);var s,l,u=og(t,{coordDimensions:i,generateCoord:n.generateCoord});o&&p(u,function(t,e){var n=t.coordDim,i=o.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var h=as(e,u),c=new ig(u,e);c.setCalculationInfo(h);var d=null!=s&&us(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return c.hasItemOption=!1,c.initData(t,null,d),c}function us(t){if(t.sourceFormat===gf){var e=hs(t.data||[]);return null!=e&&!x(hn(e))}}function hs(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function cs(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function ds(t,e,n,i,r,a,o){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),s=0===t.indexOf("image://")?_i(t.slice(8),new Rt(e,n,i,r),o?"center":"cover"):0===t.indexOf("path://")?yi(t.slice(7),{},new Rt(e,n,i,r),o?"center":"cover"):new fg({shape:{symbolType:t,x:e,y:n,width:i,height:r}}),s.__isEmptyBrush=l,s.setColor=cs,s.setColor(a),s}function fs(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return wa(t,e,n[0]);if(i){for(var r=[],a=0;a<n.length;a++){var o=wa(t,e,n[a]);r.push(o)}return r.join(" ")}}function ps(t,e,n){ph.call(this),this.updateData(t,e,n)}function gs(t){return[t[0]/2,t[1]/2]}function vs(t,e){this.parent.drift(t,e)}function ms(t){this.group=new ph,this._symbolCtor=t||ps}function ys(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function _s(t){return null==t||S(t)||(t={isIgnore:t}),t||{}}function xs(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function ws(t,e,n){var i,r=t.getBaseAxis(),a=t.getOtherAxis(r),o=bs(a,n),s=r.dim,l=a.dim,u=e.mapDimension(l),h=e.mapDimension(s),c="x"===l||"radius"===l?1:0,d=g(t.dimensions,function(t){return e.mapDimension(t)}),f=e.getCalculationInfo("stackResultDimension");return(i|=os(e,d[0]))&&(d[0]=f),(i|=os(e,d[1]))&&(d[1]=f),{dataDimsForPoint:d,valueStart:o,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:h,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function bs(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}function Ss(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var a=t.baseDataOffset,o=[];return o[a]=n.get(t.baseDim,i),o[1-a]=r,e.dataToPoint(o)}function Ms(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}function Ts(t){return isNaN(t[0])||isNaN(t[1])}function Is(t,e,n,i,r,a,o,s,l,u,h){return"none"!==u&&u?Cs.apply(this,arguments):ks.apply(this,arguments)}function Cs(t,e,n,i,r,a,o,s,l,u,h){for(var c=0,d=n,f=0;f<i;f++){var p=e[d];if(d>=r||d<0)break;if(Ts(p)){if(h){d+=a;continue}break}if(d===n)t[a>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[c],v="y"===u?1:0,m=(p[v]-g[v])*l;Tg(Cg,g),Cg[v]=g[v]+m,Tg(kg,p),kg[v]=p[v]-m,t.bezierCurveTo(Cg[0],Cg[1],kg[0],kg[1],p[0],p[1])}else t.lineTo(p[0],p[1]);c=d,d+=a}return f}function ks(t,e,n,i,r,a,o,s,l,u,h){for(var c=0,d=n,f=0;f<i;f++){var p=e[d];if(d>=r||d<0)break;if(Ts(p)){if(h){d+=a;continue}break}if(d===n)t[a>0?"moveTo":"lineTo"](p[0],p[1]),Tg(Cg,p);else if(l>0){var g=d+a,v=e[g];if(h)for(;v&&Ts(e[g]);)v=e[g+=a];var m=.5,y=e[c];if(!(v=e[g])||Ts(v))Tg(kg,p);else{var _,x;if(Ts(v)&&!h&&(v=p),G(Ig,v,y),"x"===u||"y"===u){var w="x"===u?0:1;_=Math.abs(p[w]-y[w]),x=Math.abs(p[w]-v[w])}else _=Nu(p,y),x=Nu(p,v);Mg(kg,p,Ig,-l*(1-(m=x/(x+_))))}bg(Cg,Cg,s),Sg(Cg,Cg,o),bg(kg,kg,s),Sg(kg,kg,o),t.bezierCurveTo(Cg[0],Cg[1],kg[0],kg[1],p[0],p[1]),Mg(Cg,p,Ig,l*m)}else t.lineTo(p[0],p[1]);c=d,d+=a}return f}function Ds(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var a=t[r];a[0]<n[0]&&(n[0]=a[0]),a[1]<n[1]&&(n[1]=a[1]),a[0]>i[0]&&(i[0]=a[0]),a[1]>i[1]&&(i[1]=a[1])}return{min:e?n:i,max:e?i:n}}function As(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function Ls(t){return"number"==typeof t?t:t?.5:0}function Ps(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function Os(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,a=e.count();r<a;r++)i.push(Ss(n,t,e,r));return i}function Es(t,e,n,i){var r=Ps(t.getAxis("x")),a=Ps(t.getAxis("y")),o=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(a[0],a[1]),u=Math.max(r[0],r[1])-s,h=Math.max(a[0],a[1])-l;if(n)s-=.5,u+=.5,l-=.5,h+=.5;else{var c=i.get("lineStyle.width")||2,d=i.get("clipOverflow")?c/2:Math.max(u,h);o?(l-=d,h+=2*d):(s-=d,u+=2*d)}var f=new Cd({shape:{x:s,y:l,width:u,height:h}});return e&&(f.shape[o?"width":"height"]=0,Ui(f,{shape:{width:u,height:h}},i)),f}function Ns(t,e,n,i){var r=t.getAngleAxis(),a=t.getRadiusAxis().getExtent().slice();a[0]>a[1]&&a.reverse();var o=r.getExtent(),s=Math.PI/180;n&&(a[0]-=.5,a[1]+=.5);var l=new wd({shape:{cx:rr(t.cx,1),cy:rr(t.cy,1),r0:rr(a[0],1),r:rr(a[1],1),startAngle:-o[0]*s,endAngle:-o[1]*s,clockwise:r.inverse}});return e&&(l.shape.endAngle=-o[0]*s,Ui(l,{shape:{endAngle:-o[1]*s}},i)),l}function Bs(t,e,n,i){return"polar"===t.type?Ns(t,e,n,i):Es(t,e,n,i)}function zs(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,a=[],o=0;o<t.length-1;o++){var s=t[o+1],l=t[o];a.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],a.push(u);break;case"middle":var h=(l[r]+s[r])/2,c=[];u[r]=c[r]=h,u[1-r]=l[1-r],c[1-r]=s[1-r],a.push(u),a.push(c);break;default:u[r]=l[r],u[1-r]=s[1-r],a.push(u)}}return t[o]&&a.push(t[o]),a}function Rs(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,a=n.length-1;a>=0;a--){var o=n[a].dimension,s=t.dimensions[o],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[a];break}}if(r){var u=e.getAxis(i),h=g(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),c=h.length,d=r.outerColors.slice();c&&h[0].coord>h[c-1].coord&&(h.reverse(),d.reverse());var f=h[0].coord-10,v=h[c-1].coord+10,m=v-f;if(m<.001)return"transparent";p(h,function(t){t.offset=(t.coord-f)/m}),h.push({offset:c?h[c-1].offset:.5,color:d[1]||"transparent"}),h.unshift({offset:c?h[0].offset:.5,color:d[0]||"transparent"});var y=new Ed(0,0,0,0,h,!0);return y[i]=f,y[i+"2"]=v,y}}}function Fs(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var a=n.getAxesByScale("ordinal")[0];if(a&&(!r||!Vs(a,e))){var o=e.mapDimension(a.dim),s={};return p(a.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(o,t))}}}}function Vs(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),a=Math.max(1,Math.round(r/5)),o=0;o<r;o+=a)if(1.5*ps.getSymbolSize(e,o)[t.isHorizontal()?1:0]>i)return!1;return!0}function Ws(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function Hs(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Gs(t){return t._map||(t._map=R(t.categories))}function js(t){return S(t)&&null!=t.value?t.value:t+""}function Xs(t,e,n,i){var r={},a=t[1]-t[0],o=r.interval=fr(a/e,!0);null!=n&&o<n&&(o=r.interval=n),null!=i&&o>i&&(o=r.interval=i);var s=r.intervalPrecision=qs(o);return Us(r.niceTickExtent=[Bg(Math.ceil(t[0]/o)*o,s),Bg(Math.floor(t[1]/o)*o,s)],t),r}function qs(t){return ar(t)+2}function Ys(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function Us(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Ys(t,0,e),Ys(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function Zs(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var a=n[0];a<=n[1]&&(r.push(a),(a=Bg(a+t,i))!==r[r.length-1]);)if(r.length>1e4)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}function $s(t){return t.get("stack")||Fg+t.seriesIndex}function Ks(t){return t.dim+t.index}function Js(t,e){var n=[];return e.eachSeriesByType(t,function(t){nl(t)&&!il(t)&&n.push(t)}),n}function Qs(t){var e=[];return p(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),r=i.getExtent(),a="category"===i.type?i.getBandWidth():Math.abs(r[1]-r[0])/n.count(),o=ir(t.get("barWidth"),a),s=ir(t.get("barMaxWidth"),a),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:a,barWidth:o,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:Ks(i),stackId:$s(t)})}),tl(e)}function tl(t){var e={};p(t,function(t,n){var i=t.axisKey,r=t.bandWidth,a=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=a.stacks;e[i]=a;var s=t.stackId;o[s]||a.autoWidthCount++,o[s]=o[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!o[s].width&&(o[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l);var u=t.barMaxWidth;u&&(o[s].maxWidth=u);var h=t.barGap;null!=h&&(a.gap=h);var c=t.barCategoryGap;null!=c&&(a.categoryGap=c)});var n={};return p(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,a=ir(t.categoryGap,r),o=ir(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-a)/(l+(l-1)*o);u=Math.max(u,0),p(i,function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)}),u=(s-a)/(l+(l-1)*o),u=Math.max(u,0);var h,c=0;p(i,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+o)}),h&&(c-=h.width*o);var d=-c/2;p(i,function(t,i){n[e][i]=n[e][i]||{offset:d,width:t.width},d+=t.width*(1+o)})}),n}function el(t,e,n){if(t&&e){var i=t[Ks(e)];return null!=i&&null!=n&&(i=i[$s(n)]),i}}function nl(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function il(t){return t.pipelineContext&&t.pipelineContext.large}function rl(t,e,n){return h(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}function al(t,e){return Kg(t,$g(e))}function ol(t,e){var n,i,r,a=t.type,o=e.getMin(),s=e.getMax(),l=null!=o,u=null!=s,h=t.getExtent();"ordinal"===a?n=e.getCategories().length:(x(i=e.get("boundaryGap"))||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=ir(i[0],1),i[1]=ir(i[1],1),r=h[1]-h[0]||Math.abs(h[0])),null==o&&(o="ordinal"===a?n?0:NaN:h[0]-i[0]*r),null==s&&(s="ordinal"===a?n?n-1:NaN:h[1]+i[1]*r),"dataMin"===o?o=h[0]:"function"==typeof o&&(o=o({min:h[0],max:h[1]})),"dataMax"===s?s=h[1]:"function"==typeof s&&(s=s({min:h[0],max:h[1]})),(null==o||!isFinite(o))&&(o=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(C(o)||C(s)||"ordinal"===a&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(o>0&&s>0&&!l&&(o=0),o<0&&s<0&&!u&&(s=0));var c=e.ecModel;if(c&&"time"===a){var d,f=Js("bar",c);if(p(f,function(t){d|=t.getBaseAxis()===e.axis}),d){var g=Qs(f),v=sl(o,s,e,g);o=v.min,s=v.max}}return[o,s]}function sl(t,e,n,i){var r=n.axis.getExtent(),a=r[1]-r[0],o=el(i,n.axis);if(void 0===o)return{min:t,max:e};var s=1/0;p(o,function(t){s=Math.min(t.offset,s)});var l=-1/0;p(o,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,h=e-t,c=h/(1-(s+l)/a)-h;return e+=c*(l/u),t-=c*(s/u),{min:t,max:e}}function ll(t,e){var n=ol(t,e),i=null!=e.getMin(),r=null!=e.getMax(),a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var o=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:a,fixMin:i,fixMax:r,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function ul(t,e){if(e=e||t.get("type"))switch(e){case"category":return new Ng(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new Rg;default:return(Ws.getClass(e)||Rg).create(t)}}function hl(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}function cl(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(dl(t,i),r)}:function(e){return t.scale.getLabel(e)}}function dl(t,e){return"category"===t.type?t.scale.getLabel(e):e}function fl(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,a="category"===t.type,o=n.getExtent();r=a?n.count():(i=n.getTicks()).length;var s,l=t.getLabelModel(),u=cl(t),h=1;r>40&&(h=Math.ceil(r/40));for(var c=0;c<r;c+=h){var d=u(i?i[c]:o[0]+c),f=pl(l.getTextRect(d),l.get("rotate")||0);s?s.union(f):s=f}return s}}function pl(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,a=i.height,o=r*Math.cos(n)+a*Math.sin(n),s=r*Math.sin(n)+a*Math.cos(n);return new Rt(i.x,i.y,o,s)}function gl(t){return this._axes[t]}function vl(t){iv.call(this,t)}function ml(t){return"category"===t.type?_l(t):bl(t)}function yl(t,e){return"category"===t.type?wl(t,e):{ticks:t.scale.getTicks()}}function _l(t){var e=t.getLabelModel(),n=xl(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function xl(t,e){var n,i,r=Sl(t,"labels"),a=Ll(e),o=Ml(r,a);return o||(n=w(a)?Al(t,a):Dl(t,i="auto"===a?Il(t):a),Tl(r,a,{labels:n,labelCategoryInterval:i}))}function wl(t,e){var n,i,r=Sl(t,"ticks"),a=Ll(e),o=Ml(r,a);if(o)return o;if(e.get("show")&&!t.scale.isBlank()||(n=[]),w(a))n=Al(t,a,!0);else if("auto"===a){var s=xl(t,t.getLabelModel());i=s.labelCategoryInterval,n=g(s.labels,function(t){return t.tickValue})}else n=Dl(t,i=a,!0);return Tl(r,a,{ticks:n,tickCategoryInterval:i})}function bl(t){var e=t.scale.getTicks(),n=cl(t);return{labels:g(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function Sl(t,e){return rv(t)[e]||(rv(t)[e]=[])}function Ml(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function Tl(t,e,n){return t.push({key:e,value:n}),n}function Il(t){var e=rv(t).autoInterval;return null!=e?e:rv(t).autoInterval=t.calculateCategoryInterval()}function Cl(t){var e=kl(t),n=cl(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,a=r.getExtent(),o=r.count();if(a[1]-a[0]<1)return 0;var s=1;o>40&&(s=Math.max(1,Math.floor(o/40)));for(var l=a[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),h=Math.abs(u*Math.cos(i)),c=Math.abs(u*Math.sin(i)),d=0,f=0;l<=a[1];l+=s){var p=0,g=0,v=ie(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,d=Math.max(d,p,7),f=Math.max(f,g,7)}var m=d/h,y=f/c;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=rv(t.model),w=x.lastAutoInterval,b=x.lastTickCount;return null!=w&&null!=b&&Math.abs(w-_)<=1&&Math.abs(b-o)<=1&&w>_?_=w:(x.lastTickCount=o,x.lastAutoInterval=_),_}function kl(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function Dl(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:a.getLabel(t),tickValue:t})}var r=cl(t),a=t.scale,o=a.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),h=o[0],c=a.count();0!==h&&u>1&&c/u>2&&(h=Math.round(Math.ceil(h/u)*u));var d={min:s.get("showMinLabel"),max:s.get("showMaxLabel")};d.min&&h!==o[0]&&i(o[0]);for(var f=h;f<=o[1];f+=u)i(f);return d.max&&f!==o[1]&&i(o[1]),l}function Al(t,e,n){var i=t.scale,r=cl(t),a=[];return p(i.getTicks(),function(t){var o=i.getLabel(t);e(t,o)&&a.push(n?t:{formattedLabel:r(t),rawLabel:o,tickValue:t})}),a}function Ll(t){var e=t.get("interval");return null==e?"auto":e}function Pl(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function Ol(t,e,n,i,r){function a(t,e){return h?t>e:t<e}var o=e.length;if(t.onBand&&!i&&o){var s,l=t.getExtent();if(1===o)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;p(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[o-1].coord+u},e.push(s)}var h=l[0]>l[1];a(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&a(l[0],e[0].coord)&&e.unshift({coord:l[0]}),a(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&a(s.coord,l[1])&&e.push({coord:l[1]})}}function El(t,e){return e.type||(e.data?"category":"value")}function Nl(t,e,n){return t.getCoordSysModel()===e}function Bl(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function zl(t,e,n){n.getAxesOnZeroOf=function(){return i?[i]:[]};var i,r=t[e],a=n.model,o=a.get("axisLine.onZero"),s=a.get("axisLine.onZeroAxisIndex");if(o)if(null==s){for(var l in r)if(r.hasOwnProperty(l)&&Rl(r[l])){i=r[l];break}}else Rl(r[s])&&(i=r[s])}function Rl(t){return t&&"category"!==t.type&&"time"!==t.type&&hl(t)}function Fl(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function Vl(t,e){return g(vv,function(e){return t.getReferringComponents(e)[0]})}function Wl(t){return"cartesian2d"===t.get("coordinateSystem")}function Hl(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function Gl(t,e,n,i){var r,a,o=lr(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return ur(o-mv/2)?(a=l?"bottom":"top",r="center"):ur(o-1.5*mv)?(a=l?"top":"bottom",r="center"):(a="middle",r=o<1.5*mv&&o>mv/2?l?"left":"right":l?"right":"left"),{rotation:o,textAlign:r,textVerticalAlign:a}}function jl(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function Xl(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var a=e[0],o=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],h=n[1],c=n[n.length-1],d=n[n.length-2];!1===i?(ql(a),ql(u)):Yl(a,o)&&(i?(ql(o),ql(h)):(ql(a),ql(u))),!1===r?(ql(s),ql(c)):Yl(l,s)&&(r?(ql(l),ql(d)):(ql(s),ql(c)))}function ql(t){t&&(t.ignore=!0)}function Yl(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone();if(i&&r){var a=rt([]);return lt(a,a,-t.rotation),i.applyTransform(ot([],a,t.getLocalTransform())),r.applyTransform(ot([],a,e.getLocalTransform())),i.intersect(r)}}function Ul(t){return"middle"===t||"center"===t}function Zl(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),a=r.getModel("lineStyle"),o=r.get("length"),s=i.getTicksCoords(),u=[],h=[],c=t._transform,d=[],f=0;f<s.length;f++){var p=s[f].coord;u[0]=p,u[1]=0,h[0]=p,h[1]=n.tickDirection*o,c&&(Z(u,u,c),Z(h,h,c));var g=new kd(bi({anid:"tick_"+s[f].tickValue,shape:{x1:u[0],y1:u[1],x2:h[0],y2:h[1]},style:l(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),d.push(g)}return d}}function $l(t,e,n){var i=e.axis;if(k(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),a=r.get("margin"),o=i.getViewLabels(),s=(k(n.labelRotate,r.get("rotate"))||0)*mv/180,l=xv(n.rotation,s,n.labelDirection),u=e.getCategories(!0),h=[],c=jl(e),d=e.get("triggerEvent");return p(o,function(o,s){var f=o.tickValue,p=o.formattedLabel,g=o.rawLabel,v=r;u&&u[f]&&u[f].textStyle&&(v=new Ki(u[f].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(f),n.labelOffset+n.labelDirection*a],_=new md({anid:"label_"+f,position:y,rotation:l.rotation,silent:c,z2:10});Ri(_.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?f+"":f,s):m}),d&&(_.eventData=Hl(e),_.eventData.targetType="axisLabel",_.eventData.value=g),t._dumbGroup.add(_),_.updateTransform(),h.push(_),t.group.add(_),_.decomposeTransform()}),h}}function Kl(t){var e=Jl(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,a=n.get("status"),o=n.get("value");null!=o&&(o=i.parse(o));var s=tu(n);null==a&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==o||o>l[1])&&(o=l[1]),o<l[0]&&(o=l[0]),r.value=o,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function Jl(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[eu(t)]}function Ql(t){var e=Jl(t);return e&&e.axisPointerModel}function tu(t){return!!t.get("handle.show")}function eu(t){return t.type+"||"+t.id}function nu(t,e,n,i,r,a){var o=wv.getAxisPointerClass(t.axisPointerClass);if(o){var s=Ql(e);s?(t._axisPointer||(t._axisPointer=new o)).render(e,s,i,a):iu(t,i)}}function iu(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function ru(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,a={},o=r.getAxesOnZeroOf()[0],s=r.position,l=o?"onZero":s,u=r.dim,h=i.getRect(),c=[h.x,h.x+h.width,h.y,h.y+h.height],d={left:0,right:1,top:0,bottom:1,onZero:2},f=e.get("offset")||0,p="x"===u?[c[2]-f,c[3]+f]:[c[0]-f,c[1]+f];if(o){var g=o.toGlobalCoord(o.dataToCoord(0));p[d.onZero]=Math.max(Math.min(g,p[1]),p[0])}a.position=["y"===u?p[d[l]]:c[0],"x"===u?p[d[l]]:c[3]],a.rotation=Math.PI/2*("x"===u?0:1);var v={top:-1,bottom:1,left:-1,right:1};a.labelDirection=a.tickDirection=a.nameDirection=v[s],a.labelOffset=o?p[d[s]]-p[d.onZero]:0,e.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),k(n.labelInside,e.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var m=e.get("axisLabel.rotate");return a.labelRotate="top"===l?-m:m,a.z2=1,a}function au(t,e,n,i,r,a,o){zi(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:a,defaultText:fs(r.getData(),a),isRectText:!0,autoColor:i}),ou(t),ou(e)}function ou(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function su(t,e,n){n.style.text=null,Yi(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function lu(t,e,n){n.style.text=null,Yi(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function uu(t,e,n,i,r,a,o,s){var u=e.getItemVisual(n,"color"),h=e.getItemVisual(n,"opacity"),c=i.getModel("itemStyle"),d=i.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",c.get("barBorderRadius")||0),t.useStyle(l({fill:u,opacity:h},c.getBarItemStyle()));var f=i.getShallow("cursor");f&&t.attr("cursor",f);var p=o?r.height>0?"bottom":"top":r.width>0?"left":"right";s||au(t.style,d,i,u,a,n,p),Bi(t,d)}function hu(t,e){var n=t.get(kv)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}function cu(t,e,n){var i=t.getData(),r=[],a=i.getLayout("valueAxisHorizontal")?1:0;r[1-a]=i.getLayout("valueAxisStart");var o=new Lv({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:a});e.add(o),du(o,t,i)}function du(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}function fu(t,e,n,i){var r=e.getData(),a=this.dataIndex,o=r.getName(a),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:o,seriesId:e.id}),r.each(function(t){pu(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function pu(t,e,n,i,r){var a=(e.startAngle+e.endAngle)/2,o=Math.cos(a),s=Math.sin(a),l=n?i:0,u=[o*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function gu(t,e){function n(){a.ignore=a.hoverIgnore,o.ignore=o.hoverIgnore}function i(){a.ignore=a.normalIgnore,o.ignore=o.normalIgnore}ph.call(this);var r=new wd({z2:2}),a=new Id,o=new md;this.add(r),this.add(a),this.add(o),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function vu(t,e,n,i,r,a,o){function s(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function l(t,e,n,i,r,a){for(var o=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-i),h=t[s].len,c=t[s].len2,d=u<r+h?Math.sqrt((r+h+c)*(r+h+c)-u*u):Math.abs(t[s].x-n);e&&d>=o&&(d=o-10),!e&&d<=o&&(d=o+10),t[s].x=n+d*a,o=d}}t.sort(function(t,e){return t.y-e.y});for(var u,h=0,c=t.length,d=[],f=[],p=0;p<c;p++)(u=t[p].y-h)<0&&function(e,n,i,r){for(var a=e;a<n;a++)if(t[a].y+=i,a>e&&a+1<n&&t[a+1].y>t[a].y+t[a].height)return void s(a,i/2);s(n-1,i/2)}(p,c,-u),h=t[p].y+t[p].height;for(o-h<0&&s(c-1,h-o),p=0;p<c;p++)t[p].y>=n?f.push(t[p]):d.push(t[p]);l(d,!1,e,n,i,r),l(f,!0,e,n,i,r)}function mu(t,e,n,i,r,a){for(var o=[],s=[],l=0;l<t.length;l++)t[l].x<e?o.push(t[l]):s.push(t[l]);for(vu(s,e,n,i,1,r,a),vu(o,e,n,i,-1,r,a),l=0;l<t.length;l++){var u=t[l].linePoints;if(u){var h=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+h}}}var yu=2311,_u=function(){return yu++},xu="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof n&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var i={},r={},a=t.match(/Firefox\/([\d.]+)/),o=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),s=t.match(/Edge\/([\d.]+)/),l=/micromessenger/i.test(t);return a&&(r.firefox=!0,r.version=a[1]),o&&(r.ie=!0,r.version=o[1]),s&&(r.edge=!0,r.version=s[1]),l&&(r.weChat=!0),{browser:r,os:i,node:!1,canvasSupported:!!n.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in e&&!r.ie&&!r.edge,pointerEventsSupported:"onpointerdown"in e&&(r.edge||r.ie&&r.version>=11)}}(navigator.userAgent),wu={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},bu={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Su=Object.prototype.toString,Mu=Array.prototype,Tu=Mu.forEach,Iu=Mu.filter,Cu=Mu.slice,ku=Mu.map,Du=Mu.reduce,Au={},Lu=function(){return Au.createCanvas()};Au.createCanvas=function(){return n.createElement("canvas")};var Pu,Ou="__ec_primitive__";z.prototype={constructor:z,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=y(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}};var Eu="undefined"==typeof Float32Array?Array:Float32Array,Nu=U,Bu=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])};J.prototype={constructor:J,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(Q(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,a=i-this._y;this._x=n,this._y=i,e.drift(r,a,t),this.dispatchToElement(Q(e,t),"drag",t.event);var o=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=o,e!==o&&(s&&o!==s&&this.dispatchToElement(Q(s,t),"dragleave",t.event),o&&o!==s&&this.dispatchToElement(Q(o,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(Q(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(Q(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var zu=Array.prototype.slice,Ru=function(){this._$handlers={}};Ru.prototype={constructor:Ru,one:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,a=n[t].length;r<a;r++)n[t][r].h!=e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>3&&(e=zu.call(e,1));for(var i=this._$handlers[t],r=i.length,a=0;a<r;){switch(n){case 1:i[a].h.call(i[a].ctx);break;case 2:i[a].h.call(i[a].ctx,e[1]);break;case 3:i[a].h.call(i[a].ctx,e[1],e[2]);break;default:i[a].h.apply(i[a].ctx,e)}i[a].one?(i.splice(a,1),r--):a++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>4&&(e=zu.call(e,1,e.length-1));for(var i=e[e.length-1],r=this._$handlers[t],a=r.length,o=0;o<a;){switch(n){case 1:r[o].h.call(i);break;case 2:r[o].h.call(i,e[1]);break;case 3:r[o].h.call(i,e[1],e[2]);break;default:r[o].h.apply(i,e)}r[o].one?(r.splice(o,1),a--):o++}}return this}};var Fu="silent";et.prototype.dispose=function(){};var Vu=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Wu=function(t,e,n,i){Ru.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new et,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,J.call(this),this.setHandlerProxy(n)};Wu.prototype={constructor:Wu,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(p(Vu,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target);var a=this._hovered=this.findHover(e,n),o=a.target,s=this.proxy;s.setCursor&&s.setCursor(o?o.cursor:"default"),r&&o!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(a,"mousemove",t),o&&o!==r&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,a=tt(e,t,n);i&&(i[r]&&(a.cancelBubble=i[r].call(i,a)),i.trigger(e,a),i=i.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},a=i.length-1;a>=0;a--){var o;if(i[a]!==n&&!i[a].ignore&&(o=nt(i[a],t,e))&&(!r.topTarget&&(r.topTarget=i[a]),o!==Fu)){r.target=i[a];break}}return r}},p(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Wu.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||Nu(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),d(Wu,Ru),d(Wu,J);var Hu="undefined"==typeof Float32Array?Array:Float32Array,Gu=rt,ju=5e-5,Xu=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},qu=Xu.prototype;qu.transform=null,qu.needLocalTransform=function(){return ct(this.rotation)||ct(this.position[0])||ct(this.position[1])||ct(this.scale[0]-1)||ct(this.scale[1]-1)},qu.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;n||e?(i=i||it(),n?this.getLocalTransform(i):Gu(i),e&&(n?ot(i,t.transform,i):at(i,t.transform)),this.transform=i,this.invTransform=this.invTransform||it(),ht(this.invTransform,i)):i&&Gu(i)},qu.getLocalTransform=function(t){return Xu.getLocalTransform(this,t)},qu.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},qu.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Yu=[];qu.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(ot(Yu,t.invTransform,e),e=Yu);var n=e[0]*e[0]+e[1]*e[1],i=e[2]*e[2]+e[3]*e[3],r=this.position,a=this.scale;ct(n-1)&&(n=Math.sqrt(n)),ct(i-1)&&(i=Math.sqrt(i)),e[0]<0&&(n=-n),e[3]<0&&(i=-i),r[0]=e[4],r[1]=e[5],a[0]=n,a[1]=i,this.rotation=Math.atan2(-e[1]/i,e[0]/n)}},qu.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},qu.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&Z(n,n,i),n},qu.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&Z(n,n,i),n},Xu.getLocalTransform=function(t,e){Gu(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,a=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),ut(e,e,i),r&&lt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=a[0],e[5]+=a[1],e};var Uu={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Uu.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Uu.bounceIn(2*t):.5*Uu.bounceOut(2*t-1)+.5}};dt.prototype={constructor:dt,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Uu[i]:i,a="function"==typeof r?r(n):n;return this.fire("frame",a),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Zu=function(){this.head=null,this.tail=null,this._len=0},$u=Zu.prototype;$u.insert=function(t){var e=new Ku(t);return this.insertEntry(e),e},$u.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},$u.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},$u.len=function(){return this._len},$u.clear=function(){this.head=this.tail=null,this._len=0};var Ku=function(t){this.value=t,this.next,this.prev},Ju=function(t){this._list=new Zu,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Qu=Ju.prototype;Qu.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var a=n.len(),o=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}o?o.value=e:o=new Ku(e),o.key=t,n.insertEntry(o),i[t]=o}return r},Qu.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},Qu.clear=function(){this._list.clear(),this._map={}};var th={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},eh=new Ju(20),nh=null,ih=Array.prototype.slice,rh=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||Tt,this._setter=i||It,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};rh.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:Et(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0;for(var a in this._tracks)if(this._tracks.hasOwnProperty(a)){var o=zt(this,t,function(){--r||i._doneCallback()},this._tracks[a],a,e);o&&(this._clipList.push(o),r++,this.animation&&this.animation.addClip(o),n=o)}if(n){var s=n.onframe;n.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var ah=1;"undefined"!=typeof e&&(ah=Math.max(e.devicePixelRatio||1,1));var oh=ah,sh=function(){},lh=sh,uh=function(){this.animators=[]};uh.prototype={constructor:uh,animate:function(t,e){var n,i=!1,r=this,a=this.__zr;if(t){var o=t.split("."),s=r;i="shape"===o[0];for(var l=0,u=o.length;l<u;l++)s&&(s=s[o[l]]);s&&(n=s)}else n=r;if(n){var c=r.animators,d=new rh(n,e);return d.during(function(t){r.dirty(i)}).done(function(){c.splice(h(c,d),1)}),c.push(d),a&&a.animation.addAnimator(d),d}lh('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,a){b(n)?(r=i,i=n,n=0):w(i)?(r=i,i="linear",n=0):w(n)?(r=n,n=0):w(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n);var o=this.animators.slice(),s=o.length;s||r&&r();for(var l=0;l<o.length;l++)o[l].done(function(){--s||r&&r()}).start(i,a)},_animateToShallow:function(t,e,n,i,r){var a={},o=0;for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])S(n[s])&&!f(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(a[s]=n[s],o++);else if(null!=n[s])if(t){var l={};l[t]={},l[t][s]=n[s],this.attr(l)}else this.attr(s,n[s]);return o>0&&this.animate(t,!1).when(null==i?500:i,a).delay(r||0),this}};var hh=function(t){Xu.call(this,t),Ru.call(this,t),uh.call(this,t),this.id=t.id||_u()};hh.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(S(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},d(hh,uh),d(hh,Xu),d(hh,Ru);var ch=Z,dh=Math.min,fh=Math.max;Rt.prototype={constructor:Rt,union:function(t){var e=dh(t.x,this.x),n=dh(t.y,this.y);this.width=fh(t.x+t.width,this.x+this.width)-e,this.height=fh(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,ch(t,t,r),ch(e,e,r),ch(n,n,r),ch(i,i,r),this.x=dh(t[0],e[0],n[0],i[0]),this.y=dh(t[1],e[1],n[1],i[1]);var a=fh(t[0],e[0],n[0],i[0]),o=fh(t[1],e[1],n[1],i[1]);this.width=a-this.x,this.height=o-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=it();return st(r,r,[-e.x,-e.y]),ut(r,r,[n,i]),st(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof Rt||(t=Rt.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,a=e.y+e.height,o=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(i<o||s<n||a<l||u<r)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new Rt(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},Rt.create=function(t){return new Rt(t.x,t.y,t.width,t.height)};var ph=function(t){for(var e in t=t||{},hh.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};ph.prototype={constructor:ph,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof ph&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=h(i,t);return r<0?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof ph&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof ph&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof ph&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof ph&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new Rt(0,0,0,0),i=t||this._children,r=[],a=0;a<i.length;a++){var o=i[a];if(!o.ignore&&!o.invisible){var s=o.getBoundingRect(),l=o.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},c(ph,hh);var gh=32,vh=7,mh=function(){this._roots=[],this._displayList=[],this._displayListLen=0};mh.prototype={constructor:mh,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,xu.canvasSupported&&qt(n,Yt)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,a=t;r;)r.parent=a,r.updateTransform(),e.push(r),a=r,r=r.clipPath}if(t.isGroup){for(var o=t._children,s=0;s<o.length;s++){var l=o[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof ph&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(n=0;n<this._roots.length;n++){var e=this._roots[n];e instanceof ph&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var n=0,i=t.length;n<i;n++)this.delRoot(t[n]);else{var r=h(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof ph&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:Yt};var yh={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},_h=function(t,e,n){return yh.hasOwnProperty(e)?n*=t.dpr:n},xh=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],wh=function(t,e){this.extendFrom(t,!1),this.host=e};wh.prototype={constructor:wh,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var i=this,r=n&&n.style,a=!r,o=0;o<xh.length;o++){var s=xh[o],l=s[0];(a||i[l]!==r[l])&&(t[l]=_h(t,l,i[l]||s[1]))}if((a||i.fill!==r.fill)&&(t.fillStyle=i.fill),(a||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(a||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(a||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?Zt:Ut)(t,e,n),r=e.colorStops,a=0;a<r.length;a++)i.addColorStop(r[a].offset,r[a].color);return i}};for(var bh=wh.prototype,Sh=0;Sh<xh.length;Sh++){var Mh=xh[Sh];Mh[0]in bh||(bh[Mh[0]]=Mh[1])}wh.getGradient=bh.getGradient;var Th=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};Th.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var Ih=function(t,e,n){var i;n=n||oh,"string"==typeof t?i=Kt(t,e,n):S(t)&&(t=(i=t).id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=$t,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};Ih.prototype={constructor:Ih,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Kt("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,a=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,a&&(a.width=t*n,a.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,a=i.width,o=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,a/u,o/u)),r.clearRect(0,0,a,o),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||wh.getGradient(r,e,{x:0,y:0,width:a,height:o}),e.__canvasGradient=n):e.image&&(n=Th.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,a,o),r.restore());if(s){var h=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(h,0,0,a,o),r.restore()}}};var Ch="undefined"!=typeof e&&(e.requestAnimationFrame&&e.requestAnimationFrame.bind(e)||e.msRequestAnimationFrame&&e.msRequestAnimationFrame.bind(e)||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},kh=new Ju(50),Dh={},Ah=0,Lh=5e3,Ph=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Oh="12px sans-serif",Eh={measureText:function(t,e){var n=u();return n.font=e||Oh,n.measureText(t)}},Nh={left:1,right:1,center:1},Bh={top:1,bottom:1,middle:1},zh=new Rt,Rh=function(){};Rh.prototype={constructor:Rh,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&xe(n);var i=n.text;if(null!=i&&(i+=""),ze(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(zh.copy(e),zh.applyTransform(r),e=zh),be(this,t,i,n,e),t.restore()}}},Re.prototype={constructor:Re,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?hh.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new wh(t,this),this.dirty(!1),this}},c(Re,hh),d(Re,Rh),Fe.prototype={constructor:Fe,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Qt(i,this._image,this,this.onload);if(r&&ee(r)){var a=n.x||0,o=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var h=n.sx||0,c=n.sy||0;t.drawImage(r,h,c,n.sWidth,n.sHeight,a,o,s,l)}else if(n.sx&&n.sy){var d=s-(h=n.sx),f=l-(c=n.sy);t.drawImage(r,h,c,d,f,a,o,s,l)}else t.drawImage(r,a,o,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new Rt(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},c(Fe,Re);var Fh=new Rt(0,0,0,0),Vh=new Rt(0,0,0,0),Wh=function(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=s({},n||{}),this.dpr=n.devicePixelRatio||oh,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var a=this._zlevelList=[],o=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var l=t.width,u=t.height;null!=n.width&&(l=n.width),null!=n.height&&(u=n.height),this.dpr=n.devicePixelRatio||1,t.width=l*this.dpr,t.height=u*this.dpr,this._width=l,this._height=u;var h=new Ih(t,this,this.dpr);h.__builtin__=!0,h.initContext(),o[314159]=h,h.zlevel=314159,a.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var c=this._domRoot=Xe(this._width,this._height);t.appendChild(c)}this._hoverlayer=null,this._hoverElements=[]};Wh.prototype={constructor:Wh,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],a=this._layers[r];if(!a.__builtin__&&a.refresh){var o=0===i?this._backgroundColor:null;a.refresh(o)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape});n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=h(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){qt(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;r<e;){var a=t[r],o=a.__from;o&&o.__zr?(r++,o.invisible||(a.transform=o.transform,a.invTransform=o.invTransform,a.__clipPaths=o.__clipPaths,this._doPaintEl(a,n,!0,i))):(t.splice(r,1),o.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;Ch(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];(s=this._layers[r]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&n.push(s)}for(var a=!0,o=0;o<n.length;o++){var s=n[o],l=s.ctx,u={};l.save();var h=e?s.__startIndex:s.__drawIndex,c=!e&&s.incremental&&Date.now,d=c&&Date.now(),f=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,f);else if(h===s.__startIndex){var g=t[h];g.incremental&&g.notClear&&!e||s.clear(!1,f)}-1===h&&(console.error("For some unknown reason. drawIndex is -1"),h=s.__startIndex);for(var v=h;v<s.__endIndex;v++){var m=t[v];if(this._doPaintEl(m,s,e,u),m.__dirty=!1,c&&Date.now()-d>15)break}s.__drawIndex=v,s.__drawIndex<s.__endIndex&&(a=!1),u.prevElClipPaths&&l.restore(),l.restore()}return xu.wxa&&p(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),a},_doPaintEl:function(t,e,n,i){var r=e.ctx,a=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!He(t,this._width,this._height))){var o=t.__clipPaths;i.prevElClipPaths&&!Ge(o,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),o&&(r.save(),je(o,r),i.prevElClipPaths=o)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var n=this._layers[t];return n||((n=new Ih("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&a(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,a=null,o=-1,s=this._domRoot;if(n[t])lh("ZLevel "+t+" has been used already");else if(We(e)){if(r>0&&t>i[0]){for(o=0;o<r-1&&!(i[o]<t&&i[o+1]>t);o++);a=n[i[o]]}if(i.splice(o+1,0,t),n[t]=e,!e.virtual)if(a){var l=a.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else lh("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){n&&(n.__endIndex!==t&&(n.__dirty=!0),n.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(r=1;r<t.length;r++)if((o=t[r]).zlevel!==t[r-1].zlevel||o.incremental){this._needsManuallyCompositing=!0;break}for(var n=null,i=0,r=0;r<t.length;r++){var a,o=t[r],s=o.zlevel;o.incremental?((a=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,i=1):a=this.getLayer(s+(i>0?.01:0),this._needsManuallyCompositing),a.__builtin__||lh("ZLevel "+s+" has been used by unkown layer "+a.id),a!==n&&(a.__used=!0,a.__startIndex!==r&&(a.__dirty=!0),a.__startIndex=r,a.incremental?a.__drawIndex=-1:a.__drawIndex=r,e(r),n=a),o.__dirty&&(a.__dirty=!0,a.incremental&&a.__drawIndex<0&&(a.__drawIndex=r))}e(r),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?a(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];r!==t&&r!==t+.01||a(this._layers[r],n[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(h(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);p(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new Ih("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var a={},o=this.storage.getDisplayList(!0),s=0;s<o.length;s++){var l=o[s];this._doPaintEl(l,e,!0,a)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],r=["clientWidth","clientHeight"][t],a=["paddingLeft","paddingTop"][t],o=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var s=this.root,l=n.defaultView.getComputedStyle(s);return(s[r]||Ve(l[i])||Ve(s.style[i]))-(Ve(l[a])||0)-(Ve(l[o])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=n.createElement("canvas"),r=i.getContext("2d"),a=t.getBoundingRect(),o=t.style,s=o.shadowBlur*e,l=o.shadowOffsetX*e,u=o.shadowOffsetY*e,h=o.hasStroke()?o.lineWidth:0,c=Math.max(h/2,-l+s),d=Math.max(h/2,l+s),f=Math.max(h/2,-u+s),p=Math.max(h/2,u+s),g=a.width+c+d,v=a.height+f+p;i.width=g*e,i.height=v*e,r.scale(e,e),r.clearRect(0,0,g,v),r.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[c-a.x,f-a.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=new Fe({style:{x:0,y:0,image:i}});return null!=m.position&&(y.position=t.position=m.position),null!=m.rotation&&(y.rotation=t.rotation=m.rotation),null!=m.scale&&(y.scale=t.scale=m.scale),y}};var Hh="undefined"!=typeof e&&!!e.addEventListener,Gh=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,jh=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,Ru.call(this)};jh.prototype={constructor:jh,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=h(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],a=[],o=0;o<i;o++){var s=n[o],l=s.step(t,e);l&&(r.push(l),a.push(s))}for(o=0;o<i;)n[o]._needsRemove?(n[o]=n[i-1],n.pop(),i--):o++;for(i=r.length,o=0;o<i;o++)a[o].fire(r[o]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(Ch(t),!e._paused&&e._update())}var e=this;this._running=!0,Ch(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new rh(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},d(jh,Ru);var Xh=function(){this._track=[]};Xh.prototype={constructor:Xh,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},a=0,o=i.length;a<o;a++){var s=i[a],l=Ye(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in qh)if(qh.hasOwnProperty(e)){var n=qh[e](this._track,t);if(n)return n}}};var qh={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var a=Je(i)/Je(r);!isFinite(a)&&(a=1),e.pinchScale=a;var o=Qe(i);return e.pinchX=o[0],e.pinchY=o[1],{type:"pinch",target:t[0].target,event:e}}}}},Yh=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Uh=["touchstart","touchend","touchmove"],Zh={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},$h=g(Yh,function(t){var e=t.replace("mouse","pointer");return Zh[e]?e:t}),Kh={mousemove:function(t){t=Ze(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=Ze(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,en(this,t,"start"),Kh.mousemove.call(this,t),Kh.mousedown.call(this,t),nn(this)},touchmove:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,en(this,t,"change"),Kh.mousemove.call(this,t),nn(this)},touchend:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,en(this,t,"end"),Kh.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Kh.click.call(this,t),nn(this)},pointerdown:function(t){Kh.mousedown.call(this,t)},pointermove:function(t){rn(t)||Kh.mousemove.call(this,t)},pointerup:function(t){Kh.mouseup.call(this,t)},pointerout:function(t){rn(t)||Kh.mouseout.call(this,t)}};p(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Kh[t]=function(e){e=Ze(this.dom,e),this.trigger(t,e)}});var Jh=on.prototype;Jh.dispose=function(){for(var t=Yh.concat(Uh),e=0;e<t.length;e++){var n=t[e];Ke(this.dom,tn(n),this._handlers[n])}},Jh.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},d(on,Ru);var Qh=!xu.canvasSupported,tc={canvas:Wh},ec=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new mh,a=n.renderer;if(Qh){if(!tc.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");a="vml"}else a&&tc[a]||(a="canvas");var o=new tc[a](e,r,n,t);this.storage=r,this.painter=o;var s=xu.node||xu.worker?null:new on(o.getViewportRoot());this.handler=new Wu(r,o,s,o.root),this.animation=new jh({stage:{update:y(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};ec.prototype={constructor:ec,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null}};var nc=p,ic=S,rc=x,ac="series\0",oc=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],sc=0,lc=".",uc="___EC__COMPONENT__CONTAINER___",hc=0,cc=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},a=0;a<t.length;a++){var o=t[a][1];if(!(n&&h(n,o)>=0||i&&h(i,o)<0)){var s=e.getShallow(o);null!=s&&(r[t[a][0]]=s)}}return r}},dc=cc([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),fc={getLineStyle:function(t){var e=dc(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},pc=cc([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),gc={getAreaStyle:function(t,e){return pc(this,t,e)}},vc=Math.pow,mc=Math.sqrt,yc=1e-8,_c=1e-4,xc=mc(3),wc=1/3,bc=V(),Sc=V(),Mc=V(),Tc=Math.min,Ic=Math.max,Cc=Math.sin,kc=Math.cos,Dc=2*Math.PI,Ac=V(),Lc=V(),Pc=V(),Oc=[],Ec=[],Nc={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},Bc=[],zc=[],Rc=[],Fc=[],Vc=Math.min,Wc=Math.max,Hc=Math.cos,Gc=Math.sin,jc=Math.sqrt,Xc=Math.abs,qc="undefined"!=typeof Float32Array,Yc=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};Yc.prototype={constructor:Yc,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=Xc(1/oh/t)||0,this._uy=Xc(1/oh/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Nc.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=Xc(t-this._xi)>this._ux||Xc(e-this._yi)>this._uy||this._len<5;return this.addData(Nc.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,a){return this.addData(Nc.C,t,e,n,i,r,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,a):this._ctx.bezierCurveTo(t,e,n,i,r,a)),this._xi=r,this._yi=a,this},quadraticCurveTo:function(t,e,n,i){return this.addData(Nc.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,a){return this.addData(Nc.A,t,e,n,n,i,r-i,0,a?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,a),this._xi=Hc(r)*n+t,this._yi=Gc(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(Nc.R,t,e,n,i),this},closePath:function(){this.addData(Nc.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!qc||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();for(qc&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var a=t[r].data,o=0;o<a.length;o++)this.data[i++]=a[o];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,a=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,d=jc(h*h+c*c),f=l,p=u,g=o.length;for(h/=d,c/=d,a<0&&(a=r+a),f-=(a%=r)*h,p-=a*c;h>0&&f<=t||h<0&&f>=t||0==h&&(c>0&&p<=e||c<0&&p>=e);)f+=h*(n=o[i=this._dashIdx]),p+=c*n,this._dashIdx=(i+1)%g,h>0&&f<l||h<0&&f>l||c>0&&p<u||c<0&&p>u||s[i%2?"moveTo":"lineTo"](h>=0?Vc(f,t):Wc(f,t),c>=0?Vc(p,e):Wc(p,e));h=f-t,c=p-e,this._dashOffset=-jc(h*h+c*c)},_dashedBezierTo:function(t,e,n,i,r,a){var o,s,l,u,h,c=this._dashSum,d=this._dashOffset,f=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=Ln,y=0,_=this._dashIdx,x=f.length,w=0;for(d<0&&(d=c+d),d%=c,o=0;o<1;o+=.1)s=m(g,t,n,r,o+.1)-m(g,t,n,r,o),l=m(v,e,i,a,o+.1)-m(v,e,i,a,o),y+=jc(s*s+l*l);for(;_<x&&!((w+=f[_])>d);_++);for(o=(w-d)/y;o<=1;)u=m(g,t,n,r,o),h=m(v,e,i,a,o),_%2?p.moveTo(u,h):p.lineTo(u,h),o+=f[_]/y,_=(_+1)%x;_%2!=0&&p.lineTo(r,a),s=r-u,l=a-h,this._dashOffset=-jc(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,a=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,a)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,qc&&(this.data=new Float32Array(t)))},getBoundingRect:function(){Bc[0]=Bc[1]=Rc[0]=Rc[1]=Number.MAX_VALUE,zc[0]=zc[1]=Fc[0]=Fc[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,a=0;a<t.length;){var o=t[a++];switch(1==a&&(i=e=t[a],r=n=t[a+1]),o){case Nc.M:e=i=t[a++],n=r=t[a++],Rc[0]=i,Rc[1]=r,Fc[0]=i,Fc[1]=r;break;case Nc.L:Gn(e,n,t[a],t[a+1],Rc,Fc),e=t[a++],n=t[a++];break;case Nc.C:jn(e,n,t[a++],t[a++],t[a++],t[a++],t[a],t[a+1],Rc,Fc),e=t[a++],n=t[a++];break;case Nc.Q:Xn(e,n,t[a++],t[a++],t[a],t[a+1],Rc,Fc),e=t[a++],n=t[a++];break;case Nc.A:var s=t[a++],l=t[a++],u=t[a++],h=t[a++],c=t[a++],d=t[a++]+c,f=(t[a++],1-t[a++]);1==a&&(i=Hc(c)*u+s,r=Gc(c)*h+l),qn(s,l,u,h,c,d,f,Rc,Fc),e=Hc(d)*u+s,n=Gc(d)*h+l;break;case Nc.R:Gn(i=e=t[a++],r=n=t[a++],i+t[a++],r+t[a++],Rc,Fc);break;case Nc.Z:e=i,n=r}$(Bc,Bc,Rc),K(zc,zc,Fc)}return 0===a&&(Bc[0]=Bc[1]=zc[0]=zc[1]=0),new Rt(Bc[0],Bc[1],zc[0]-Bc[0],zc[1]-Bc[1])},rebuildPath:function(t){for(var e,n,i,r,a,o,s=this.data,l=this._ux,u=this._uy,h=this._len,c=0;c<h;){var d=s[c++];switch(1==c&&(e=i=s[c],n=r=s[c+1]),d){case Nc.M:e=i=s[c++],n=r=s[c++],t.moveTo(i,r);break;case Nc.L:a=s[c++],o=s[c++],(Xc(a-i)>l||Xc(o-r)>u||c===h-1)&&(t.lineTo(a,o),i=a,r=o);break;case Nc.C:t.bezierCurveTo(s[c++],s[c++],s[c++],s[c++],s[c++],s[c++]),i=s[c-2],r=s[c-1];break;case Nc.Q:t.quadraticCurveTo(s[c++],s[c++],s[c++],s[c++]),i=s[c-2],r=s[c-1];break;case Nc.A:var f=s[c++],p=s[c++],g=s[c++],v=s[c++],m=s[c++],y=s[c++],_=s[c++],x=s[c++],w=g>v?g:v,b=g>v?1:g/v,S=g>v?v/g:1,M=m+y;Math.abs(g-v)>.001?(t.translate(f,p),t.rotate(_),t.scale(b,S),t.arc(0,0,w,m,M,1-x),t.scale(1/b,1/S),t.rotate(-_),t.translate(-f,-p)):t.arc(f,p,w,m,M,1-x),1==c&&(e=Hc(m)*g+f,n=Gc(m)*v+p),i=Hc(M)*g+f,r=Gc(M)*v+p;break;case Nc.R:e=i=s[c],n=r=s[c+1],t.rect(s[c++],s[c++],s[c++],s[c++]);break;case Nc.Z:t.closePath(),i=e,r=n}}}},Yc.CMD=Nc;var Uc=2*Math.PI,Zc=2*Math.PI,$c=Yc.CMD,Kc=2*Math.PI,Jc=1e-4,Qc=[-1,-1,-1],td=[-1,-1],ed=Th.prototype.getCanvasPattern,nd=Math.abs,id=new Yc(!0);si.prototype={constructor:si,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||id,a=i.hasStroke(),o=i.hasFill(),s=i.fill,l=i.stroke,u=o&&!!s.colorStops,h=a&&!!l.colorStops,c=o&&!!s.image,d=a&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),h&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:c&&(t.fillStyle=ed.call(s,t)),h?t.strokeStyle=this._strokeGradient:d&&(t.strokeStyle=ed.call(l,t));var f=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();r.setScale(v[0],v[1]),this.__dirtyPath||f&&!g&&a?(r.beginPath(t),f&&!g&&(r.setLineDash(f),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),o&&r.fill(t),f&&g&&(t.setLineDash(f),t.lineDashOffset=p),a&&r.stroke(t),f&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new Yc},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new Yc),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var a=e.lineWidth,o=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(a=Math.max(a,this.strokeContainThreshold||4)),o>1e-10&&(r.width+=a/o,r.height+=a/o,r.x-=a/o/2,r.y-=a/o/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var a=this.path.data;if(r.hasStroke()){var o=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(o=Math.max(o,this.strokeContainThreshold)),oi(a,o/s,t,e)))return!0}if(r.hasFill())return ai(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):Re.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(S(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&nd(t[0]-1)>1e-10&&nd(t[3]-1)>1e-10?Math.sqrt(nd(t[0]*t[3]-t[2]*t[1])):1}},si.extend=function(t){var e=function(e){si.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in c(e,si),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},c(si,Re);var rd=Yc.CMD,ad=[[],[],[]],od=Math.sqrt,sd=Math.atan2,ld=function(t,e){var n,i,r,a,o,s,l=t.data,u=rd.M,h=rd.C,c=rd.L,d=rd.R,f=rd.A,p=rd.Q;for(r=0,a=0;r<l.length;){switch(n=l[r++],a=r,i=0,n){case u:case c:i=1;break;case h:i=3;break;case p:i=2;break;case f:var g=e[4],v=e[5],m=od(e[0]*e[0]+e[1]*e[1]),y=od(e[2]*e[2]+e[3]*e[3]),_=sd(-e[1]/y,e[0]/m);l[r]*=m,l[r++]+=g,l[r]*=y,l[r++]+=v,l[r++]*=m,l[r++]*=y,l[r++]+=_,l[r++]+=_,a=r+=2;break;case d:s[0]=l[r++],s[1]=l[r++],Z(s,s,e),l[a++]=s[0],l[a++]=s[1],s[0]+=l[r++],s[1]+=l[r++],Z(s,s,e),l[a++]=s[0],l[a++]=s[1]}for(o=0;o<i;o++)(s=ad[o])[0]=l[r++],s[1]=l[r++],Z(s,s,e),l[a++]=s[0],l[a++]=s[1]}},ud=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],hd=Math.sqrt,cd=Math.sin,dd=Math.cos,fd=Math.PI,pd=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},gd=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(pd(t)*pd(e))},vd=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(gd(t,e))},md=function(t){Re.call(this,t)};md.prototype={constructor:md,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&xe(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),n.bind(t,this,e),ze(i,n)&&(this.setTransform(t),be(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&xe(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=ie(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,Oe(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},c(md,Re);var yd=si.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),_d=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],xd=function(t){return xu.browser.ie&&xu.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var a=n[r],o=a&&a.shape,s=a&&a.type;if(o&&("sector"===s&&o.startAngle===o.endAngle||"rect"===s&&(!o.width||!o.height))){for(l=0;l<_d.length;l++)_d[l][2]=i[_d[l][0]],i[_d[l][0]]=_d[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<_d.length;l++)i[_d[l][0]]=_d[l][2]}:t},wd=si.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:xd(si.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(o),h=Math.sin(o);t.moveTo(u*r+n,h*r+i),t.lineTo(u*a+n,h*a+i),t.arc(n,i,a,o,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,o,l),t.closePath()}}),bd=si.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),Sd=function(t,e){for(var n=t.length,i=[],r=0,a=1;a<n;a++)r+=U(t[a-1],t[a]);var o=r/2;for(o=o<n?n:o,a=0;a<o;a++){var s,l,u,h=a/(o-1)*(e?n:n-1),c=Math.floor(h),d=h-c,f=t[c%n];e?(s=t[(c-1+n)%n],l=t[(c+1)%n],u=t[(c+2)%n]):(s=t[0===c?c:c-1],l=t[c>n-2?n-1:c+1],u=t[c>n-3?n-1:c+2]);var p=d*d,g=d*p;i.push([fi(s[0],f[0],l[0],u[0],d,p,g),fi(s[1],f[1],l[1],u[1],d,p,g)])}return i},Md=function(t,e,n,i){var r,a,o,s,l=[],u=[],h=[],c=[];if(i){o=[1/0,1/0],s=[-1/0,-1/0];for(var d=0,f=t.length;d<f;d++)$(o,o,t[d]),K(s,s,t[d]);$(o,o,i[0]),K(s,s,i[1])}for(d=0,f=t.length;d<f;d++){var p=t[d];if(n)r=t[d?d-1:f-1],a=t[(d+1)%f];else{if(0===d||d===f-1){l.push(W(t[d]));continue}r=t[d-1],a=t[d+1]}G(u,a,r),q(u,u,e);var g=U(p,r),v=U(p,a),m=g+v;0!==m&&(g/=m,v/=m),q(h,u,-g),q(c,u,v);var y=H([],p,h),_=H([],p,c);i&&(K(y,y,o),$(y,y,s),K(_,_,o),$(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},Td=si.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){pi(t,e,!0)}}),Id=si.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){pi(t,e,!1)}}),Cd=si.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width,a=e.height;e.r?_e(t,e):t.rect(n,i,r,a),t.closePath()}}),kd=si.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.percent;0!==o&&(t.moveTo(n,i),o<1&&(r=n*(1-o)+r*o,a=i*(1-o)+a*o),t.lineTo(r,a))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),Dd=[],Ad=si.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,h=e.percent;0!==h&&(t.moveTo(n,i),null==l||null==u?(h<1&&(Wn(n,o,r,h,Dd),o=Dd[1],r=Dd[2],Wn(i,s,a,h,Dd),s=Dd[1],a=Dd[2]),t.quadraticCurveTo(o,s,r,a)):(h<1&&(Nn(n,o,l,r,h,Dd),o=Dd[1],l=Dd[2],r=Dd[3],Nn(i,s,u,a,h,Dd),s=Dd[1],u=Dd[2],a=Dd[3]),t.bezierCurveTo(o,s,l,u,r,a)))},pointAt:function(t){return gi(this.shape,t,!1)},tangentAt:function(t){var e=gi(this.shape,t,!0);return Y(e,e)}}),Ld=si.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),a=e.startAngle,o=e.endAngle,s=e.clockwise,l=Math.cos(a),u=Math.sin(a);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,a,o,!s)}}),Pd=si.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),si.prototype.getBoundingRect.call(this)}}),Od=function(t){this.colorStops=t||[]};Od.prototype={constructor:Od,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Ed=function(t,e,n,i,r,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=a||!1,Od.call(this,r)};Ed.prototype={constructor:Ed},c(Ed,Od);var Nd=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,Od.call(this,i)};Nd.prototype={constructor:Nd},c(Nd,Od),vi.prototype.incremental=!0,vi.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},vi.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},vi.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},vi.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},vi.prototype.update=function(){for(this.updateTransform(),t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},vi.prototype.brush=function(t,e){for(n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t);this._cursor=n;for(var n=0;n<this._temporaryDisplayables.length;n++){var i=this._temporaryDisplayables[n];i.beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var Bd=[];vi.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new Rt(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(Bd)),t.union(i)}this._rect=t}return this._rect},vi.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},c(vi,Re);var zd=Math.round,Rd=Math.max,Fd=Math.min,Vd={},Wd=(Object.freeze||Object)({extendShape:mi,extendPath:function(t,e){return di(t,e)},makePath:yi,makeImage:_i,mergePath:function(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var a=t[r];a.path||a.createPathProxy(),a.__dirtyPath&&a.buildPath(a.path,a.shape,!0),n.push(a.path)}var o=new si(e);return o.createPathProxy(),o.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},o},resizePath:wi,subPixelOptimizeLine:bi,subPixelOptimizeRect:function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,a=e.width,o=e.height;return e.x=Si(e.x,n,!0),e.y=Si(e.y,n,!0),e.width=Math.max(Si(i+a,n,!1)-e.x,0===a?0:1),e.height=Math.max(Si(r+o,n,!1)-e.y,0===o?0:1),t},subPixelOptimize:Si,setHoverStyle:Bi,setLabelStyle:zi,setTextStyle:Ri,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,Fi(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:Xi,updateProps:Yi,initProps:Ui,getTransform:function(t,e){for(var n=rt([]);t&&t!==e;)ot(n,t.getLocalTransform(),n),t=t.parent;return n},applyTransform:Zi,transformDirection:function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return a=Zi(a,e,n),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top"},groupTransition:$i,clipPointsByRect:function(t,e){return g(t,function(t){var n=t[0];n=Rd(n,e.x),n=Fd(n,e.x+e.width);var i=t[1];return i=Rd(i,e.y),i=Fd(i,e.y+e.height),[n,i]})},clipRectByRect:function(t,e){var n=Rd(t.x,e.x),i=Fd(t.x+t.width,e.x+e.width),r=Rd(t.y,e.y),a=Fd(t.y+t.height,e.y+e.height);if(i>=n&&a>=r)return{x:n,y:r,width:i-n,height:a-r}},createIcon:function(t,e,n){var i=(e=s({rectHover:!0},e)).style={strokeNoScale:!0};if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(i.image=t.slice(8),l(i,n),new Fe(e)):yi(t.replace("path://",""),e,n,"center")},Group:ph,Image:Fe,Text:md,Circle:yd,Sector:wd,Ring:bd,Polygon:Td,Polyline:Id,Rect:Cd,Line:kd,BezierCurve:Ad,Arc:Ld,IncrementalDisplayable:vi,CompoundPath:Pd,LinearGradient:Ed,RadialGradient:Nd,BoundingRect:Rt}),Hd=["textStyle","color"],Gd={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(Hd):null)},getFont:function(){return Xi({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return ie(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},jd=cc([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),Xd={getItemStyle:function(t,e){var n=jd(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},qd=d,Yd=mn();Ki.prototype={constructor:Ki,init:null,mergeOption:function(t){a(this.option,t,!0)},get:function(t,e){return null==t?this.option:Ji(this.option,this.parsePath(t),!e&&Qi(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&Qi(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,i=null==t?this.option:Ji(this.option,t=this.parsePath(t));return e=e||(n=Qi(this,t))&&n.getModel(t),new Ki(i,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(r(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Yd(this).getParent=t},isAnimationEnabled:function(){if(!xu.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Mn(Ki),Tn(Ki),qd(Ki,fc),qd(Ki,gc),qd(Ki,Gd),qd(Ki,Xd);var Ud=0,Zd=1e-4,$d=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Kd=P,Jd=/([&<>"'])/g,Qd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tf=["a","b","c","d","e","f","g"],ef=function(t,e){return"{"+t+(null==e?"":e)+"}"},nf=ue,rf=p,af=["left","right","top","bottom","width","height"],of=[["width","left","right"],["height","top","bottom"]],sf=(_(xr,"vertical"),_(xr,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),lf=mn(),uf=Ki.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){Ki.call(this,t,e,n,i),this.uid=tr("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Sr(t):{};a(t,e.getTheme().get(this.mainType)),a(t,this.getDefaultOption()),n&&br(t,i,n)},mergeOption:function(t,e){a(this.option,t,!0);var n=this.layoutMode;n&&br(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=lf(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var r={},o=e.length-1;o>=0;o--)r=a(r,e[o],!0);t.defaultOption=r}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});kn(uf,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,n){t=bn(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var a=bn(n).main;t.hasSubTypes(n)&&e[a]&&(r=e[a](i))}return r}}(uf),function(t,e){function n(t){var n={},a=[];return p(t,function(o){var s=i(n,o),l=r(s.originalDeps=e(o),t);s.entryCount=l.length,0===s.entryCount&&a.push(o),p(l,function(t){h(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);h(e.successor,t)<0&&e.successor.push(o)})}),{graph:n,noEntryList:a}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function r(t,e){var n=[];return p(t,function(t){h(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,i,r){function a(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var o=n(e),s=o.graph,l=o.noEntryList,u={};for(p(t,function(t){u[t]=!0});l.length;){var h=l.pop(),c=s[h],d=!!u[h];d&&(i.call(r,h,c.originalDeps.slice()),delete u[h]),p(c.successor,d?function(t){u[t]=!0,a(t)}:a)}p(u,function(){throw new Error("Circle dependency may exists")})}}}(uf,function(t){var e=[];return p(uf.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=g(e,function(t){return bn(t).main}),"dataset"!==t&&h(e,"dataset")<=0&&e.unshift("dataset"),e}),d(uf,sf);var hf="";"undefined"!=typeof navigator&&(hf=navigator.platform||"");var cf={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:hf.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},df=mn(),ff={clearColorPalette:function(){df(this).colorIdx=0,df(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=df(e=e||this),r=i.colorIdx||0,a=i.colorNameMap=i.colorNameMap||{};if(a.hasOwnProperty(t))return a[t];var o=ln(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?Tr(s,n):o;if((l=l||o)&&l.length){var u=l[r];return t&&(a[t]=u),i.colorIdx=(r+1)%l.length,u}}},pf={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",a),Cr(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Cr(a)&&(i.set("y",a),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Cr(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],a=r.findAxisModel("radiusAxis"),o=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",a),n.set("angle",o),Cr(a)&&(i.set("radius",a),e.firstCategoryDimIndex=0),Cr(o)&&(i.set("angle",o),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,a=r.getComponent("parallel",t.get("parallelIndex")),o=e.coordSysDims=a.dimensions.slice();p(a.parallelAxisIndex,function(t,a){var s=r.getComponent("parallelAxis",t),l=o[a];n.set(l,s),Cr(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=a)})}},gf="original",vf="arrayRows",mf="objectRows",yf="keyedColumns",_f="unknown",xf="typedArray",wf="column",bf="row";kr.seriesDataToSource=function(t){return new kr({data:t,sourceFormat:T(t)?xf:gf,fromDataset:!1})},Tn(kr);var Sf=mn(),Mf="\0_ec_inner",Tf=Ki.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new Ki(n),this._optionManager=i},setOption:function(t,e){O(!(Mf in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):Gr.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var a=n.getMediaOption(this,this._api);a.length&&p(a,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,i=[];Lr(this),p(t,function(t,n){null!=t&&(uf.hasClass(n)?n&&i.push(n):e[n]=null==e[n]?r(t):a(e[n],t,!0))}),uf.topologicalTravel(i,uf.getAllClassMainTypes(),function(i,r){var a=ln(t[i]),o=dn(n.get(i),a);fn(o),p(o,function(t,e){var n=t.option;S(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=Xr(i,n,t.exist))});var l=jr(n,r);e[i]=[],n.set(i,[]),p(o,function(t,r){var a=t.exist,o=t.option;if(O(S(o)||a,"Empty component definition"),o){var u=uf.getClass(i,t.keyInfo.subType,!0);if(a&&a instanceof u)a.name=t.keyInfo.name,a.mergeOption(o,this),a.optionUpdated(o,!1);else{var h=s({dependentModels:l,componentIndex:r},t.keyInfo);s(a=new u(o,this,this,h),h),a.init(o,this,this,h),a.optionUpdated(null,!0)}}else a.mergeOption({},this),a.optionUpdated({},!1);n.get(i)[r]=a,e[i][r]=a.option},this),"series"===i&&qr(this,n.get("series"))},this),this._seriesIndicesMap=R(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=r(this.option);return p(t,function(e,n){if(uf.hasClass(n)){for(var i=(e=ln(e)).length-1;i>=0;i--)gn(e[i])&&e.splice(i,1);t[n]=e}}),delete t[Mf],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,a=t.name,o=this._componentsMap.get(e);if(!o||!o.length)return[];if(null!=i)x(i)||(i=[i]),n=m(g(i,function(t){return o[t]}),function(t){return!!t});else if(null!=r){var s=x(r);n=m(o,function(t){return s&&h(r,t.id)>=0||!s&&t.id===r})}else if(null!=a){var l=x(a);n=m(o,function(t){return l&&h(a,t.name)>=0||!l&&t.name===a})}else n=o.slice();return Yr(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name";return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e);return function(e){return t.filter?m(e,t.filter):e}(Yr(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){p(t,function(t,r){e.call(n,i,t,r)})})):b(t)?p(i.get(t),e,n):S(t)&&p(this.findComponents(t),e,n)},getSeriesByName:function(t){return m(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return m(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){p(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){p(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){p(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return p(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){qr(this,m(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;qr(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),uf.topologicalTravel(n,uf.getAllClassMainTypes(),function(n,i){p(e.get(n),function(e){("series"!==n||!Wr(e,t))&&e.restoreData()})})}});d(Tf,ff);var If=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],Cf={};Zr.prototype={constructor:Zr,create:function(t,e){var n=[];p(Cf,function(i,r){var a=i.create(t,e);n=n.concat(a||[])}),this._coordinateSystems=n},update:function(t,e){p(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Zr.register=function(t,e){Cf[t]=e},Zr.get=function(t){return Cf[t]};var kf=p,Df=r,Af=g,Lf=a,Pf=/^(min|max)?(.+)$/;$r.prototype={constructor:$r,setOption:function(t,e){t&&p(ln(t.series),function(t){t&&t.data&&T(t.data)&&N(t.data)}),t=Df(t,!0);var n=this._optionBackup,i=Kr.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(ea(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=Af(e.timelineOptions,Df),this._mediaList=Af(e.mediaList,Df),this._mediaDefault=Df(e.mediaDefault),this._currentMediaIndices=[],Df(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=Df(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,a=[],o=[];if(!i.length&&!r)return o;for(var s=0,l=i.length;s<l;s++)Jr(i[s].query,e,n)&&a.push(s);return!a.length&&r&&(a=[-1]),a.length&&!ta(a,this._currentMediaIndices)&&(o=Af(a,function(t){return Df(-1===t?r.option:i[t].option)})),this._currentMediaIndices=a,o}};var Of=p,Ef=S,Nf=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],Bf=function(t,e){Of(la(t.series),function(t){Ef(t)&&sa(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),Of(n,function(e){Of(la(t[e]),function(t){t&&(aa(t,"axisLabel"),aa(t.axisPointer,"label"))})}),Of(la(t.parallel),function(t){var e=t&&t.parallelAxisDefault;aa(e,"axisLabel"),aa(e&&e.axisPointer,"label")}),Of(la(t.calendar),function(t){ia(t,"itemStyle"),aa(t,"dayLabel"),aa(t,"monthLabel"),aa(t,"yearLabel")}),Of(la(t.radar),function(t){aa(t,"name")}),Of(la(t.geo),function(t){Ef(t)&&(oa(t),Of(la(t.regions),function(t){oa(t)}))}),Of(la(t.timeline),function(t){oa(t),ia(t,"label"),ia(t,"itemStyle"),ia(t,"controlStyle",!0);var e=t.data;x(e)&&p(e,function(t){S(t)&&(ia(t,"label"),ia(t,"itemStyle"))})}),Of(la(t.toolbox),function(t){ia(t,"iconStyle"),Of(t.feature,function(t){ia(t,"iconStyle")})}),aa(ua(t.axisPointer),"label"),aa(ua(t.tooltip).axisPointer,"label")},zf=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],Rf=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],Ff=function(t,e){Bf(t,e),t.series=ln(t.series),p(t.series,function(t){if(S(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=ha(t,"pointer.color");null!=n&&ca(t,"itemStyle.normal.color",n)}da(t)}}),t.dataRange&&(t.visualMap=t.dataRange),p(Rf,function(e){var n=t[e];n&&(x(n)||(n=[n]),p(n,function(t){da(t)}))})},Vf=pa.prototype;Vf.pure=!1,Vf.persistent=!0,Vf.getSource=function(){return this._source};var Wf={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:ma},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:ga,getItem:va,appendData:ma},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;p(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:ga,getItem:va,appendData:ma},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},Hf={arrayRows:ya,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:ya,original:function(t,e,n,i){var r=hn(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:ya},Gf={arrayRows:_a,objectRows:function(t,e,n,i){return xa(t[e],this._dimensionInfos[e])},keyedColumns:_a,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&cn(t)&&(this.hasItemOption=!0),xa(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},jf=/\{@(.+?)\}/g,Xf={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),a=n.getName(t),o=n.getRawDataItem(t),s=n.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:a,dataIndex:r,data:o,dataType:e,value:i,color:s,marker:mr(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var a=this.getData(n),o=a.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=o.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?vr(l,s).replace(jf,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),wa(a,t,n)}):void 0},getRawValue:function(t,e){return wa(this.getData(e),t)},formatTooltip:function(){}},qf=Ma.prototype;qf.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var a=this.context;a.data=a.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var o,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),h=t&&t.modDataCount||0;s===u&&l===h||(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,o=Ia(this,r)),this._modBy=u,this._modDataCount=h;var c=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var d=this._dueIndex,f=Math.min(null!=c?this._dueIndex+c:1/0,this._dueEnd);if(!r&&(o||d<f)){var p=this._progress;if(x(p))for(var g=0;g<p.length;g++)Ta(this,p[g],d,f,u,h);else Ta(this,p,d,f,u,h)}this._dueIndex=f;var v=null!=this._settedOutputEnd?this._settedOutputEnd:f;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var Yf=function(){function t(){return i<n?i++:null}function e(){var t=i%o*r+Math.ceil(i/o),e=i>=n?null:t<a?t:i;return i++,e}var n,i,r,a,o,s={reset:function(l,u,h,c){i=l,n=u,r=h,a=c,o=Math.ceil(a/r),s.next=r>1&&a>0?e:t}};return s}();qf.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},qf.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},qf.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},qf.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},qf.getUpstream=function(){return this._upstream},qf.getDownstream=function(){return this._downstream},qf.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Uf=mn(),Zf=uf.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=Sa({count:Da,reset:Aa}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Pr(this);var r=this.getInitialData(t,n);Pa(r,this),this.dataTask.context.data=r,Uf(this).dataBeforeProcessed=r,Ca(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Sr(t):{},r=this.subType;uf.hasClass(r)&&(r+="Series"),a(t,e.getTheme().get(this.subType)),a(t,this.getDefaultOption()),un(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&br(t,i,n)},mergeOption:function(t,e){t=a(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&br(this.option,t,n),Pr(this);var i=this.getInitialData(t,e);Pa(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,Uf(this).dataBeforeProcessed=i,Ca(this)},fillDataTextStyle:function(t){if(t&&!T(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&un(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=Ea(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Uf(this).data},setData:function(t){var e=Ea(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Uf(this).data=t},getSource:function(){return Ar(this)},getRawData:function(){return Uf(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){function i(t){return gr(pr(t))}var r=this.getData(),a=r.mapDimension("defaultedTooltip",!0),o=a.length,s=this.getRawValue(t),l=x(s),u=r.getItemVisual(t,"color");S(u)&&u.colorStops&&(u=(u.colorStops[0]||{}).color),u=u||"transparent";var h=o>1||l&&!o?function(n){function i(t,n){var i=r.getDimensionInfo(n);if(i&&!1!==i.otherDims.tooltip){var a=i.type,l=mr({color:u,type:"subItem"}),h=(o?l+gr(i.displayName||"-")+": ":"")+gr("ordinal"===a?t+"":"time"===a?e?"":_r("yyyy/MM/dd hh:mm:ss",t):pr(t));h&&s.push(h)}}var o=v(n,function(t,e,n){var i=r.getDimensionInfo(n);return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),s=[];return a.length?p(a,function(e){i(wa(r,t,e),e)}):p(n,i),(o?"<br/>":"")+s.join(o?"<br/>":", ")}(s):i(o?wa(r,t,a[0]):l?s[0]:s),c=mr(u),d=r.getName(t),f=this.name;return pn(this)||(f=""),f=f?gr(f)+(e?": ":"<br/>"):"",e?c+f+h:f+c+(d?gr(d)+": "+h:h)},isAnimationEnabled:function(){if(xu.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=ff.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});d(Zf,Xf),d(Zf,ff);var $f=function(){this.group=new ph,this.uid=tr("viewComponent")};$f.prototype={constructor:$f,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}};var Kf=$f.prototype;Kf.updateView=Kf.updateLayout=Kf.updateVisual=function(t,e,n,i){},Mn($f),kn($f,{registerWhenExtend:!0});var Jf=function(){var t=mn();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,a=n.progressiveRender,o=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^o||a^s)&&"reset"}},Qf=mn(),tp=Jf();Na.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){za(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){za(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null};var ep=Na.prototype;ep.updateView=ep.updateLayout=ep.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},Mn(Na),kn(Na,{registerWhenExtend:!0}),Na.markUpdateMethod=function(t,e){Qf(t).updateMethod=e};var np={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},ip={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t))return"function"!=typeof r||r instanceof Od||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(i,!0);null!=n&&t.setItemVisual(e,"color",n)}:null}}},rp={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},ap=function(t,n){function i(t,e){if("string"!=typeof t)return t;var n=t;return p(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function r(t){var e=o.get(t);if(null==e){for(var n=t.split("."),i=rp.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}function a(t){return rp.series.typeNames[t]||"自定义图"}var o=n.getModel("aria");if(o.get("show"))if(o.get("description"))t.setAttribute("aria-label",o.get("description"));else{var s=0;n.eachSeries(function(t,e){++s},this);var l,u=o.get("data.maxCount")||10,h=o.get("series.maxCount")||10,c=Math.min(s,h);if(!(s<1)){var d=function(){var t=n.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();l=d?i(r("general.withTitle"),{title:d}):r("general.withoutTitle");var f=[];l+=i(r(s>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:s}),n.eachSeries(function(t,n){if(n<c){var o,l=t.get("name"),h="series."+(s>1?"multiple":"single")+".";o=i(o=r(l?h+"withName":h+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:a(t.subType)});var d=t.getData();e.data=d,d.count()>u?o+=i(r("data.partialData"),{displayCnt:u}):o+=r("data.allData");for(var p=[],g=0;g<d.count();g++)if(g<u){var v=d.getName(g),m=wa(d,g);p.push(i(r(v?"data.withName":"data.withoutName"),{name:v,value:m}))}o+=p.join(r("data.separator.middle"))+r("data.separator.end"),f.push(o)}}),l+=f.join(r("series.multiple.separator.middle"))+r("series.multiple.separator.end"),t.setAttribute("aria-label",l)}}},op=Math.PI,sp=Wa.prototype;sp.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},sp.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,a=i&&i.modDataCount;return{step:r,modBy:null!=a?Math.ceil(a/r):null,modDataCount:a}}},sp.getPipeline=function(t){return this._pipelineMap.get(t)},sp.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,a=t.get("large")&&i>=t.get("largeThreshold"),o="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:o,large:a}},sp.restorePipelines=function(t){var e=this,n=e._pipelineMap=R();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),Qa(e,t,t.dataTask)})},sp.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;p(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&Ga(this,i,r,e,n),i.overallReset&&ja(this,i,r,e,n)},this)},sp.prepareView=function(t,e,n,i){var r=t.renderTask,a=r.context;a.model=e,a.ecModel=n,a.api=i,r.__block=!t.incrementalPrepareRender,Qa(this,e,r)},sp.performDataProcessorTasks=function(t,e){Ha(this,this._dataProcessorHandlers,t,e,{block:!0})},sp.performVisualTasks=function(t,e,n){Ha(this,this._visualHandlers,t,e,n)},sp.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},sp.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var lp=sp.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},up=Ka(0);Wa.wrapStageHandler=function(t,e){return w(t)&&(t={overallReset:t,seriesType:to(t)}),t.uid=tr("stageHandler"),e&&(t.visualType=e),t};var hp,cp={},dp={};eo(cp,Tf),eo(dp,Ur),cp.eachSeriesByType=cp.eachRawSeriesByType=function(t){hp=t},cp.eachComponent=function(t){"series"===t.mainType&&t.subType&&(hp=t.subType)};var fp=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],pp={color:fp,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],fp]},gp=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],vp={color:gp,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:gp[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:gp},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};vp.categoryAxis.splitLine.show=!1,uf.extend({type:"dataset",defaultOption:{seriesLayoutBy:wf,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){Dr(this)}}),$f.extend({type:"dataset"});var mp=O,yp=p,_p=w,xp=S,wp=uf.parseClassType,bp={zrender:"4.0.4"},Sp=1e3,Mp=1e3,Tp=3e3,Ip={PROCESSOR:{FILTER:Sp,STATISTIC:5e3},VISUAL:{LAYOUT:Mp,GLOBAL:2e3,CHART:Tp,COMPONENT:4e3,BRUSH:5e3}},Cp="__flagInMainProcess",kp="__optionUpdated",Dp=/^[a-zA-Z0-9_]+$/;io.prototype.on=no("on"),io.prototype.off=no("off"),io.prototype.one=no("one"),d(io,Ru);var Ap=ro.prototype;Ap._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[kp]){var e=this[kp].silent;this[Cp]=!0,oo(this),Lp.update.call(this),this[Cp]=!1,this[kp]=!1,ho.call(this,e),co.call(this,e)}else if(t.unfinished){var n=1,i=this._model;this._api,t.unfinished=!1;do{var r=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),lo(this,i),t.performVisualTasks(i),yo(this,this._model,0,"remain"),n-=+new Date-r}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},Ap.getDom=function(){return this._dom},Ap.getZr=function(){return this._zr},Ap.setOption=function(t,e,n){var i;if(xp(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[Cp]=!0,!this._model||e){var r=new $r(this._api),a=this._theme,o=this._model=new Tf(null,null,a,r);o.scheduler=this._scheduler,o.init(null,null,a,r)}this._model.setOption(t,Bp),n?(this[kp]={silent:i},this[Cp]=!1):(oo(this),Lp.update.call(this),this._zr.flush(),this[kp]=!1,this[Cp]=!1,ho.call(this,i),co.call(this,i))},Ap.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},Ap.getModel=function(){return this._model},Ap.getOption=function(){return this._model&&this._model.getOption()},Ap.getWidth=function(){return this._zr.getWidth()},Ap.getHeight=function(){return this._zr.getHeight()},Ap.getDevicePixelRatio=function(){return this._zr.painter.dpr||e.devicePixelRatio||1},Ap.getRenderedCanvas=function(t){if(xu.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},Ap.getSvgDataUrl=function(){if(xu.svgSupported){var t=this._zr;return p(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},Ap.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;yp(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return yp(i,function(t){t.group.ignore=!1}),a},Ap.getConnectedDataURL=function(t){if(xu.canvasSupported){var e=this.group,n=Math.min,i=Math.max;if(Hp[e]){var a=1/0,o=1/0,s=-1/0,l=-1/0,u=[],h=t&&t.pixelRatio||1;p(Wp,function(h,c){if(h.group===e){var d=h.getRenderedCanvas(r(t)),f=h.getDom().getBoundingClientRect();a=n(f.left,a),o=n(f.top,o),s=i(f.right,s),l=i(f.bottom,l),u.push({dom:d,left:f.left,top:f.top})}});var c=(s*=h)-(a*=h),d=(l*=h)-(o*=h),f=Lu();f.width=c,f.height=d;var g=sn(f);return yp(u,function(t){var e=new Fe({style:{x:t.left*h-a,y:t.top*h-o,image:t.dom}});g.add(e)}),g.refreshImmediately(),f.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},Ap.convertToPixel=_(ao,"convertToPixel"),Ap.convertFromPixel=_(ao,"convertFromPixel"),Ap.containPixel=function(t,e){var n;return t=yn(this._model,t),p(t,function(t,i){i.indexOf("Models")>=0&&p(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var a=this._chartsMap[t.__viewId];a&&a.containPoint&&(n|=a.containPoint(e,t))}},this)},this),!!n},Ap.getVisual=function(t,e){var n=(t=yn(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},Ap.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},Ap.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var Lp={prepareAndUpdate:function(t){oo(this),Lp.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,a=this._scheduler;if(e){a.restoreData(e,t),a.performSeriesTasks(e),r.create(e,n),a.performDataProcessorTasks(e,t),lo(this,e),r.update(e,n),go(e),a.performVisualTasks(e,t),vo(this,e,n,t);var o=e.get("backgroundColor")||"transparent";if(xu.canvasSupported)i.setBackgroundColor(o);else{var s=wt(o);o=Mt(s,"rgb"),0===s[3]&&(o="transparent")}_o(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(a,o){var s=n.getViewOfComponentModel(o);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var a=R();e.eachSeries(function(r){var o=n._chartsMap[r.__viewId];if(o.updateTransform){var s=o.updateTransform(r,e,i,t);s&&s.update&&a.set(r.uid,1)}else a.set(r.uid,1)}),go(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:a}),yo(n,e,0,t,a),_o(e,this._api)}},updateView:function(t){var e=this._model;e&&(Na.markUpdateMethod(t,"updateView"),go(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),vo(this,this._model,this._api,t),_o(e,this._api))},updateVisual:function(t){Lp.update.call(this,t)},updateLayout:function(t){Lp.update.call(this,t)}};Ap.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[Cp]=!0,n&&oo(this),Lp.update.call(this),this[Cp]=!1,ho.call(this,i),co.call(this,i)}},Ap.showLoading=function(t,e){if(xp(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),Vp[t]){var n=Vp[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},Ap.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},Ap.makeActionFromEvent=function(t){var e=s({},t);return e.type=Ep[t.type],e},Ap.dispatchAction=function(t,e){xp(e)||(e={silent:!!e}),Op[t.type]&&this._model&&(this[Cp]?this._pendingActions.push(t):(uo.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&xu.browser.weChat&&this._throttledZrFlush(),ho.call(this,e.silent),co.call(this,e.silent)))},Ap.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},Ap.on=no("on"),Ap.off=no("off"),Ap.one=no("one");var Pp=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];Ap._initEvents=function(){yp(Pp,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var a=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=a&&a.getDataParams(r.dataIndex,r.dataType)||{}}else r&&r.eventData&&(n=s({},r.eventData));n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),yp(Ep,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},Ap.isDisposed=function(){return this._disposed},Ap.clear=function(){this.setOption({series:[]},!0)},Ap.dispose=function(){if(!this._disposed){this._disposed=!0,xn(this.getDom(),Xp,"");var t=this._api,e=this._model;yp(this._componentsViews,function(n){n.dispose(e,t)}),yp(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete Wp[this.id]}},d(ro,Ru);var Op={},Ep={},Np=[],Bp=[],zp=[],Rp=[],Fp={},Vp={},Wp={},Hp={},Gp=new Date-0,jp=new Date-0,Xp="_echarts_instance_",qp={},Yp=To;Po(2e3,ip),ko(Ff),Do(5e3,function(t){var e=R();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),a={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(a)}}),e.each(fa)}),Eo("default",function(t,e){l(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new Cd({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new Ld({shape:{startAngle:-op/2,endAngle:-op/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new Cd({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*op/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*op/2}).delay(300).start("circularInOut");var a=new ph;return a.add(i),a.add(r),a.add(n),a.resize=function(){var e=t.getWidth()/2,a=t.getHeight()/2;i.setShape({cx:e,cy:a});var o=i.shape.r;r.setShape({x:e-o,y:a-o,width:2*o,height:2*o}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},a.resize(),a}),Ao({type:"highlight",event:"highlight",update:"highlight"},F),Ao({type:"downplay",event:"downplay",update:"downplay"},F),Co("light",pp),Co("dark",vp);var Up={};Fo.prototype={constructor:Fo,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(Vo(t,{},i,"_oldKeyGetter",this),Vo(e,n,r,"_newKeyGetter",this),a=0;a<t.length;a++)null!=(s=n[o=i[a]])?((u=s.length)?(1===u&&(n[o]=null),s=s.unshift()):n[o]=null,this._update&&this._update(s,a)):this._remove&&this._remove(a);for(var a=0;a<r.length;a++){var o=r[a];if(n.hasOwnProperty(o)){var s=n[o];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var Zp=R(["tooltip","label","itemName","itemId","seriesName"]),$p=S,Kp="e\0\0",Jp={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},Qp="undefined"==typeof Uint32Array?Array:Uint32Array,tg="undefined"==typeof Uint16Array?Array:Uint16Array,eg=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],ng=["_extent","_approximateExtent","_rawExtent"],ig=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},a=0;a<t.length;a++){var o=t[a];b(o)&&(o={name:o});var s=o.name;o.type=o.type||"float",o.coordDim||(o.coordDim=s,o.coordDimIndex=0),o.otherDims=o.otherDims||{},i.push(s),n[s]=o,o.index=a,o.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=Wo(this),this._invertedIndicesMap=r,this._calculationInfo={}},rg=ig.prototype;rg.type="list",rg.hasItemOption=!0,rg.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},rg.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},rg.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},rg.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},rg.initData=function(t,e,n){(kr.isInstance(t)||f(t))&&(t=new pa(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=Gf[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},rg.getProvider=function(){return this._rawData},rg.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},rg._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,a=this._storage,o=this.dimensions,s=o.length,l=this._dimensionInfos,u=this._nameList,h=this._idList,c=this._rawExtent,d=this._nameRepeatCount={},f=this._chunkCount,p=f-1,g=0;g<s;g++){c[I=o[g]]||(c[I]=[1/0,-1/0]);var v=l[I];0===v.otherDims.itemName&&(n=this._nameDimIdx=g),0===v.otherDims.itemId&&(this._idDimIdx=g);var m=Jp[v.type];a[I]||(a[I]=[]);var y=a[I][p];if(y&&y.length<i){for(var _=new m(Math.min(e-p*i,i)),x=0;x<y.length;x++)_[x]=y[x];a[I][p]=_}for(T=f*i;T<e;T+=i)a[I].push(new m(Math.min(e-T,i)));this._chunkCount=a[I].length}for(var w=new Array(s),b=t;b<e;b++){w=r.getItem(b,w);for(var S=Math.floor(b/i),M=b%i,T=0;T<s;T++){var I=o[T],C=a[I][S],k=this._dimValueGetter(w,I,b,T);C[M]=k;var D=c[I];k<D[0]&&(D[0]=k),k>D[1]&&(D[1]=k)}if(!r.pure){var A=u[b];if(w&&null==A)if(null!=w.name)u[b]=A=w.name;else if(null!=n){var L=o[n],P=a[L][S];if(P){A=P[M];var O=l[L].ordinalMeta;O&&O.categories.length&&(A=O.categories[A])}}var E=null==w?null:w.id;null==E&&null!=A&&(d[A]=d[A]||0,E=A,d[A]>0&&(E+="__ec__"+d[A]),d[A]++),null!=E&&(h[b]=E)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},Yo(this)}},rg.count=function(){return this._count},rg.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array)for(i=new e(n),r=0;r<n;r++)i[r]=t[r];else i=new e(t.buffer,0,n)}else for(var i=new(e=jo(this))(this.count()),r=0;r<i.length;r++)i[r]=r;return i},rg.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},rg.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},rg._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},rg.getValues=function(t,e){var n=[];x(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},rg.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},rg.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var n,i=this.count();if(!this._indices)return this._rawExtent[t].slice();if(n=this._extent[t])return n.slice();for(var r=(n=e)[0],a=n[1],o=0;o<i;o++){var s=this._getFast(t,this.getRawIndex(o));s<r&&(r=s),s>a&&(a=s)}return n=[r,a],this._extent[t]=n,n},rg.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},rg.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},rg.getCalculationInfo=function(t){return this._calculationInfo[t]},rg.setCalculationInfo=function(t,e){$p(t)?s(this._calculationInfo,t):this._calculationInfo[t]=e},rg.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},rg.getMedian=function(t){var e=[];this.each(t,function(t,n){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},rg.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},rg.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},rg.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var a=(i+r)/2|0;if(e[a]<t)i=a+1;else{if(!(e[a]>t))return a;r=a-1}}return-1},rg.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,a=-1,o=0,s=this.count();o<s;o++){var l=e-this.get(t,o),u=Math.abs(l);l<=n&&u<=r&&((u<r||l>=0&&a<0)&&(r=u,a=l,i.length=0),i.push(o))}return i},rg.getRawIndex=Zo,rg.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},rg.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||Uo(this,this._nameDimIdx,e)||""},rg.getId=function(t){return Ko(this,this.getRawIndex(t))},rg.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=g(Jo(t),this.getDimension,this)).length,a=0;a<this.count();a++)switch(r){case 0:e.call(n,a);break;case 1:e.call(n,this.get(t[0],a),a);break;case 2:e.call(n,this.get(t[0],a),this.get(t[1],a),a);break;default:for(var o=0,s=[];o<r;o++)s[o]=this.get(t[o],a);s[o]=a,e.apply(n,s)}}},rg.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=g(Jo(t),this.getDimension,this);for(var r=this.count(),a=new(jo(this))(r),o=[],s=t.length,l=0,u=t[0],h=0;h<r;h++){var c,d=this.getRawIndex(h);if(0===s)c=e.call(n,h);else if(1===s){var f=this._getFast(u,d);c=e.call(n,f,h)}else{for(var p=0;p<s;p++)o[p]=this._getFast(u,d);o[p]=h,c=e.apply(n,o)}c&&(a[l++]=d)}return l<r&&(this._indices=a),this._count=l,this._extent={},this.getRawIndex=this._indices?$o:Zo,this}},rg.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),a=new(jo(this))(r),o=0,s=e[0],l=t[s][0],u=t[s][1],h=!1;if(!this._indices){var c=0;if(1===i){for(var d=this._storage[e[0]],f=0;f<this._chunkCount;f++)for(var p=d[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),v=0;v<g;v++)((w=p[v])>=l&&w<=u||isNaN(w))&&(a[o++]=c),c++;h=!0}else if(2===i){d=this._storage[s];var m=this._storage[e[1]],y=t[e[1]][0],_=t[e[1]][1];for(f=0;f<this._chunkCount;f++){p=d[f];var x=m[f];for(g=Math.min(this._count-f*this._chunkSize,this._chunkSize),v=0;v<g;v++){var w=p[v],b=x[v];(w>=l&&w<=u||isNaN(w))&&(b>=y&&b<=_||isNaN(b))&&(a[o++]=c),c++}}h=!0}}if(!h)if(1===i)for(v=0;v<r;v++)M=this.getRawIndex(v),((w=this._getFast(s,M))>=l&&w<=u||isNaN(w))&&(a[o++]=M);else for(v=0;v<r;v++){var S=!0,M=this.getRawIndex(v);for(f=0;f<i;f++){var T=e[f];((w=this._getFast(n,M))<t[T][0]||w>t[T][1])&&(S=!1)}S&&(a[o++]=this.getRawIndex(v))}return o<r&&(this._indices=a),this._count=o,this._extent={},this.getRawIndex=this._indices?$o:Zo,this}}},rg.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},rg.map=function(t,e,n,i){n=n||i||this;var r=Qo(this,t=g(Jo(t),this.getDimension,this));r._indices=this._indices,r.getRawIndex=r._indices?$o:Zo;for(var a=r._storage,o=[],s=this._chunkSize,l=t.length,u=this.count(),h=[],c=r._rawExtent,d=0;d<u;d++){for(var f=0;f<l;f++)h[f]=this.get(t[f],d);h[l]=d;var p=e&&e.apply(n,h);if(null!=p){"object"!=typeof p&&(o[0]=p,p=o);for(var v=this.getRawIndex(d),m=Math.floor(v/s),y=v%s,_=0;_<p.length;_++){var x=t[_],w=p[_],b=c[x],S=a[x];S&&(S[m][y]=w),w<b[0]&&(b[0]=w),w>b[1]&&(b[1]=w)}}}return r},rg.downSample=function(t,e,n,i){for(var r=Qo(this,[t]),a=r._storage,o=[],s=Math.floor(1/e),l=a[t],u=this.count(),h=this._chunkSize,c=r._rawExtent[t],d=new(jo(this))(u),f=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,o.length=s);for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/h),y=v%h;o[g]=l[m][y]}var _=n(o),x=this.getRawIndex(Math.min(p+i(o,_)||0,u-1)),w=x%h;l[Math.floor(x/h)][w]=_,_<c[0]&&(c[0]=_),_>c[1]&&(c[1]=_),d[f++]=x}return r._count=f,r._indices=d,r.getRawIndex=$o,r},rg.getItemModel=function(t){var e=this.hostModel;return new Ki(this.getRawDataItem(t),e,e&&e.ecModel)},rg.diff=function(t){var e=this;return new Fo(t?t.getIndices():[],this.getIndices(),function(e){return Ko(t,e)},function(t){return Ko(e,t)})},rg.getVisual=function(t){var e=this._visual;return e&&e[t]},rg.setVisual=function(t,e){if($p(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},rg.setLayout=function(t,e){if($p(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},rg.getLayout=function(t){return this._layout[t]},rg.getItemLayout=function(t){return this._itemLayouts[t]},rg.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?s(this._itemLayouts[t]||{},e):e},rg.clearItemLayouts=function(){this._itemLayouts.length=0},rg.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},rg.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,$p(e))for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a],r[a]=!0);else i[e]=n,r[e]=!0},rg.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var ag=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};rg.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(ag,e)),this._graphicEls[t]=e},rg.getItemGraphicEl=function(t){return this._graphicEls[t]},rg.eachItemGraphicEl=function(t,e){p(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},rg.cloneShallow=function(t){if(!t){var e=g(this.dimensions,this.getDimensionInfo,this);t=new ig(e,this.hostModel)}if(t._storage=this._storage,qo(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?$o:Zo,t},rg.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(L(arguments)))})},rg.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],rg.CHANGABLE_METHODS=["filterSelf","selectRange"];var og=function(t,e){return e=e||{},ns(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Zf.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return ls(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var sg=mi({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i+a),t.lineTo(n-r,i+a),t.closePath()}}),lg=mi({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i),t.lineTo(n,i+a),t.lineTo(n-r,i),t.closePath()}}),ug=mi({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,a=Math.max(r,e.height),o=r/2,s=o*o/(a-o),l=i-a+o+s,u=Math.asin(s/o),h=Math.cos(u)*o,c=Math.sin(u),d=Math.cos(u),f=.6*o,p=.7*o;t.moveTo(n-h,l+s),t.arc(n,l,o,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+h-c*f,l+s+d*f,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-h+c*f,l+s+d*f,n-h,l+s),t.closePath()}}),hg=mi({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,a=e.y,o=i/3*2;t.moveTo(r,a),t.lineTo(r+o,a+n),t.lineTo(r,a+n/4*3),t.lineTo(r-o,a+n),t.lineTo(r,a),t.closePath()}}),cg={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var a=Math.min(n,i);r.x=t,r.y=e,r.width=a,r.height=a},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},dg={};p({line:kd,rect:Cd,roundRect:Cd,square:Cd,circle:yd,diamond:lg,pin:ug,arrow:hg,triangle:sg},function(t,e){dg[e]=new t});var fg=mi({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=dg[i];"none"!==e.symbolType&&(r||(r=dg[i="rect"]),cg[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),pg=ps.prototype,gg=ps.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};pg._createSymbol=function(t,e,n,i,r){this.removeAll();var a=ds(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);a.attr({z2:100,culling:!0,scale:gs(i)}),a.drift=vs,this._symbolType=t,this.add(a)},pg.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},pg.getSymbolPath=function(){return this.childAt(0)},pg.getScale=function(){return this.childAt(0).scale},pg.highlight=function(){this.childAt(0).trigger("emphasis")},pg.downplay=function(){this.childAt(0).trigger("normal")},pg.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},pg.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},pg.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,a=gg(t,e),o=i!==this._symbolType;if(o){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,a,s)}else(l=this.childAt(0)).silent=!1,Yi(l,{scale:gs(a)},r,e);if(this._updateCommon(t,e,a,n),o){var l=this.childAt(0),u=n&&n.fadeIn,h={scale:l.scale.slice()};u&&(h.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),Ui(l,h,r,e)}this._seriesModel=r};var vg=["itemStyle"],mg=["emphasis","itemStyle"],yg=["label"],_g=["emphasis","label"];pg._updateCommon=function(t,e,n,i){var r=this.childAt(0),a=t.hostModel,o=t.getItemVisual(e,"color");"image"!==r.type&&r.useStyle({strokeNoScale:!0});var l=i&&i.itemStyle,u=i&&i.hoverItemStyle,h=i&&i.symbolRotate,c=i&&i.symbolOffset,d=i&&i.labelModel,f=i&&i.hoverLabelModel,p=i&&i.hoverAnimation,g=i&&i.cursorStyle;if(!i||t.hasItemOption){var v=i&&i.itemModel?i.itemModel:t.getItemModel(e);l=v.getModel(vg).getItemStyle(["color"]),u=v.getModel(mg).getItemStyle(),h=v.getShallow("symbolRotate"),c=v.getShallow("symbolOffset"),d=v.getModel(yg),f=v.getModel(_g),p=v.getShallow("hoverAnimation"),g=v.getShallow("cursor")}else u=s({},u);var m=r.style;r.attr("rotation",(h||0)*Math.PI/180||0),c&&r.attr("position",[ir(c[0],n[0]),ir(c[1],n[1])]),g&&r.attr("cursor",g),r.setColor(o,i&&i.symbolInnerColor),r.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(m.opacity=y);var _=t.getItemVisual(e,"liftZ"),x=r.__z2Origin;null!=_?null==x&&(r.__z2Origin=r.z2,r.z2+=_):null!=x&&(r.z2=x,r.__z2Origin=null);var w=i&&i.useNameLabel;zi(m,u,d,f,{labelFetcher:a,labelDataIndex:e,defaultText:function(e,n){return w?t.getName(e):fs(t,e)},isRectText:!0,autoColor:o}),r.off("mouseover").off("mouseout").off("emphasis").off("normal"),r.hoverStyle=u,Bi(r);var b=gs(n);if(p&&a.isAnimationEnabled()){var S=function(){if(!this.incremental){var t=b[1]/b[0];this.animateTo({scale:[Math.max(1.1*b[0],b[0]+3),Math.max(1.1*b[1],b[1]+3*t)]},400,"elasticOut")}},M=function(){this.incremental||this.animateTo({scale:b},400,"elasticOut")};r.on("mouseover",S).on("mouseout",M).on("emphasis",S).on("normal",M)}},pg.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),Yi(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},c(ps,ph);var xg=ms.prototype;xg.updateData=function(t,e){e=_s(e);var n=this.group,i=t.hostModel,r=this._data,a=this._symbolCtor,o=xs(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(ys(t,r,i,e)){var s=new a(t,i,o);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),h=t.getItemLayout(s);ys(t,h,s,e)?(u?(u.updateData(t,s,o),Yi(u,{position:h},i)):(u=new a(t,s)).attr("position",h),n.add(u),t.setItemGraphicEl(s,u)):n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},xg.isPersistent=function(){return!0},xg.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},xg.incrementalPrepareUpdate=function(t){this._seriesScope=xs(t),this._data=null,this.group.removeAll()},xg.incrementalUpdate=function(t,e,n){n=_s(n);for(var i=t.start;i<t.end;i++){var r=e.getItemLayout(i);if(ys(e,r,i,n)){var a=new this._symbolCtor(e,i,this._seriesScope);a.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),a.attr("position",r),this.group.add(a),e.setItemGraphicEl(i,a)}}},xg.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var wg=function(t,e,n,i,r,a,o,s){for(var l=Ms(t,e),u=[],h=[],c=[],d=[],f=[],p=[],g=[],v=ws(r,e,o),m=ws(a,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var w=t.getItemLayout(_.idx),b=e.getItemLayout(_.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),h.push(b),c.push(n[_.idx]),d.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":S=_.idx,u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),h.push(e.getItemLayout(S).slice()),c.push(Ss(v,r,e,S)),d.push(i[S]),g.push(e.getRawIndex(S));break;case"-":var S=_.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),h.push(a.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),c.push(n[S]),d.push(Ss(m,a,t,S)),g.push(M)):x=!1}x&&(f.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var T=[],I=[],C=[],k=[],D=[];for(y=0;y<p.length;y++)S=p[y],T[y]=u[S],I[y]=h[S],C[y]=c[S],k[y]=d[S],D[y]=f[S];return{current:T,next:I,stackedOnCurrent:C,stackedOnNext:k,status:D}},bg=$,Sg=K,Mg=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},Tg=function(t,e){return t[0]=e[0],t[1]=e[1],t},Ig=[],Cg=[],kg=[],Dg=si.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:xd(si.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,a=Ds(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Ts(n[r-1]);r--);for(;i<r&&Ts(n[i]);i++);}for(;i<r;)i+=Is(t,n,i,r,r,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Ag=si.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:xd(si.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,a=n.length,o=e.smoothMonotone,s=Ds(n,e.smoothConstraint),l=Ds(i,e.smoothConstraint);if(e.connectNulls){for(;a>0&&Ts(n[a-1]);a--);for(;r<a&&Ts(n[r]);r++);}for(;r<a;){var u=Is(t,n,r,a,a,1,s.min,s.max,e.smooth,o,e.connectNulls);Is(t,i,r+u-1,u,a,-1,l.min,l.max,e.stackedOnSmooth,o,e.connectNulls),r+=u+1,t.closePath()}}});Na.extend({type:"line",init:function(){var t=new ph,e=new ms;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,a=t.getData(),o=t.getModel("lineStyle"),s=t.getModel("areaStyle"),u=a.mapArray(a.getItemLayout),h="polar"===i.type,c=this._coordSys,d=this._symbolDraw,f=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!s.isEmpty(),y=s.get("origin"),_=Os(i,a,ws(i,a,y)),x=t.get("showSymbol"),w=x&&!h&&Fs(t,a,i),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),b.setItemGraphicEl(e,null))}),x||d.remove(),r.add(g);var S=!h&&t.get("step");f&&c.type===i.type&&S===this._step?(m&&!p?p=this._newPolygon(u,_,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(Bs(i,!1,!1,t)),x&&d.updateData(a,{isIgnore:w,clipShape:Bs(i,!1,!0,t)}),a.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),As(this._stackedOnPoints,_)&&As(this._points,u)||(v?this._updateAnimation(a,_,i,n,S,y):(S&&(u=zs(u,i,S),_=zs(_,i,S)),f.setShape({points:u}),p&&p.setShape({points:u,stackedOnPoints:_})))):(x&&d.updateData(a,{isIgnore:w,clipShape:Bs(i,!1,!0,t)}),S&&(u=zs(u,i,S),_=zs(_,i,S)),f=this._newPolyline(u,i,v),m&&(p=this._newPolygon(u,_,i,v)),g.setClipPath(Bs(i,!0,!1,t)));var M=Rs(a,i)||a.getVisual("color");f.useStyle(l(o.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var T=t.get("smooth");if(T=Ls(t.get("smooth")),f.setShape({smooth:T,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var I=a.getCalculationInfo("stackedOnSeries"),C=0;p.useStyle(l(s.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),I&&(C=Ls(I.get("smooth"))),p.setShape({smooth:T,stackedOnSmooth:C,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=i,this._stackedOnPoints=_,this._points=u,this._step=S,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),a=vn(r,i);if(!(a instanceof Array)&&null!=a&&a>=0){var o=r.getItemGraphicEl(a);if(!o){var s=r.getItemLayout(a);if(!s)return;(o=new ps(r,a)).position=s,o.setZ(t.get("zlevel"),t.get("z")),o.ignore=isNaN(s[0])||isNaN(s[1]),o.__temp=!0,r.setItemGraphicEl(a,o),o.stopSymbolAnimation(!0),this.group.add(o)}o.highlight()}else Na.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),a=vn(r,i);if(null!=a&&a>=0){var o=r.getItemGraphicEl(a);o&&(o.__temp?(r.setItemGraphicEl(a,null),this.group.remove(o)):o.downplay())}else Na.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new Dg({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new Ag({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,a){var o=this._polyline,s=this._polygon,l=t.hostModel,u=wg(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,a),h=u.current,c=u.stackedOnCurrent,d=u.next,f=u.stackedOnNext;r&&(h=zs(u.current,n,r),c=zs(u.stackedOnCurrent,n,r),d=zs(u.next,n,r),f=zs(u.stackedOnNext,n,r)),o.shape.__points=u.current,o.shape.points=h,Yi(o,{shape:{points:d}},l),s&&(s.setShape({points:h,stackedOnPoints:c}),Yi(s,{shape:{points:d,stackedOnPoints:f}},l));for(var p=[],g=u.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}o.animators&&o.animators.length&&o.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",o.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var Lg={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},Pg=function(t,e){return Math.round(t.length/2)};Ws.prototype.parse=function(t){return t},Ws.prototype.getSetting=function(t){return this._setting[t]},Ws.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Ws.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Ws.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Ws.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Ws.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},Ws.prototype.getExtent=function(){return this._extent.slice()},Ws.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},Ws.prototype.isBlank=function(){return this._isBlank},Ws.prototype.setBlank=function(t){this._isBlank=t},Ws.prototype.getLabel=null,Mn(Ws),kn(Ws,{registerWhenExtend:!0}),Hs.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&g(n,js);return new Hs({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var Og=Hs.prototype;Og.getOrdinal=function(t){return Gs(this).get(t)},Og.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Gs(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var Eg=Ws.prototype,Ng=Ws.extend({type:"ordinal",init:function(t,e){t&&!x(t)||(t=new Hs({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),Eg.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return Eg.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(Eg.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:F,niceExtent:F});Ng.create=function(){return new Ng};var Bg=rr,zg=rr,Rg=Ws.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),Rg.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=qs(t)},getTicks:function(){return Zs(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=ar(t)||0:"auto"===n&&(n=this._intervalPrecision),t=zg(t,n,!0),pr(t)},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){r<0&&(r=-r,i.reverse());var a=Xs(i,t,e,n);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=zg(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=zg(Math.ceil(e[1]/r)*r))}});Rg.create=function(){return new Rg};var Fg="__ec_stack_",Vg="undefined"!=typeof Float32Array?Float32Array:Array,Wg={seriesType:"bar",plan:Jf(),reset:function(t){if(nl(t)&&il(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),a=e.mapDimension(r.dim),o=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,u=el(Qs([t]),i,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var h,c=new Vg(2*t.count),d=[],f=[],p=0;null!=(h=t.next());)f[l]=e.get(a,h),f[1-l]=e.get(o,h),d=n.dataToPoint(f,null,d),c[p++]=d[0],c[p++]=d[1];e.setLayout({largePoints:c,barWidth:u,valueAxisStart:rl(i,r,!1),valueAxisHorizontal:s})}}}}},Hg=Rg.prototype,Gg=Math.ceil,jg=Math.floor,Xg=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n},qg=Rg.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return _r(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=rr(jg(e[0]/i)*i)),t.fixMax||(e[1]=rr(Gg(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],a=r/t;null!=e&&a<e&&(a=e),null!=n&&a>n&&(a=n);var o=Yg.length,s=Xg(Yg,a,0,o),l=Yg[Math.min(s,o-1)],u=l[1];"year"===l[0]&&(u*=fr(r/u/t,!0));var h=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,c=[Math.round(Gg((i[0]-h)/u)*u+h),Math.round(jg((i[1]-h)/u)*u+h)];Us(c,i),this._stepLvl=l,this._interval=u,this._niceExtent=c},parse:function(t){return+hr(t)}});p(["contain","normalize"],function(t){qg.prototype[t]=function(e){return Hg[t].call(this,this.parse(e))}});var Yg=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];qg.create=function(t){return new qg({useUTC:t.ecModel.get("useUTC")})};var Ug=Ws.prototype,Zg=Rg.prototype,$g=ar,Kg=rr,Jg=Math.floor,Qg=Math.ceil,tv=Math.pow,ev=Math.log,nv=Ws.extend({type:"log",base:10,$constructor:function(){Ws.apply(this,arguments),this._originalScale=new Rg},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return g(Zg.getTicks.call(this),function(i){var r=rr(tv(this.base,i));return r=i===e[0]&&t.__fixMin?al(r,n[0]):r,i===e[1]&&t.__fixMax?al(r,n[1]):r},this)},getLabel:Zg.getLabel,scale:function(t){return t=Ug.scale.call(this,t),tv(this.base,t)},setExtent:function(t,e){var n=this.base;t=ev(t)/ev(n),e=ev(e)/ev(n),Zg.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=Ug.getExtent.call(this);e[0]=tv(t,e[0]),e[1]=tv(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=al(e[0],i[0])),n.__fixMax&&(e[1]=al(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=ev(t[0])/ev(e),t[1]=ev(t[1])/ev(e),Ug.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var i=cr(n);for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var r=[rr(Qg(e[0]/i)*i),rr(Jg(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){Zg.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});p(["contain","normalize"],function(t){nv.prototype[t]=function(e){return e=ev(e)/ev(this.base),Ug[t].call(this,e)}}),nv.create=function(){return new nv};var iv=function(t){this._axes={},this._dimList=[],this.name=t||""};iv.prototype={constructor:iv,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return g(this._dimList,gl,this)},getAxesByScale:function(t){return t=t.toLowerCase(),m(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var a=n[r],o=this._axes[a];i[a]=o[e](t[a])}return i}},vl.prototype={constructor:vl,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),a=i.getExtent(),o=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(r[0],r[1]),o),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},c(vl,iv);var rv=mn(),av=[0,1],ov=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};ov.prototype={constructor:ov,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return or(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&Pl(n=n.slice(),i.count()),nr(t,av,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&Pl(n=n.slice(),i.count());var r=nr(t,n,av,e);return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=yl(this,e),i=g(n.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return Ol(this,i,n.tickCategoryInterval,r,t.clamp),i},getViewLabels:function(){return ml(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return Cl(this)}};var sv=function(t,e,n,i,r){ov.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};sv.prototype={constructor:sv,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},c(sv,ov);var lv={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},uv={};uv.categoryAxis=a({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},lv),uv.valueAxis=a({boundaryGap:[0,0],splitNumber:5},lv),uv.timeAxis=l({scale:!0,min:"dataMin",max:"dataMax"},uv.valueAxis),uv.logAxis=l({scale:!0,logBase:10},uv.valueAxis);var hv=["value","category","time","log"],cv=function(t,e,n,i){p(hv,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,i){var o=this.layoutMode,s=o?Sr(e):{};a(e,i.getTheme().get(r+"Axis")),a(e,this.getDefaultOption()),e.type=n(t,e),o&&br(e,s,o)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=Hs.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:o([{},uv[r+"Axis"],i],!0)})}),uf.registerSubTypeDefaulter(t+"Axis",_(n,t))},dv={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!C(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!C(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:F,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},fv=uf.extend({type:"cartesian2dAxis",axis:null,init:function(){fv.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){fv.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){fv.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});a(fv.prototype,dv);var pv={offset:0};cv("x",fv,El,pv),cv("y",fv,El,pv),uf.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var gv=Bl.prototype;gv.type="grid",gv.axisPointerEnabled=!0,gv.getRect=function(){return this._rect},gv.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),p(n.x,function(t){ll(t.scale,t.model)}),p(n.y,function(t){ll(t.scale,t.model)}),p(n.x,function(t){zl(n,"y",t)}),p(n.y,function(t){zl(n,"x",t)}),this.resize(this.model,e)},gv.resize=function(t,e,n){function i(){p(a,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),Fl(t,e?r.x:r.y)})}var r=wr(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var a=this._axesList;i(),!n&&t.get("containLabel")&&(p(a,function(t){if(!t.model.get("axisLabel.inside")){var e=fl(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},gv.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},gv.getAxes=function(){return this._axesList.slice()},gv.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}S(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},gv.getCartesians=function(){return this._coordsList.slice()},gv.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},gv.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},gv._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,a=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],o=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;return r?h(l,n=r.coordinateSystem)<0&&(n=null):a&&o?n=this.getCartesian(a.componentIndex,o.componentIndex):a?i=this.getAxis("x",a.componentIndex):o?i=this.getAxis("y",o.componentIndex):s&&s.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},gv.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},gv._initCartesian=function(t,e,n){function i(n){return function(i,s){if(Nl(i,t,e)){var l=i.get("position");"x"===n?"top"!==l&&"bottom"!==l&&r[l="bottom"]&&(l="top"===l?"bottom":"top"):"left"!==l&&"right"!==l&&r[l="left"]&&(l="left"===l?"right":"left"),r[l]=!0;var u=new sv(n,ul(i),[0,0],i.get("type"),l),h="category"===u.type;u.onBand=h&&i.get("boundaryGap"),u.inverse=i.get("inverse"),i.axis=u,u.model=i,u.grid=this,u.index=s,this._axesList.push(u),a[n][s]=u,o[n]++}}}var r={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},o={x:0,y:0};if(e.eachComponent("xAxis",i("x"),this),e.eachComponent("yAxis",i("y"),this),!o.x||!o.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=a,p(a.x,function(e,n){p(a.y,function(i,r){var a="x"+n+"y"+r,o=new vl(a);o.grid=this,o.model=t,this._coordsMap[a]=o,this._coordsList.push(o),o.addAxis(e),o.addAxis(i)},this)},this)},gv._updateScale=function(t,e){function n(t,e,n){p(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,ss(t,n))})}p(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(Wl(i)){var r=Vl(i),a=r[0],o=r[1];if(!Nl(a,e,t)||!Nl(o,e,t))return;var s=this.getCartesian(a.componentIndex,o.componentIndex),l=i.getData(),u=s.getAxis("x"),h=s.getAxis("y");"list"===l.type&&(n(l,u),n(l,h))}},this)},gv.getTooltipAxes=function(t){var e=[],n=[];return p(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),a=i.getOtherAxis(r);h(e,r)<0&&e.push(r),h(n,a)<0&&n.push(a)}),{baseAxes:e,otherAxes:n}};var vv=["xAxis","yAxis"];Bl.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var a=new Bl(i,t,e);a.name="grid_"+r,a.resize(i,e,!0),i.coordinateSystem=a,n.push(a)}),t.eachSeries(function(t){if(Wl(t)){var e=Vl(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},Bl.dimensions=Bl.prototype.dimensions=vl.prototype.dimensions,Zr.register("cartesian2d",Bl);var mv=Math.PI,yv=function(t,e){this.opt=e,this.axisModel=t,l(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new ph;var n=new ph({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};yv.prototype={constructor:yv,hasBuilder:function(t){return!!_v[t]},add:function(t){_v[t].call(this)},getGroup:function(){return this.group}};var _v={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],a=[n[1],0];i&&(Z(r,r,i),Z(a,a,i));var o=s({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new kd(bi({anid:"line",shape:{x1:r[0],y1:r[1],x2:a[0],y2:a[1]},style:o,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),h=e.get("axisLine.symbolOffset")||0;if("number"==typeof h&&(h=[h,h]),null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var c=u[0],d=u[1];p([{rotate:t.rotation+Math.PI/2,offset:h[0],r:0},{rotate:t.rotation-Math.PI/2,offset:h[1],r:Math.sqrt((r[0]-a[0])*(r[0]-a[0])+(r[1]-a[1])*(r[1]-a[1]))}],function(e,n){if("none"!==l[n]&&null!=l[n]){var i=ds(l[n],-c/2,-d/2,c,d,o.stroke,!0),a=e.r+e.offset,s=[r[0]+a*Math.cos(t.rotation),r[1]-a*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:s,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=Zl(this,t,e);Xl(t,$l(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=k(t.axisName,e.get("name"));if(n){var i,r,a=e.get("nameLocation"),o=t.nameDirection,l=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,h=this.axisModel.axis.getExtent(),c=h[0]>h[1]?-1:1,d=["start"===a?h[0]-c*u:"end"===a?h[1]+c*u:(h[0]+h[1])/2,Ul(a)?t.labelOffset+o*u:0],f=e.get("nameRotate");null!=f&&(f=f*mv/180),Ul(a)?i=xv(t.rotation,null!=f?f:t.rotation,o):(i=Gl(t,a,f||0,h),null!=(r=t.axisNameAvailableWidth)&&(r=Math.abs(r/Math.sin(i.rotation)),!isFinite(r)&&(r=null)));var p=l.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=k(t.nameTruncateMaxWidth,g.maxWidth,r),y=null!=v&&null!=m?nf(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,w={componentType:x,name:n,$vars:["name"]};w[x+"Index"]=e.componentIndex;var b=new md({anid:"name",__fullText:n,__truncatedText:y,position:d,rotation:i.rotation,silent:jl(e),z2:1,tooltip:_&&_.show?s({content:n,formatter:function(){return n},formatterParams:w},_):null});Ri(b.style,l,{text:y,textFont:p,textFill:l.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=Hl(e),b.eventData.targetType="axisName",b.eventData.name=n),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},xv=yv.innerTextLayout=function(t,e,n){var i,r,a=lr(e-t);return ur(a)?(r=n>0?"top":"bottom",i="center"):ur(a-mv)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=a>0&&a<mv?n>0?"right":"left":n>0?"left":"right"),{rotation:a,textAlign:i,textVerticalAlign:r}},wv=No({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&Kl(t),wv.superApply(this,"render",arguments),nu(this,t,0,n,0,!0)},updateAxisPointer:function(t,e,n,i,r){nu(this,t,0,n,0,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),wv.superApply(this,"remove",arguments)},dispose:function(t,e){iu(this,e),wv.superApply(this,"dispose",arguments)}}),bv=[];wv.registerAxisPointerClass=function(t,e){bv[t]=e},wv.getAxisPointerClass=function(t){return t&&bv[t]};var Sv=["axisLine","axisTickLabel","axisName"],Mv=["splitArea","splitLine"],Tv=wv.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new ph,this.group.add(this._axisGroup),t.get("show")){var a=t.getCoordSysModel(),o=ru(a,t),s=new yv(t,o);p(Sv,s.add,s),this._axisGroup.add(s.getGroup()),p(Mv,function(e){t.get(e+".show")&&this["_"+e](t,a)},this),$i(r,this._axisGroup,t),Tv.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),a=r.get("color");a=x(a)?a:[a];for(var o=e.coordinateSystem.getRect(),s=n.isHorizontal(),u=0,h=n.getTicksCoords({tickModel:i}),c=[],d=[],f=r.getLineStyle(),p=0;p<h.length;p++){var g=n.toGlobalCoord(h[p].coord);s?(c[0]=g,c[1]=o.y,d[0]=g,d[1]=o.y+o.height):(c[0]=o.x,c[1]=g,d[0]=o.x+o.width,d[1]=g);var v=u++%a.length,m=h[p].tickValue;this._axisGroup.add(new kd(bi({anid:null!=m?"line_"+h[p].tickValue:null,shape:{x1:c[0],y1:c[1],x2:d[0],y2:d[1]},style:l({stroke:a[v]},f),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),a=r.get("color"),o=e.coordinateSystem.getRect(),s=n.getTicksCoords({tickModel:i,clamp:!0});if(s.length){var u=a.length,h=this._splitAreaColors,c=R(),d=0;if(h)for(v=0;v<s.length;v++){var f=h.get(s[v].tickValue);if(null!=f){d=(f+(u-1)*v)%u;break}}var p=n.toGlobalCoord(s[0].coord),g=r.getAreaStyle();a=x(a)?a:[a];for(var v=1;v<s.length;v++){var m,y,_,w,b=n.toGlobalCoord(s[v].coord);n.isHorizontal()?(m=p,y=o.y,_=b-m,w=o.height,p=m+_):(m=o.x,y=p,_=o.width,p=y+(w=b-y));var S=s[v-1].tickValue;null!=S&&c.set(S,d),this._axisGroup.add(new Cd({anid:null!=S?"area_"+S:null,shape:{x:m,y:y,width:_,height:w},style:l({fill:a[d]},g),silent:!0})),d=(d+1)%u}this._splitAreaColors=c}}}});Tv.extend({type:"xAxis"}),Tv.extend({type:"yAxis"}),No({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new Cd({shape:t.coordinateSystem.getRect(),style:l({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),ko(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),Po(function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i,r){var a=t.getData(),o=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(a.setVisual({legendSymbol:n||o,symbol:o,symbolSize:s,symbolKeepAspect:l}),!i.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:a.hasItemOption||u?function(e,n){if("function"==typeof s){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",s(i,r))}if(e.hasItemOption){var a=e.getItemModel(n),o=a.getShallow("symbol",!0),l=a.getShallow("symbolSize",!0),u=a.getShallow("symbolKeepAspect",!0);null!=o&&e.setItemVisual(n,"symbol",o),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}:null}}}}}("line","circle","line")),Lo(function(t){return{seriesType:t,plan:Jf(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=g(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),a=r.length,o=e.getCalculationInfo("stackResultDimension");return os(e,r[0])&&(r[0]=o),os(e,r[1])&&(r[1]=o),a&&{progress:function(t,e){for(var o=t.end-t.start,s=i&&new Float32Array(o*a),l=t.start,u=0,h=[],c=[];l<t.end;l++){var d;if(1===a)f=e.get(r[0],l),d=!isNaN(f)&&n.dataToPoint(f,null,c);else{var f=h[0]=e.get(r[0],l),p=h[1]=e.get(r[1],l);d=!isNaN(f)&&!isNaN(p)&&n.dataToPoint(h,null,c)}i?(s[u++]=d?d[0]:NaN,s[u++]=d?d[1]:NaN):e.setItemLayout(l,d&&d.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}}("line")),Do(Ip.PROCESSOR.STATISTIC,function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("sampling"),a=t.coordinateSystem;if("cartesian2d"===a.type&&r){var o,s=a.getBaseAxis(),l=a.getOtherAxis(s),u=s.getExtent(),h=u[1]-u[0],c=Math.round(i.count()/h);if(c>1)"string"==typeof r?o=Lg[r]:"function"==typeof r&&(o=r),o&&t.setData(i.downSample(i.mapDimension(l.dim),1/c,o,Pg))}}}}("line")),Zf.extend({type:"series.__base_bar__",getInitialData:function(t,e){return ls(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),a=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+a/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var Iv=cc([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Cv={getBarItemStyle:function(t){var e=Iv(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},kv=["itemStyle","barBorderWidth"];s(Ki.prototype,Cv),zo({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t,e,n){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,n,i){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,n){var i,r=this.group,a=t.getData(),o=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?i=l.isHorizontal():"polar"===s.type&&(i="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;a.diff(o).add(function(e){if(a.hasValue(e)){var n=a.getItemModel(e),o=Av[s.type](a,e,n),l=Dv[s.type](a,e,n,o,i,u);a.setItemGraphicEl(e,l),r.add(l),uu(l,a,e,n,o,t,i,"polar"===s.type)}}).update(function(e,n){var l=o.getItemGraphicEl(n);if(a.hasValue(e)){var h=a.getItemModel(e),c=Av[s.type](a,e,h);l?Yi(l,{shape:c},u,e):l=Dv[s.type](a,e,h,c,i,u,!0),a.setItemGraphicEl(e,l),r.add(l),uu(l,a,e,h,c,t,i,"polar"===s.type)}else r.remove(l)}).remove(function(t){var e=o.getItemGraphicEl(t);"cartesian2d"===s.type?e&&su(t,u,e):e&&lu(t,u,e)}).execute(),this._data=a},_renderLarge:function(t,e,n){this._clear(),cu(t,this.group)},_incrementalRenderLarge:function(t,e){cu(e,this.group,!0)},dispose:F,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?lu(e.dataIndex,t,e):su(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var Dv={cartesian2d:function(t,e,n,i,r,a,o){var l=new Cd({shape:s({},i)});if(a){var u=l.shape,h=r?"height":"width",c={};u[h]=0,c[h]=i[h],Wd[o?"updateProps":"initProps"](l,{shape:c},a,e)}return l},polar:function(t,e,n,i,r,a,o){var s=i.startAngle<i.endAngle,u=new wd({shape:l({clockwise:s},i)});if(a){var h=u.shape,c=r?"r":"endAngle",d={};h[c]=r?0:i.startAngle,d[c]=i[c],Wd[o?"updateProps":"initProps"](u,{shape:d},a,e)}return u}},Av={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=hu(n,i),a=i.width>0?1:-1,o=i.height>0?1:-1;return{x:i.x+a*r/2,y:i.y+o*r/2,width:i.width-a*r,height:i.height-o*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}},Lv=si.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,a=0;a<n.length;a+=2)i[this.__valueIdx]=n[a+r],t.moveTo(i[0],i[1]),t.lineTo(n[a],n[a+1])}});Lo(_(function(t,e){var n=Js(t,e),i=Qs(n),r={};p(n,function(t){var e=t.getData(),n=t.coordinateSystem,a=n.getBaseAxis(),o=$s(t),s=i[Ks(a)][o],l=s.offset,u=s.width,h=n.getOtherAxis(a),c=t.get("barMinHeight")||0;r[o]=r[o]||[],e.setLayout({offset:l,size:u});for(var d=e.mapDimension(h.dim),f=e.mapDimension(a.dim),p=os(e,d),g=h.isHorizontal(),v=rl(a,h,p),m=0,y=e.count();m<y;m++){var _=e.get(d,m),x=e.get(f,m);if(!isNaN(_)){var w,b,S,M,T=_>=0?"p":"n",I=v;if(p&&(r[o][x]||(r[o][x]={p:v,n:v}),I=r[o][x][T]),g)w=I,b=(C=n.dataToPoint([_,x]))[1]+l,S=C[0]-v,M=u,Math.abs(S)<c&&(S=(S<0?-1:1)*c),p&&(r[o][x][T]+=S);else{var C=n.dataToPoint([x,_]);w=C[0]+l,b=I,S=u,M=C[1]-v,Math.abs(M)<c&&(M=(M<=0?-1:1)*c),p&&(r[o][x][T]+=M)}e.setItemLayout(m,{x:w,y:b,width:S,height:M})}}},this)},"bar")),Lo(Wg),Po({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var Pv=function(t,e,n){e=x(e)&&{coordDimensions:e}||s({},e);var i=t.getSource(),r=og(i,e),a=new ig(r,t);return a.initData(i,n),a},Ov={updateSelectedMap:function(t){this._targetList=x(t)?t.slice():[],this._selectTargetMap=v(t||[],function(t,e){return t.set(e.name,e),t},R())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=n)return this[n.selected?"unSelect":"select"](t,e),n.selected},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},Ev=Bo({type:"series.pie",init:function(t){Ev.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){Ev.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return Pv(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();i<r;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:ba(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=Ev.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=sr(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){un(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});d(Ev,Ov);var Nv=gu.prototype;Nv.updateData=function(t,e,n){function i(){a.stopAnimation(!0),a.animateTo({shape:{r:h.r+o.get("hoverOffset")}},300,"elasticOut")}function r(){a.stopAnimation(!0),a.animateTo({shape:{r:h.r}},300,"elasticOut")}var a=this.childAt(0),o=t.hostModel,u=t.getItemModel(e),h=t.getItemLayout(e),c=s({},h);c.label=null,n?(a.setShape(c),"scale"===o.getShallow("animationType")?(a.shape.r=h.r0,Ui(a,{shape:{r:h.r}},o,e)):(a.shape.endAngle=h.startAngle,Yi(a,{shape:{endAngle:h.endAngle}},o,e))):Yi(a,{shape:c},o,e);var d=t.getItemVisual(e,"color");a.useStyle(l({lineJoin:"bevel",fill:d},u.getModel("itemStyle").getItemStyle())),a.hoverStyle=u.getModel("emphasis.itemStyle").getItemStyle();var f=u.getShallow("cursor");f&&a.attr("cursor",f),pu(this,t.getItemLayout(e),o.isSelected(null,e),o.get("selectedOffset"),o.get("animation")),a.off("mouseover").off("mouseout").off("emphasis").off("normal"),u.get("hoverAnimation")&&o.isAnimationEnabled()&&a.on("mouseover",i).on("mouseout",r).on("emphasis",i).on("normal",r),this._updateLabel(t,e),Bi(this)},Nv._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,a=t.getItemModel(e),o=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Yi(n,{shape:{points:o.linePoints||[[o.x,o.y],[o.x,o.y],[o.x,o.y]]}},r,e),Yi(i,{style:{x:o.x,y:o.y}},r,e),i.attr({rotation:o.rotation,origin:[o.x,o.y],z2:10});var l=a.getModel("label"),u=a.getModel("emphasis.label"),h=a.getModel("labelLine"),c=a.getModel("emphasis.labelLine");s=t.getItemVisual(e,"color");zi(i.style,i.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!o.inside},{textAlign:o.textAlign,textVerticalAlign:o.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!l.get("show"),i.hoverIgnore=!u.get("show"),n.ignore=n.normalIgnore=!h.get("show"),n.hoverIgnore=!c.get("show"),n.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(h.getModel("lineStyle").getLineStyle()),n.hoverStyle=c.getModel("lineStyle").getLineStyle();var d=h.get("smooth");d&&!0===d&&(d=.4),n.setShape({smooth:d})},c(gu,ph),Na.extend({type:"pie",init:function(){var t=new ph;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),a=this._data,o=this.group,s=e.get("animation"),l=!a,u=t.get("animationType"),h=_(fu,this.uid,t,s,n),c=t.get("selectedMode");if(r.diff(a).add(function(t){var e=new gu(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),c&&e.on("click",h),r.setItemGraphicEl(t,e),o.add(e)}).update(function(t,e){var n=a.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),c&&n.on("click",h),o.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=a.getItemGraphicEl(t);o.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){var d=r.getItemLayout(0),f=Math.max(n.getWidth(),n.getHeight())/2,p=y(o.removeClipPath,o);o.setClipPath(this._createClipPath(d.cx,d.cy,f,d.startAngle,d.clockwise,p,t))}this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,a,o){var s=new wd({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return Ui(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},o,a),s},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,a=Math.sqrt(i*i+r*r);return a<=n.r&&a>=n.r0}}});var Bv=function(t,e,n,i){var r,a,o=t.getData(),s=[],l=!1;o.each(function(n){var i,u,h,c,d=o.getItemLayout(n),f=o.getItemModel(n),p=f.getModel("label"),g=p.get("position")||f.get("emphasis.label.position"),v=f.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),_=(d.startAngle+d.endAngle)/2,x=Math.cos(_),w=Math.sin(_);r=d.cx,a=d.cy;var b="inside"===g||"inner"===g;if("center"===g)i=d.cx,u=d.cy,c="center";else{var S=(b?(d.r+d.r0)/2*x:d.r*x)+r,M=(b?(d.r+d.r0)/2*w:d.r*w)+a;if(i=S+3*x,u=M+3*w,!b){var T=S+x*(m+e-d.r),I=M+w*(m+e-d.r),C=T+(x<0?-1:1)*y,k=I;i=C+(x<0?-5:5),u=k,h=[[S,M],[T,I],[C,k]]}c=b?"center":x>0?"left":"right"}var D=p.getFont(),A=p.get("rotate")?x<0?-_+Math.PI:-_:0,L=ie(t.getFormattedLabel(n,"normal")||o.getName(n),D,c,"top");l=!!A,d.label={x:i,y:u,position:g,height:L.height,len:m,len2:y,linePoints:h,textAlign:c,verticalAlign:"middle",rotation:A,inside:b},b||s.push(d.label)}),!l&&t.get("avoidLabelOverlap")&&mu(s,r,a,e,n,i)},zv=2*Math.PI,Rv=Math.PI/180;!function(t,e){p(e,function(e){e.update="updateView",Ao(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name,n.dataIndex);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r}})})}("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),Po(function(t){return{getTargetSeries:function(e){var n={},i=R();return e.eachSeriesByType(t,function(t){t.__paletteScope=n,i.set(t.uid,t)}),i},reset:function(t,e){var n=t.getRawData(),i={},r=t.getData();r.each(function(t){var e=r.getRawIndex(t);i[e]=t}),n.each(function(e){var a=i[e],o=null!=a&&r.getItemVisual(a,"color",!0);if(o)n.setItemVisual(e,"color",o);else{var s=n.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(n.getName(e)||e+"",t.__paletteScope,n.count());n.setItemVisual(e,"color",s),null!=a&&r.setItemVisual(a,"color",s)}})}}}("pie")),Lo(_(function(t,e,n,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),a=t.get("radius");x(a)||(a=[0,a]),x(r)||(r=[r,r]);var o=n.getWidth(),s=n.getHeight(),l=Math.min(o,s),u=ir(r[0],o),h=ir(r[1],s),c=ir(a[0],l/2),d=ir(a[1],l/2),f=-t.get("startAngle")*Rv,p=t.get("minAngle")*Rv,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),w=t.get("stillShowZeroSum"),b=e.getDataExtent(i);b[0]=0;var S=zv,M=0,T=f,I=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:h,r0:c,r:_?NaN:d});else{(i="area"!==_?0===v&&w?m:t*m:zv/g)<p?(i=p,S-=p):M+=t;var r=T+I*i;e.setItemLayout(n,{angle:i,startAngle:T,endAngle:r,clockwise:y,cx:u,cy:h,r0:c,r:_?nr(t,b,[c,d]):d}),T=r}}),S<zv&&g)if(S<=.001){var C=zv/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=C,i.startAngle=f+I*n*C,i.endAngle=f+I*(n+1)*C}})}else m=S/M,T=f,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=T,i.endAngle=T+I*r,T+=I*r}});Bv(t,d,o,s)})},"pie")),Do(function(t){return{seriesType:t,reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}}("pie")),t.version="4.1.0",t.dependencies=bp,t.PRIORITY=Ip,t.init=function(t,e,n){var i=Io(t);if(i)return i;var r=new ro(t,e,n);return r.id="ec_"+Gp++,Wp[r.id]=r,xn(t,Xp,r.id),Mo(r),r},t.connect=function(t){if(x(t)){var e=t;t=null,yp(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+jp++,yp(e,function(e){e.group=t})}return Hp[t]=!0,t},t.disConnect=To,t.disconnect=Yp,t.dispose=function(t){"string"==typeof t?t=Wp[t]:t instanceof ro||(t=Io(t)),t instanceof ro&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=Io,t.getInstanceById=function(t){return Wp[t]},t.registerTheme=Co,t.registerPreprocessor=ko,t.registerProcessor=Do,t.registerPostUpdate=function(t){zp.push(t)},t.registerAction=Ao,t.registerCoordinateSystem=function(t,e){Zr.register(t,e)},t.getCoordinateSystemDimensions=function(t){var e=Zr.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=Lo,t.registerVisual=Po,t.registerLoading=Eo,t.extendComponentModel=function(t){return uf.extend(t)},t.extendComponentView=No,t.extendSeriesModel=Bo,t.extendChartView=zo,t.setCanvasCreator=function(t){i("createCanvas",t)},t.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),qp[t]={geoJson:e,specialAreas:n}},t.getMap=function(t){return qp[t]},t.dataTool=Up})}},[["1a28","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/logn/logn';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/logn/logn.js';

define('pages/logn/logn.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/logn/logn"],{"6fb7":function(t,e,a){},"829d":function(t,e,a){"use strict";a("0cb7");var n=s(a("b0ce")),o=s(a("8c93"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},"8c93":function(t,e,a){"use strict";a.r(e);var n=a("d3643"),o=a("ee87");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("b8c0");var i=a("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"563cefbe",null);e["default"]=r.exports},b6b4:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("b607"),o={data:function(){return{password:"",phone:""}},onLoad:function(){},methods:{login:function(){var e=this,a=/^[1][3,4,5,7,8][0-9]{9}$/;if(!a.test(this.phone))return console.log(this.phone),void t.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.password){var o={phone:this.phone,password:this.password,userType:1};(0,n.login)(o).then(function(a){0==a.data.code?(console.log(a.data.data.token),t.setStorageSync("token",a.data.data.token),t.setStorageSync("userId",a.data.data.userId),t.setStorageSync("shopId",a.data.data.shopId),e.$store.commit("SET_SHOPID",a.data.data.shopId),e.$store.commit("SET_TOKEN",a.data.data.token),e.$store.commit("SET_USERID",a.data.data.userId),t.reLaunch({url:"/pages/commodity_management/commodity_management"})):t.showModal({title:"",content:a.data.msg,showCancel:!1})})}else t.showModal({title:"",content:"请输入密码",showCancel:!1})},weixinLogin:function(){var e=this;console.log(1111),t.getProvider({service:"oauth",success:function(a){~a.provider.indexOf("weixin")&&t.login({provider:"weixin",success:function(a){t.getUserInfo({provider:"weixin",success:function(a){console.log(JSON.stringify(a));var o={nickName:a.userInfo.nickName,avatarUrl:a.userInfo.avatarUrl,gender:a.userInfo.gender,openId:a.userInfo.openId,userType:1};console.log(555),(0,n.weChatLogin)(o).then(function(a){console.log(JSON.stringify(a)),0==a.data.code?(t.setStorageSync("token",a.data.data.token),t.setStorageSync("userId",a.data.data.userId),t.setStorageSync("shopId",a.data.data.shopId),e.$store.commit("SET_SHOPID",a.data.data.shopId),e.$store.commit("SET_TOKEN",a.data.data.token),e.$store.commit("SET_USERID",a.data.data.userId),t.reLaunch({url:"/pages/commodity_management/commodity_management"})):t.showModal({title:"",content:a.data.msg,showCancel:!1})})}})}})}})},register:function(){t.navigateTo({url:"/pages/register/register"})},wjPassword:function(){t.navigateTo({url:"/pages/wjPassword/wjPassword"})}}};e.default=o}).call(this,a("6e42")["default"])},b8c0:function(t,e,a){"use strict";var n=a("6fb7"),o=a.n(n);o.a},d3643:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("image",{staticClass:"logo_2",attrs:{src:"../../static/logo_03.png",mode:""}}),a("image",{staticClass:"logo",attrs:{src:"../../static/logo_3.png",mode:""}}),a("view",{staticClass:"input"},[a("image",{attrs:{src:"../../static/wodedenglu_07.png",mode:""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请输入手机号",maxlength:"11",eventid:"5a5d8af2-0"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),a("view",{staticClass:"input"},[a("image",{attrs:{src:"../../static/shurumima_10.png",mode:""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码",maxlength:"20",eventid:"5a5d8af2-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("view",{staticClass:"btn",attrs:{eventid:"5a5d8af2-2"},on:{click:function(e){t.login()}}},[t._v("立即登录")]),a("view",{staticClass:"logn"},[a("text",{attrs:{eventid:"5a5d8af2-3"},on:{click:function(e){t.register()}}},[t._v("新用户注册")]),a("text",{attrs:{eventid:"5a5d8af2-4"},on:{click:function(e){t.wjPassword()}}},[t._v("忘记密码?")])]),a("view",{staticClass:"third"},[t._m(0),a("view",{staticClass:"other"},[a("view",{staticClass:"weixin",attrs:{eventid:"5a5d8af2-5"},on:{click:function(e){t.weixinLogin()}}})])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cut"},[a("text",[t._v("其他方式登录")])])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},ee87:function(t,e,a){"use strict";a.r(e);var n=a("b6b4"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=o.a}},[["829d","common/runtime","common/vendor"]]]);
});
require('pages/logn/logn.js');
__wxRoute = 'pages/merchant/merchant';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/merchant/merchant.js';

define('pages/merchant/merchant.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/merchant/merchant"],{"0976":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a("a021"),i=a("b607"),o=a("2f62");function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){c(e,t,a[t])})}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l={data:function(){return{ishow:!0,img1:[],img2:[],img3:[],img4:[],img5:[],img6:[],phone:"",weChatId:"",idCard:"",idFront:"",idBack:"",shopName:"",shopDesc:"",shopAddress:"",shopLogo:"",shopLicence:"",weChatPhoto:"",aliPayPhoto:""}},onLoad:function(){},computed:n({},(0,o.mapState)(["userId"])),methods:{paizhao1:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){t.img1=a.tempFilePaths,e.uploadFile({url:s.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(a){var s=JSON.parse(a.data);0==s.code&&(console.log(a),t.idFront=s.data,e.showToast({title:"上传成功"}))}})}})},paizhao2:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){t.img2=a.tempFilePaths,e.uploadFile({url:s.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(a){var s=JSON.parse(a.data);0==s.code&&(console.log(a),t.idBack=s.data,e.showToast({title:"上传成功"}))}})}})},paizhao3:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){t.img3=a.tempFilePaths,e.uploadFile({url:s.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(a){var s=JSON.parse(a.data);0==s.code&&(console.log(a),t.shopLogo=s.data,e.showToast({title:"上传成功"}))}})}})},paizhao4:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){t.img4=a.tempFilePaths,e.uploadFile({url:s.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(a){var s=JSON.parse(a.data);0==s.code&&(console.log(a),t.weChatPhoto=s.data,e.showToast({title:"上传成功"}))}})}})},paizhao5:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){t.img5=a.tempFilePaths,e.uploadFile({url:s.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(a){var s=JSON.parse(a.data);0==s.code&&(console.log(a),t.aliPayPhoto=s.data,e.showToast({title:"上传成功"}))}})}})},paizhao6:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){t.img6=a.tempFilePaths,e.uploadFile({url:s.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(a){var s=JSON.parse(a.data);0==s.code&&(console.log(a),t.shopLicence=s.data,e.showToast({title:"上传成功"}))}})}})},ruzhu:function(){if(""!=this.phone)if(""!=this.weChatId)if(""!=this.idCard){var t=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;if(t.test(this.idCard))if(""!=this.idFront)if(""!=this.idBack)if(""!=this.shopName)if(""!=this.shopDesc)if(""!=this.shopAddress)if(""!=this.shopLogo)if(""!=this.shopLicence)if(""!=this.weChatPhoto)if(""!=this.aliPayPhoto){var a=/^[1][3,4,5,7,8][0-9]{9}$/;if(!a.test(this.phone))return console.log(this.phone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});var s={userId:this.userId,phone:this.phone,weChatId:this.weChatId,idCard:this.idCard,idFront:this.idFront,idBack:this.idBack,shopName:this.shopName,shopDesc:this.shopDesc,shopAddress:this.shopAddress,shopLogo:this.shopLogo,shopLicence:this.shopLicence,weChatPhoto:this.weChatPhoto,aliPayPhoto:this.aliPayPhoto};this.ishow=!1,(0,i.addShop)(s).then(function(t){0==t.data.code?(e.showToast({title:"申请成功",icon:"none",duration:1e3}),setTimeout(function(t){e.navigateBack({data:1})},1500)):e.showToast({title:"申请失败",icon:"none",duration:1e3})})}else e.showModal({title:"",content:"请上传支付宝收款二维码",showCancel:!1});else e.showModal({title:"",content:"请上传微信收款二维码",showCancel:!1});else e.showModal({title:"",content:"请上传店铺营业执照",showCancel:!1});else e.showModal({title:"",content:"请上传店铺图片",showCancel:!1});else e.showModal({title:"",content:"请输入店铺地址",showCancel:!1});else e.showModal({title:"",content:"请输入店铺简介",showCancel:!1});else e.showModal({title:"",content:"请输入店铺名称",showCancel:!1});else e.showModal({title:"",content:"请上传身份证反面照",showCancel:!1});else e.showModal({title:"",content:"请上传身份证正面照",showCancel:!1});else e.showModal({title:"",content:"身份证号输入有误",showCancel:!1})}else e.showModal({title:"",content:"请输入身份证号",showCancel:!1});else e.showModal({title:"",content:"请输入微信号",showCancel:!1});else e.showModal({title:"",content:"请输入手机号",showCancel:!1})}}};t.default=l}).call(this,a("6e42")["default"])},"24b7":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"content"},[a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("手  机  号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"number",maxlength:"11",placeholder:"请输入注册人电话",eventid:"612c6f32-0"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("微  信  号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.weChatId,expression:"weChatId"}],attrs:{type:"text",placeholder:"请输入相关微信号",eventid:"612c6f32-1"},domProps:{value:e.weChatId},on:{input:function(t){t.target.composing||(e.weChatId=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("身份证号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.idCard,expression:"idCard"}],attrs:{type:"text",maxlength:"18",placeholder:"请输入身份证号码",eventid:"612c6f32-2"},domProps:{value:e.idCard},on:{input:function(t){t.target.composing||(e.idCard=t.target.value)}}})]),a("view",{staticClass:"zhaopian"},[a("text",[e._v("上传身份证正反照片")]),a("text",{staticStyle:{display:"block",color:"#999999","font-size":"20rpx","margin-top":"20rpx"}},[e._v("(第一张为正面,第二张为反面)")]),a("view",{staticClass:"img"},[0==e.img1.length?a("view",{staticClass:"img_item",attrs:{eventid:"612c6f32-3"},on:{click:function(t){e.paizhao1()}}},[a("image",{attrs:{src:"../../static/zhengmianzhao_03.png",mode:""}})]):a("image",{staticClass:"img_1",attrs:{src:e.img1[0],mode:""}}),0==e.img2.length?a("view",{staticClass:"img_item",attrs:{eventid:"612c6f32-4"},on:{click:function(t){e.paizhao2()}}},[a("image",{attrs:{src:"../../static/fanmianzhao_05.png",mode:""}})]):a("image",{staticClass:"img_1",attrs:{src:e.img2[0],mode:""}})])]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("店铺名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shopName,expression:"shopName"}],attrs:{type:"text",placeholder:"请输入店铺名称",eventid:"612c6f32-5"},domProps:{value:e.shopName},on:{input:function(t){t.target.composing||(e.shopName=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("店铺简介")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shopDesc,expression:"shopDesc"}],attrs:{type:"text",placeholder:"请输入店铺描述",eventid:"612c6f32-6"},domProps:{value:e.shopDesc},on:{input:function(t){t.target.composing||(e.shopDesc=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("店铺地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shopAddress,expression:"shopAddress"}],attrs:{type:"text",placeholder:"请输入店铺描述",eventid:"612c6f32-7"},domProps:{value:e.shopAddress},on:{input:function(t){t.target.composing||(e.shopAddress=t.target.value)}}})]),a("view",{staticClass:"LG"},[a("text",[e._v("上传店铺图片")]),0==e.img3.length?a("text",{staticClass:"lg_img",attrs:{eventid:"612c6f32-8"},on:{click:e.paizhao3}},[e._v("点击上传")]):a("image",{staticClass:"lg_img",attrs:{src:e.img3[0],mode:""}})]),a("view",{staticClass:"LG"},[a("text",[e._v("上传店铺营业执照")]),0==e.img6.length?a("text",{staticClass:"lg_img",attrs:{eventid:"612c6f32-9"},on:{click:e.paizhao6}},[e._v("点击上传")]):a("image",{staticClass:"lg_img",attrs:{src:e.img6[0],mode:""}})]),a("view",{staticClass:"code"},[a("text",[e._v("上传微信支付宝收款二维码")]),a("text",{staticStyle:{display:"block",color:"#999999","font-size":"20rpx","margin-top":"20rpx"}},[e._v("(请第一张上传微信,第二张上传支付宝)")]),a("view",{staticClass:"code_list"},[0==e.img4.length?a("text",{staticClass:"code_img",attrs:{eventid:"612c6f32-10"},on:{click:e.paizhao4}},[e._v("点击上传")]):a("image",{staticClass:"code_img",attrs:{src:e.img4[0],mode:""}}),0==e.img5.length?a("text",{staticClass:"code_img",attrs:{eventid:"612c6f32-11"},on:{click:e.paizhao5}},[e._v("点击上传")]):a("image",{staticClass:"code_img",attrs:{src:e.img5[0],mode:""}})])]),e.ishow?a("view",{staticClass:"btn",attrs:{eventid:"612c6f32-12"},on:{click:e.ruzhu}},[e._v("完成")]):a("view",{staticClass:"btn2"},[e._v("完成")])])},i=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},"9a2d":function(e,t,a){"use strict";a.r(t);var s=a("0976"),i=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);t["default"]=i.a},cbf8:function(e,t,a){"use strict";a("0cb7");var s=o(a("b0ce")),i=o(a("ea95"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))},e68c:function(e,t,a){"use strict";var s=a("f6cf"),i=a.n(s);i.a},ea95:function(e,t,a){"use strict";a.r(t);var s=a("24b7"),i=a("9a2d");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("e68c");var n=a("2877"),c=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,"4d46a820",null);t["default"]=c.exports},f6cf:function(e,t,a){}},[["cbf8","common/runtime","common/vendor"]]]);
});
require('pages/merchant/merchant.js');
__wxRoute = 'pages/shop_administration/shop_administration';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop_administration/shop_administration.js';

define('pages/shop_administration/shop_administration.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop_administration/shop_administration"],{"5fdd":function(t,e,s){"use strict";s("0cb7");var a=n(s("b0ce")),o=n(s("8df1"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},"6a2e":function(t,e,s){},"8df1":function(t,e,s){"use strict";s.r(e);var a=s("ad70"),o=s("9cc2");for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);s("e085");var i=s("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"3f0d2ee5",null);e["default"]=c.exports},"9cc2":function(t,e,s){"use strict";s.r(e);var a=s("c753"),o=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},ad70:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"tabs"},[s("text",{class:{active:0==t.currentTabs},attrs:{eventid:"0f34477c-0"},on:{click:function(e){t.tabs(0)}}},[t._v("基本信息")]),s("text",{class:{active:1==t.currentTabs},attrs:{eventid:"0f34477c-1"},on:{click:function(e){t.tabs(1)}}},[t._v("评分展示")])]),s("view",{staticClass:"liubai"}),0==t.currentTabs?s("view",{staticClass:"content1"},[s("view",{staticClass:"item"},[s("text",{staticClass:"title"},[t._v("店铺图片")]),s("image",{staticClass:"img",attrs:{src:t.img,mode:""}}),s("text",{staticClass:"jia",attrs:{eventid:"0f34477c-2"},on:{click:function(e){t.paizhao()}}},[t._v("+")])]),s("view",{staticClass:"item"},[s("text",{staticClass:"title"},[t._v("店铺名称:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.shopName,expression:"shopName"}],attrs:{type:"text",placeholder:"请输入您的店铺名称",eventid:"0f34477c-3"},domProps:{value:t.shopName},on:{input:function(e){e.target.composing||(t.shopName=e.target.value)}}})]),s("view",{staticClass:"item"},[s("text",{staticClass:"title"},[t._v("店铺地址:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.shopAddress,expression:"shopAddress"}],attrs:{type:"text",placeholder:"请输入您的店铺地址",eventid:"0f34477c-4"},domProps:{value:t.shopAddress},on:{input:function(e){e.target.composing||(t.shopAddress=e.target.value)}}})]),s("view",{staticClass:"item"},[s("text",{staticClass:"title"},[t._v("联系电话:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请输入您的联系电话",eventid:"0f34477c-5"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),s("view",{staticClass:"liubai"}),s("view",{staticClass:"item2"},[s("text",{staticClass:"title"},[t._v("店铺介绍:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.shopDesc,expression:"shopDesc"}],staticClass:"textarea",attrs:{placeholder:"请详细描述您的店铺信息",eventid:"0f34477c-6"},domProps:{value:t.shopDesc},on:{input:function(e){e.target.composing||(t.shopDesc=e.target.value)}}})]),s("view",{staticClass:"btn",attrs:{eventid:"0f34477c-7"},on:{click:t.save}},[t._v("保存")])]):t._e(),1==t.currentTabs?s("view",{staticClass:"content2"},t._l(t.commentList,function(e,a){return s("view",{key:a,staticClass:"item"},[s("image",{staticClass:"h_img",attrs:{src:t.imgURl+e.userPhoto,mode:""}}),s("text",[t._v(t._s(e.userName))]),t._l(e.commentStar,function(t,e){return s("image",{key:e,staticClass:"x_img",attrs:{src:"../../static/xingxing_03.png",mode:""}})})],2)})):t._e()])},o=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return o})},c753:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("a021"),o=s("b607"),n=s("2f62");function i(t){return l(t)||r(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.forEach(function(e){u(t,e,s[e])})}return t}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var h={data:function(){return{imgURl:"",currentTabs:0,img:"",shopName:"",phone:"",shopDesc:"",shopAddress:"",shopLogo:"",pageNo:1,commentList:[]}},onShow:function(){this.commentList=[],this.imgURl=a.imgURl,this.getShopInfoById(),this.getCommentByShopId(this.pageNo,10,this.shopId)},onReachBottom:function(){""==this.search&&(this.pageNo++,this.getCommentByShopId(this.pageNo,10,this.shopId))},computed:d({},(0,n.mapState)(["userId","shopId"])),methods:{getCommentByShopId:function(e,s,a){var n=this;(0,o.getCommentByShopId)(e,s,a).then(function(e){0==e.data.code&&(0==e.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),n.commentList=[].concat(i(n.commentList),i(e.data.data.list)))})},getShopInfoById:function(){var t=this;(0,o.getShopInfoById)(this.shopId).then(function(e){0==e.data.code&&(t.shopName=e.data.data.shopName,t.phone=e.data.data.phone,t.shopDesc=e.data.data.shopDesc,t.shopAddress=e.data.data.shopAddress)})},save:function(){var e=this;if(this.shopLogo)if(this.shopName)if(this.shopAddress){var s=/^[1][3,4,5,7,8][0-9]{9}$/;if(s.test(this.phone))if(this.shopDesc){var a={userId:this.userId,phone:this.phone,shopName:this.shopName,shopDesc:this.shopDesc,shopAddress:this.shopAddress,shopLogo:this.shopLogo};(0,o.addShopInfo)(a).then(function(s){0==s.data.code&&(t.setStorageSync("shopId",s.data.data.shop.id),e.$store.commit("SET_SHOPID",s.data.data.shop.id),t.showToast({title:"保存成功"}))})}else t.showModal({title:"",content:"请描述您的店铺信息",showCancel:!1});else t.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1})}else t.showModal({title:"",content:"请输入您的店铺地址",showCancel:!1});else t.showModal({title:"",content:"请输入店铺名称",showCancel:!1});else t.showModal({title:"",content:"请上传店铺logo图片",showCancel:!1})},tabs:function(t){this.currentTabs=t},paizhao:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(s){e.img=s.tempFilePaths[0],t.uploadFile({url:a.baseURL+"/file/upload",filePath:s.tempFilePaths[0],name:"file",formData:{user:"test",file:s.tempFilePaths[0]},success:function(s){var a=JSON.parse(s.data);0==a.code&&(console.log(s),e.shopLogo=a.data,t.showToast({title:"上传成功"}))}})}})}}};e.default=h}).call(this,s("6e42")["default"])},e085:function(t,e,s){"use strict";var a=s("6a2e"),o=s.n(a);o.a}},[["5fdd","common/runtime","common/vendor"]]]);
});
require('pages/shop_administration/shop_administration.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"283f":function(e,t,o){"use strict";o("0cb7");var a=s(o("b0ce")),n=s(o("bc76"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},7111:function(e,t,o){"use strict";o.r(t);var a=o("d3af"),n=o.n(a);for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},a2d0:function(e,t,o){"use strict";var a=o("c265"),n=o.n(a);n.a},a998:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"content"},[o("view",{staticClass:"item"},[o("text",[e._v("手机号")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.iphone,expression:"iphone"}],attrs:{type:"number",value:"",placeholder:"请输入手机号",maxlength:"11",eventid:"0570b592-0"},domProps:{value:e.iphone},on:{input:function(t){t.target.composing||(e.iphone=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("设置密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",value:"",placeholder:"请输入6-20位密码",maxlength:"20",eventid:"0570b592-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("确认密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",value:"",placeholder:"请确认密码",eventid:"0570b592-2"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("验证码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.authCode,expression:"authCode"}],attrs:{type:"number",value:"",placeholder:"请输入验证码",eventid:"0570b592-3"},domProps:{value:e.authCode},on:{input:function(t){t.target.composing||(e.authCode=t.target.value)}}}),o("view",{staticClass:"code",attrs:{eventid:"0570b592-4"},on:{click:e.getCode}},[e._v(e._s(e.codeTime))])]),o("view",{staticClass:"btn",attrs:{eventid:"0570b592-5"},on:{click:function(t){e.addUserBySystem()}}},[e._v("提交并注册")])])},n=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return n})},bc76:function(e,t,o){"use strict";o.r(t);var a=o("a998"),n=o("7111");for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);o("a2d0");var i=o("2877"),d=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,"88bbe234",null);t["default"]=d.exports},c265:function(e,t,o){},d3af:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("b607"),n={data:function(){return{code:"",authCode:"",codeTime:"获取验证码",codeFlag:!0,title:"Hello",yueduxieyi:!1,iphone:"",password:"",password2:""}},onLoad:function(){},methods:{getCode:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.codeFlag){var o=this;this.CountdownFun(60),(0,a.sendSmsCode)(this.iphone).then(function(t){0==t.data.code?o.code=t.data.data:e.showToast({title:t.data.data,icon:"none",duration:1500})})}},CountdownFun:function(e){var t=this,o=setInterval(function(){e--,t.codeTime=e,0==e&&(clearInterval(o),t.codeFlag=!0,t.codeTime="获取验证码")},1e3)},addUserBySystem:function(){var t=this,o=/^[1][3,4,5,7,8][0-9]{9}$/;if(!o.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.password)if(this.password.length<6)e.showModal({title:"",content:"密码不能小于6位",showCancel:!1});else if(this.password==this.password2)if(this.authCode)if(this.authCode==this.code){var n={authCode:this.authCode,phone:this.iphone,password:this.password,userType:1};(0,a.addUserBySystem)(n).then(function(o){0==o.data.code?(e.showToast({title:"注册成功",duration:2e3}),e.setStorageSync("token",o.data.data.token),e.setStorageSync("userId",o.data.data.userId),t.$store.commit("SET_TOKEN",o.data.data.token),t.$store.commit("SET_USERID",o.data.data.token),e.reLaunch({url:"/pages/index/index"})):e.showToast({title:o.data.msg,icon:"none",duration:2e3})})}else e.showModal({title:"",content:"验证码不正确",showCancel:!1});else e.showModal({title:"",content:"请输入验证码",showCancel:!1});else e.showModal({title:"",content:"两次输入的密码不一致",showCancel:!1});else e.showModal({title:"",content:"请输入密码",showCancel:!1})},tongyixieyi:function(){this.yueduxieyi=!this.yueduxieyi}}};t.default=n}).call(this,o("6e42")["default"])}},[["283f","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/user_center/user_center';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user_center/user_center.js';

define('pages/user_center/user_center.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user_center/user_center"],{"17da":function(t,a,e){"use strict";var s=e("9fb8"),i=e.n(s);i.a},"2d0c":function(t,a,e){"use strict";e.r(a);var s=e("916c"),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);a["default"]=i.a},"6fb1":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"content"},[e("view",{staticClass:"head"},[t.imglist?e("image",{staticClass:"img_1",attrs:{src:t.imgURl+t.imglist,mode:""}}):e("image",{staticClass:"img_1",attrs:{src:t.imglist2,mode:""}}),e("view",{staticClass:"msg"},[e("text",[t._v(t._s(t.nickName?t.nickName:"未填写"))]),e("text",[t._v(t._s(t.spec_name?t.spec_name:"未填写"))])]),e("image",{staticClass:"img_2",attrs:{src:"../../static/baigou.png",mode:"",eventid:"452c5c46-0"},on:{click:t.gotoUserMsg}})]),e("view",{staticClass:"liubai"}),e("view",{staticClass:"list"},[e("navigator",{staticClass:"list_item",attrs:{url:"/pages/myOrder/myOrder"}},[e("image",{attrs:{src:"../../static/wodedingdan_06.png",mode:""}}),e("text",[t._v("我的订单")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("view",{staticClass:"list_item",attrs:{eventid:"452c5c46-1"},on:{click:function(a){t.ruzhu()}}},[e("image",{attrs:{src:"../../static/shangjiaruzhu_26.png",mode:""}}),e("text",[t._v("商家入驻")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/callCenter/callCenter"}},[e("image",{attrs:{src:"../../static/lianxikefu_12.png",mode:""}}),e("text",[t._v("联系客服")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/gonggaoFabu/gonggaoFabu"}},[e("image",{attrs:{src:"../../static/fabugonggao_16.png",mode:""}}),e("text",[t._v("发布公告")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/shiwuzhaoling/shiwuzhaoling"}},[e("image",{attrs:{src:"../../static/shiwuzhaoling.png",mode:""}}),e("text",[t._v("失物招领")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/complain/complain"}},[e("image",{attrs:{src:"../../static/yijianfankui_18.png",mode:""}}),e("text",[t._v("意见反馈")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/Account_center/Account_center"}},[e("image",{attrs:{src:"../../static/zhnaghushezhi_09.png",mode:""}}),e("text",[t._v("账户设置")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})])],1)])},i=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},"7c05":function(t,a,e){"use strict";e.r(a);var s=e("6fb1"),i=e("2d0c");for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);e("17da");var r=e("2877"),c=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,"4264e474",null);a["default"]=c.exports},"916c":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=e("a021"),i=e("2f62"),n=e("b607");function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{},s=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.forEach(function(a){c(t,a,e[a])})}return t}function c(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var o={data:function(){return{shopStatus:-1,imgURl:"",imglist:"",imglist2:"",nickName:"",spec_name:""}},onShow:function(){this.imgURl=s.imgURl,this.getUserById(),this.getShopStatusByUserId(this.userId)},computed:r({},(0,i.mapState)(["userId"])),methods:{getShopStatusByUserId:function(t){var a=this;(0,n.getShopStatusByUserId)(t).then(function(t){0==t.data.code&&(a.shopStatus=t.data.data.shopStatus)})},ruzhu:function(){0!=this.shopStatus?1!=this.shopStatus?2!=this.shopStatus?t.navigateTo({url:"/pages/merchant/merchant"}):t.showModal({title:"",content:"入驻失败是否重新入驻",success:function(a){a.confirm?t.navigateTo({url:"/pages/merchant/merchant"}):a.cancel&&console.log("用户点击取消")}}):t.showToast({title:"已经入驻成功",icon:"none",duration:1e3}):t.showToast({title:"入住信息审核中",icon:"none",duration:1e3})},getUserById:function(){var t=this;(0,n.getUserById)(this.userId).then(function(a){t.imglist=a.data.data.userPhoto,t.imglist2=a.data.data.weChatPhoto,t.spec_name=a.data.data.specName,t.nickName=a.data.data.nickName})},gotoUserMsg:function(){t.navigateTo({url:"/pages/userMsg/userMsg"})}}};a.default=o}).call(this,e("6e42")["default"])},"9fb8":function(t,a,e){},a985:function(t,a,e){"use strict";e("0cb7");var s=n(e("b0ce")),i=n(e("7c05"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))}},[["a985","common/runtime","common/vendor"]]]);
});
require('pages/user_center/user_center.js');
__wxRoute = 'pages/userMsg/userMsg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userMsg/userMsg.js';

define('pages/userMsg/userMsg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userMsg/userMsg"],{"05df":function(e,t,a){},1275:function(e,t,a){"use strict";a.r(t);var s=a("d1a1"),i=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);t["default"]=i.a},"2af0":function(e,t,a){"use strict";a("0cb7");var s=n(a("b0ce")),i=n(a("bb89"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))},"3b15":function(e,t,a){"use strict";var s=a("05df"),i=a.n(s);i.a},6432:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"content"},[a("view",{staticClass:"item3"},[a("text",{staticClass:"title3"},[e._v("头像:")]),a("view",{staticClass:"right",attrs:{eventid:"71d77020-0"},on:{click:e.paizhao}},[e.imglist2?a("image",{staticClass:"tx",attrs:{src:e.imglist2,mode:""}}):a("image",{staticClass:"tx",attrs:{src:e.imgurl+e.imglist,mode:""}}),a("image",{staticClass:"bq",attrs:{src:"../../static/gengduo_41.png",mode:""}})])]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("用户名:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.name,expression:"userinfo.name"}],attrs:{type:"text",placeholder:"请输入用户名",eventid:"71d77020-1"},domProps:{value:e.userinfo.name},on:{input:function(t){t.target.composing||(e.userinfo.name=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("昵称:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.nickName,expression:"userinfo.nickName"}],attrs:{type:"text",value:"",placeholder:"请输入用户昵称",eventid:"71d77020-2"},domProps:{value:e.userinfo.nickName},on:{input:function(t){t.target.composing||(e.userinfo.nickName=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("电话:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.userPhone,expression:"userinfo.userPhone"}],attrs:{type:"number",value:"",placeholder:"请输入电话号码",eventid:"71d77020-3"},domProps:{value:e.userinfo.userPhone},on:{input:function(t){t.target.composing||(e.userinfo.userPhone=t.target.value)}}})]),a("picker",{attrs:{mode:"selector",range:e.range,eventid:"71d77020-4"},on:{change:e.bindPickerChange}},[a("view",{staticClass:"item3"},[a("text",{staticClass:"title3"},[e._v("性别:")]),a("text",{staticClass:"sex"},[e._v(e._s(0==e.userinfo.userSex?"男":"女"))]),a("view",{staticClass:"right"},[a("image",{staticClass:"bq",attrs:{src:"../../static/gengduo_41.png",mode:""}})])])]),a("view",{staticClass:"item2"},[a("text",{staticClass:"title3"},[e._v("个性签名")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.spec_name,expression:"userinfo.spec_name"}],staticClass:"text",attrs:{type:"text",placeholder:"请输入个性签名",eventid:"71d77020-5"},domProps:{value:e.userinfo.spec_name},on:{input:function(t){t.target.composing||(e.userinfo.spec_name=t.target.value)}}})]),a("view",{staticClass:"btn",attrs:{eventid:"71d77020-6"},on:{click:e.save}},[e._v("保存")])],1)},i=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},bb89:function(e,t,a){"use strict";a.r(t);var s=a("6432"),i=a("1275");for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);a("3b15");var r=a("2877"),o=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,"3a68dcda",null);t["default"]=o.exports},d1a1:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a("a021"),i=a("2f62"),n=a("b607");function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){o(e,t,a[t])})}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{imglist2:"",imglist:"",userinfo:{name:"",userPhone:"",userSex:"",nickName:"",spec_name:""},imgurl:"",range:["男","女"]}},onLoad:function(){this.imgurl=s.imgURl,this.getUserById()},methods:{save:function(){if(this.userinfo.userPhone){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.userinfo.userPhone))return void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1})}var a={userId:this.userId,userName:this.userinfo.name,specName:this.userinfo.spec_name,userPhoto:this.imglist,userSex:this.userinfo.userSex,nickName:this.userinfo.nickName,userPhone:this.userinfo.userPhone};(0,n.updateUserInfo)(a).then(function(t){0==t.data.code&&(e.showToast({title:"保存成功",mask:!1,duration:1500}),setTimeout(function(t){e.navigateBack({data:1})},1500))})},getUserById:function(){var e=this;(0,n.getUserById)(this.userId).then(function(t){t.data.data.userPhoto&&(e.imglist=t.data.data.userPhoto),t.data.data.userName&&(e.userinfo.name=t.data.data.userName),t.data.data.userPhone&&(e.userinfo.userPhone=t.data.data.userPhone),t.data.data.specName&&(e.userinfo.spec_name=t.data.data.specName),t.data.data.userSex&&(e.userinfo.userSex=t.data.data.userSex),t.data.data.nickName&&(e.userinfo.nickName=t.data.data.nickName)})},bindPickerChange:function(e){this.userinfo.userSex=e.detail.value},paizhao:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){console.log(a),t.imglist2=a.tempFilePaths[0],e.uploadFile({url:s.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(e){var a=JSON.parse(e.data);t.imglist=a.data}})}})}},computed:r({},(0,i.mapState)(["userId"]))};t.default=u}).call(this,a("6e42")["default"])}},[["2af0","common/runtime","common/vendor"]]]);
});
require('pages/userMsg/userMsg.js');
__wxRoute = 'pages/productList/productList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/productList/productList.js';

define('pages/productList/productList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/productList/productList"],{2669:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},t._l(t.productList,function(e,r){return n("view",{key:r,staticClass:"item"},[n("image",{attrs:{src:t.imgURl+e.imgList[0],mode:""}}),n("view",{staticClass:"msg"},[n("text",[t._v(t._s(e.productName))]),n("text",[t._v(t._s(e.descript))])]),n("text",{staticClass:"price"},[t._v("￥"+t._s(e.price)+"元")])])}))},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"5ba2":function(t,e,n){"use strict";n("0cb7");var r=a(n("b0ce")),o=a(n("b732"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,r.default)(o.default))},"7f7d":function(t,e,n){},"91fd":function(t,e,n){"use strict";var r=n("7f7d"),o=n.n(r);o.a},b50f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("a021"),o=n("b607"),a=n("2f62");function i(t){return s(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={data:function(){return{imgURl:"",productList:[],pageNo:1,sortWay:0}},onLoad:function(){this.imgURl=r.imgURl,this.getProductByShopId(this.pageNo,10,this.shopId,this.sortWay)},onReachBottom:function(){this.pageNo++,this.getProductByShopId(this.pageNo,10,this.shopId,this.sortWay)},computed:f({},(0,a.mapState)(["userId","shopId"])),methods:{getProductByShopId:function(e,n,r,a){var c=this;(0,o.getProductByShopId)(e,n,r,a).then(function(e){0==e.data.code&&(0==e.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),c.productList=[].concat(i(c.productList),i(e.data.data.list)))})}}};e.default=l}).call(this,n("6e42")["default"])},b732:function(t,e,n){"use strict";n.r(e);var r=n("2669"),o=n("e9fe");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("91fd");var i=n("2877"),c=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"92b2e45a",null);e["default"]=c.exports},e9fe:function(t,e,n){"use strict";n.r(e);var r=n("b50f"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a}},[["5ba2","common/runtime","common/vendor"]]]);
});
require('pages/productList/productList.js');
__wxRoute = 'pages/xiaolingTJ/xiaolingTJ';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/xiaolingTJ/xiaolingTJ.js';

define('pages/xiaolingTJ/xiaolingTJ.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaolingTJ/xiaolingTJ"],{1158:function(t,e,n){"use strict";var a=n("ad22"),o=n.n(a);o.a},"3a6d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t._m(0),t._l(t.productList,function(e,a){return n("view",{key:a},[n("text",{staticClass:"title"},[t._v(t._s(e.productName))]),n("text",[t._v(t._s(e.orderCount))]),n("text",[t._v(t._s(e.saleCount))]),n("text",[t._v("￥"+t._s(e.salePrice))])])}),n("view",[n("text",{staticClass:"title"},[t._v("总计")]),n("text",[t._v(t._s(t.totalOrderCount))]),n("text",[t._v(t._s(t.totalSaleCount))]),n("text",[t._v("￥"+t._s(t.totalSalePrice))])])],2)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("text",[t._v("产品名称")]),n("text",[t._v("销售笔数")]),n("text",[t._v("销售数量")]),n("text",[t._v("销售金额")])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},6498:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62"),o=n("b607");function r(t){return c(t)||u(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){return{totalOrderCount:"",totalSaleCount:"",totalSalePrice:"",pageNo:1,productList:[]}},onLoad:function(){this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,"","")},computed:l({},(0,a.mapState)(["userId","shopId"])),onReachBottom:function(){this.pageNo++,this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,"","")},methods:{getSaleProductAnalysisByShopId:function(e,n,a,i,u){var c=this;(0,o.getSaleProductAnalysisByShopId)(e,n,a,i,u).then(function(e){0==e.data.code&&(0==e.data.data.saleList.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),c.totalOrderCount=e.data.data.totalOrderCount,c.totalSaleCount=e.data.data.totalSaleCount,c.totalSalePrice=e.data.data.totalSalePrice,c.productList=[].concat(r(c.productList),r(e.data.data.saleList.list)))})}}};e.default=d}).call(this,n("6e42")["default"])},"82df":function(t,e,n){"use strict";n.r(e);var a=n("3a6d"),o=n("d223");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("1158");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"fd4b03b6",null);e["default"]=u.exports},ad22:function(t,e,n){},d223:function(t,e,n){"use strict";n.r(e);var a=n("6498"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},d934:function(t,e,n){"use strict";n("0cb7");var a=r(n("b0ce")),o=r(n("82df"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))}},[["d934","common/runtime","common/vendor"]]]);
});
require('pages/xiaolingTJ/xiaolingTJ.js');
__wxRoute = 'pages/shouruTJ/shouruTJ';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shouruTJ/shouruTJ.js';

define('pages/shouruTJ/shouruTJ.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shouruTJ/shouruTJ"],{"2cb8":function(t,e,a){"use strict";a.r(e);var i=a("ba2e"),o=a("bfde");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("8dbc");var s=a("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"0588f1f2",null);e["default"]=r.exports},"7d1e":function(t,e,a){"use strict";a("0cb7");var i=n(a("b0ce")),o=n(a("2cb8"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},"8dbc":function(t,e,a){"use strict";var i=a("dce6"),o=a.n(i);o.a},ba2e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"liubai"}),a("view",{staticClass:"title"},[a("picker",{attrs:{mode:"date",eventid:"7f7950b2-0"},on:{change:t.bindPickerChange}},[a("image",{attrs:{src:"../../static/rili_13.png"}})]),a("text",{staticClass:"date"},[t._v(t._s(t.isDate))]),a("text",{staticClass:"tabs",attrs:{eventid:"7f7950b2-1"},on:{click:function(e){t.ishowList()}}},[t._v("全部产品")])],1),a("view",{staticClass:"liubai"}),t._m(0),t._l(t.productList,function(e,i){return a("view",{key:i,staticClass:"item"},[a("text",{staticClass:"title2"},[t._v(t._s(e.productName))]),a("text",[t._v(t._s(e.orderCount))]),a("text",[t._v(t._s(e.saleCount))]),a("text",[t._v("￥"+t._s(e.salePrice))])])}),a("view",{staticClass:"item"},[a("text",{staticClass:"title2"},[t._v("总计")]),a("text",[t._v(t._s(t.totalOrderCount))]),a("text",[t._v(t._s(t.totalSaleCount))]),a("text",[t._v("￥"+t._s(t.totalSalePrice))])]),t.ishow?a("view",{staticClass:"content2"},t._l(t.categoryList,function(e,i){return a("view",{key:i,staticClass:"list",attrs:{eventid:"7f7950b2-2-"+i},on:{click:function(a){t.categoryChange(e.categoryId)}}},[t._v(t._s(e.categoryName))])})):t._e()],2)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"item"},[a("text",[t._v("产品名称")]),a("text",[t._v("销售笔数")]),a("text",[t._v("销售数量")]),a("text",[t._v("销售金额")])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},bfde:function(t,e,a){"use strict";a.r(e);var i=a("fbbc"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},dce6:function(t,e,a){},fbbc:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62"),o=a("b607");function n(t){return c(t)||r(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){l(t,e,a[e])})}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={data:function(){return{categoryList:[],productList:[],totalOrderCount:"",totalSaleCount:"",totalSalePrice:"",pageNo:1,categoryId:"",ishow:!1,winHeight:"",isDate:"",startTime:""}},onLoad:function(){var e=this;this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,this.categoryId,this.startTime),this.getProductCategory(1,1),this.isDate=this.getNowFormatDate(),t.getSystemInfo({success:function(t){e.winHeight=t.screenHeight}})},onReachBottom:function(){this.pageNo++,this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,this.categoryId,this.startTime)},computed:u({},(0,i.mapState)(["userId","shopId"])),methods:{getProductCategory:function(t,e){var a=this;(0,o.getProductCategory)(t,e).then(function(t){0==t.data.code&&(a.categoryList=t.data.data.cateGories)})},categoryChange:function(t){this.categoryId=t,this.productList=[],this.ishow=!1,this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,this.categoryId,this.startTime)},getNowFormatDate:function(){var t=new Date,e="-",a=t.getFullYear(),i=t.getMonth()+1,o=t.getDate();i>=1&&i<=9&&(i="0"+i),o>=0&&o<=9&&(o="0"+o);var n=a+e+i+e+o;return n},getSaleProductAnalysisByShopId:function(e,a,i,s,r){var c=this;(0,o.getSaleProductAnalysisByShopId)(e,a,i,s,r).then(function(e){0==e.data.code&&(0==e.data.data.saleList.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),c.totalOrderCount=e.data.data.totalOrderCount,c.totalSaleCount=e.data.data.totalSaleCount,c.totalSalePrice=e.data.data.totalSalePrice,c.productList=[].concat(n(c.productList),n(e.data.data.saleList.list)))})},ishowList:function(){this.ishow=!this.ishow},bindPickerChange:function(t){this.isDate=t.detail.value,this.startTime=t.detail.value,this.productList=[],this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,this.categoryId,this.startTime),console.log(t)}}};e.default=d}).call(this,a("6e42")["default"])}},[["7d1e","common/runtime","common/vendor"]]]);
});
require('pages/shouruTJ/shouruTJ.js');
__wxRoute = 'pages/addProduct/addProduct';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/addProduct/addProduct.js';

define('pages/addProduct/addProduct.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addProduct/addProduct"],{"266a":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"input_item"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("商品名称:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.productName,expression:"productName"}],attrs:{type:"text",placeholder:"请输入商品名称",eventid:"10a01032-0"},domProps:{value:t.productName},on:{input:function(e){e.target.composing||(t.productName=e.target.value)}}})]),i("view",{staticClass:"addimg"},[t._m(0),t._l(t.imglist,function(e,s){return 0!==t.imglist.length?i("image",{key:s,attrs:{src:e}}):t._e()}),t.imglist.length<5?i("image",{attrs:{src:"../../static/tupiantianjia_03.png",mode:"",eventid:"10a01032-1"},on:{click:function(e){t.paizhao()}}}):t._e()],2),i("view",{staticClass:"input_item"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("商品价格:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"text",placeholder:"请输入商品名称",eventid:"10a01032-2"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),i("view",{staticClass:"radio"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("配送方式")]),i("view",{staticClass:"msg"},[0==t.expressId?i("image",{attrs:{src:"../../static/mianfeipeisong_07.png",mode:"",eventid:"10a01032-3"},on:{click:function(e){t.radio1Change()}}}):t._e(),1==t.expressId?i("image",{attrs:{src:"../../static/ziti_09.png",mode:"",eventid:"10a01032-4"},on:{click:function(e){t.radio1Change()}}}):t._e(),i("text",[t._v("免费配送")]),1==t.expressId?i("image",{attrs:{src:"../../static/mianfeipeisong_07.png",mode:"",eventid:"10a01032-5"},on:{click:function(e){t.radio1Change()}}}):t._e(),0==t.expressId?i("image",{attrs:{src:"../../static/ziti_09.png",mode:"",eventid:"10a01032-6"},on:{click:function(e){t.radio1Change()}}}):t._e(),i("text",[t._v("自提")])])]),i("view",{staticClass:"shuxing"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("商品属性")]),t.categoryName?i("text",[t._v(t._s(t.categoryName))]):t._e(),i("image",{attrs:{src:"../../static/shangpinshuxing_14.png",mode:"",eventid:"10a01032-7"},on:{click:function(e){t.ishowChange()}}})]),i("view",{staticClass:"shuxing"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("商品规格")]),i("image",{attrs:{src:"../../static/shangpinshuxing_14.png",mode:"",eventid:"10a01032-8"},on:{click:function(e){t.addGuige()}}})]),t._l(t.guigeList,function(e,s){return i("view",{key:s,staticClass:"guigeList"},[i("text",[t._v(t._s(s+1)+"规格名称:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.productSpecs,expression:"item.productSpecs"}],attrs:{type:"text",placeholder:"请输入名称",eventid:"10a01032-9-"+s},domProps:{value:e.productSpecs},on:{input:function(t){t.target.composing||(e.productSpecs=t.target.value)}}}),i("text",[t._v("价格:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],attrs:{type:"number",placeholder:"请输入价格",eventid:"10a01032-10-"+s},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}})])}),i("view",{staticClass:"input_item"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("商品单位:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.specUnit,expression:"specUnit"}],attrs:{type:"text",placeholder:"计算单位/斤/个/只/件...",eventid:"10a01032-11"},domProps:{value:t.specUnit},on:{input:function(e){e.target.composing||(t.specUnit=e.target.value)}}})]),i("view",{staticClass:"input_item"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("商品数量:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sellCount,expression:"sellCount"}],attrs:{type:"number",placeholder:"商品库存数量",eventid:"10a01032-12"},domProps:{value:t.sellCount},on:{input:function(e){e.target.composing||(t.sellCount=e.target.value)}}})]),i("view",{staticClass:"input_item"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("商品描述:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.descript,expression:"descript"}],attrs:{type:"text",placeholder:"请输入商品描述",eventid:"10a01032-13"},domProps:{value:t.descript},on:{input:function(e){e.target.composing||(t.descript=e.target.value)}}})]),t.isShowshangj?i("view",{staticClass:"btn"},[t.productId?t._e():i("text",{attrs:{eventid:"10a01032-14"},on:{click:function(e){t.AddProduct()}}},[t._v("立即上架")]),t.productId?i("text",{attrs:{eventid:"10a01032-15"},on:{click:function(e){t.AddProduct2()}}},[t._v("立即修改")]):t._e()]):i("view",{staticClass:"btn_2"},[t.productId?t._e():i("text",[t._v("立即上架")]),t.productId?i("text",[t._v("立即修改")]):t._e()]),t.isshow?i("view",{staticClass:"bottomWindow"},[i("view",{staticClass:"content"},[i("text",[t._v("商品分类")]),i("view",{staticClass:"guige2"},t._l(t.categoryList,function(e,s){return i("text",{key:s,class:{active:t.currentTabs==s},attrs:{eventid:"10a01032-16-"+s},on:{click:function(i){t.categoryChange(s,e.categoryId,e.categoryName)}}},[t._v(t._s(e.categoryName))])})),i("view",{staticClass:"btn2",attrs:{eventid:"10a01032-17"},on:{click:function(e){t.isOk()}}},[t._v("完成")])])]):t._e()],2)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"title"},[i("text",{staticStyle:{width:"150rpx"}},[t._v("商品图片:")]),i("text",[t._v("请上传商品图片")])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},abea:function(t,e,i){"use strict";i.r(e);var s=i("d364"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);e["default"]=a.a},baac:function(t,e,i){"use strict";i("0cb7");var s=o(i("b0ce")),a=o(i("f1f2"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},cbbf:function(t,e,i){"use strict";var s=i("fdd8"),a=i.n(s);a.a},d364:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("2f62"),a=i("a021"),o=i("b607");function n(t){return d(t)||r(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),s.forEach(function(e){l(t,e,i[e])})}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p={data:function(){return{isShowshangj:!0,isshowBtn:!0,categoryName:"",currentTabs:-1,categoryList:[],productName:"",categoryId:"",descript:"",productImage:[],price:"",sellCount:"",specUnit:"",expressId:0,guigeList:[{productSpecs:"",price:"",specForm:1}],imglist:[],radio2:1,isshow:!1,productId:""}},onLoad:function(t){t.id&&(this.productId=t.id,this.getShopProductById(t.id)),this.getProductCategory(1,1)},computed:u({},(0,s.mapState)(["userId","shopId"])),methods:{getShopProductById:function(t){var e=this;(0,o.getShopProductById)(t).then(function(t){if(0==t.data.code){var i=[],s=!0,a=!1,o=void 0;try{for(var n,c=t.data.data.specList[Symbol.iterator]();!(s=(n=c.next()).done);s=!0){var r=n.value,d={productSpecs:r.productSpecs,price:r.price,specForm:1};i.push(d)}}catch(u){a=!0,o=u}finally{try{s||null==c.return||c.return()}finally{if(a)throw o}}e.guigeList=i,e.price=t.data.data.price,e.productName=t.data.data.productName,e.descript=t.data.data.descript,e.categoryId=t.data.data.categoryId,e.sellCount=t.data.data.sellCount,e.specUnit=t.data.data.specUnit,e.expressId=t.data.data.expressId}})},categoryChange:function(t,e,i){this.currentTabs=t,this.categoryId=e,this.categoryName=i},getProductCategory:function(t,e){var i=this;(0,o.getProductCategory)(t,e).then(function(t){0==t.data.code&&(i.categoryList=t.data.data.cateGories)})},AddProduct:function(){if(this.productName)if(0!=this.productImage.length)if(this.price)if(this.categoryId){for(var e=0;e<this.guigeList.length;e++)""==this.guigeList[e].productSpecs&&this.guigeList.splice(e);if(0!=this.guigeList.length)if(this.specUnit)if(this.sellCount)if(this.descript){var i={userId:this.userId,shopId:this.shopId,productName:this.productName,categoryId:this.categoryId,sellCount:this.sellCount,price:this.price,productImage:this.productImage.join(","),descript:this.descript,specUnit:this.specUnit,expressId:this.expressId,productSpecDtoList:this.guigeList};this.isShowshangj=!1,(0,o.addProduct)(i).then(function(e){0==e.data.code&&t.showToast({title:"添加成功"}),setTimeout(function(e){t.navigateBack({delta:1})},2e3)})}else t.showModal({title:"",content:"请输入商品描述",showCancel:!1});else t.showModal({title:"",content:"请输入商品库存",showCancel:!1});else t.showModal({title:"",content:"请输入商品单位",showCancel:!1});else t.showModal({title:"",content:"请至少上传一种商品规格",showCancel:!1})}else t.showModal({title:"",content:"请选择商品分类属性",showCancel:!1});else t.showModal({title:"",content:"请输入商品价格",showCancel:!1});else t.showModal({title:"",content:"请上传商品图片",showCancel:!1});else t.showModal({title:"",content:"请输入商品名",showCancel:!1})},AddProduct2:function(){if(this.productName)if(this.sellCount)if(this.price)if(this.descript)if(this.specUnit)if(this.categoryId)if(0!=this.productImage.length){for(var e=0;e<this.guigeList.length;e++)""==this.guigeList[e].productSpecs&&this.guigeList.splice(e);var i={productId:this.productId,userId:this.userId,shopId:this.shopId,productName:this.productName,categoryId:this.categoryId,sellCount:this.sellCount,price:this.price,productImage:this.productImage.join(","),descript:this.descript,specUnit:this.specUnit,expressId:this.expressId,productSpecDtoList:this.guigeList};this.isShowshangj=!1,(0,o.updProduct)(i).then(function(e){0==e.data.code&&t.showToast({title:"修改成功"}),setTimeout(function(e){t.navigateBack({delta:1})},2e3)})}else t.showModal({title:"",content:"请上传商品图片",showCancel:!1});else t.showModal({title:"",content:"请选择商品分类",showCancel:!1});else t.showModal({title:"",content:"请输入商品单位",showCancel:!1});else t.showModal({title:"",content:"请输入商品描述",showCancel:!1});else t.showModal({title:"",content:"请输入商品价格",showCancel:!1});else t.showModal({title:"",content:"请输入商品库存",showCancel:!1});else t.showModal({title:"",content:"请输入商品名",showCancel:!1})},addGuige:function(){if(!(this.guigeList.length>5)){var t={productSpecs:"",price:"",specForm:1};this.guigeList.push(t)}},paizhao:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var s;console.log(i),(s=e.imglist).push.apply(s,n(i.tempFilePaths)),t.uploadFile({url:a.baseURL+"/file/upload",filePath:i.tempFilePaths[0],name:"file",formData:{user:"test",file:i.tempFilePaths[0]},success:function(i){var s=JSON.parse(i.data);0==s.code&&(console.log(i),e.productImage.push(s.data),t.showToast({title:"上传成功"}))}})}})},radio1Change:function(){0==this.expressId?this.expressId=1:this.expressId=0},radio2Change:function(){1==this.radio2?this.radio2=2:this.radio2=1},ishowChange:function(){this.isshow=!0},isOk:function(){console.log(888),this.isshow=!1}}};e.default=p}).call(this,i("6e42")["default"])},f1f2:function(t,e,i){"use strict";i.r(e);var s=i("266a"),a=i("abea");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("cbbf");var n=i("2877"),c=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,"73fff5a6",null);e["default"]=c.exports},fdd8:function(t,e,i){}},[["baac","common/runtime","common/vendor"]]]);
});
require('pages/addProduct/addProduct.js');
__wxRoute = 'pages/myOrder/myOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myOrder/myOrder.js';

define('pages/myOrder/myOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myOrder/myOrder"],{"34a7":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:"content"},[r("view",{staticClass:"tabs"},[r("text",{class:{active:1==t.currentTabs},attrs:{eventid:"343a76b8-0"},on:{click:function(e){t.tabs(1)}}},[t._v("待确认")]),r("text",{class:{active:2==t.currentTabs},attrs:{eventid:"343a76b8-1"},on:{click:function(e){t.tabs(2)}}},[t._v("已确认")])]),t._l(t.productList,function(e,n){return r("view",{key:n,staticClass:"item"},[r("view",{staticClass:"head"},[r("image",{attrs:{src:t.imgURl+e.product.imgList[0],mode:""}}),r("view",{staticClass:"msg"},[r("text",{staticClass:"title"},[t._v(t._s(e.product.productName))]),r("text",[t._v(t._s(e.product.descript))]),r("text",[t._v(t._s(e.productSpec.productSpecs))]),r("text",{staticClass:"price"},[t._v("￥"+t._s(e.order.orderMoney))])])]),r("view",{staticClass:"footer"},[1==t.currentTabs?r("text",{staticClass:"quxiao",attrs:{eventid:"343a76b8-2-"+n},on:{click:function(r){t.cancel(e.detailId)}}},[t._v("取消订单")]):t._e(),1==t.currentTabs?r("text",{staticClass:"queren",attrs:{eventid:"343a76b8-3-"+n},on:{click:function(r){t.confirm(e.detailId)}}},[t._v("确认订单")]):t._e(),2==t.currentTabs?r("text",{staticClass:"queren2"},[t._v("已确认")]):t._e()])])})],2)},a=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a})},"387f":function(t,e,r){},"9a53":function(t,e,r){"use strict";r.r(e);var n=r("b8be"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},b8be:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("2f62"),a=r("a021"),i=r("b607");function s(t){return u(t)||o(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){f(t,e,r[e])})}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={data:function(){return{queryType:1,imgURl:"",productList:[],currentTabs:1,state:1,pageNo:1,pageSize:10}},onLoad:function(){this.imgURl=a.imgURl,this.queryOrderList(this.userId,this.queryType,this.state,this.pageNo,this.pageSize)},onReachBottom:function(){this.pageNo++,this.queryOrderList(this.userId,this.queryType,this.state,this.pageNo,this.pageSize)},computed:d({},(0,n.mapState)(["userId","shopId"])),methods:{confirm:function(e){var r=this;(0,i.confirmOrder)("",e,2).then(function(e){0==e.data.code&&(t.showToast({title:"确认订单成功",icon:"none",duration:1e3}),r.pageNo=1,r.productList=[],r.queryOrderList(r.userId,r.queryType,r.state,r.pageNo,r.pageSize))})},cancel:function(t){var e=this;(0,i.cancelOrder)(t).then(function(t){0==t.data.code&&(e.pageNo=1,e.productList=[],e.queryOrderList(e.userId,e.queryType,e.state,e.pageNo,e.pageSize))})},queryOrderList:function(e,r,n,a,c){var o=this;(0,i.queryOrderList)(e,r,n,a,c).then(function(e){0==e.data.code&&(0==e.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),o.productList=[].concat(s(o.productList),s(e.data.data.list)))})},tabs:function(t){this.productList=[],this.state=t,this.currentTabs=t,this.queryOrderList(this.userId,this.queryType,this.state,this.pageNo,this.pageSize)}}};e.default=l}).call(this,r("6e42")["default"])},cd16:function(t,e,r){"use strict";var n=r("387f"),a=r.n(n);a.a},e4ff:function(t,e,r){"use strict";r("0cb7");var n=i(r("b0ce")),a=i(r("f6b1"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},f6b1:function(t,e,r){"use strict";r.r(e);var n=r("34a7"),a=r("9a53");for(var i in a)"default"!==i&&function(t){r.d(e,t,function(){return a[t]})}(i);r("cd16");var s=r("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"5e16b7b2",null);e["default"]=c.exports}},[["e4ff","common/runtime","common/vendor"]]]);
});
require('pages/myOrder/myOrder.js');
__wxRoute = 'pages/Account_center/Account_center';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Account_center/Account_center.js';

define('pages/Account_center/Account_center.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Account_center/Account_center"],{1357:function(t,n,e){"use strict";e.r(n);var c=e("c2dd"),o=e("4d17");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("624b");var a=e("2877"),r=Object(a["a"])(o["default"],c["a"],c["b"],!1,null,"4ec2813d",null);n["default"]=r.exports},"4c55":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("b607");var c={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{tuichu:function(){var n=this;t.showModal({title:"",content:"是否确认退出",success:function(e){e.confirm?(n.$store.commit("SET_SHOPID",""),n.$store.commit("SET_USERID",""),t.setStorageSync("userId",""),t.setStorageSync("shopId",""),t.reLaunch({url:"/pages/logn/logn"})):e.cancel&&console.log("用户点击取消")}})}}};n.default=c}).call(this,e("6e42")["default"])},"4d17":function(t,n,e){"use strict";e.r(n);var c=e("4c55"),o=e.n(c);for(var u in c)"default"!==u&&function(t){e.d(n,t,function(){return c[t]})}(u);n["default"]=o.a},"624b":function(t,n,e){"use strict";var c=e("9f16"),o=e.n(c);o.a},"9f16":function(t,n,e){},c2dd:function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[e("navigator",{staticClass:"item",attrs:{url:"/pages/cz_psssword/cz_psssword"}},[e("image",{attrs:{src:"../../static/shurumima_10.png",mode:""}}),e("text",[t._v("修改登录密码")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("view",{staticClass:"btn",attrs:{eventid:"10015b92-0"},on:{click:function(n){t.tuichu()}}},[t._v("退出登录")])],1)},o=[];e.d(n,"a",function(){return c}),e.d(n,"b",function(){return o})},f672:function(t,n,e){"use strict";e("0cb7");var c=u(e("b0ce")),o=u(e("1357"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,c.default)(o.default))}},[["f672","common/runtime","common/vendor"]]]);
});
require('pages/Account_center/Account_center.js');
__wxRoute = 'pages/cz_psssword/cz_psssword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cz_psssword/cz_psssword.js';

define('pages/cz_psssword/cz_psssword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cz_psssword/cz_psssword"],{"0d38":function(e,t,o){"use strict";o.r(t);var a=o("9ac3"),n=o("6d43");for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);o("25c7");var i=o("2877"),r=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,"4f14616d",null);t["default"]=r.exports},1798:function(e,t,o){"use strict";o("0cb7");var a=s(o("b0ce")),n=s(o("0d38"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},"25c7":function(e,t,o){"use strict";var a=o("b49d"),n=o.n(a);n.a},"4caf":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("2f62"),n=o("b607");function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),a.forEach(function(t){i(e,t,o[t])})}return e}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r={data:function(){return{iphone:"",code:"",authCode:"",codeTime:"获取验证码",codeFlag:!0,password1:"",password2:"",password3:""}},onLoad:function(){},methods:{getCode:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.codeFlag){var o=this;this.CountdownFun(60),(0,n.sendSmsCode)(this.iphone).then(function(t){0==t.data.code?o.code=t.data.data:e.showToast({title:t.data.data,icon:"none",duration:1500})})}},CountdownFun:function(e){var t=this,o=setInterval(function(){e--,t.codeTime=e,0==e&&(clearInterval(o),t.codeFlag=!0,t.codeTime="获取验证码")},1e3)},passWordChange:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.password1)if(this.password2)if(this.password3)if(this.password2==this.password3)if(this.authCode)if(this.authCode==this.code){var o={authCode:this.authCode,userId:this.userId,password:this.password1,newPassword:this.password2};(0,n.updUserPassword)(o).then(function(t){0==t.data.code?(e.showToast({title:"修改密码成功",mask:!1,duration:1500}),setTimeout(function(t){e.navigateTo({url:"/pages/logn/logn"})},1500)):e.showModal({title:"",content:t.data.msg,showCancel:!1})})}else e.showModal({title:"",content:"验证码不正确",showCancel:!1});else e.showModal({title:"",content:"请输入验证码",showCancel:!1});else e.showModal({title:"",content:"两次输入密码不一致",showCancel:!1});else e.showModal({title:"",content:"请再次输入新密码",showCancel:!1});else e.showModal({title:"",content:"新密码不能为空",showCancel:!1});else e.showModal({title:"",content:"旧密码不能为空",showCancel:!1})}},computed:s({},(0,a.mapState)(["userId"]))};t.default=r}).call(this,o("6e42")["default"])},"6d43":function(e,t,o){"use strict";o.r(t);var a=o("4caf"),n=o.n(a);for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"9ac3":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"content"},[o("view",{staticClass:"item"},[o("text",[e._v("手机号")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.iphone,expression:"iphone"}],attrs:{type:"number",value:"",placeholder:"请输入手机号",eventid:"28cad39e-0"},domProps:{value:e.iphone},on:{input:function(t){t.target.composing||(e.iphone=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("旧密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{type:"password",placeholder:"请输入旧密码",eventid:"28cad39e-1"},domProps:{value:e.password1},on:{input:function(t){t.target.composing||(e.password1=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("新密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",placeholder:"请输入新密码",eventid:"28cad39e-2"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("确认密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password3,expression:"password3"}],attrs:{type:"password",placeholder:"请输入确认密码",eventid:"28cad39e-3"},domProps:{value:e.password3},on:{input:function(t){t.target.composing||(e.password3=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("验证码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.authCode,expression:"authCode"}],attrs:{type:"number",value:"",placeholder:"请输入验证码",eventid:"28cad39e-4"},domProps:{value:e.authCode},on:{input:function(t){t.target.composing||(e.authCode=t.target.value)}}}),o("view",{staticClass:"code",attrs:{eventid:"28cad39e-5"},on:{click:e.getCode}},[e._v(e._s(e.codeTime))])]),o("view",{staticClass:"btn",attrs:{eventid:"28cad39e-6"},on:{click:function(t){e.passWordChange()}}},[e._v("立即重置")])])},n=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return n})},b49d:function(e,t,o){}},[["1798","common/runtime","common/vendor"]]]);
});
require('pages/cz_psssword/cz_psssword.js');
__wxRoute = 'pages/callCenter/callCenter';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/callCenter/callCenter.js';

define('pages/callCenter/callCenter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/callCenter/callCenter"],{4056:function(e,t,n){"use strict";n("0cb7");var a=r(n("b0ce")),c=r(n("8bd2"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(c.default))},"527a":function(e,t,n){"use strict";n.r(t);var a=n("8cc9"),c=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=c.a},"8bd2":function(e,t,n){"use strict";n.r(t);var a=n("8e52"),c=n("527a");for(var r in c)"default"!==r&&function(e){n.d(t,e,function(){return c[e]})}(r);n("d999");var i=n("2877"),u=Object(i["a"])(c["default"],a["a"],a["b"],!1,null,"706520b0",null);t["default"]=u.exports},"8cc9":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("b607"),c={data:function(){return{servicePhone:""}},onShow:function(){this.getCustomerService()},methods:{getCustomerService:function(){var e=this;(0,a.getCustomerService)().then(function(t){0==t.data.code&&(e.servicePhone=t.data.data[0].servicePhone)})},callUp:function(){e.makePhoneCall({phoneNumber:this.servicePhone})}}};t.default=c}).call(this,n("6e42")["default"])},"8e52":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[n("image",{staticClass:"img_1",attrs:{src:"../../static/kefu_03.png",mode:""}}),n("view",{staticClass:"btn",attrs:{eventid:"12ea4312-0"},on:{click:function(t){e.callUp()}}},[n("image",{attrs:{src:"../../static/dianhua_07.png",mode:""}}),n("text",[e._v("客服热线："+e._s(e.servicePhone))])])])},c=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c})},b6e9:function(e,t,n){},d999:function(e,t,n){"use strict";var a=n("b6e9"),c=n.n(a);c.a}},[["4056","common/runtime","common/vendor"]]]);
});
require('pages/callCenter/callCenter.js');
__wxRoute = 'pages/complain/complain';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/complain/complain.js';

define('pages/complain/complain.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/complain/complain"],{"4f2f":function(e,t,n){"use strict";n.r(t);var o=n("5360"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},5360:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62"),a=n("b607");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={data:function(){return{mTopic:"",mContent:"",mPhone:"",mName:""}},onLoad:function(){},computed:i({},(0,o.mapState)(["userId"])),methods:{submit:function(){if(""!=this.mTopic)if(""!=this.mContent){if(this.mPhone){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.mPhone))return console.log(this.mPhone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1})}var n={userId:this.userId,mTopic:this.mTopic,mContent:this.mContent,mPhone:this.mPhone,mName:this.mName,mType:1};(0,a.customerFeedback)(n).then(function(t){0==t.data.code?(e.showToast({title:"意见反馈成功",icon:"none",duration:1e3}),setTimeout(function(t){e.navigateBack({data:1})},1500)):e.showToast({title:t.data.msg,icon:"none",duration:1e3})})}else e.showModal({title:"",content:"请输入反馈内容",showCancel:!1});else e.showModal({title:"",content:"请输入主题",showCancel:!1})}}};t.default=r}).call(this,n("6e42")["default"])},"6cb4":function(e,t,n){"use strict";n("0cb7");var o=i(n("b0ce")),a=i(n("cb63"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(a.default))},"72de":function(e,t,n){"use strict";var o=n("a5e0"),a=n.n(o);a.a},"758d":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[n("view",{staticClass:"item"},[n("text",[e._v("主题")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mTopic,expression:"mTopic"}],attrs:{type:"text",placeholder:"请输入主题",eventid:"5914375c-0"},domProps:{value:e.mTopic},on:{input:function(t){t.target.composing||(e.mTopic=t.target.value)}}})]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.mContent,expression:"mContent"}],attrs:{placeholder:"请输入反馈描述",eventid:"5914375c-1"},domProps:{value:e.mContent},on:{input:function(t){t.target.composing||(e.mContent=t.target.value)}}}),n("view",{staticClass:"item"},[n("text",[e._v("姓名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mName,expression:"mName"}],attrs:{type:"text",placeholder:"选填",eventid:"5914375c-2"},domProps:{value:e.mName},on:{input:function(t){t.target.composing||(e.mName=t.target.value)}}})]),n("view",{staticClass:"item"},[n("text",[e._v("电话")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mPhone,expression:"mPhone"}],attrs:{type:"text",placeholder:"选填",eventid:"5914375c-3"},domProps:{value:e.mPhone},on:{input:function(t){t.target.composing||(e.mPhone=t.target.value)}}})]),n("view",{staticClass:"btn",attrs:{eventid:"5914375c-4"},on:{click:e.submit}},[e._v("提交")])])},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},a5e0:function(e,t,n){},cb63:function(e,t,n){"use strict";n.r(t);var o=n("758d"),a=n("4f2f");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("72de");var c=n("2877"),r=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,"61adba92",null);t["default"]=r.exports}},[["6cb4","common/runtime","common/vendor"]]]);
});
require('pages/complain/complain.js');
__wxRoute = 'pages/gonggaoFabu/gonggaoFabu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/gonggaoFabu/gonggaoFabu.js';

define('pages/gonggaoFabu/gonggaoFabu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gonggaoFabu/gonggaoFabu"],{2583:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"LG"},[a("text",[t._v("上传公告图片")]),0==t.img3.length?a("text",{staticClass:"lg_img",attrs:{eventid:"4ecfa638-0"},on:{click:t.paizhao3}},[t._v("点击上传")]):a("image",{staticClass:"lg_img",attrs:{src:t.img3[0],mode:""}})]),a("view",{staticClass:"liubai"}),a("view",{staticClass:"input"},[a("text",{staticStyle:{width:"150rpx"}},[t._v("公告标题:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入标题",eventid:"4ecfa638-1"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("view",{staticClass:"liubai"}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textInput",attrs:{value:"",placeholder:"发布你的招聘,租房,等便民信息的内容.时间.地点",eventid:"4ecfa638-2"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),a("view",{staticClass:"liubai"}),a("view",{staticClass:"input"},[a("text",{staticStyle:{width:"150rpx"}},[t._v("联系电话:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请输入发布信息人的电话",eventid:"4ecfa638-3"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),a("view",{staticClass:"liubai"}),a("view",{staticClass:"btn",attrs:{eventid:"4ecfa638-4"},on:{click:function(e){t.fabu()}}},[t._v("立即发布")])])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"33ab":function(t,e,a){"use strict";a("0cb7");var n=o(a("b0ce")),i=o(a("a2f5"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"66da":function(t,e,a){"use strict";a.r(e);var n=a("b508"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},8314:function(t,e,a){"use strict";var n=a("ae65"),i=a.n(n);i.a},a2f5:function(t,e,a){"use strict";a.r(e);var n=a("2583"),i=a("66da");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("8314");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"13af1524",null);e["default"]=c.exports},ae65:function(t,e,a){},b508:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("a021"),i=a("2f62"),o=a("b607");function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){c(t,e,a[e])})}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={data:function(){return{img3:[],title:"",content:"",imageId:"",phone:""}},onLoad:function(){},computed:s({},(0,i.mapState)(["userId","shopId"])),methods:{fabu:function(){if(this.imageId)if(this.title)if(this.content){if(this.phone){var e=/^[1][3,4,5,7,8][0-9]{9}$/;if(!e.test(this.phone))return void t.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1})}var a={title:this.title,content:this.content,imageId:this.imageId,shopId:this.shopId,userId:this.userId,phone:this.phone,noticeType:0};(0,o.addNotice)(a).then(function(e){0==e.data.code?(t.showToast({title:"公告发布成功",icon:"none",duration:1e3}),setTimeout(function(e){t.navigateBack({data:1})},1500)):t.showToast({title:"发布失败",icon:"none",duration:1e3})})}else t.showModal({title:"",content:"请输入公告内容",showCancel:!1});else t.showModal({title:"",content:"请输入公告标题",showCancel:!1});else t.showModal({title:"",content:"请上传公告图片",showCancel:!1})},paizhao3:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){e.img3=a.tempFilePaths,t.uploadFile({url:n.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(a){var n=JSON.parse(a.data);0==n.code&&(console.log(a),e.imageId=n.data,t.showToast({title:"上传成功"}))}})}})}}};e.default=l}).call(this,a("6e42")["default"])}},[["33ab","common/runtime","common/vendor"]]]);
});
require('pages/gonggaoFabu/gonggaoFabu.js');
__wxRoute = 'pages/shiwuzhaoling/shiwuzhaoling';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shiwuzhaoling/shiwuzhaoling.js';

define('pages/shiwuzhaoling/shiwuzhaoling.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shiwuzhaoling/shiwuzhaoling"],{"2c6d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("a021"),a=n("2f62"),o=n("b607");function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={data:function(){return{img3:[],title:"",content:"",imageId:"",phone:""}},onLoad:function(){},computed:s({},(0,a.mapState)(["userId","shopId"])),methods:{fabu:function(){if(this.imageId)if(this.title)if(this.content){if(this.phone){var e=/^[1][3,4,5,7,8][0-9]{9}$/;if(!e.test(this.phone))return void t.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1})}var n={title:this.title,content:this.content,imageId:this.imageId,shopId:this.shopId,userId:this.userId,phone:this.phone,noticeType:2};(0,o.addNotice)(n).then(function(e){0==e.data.code?(t.showToast({title:"发布成功",icon:"none",duration:1e3}),setTimeout(function(e){t.navigateBack({data:1})},1500)):t.showToast({title:"发布失败",icon:"none",duration:1e3})})}else t.showModal({title:"",content:"请输入失物内容",showCancel:!1});else t.showModal({title:"",content:"请输入失物标题",showCancel:!1});else t.showModal({title:"",content:"请上传失物图片",showCancel:!1})},paizhao3:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){e.img3=n.tempFilePaths,t.uploadFile({url:i.baseURL+"/file/upload",filePath:n.tempFilePaths[0],name:"file",formData:{user:"test",file:n.tempFilePaths[0]},success:function(n){var i=JSON.parse(n.data);0==i.code&&(console.log(n),e.imageId=i.data,t.showToast({title:"上传成功"}))}})}})}}};e.default=l}).call(this,n("6e42")["default"])},"31bd":function(t,e,n){"use strict";n.r(e);var i=n("2c6d"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},4477:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"LG"},[n("text",[t._v("上传失物图片")]),0==t.img3.length?n("text",{staticClass:"lg_img",attrs:{eventid:"d0169188-0"},on:{click:t.paizhao3}},[t._v("点击上传")]):n("image",{staticClass:"lg_img",attrs:{src:t.img3[0],mode:""}})]),n("view",{staticClass:"liubai"}),n("view",{staticClass:"input"},[n("text",{staticStyle:{width:"150rpx"}},[t._v("失物标题:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入标题",eventid:"d0169188-1"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("view",{staticClass:"liubai"}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textInput",attrs:{value:"",placeholder:"发布你的失物招领内容.时间.地点",eventid:"d0169188-2"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("view",{staticClass:"liubai"}),n("view",{staticClass:"input"},[n("text",{staticStyle:{width:"150rpx"}},[t._v("联系电话:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请输入发布信息人的电话",eventid:"d0169188-3"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),n("view",{staticClass:"liubai"}),n("view",{staticClass:"btn",attrs:{eventid:"d0169188-4"},on:{click:function(e){t.fabu()}}},[t._v("立即发布")])])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d0c8:function(t,e,n){"use strict";var i=n("e69e"),a=n.n(i);a.a},e69e:function(t,e,n){},fbb8:function(t,e,n){"use strict";n.r(e);var i=n("4477"),a=n("31bd");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("d0c8");var s=n("2877"),c=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"ab81862a",null);e["default"]=c.exports},fef7:function(t,e,n){"use strict";n("0cb7");var i=o(n("b0ce")),a=o(n("fbb8"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))}},[["fef7","common/runtime","common/vendor"]]]);
});
require('pages/shiwuzhaoling/shiwuzhaoling.js');
__wxRoute = 'pages/wjPassword/wjPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/wjPassword/wjPassword.js';

define('pages/wjPassword/wjPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wjPassword/wjPassword"],{"0340":function(e,t,o){"use strict";o.r(t);var a=o("859e"),n=o.n(a);for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"154d":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"content"},[o("view",{staticClass:"item"},[o("text",[e._v("手机号")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.iphone,expression:"iphone"}],attrs:{type:"number",value:"",placeholder:"请输入手机号",eventid:"251da032-0"},domProps:{value:e.iphone},on:{input:function(t){t.target.composing||(e.iphone=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("设置新密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",value:"",placeholder:"请输入6-20位密码",eventid:"251da032-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("确认新密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",value:"",placeholder:"请确认密码",eventid:"251da032-2"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("验证码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.authCode,expression:"authCode"}],attrs:{type:"number",value:"",placeholder:"请输入验证码",eventid:"251da032-3"},domProps:{value:e.authCode},on:{input:function(t){t.target.composing||(e.authCode=t.target.value)}}}),o("view",{staticClass:"code",attrs:{eventid:"251da032-4"},on:{click:e.getCode}},[e._v(e._s(e.codeTime))])]),o("view",{staticClass:"btn",attrs:{eventid:"251da032-5"},on:{click:function(t){e.retrievePassword()}}},[e._v("提交")])])},n=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return n})},"3d01":function(e,t,o){"use strict";o.r(t);var a=o("154d"),n=o("0340");for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);o("e02d");var i=o("2877"),d=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,"40a9166b",null);t["default"]=d.exports},"6c73":function(e,t,o){"use strict";o("0cb7");var a=s(o("b0ce")),n=s(o("3d01"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},"859e":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("b607"),n={data:function(){return{code:"",authCode:"",codeTime:"获取验证码",codeFlag:!0,yueduxieyi:!1,iphone:"",password:"",password2:""}},onLoad:function(){},methods:{getCode:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.codeFlag){var o=this;this.CountdownFun(60),(0,a.sendSmsCode)(this.iphone).then(function(t){0==t.data.code?o.code=t.data.data:e.showToast({title:t.data.data,icon:"none",duration:1500})})}},CountdownFun:function(e){var t=this,o=setInterval(function(){e--,t.codeTime=e,0==e&&(clearInterval(o),t.codeFlag=!0,t.codeTime="获取验证码")},1e3)},retrievePassword:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.password)if(this.password.length<6)e.showModal({title:"",content:"密码不能小于6位",showCancel:!1});else if(this.password==this.password2)if(this.authCode)if(this.authCode==this.code){var o={authCode:this.authCode,phone:this.iphone,password:this.password};(0,a.retrievePassword)(o).then(function(t){0==t.data.code&&(e.showToast({title:t.data.data,duration:2e3}),setTimeout(function(t){e.navigateBack({delta:1})},2e3))})}else e.showModal({title:"",content:"验证码不正确",showCancel:!1});else e.showModal({title:"",content:"请输入验证码",showCancel:!1});else e.showModal({title:"",content:"两次输入的密码不一致",showCancel:!1});else e.showModal({title:"",content:"请输入密码",showCancel:!1})},tongyixieyi:function(){this.yueduxieyi=!this.yueduxieyi}}};t.default=n}).call(this,o("6e42")["default"])},e02d:function(e,t,o){"use strict";var a=o("f31b"),n=o.n(a);n.a},f31b:function(e,t,o){}},[["6c73","common/runtime","common/vendor"]]]);
});
require('pages/wjPassword/wjPassword.js');


