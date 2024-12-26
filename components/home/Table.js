import { El } from "../../utils/El.js";

export function Table(){

    // async function getTasks() {
    //     try {
    //       const res = await fetch('https://6763fe4c17ec5852caeac112.mockapi.io/tasks');
    //       if (!res.ok) {
    //         throw new Error('connection is failed');
    //       }
    //       const result = await res.json();
    //       return result;
    //     } catch (err) {
    //       console.log(err);
    //     }
    // }

    // const data = [] 
    // getTasks()
    //     .then(response =>{
    //         data = response;

    //     })

    return El({
        element : 'table',
        className : 'w-full border-collapse',
        children : [
            El({
                element : 'thead',
                children : [
                    El({
                        element : 'tr',
                        className : 'border border-black text-xl',
                        children : [
                            El({
                                element : 'th',
                                className : 'border border-black',
                                children : [
                                    'taskname'
                                ]
                            }),
                            El({
                                element : 'th',
                                className : 'border border-black',
                                children : [
                                    'description'
                                ]
                            }),
                            El({
                                element : 'th',
                                className : 'border border-black',
                                children : [
                                    'status'
                                ]
                            }),
                            El({
                                element : 'th',
                                className : 'border border-black',
                                children : [
                                    'action'
                                ]
                            })                            
                        ]
                    })
                ]
            }),
            El({
                element : 'tbody',
                className :'text-center',
                children : [
                    El({
                        element : 'tr',
                        children : []
                    })
                ]
            })
        ]
    })
}