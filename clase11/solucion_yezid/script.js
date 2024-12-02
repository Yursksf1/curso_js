window.onload = (e) => {
// renderizar tareas
// agregar escucha al boton de guardar
    renderizar()
    document.getElementById("t_guardar").addEventListener("click", () => {
        console.log('acabamos de presionar el boton de guardar')
        const actividad = document.getElementById("t_actividad").value
        const prioridad = parseInt(document.getElementById("t_prioridad").value)
        const data = {
            "actividad": actividad,
            "prioridad": prioridad,
        }

        tareas.push(data)
        renderizar()
        document.getElementById("t_actividad").value = ""
        document.getElementById("t_prioridad").value = ""
    } )
    document.getElementById("t_filtro").addEventListener("click", renderizarConFiltro)
}

tareas = [
    {
        "actividad": "tender la cama",
        "prioridad": 5
    },
    {
        "actividad": "preparar el desayuno",
        "prioridad": 9
    },
    {
        "actividad": "limpar la cocina",
        "prioridad": 7
    },
    {
        "actividad": "sacar a pasear el perro",
        "prioridad": 9
    },
    {
        "actividad": "lavar la ropa",
        "prioridad": 3
    },
    // agregar mas tareas con su respectiva prioridad
]

// definir funciones de filtrado y renderizado 

const imprimirLista = (lista) => {
    lista.forEach(element => {
        console.log(
            `${element.actividad} - ${element.prioridad}`
        )
   });
}

const renderizar = () => {
    const tareasList = document.getElementById("render_tareas");
    tareasList.innerHTML = ""
    tareas.forEach((tarea, idx)=> {
        const listItem = document.createElement("li");
        listItem.innerHTML = ` ${tarea.actividad} - ${tarea.prioridad} `
        tareasList.appendChild(listItem);
    });
}

const renderizarConFiltro = () => {
    const tareasList = document.getElementById("render_filtro");
    const filtroValor = parseInt(document.getElementById("t_filtro_prioridad").value)

    tareasList.innerHTML = ""
    tareas.forEach((tarea, idx)=> {
        if (tarea.prioridad >= filtroValor) {
            const listItem = document.createElement("li");
            listItem.innerHTML = ` ${tarea.actividad} - ${tarea.prioridad} `
            tareasList.appendChild(listItem);
        }
    });
}