import { Header } from "./components/home/Heade.js";
import { Modal } from "./components/home/Modal.js";
import { Table } from "./components/home/Table.js";


const app = document.getElementById('app');

app.append(Modal());

app.append(Header());

app.append(Table());