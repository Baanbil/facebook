function add(){
  const buttonElement = document.querySelector("button")
  if(buttonElement.innerText === "Add Friend"){
    buttonElement.innerHTML = "Added"
    buttonElement.classList.add("is-subscribed")
  } else {
    buttonElement.innerHTML = "Add Friend"
    buttonElement.classList.remove("is-subscribed")
  }
}


function hey(){
  const element = document.getElementById("follow")
  if(element.innerText === "Follow"){
    element.innerHTML = "Following"
    element.classList.add("hey-subscribed")
  } else {
    element.innerHTML = "Follow"
    element.classList.remove("hey-subscribed")
  }
}