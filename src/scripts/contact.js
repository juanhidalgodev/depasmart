import axios from "axios";

const form = document.querySelector("#cs-form");

async function sendData() {
  const formName = form[0].value;
  const formEmail = form[1].value;
  const formPhone = form[2].value;
  const formMessage = form[3].value;

  try {
    const fetchData = async () => {
      try {
        let config = {
          headers: {
            authorization: import.meta.env.PUBLIC_AUTH_API,
            "x-api-key": import.meta.env.PUBLIC_API_KEY,
          },
          params: {
            name: formName,
            email: formEmail,
            phone: formPhone,
            message: formMessage,
          },
        };

        const response = await axios.get(
          "https://1j10kygald.execute-api.us-east-1.amazonaws.com/dev/contact",
          config
        );
      } catch (error) {
        console.error("err.", error);
      } finally {
        const btn = document.getElementById("cs-button");
        btn.innerHTML = "MENSAJE ENVIADO";
      }
    };

    fetchData();
  } catch (e) {
    console.error("err.", e);
  }
}

function disableForm() {
  var inputs = document.querySelectorAll("#cs-form input");
  var btn = document.getElementById("cs-button");
  var txt = document.getElementById("message");
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
  btn.disabled = true;
  txt.disabled = true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
  disableForm();
});
