<script>
    import { getContext } from 'svelte';
    import Popup from './PopupEmail.svelte';

    const { open } = getContext('simple-modal');
    const SignIn = () => open(Popup);
</script>
  
<style>
    .positionBtnEmail {
        width: 100px;
        margin-left: 30px;
        position: absolute;
    }
</style>

<button class="positionBtnEmai" on:click={SignIn}>Envoyer</button>