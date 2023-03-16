// User should be able to add todo
// user should be able to update
//user should be able to delete

//1.Add todo
// start thinking ->> user --> pick action
//user will press add todo and we have to add the data in ls



//New Feature new Function just that

let arr = JSON.parse(localStorage.getItem("todos")) || [];

const handleDeleteTodo = (id) =>{
  arr = arr.filter((el)=>{
    if(el.id !== id){
        return el;
    }
})
//again updating and deleted todos
localStorage.setItem("todos" ,JSON.stringify(arr));
append();

// OR also can write
// todoArr.filter = ((el) => el.id !== id);
}

const handleUpdateTodo = (id) =>{

   arr = arr = arr.map((el)=>{
    if(el.id === id){
      return{
        todo:el.todo,
        id: el.id,
        status: !el.status,
      }
    }
      else{
        return el;
      }
  })

  
  localStorage.setItem("todos", JSON.stringify(arr));
  append();
    
  }
  // we need to know on which todo user is clicking
  

//reading part means append the data
const append = () => {
  const target = document.querySelector(".todo_lists_div");
  target.innerHTML = null;
  arr.map((el) => {
    //create the UI

    const div = document.createElement("div");

    const h3 = document.createElement("h3");

    const updateButton = document.createElement("button");

    const deleteButton = document.createElement("button");

    // And the attiribute and style for the UI

    h3.innerText = el.todo;
    deleteButton.innerText = "Delete";

    if (el.status) {
      updateButton.innerText = "Done";
      updateButton.style.backgroundColor = "green"
    } else {
      updateButton.innerText = "Not Done";
      updateButton.style.backgroundColor = "red"

    }

    // add event listners if any
    updateButton.addEventListener("click", () => handleUpdateTodo(el.id));
    deleteButton.addEventListener("click" , () => handleDeleteTodo(el.id));

    //JS ---> itself will be calling the function
    // you just need to pass the reference

    //That is why CALLBACK FUNCTION 

    //Append
    div.append(h3, updateButton, deleteButton);
    target.append(div);
  });
};

append();


// creating part ->>>> done
const handleAddTodo = () => {
  const value = document.querySelector("#todo_input").value;

  //validation

  if (!value) {
    alert("Add todo first");
    return;
  }

  // add data to local storage
  const payload = {
    todo: value,
    id: Date.now(),
    status: false,
  };
  arr.push(payload);
  console.log(arr);
  // key name and json form for ls

  localStorage.setItem("todos", JSON.stringify(arr));
  append();
};

//catch the button
const addTodoButton = document.querySelector("#addTodo_button");

//catch the action with add event listners
addTodoButton.addEventListener("click", handleAddTodo);
