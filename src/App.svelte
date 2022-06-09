 <script>
import { onMount } from "svelte";


   $: panels = null;
   let panel1 = null;
   let panel2 = null;
   let panel3 = null;

   onMount(async () => {
    panels = [panel1, panel2, panel3];

     if (panels) {
       
       panels.forEach((panel) => {
        panel.addEventListener("mouseover", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
    });
    }

  });
  


const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  })
}
  </script>

	<style>body{
    width:100%;
    font-family: system-ui, "Gill Sans", sans-serif;
    }
    
    main{
        display: flex;
        height: 94vh;
        justify-content: center;
        align-items: center;
        padding-top: 3rem;
        margin: auto;
    }
    @media (min-width: 768px) {
    .panel.active{
        flex: 1.4;
    }
    }
    @media (min-width: 1400px) {
        main{
            width: 1320px;
        }
        main .panel h2{
            font-size: 2.7rem;
        }
        .panel{
            margin: 0 3rem;
        }
        h1{
            font-size: 72px;
        }
    }
    
    @media (min-width: 1201px) and (max-width: 1399px) {
        main{
            width: 1140px;
        }
        .panel{
            margin: 0 2rem;
        }
        h1{
            font-size: 60px;
        }
        main .panel h2{
            font-size: 2.7rem;
        }
    }
    @media (min-width: 993px) and (max-width: 1200px) {
        main{
            width: 960px;
        }
        .panel{
            margin: 0 1.7rem;
        }
        main .panel h2{
            font-size: 2.5rem;
        }
        h1{
            font-size: 58px;
        }
    }
    @media (min-width: 768px) and (max-width: 992px) {
        main{
            width: 720px;
        }
        main .panel h2{
            font-size: 2rem;
        }
    
        .panel{
            margin: 0 1.5rem;
        }
        h1{
            font-size: 46px;
        }
    }
    @media (min-width: 579px) and (max-width: 768px) {
        main{
            width: 720px;
        }
        .panel{
            margin: 0 1rem;
        }
        h1{
            font-size: 34px;
        }
    }
    @media (max-width: 576px) {
        main{
            width: 540px;
        }
        .panel{
            margin: 0 0.5rem;
        }
    }
    
    @media (max-width: 600px) {
        main{
            flex-direction: column;
            min-height: 80vh !important;
            padding-top: 120px;
        }
        .panel{
            width: 80%;
            margin: 10px 0;
            height: 40vh !important;
        }
        }
    
    h1{
        position: absolute;
        top: 10%;
        width: 100%;
        text-align: center;
        color: #222D3D;
        z-index: 1;
    }
    
    main .panel h2{
        font-size: 3rem;
        font-weight: 800;
        color: #fff;
        text-align: center;
    }
    
    h2{
        text-shadow: 0px 4px 3px rgba(0,0,0,0.3);
    }
    #div_id1{
    background-image: url("/static/Admin.jpg");
    background-position: 46% 8%;
}
#div_id2{
    background-image: url("/static/Formateur.jpg");
    background-position: 49% 24%;
}
#div_id3{
    background-image: url("/static/Etudiant.jpg");
    background-position: 46% 34%;
}
    
    .panel{
        height: 55vh;
        background-repeat: no-repeat;
        background-size: cover;
        flex: 1;
        position: relative;
        transition: flex 0.5s ease-in;
        -webkit-transition: all 500ms ease-in-out;
        cursor: pointer;
        border-radius: 20px;
        box-shadow: 4px 4px 40px rgba(0,0,0,0.2);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .logo {
        position: absolute;
        margin-left: 30px;
        margin-top: 16px;
        z-index: 3;
    }

/* --------------- RESET ------------ */

html, body, div, span,
h1, h2, h3, p {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
footer, header, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}

	</style>


<div class="logo">
    <img
    src="logo250x150.svg"
    alt="Logo plateformation"
    height="50px" width="auto" />
</div>
    
    <h1>Qui êtes-vous ?</h1>
    
  <main>

    <div class="panel" id="div_id1" onclick="location.href='#';" bind:this={panel1}> <h2>Admin</h2></div>
     <div class="panel active" id="div_id2" onclick="location.href='#';" bind:this={panel2}> <h2>Enseignant</h2></div>
     <div class="panel" id="div_id3" onclick="location.href='#';" bind:this={panel3}>
       <h2>Etudiant</h2>
      </div>

</main>