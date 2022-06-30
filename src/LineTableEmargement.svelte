<script>
    import { onMount } from 'svelte';

    export let idLineSig;
    export let idInterSig;
    export let session;

    onMount(async () => {
        const sigLine = document.getElementById(idLineSig);
        if (session.Signature_client === "Undefined") {
            const text = document.createElement("p");
            text.innerHTML = "ABSENT";
            text.style.color = 'red';
            sigLine.appendChild(text);
        } else {
            var Img = document.createElement("img");
            Img.setAttribute('src', session.Signature_client);
            Img.setAttribute('alt', 'test1');
            Img.setAttribute('height', '50px');
            Img.setAttribute('width', '50px');
            sigLine.appendChild(Img);
        }

        const sigInter = document.getElementById(idInterSig);
        if (session.Signature_client != "Undefined") {
            console.log("je passe")
            var Img2 = document.createElement("img");
            Img2.setAttribute('src', session.Signature_intervenant);
            Img2.setAttribute('alt', 'test2');
            Img2.setAttribute('height', '50px');
            Img2.setAttribute('width', '50px');
            sigInter.appendChild(Img2);
        }
	});
</script>

<style>
    td {
        border: 1px solid rgb(190, 190, 190);
        padding: 10px;
    }

    td {
        text-align: center;
        background-color: white;
    }

    tr:nth-child(even) {
        background-color: #eee;
    }
</style>


<tr>
    <td><b>{session.Firstname} {session.Lastname} - {session.Formation}</b><br/>{session.Date_session} {session.Begin_session} {session.End_session}</td>
    <td>{session.Time_session}</td>
    <td>
        <div id={idLineSig}>
        </div>
    </td>
    <td>{session.Firstname_inter} {session.Lastname_inter}<br/>
        <div id={idInterSig}>           
        </div>
    </td>
</tr>