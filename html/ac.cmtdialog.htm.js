var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\r\n<html>\r\n<head>\r\n<title>Comments?</title>\r\n<style>\r\nbody    { background-color: #c0c0c0; }\r\n.label  { margin-top: 2pt; margin-bottom: 2pt; color: #0000bf; font-family:sans-serif; font-size:8pt; }\r\n.info   { font-family:sans-serif; font-size:8pt; font-weight:bold; color: #555555; }\r\n.btn    { font-family:sans-serif; font-size:8pt; font-weight:bold; width:100 }\r\n.input  { font-family:sans-serif; font-size:8pt; font-weight:normal; width:100%;\r\n          behavior:url(#default#userData); }\r\n</style>\r\n\r\n<script>\r\nvar fileid = \"AC_COMMENTS\";\r\n</script>\r\n<!-- <script language=javascript src=\"ac.persistence.js\"></script> -->\r\n<script>\r\nvar persistlist = new Array(5);\r\npersistlist[0] = \"frm.uname\";\r\npersistlist[1] = \"frm.uemail\";\r\n</script>\r\n\r\n<script language=\"javascript\" src=\"../scripts/ac_common.js\"></script>\r\n<script>\r\n// Constants .. pulled from external JS files\r\n\r\n//var prod   = \"AX01\";    // pulled in from ac_common.js\r\n//var lang   = \"ENU\";     // pulled in from ac_common.js\r\n//var build  = \"AX.0.1\";  // pulled in from ac_common.js\r\n//var cmturl = \"http://www.autodesk.com/cgi-bin/achelp15.pl\";\r\n//var cmturl = \"http://www.acdocs.com/achelp/achelp15.cgi?type=COMMENTS\"; // pulled in from ac_common.js\r\nvar achelpscript = \"http://www.autodesk.com/cgi-bin/achelp15.pl\";\r\nvar cmturl = achelpscript+ \"?type=COMMENTS\";\r\n\r\n//===========================================================================\r\nfunction doSend() {\r\n  try {\r\n  var cmtstr = document.frm.ucmt.value;\r\n  var locstr = document.frm.loc.value;\r\n  var c1 = locstr.indexOf(\"#\");\r\n  if( c1 != -1 ) { locstr = locstr.substring(0,c1); }\r\n  if( cmtstr.replace( /^\\s*(.*)\\s*$/, \"$1\" ) == \"\" ) {\r\n    alert( \"Please enter a comment before sending.\" );\r\n    return;\r\n  }\r\n  cmtstr = escape(cmtstr.replace( /\\r\\n/g, \" \" ));\r\n  location.href = cmturl+\"&prod=\"+prod+\"&lang=\"+lang+\"&build=\"+build+\"&loc=\"+locstr+\"&name=\"+document.frm.uname.value+\"&email=\"+document.frm.uemail.value+\"&comments=\"+cmtstr;\r\n  } catch(exception) { }\r\n}\r\n\r\nfunction loader() {\r\n  document.frm.uname.focus();\r\n}\r\n//===========================================================================\r\n</script>\r\n</head>\r\n\r\n<body topmargin=2 leftmargin=10 onload=\"try { window.resizeTo(document.frm.loc.clientWidth+70, 450);} catch(exception) { }\">\r\n<form name=frm id=frm>\r\n<table width=\"100%\" border=0>\r\n<tr><td colspan=2>\r\n<p class=label><b>Using this form sends your comments to the Autodesk Technical\r\n Publications group responsible for this documentation.</b>\r\n</p>\r\n</td></tr>\r\n<tr valign=top>\r\n <td colspan=2><span class=label>Topic title and location (do not edit):<br></span>\r\n  <script>\r\n   try {\r\n   var arg = unescape(location.hash);\r\n   var arg = unescape(arg);\r\n   arg = arg.substring(1,arg.length);\r\n   document.writeln(\"<textarea cols=50 class=input id=\\\"loc\\\" name=\\\"loc\\\" DISABLED  wrap=auto>\" + arg + \"</textarea>\");\r\n   } catch(exception) { }\r\n  </script>\r\n </td>\r\n</tr>\r\n<tr valign=top>\r\n <td width=\"50%\"><span class=label>Name (optional):<br></span>\r\n  <input class=input type=text name=\"uname\" id=\"uname\"></td>\r\n <td width=\"50%\"><span class=label>Email (optional):<br></span>\r\n  <input class=input type=text name=\"uemail\" id=\"uemail\"></td>\r\n</tr>\r\n<tr valign=top>\r\n <td colspan=2 width=\"100%\"><span class=label>Comments:<br></span>\r\n  <textarea class=input cols=50 rows=12 name=\"ucmt\" wrap=auto></textarea>\r\n </td>\r\n</tr>\r\n<tr>\r\n <td colspan=2 align=right>\r\n  <input class=btn type=button value=\"Send Comment\" onclick=\"doSend(); \" >\r\n </td>\r\n</tr>\r\n<tr><td colspan=2>\r\n<p class=label><b>Note:</b> This form is not intended as a way for\r\n  you to receive feedback or technical support. The information you provide\r\n  will be used to enhance future updates to the documentation. Thanks!\r\n</p>\r\n</td></tr>\r\n</table>\r\n</form>\r\n\r\n\r\n</body>\r\n</html>\r\n\r\n";