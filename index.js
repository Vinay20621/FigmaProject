
var isBlack=true
function togger()
{
  var mainText=document.getElementById('clickme')
  if(isBlack)
  {
    mainText.style.color='red'
  }
  else{
    mainText.style.color='black'
  }
  isBlack=!isBlack

}



