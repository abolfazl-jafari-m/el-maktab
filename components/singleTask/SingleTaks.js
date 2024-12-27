import { El } from "../../utils/El.js";


export function SingleTask(task){
    return El({
        element : "div",
        children : [
            task.name
        ]
    })
}