<script>
  import { onMount } from "svelte";
  import Login from "./login.svelte";

  $: panels = null;
  let panel1 = null;
  let panel2 = null;
  let panel3 = null;
  
  let _url = "";
  let userSet = false;
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
  function  transition(select) {
    let arrayStr = ["adB.png","elB.png","profB.png",]; 
    let elems = document.querySelectorAll(".panel");
    for ( let index = 0; index < elems.length ; index++) {
      elems[index].style.height = "100px";
      elems[index].style.opacity = 1.5;
      elems[index].style.top = "-30%";
      elems[index].style.backgroundImage =  "url('"+ arrayStr[index] +"')";
      
    }    
    _url = ["Admin3.jpg","Etudiant.jpg","Formateur.jpg"][select];
    console.log(_url); 
    userSet = true;
  };
  const removeActiveClasses = () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  };
</script>

<div class="logo">
  <img src="logo2.svg" alt="Logo plateformation" height="50px" width="auto" />
</div>

<main>
<h1>Qui êtes-vous ?</h1>
<br>
  <div
    class="panel"
    id="div_id1"
    on:click={()=> {transition(0)}}
    bind:this={panel1}
  >
    <h2>Admin</h2>
  </div>
  <div
    class="panel active"
    id="div_id2"
    on:click={()=> {transition(1)}}
    bind:this={panel2}
  >
    <h2>Enseignant</h2>
  </div>
  <div
    class="panel"
    id="div_id3"
    on:click={()=> {transition(2)}}
    bind:this={panel3}
  >
    <h2>Etudiant</h2>
  </div>
 {#if userSet}
<Login _url/>
{/if}
</main>

<style>
  :global(body) {
    width: 100%;
    font-family: system-ui, "Gill Sans", sans-serif;
  }

  main {
    display: flex;
    height: 94vh;
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
      font-size: 72px;
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
      font-size: 60px;
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
      width: 720px;
    }
    .panel {
      margin: 0 1rem;
    }
    h1 {
      font-size: 34px;
    }
  }
  @media (max-width: 576px) {
    main {
      width: 540px;
    }
    .panel {
      margin: 0 0.5rem;
    }
  }

  @media (max-width: 600px) {
    main {
      flex-direction: column;
      min-height: 80vh !important;
      padding-top: 120px;
    }
    .panel {
      width: 80%;
      margin: 10px 0;
      height: 40vh !important;
    }
  }

  h1 {
    position: absolute;
    top: 10%;
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

  h2 {
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  }
  #div_id1 {
    background-image: url("Admin3.jpg");
    background-position: 46% 8%;
  }
  #div_id2 {
    background-image: url("Formateur.jpg");
    background-position: 49% 24%;
  }
  #div_id3 {
    background-image: url("Etudiant.jpg");
    background-position: 46% 34%;
  }

  .panel {
    height: 55vh;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    position: relative;
    top: 0%; 
    transition: flex 0.5s ease-in;
    -webkit-transition: all 500ms ease-in-out;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
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
