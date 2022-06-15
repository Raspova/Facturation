<script>
  import { onMount } from "svelte";
  import {goto} from '$app/navigation';
  import Login from "../login.svelte";

  $: panels = null;
  let panel1 = null;
  let panel2 = null;
  let panel3 = null;

  let statusActif = null;
  let testClass = null;

  onMount(async () => {
    panels = [panel1, panel2, panel3];

    if (panels) {
      panels.forEach((panel) => {
        panel.addEventListener("mouseover", () => {
          removeActiveClasses();
          panel.classList.add("active");
        });
      });
    }
  });

  const statutLink = (statusChecked) => () => {
    statusActif = statusChecked;
    // console.log(statutActif);  -> output : admin ou prof ou student
  };

  const removeActiveClasses = () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  };

  //function re
</script>

<div class="logo">
  <img src="logo2.svg" alt="Logo plateformation" height="50px" width="auto" />
</div>

<h1>Espace connexion</h1>

<main>
  <div
    class="panel"
    id="div_id1"
    on:click={statutLink("admin")}
    bind:this={panel1}
    class:selected={statusActif === "admin"}
  >
    <h2>Admin</h2>
  </div>
  <div
    class="panel active"
    id="div_id2"
    on:click={statutLink("prof")}
    bind:this={panel2}
    class:selected={statusActif === "prof"}
  >
    <h2>Enseignant</h2>
  </div>
  <div
    class="panel"
    id="div_id3"
    on:click={statutLink("student")}
    bind:this={panel3}
    class:selected={statusActif === "student"}
  >
    <h2>Etudiant</h2>
  </div>
</main>

<!-- FORMULAIRE -->
{#if statusActif}
  <Login on:OK={() => {goto("/home")}} on:KO={()=> {alert("Nom d'utilistaeur ou mot de passe incorrecte")}}/>

  <style>
    .panel {
      height: 100px !important;
      box-shadow: none !important;
      border: 6px solid !important;
      border-color: #ffffff !important;
    }
    main {
      height: auto !important;
    }
    .panel h2 {
      font-size: 24px !important;
    }
    #div_id3 {
      background-image: url("elB.png") !important;
    }
    #div_id2 {
      background-image: url("profB.png") !important;
    }
    #div_id1 {
      background-image: url("adB.png") !important;
    }
    @media (max-width: 576px) {
      .panel {
        height: 50px !important;
      }
    }

    @media (max-width: 700px) {
      main {
        min-height: 20vh !important;
        padding-top: 20px !important;
      }
      .panel {
        min-height: 80px !important;
      }
    }

    @media (min-width: 768px) {
      .panel.active {
        flex: 1 !important;
      }
      .panel.selected {
        flex: 1.4 !important;
      }
    }
  </style>
{/if}

<!-- ------------------------------------------------- -->
<style>
  :global(body) {
    width: 100%;
    font-family: system-ui, "Gill Sans", sans-serif;
  }

  .not-selected {
    display: none !important;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    margin: auto;
  }

  @media (min-width: 768px) {
    .panel.active {
      flex: 1.4;
    }
  }
  @media (min-width: 1400px) {
    main {
      width: 1320px;
    }
    main .panel h2 {
      font-size: 2.7rem;
    }
    .panel {
      margin: 0 3rem;
    }
    h1 {
      font-size: 62px;
    }
  }

  @media (min-width: 1201px) and (max-width: 1399px) {
    main {
      width: 1140px;
    }
    .panel {
      margin: 0 2rem;
    }
    h1 {
      font-size: 54px;
    }
    main .panel h2 {
      font-size: 2.7rem;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    main {
      width: 960px;
    }
    .panel {
      margin: 0 1.7rem;
    }
    main .panel h2 {
      font-size: 2.5rem;
    }
    h1 {
      font-size: 58px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    main {
      width: 720px;
    }
    main .panel h2 {
      font-size: 2rem;
    }

    .panel {
      margin: 0 1.5rem;
    }
    h1 {
      font-size: 46px;
    }
  }
  @media (min-width: 579px) and (max-width: 768px) {
    main {
      width: 98%;
    }
    .panel {
      margin: 0 2%;
    }
    h1 {
      font-size: 34px;
    }
  }
  @media (max-width: 576px) {
    main {
      width: 98vw;
    }
    .panel {
      margin: 0 0.5rem;
    }
  }

  @media (max-width: 600px) {
    main {
      flex-direction: column;
      min-height: 80vh;
      padding-top: 120px;
    }
    .panel {
      width: 80%;
      margin: 10px 0;
      height: 40vh;
    }
  }

  h1 {
    padding-top: 75px !important;
    width: 100%;
    text-align: center;
    color: #222d3d;
    z-index: 1;
  }

  main .panel h2 {
    font-size: 3rem;
    font-weight: 800;
    color: #fff;
    text-align: center;
  }
  .selected {
    border: 6px solid rgb(84, 105, 212) !important;
  }
  h2 {
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  }
  #div_id1 {
    background-image: url("/Admin3.jpg");
    background-position: 46% 8%;
  }
  #div_id2 {
    background-image: url("/Formateur.jpg");
    background-position: 49% 24%;
  }
  #div_id3 {
    background-image: url("/Etudiant.jpg");
    background-position: 46% 34%;
  }

  .panel {
    height: 55vh;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    position: relative;
    transition: flex 0.5s ease-in;
    -webkit-transition: all 500ms ease-in-out;
    cursor: pointer;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  }

  .logo {
    position: absolute;
    margin-left: 30px;
    margin-top: 16px;
    z-index: 3;
  }

  /* --------------- RESET ------------ */

  :global(html, body),
  div,
  h1,
  h2 {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
</style>
