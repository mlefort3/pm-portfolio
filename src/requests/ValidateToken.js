import axios from "axios";


async function validateToken ({status, setStatus}) {
  await axios.get("https://hommes-feministes.fr/api/validateToken", { withCredentials: true })
  .then(function (response) {
    window.$settings = ['Mon profil', 'Mes paramètres', 'Ma contraception', 'Déconnexion'];
    setStatus(response.status);
  })
  .catch(function (error) {
    console.log(error);
    setStatus(error.status);
  });
    return status;
} export default validateToken;
