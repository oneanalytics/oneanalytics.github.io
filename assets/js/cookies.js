function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookies() { 
          var allCookies = document.cookie.split(';'); 
                
                // The "expire" attribute of every cookie is  
                // Set to "Thu, 01 Jan 1970 00:00:00 GMT" 
                for (var i = 0; i < allCookies.length; i++) 
                    document.cookie = allCookies[i] + "=;expires="+new Date(0).toUTCString(); 
  
  
            } 
