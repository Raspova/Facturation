<script>
    import { onMount } from 'svelte';

    export let idLineSig;
    export let idInterSig;
    export let firstname;
    export let lastname;
    export let formation;
    export let time_formation;
    export let date_formation;
    export let begin_formation;
    export let end_formation;
    export let intervenant;
    export let signature_client = "Undefined";


    onMount(async () => {
        const sigLine = document.getElementById(idLineSig);
        if (signature_client === "Undefined") {
            const text = document.createElement("p");
            text.innerHTML = "ABSENT";
            text.style.color = 'red';
            sigLine.appendChild(text);
        } else {
            var Img = document.createElement("img");
            Img.setAttribute('src', '../testsig1.png');
            Img.setAttribute('alt', 'test1');
            Img.setAttribute('height', '50px');
            Img.setAttribute('width', '50px');
            sigLine.appendChild(Img);
        }

        const sigInter = document.getElementById(idInterSig);
        if (signature_client != "Undefined") {
            console.log("je passe")
            var Img2 = document.createElement("img");
            Img2.setAttribute('src', '../testsig2.png');
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
    <td><b>{firstname} {lastname} - {formation}</b><br/>{date_formation} {begin_formation} {end_formation}</td>
    <td>{time_formation}</td>
    <td>
        <div id={idLineSig}>
        </div>
    </td>
    <td>{intervenant}<br/>
        <div id={idInterSig}>           
        </div>
    </td>
</tr>