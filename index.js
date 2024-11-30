const btnNewTodo = document.getElementById('btn-newtodo');
const todosPendietes  = [];
const todosTerminada = [];

btnNewTodo.addEventListener('click' ,  function(){
      const nombreTodo =  document.getElementById('name').value;
      const decripcionTodo =  document.getElementById('description').value;
      const fechaTodo =  document.getElementById('date').value;

      if(nombreTodo.length == 0){
        alert("se requiere el campo nombre")
        return;
      }
      if(decripcionTodo.length == 0){
        alert("se requiere el campo descripcion")
        return;
      }
      if(fechaTodo.length == 0){
        alert("se requiere el campo fecha")
        return;
      }


      todosPendietes.push({
        nombre: nombreTodo,
        descripcion: decripcionTodo,
        fecha: fechaTodo
      })

    renderTodo()
      
})



function makeTodo(datos, index){

    return `
        <li>
            <b><span id="name">${datos.nombre}</span></b>
            <span id="description">${datos.descripcion}</span>
            <div>
                <span id="date">${datos.fecha}</span>
                <span id="sattus" class="pending">Pendiente</span>
            </div>
            <div>
                <button type="button" class="success" onclick="terminarTodo(${index})">Terminar</button>
                <button type="button" onclick="deleteTodo(${index},1)" class="danger">Eliminar</button>
            </div>
        </li>
    `
}

function deleteTodo(index,flag){
  if(flag===1){
     todosPendietes.splice(index,1);
     renderTodo ()
     }
     else if(flag===2){
      todosTerminada.splice(index,1);
      renderTodoTerminada();
     }
    
}
function renderTodo(){
  const domListPending  =  document.getElementById('list-todo-pending')
  let domTodo = "";
  todosPendietes.forEach(function(todo, index){
    domTodo += makeTodo(todo,index);
  });
  domListPending.innerHTML = domTodo
}

function renderTodoTerminada(){
  const domListPending  =  document.getElementById("list-todo-terminadas")
  let domTodo = "";
  todosTerminada.forEach(function(todo, index){
    domTodo +=  makeTodoTerminadas(todo,index);
  });
  domListPending.innerHTML = domTodo
}
function terminarTodo(index){
  const todo = todosPendietes[index]
  todosTerminada.push(todo);
  deleteTodo(index , 1);
  renderTodoTerminada();
}


function makeTodoTerminadas(datos, index){

  return `
      <li>
          <b><span id="name">${datos.nombre}</span></b>
          <span id="description">${datos.descripcion}</span>
          <div>
              <span id="date">${datos.fecha}</span>
              <span id="sattus" class="success"></span>
          </div>
          <div>
              <button type="button" onclick="deleteTodo(${index},2)" class="danger">Eliminar</button>
          </div>
      </li>
  `
}