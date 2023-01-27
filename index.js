const onClickLogin = () => {
  const email = document.getElementById("input-email").value;
  //const name = document.getElementById("input-name").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("Email Invalido.");
    return;
  }

  localStorage.setItem("@WalletApp:userEmail", email);
  //localStorage.setItem("@WalletApp:userName", name);
  window.open("./src/pages/home/index.html", "_self");
};
