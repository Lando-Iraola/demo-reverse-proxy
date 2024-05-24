const button = document.querySelector("button");
button.addEventListener("click", guau);

async function guau()
{
    const p = document.createElement("p");
    const guau = await fetch("/api/dogs")
    p.innerText = await guau.text();
    button.after(p)
}