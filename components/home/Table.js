import { El } from "../../utils/El.js";

export function Table(){

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
                id: "tbody",
                children : []
            })
        ]
    })
}