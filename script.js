//script.js
// ==========================================
// Configuração do Firebase
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyA1ed31dI74yKM1qbO_rDTE4wL-cZjsyJU",
  authDomain: "formulario-493dd.firebaseapp.com",
  databaseURL: "https://formulario-493dd-default-rtdb.firebaseio.com/",
  projectId: "formulario-493dd",
  storageBucket: "formulario-493dd.firebasestorage.app",
  messagingSenderId: "701392084135",
  appId: "1:701392084135:web:5f988c4cf30fab09b28f82"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// ==========================================
// Seleção de elementos do HTML
// ==========================================
const form = document.getElementById("meuFormulario");
const tabelaDados = document.getElementById("tabelaDados");

// ==========================================
// Enviar dados ao Firebase
// ==========================================
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const localizacao = document.getElementById("localizacao").value;
  const telefone = document.getElementById("telefone").value;

  console.log("Enviando:", nome, idade, localizacao, telefone); // DEBUG

  // Cria um novo registro no Firebase
  const novoRegistro = firebase.database().ref("cadastros").push();
  novoRegistro.set({ nome, idade, localizacao, telefone });

  alert("Dados enviados com sucesso!");
  form.reset();
});

// ==========================================
// Mostrar dados na tabela em tempo real
// ==========================================
const cadastrosRef = firebase.database().ref("cadastros");

cadastrosRef.on("child_added", function(snapshot) {
  const data = snapshot.val();

  const tr = document.createElement("tr");

  const tdNome = document.createElement("td");
  tdNome.textContent = data.nome;

  const tdIdade = document.createElement("td");
  tdIdade.textContent = data.idade;

  const tdLocal = document.createElement("td");
  tdLocal.textContent = data.localizacao;

  const tdTelefone = document.createElement("td");
  tdTelefone.textContent = data.telefone || ""; // mostra vazio se não preencher

  tr.appendChild(tdNome);
  tr.appendChild(tdIdade);
  tr.appendChild(tdLocal);
  tr.appendChild(tdTelefone);

  tabelaDados.appendChild(tr);
});
