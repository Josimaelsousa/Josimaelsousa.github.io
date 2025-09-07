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

const tabelaDados = document.getElementById("tabelaDados");
const cadastrosRef = firebase.database().ref("cadastros");

cadastrosRef.on("child_added", snapshot => {
  const data = snapshot.val();

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${data.nome}</td>
    <td>${data.idade}</td>
    <td>${data.localizacao}</td>
    <td>${data.telefone || ""}</td>
  `;
  tabelaDados.appendChild(tr);
});
