

let grid=document.getElementById("grid");
grid.style.display="flex";
grid.style.flexDirection="column";
grid.style.alignItems="center";
grid.style.marginTop='20px'
grid.style.marginBottom='20px'
grid.style.flex=1;
grid.style.backgroundColor="white";
grid.style.padding='0px'

let input=16;
let side=30;

const change=document.querySelector(".change");

const reset=document.getElementById('reset');

updateGrid(16,30);


change.addEventListener('click', () => {
    input = prompt("Enter P, where P means the the number of pixels PxP");
    if(input>64)
        input=64;
    side=480.0/input;
    updateGrid(input,side);
});

reset.addEventListener('click', () => {
    updateGrid(input,side);
});


function updateGrid (input,side) {

    grid.textContent='';

    for(let i=1;i<=input;i++) 
    {
        let row=document.createElement('div');
        grid.appendChild(row);
        row.style.display="flex";

        for(let j=1;j<=input;j++)
        {
            let box=document.createElement('div');

            
            box.style.border="1px dotted gray"
            box.style.width=`${side}px`;
            box.style.height=`${side}px`;
            box.classList.add("boxes");
            box.setAttribute('id',`${i}${j}`);

            row.appendChild(box);
        }
    }
    game();
};

function game () {
    const boxes=document.querySelectorAll(".boxes");
    const draw=document.getElementById('draw');
    const erase=document.getElementById('erase');
    let active='draw';

    draw.addEventListener('click', () => {
        active='draw';
        console.log(active);
    });
    erase.addEventListener('click', () => {
        active='erase';
        console.log(active);
    });



    boxes.forEach(square => {

        square.addEventListener('mouseover',function(e){
            if(active==='draw'){
                square.classList.add("hovered");
            }
            else {
                square.classList.remove("hovered");
            }
        });
    });
}