function h({target:d=".splt",reveal:a=!1}){let c=[];const t=document.querySelectorAll(d);for(let e=0;e<t.length;e++){t[e].setAttribute("id","i"+[e+1]),c.push(t[e].innerHTML);const o=t[e].innerHTML.split("");for(let r=0;r<o.length;r++){const i=document.createElement("span");if(t[e].appendChild(i),i.setAttribute("id","c"+[r+1]),o[r]==" ")i.classList.add("whtSpc");else{i.classList.add("char");const n=document.querySelectorAll(".char");for(let l=0;l<n.length;l++)n[l].style.display="inline-block",n[l].style.overflow="hidden",n[l].style.verticalAlign="top"}if(a==1){const n=document.createElement("span");n.innerHTML=o[r],i.appendChild(n),n.setAttribute("id","r"),n.classList.add("reveal");const l=document.querySelectorAll(".reveal");for(let s=0;s<l.length;s++)l[s].style.display="inherit",l[s].style.overflow="inherit",l[s].style.verticalAlign="inherit"}else i.innerHTML=o[r]}t[e].removeChild(t[e].childNodes[0])}h.revert=()=>{for(let e=0;e<t.length;e++)t[e].removeAttribute("id"),t[e].innerHTML=c[e]}}export{h as s};
