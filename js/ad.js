var w = 550;	
var h = 500;
var ct = 50;

//------------------------------

var ie=document.all
var dom=document.getElementById
var ns4=document.layers
var calunits=document.layers? "" : "px"

var bouncelimit=32 //(must be divisible by 8)
var direction="up"

function initbox(){
if (!dom&&!ie&&!ns4)
return
calcTop();
crossobj=(dom)?document.getElementById("dropin").style : ie? document.all.dropin : document.dropin
scroll_top=(ie)? truebody().scrollTop : window.pageYOffset
crossobj.top=scroll_top-650+calunits
crossobj.visibility=(dom||ie)? "visible" : "show"
setLeft();
dropstart=setInterval("dropin()",50)
}

function dropin(){
scroll_top=(ie)? truebody().scrollTop : window.pageYOffset
if (parseInt(crossobj.top)<ct+scroll_top)
crossobj.top=parseInt(crossobj.top)+40+calunits
else{
clearInterval(dropstart)
bouncestart=setInterval("bouncein()",50)
}
}

function bouncein(){
crossobj.top=parseInt(crossobj.top)-bouncelimit+calunits
if (bouncelimit<0)
bouncelimit+=8
bouncelimit=bouncelimit*-1
if (bouncelimit==0){
clearInterval(bouncestart)
}
}

function dismissbox(){
if (window.bouncestart) clearInterval(bouncestart)
crossobj.visibility="hidden"
}

function truebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}


function get_cookie(Name) {
var search = Name + "="
var returnvalue = ""
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) {
offset += search.length
end = document.cookie.indexOf(";", offset)
if (end == -1)
end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}

function dropornot(){
if (get_cookie("droppedin2")==""){
initbox();

var today = new Date();
var expires = new Date(today.getTime() + 30*24*60*60*1000);


document.cookie="droppedin2=yes;  path=/; expires=" + expires.toGMTString() ;
}

initbox(); // for all
}


//----------------------------------------
function setLeft() {
	if (document.layers) document.layers.dropin.left = ((window.innerWidth / 2) - (w / 2))+"px";
	else if (document.all) document.all.dropin.style.left = ((document.body.offsetWidth / 2) - (w / 2))+"px";
	else if (document.getElementById) document.getElementById("dropin").style.left = ((window.innerWidth / 2) - (w / 2))+"px";
}

function calcTop() {
	if (document.layers) ct = ((window.innerHeight / 2) - (h / 2));
	else if (document.all)
	{
	 var client_height;
	 if (!window.opera)
	//{client_height=document.body.clientHeight;}
	  {client_height=document.documentElement.clientHeight;}
	 else
	 {client_height=document.body.clientHeight;}
	 ct = ((client_height / 2) - (h / 2));
	}
	else if (document.getElementById) ct = ((window.innerHeight / 2) - (h / 2));
	
}

function setTop() {
    scroll_top=(ie)? truebody().scrollTop : window.pageYOffset;
	if (document.layers) document.layers.dropin.top = (scroll_top+(window.innerHeight / 2) - (h / 2))+"px";
	else if (document.all) 
	{
	    var client_height;
	    if (!window.opera)
	    //{client_height=document.body.clientHeight;}
	 {client_height=document.documentElement.clientHeight;}
	    else
	    {client_height=document.body.clientHeight;}
	    
    	document.all.dropin.style.top = (scroll_top+(client_height / 2) - (h / 2))+"px";
	}
	else if (document.getElementById) document.getElementById("dropin").style.top = (scroll_top+(window.innerHeight / 2) - (h / 2))+"px";
	//window.status=document.body.clientHeight;
	
	
}

function setAll() {
setLeft();
setTop();
}

window.onscroll=setAll;
window.onresize=setAll;
//window.onload=initbox

//initbox();

