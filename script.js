const botao = document.querySelector(".botao_responsivo");
const navbar = document.querySelector(".nav_bar");

botao.addEventListener("click", () => navbar.classList.toggle("active"));

const links = document.querySelectorAll(".nav_direita a");

links.forEach(link => {
    link.addEventListener("click", () => {
        
    // Remove o active quando eu clicar em qualquer link do botão
        navbar.classList.remove("active");
    });
});

function mostrarMensagem() {
    const msg = document.getElementById("mensagem-confirmacao");

    // Esconde a mensagem caso esteja ainda visível do envio anterior
    msg.style.display = "none";

    // Espera alguns milesimos para o envio ser processado
    setTimeout(() => {
        msg.style.display = "block";

        // Scroll suave
        msg.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 590);
}