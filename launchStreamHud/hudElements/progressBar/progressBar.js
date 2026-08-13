setInterval(update, 1);
let prog = 0

function update()
{
    const progBar = document.getElementById("progBar")
    prog += 0.1
    progBar.style.width = prog + "%"
}