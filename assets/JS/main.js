const $ = document;

//Attendre que le DOM soit chargé
$.addEventListener("DOMContentLoaded", () => {
  //J'ajoute un écouteur d'évenement submit sur le formulaire
  $.addEventListener("submit", async (event) => {
    // J'empèche le comportement par défaut du navigateur
    event.preventDefault();

    //Je fais une requete AXIOS

    const response = await axios.post("http://localhost:3000/send-email", {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("subject").value,
      message: $.querySelector("#message").value,
    });
    console.log(response.data);

    //Je déclenche une alerte
    alert("Message envoyé");
  });
});
