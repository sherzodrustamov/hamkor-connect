// Tilni almashtirish
function setLang(lang) {
    document.querySelectorAll("[data-uz]").forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
    });
}

// Hamburger menyu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Telegram Bot integratsiyasi
const TOKEN = "8231671168:AAEHx8STSi5s-eAJPgmlMEPPRcnyl9LlXVI"; // Bot token
const CHAT_ID = "-1002986448231"; // Group ID
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async e => {
    e.preventDefault();
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const text = `📩 Yangi murojaat:\n👤 Ism: ${name}\n📱 Telefon: ${phone}\n💬 Xabar: ${message}`;

    try {
        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, text: text })
        });
        statusEl.textContent = "✅ Xabar yuborildi!";
        form.reset();
    } catch (err) {
        statusEl.textContent = "❌ Xato yuz berdi!";
    }
});

// Typewriter animatsiyasi
// Typewriter animatsiyasi
function typeWriterEffect(elementId, speed = 50) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.textContent.trim();
    el.textContent = "";
    el.classList.add("typewriter");

    let i = 0;
    function typing() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            el.classList.remove("typewriter");
        }
    }
    typing();
}

window.addEventListener("load", () => {
    typeWriterEffect("hero-title", 60);
});
