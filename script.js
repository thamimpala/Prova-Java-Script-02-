let idade = parseInt(prompt("Digite sua idade:"));
let status = prompt("Digite seu status (registrado/não registrado):").toLowerCase();

if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}

if (status === "registrado") {
    alert("Bem-vindo! Você está registrado.");
} else if (status === "não registrado") {
    alert("Por favor, complete seu registro.");
} else {
    alert("Status desconhecido.");
}

if (idade >= 18 && status === "registrado") {
    alert("Acesso completo concedido.");
} else {
    alert("Acesso limitado.");
}
