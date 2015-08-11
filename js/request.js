
function createRequestObject() {
    var request = null;
    if(!request) try {
        request=new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e){}
    if(!request) try {
        request=new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e){}
    if(!request) try {
        request=new XMLHttpRequest();
    } catch (e){}
    return request;
}

function urlEncodeData(data) {
    var query = [];
    if (data instanceof Object) {
        for (var k in data) {
            query.push(encodeURIComponent(k) + "=" + encodeURIComponent(data[k]));
        }
        return query.join('&');
    } else {
        return encodeURIComponent(data);
    }
}

function serverRequest(url1, data, callback) {
    var request = createRequestObject();
    if(!request) return false;
    request.onreadystatechange  = function() { 
            if(request.readyState == 4 && callback) callback(request);
        };
    request.open('POST.html', url1, true);
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.setRequestHeader("Referer", location.href);
    request.send(urlEncodeData(data));
    return true;
}
function FilterData(value1,issrv)
{
 if (issrv!=true)
 {
 value1=RT(value1,"&lt;","<");
 value1=RT(value1,"&gt;",">");
 value1=RT(value1,"&quot;","\"");
 value1=RT(value1,"&","&amp;");
 value1=RT(value1,"'","&#39;");
 }
 value1=RT(value1,"<","&lt;");
 value1=RT(value1,">","&gt;");
 value1=RT(value1,"\"","&quot;");
 return value1;
}
function FilterURL(vx5){vx6=vx5.split(' ');
for (var i=0; i<vx6.length; i++){
if (vx6[i].indexOf('faq.html\/\/')==0 || vx6[i].indexOf('faq.html\/\/')==0 || vx6[i].indexOf('mailto:')==0)
{vx6[i]=RT(vx6[i]," ","%20;");vx6[i]='<a href="'+vx6[i]+'" target="_blank">'+vx6[i]+'</a>';continue;}
if (vx6[i].indexOf('www.')==0)
{vx6[i]=RT(vx6[i]," ","%20;");vx6[i]='<a href="http:\/\/'+vx6[i]+'" target="_blank">'+vx6[i]+'</a>';continue;} 
if (vx6[i].indexOf('@')!=-1 && vx6[i].indexOf('@')!=0){vx6[i]=RT(vx6[i]," ","%20;");vx6[i]='<a href="mailto:'+vx6[i]+'" >'+vx6[i]+'</a>';continue;}
}vx7=vx6.join(' ');return vx7;}

function ToogleFAQ(el,ic,n)
{
 var o = EFindObj(el);
 var c = EFindObj(ic);
 
 var qspan = EFindObj('lqspan_'+n);
 var qspan2 = EFindObj('lqspan2_'+n);
 
 //alert(qspan.id);


 if (o && c && qspan && qspan2)
 {
  if (o.style.display=='block')
  {
    Visio(qspan.id,'show');
    Visio(qspan2.id,'hide');
    Visio(el,'hide');
    c.src='img/iconPlus.gif';
  }
  else
  {
    Visio(qspan.id,'hide');
    Visio(qspan2.id,'show');
    Visio(el,'show');
    c.src='img/iconMinus.gif';
    FAQInc(n);
  }
 }

}

function ToogleFAQ2(el,ic,n)
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

function ToogleFAQ22(el, ic, n) {
    var o = EFindObj(el);
    var c = EFindObj(ic);


    if (o && c) {
        if (o.style.display == 'block') {
            Visio(el, 'hide');
            c.src = 'img/iconPlus2.gif';
        }
        else {
            Visio(el, 'show');
            c.src = 'img/iconMinus2.gif';
        }
    }

}

function FAQInc(n)
{
var day=new Date();
var mydata=new Array();
mydata['fid']=n;
serverRequest('faqc.aspx', mydata, null);
}

function PUBInc(n) {
    var day = new Date();
    var mydata = new Array();
    mydata['pid'] = n;
    serverRequest('pubinc.aspx', mydata, null);
}

function PromoStat(promocid, name, isl, click, ref) {
    var day = new Date();
    var mydata = new Array();
    mydata['promocid'] = promocid;
    mydata['name'] = name;
    mydata['isl'] = isl;
    mydata['click'] = click;
    mydata['ref'] = ref;
    serverRequest('promo_stat.aspx', mydata, null);
}

