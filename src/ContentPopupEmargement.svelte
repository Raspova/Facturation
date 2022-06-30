<script>
    import { getContext } from 'svelte';
    import Popup from './PopupLineEmargement.svelte';

    export let table_session;
    export let firstname;
    export let lastname;
    export let firstname_inter;
    export let lastname_inter;
    export let formation;

    console.log("CONTENT", table_session)

    const { open } = getContext('simple-modal');
    const SignIn = () => open(Popup, {table_session: table_session, 
                                     firstname: firstname, 
                                     lastname: lastname,
                                     formation: formation,
                                     firstname_inter: firstname_inter, 
                                     lastname_inter: lastname_inter,
                                     });
</script>
  
<style>
    .addLine {
        width: 100%;
        margin-top: 20px;
        height: 30px;
    }
</style>

<button class="addLine" on:click={SignIn}>Ajouter une ligne au tableau</button>