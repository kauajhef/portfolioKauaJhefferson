const projects = [
    { name: "SISTEMA PARA CAPTAÇÃO DO SOLO E DA ATMOSFERA", description: "O projeto consistiu em apresentar uma pesquisa acadêmica para a comunidade do IFPB, para apresentar um sistema que captasse a temperatura do solo e da atmosfera, o software ainda vai ser acoplado a os medidores da temperatura do solo, mas a API de previsão do tempo já está ativo.", githubLink: "https://github.com/kauajhef/API-TEMPERATURA-DO-SOLO-PREVIS-O-DO-TEMPO", deployLink: "https://653084112e9243431e16ad89--bejewelled-cranachan-3deae9.netlify.app" },
    { name: "API NOTÍCIAS", description: "Sistema de notícias interativas aplicada para treinamento em back-end, feito com Node js e um banco de dados não relacional, MongoDB e o levantamento de uma API para treinar o CRUD.", githubLink: "https://github.com/kauajhef/noticias_Interativas", deployLink: "https://deploy-projeto2.com" },
    { name: "TO DO LIST", description: "Criação de um projeto de lista de tarefas para treinar lógica de programação com JavaScript.", githubLink: "https://github.com/projeto3", deployLink: "https://deploy-projeto3.com" }
];

// Função para exibir os projetos na página
function displayProjects() {
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        const projectName = document.createElement("h2");
        projectName.textContent = project.name;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        const githubButton = document.createElement("button");
        githubButton.textContent = "Ver GitHub";
        githubButton.addEventListener("click", function() {
            window.open(project.githubLink, "_blank");
        });

        const deployButton = document.createElement("button");
        deployButton.textContent = "Ver Deploy";
        deployButton.addEventListener("click", function() {
            window.open(project.deployLink, "_blank");
        });

        projectElement.appendChild(projectName);
        projectElement.appendChild(projectDescription);
        projectElement.appendChild(githubButton);
        projectElement.appendChild(deployButton);

        projectsContainer.appendChild(projectElement);
    });
}



// Chamar a função para exibir os projetos quando a página carregar
document.addEventListener("DOMContentLoaded", displayProjects);
