function isElementInViewport(e){let t=e.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>0&&t.left<window.innerWidth&&t.right>0}function handleScroll(){let e=document.querySelectorAll(".code-block, .text-container.description, .api-summary");e.forEach(e=>{isElementInViewport(e)?e.classList.add("in-view"):e.classList.remove("in-view")})}document.addEventListener("scroll",handleScroll),document.addEventListener("DOMContentLoaded",handleScroll),document.querySelectorAll(".copy-btn").forEach(e=>{e.addEventListener("click",()=>{let t=e.nextElementSibling,n=document.createRange();n.selectNodeContents(t);let o=window.getSelection();o.removeAllRanges(),o.addRange(n);try{document.execCommand("copy"),e.textContent="Copied",setTimeout(()=>{e.textContent="Copy Code"},1500)}catch(l){console.error("Unable to copy",l)}o.removeAllRanges()})});