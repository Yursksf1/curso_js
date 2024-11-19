let tareas = [
    {
        "tarea": "Enviar correo del seguimiento a cliente X",
        "prioridad": "baja",
    },
    {
        "tarea": "Reunión con clientes potenciales",
        "prioridad": "alta",
    },
    {
        "tarea": "Comprar adornos para la fiesta de la prox semana",
        "prioridad": "baja",
    }
]

function agregar_tarea() {
    const new_task = prompt("ingresa una nueva tarea: ")
    const prioridad = prompt("indica la prioridad: ")
    const tarea = {
        "tarea": new_task,
        "prioridad": prioridad,
    }
    tareas.push(tarea)
}

function imprimir_lista_tareas(solo_prioridad_alta) {
    tareas.forEach(tarea_obj => {
        if (!solo_prioridad_alta || tarea_obj.prioridad == 'alta') {
            console.log(tarea_obj.tarea)
            console.log(tarea_obj.prioridad)
            console.log("")
        } 
    })
}

function eliminar_tarea() {
    tareas.pop()
}

agregar_tarea()
agregar_tarea()
imprimir_lista_tareas(true)
agregar_tarea()
agregar_tarea()
imprimir_lista_tareas(solo_prioridad_alta = true)
eliminar_tarea()
imprimir_lista_tareas()

