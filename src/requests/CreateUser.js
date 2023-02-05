import axios from "axios";

async function CreateUser (username,email,password) {

  console.log(username+email+password)

  await axios.put('https://hommes-feministes.fr/api/createUser', {username:username,email:email,password:password})

  return (
    <div></div>
  );
} export default CreateUser;
