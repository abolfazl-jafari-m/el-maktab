import { El } from "../../utils/El.js"

export function Header(){
    
    const modal_ele = document.getElementById('modal');
    const overlay_ele = document.getElementById('overlay');

    function toggleModal() {
        modal_ele.classList.toggle('hidden');
        overlay_ele.classList.toggle('hidden');
      }
      
      function addTaskModalShow() {
        modal_ele.innerHTML = `
          <form name="addTaskForm" class="flex flex-col gap-5">
          <h2 class="border-b-2 border-purple-500 text-center">add task modal</h2>
          <div class="flex">
            <label for="taskName" class="w-1/4">task name</label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              placeholder="Please Enter Your Task Name"
              class="focus:border-none border border-blue-400 w-3/4"
            />
          </div>
          <div class="flex gap-2">
            <label for="taskName" class="w-1/4">description</label>
            <input
              type="text"
              name="description"
              placeholder="Please Enter Your Task Name"
              class="focus:border-none border border-blue-400 w-3/4"
            />
          </div>
          <div class="flex gap-2">
            <label for="taskName" class="w-1/4">status</label>
            <input
              type="text"
              name="status"
              placeholder="Please Enter Your Task Name"
              class="focus:border-none border border-blue-400 w-3/4"
            />
          </div>
          <button type="submit" class="bg-gray-400 text-white p-2" onclick="addTaskFormHandler(event)">submit</button>
        </form>
          `;
        toggleModal();
      }
      

    return El({
        element : 'div',
        className : 'bg-blue-400 flex justify-between items-center p-8 text-2xl text-white',
        children : [
            El({
                element : 'h1',
                innerText : 'todo app'
            }),
            El({
                element : 'button',
                children : ['add task'],
                className : 'bg-gray-700 rounded-md p-4 shadow-xl',
                eventListener : [{
                    event : 'click',
                    callback : addTaskModalShow
                }]
            }),
            
        ]
    })

}
