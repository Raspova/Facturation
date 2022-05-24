

<style>
header {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.827);
    position:absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 75% 15% 10%;
    column-gap: 20px;
}
#nav  {
    display: grid;
    margin-top: 10px;
    grid-template-columns: 100%;
    row-gap: 10%;
    
}
</style>
<script>
    import SimplebuttonGreen from "./SimplebuttonGREEN.svelte";
    import SimplebuttonRed from "./SimplebuttonRED.svelte";
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
    export let grennText;
    export let redText;
    //export let funcGreen; 
    //export let funcRed; 
    export let linkGreen = ""; 
    export let linkRed = ""; 

    function green_click() {
		dispatch('Green_click');
	}
    function red_click() {
		dispatch('Red_click');
	}
</script>
<header>
    <h1>Facturation</h1> 
    <nav>
        <div id="nav">
            <div>
                {#if linkGreen != ""}
                <a href={linkRed}>
                    <SimplebuttonGreen value={grennText} on:click={green_click} ></SimplebuttonGreen>                    
                </a>
                {:else}                
                    <SimplebuttonGreen value={grennText} on:click={green_click} ></SimplebuttonGreen>
                {/if} 
            </div>
            <div>
                {#if linkRed != ""}
                <a href={linkRed}>
                    <SimplebuttonRed value={redText} on:click={red_click} ></SimplebuttonRed>
                </a>
                {:else}
                    <SimplebuttonRed value={redText} on:click={red_click} ></SimplebuttonRed>
                {/if}
            </div>         
        </div>
    </nav>
</header>