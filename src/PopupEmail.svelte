<script>
    export let sender = "johangaudisson@gmail.com"
    export let receiver = "johan.gaudisson@epitech.eu"
    export let object = "test email"
    export let text = "test email"
    export let html = '<p><em>Hello</em>, <span style="text-decoration: underline;"><strong>World!</strong></span></p><p><sup>Je m\'appelle Johan GAUDISSON.<br></sup></p><p><sup>Je vous envoies mes sinc&egrave;res f&eacute;licitations pour votre nouveau b&eacute;b&eacute;, votre hamster nain russe, Jean-Michel</sup></p><p><sup>Bisous sur la fesse gauche</sup></p><p><sup>Cordialement,</sup></p>'

    function sendEmail() {
        console.log("sendEmail-Front")
        fetch("/api/sendemail", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({Sender: sender, 
                                  Receiver: receiver,
                                  Object: object,
                                  Text: text,
                                  Html: html })
        }).then((res) => {
            console.log(res.body);
        });
    }
</script>

<style>
</style>

<main>
    <h3>Email</h3>
    <button on:click={sendEmail}>Envoyer</button>
</main>