import { API_Base_Url } from "../config.js"
export async function getTasks() {
    const reponse = await fetch(`${API_Base_Url}/tasks`);
    const result = await reponse.json();

    return result;
}


export async function getSingleTasksById() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("taskId"), 10);
    const response = await fetch(`${API_Base_Url}/tasks/${productId}`);
    const result = await response.json()

    return result;
    
}

export async function deleteTask(id) {
    const res = await fetch(`https://6763fe4c17ec5852caeac112.mockapi.io/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }