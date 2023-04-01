import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function container() {
   
    
  const [objetos, setObjetos] = useState([]);

  useEffect(() => {
    const chamadaLocalStorage = localStorage.getItem('Tasks');
    if (chamadaLocalStorage) {
      const tasks_local_storage = JSON.parse(chamadaLocalStorage);
      setObjetos(tasks_local_storage);
    }
  }, []);

  const listar = () => {
    return objetos.map(tarefa => {
      return (
        <div class="item_container" key={tarefa.id}>
        
        <h3> {tarefa.titulo}</h3>
        <button onClick={()=> remover(tarefa.id)}>deletar</button>
        <button onClick={()=> edit(tarefa)}> editar</button>
        <p class="descricao_item">{tarefa.tarefa}</p>
        <p>{tarefa.data}</p>

       </div>
      );
    });
  };

    
  
    const navigate = useNavigate()

    function edit(tarefa){
      console.log(tarefa)
      localStorage.setItem('Tarefa', JSON.stringify(tarefa));
      navigate("/inputEdit")
    }
    function add(){
      navigate("/input")
    }
    function remover(id){
     
     
     let atualizada = objetos.filter((item) => item.id !== id);
      console.log(atualizada)
     
     localStorage.setItem('Tasks', JSON.stringify(atualizada)); 
     window.location.reload();
     
  }
  return (
    <div class="container">
         <h1 class="titulo_container">Tasks</h1>
         <div class="btn_div" >
          <button class="btn_add_task"  onClick={add} > Add Task </button>
            </div>
            {listar()}
    </div>
  )
}


