/*
* This is just for any generic functions that get added
* Really shouldn't be any, but you never know
*/

function   SwitchStyleSheet(target, newtarget){
  document.getElementById(target).setAttribute("href","css/"+newtarget+".css")
  
}

function wmlog(str, stl){

    switch (stl) {
      case "error":
      style="background-color: darkred;color:#fff; padding-left:15px;padding-right:15px; border-radius:5px;"
        break;
        case "warn":
      style="background-color: darkmagenta;color:#fff; padding-left:15px;padding-right:15px; border-radius:5px;"
        break;
    
        case "success":
      style="background-color: darkgreen;color:#fff; padding-left:15px;padding-right:15px; border-radius:5px;"
        break;
    
      default:
        style="background-color: darkblue;color:#fff; padding-left:15px;padding-right:15px; border-radius:5px;"
        break;
    }
    console.log("wavemaker: %c✒️"+str, style);
  }