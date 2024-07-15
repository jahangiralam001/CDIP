const link = document.querySelector("a");

link.textContent = "Code change";
link.href = "www.google.com";

// const para = document.getElementById("name");
// para.textContent = "Hola";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "Name : Chota Don";

sect.appendChild(para);

const text = document.createTextNode(
    " (Don ko pakarna muskil hi nehi,mamunkin hey)"
);

const linkpara = document.querySelector("p");
para.appendChild(text);

para.style.color = "red";

