console.log('hola mundo, vamos a hacer unos formularios js');

$(document).ready(() => {
    renderizar();
    renderizarc();

    $("#p_guardar").on("click", () => {
        console.log('acabamos de presionar el boton de guardar');
        const nombre = $("#p_name").val();
        const habilidades = $("#p_skill").val().split(", ");
        const tecnologias = $("#p_technology").val().split(", ");
        const experiencia = parseInt($("#p_experience").val());

        const data = {
            "nombre": nombre,
            "habilidades": habilidades,
            "tecnologias": tecnologias,
            "experiencia": experiencia,
        };

        aspirantes.push(data);
        renderizar();

        // Limpiar campos del formulario
        $("#p_name, #p_skill, #p_technology, #p_experience").val("");
    });

    $("#c_guardar").on("click", () => {
        console.log('acabamos de presionar el boton de guardar');
        const nombre = $("#cargo").val();
        const habilidades = $("#c_skill").val().split(", ");
        const tecnologias = $("#c_technology").val().split(", ");
        const experiencia = parseInt($("#c_experience").val());

        const data = {
            "cargo": nombre,
            "habilidadesc": habilidades,
            "tecnologiasc": tecnologias,
            "experienciac": experiencia,
        };

        puestos.push(data);
        renderizarc();

        // Limpiar campos del formulario
        $("#cargo, #c_skill, #c_technology, #c_experience").val("");
    });
});

const aspirantes = [
    {
        nombre: "Juan",
        tecnologias: ["Python", "Javascript", "CSS", "HTML", "Boostrap", "PHP", "SLQ"],
        habilidades: ["liderazgo", "Scrum", "Manejo de conflictos"],
        experiencia: 5 // años
    },
    {
        nombre: "Camila",
        tecnologias: ["matlab", "Python", "R", "C#"],
        habilidades: ["ciencia de datos", "Analizis", "Toma de decisiones", "comunicación"],
        experiencia: 3 // años
    }
];

const puestos = [
    {
        cargo: "Desarrollador full stack",
        tecnologiasc: ["Javascript", "Python", "PHP", "SLQ"],
        habilidadesc: ["liderazgo", "Scrum"],
        experienciac: 15 // años
    },
    {
        cargo: "Data Analyst",
        tecnologiasc: ["matlab", "Python", "Javascript"],
        habilidadesc: ["Analizis", "Toma de decisiones"],
        experienciac: 2 // años
    },
    // Otros puestos...
];

const renderizar = () => {
    const $aspirantesList = $("#render");
    $aspirantesList.empty();

    aspirantes.forEach((aspirante, idx) => {
        const $listItem = $("<li>");
        const $button = $("<button>").text("listar").attr("id", `listar_p${idx}`);
        $listItem.append($button).append(` ${aspirante.nombre} - ${aspirante.tecnologias.join(", ")} - ${aspirante.habilidades.join(", ")} - ${aspirante.experiencia}`);
        $aspirantesList.append($listItem);

        $(`#listar_p${idx}`).on("click", () => resnderizarOrden(idx));
    });
};

const renderizarc = () => {
    const $puestosList = $("#renderc");
    $puestosList.empty();

    puestos.forEach((puesto, idx) => {
        const $listItem = $("<li>");
        const $button = $("<button>").text("listar").attr("id", `listar_c${idx}`);
        $listItem.append($button).append(` ${puesto.cargo} - ${puesto.tecnologiasc.join(", ")} - ${puesto.habilidadesc.join(", ")} - ${puesto.experienciac}`);
        $puestosList.append($listItem);
    });
};

const resnderizarOrden = (id) => {
    const $aspirantesList = $("#render_puestos");
    const persona = aspirantes[id];
    const newPuestos = puestos.filter((puesto) => {
        const tecnologiasc = puesto.tecnologiasc;
        const tecnologiasp = persona.tecnologias;
        const habilidadesc = puesto.habilidadesc;
        const habilidadesp = persona.habilidades;

        const cumpleTecnologia = tecnologiasc.every(tecnologiac => tecnologiasp.includes(tecnologiac));
        const cumpleHabilidad = habilidadesc.some(habilidadc => habilidadesp.includes(habilidadc));

        return cumpleTecnologia && cumpleHabilidad && persona.experiencia >= puesto.experienciac;
    });

    $aspirantesList.empty();
    newPuestos.forEach(puesto => {
        const $listItem = $("<li>").text(`${puesto.cargo} - ${puesto.tecnologiasc.join(", ")} - ${puesto.habilidadesc.join(", ")} - ${puesto.experienciac}`);
        $aspirantesList.append($listItem);
    });
};