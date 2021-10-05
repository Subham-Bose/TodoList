const addBtn = document.getElementById('addBtn');
const inputbox = document.getElementById('inputText');
const list = document.getElementById('list');

showTask();

inputbox.onkeydown = (e) =>{
  if(e.keyCode == 13){
    let value = inputText.value;

  if(value.trim(" ") == ""){
    alert("Nothing to add");
  }else{
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
      ListArray = [];
    }else{
      ListArray = JSON.parse(getLocalStorageData);
    }
    ListArray.push(value);
    localStorage.setItem("New Todo", JSON.stringify(ListArray));
    showTask();
  }
  inputbox.value = "";
  }
}

addBtn.onclick = () =>{
  let value = inputText.value;

  if(value.trim(" ") == ""){
    alert("Nothing to add");
  }else{
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
      ListArray = [];
    }else{
      ListArray = JSON.parse(getLocalStorageData);
    }
    ListArray.push(value);
    localStorage.setItem("New Todo", JSON.stringify(ListArray));
    showTask();
  }
  inputbox.value = "";
}


function showTask(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    ListArray = [];
  }else{
    ListArray = JSON.parse(getLocalStorageData);
  }
  newLiTags = "";
  ListArray.forEach((element, index)=>{
    newLiTags += `<div class="row" id = "${index}" draggable = "true" ondragstart="drag(event)"> <span>${element}</span> <button class="fa fa-trash-o delBtn"  onclick = "deleteTask(${index})"></button></div>`
  })
  list.innerHTML = newLiTags
}

function deleteTask(index){
  getLocalStorageData = localStorage.getItem("New Todo");
  ListArray = JSON.parse(getLocalStorageData);
  ListArray.splice(index,1);
  localStorage.setItem("New Todo", JSON.stringify(ListArray));
  showTask();
}

function allowDrop(event){
  event.preventDefault();
}

function drag(event){
  const dragId = event.target.id;
  event.dataTransfer.setData('id', dragId);
}

function drop(event){
  event.preventDefault();
  const dragId = event.dataTransfer.getData('id');
  if(event.target){
    const dropId = event.target.id;
    getLocalStorageData = localStorage.getItem("New Todo");
    ListArray = JSON.parse(getLocalStorageData);
    [ListArray[dragId], ListArray[dropId]] = [ListArray[dropId], ListArray[dragId]];
    localStorage.setItem("New Todo", JSON.stringify(ListArray));
    showTask();
  }
}



