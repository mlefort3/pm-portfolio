import axios from "axios";

async function LoginRequest (email,password,stayLoggedIn) {

  let address = "https://hommes-feministes.fr/api/login";

  if (stayLoggedIn) {
    address = address + "?stayLoggedIn=true";
  }

  await axios.post(address, {email:email, password:password},{withCredentials: true, CacheControl: "Public",})
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error;
  });

  return (
    <div></div>
  );
} export default LoginRequest;
