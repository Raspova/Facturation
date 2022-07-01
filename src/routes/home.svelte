<script context="module">
  export async function load({ session }) {
    if (!session.authentificated) {
      return {
        status: 302,
        redirect: "/",
      };
    }
    console.log(session);
    return {
      status: 200,
      props: {
        group_id: session.group_id,
      }
    };
  }
</script>

<script>
  import ButonCard from "../butonCard.svelte";
  import SimplebuttonGreen from "../SimplebuttonGREEN.svelte";
  import SimplebuttonRed from "../SimplebuttonRED.svelte";
  import { onMount } from "svelte";
  import Modal from 'svelte-simple-modal';
	  import Content from '../ContentPopUpEmail.svelte';
  //let offset = 0;
  export let group_id;

  let studentsOriginal = [];
  let students = [];
  onMount(async () => {
    studentsOriginal = await getStudents("all");
    students = Object.create(studentsOriginal);
    console.log(students);
  });
  let filterstatus = "Nom";
  let filter;

  async function getStudents(offset) {
    // adimin-n (admin-150) | admin-all
    let studentsBuff = await fetch("/api/admin-" + String(offset)+ "-" + String(group_id));
    let res = await studentsBuff.json();
    //console.log(res.results.length);
    return res.results;
  }

  function logout() {
    fetch("/api/auth/login", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = "/";
      }
    });
  }

  function applyFilter() {
    students = [];
    for (let i = 0; i < studentsOriginal.length; i++) {
      if (
        (filterstatus == "Nom" ? studentsOriginal[i].lastname :
        filterstatus == "Prénom" ? studentsOriginal[i].firstname : 
        filterstatus == "ref" ? studentsOriginal[i].ref : studentsOriginal[i].formation)
          .toLowerCase()
          .startsWith(filter.toLowerCase())
      ) {
       
        students = [...students, studentsOriginal[i]];
      }
    }
  }
</script>

<svelte:head>
  <title>Facturation Center</title>
</svelte:head>

<main>
  <div>
    <!-- {#await students} -->
    <!-- <h2>LOADING</h2>     -->
    <!-- {:then stuInfo}         -->
    <h1><label for="inputF"></label><input type="text" id="inputF" ></h1>
    <button>Save</button>
    {#each students as data}
      <p><ButonCard {data} /></p>
    {/each}
    <!-- {:catch error} -->
    <!-- {error} -->
    <!-- <h1>No Pages Here (￣～￣;) </h1> -->
    <!-- {/await} -->
  </div>
</main>

<header>
  <h1>Facturation</h1>
  <div id="search">
  <div>
    <label for="input">Bar de recherche: </label><input
      bind:value={filter}
      on:input={applyFilter}
      type="text"
    />
  </div>
  <div />
  <div>
    <div>
      <label for="Nom">Nom</label>
      <input bind:group={filterstatus} type="radio" id="Nom" name="statut" value="Nom"
      />
    </div>
    <div>
      <label for="Prénom">Prénom</label>
      <input bind:group={filterstatus} type="radio" id="Prénom" name="statut" value="Prénom"
      />
    </div>
    <div>
      <label for="ref">ref</label>
      <input bind:group={filterstatus} type="radio" id="ref" name="statut" value="ref"
      />
    </div>
    <div>
        <label for="formation">formation</label>
        <input bind:group={filterstatus} type="radio" id="formation" name="statut" value="formation"
        />
      </div>
  </div></div>
  <Modal>
    <Content/>
  </Modal>
  <nav>
    <div id="nav">
      <SimplebuttonRed value="Logout" on:click={logout} />
    </div>
  </nav>
</header>

<style global>
  h1 {
    color: #253031;
    border-radius: 5%;
    margin-left: 10%;

    /* color: #A9FFF7; */
  }
  :global(body) {
    margin: 10%;
    min-height: 100vh;
    background: #fff;
  }
  header {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.899);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* grid-template-columns: ; */
    column-gap: 20px;
  }
  #nav {
    display: grid;
    margin-top: 10px;
  }
</style>
