import { getSingleTasksById } from "./apis/service.js";
import { SingleTask } from "./components/singleTask/SingleTaks.js";
import { API_Base_Url } from "./config.js";


const task = document.getElementById("task");

getSingleTasksById().then(res =>{
    const item = SingleTask(res)

    task.append(item)
})



