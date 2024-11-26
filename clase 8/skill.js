const skills = ["HTML", "CSS", "JavaScript", "Bootstrap"];
const skillsList = document.getElementById("skills");

skills.forEach(skill => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
});


[
    {
        nombre: "Juan",
        tecnologias: ["Javascrip", "Python"],
        habilidades: ["liderazgo", "Scrum","Manejo de conflictos"],
        experiencia: 5 // years
    },
    {
        nombre: "camila",
        tecnologias: ["Javascrip", "Python"],
        habilidades: ["ciencia de datos", "Analizis","Toma de deciciones"],
        experiencia: 3 // years
    }
]