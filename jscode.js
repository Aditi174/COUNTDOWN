const enddate = "2023-10-30T12:00:00";
document.getElementById("enddate").innerText = enddate
const inputs = document.querySelectorAll("input")

function clock(){
    const lastdate = new Date(enddate);
    const newdate = new Date();
    const diff = (lastdate - newdate) / 1000;
    
    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
clock()

setInterval(() => {
    clock()},1000
)


