<script>
    async function  connect(){
        fetch("scraperMod"
    ,{ method: "POST",
        body: JSON.stringify({
        
	})}
).then(response =>  {console.log(response)})
    }
</script>

<button on:click={connect}> Connect </button>

<style>
  :global(body) {
    display: flex;
  }
</style>
