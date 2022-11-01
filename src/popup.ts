
const tasks:string[] = []
// https://github.com/tchin25/vue3-typescript-web-extensions-starter
// https://medium.com/@johannes.lauter/building-a-vue-browser-extension-including-tailwind-848e0e451f50
const addTaskBtn = document.getElementById("add-task-btn");
if(addTaskBtn){
    addTaskBtn.addEventListener("click", () => addTask());
}

const  onChangeText = (e:any) => {
    // console.log(first)
    console.log(e)
//    tasks[tasks.length] = 
}
const addClassToElement = (classes:string) =>{
    const classesArray = classes.split(" ");
    return classesArray
}

const renderTask = (taskNum:number):void =>{
    const taskRow = document.createElement("div");
    taskRow.classList.add(...addClassToElement("w-full flex justify-between"));

    const text = document.createElement("input");
    text.classList.add(...addClassToElement("form-input my-2 w-9/12"))
    text.type  = "text";
    text.placeholder= "Enter a task..";
    text.value = tasks[taskNum];
    text.addEventListener("change",() =>{
        tasks[taskNum] = text.value
    } )
   
    const deleteBtn = document.createElement("input");
    deleteBtn.classList.add(...addClassToElement("btn-outlined my-2 w-1/6"))
    deleteBtn.type = "button";
    deleteBtn.value = "X";
    deleteBtn.addEventListener("click",() =>{
        deleteTask(taskNum);
    })

    taskRow.appendChild(text);
    taskRow.appendChild(deleteBtn);
    const taskContainer = document.getElementById("task-container");
    if(taskContainer){
        taskContainer.appendChild(taskRow);
    }
  
}
const addTask = () =>{
    const taskNum = tasks.length;
    tasks.push("");
    renderTask(taskNum);

    
}
const deleteTask = (taskNum:number) =>{
    tasks.splice(taskNum,1);
    renderTasks();
}
const renderTasks = () =>{
    const taskContainer = document.getElementById("task-container");
    if(!taskContainer)return

    taskContainer.textContent = "";
    tasks.forEach((task,index) =>{
        renderTask(index);
    })
    

}
// export {}
