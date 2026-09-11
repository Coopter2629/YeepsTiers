import { players as defaultPlayers } from "./Players.js";

const categories = ["Overall", "Shield", "Dagger", "Mace", "Double Bat", "Freeze Glove", "SMP", "Scythe"];
const tierPoints = { "S+": 100, S: 92, "A+": 84, A: 76, "B+": 68, B: 58, C: 45, D: 30, L: -100, "Kai Yeeps": -9999999999999999, "HT1": 100, "LT1": 92, "HT2": 84, "LT2": 76, "HT3": 68, "LT3": 58, "HT4": 45, "LT4": 30, "HT5": 25, "Lt5": 20 };
const tierOrder = { "S+": 18, S: 17, "A+": 16, A: 15, "B+": 14, B: 13, C: 12, D: 11, "HT1": 10, "LT1": 9, "HT2": 8, "LT2": 7, "HT3": 6, "LT3": 5, "HT4": 4, "LT4": 3, "HT5": 2, "LT5": 1, "Lt5": 1 };

// Load custom players if saved in local session, otherwise default
let players = JSON.parse(localStorage.getItem("custom_players")) || defaultPlayers;

let activeCategory = "Overall", searchQuery = "";

const tabs = document.getElementById("tabs");
const content = document.getElementById("content");
const search = document.getElementById("search");

const initials = name => name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
const avatar = player => `<div class="avatar">${player.image ? `<img src="${player.image}" alt="${player.name}">` : initials(player.name)}</div>`;

function calculateScore(player) {
  const ranked = categories.filter(c => c !== "Overall" && player.ranks[c]);
  return ranked.reduce((sum, c) => sum + (tierPoints[player.ranks[c]] || 0), 0);
}

function rankName(score) {
  if (score >= 650) return "Grandmaster";
  if (score >= 600) return "Master";
  if (score >= 550) return "Elite";
  if (score >= 500) return "Diamond";
  if (score >= 450) return "Platinum";
  if (score >= 400) return "Gold";
  if (score >= 350) return "Silver";
  return "Bronze";
}

function visiblePlayers() {
  return players.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
}

function playerByName(name) {
  return players.find(p => p.name === name);
}

function bindOpen() {
  document.querySelectorAll("[data-player]").forEach(node => node.onclick = () => openModal(playerByName(node.dataset.player)));
}

function renderTabs() {
  tabs.innerHTML = categories.map(c => `<button class="tab ${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
  document.querySelectorAll("[data-cat]").forEach(b => b.onclick = () => {
    activeCategory = b.dataset.cat;
    renderTabs();
    renderContent();
  });
}

function renderOverall() {
  const ranked = visiblePlayers().map(p => ({ ...p, score: calculateScore(p) })).sort((a, b) => b.score - a.score);
  if (!ranked.length) {
    content.innerHTML = '<div class="empty-state">No players found.</div>';
    return;
  }
  content.innerHTML = ranked.map((p, i) => `
    <article class="overall-row" data-player="${p.name}">
      <div class="overall-rank ${i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : ""}">#${i + 1}</div>
      ${avatar(p)}
      <div class="player-info">
        <div class="player-name">${p.name}</div>
        <div class="player-rank">${rankName(p.score)}</div>
      </div>
      <div class="score">${p.score}/700</div>
    </article>
  `).join("");
  bindOpen();
}

function renderCategory(category) {
  const list = visiblePlayers().filter(p => p.ranks[category]).sort((a, b) => (tierOrder[b.ranks[category]] || 0) - (tierOrder[a.ranks[category]] || 0));
  if (!list.length) {
    content.innerHTML = `<div class="empty-state">No players ranked in ${category}.</div>`;
    return;
  }
  const tierList = ["S+", "S", "A+", "A", "B+", "B", "C", "D", "L", "HT1", "LT1", "HT2", "LT2", "HT3", "LT3", "HT4", "LT4", "HT5", "LT5"];
  content.innerHTML = tierList.map(t => {
    const group = list.filter(p => p.ranks[category] === t);
    if (!group.length) return "";
    return `
      <section class="tier-block">
        <div class="tier-head"><span class="tier-badge">${t} Tier</span><span class="tier-count">${group.length} player${group.length === 1 ? "" : "s"}</span></div>
        <div class="player-grid">
          ${group.map(p => `<article class="player-chip" data-player="${p.name}">${avatar(p)}<div><div class="player-name">${p.name}</div><div class="player-rank">${calculateScore(p)}/700 overall</div></div></article>`).join("")}
        </div>
      </section>
    `;
  }).join("");
  bindOpen();
}

function renderContent() {
  activeCategory === "Overall" ? renderOverall() : renderCategory(activeCategory);
}

function openModal(player) {
  const score = calculateScore(player);
  document.getElementById("modal-title").textContent = player.name;
  document.getElementById("modal-text").textContent = `${rankName(score)} • ${score}/700 Overall Points`;
  document.getElementById("modal-categories").innerHTML = Object.entries(player.ranks).map(([c, t]) => `<span class="category-chip">${c}: ${t || 'Untested'}</span>`).join("");
  document.getElementById("modal").classList.add("active");
}

/* ADMIN LOGIC */
const adminBtn = document.getElementById("admin-add-btn");
const editModal = document.getElementById("edit-modal");
const editClose = document.getElementById("edit-modal-close");
const saveBtn = document.getElementById("save-player-btn");

// 1. Hide Admin button unless "?admin=true" is in the URL
const urlParams = new URLSearchParams(window.location.search);
const isAdmin = urlParams.get('admin') === 'true';

if (adminBtn) {
  if (!isAdmin) {
    adminBtn.style.display = "none";
  } else {
    adminBtn.onclick = () => {
      document.getElementById("edit-name").value = "";
      document.getElementById("edit-shield").value = "";
      document.getElementById("edit-dagger").value = "";
      document.getElementById("edit-mace").value = "";
      document.getElementById("edit-bat").value = "";
      document.getElementById("edit-glove").value = "";
      document.getElementById("edit-smp").value = "";
      document.getElementById("edit-scythe").value = "";
      editModal.classList.add("active");
    };
  }
}

if (editModal) {
  editClose.onclick = () => editModal.classList.remove("active");

  saveBtn.onclick = () => {
    const name = document.getElementById("edit-name").value.trim();
    if (!name) return alert("Please enter a player name.");

    const updatedPlayer = {
      name: name,
      image: "",
      ranks: {
        "Shield": document.getElementById("edit-shield").value.trim(),
        "Dagger": document.getElementById("edit-dagger").value.trim(),
        "Mace": document.getElementById("edit-mace").value.trim(),
        "Double Bat": document.getElementById("edit-bat").value.trim(),
        "Freeze Glove": document.getElementById("edit-glove").value.trim(),
        "SMP": document.getElementById("edit-smp").value.trim(),
        "Scythe": document.getElementById("edit-scythe").value.trim()
      }
    };

    const index = players.findIndex(p => p.name.toLowerCase() === name.toLowerCase());
    if (index > -1) {
      players[index] = updatedPlayer;
    } else {
      players.push(updatedPlayer);
    }

    localStorage.setItem("custom_players", JSON.stringify(players));
    renderContent();
    editModal.classList.remove("active");

    // Copy formatted JavaScript directly to clipboard to update Players.js
    const jsContent = `export const players = ${JSON.stringify(players, null, 2)};\n`;
    navigator.clipboard.writeText(jsContent).then(() => {
      alert("Player saved! Code for Players.js copied to clipboard. Paste it into your Players.js file to publish changes for everyone.");
    }).catch(() => {
      alert("Player saved locally!");
    });
  };
}

search.oninput = e => {
  searchQuery = e.target.value;
  renderContent();
};

document.getElementById("modal-close").onclick = () => document.getElementById("modal").classList.remove("active");
document.getElementById("modal").onclick = e => {
  if (e.target.id === "modal") e.currentTarget.classList.remove("active");
};

renderTabs();
renderContent();
