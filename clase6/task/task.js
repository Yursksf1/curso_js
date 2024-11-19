let tareas = [
    "limpiar la mesa",
    "lavar los platos",
    "ordenar habitacion",
]

function agregar_tarea() {
    new_task = prompt("ingresa una nueva tarea: ")
    tareas.push(new_task)
}

function imprimir_lista_tareas() {
    tareas.forEach(tarea => {
        console.log(tarea)
    })
}

function eliminar_tarea() {
    tareas.pop()
}

agregar_tarea()
agregar_tarea()
imprimir_lista_tareas()
agregar_tarea()
agregar_tarea()
imprimir_lista_tareas()
eliminar_tarea()
imprimir_lista_tareas()


tareas_1 = [
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
