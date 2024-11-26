console.log('hola mundo, vamos a hacer unos formularios js') 
window.onload = (e) => {
    renderizar()
    document.getElementById("p_guardar").addEventListener("click", () => {
        console.log('acabamos de presionar el boton de guardar')
        const nombre = document.getElementById("p_name").value
        const habilidades = document.getElementById("p_skill").value.split(", ")
        const tecnologias = document.getElementById("p_technology").value.split(", ")
        const experiencia = parseInt(document.getElementById("p_experience").value)
        const data = {
            "nombre": nombre,
            "habilidades": habilidades,
            "tecnologias": tecnologias,
            "experiencia": experiencia,
        }

        aspirantes.push(data)
        renderizar()
        document.getElementById("p_name").value = ""
        document.getElementById("p_skill").value = ""
        document.getElementById("p_technology").value = ""
        document.getElementById("p_experience").value = ""
    } ) 
}


const aspirantes = [
    {
        nombre: "Juan",
        tecnologias: ["Javascript", "Python"],
        habilidades: ["liderazgo", "Scrum","Manejo de conflictos"],
        experiencia: 5 // years
    },
    {
        nombre: "camila",
        tecnologias: ["Javascript", "Python"],
        habilidades: ["ciencia de datos", "Analizis","Toma de deciciones"],
        experiencia: 3 // years
    }
]


const puestos = [
    {
        nombre: "Desarrollador full stack",
        tecnologias: ["Javascript", "Python", "PHP", "SLQ"],
        habilidades: ["liderazgo", "Scrum",],
        experiencia: 15 // years
    },
    {
        nombre: "Data Analyst",
        tecnologias: ["matlab", "Python"],
        habilidades: [, "Analizis", "Toma de deciciones"],
        experiencia: 2 // years
    }
]


const imprimirLista = (lista) => {
    lista.forEach(element => {
        console.log(
            `${element.nombre} - ${element.experiencia}`
        )
    });
}

const renderizar = () => {
    const aspirantesList = document.getElementById("render");
    aspirantesList.innerHTML = ""
    aspirantes.forEach(aspirante => {
    const listItem = document.createElement("li");
    listItem.textContent = `${aspirante.nombre} - ${aspirante.tecnologias} - ${aspirante.habilidades} - ${aspirante.experiencia} `;
    aspirantesList.appendChild(listItem);
    });
}