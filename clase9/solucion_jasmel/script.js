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
        tecnologias: ["Python"],
        habilidades: ["liderazgo", "Scrum","Manejo de conflictos"],
        experiencia: 5 // years
    },
    {
        nombre: "camila",
        tecnologias: ["Javascript"],
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
        tecnologiasc: ["matlab", "Python", "Javascript"],
        habilidadesc: [, "Analizis", "Toma de deciciones"],
        experienciac: 2 // years
    },
    {
        cargo: "Desarrollador backend ",
        tecnologiasc: ["Python", "SLQ"],
        habilidadesc: ["liderazgo", "Scrum",],
        experienciac: 4 // years
    },
    {
        cargo: "Produc owner",
        tecnologiasc: ["Python"],
        habilidadesc: [, "liderazgo", "scrum"],
        experienciac: 5 // years
    },
    {
        cargo: "Desarrollador frontend",
        tecnologiasc: ["Javascript", "CSS", "HTML", "Boostrap"],
        habilidadesc: ["comunicacion", "rest",],
        experienciac: 1 // years
    },
    {
        cargo: "Data Analyst junior",
        tecnologiasc: ["matlab", "Python", "R", "C#"],
        habilidadesc: [, "Analizis", "matematicas"],
        experienciac: 1 // years
    },
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
    aspirantes.forEach((aspirante, idx)=> {
        const listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerHTML = "listar"
        button.id = `listar_p${idx}`
        listItem.appendChild(button);
        listItem.innerHTML = listItem.innerHTML + ` ${aspirante.nombre} - ${aspirante.tecnologias} - ${aspirante.habilidades} - ${aspirante.experiencia} `;
        aspirantesList.appendChild(listItem);

        button = document.getElementById(`listar_p${idx}`).addEventListener("click", () => resnderizarOrden(idx))
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
    puestos.forEach((puesto, idx) => {
        const listItem = document.createElement("li");
        const button = document.createElement("button");
        button.innerHTML = "listar"
        button.id = `listar_c${idx}`
        listItem.appendChild(button);
        listItem.innerHTML = listItem.innerHTML + ` ${puesto.cargo} - ${puesto.tecnologiasc} - ${puesto.habilidadesc} - ${puesto.experienciac} `;
        puestosList.appendChild(listItem);
    });
}


const resnderizarOrden = (id) => {
    const aspirantesList = document.getElementById("render_puestos");
    const persona = aspirantes[id]
    const newPuestos = puestos.filter((puesto) => {
        // si cumple almenos una tecnologia y una habilidad lo vamos a dejar pasar
        const tecnologiasc = puesto["tecnologiasc"]
        const tecnologiasp = persona["tecnologias"]
        let cumpleTecnologia = false
        tecnologiasc.forEach(tecnologiac => {
            tecnologiasp.forEach(tecnologiap => {
                if (tecnologiac == tecnologiap) {
                    cumpleTecnologia = true
                }
            })
        });

        const habilidadesc = puesto["habilidadesc"]
        const habilidadesp = persona["habilidades"]
        let cumpleHabilidad = false
        habilidadesc.forEach(habilidadc => {
            habilidadesp.forEach(habilidadp => {
                if (habilidadc == habilidadp) {
                    cumpleHabilidad = true
                }
            })
        });

        return cumpleTecnologia || cumpleHabilidad
    })

    aspirantesList.innerHTML = ""
    newPuestos.forEach((puesto, idx) => {
        const listItem = document.createElement("li");
        listItem.textContent = ` ${puesto.cargo} - ${puesto.tecnologiasc} - ${puesto.habilidadesc} - ${puesto.experienciac} `;
        aspirantesList.appendChild(listItem);
    });

}