export function render(e,t){for(let n in t)e=e.replace(new RegExp(`{{\\s*${n}\\s*}}`,"gm"),t[n]);if(e.match(/{{\s*[^}]\s*}}/))return null;let n=document.createElement("div");return n.innerHTML=e,n.firstChild}const main=async()=>{let e=document.getElementById("cats"),t=await(await fetch("./templates/catCard.html")).text();for(let n=0;n<12;n++)e.appendChild(render(t,{filename:`cat${n}`,name:`Cat ${n+1}`}))};window.addEventListener("load",main),console.log("hello world!");