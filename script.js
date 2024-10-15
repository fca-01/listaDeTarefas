const button = document.querySelector('.add-button')
const input = document.querySelector('.input-task')
const listcomplet = document.querySelector('.test')

let task_list = []


function teste(){

    if (input.value.trim() === ''){
        alert("O campo não pode estar vazio.");
        preventDefault();
    }

    else {
        add_new_task()
    }
}

function add_new_task(){

    task_list.push({
    task: input.value,
    complete: false,})

  

    input.value = ''
    show_task()
}



function show_task(){

   

    let new_div = ''

    task_list.forEach((item, index) => {new_div = new_div + `  

    <div class="test2">
        <div class="task-conteiner ${item.complete && "done"}">${item.task}</div>
        <div class="img">
            <img src="./checked.png" class="img-conc" onclick="finish_task(${index})">
            <img src="./cancel.png" class="img-cancel" onclick="delete_task(${index})"></img>
        </div>
    </div>

    `
    
    })

    localStorage.setItem('lista', JSON.stringify(task_list))

    listcomplet.innerHTML = new_div
    
    }

function delete_task(index){
        task_list.splice(index,1)
        show_task()
    }

function finish_task(index){
       task_list[index].complete = !task_list[index].complete
       show_task()
    }

function load_local_storage(){
    const task_local_storage = localStorage.getItem('lista')
    if(task_local_storage){
    task_list = JSON.parse(task_local_storage)
    }

    show_task()
    }


load_local_storage()

button.addEventListener('click',teste)
