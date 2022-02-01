function makeCookie(){
  var userName = document.getElementById("username").value;
  var level = document.getElementById("levels").value;
  var expireYear = new Date().getFullYear() + 1; //This year + 1
  
  document.cookie = "username="+userName+";expires="+expireYear; //e.g. username=nostalk;expires=2023
  document.cookie = "level="+level+";expires="+expireYear; //e.g. level=1;expires=2023
}
export function getCookie(name){ //name should be username//level
  var cookies = document.cookie.split(";");
  for (let index = 0; index < cookies.length; index++) {
    var element = cookies[index].split("=");
    if(element[0].trim()==name){
      return element[1];
    }
  }
}