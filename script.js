let s1 = document.getElementById("Sq1");
let s2 = document.getElementById("Sq2");
let s3 = document.getElementById("Sq3");
let s4 = document.getElementById("Sq4");

s1.addEventListener("mouseenter", function() {
    let r = Math.ceil(Math.random() * 100);
    s1.innerHTML = "<h1>" + r + "</h1>";
    s1.style.backgroundColor = "red";
    s1.style.color = "white";
});

s1.addEventListener("mouseleave", function() {
    s1.innerHTML = "<h1>1</h1>";
    s1.style.backgroundColor = "white";
    s1.style.color = "black";
});

let clr = "darkorange";
s2.addEventListener("mouseenter", function() {
    
    if (clr == "darkorange") {
        s2.style.backgroundColor = "darkorange";
        clr = "lightseagreen";
        s2.style.color = "black";
    }
    else if (clr == "lightseagreen") {
        s2.style.backgroundColor = "lightseagreen";
        clr = "#0E2A47";
        s2.style.color = "black";
    }
    else {
        s2.style.backgroundColor = "#0E2A47";
        clr = "darkorange";
        s2.style.color = "white";
    }
});

s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "white";
} );

s3.addEventListener("mouseenter", function() {
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
});

s3.addEventListener("mouseleave", function() {
    s3.style.backgroundColor = "white";
});

s4.addEventListener("click", function() {
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1},255,255)`;
    s2.style.backgroundColor = `rgb(255,${r2},255)`;
    s3.style.backgroundColor = `rgb(255,255,${r3})`;
});

s4.addEventListener("mouseleave", function() {
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
});