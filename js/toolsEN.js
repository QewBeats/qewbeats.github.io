
function sw(v){window.open(v,'_blank');return false;}
function ws(v){window.open(v,'_blank');return true;}

function showdetails(p,n,w,h){
showwin(p,n,w,h,0);
}

function showwin(p,n,w,h,scroll){
                var s='';
                var width=w;
                var height=h;
                s=s+'left='+(screen.availWidth-width)/2+',';
                s=s+'top='+(screen.availHeight-height)/2+',';
                s=s+'width='+width+',height='+height+',toolbar=0,location=0,status=0,menubar=0,scrollbars='+1+',resizable=1';
                w=window.open(p,n,s);
                w.focus();
}

function capsDetect( e ) {
  var CapsMess = 'ATTENTION!\nYou have CAPS lock on! If you intend to use capital letters - please use SHIFT key to avoid this message\nPassword is case sensitive!';
  if( !e ) { e = window.event; } if( !e ) { return; }
  var theKey = 0;
  if( e.which ) { theKey = e.which; } //Netscape 4+, etc.
  else if( e.keyCode ) { theKey = e.keyCode; } //Internet Explorer, etc.
  else if( e.charCode ) { theKey = e.charCode } //Gecko - probably not needed
  var theShift = false;
  if( e.shiftKey ) { theShift = e.shiftKey; } //Internet Explorer, etc.
  else if( e.modifiers ) { //Netscape 4
    if( e.modifiers & 4 ) { //bitwise AND
      theShift = true;
    }
  }
  if( theKey > 64 && theKey < 91 && !theShift ) {
    alert( CapsMess );
  }
  else if( theKey > 96 && theKey < 123 && theShift ) {
    alert( CapsMess );
  }
}

function OpenEditor(idname)
{
	popUp = window.open('editore078.html?formname=' + document.forms[0].name + 
		'&id=' + idname , 
		'popupeditor', 
		'width=600,height=450,left=100,top=100,toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1');
}

function winopen(p){
var s=s+'top=50,left=50,toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1';
w=window.open(p,'_blank',s);
w.focus();
}


function getBrowserInfo() {
 var t,v = undefined;
 if (window.opera) t = 'Opera';
 else if (document.all) {
  t = 'IE';
  var nv = navigator.appVersion;
  var s = nv.indexOf('MSIE')+5;
  v = nv.substring(s,s+1);
 }
 else if (navigator.appName) t = 'Netscape';
 return {type:t,version:v};
}
 



function EFindObj(n, d) { 
var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=EFindObj(n,d.layers[i].document);
if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function Visio(el,vis) {var v, ob; if ((ob=EFindObj(el))!=null){v=vis; if (ob.style) { ob=ob.style; v=(v=='show')?'block':(v='hide')?'none':v; } ob.display=v;}}

function ToogleVisio(el,ic)
{
 var o = EFindObj(el);
 var c = EFindObj(ic);


 if (o && c)
 {
  if (o.style.display=='block')
  {
    Visio(el,'hide');
    c.src='img/iconPlus.gif';
  }
  else
  {
    Visio(el,'show');
    c.src='img/iconMinus.gif';
  }
 }

}




