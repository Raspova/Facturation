<script>
    import ButonCard from "../butonCard.svelte";
    import SimplebuttonGreen from "../SimplebuttonGREEN.svelte";
    import SimplebuttonRed from "../SimplebuttonRED.svelte";
    import { onMount } from "svelte";
    let token = "1bd071cb742faf8823fbc0889cfbf23c4fbb3bf2aded73a75b4c167e3fd58b53";
    let pageIndex = 0;
    let students = getStudents(pageIndex);
    //let stuInfo = [];
   
    const getAll  = "https://ext.edusign.fr/v1/student?page=";

    async function getStudents(pageIndex) {
        let studentsBuff = await fetch( getAll + String(pageIndex), {
            headers: {
                "Authorization": "Bearer " +  token,
                "Content-Type": "application/json"
            }
        })
        let res = await studentsBuff.json()
        if (res.status == "error")
            throw () => {}
        console.log(res)
        // students = res.result;
        // console.log(getAll + pageIndex + "  <-> "  + res.result)
        return res.result;
        
        //.map((e) => {return {"LASTNAME":e.LASTNAME}});
    }
    
</script>
    
<svelte:head>
  <title>Facturation Center</title>
</svelte:head>

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
    background: #BCAB79;
    }
header {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.899);
    position:fixed;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 75% 15% 10%;
    column-gap: 20px;
}
#nav  {
    display: grid;
    margin-top: 10px;
}

</style>


<main>
    <div>
        {#await students}
            <h2>LOADING</h2>    
        {:then stuInfo} 
            {#each  stuInfo as data}
                <p><ButonCard data={data}></ButonCard></p>
            {/each}
        {:catch error}
            <h1>No Pages Here (￣～￣;) </h1>
        {/await}
    </div>
   
</main>

<header>
    <h1>Facturation</h1> 
    <nav>
        <div id="nav">
            <SimplebuttonGreen value="Next" on:click={() => { pageIndex++ ;students = getStudents(pageIndex)}} ></SimplebuttonGreen>
            {#if pageIndex > 0}
            <br>
            <SimplebuttonRed value="Back" on:click={() => { pageIndex-- ;students = getStudents(pageIndex)}} ></SimplebuttonRed>
            {/if}
        </div>
    </nav>
</header>