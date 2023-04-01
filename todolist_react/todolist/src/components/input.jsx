import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function input() {

  const navigate = useNavigate()
  function save(){
     
    let listaObjetos = JSON.parse(localStorage.getItem('Tasks')) || [];
    console.log(listaObjetos)
    // Cria um novo objeto
    const titulo = document.getElementById('title')
          const tarefa = document.getElementById('task')
        
            const Obj = {
            id:gerarID(),
            titulo : titulo.value,
            tarefa: tarefa.value,
            data:data(),
           
          }
    // Adiciona o novo objeto à lista
    if (!Array.isArray(listaObjetos)) {
      // Se listaObjetos não é um array, inicializa com um array vazio
      listaObjetos = [];
    }
    // Adiciona o novo objeto à lista
    listaObjetos.push(Obj);
    console.log(listaObjetos)
    // Armazena a lista atualizada de objetos no localStorage
    localStorage.setItem('Tasks', JSON.stringify(listaObjetos));
     navigate('/' );     
         }
         
      function data(data){
       data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        var dataAtual = dia + '/' + mes + '/' + ano;
        console.log(dataAtual); 
        
        return dataAtual;
        }
        
        
      function gerarID() {
      const timestamp = Date.now().toString();
      const valorAleatorio = Math.floor(Math.random() * 10000).toString();
      return timestamp + '-' + valorAleatorio;
    }
    
    function close(){
       navigate('/' );
    }



  return (
    <div class="pagina-flutuante" >
    <div class="margens">
      <form>
        <button class="fechar_btn"  onClick={close}>X</button>
        <h2 class="titulo_pagina_flutuante">Adicionar tarefa</h2>
        <label for="campo-de-entrada">titulo:</label><br></br>
                <input type="text" id="title"  class="input_pagina_flutuante" name="campo-de-entrada" placeholder="Insira seu título"></input><br></br>
                <label for="campo-de-entrada">Tarefa:</label><br></br>
                <textarea type="text" id="task"  class="input_pagina_flutuante" name="campo-de-entrada" placeholder="Insira sua tarefa"></textarea>

                <br></br><button onClick={save}> Enviar </button>
      </form>
    </div>
  </div>

  )
}
