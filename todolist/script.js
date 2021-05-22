let tombol = document.getElementById("mybutton");
let inpekerjaan = document.getElementById("inpekerjaan");
let outcontainer = document.getElementById("outcontainer");

tombol.addEventListener("click", function () {
    let pekerjaan = document.createElement('p');
    pekerjaan.innerHTML = inpekerjaan.value ;
    outcontainer.appendChild(pekerjaan)
    
})