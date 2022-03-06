let expand = document.querySelector(".expand-item")
let expand2 = document.querySelector(".expand-item2")
let expand3 = document.querySelector(".expand-item3")
let expand4 = document.querySelector(".expand-item4")
let open = true

expand.addEventListener("click", poex)

  function poex(e){
      if(open){
        expand.style.width = "320px"
        expand2.style.width = "80px"
        expand3.style.width = "80px"
        expand4.style.width = "80px"
        expand.style.transition = ".5s"
        open = false
      }
      else{
        expand.style.width = "80px"
        open = true
      }    
  }
  expand2.addEventListener("click",poex2)
  function poex2(){
    if(open){
      expand2.style.width = "320px"
      expand2.style.transition = ".5s"
      expand.style.width = "80px"
      expand3.style.width = "80px"
      expand4.style.width = "80px"
      open = false
    }
    else{
      expand2.style.width = "80px"
      open = true
    }    
  }
  expand3.addEventListener("click",poex3)
  function poex3(e){
    console.log();
    if(open){
      expand3.style.width = "320px"
      expand3.style.transition = ".5s"
      expand.style.width = "80px"
      expand2.style.width = "80px"
      expand4.style.width = "80px"
      open = false
    }
    else{
      expand3.style.width = "80px"
      open = true
    }    
  }
  expand4.addEventListener("click",poex4)
  function poex4(e){
    console.log();
    if(open){
      expand4.style.width = "320px"
      expand4.style.transition = ".5s"
      expand.style.width = "80px"
      expand2.style.width = "80px"
      expand3.style.width = "80px"
      open = false
    }
    else{
      expand4.style.width = "80px"
      open = true
    }    
  }



