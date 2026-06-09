const cartas = [];

for(let i = 1; i <= 30; i++){

    cartas.push(`${i}.jpg`);

}

function abrirSobre(){

    const sobre =
    document.getElementById("sobre");

    const contenedor =
    document.getElementById("cartas");

    contenedor.innerHTML = "";

    sobre.classList.add("abrir");

    setTimeout(()=>{

        sobre.style.display = "none";

        const seleccionadas = [];

        while(seleccionadas.length < 5){

            const carta =
            cartas[Math.floor(
            Math.random()*cartas.length
            )];

            if(!seleccionadas.includes(carta)){
                seleccionadas.push(carta);
            }

        }

        seleccionadas.forEach((carta,index)=>{

            setTimeout(()=>{

                const img =
                document.createElement("img");

                img.src = carta;

                img.className = "carta";

                contenedor.appendChild(img);

            },index * 300);

        });

    },700);

}