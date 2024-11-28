window.onload = (e) => {
    renderizar()
    renderizarc()
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
    
    document.getElementById("c_guardar").addEventListener("click", () => {
        console.log('acabamos de presionar el boton de guardar')
        const nombre = document.getElementById("cargo").value
        const habilidades = document.getElementById("c_skill").value.split(", ")
        const tecnologias = document.getElementById("c_technology").value.split(", ")
        const experiencia = parseInt(document.getElementById("c_experience").value)
        const data = {
            "cargo": nombre,
            "habilidadesc": habilidades,
            "tecnologiasc": tecnologias,
            "experienciac": experiencia,
        }

        puestos.push(data)
        renderizarc()
        document.getElementById("cargo").value = ""
        document.getElementById("c_skill").value = ""
        document.getElementById("c_technology").value = ""
        document.getElementById("c_experience").value = ""
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
        cargo: "Desarrollador full stack",
        tecnologiasc: ["Javascript", "Python", "PHP", "SLQ"],
        habilidadesc: ["liderazgo", "Scrum",],
        experienciac: 15 // years
    },
    {
        cargo: "Data Analyst",
        tecnologiasc: ["matlab", "Python"],
        habilidadesc: [, "Analizis", "Toma de deciciones"],
        experienciac: 2 // years
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

const imprimirListac = (listac) => {
    listac.forEach(elementc => {
        console.log(
            `${elementc.cargo} - ${elementc.experiencia}`
        )
    });
}
const renderizarc = () => {
    const puestosList = document.getElementById("renderc");
    puestosList.innerHTML = ""
    puestos.forEach(puesto => {
    const listItem = document.createElement("li");
    listItem.textContent = `${puesto.cargo} - ${puesto.tecnologiasc} - ${puesto.habilidadesc} - ${puesto.experienciac} `;
    puestosList.appendChild(listItem);
    });
}
