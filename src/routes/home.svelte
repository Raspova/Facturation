<script context="module">
    export async function load({session}) {
        if (!session.authentificated) {
            return {
                status:302,
                redirect: '/'
            }
        }
        return {
            status:200
        }
    }
</script>

<script>
    import ButonCard from "../butonCard.svelte";
    import SimplebuttonGreen from "../SimplebuttonGREEN.svelte";
    import SimplebuttonRed from "../SimplebuttonRED.svelte";
 

    //let pageIndex = 0;
    let offset = 0;
    let students = getStudents(offset);
    //const pool = new pg.Pool();
    
    async function getStudents(offset) {
        let studentsBuff =  await fetch("/api/admin-" + String(offset));
        let res = await studentsBuff.json()
        console.log(res)
        return res.results;
    }
    
        //pool.query("SELECT * FROM student_contacts ORDER BY lastname LIMIT 100 OFFSET " + offset)
        //.then(res => (students = res.rows))
       // const getAll  = "https://ext.edusign.fr/v1/student?page=";
       // let studentsBuff = await fetch( getAll + String(pageIndex), {
       //     headers: {
       //         "Authorization": "Bearer " +  import.meta.env.VITE_TOKEN,
       //         "Content-Type": "application/json"
       //     }
       // })
       // let res = await studentsBuff.json()
       // if (res.status == "error")
       //     throw () => {}
       // console.log(res)
       // return res.result;
    //}
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
    background: #fff;
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
            {error}
            <h1>No Pages Here (￣～￣;) </h1>
        {/await}
    </div>
   
</main>

<header>
    <h1>Facturation</h1> 
    <nav>
        <div id="nav">
            <SimplebuttonGreen value="Next" on:click={() => { offset+= 100 ;students = getStudents(offset)}} ></SimplebuttonGreen>
            {#if offset > 0}
            <br>
            <SimplebuttonRed value="Back" on:click={() => { offset-= 100 ;students = getStudents(offset)}} ></SimplebuttonRed>
            {/if}
        </div>
    </nav>
</header>