const categories=["Overall","LTMs","Vanilla","UHC","Pot","NethOP","SMP","Sword","Axe","Mace"];
const players=[
{name:"Aether",region:"NA",image:"",tiers:{Overall:"S+",Pot:"S+",Sword:"S",UHC:"S",Axe:"A"}},
{name:"Neroli",region:"EU",image:"",tiers:{Overall:"S+",Pot:"S",Sword:"S+",Vanilla:"S",SMP:"A"}},
{name:"Kairo",region:"AS",image:"",tiers:{Overall:"S",NethOP:"S+",Sword:"S",Mace:"A",UHC:"A"}},
{name:"Solace",region:"NA",image:"",tiers:{Overall:"S",Vanilla:"S+",SMP:"S",Axe:"A",Mace:"A"}},
{name:"Vexel",region:"SA",image:"",tiers:{Overall:"A",Pot:"S",UHC:"A",Sword:"A",Axe:"B"}},
{name:"Rin",region:"EU",image:"",tiers:{Overall:"A",Mace:"S",NethOP:"A",Vanilla:"A",SMP:"B"}},
{name:"Fable",region:"OCE",image:"",tiers:{Overall:"A",Sword:"A",Pot:"A",UHC:"B",LTMs:"S"}},
{name:"Morrow",region:"NA",image:"",tiers:{Overall:"B",LTMs:"S",SMP:"A",Vanilla:"B",Axe:"B"}}
];
let active="Overall",searchText="";const tabs=document.getElementById("tabs"),list=document.getElementById("ranking-list"),empty=document.getElementById("empty"),search=document.getElementById("search"),heading=document.getElementById("tier-heading");const classFor=t=>t.toLowerCase().replace("+","-plus");
function drawTabs(){tabs.innerHTML=categories.map(c=>`<button class="tab ${c===active?"active":""}" data-category="${c}">${c}</button>`).join("");document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{active=b.dataset.category;drawTabs();drawList()})}
function drawList(){const order={"S+":5,S:4,A:3,B:2,C:1};const matched=players.filter(p=>p.tiers[active]&&p.name.toLowerCase().includes(searchText.toLowerCase())).sort((a,b)=>order[b.tiers[active]]-order[a.tiers[active]]);heading.textContent=active==="Overall"?"Top categories":`${active} tier`;list.innerHTML=matched.map((p,i)=>{const entries=active==="Overall"?Object.entries(p.tiers).filter(([c])=>c!=="Overall").slice(0,4):[[active,p.tiers[active]]];const avatar=p.image?`<img src="${p.image}" alt="${p.name}">`:p.name.slice(0,2).toUpperCase();return `<article class="player-row"><div class="rank ${i<3?"top-three":""}">#${i+1}</div><div class="player"><div class="avatar">${avatar}</div><div><div class="player-name">${p.name}</div><div class="player-meta">Ranked competitor</div></div></div><div class="region">${p.region}</div><div class="tier-list">${entries.map(([c,t])=>`<span class="tier ${classFor(t)}" title="${c}">${active==="Overall"?`${c} ${t}`:t}</span>`).join("")}</div></article>`}).join("");empty.style.display=matched.length?"none":"block"}
search.addEventListener("input",e=>{searchText=e.target.value;drawList()});drawTabs();drawList();