function isElementInViewport(e){let t=e.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>0&&t.left<window.innerWidth&&t.right>0}function handleScroll(){let e=document.querySelectorAll(".code-block, .text-container.description, .api-summary");e.forEach(e=>{isElementInViewport(e)?e.classList.add("in-view"):e.classList.remove("in-view")})}document.addEventListener("scroll",handleScroll),document.addEventListener("DOMContentLoaded",handleScroll),document.querySelectorAll(".copy-btn").forEach(e=>{e.addEventListener("click",()=>{let t=e.nextElementSibling,n=document.createRange();n.selectNodeContents(t);let a=window.getSelection();a.removeAllRanges(),a.addRange(n);try{document.execCommand("copy"),e.textContent="Copied",setTimeout(()=>{e.textContent="Copy Code"},1500)}catch(l){console.error("Unable to copy",l)}a.removeAllRanges()})});let monthlyData={monthly_data:{}};function updateTable(){let e=document.querySelector("#dataTable tbody");e.innerHTML="",Object.keys(monthlyData.monthly_data).forEach(t=>{let n=monthlyData.monthly_data[t].profit,a=monthlyData.monthly_data[t].sales,l=document.createElement("tr");l.innerHTML=`
            <td>${t}</td>
            <td>${n}</td>
            <td>${a}</td>
            <td>${n*a}</td> <!-- Revenue column -->
        `,e.appendChild(l)})}function displayResult(e,t,n="success"){document.getElementById("resultContainer").innerHTML=`
        <div class="alert alert-${n}" role="alert">
            <h4 class="alert-heading">${e}</h4>
            ${t}
        </div>
    `}document.getElementById("saveButton").addEventListener("click",function(e){let t=document.getElementById("month").value,n=document.getElementById("profit").value,a=document.getElementById("sales").value;t&&n&&a&&(monthlyData.monthly_data[t]={profit:parseFloat(n),sales:parseFloat(a)},updateTable(),document.getElementById("month").value="",document.getElementById("profit").value="",document.getElementById("sales").value="",document.getElementById("calculateButton1").disabled=!1,document.getElementById("calculateButton2").disabled=!1,document.getElementById("calculateButton3").disabled=!1,document.getElementById("calculateButton4").disabled=!1,document.getElementById("calculateButton5").disabled=!1)}),document.getElementById("calculateButton1").addEventListener("click",function(e){let t={monthly_data:monthlyData.monthly_data};fetch("https://api.sunnytseng.com/calculate_max_revenue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{let t="success";e.suggestion.includes("too low")?t="warning":e.suggestion.includes("too high")&&(t="danger"),displayResult("Price Suggestion",`
            <p><strong>Optimal Profit:</strong> ${e.max_profit}</p>
            <p><strong>Optimal Revenue:</strong> ${e.max_revenue}</p>
            <p><strong>Suggestion:</strong> ${e.suggestion}</p>
        `,t)}).catch(e=>{console.error("Error:",e),document.getElementById("resultContainer").innerHTML=`
            <div class="alert alert-danger" role="alert">
                <p>Data parsing failed.</p>
            </div>
        `})}),document.getElementById("calculateButton2").addEventListener("click",function(e){let t=Object.values(monthlyData.monthly_data).map(e=>e.sales);fetch("https://api.sunnytseng.com/CI",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t,CI:95})}).then(e=>e.json()).then(e=>{displayResult("Sales Volume Mean 95% Confidence Interval",`
            <p><strong>Lower Bound:</strong> ${e.lower_bound}</p>
            <p><strong>Upper Bound:</strong> ${e.upper_bound}</p>
        `)}).catch(e=>{console.error("Error:",e),document.getElementById("resultContainer").innerHTML=`
            <div class="alert alert-danger" role="alert">
                <p>Data parsing failed.</p>
            </div>
        `})}),document.getElementById("calculateButton3").addEventListener("click",function(e){let t=Object.values(monthlyData.monthly_data).map(e=>e.sales);fetch("https://api.sunnytseng.com/CI",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t,CI:98})}).then(e=>e.json()).then(e=>{displayResult("Sales Volume Mean 98% Confidence Interval",`
            <p><strong>Lower Bound:</strong> ${e.lower_bound}</p>
            <p><strong>Upper Bound:</strong> ${e.upper_bound}</p>
        `)}).catch(e=>{console.error("Error:",e),document.getElementById("resultContainer").innerHTML=`
            <div class="alert alert-danger" role="alert">
                <p>Data parsing failed.</p>
            </div>
        `})}),document.getElementById("calculateButton4").addEventListener("click",function(e){let t=Object.values(monthlyData.monthly_data).map(e=>e.sales);fetch("https://api.sunnytseng.com/VarCI",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t,CI:95})}).then(e=>e.json()).then(e=>{displayResult("Sales Variance 95% Confidence Interval",`
            <p><strong>Lower Bound:</strong> ${e.lower_bound}</p>
            <p><strong>Upper Bound:</strong> ${e.upper_bound}</p>
        `)}).catch(e=>{console.error("Error:",e),document.getElementById("resultContainer").innerHTML=`
            <div class="alert alert-danger" role="alert">
                <p>Data parsing failed.</p>
            </div>
        `})}),document.getElementById("calculateButton5").addEventListener("click",function(e){let t=Object.values(monthlyData.monthly_data).map(e=>e.profit*e.sales),n={data:t};fetch("https://api.sunnytseng.com/Descriptive",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>{if(!e.ok)throw Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{console.log(e),displayResult("Total Monthly Revenue",`
            <p><strong>Mean:</strong> ${e.mean}</p>
            <p><strong>Variance:</strong> ${e.variance}</p>
            <p><strong>Standard Deviation:</strong> ${e.standard_deviation}</p>
            <p><strong>Sample Variance:</strong> ${e.sample_variance}</p>
            <p><strong>Sample Standard Deviation:</strong> ${e.sample_standard_deviation}</p>
            <p><strong>Median:</strong> ${e.median}</p>
            <p><strong>Mode:</strong> ${e.mode}</p>
        `)}).catch(e=>{console.error("Error:",e),console.log(JSON.stringify(n)),document.getElementById("resultContainer").innerHTML=`
            <div class="alert alert-danger" role="alert">
                <p>Data parsing failed.</p>
            </div>
        `})}),document.getElementById("clearButton").addEventListener("click",function(){monthlyData={monthly_data:{}},document.querySelector("#dataTable tbody").innerHTML="",document.getElementById("resultContainer").innerHTML="",document.getElementById("month").value="",document.getElementById("profit").value="",document.getElementById("sales").value="",document.getElementById("calculateButton1").disabled=!0,document.getElementById("calculateButton2").disabled=!0,document.getElementById("calculateButton3").disabled=!0,document.getElementById("calculateButton4").disabled=!0,document.getElementById("calculateButton5").disabled=!0});