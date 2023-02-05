import axios from "axios";

async function LogoutRequest (email,password) {

  await axios.post("https://hommes-feministes.fr/api/logout")
  .then(function (response) {
    window.$settings = ['Connexion', 'Inscription'];
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <div></div>
  );
} export default LogoutRequest;
