import React from 'react'


export default function inputEdit() {
   
 

   
    const tarefa_storage = localStorage.getItem('Tarefa');
    const tarefas_passadas = JSON.parse(tarefa_storage);
    const tituloo = tarefas_passadas.titulo
 
    function close(){
        
    }
   
      const handleChange = event => {
        title_novo(event.target.value);

        
    
        console.log('value is:', event.target.value);
      };
  return (
   

<div class="pagina-flutuante" >
    <div class="margens">
      <form>
        <button class="fechar_btn" onClick={close()}>X</button>
        <h2 class="titulo_pagina_flutuante">Editar tarefa</h2>
        <label for="campo-de-entrada">titulo:</label><br></br>
                <input type="text" id="title_ed"  class="input_pagina_flutuante" name="campo-de-entrada" value={tituloo} onChange={handleChange} ></input><br></br>
                <label for="campo-de-entrada">Tarefa:</label><br></br>
                <textarea type="text" id="task_ed"  class="input_pagina_flutuante" name="campo-de-entrada"  ></textarea>
                <script>
               

                </script>
                <br></br><button > Enviar </button>
      </form>
    </div>
  </div>

  
  ) 
}
