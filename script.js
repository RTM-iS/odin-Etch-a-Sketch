const container = document.querySelector("#container")
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    let squares = prompt("Enter the number of squares you need per side(max 100)", 16);
    let numbersquares = Number(squares);
    container.innerHTML = "";
    for(let i = 0; i < numbersquares; i ++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < numbersquares; j ++){
        const node = document.createElement("div");
        node.classList.add("node");
        node.classList.add("hover")
        node.addEventListener("mouseover", () => {
            node.style.backgroundColor = 'black';
        })
        row.appendChild(node);
    }
    container.appendChild(row);
}
})
for(let i = 0; i < 16; i ++){
const row = document.createElement("div");
row.classList.add("row");
for(let j = 0; j < 16; j ++){
    const node = document.createElement("div");
    node.classList.add("node");
    node.classList.add("hover")
    node.addEventListener("mouseover", () => {
        node.style.backgroundColor = 'black';
    })
    row.appendChild(node);
}
container.appendChild(row);
}



