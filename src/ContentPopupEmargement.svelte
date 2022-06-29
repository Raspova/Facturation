<script>
    import { getContext } from 'svelte';
    import Popup from './PopupLineEmargement.svelte';
    const { open } = getContext('simple-modal');
    const SignIn = () => open(Popup);
</script>
  
<button on:click={SignIn}>Ajouter une ligne</button>