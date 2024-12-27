import { getTasks } from "./apis/service.js";
import { Header } from "./components/home/Heade.js";
import { Modal } from "./components/home/Modal.js";
import { Table } from "./components/home/Table.js";
import { renderTasks } from "./utils/rendering.js";





const app = document.getElementById('app');

getTasks().then(res=>{
    console.log(res);
    renderTasks(res);
})

app.append(Modal());

app.append(Header());

app.append(Table());