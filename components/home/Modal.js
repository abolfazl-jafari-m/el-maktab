import { El } from "../../utils/El.js";

// function toggleModal() {
//     modal_ele.classList.toggle('hidden');
//     overlay_ele.classList.toggle('hidden');
// }
  
export function Modal(){
    return  El({
        element : 'div',
        id : 'overlay',
        className : 'hidden fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] z-10',
        // eventListener : [{
        //     event : 'click',
        //     callback : toggleModal
        // }],
        children : [
            El({
                element : 'div',
                id : 'modal',
                className : 'hidden fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-2/4 rounded-md shadow-md bg-white p-4',
    
            })
        ]
        })
   
}