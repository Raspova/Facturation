<script>
  import { createEventDispatcher } from "svelte";
  // import bcrypt from 'bcrypt'
  // import fetch from "fetch"

  const dispatch = createEventDispatcher();
  let email;
  let password;
  let passwordCp;
  let phone = "buff";
  let lastname = "buff";
  let firstname = "buff";
  let status;

  async function register() {
    // const error  =undefined;
    if (password != passwordCp && password != "") throw "error passWordinvalid";
    try {
      res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          lastname,
          firstname,
          phone,
          email,
          password, //:Hash(password)
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        dispatch("OK");
      } else {
        dispatch("KO");
      }
    } catch {
      dispatch("KO");
    }
  }
</script>

<div class="container-form">
  <h2>Enregistrez une personne</h2>

  <form action="">
    <div class="radio-btn">
      <div>
        <label for="admin">Administrateur</label>
        <input type="radio" id="admin" name="statut" value="admin" />
      </div>

      <div>
        <label for="student">Etudiant</label>
        <input
          type="radio"
          id="student"
          name="statut"
          value="student"
          checked
        />
      </div>

      <div>
        <label for="prof">Enseignant</label>
        <input type="radio" id="prof" name="statut" value="prof" />
      </div>
    </div>

    <label for="username">Nom</label>
    <input type="text" name="name" placeholder="Nom" />

    <label for="username">Prenom</label>
    <input type="text" name="firstname" placeholder="Prenom" />

    <label for="email">Email</label>
    <input type="email" name="email" placeholder="Email" />

    <label for="phone">Téléphone</label>
    <input type="text" name="phone" placeholder="Téléphone" />

    <label for="password">Mot de passe</label>
    <input type="password" name="password" placeholder="Mot de passe" />

    <input type="submit" name="submit" value="Valider" />
  </form>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
    color: #1a1f36;
    box-sizing: border-box;
    word-wrap: break-word;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Ubuntu, sans-serif;
  }
  input {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: #eff1fb;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    margin-bottom: 20px;
  }
  input[type="submit"] {
    margin-top: 25px;
    font-weight: 700;
    font-size: 20px;
    background-color: rgb(84, 105, 212);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
      rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
    color: #fff;
    cursor: pointer;
  }
  .container-form h2 {
    margin-bottom: 40px;
    font-size: 36px;
    color: #222d3d;
  }
  .container-form label {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    color: #222d3d;
    font-weight: 600;
  }
  .container-form {
    margin: auto;
    max-width: 750px;
    padding: 30px 50px;
    margin-top: 100px;
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    .container-form {
      margin-top: 10px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .radio-btn {
    display: flex;
    justify-content: space-around;
  }
  .radio-btn input {
	border: unset;
	box-shadow: none;
    min-height: 23px;
  }
  .radio-btn div {
    margin: 0 20px;
  }
</style>
