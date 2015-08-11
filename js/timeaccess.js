var timeoutMinutes = 20;
var timeoutMilliseconds = timeoutMinutes*60000;
var warnMilliseconds = timeoutMinutes*60000-60000;
var timeoutTimer;
var timeOutWin = null;

//window.onerror = function() { return true;};

function setSecurityTimer()
{
	timeoutTimer = window.setTimeout("location.href='/logout.aspx?Result=timeout'", timeoutMilliseconds);
}

function CCBLoadPage()
{
	window.setTimeout('displayAlert()', warnMilliseconds);
	setSecurityTimer();
}

function displayAlert()
{
	timeOutWin = window.open("TimeOutPopup.html","smallwindow",'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=no,width=420,height=230');
	if (timeOutWin)
	{
	timeOutWin.focus();
	}
}

function keepalive()
{
	window.setTimeout('displayAlert()', warnMilliseconds);
	window.clearTimeout(timeoutTimer);
	setSecurityTimer();
}

function closePrinterFriendly()
{
	if(timeOutWin != null && !timeOutWin.closed)
		timeOutWin.close();
}

