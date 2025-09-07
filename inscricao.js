const firebaseConfig = {
  apiKey: "AIzaSyA1ed31dI74yKM1qbO_rDTE4wL-cZjsyJU",
  authDomain: "formulario-493dd.firebaseapp.com",
  databaseURL: "https://formulario-493dd-default-rtdb.firebaseio.com/",
  projectId: "formulario-493dd",
  storageBucket: "formulario-493dd.firebasestorage.app",
  messagingSenderId: "701392084135",
  appId: "1:701392084135:web:5f988c4cf30fab09b28f82"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const form = document.getElementById("meuFormulario");

form.addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const localizacao = document.getElementById("localizacao").value;
  const telefone = document.getElementById("telefone").value;

  db.ref("cadastros").push({ nome, idade, localizacao, telefone });

  alert("Inscrição enviada!");
  form.reset();
});
