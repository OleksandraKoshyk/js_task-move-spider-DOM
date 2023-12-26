document.addEventListener("click",t=>{let e=document.querySelector(".spider"),l=document.querySelector(".wall"),i=document.querySelector(".wall").getBoundingClientRect(),n=i.left+l.clientLeft,c=i.top+l.clientTop,o=t.clientX-e.clientWidth/2-n,d=t.clientY-e.clientHeight/2-c,r=l.clientWidth-e.clientWidth,u=l.clientHeight-e.clientWidth;function a(t,e){return Math.min(Math.max(t,0),e)}t.target.closest(".wall")&&(e.style.left=a(o,r)+"px",e.style.top=a(d,u)+"px")});//# sourceMappingURL=index.39595e51.js.map

//# sourceMappingURL=index.39595e51.js.map
