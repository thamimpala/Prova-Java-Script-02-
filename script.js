let idade = parseInt(prompt("Digite sua idade:"));
let status = prompt("Digite seu status (registrado/não registrado):").toLowerCase();


let maioridade = idade >= 18 ? "maior de idade" : "menor de idade";
alert(`Você é ${maioridade}.`);


switch (status) {
    case "registrado":
        alert("Bem-vindo! Você está registrado.");
        break;
    case "não registrado":
        alert("Por favor, complete seu registro.");
        break;
    default:
        alert("Status desconhecido.");
        break;
}

// Lógica com operadores lógicos
if (idade >= 18 && status === "registrado") {
    alert("Acesso completo concedido.");
} else if (idade < 18 || status !== "registrado") {
    alert("Acesso limitado.");
}