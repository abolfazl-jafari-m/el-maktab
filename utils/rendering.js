import { deleteTask, getTasks } from "../apis/service.js";
import { El } from "./El.js";



export function renderTasks(tasks){
    const tbody = document.getElementById("tbody");


    tbody.innerHTML = "";
    

    tasks.forEach(item=>{
        const  row =  El({
                    element : "tr",
                    className : "w-full",
                    children : [
                        El({
                            element : "td",
                            innerText : item.name,
                            className : "border border-black text-center"
                        }),
                        El({
                            element : "td",
                            className : "border border-black text-center",
                            children : [El({
                                element : "a",
                                innerText :  item.description,
                                restAttrs : {href : `./tasks.html?taskId=${item.id}`}
                            })]
                        }),
                        El({
                            element : "td",
                            innerText : item.status,
                            className : "border border-black text-center"
                        }),
                        El({
                            element : "td",
                            className : "border border-black text-center",
                            children : [
                                El({
                                    element : "button",
                                    innerText : "delete",
                                    className : "bg-green-600 text-white ",
                                    eventListener : [{
                                        event : "click",
                                        callback : ()=> {deleteTask(item.id)
                                            .then(
                                               ()=>{
                                                // window.location.reload()
                                                    renderTasks(tasks)
                                               }
                                            )

                                        }
                                    }]
                                }),
                                El({
                                    element : "button",
                                    innerText : "edit",
                                    className : "bg-blue-600 text-white",
                                    // eventListener : [{
                                    //     event : "click",
                                    //     callback : deleteHandler
                                    // }]
                                }),
                                El({
                                    element : "button",
                                    innerText : "see",
                                    className : "bg-gray-600 text-white",
                                    // eventListener : [{
                                    //     event : "click",
                                    //     callback : deleteHandler
                                    // }]
                                })
                            ]
                        })
        
                    ]
                })    
        
        tbody.append(row);
    })
}