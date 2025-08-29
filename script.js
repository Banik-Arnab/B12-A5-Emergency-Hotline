
const heartCountEl = document.querySelector("header button:nth-child(1) div");
const coinCountEl = document.querySelector("header button:nth-child(2) div");

let hearts = heartCountEl ? parseInt(heartCountEl.textContent.trim()) || 0 : 0;
let coins = coinCountEl ? parseInt(coinCountEl.textContent.trim()) || 0 : 0;


const callHistoryContainer = document.querySelector(".sidebar .flex.flex-col.gap-4");
const clearHistoryBtn = document.querySelector(".sidebar button");


function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour12: true });
}


const callButtons = document.querySelectorAll(".card button.bg-green-600");

callButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (coins < 20) {
            alert("❌ Not enough coins to make a call. You need 20 coins!");
            return;
        }

        coins -= 20;
        if (coinCountEl) coinCountEl.textContent = coins;

        const card = button.closest(".card");
        const number = card.querySelector(".data-value")?.textContent.trim() || "Unknown";
        const title = card.querySelector(".text-lg")?.textContent.trim() || "Unknown Service";

        alert(`📞 Calling ${title} ${number}...`);

        if (callHistoryContainer) {
            const entry = document.createElement("div");
            entry.className = "flex justify-between items-center p-3 bg-gray-100 w-full rounded-lg";
            entry.innerHTML = `
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900">${title}</span>
          <span class="text-xs text-gray-500">${number}</span>
        </div>
        <span class="text-xs text-gray-900">${getCurrentTime()}</span>
      `;
            callHistoryContainer.prepend(entry);
        }
    });
});


const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const value = button.closest('.card')?.querySelector('.data-value')?.textContent.trim();
        if (!value) return;

        try {
            await navigator.clipboard.writeText(value);
            alert(`✅ Value "${value}" has been copied!`);
        } catch (err) {
            alert("❌ Failed to copy to clipboard.");
        }

        const counter = document.querySelector('.copyCount');
        if (counter) {
            const current = parseInt(counter.textContent.trim()) || 0;
            counter.textContent = current + 1;
        }
    });
});


const heartIcons = document.querySelectorAll(".card span.cursor-pointer");

heartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const isLiked = icon.textContent.trim() === "♡";
        icon.textContent = isLiked ? "♥" : "♡";
        hearts += isLiked ? 1 : -1;
        if (heartCountEl) heartCountEl.textContent = hearts;
    });
});


if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
        if (callHistoryContainer) callHistoryContainer.innerHTML = "";
    });
}