function SendEmail() {
  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    menssage : document.getElementById("message").value
  }

  emailjs.send("service_dcq6vlk", "template_u1c3bhn", params).then(function (res) {
    alert("Sucesso! " + res.status);
  })
  
}