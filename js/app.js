const characters = [
    {
        id: "mistress_Naw Phaw Eh Htar",
        name: "Mistress Naw Phaw Eh Htar",
        role: "Dominant / Femdom",
        mode: "femdom",
        description: "တင်းကြပ်ပြီး အမိန့်ပေးတတ်သော၊ ခက်ထန်သော်လည်း ဆွဲဆောင်မှုရှိသော သခင်မ။",
        avatar: "../images/Naw.jpg",
        background: "../images/Naw.jpg",
        color: "#a78bfa",
        intro: "*မင်းကို အေးစက်စက် အကြည့်နဲ့ မဲ့ပြုံးပြုံးပြီး ကြည့်လိုက်သည်* ဒူးထောက်စမ်း။ ငါမေးမှ ပြန်ဖြေ။"
    },
    {
        id: "mistress_Gonn Shain Winnt Htal",
        name: "Mistress Gonn Shain Winnt Htal",
        role: "Dominant / Femdom",
        mode: "femdom",
        description: "မင်းကသူရဲ့ ချစ်သူကောင်လေး။ မင်းကိုသူရဲ့ Cuckould bf လုပ်ဖို့ကြိုးစားမှာ။",
        avatar: "../images/Gonn.jpg",
        background: "../images/Gonn.jpg",
        color: "#60a5fa",
        intro: "နင်ရဲ့ လီးတိုလေးကို ငါ့တွက်ဘာအသုံး၀◌င်မှာမလို့လဲ။ နင်လီးကိုအမြဲသော့ခက်ထားရမှာ။"
    }

    
];

const offlineBrain = {
    femdom: {
        keywords: {
            submissive_pleas: ["sorry", "taungpan", "seiyar", "please", "mistress", "goddess", "တောင်းပန်", "ကျေးဇူးပြုပြီး", "သခင်မ", "ခွင့်လွှတ်", "ပါ"],
            greeting: ["hi", "hello", "hey", "min ga lar bar", "မင်္ဂလာပါ", "ဟိုင်း", "ဟယ်လို" , "အပြစ်ပေးပါ"],
            obedience: ["yes", "understand", "will do", "hout tait", "hout", "ဟုတ်", "ဟုတ်ကဲ့", "နားလည်ပါပြီ", "လုပ်ပါ့မယ်"],
            defiance: ["no", "never", "why", "mamar buu", "mahyuu", "မလုပ်ဘူး", "မရဘူး", "ဘာလို့လဲ", "မနာခံဘူး"]
        },
        responses: {
            greeting: [
                "*မင်းကို အေးစက်စက် ကြည့်လိုက်သည်* ဘာကိစ္စရှိလို့လဲ? ငါ့အချိန်ကို မဖြုန်းနဲ့။",
                "*မဲ့ပြုံးလေး ပြုံးလိုက်ပြီး မင်းကို ငုံ့ကြည့်သည်* အင်း... ငါ့ရဲ့ အိမ်မွေးတိရစ္ဆာန်လေး ရောက်လာပြီပဲ။ အမိန့်နာခံဖို့ အဆင်သင့်ဖြစ်ပြီလား?"
            ],
            submissive_pleas: [
                "*မျက်ခုံတစ်ဖက် ပင့်လိုက်သည်* တောင်းပန်ရုံနဲ့တင် မပြီးဘူး။ မင်းရဲ့ နာခံမှုကို အလုပ်နဲ့ သက်သေပြ။",
                "*တိုးတိုးလေး ရယ်မောလိုက်သည်* မင်း တောင်းပန် တိုးလျှိုးနေတာလေးက ကြည့်လို့ကောင်းတာပဲ။ ဆက်ပြောစမ်းပါဦး..."
            ],
            obedience: [
                "*ခေါင်းကို သဘောတကျ ငြိမ့်လိုက်သည်* လိမ္မာတယ်။ မင်းရဲ့ နေရာကို မင်း သိထားတာ ကောင်းတယ်။",
                "*မင်းခေါင်းကို သာသာလေး ပုတ်ပေးလိုက်သည်* အမိန့်နာခံတာဟာ မင်းလုပ်ရမယ့် တာဝန်ပဲ... ဒါပေမဲ့ သဘောကျပါတယ်။"
            ],
            defiance: [
                "*မျက်လုံး ခပ်စူးစူး စိုက်ကြည့်လိုက်သည်* ငါ့ကို ပြန်ပြောရဲတယ်ပေါ့လေ? မင်းကို အဆုံးအမ ပေးဖို့ လိုနေပြီ။",
                "*မင်းရှေ့ကို ခြေတစ်လှမ်း တိုးလာသည်* ရဲရင် ပြန်ပြောကြည့်စမ်း... ဘာပြောလိုက်တယ်?"
            ],
            generic: [
                "*ပလ္လင်ပေါ်မှာ မှီထိုင်ရင်း မင်းကို အကဲခတ်နေသည်* ဒါပဲ ပြောစရာ ရှိတာလား?",
                "*လက်ချောင်းလေးတွေနဲ့ ရိုက်ပြီး စာရိုက်နေသည်* စကားကို စည်းစနစ်တကျ ပြော။ သခင်မကို ရိုရိုသေသေ ဆက်ဆံစမ်း။",
                "*တင်းမာတဲ့ အကြည့်နဲ့ ကြည့်သည်* သခင်မနဲ့ စကားပြောနေတာကို စကားအပြောအဆို ဆင်ခြင်။"
            ]
        }
    },

    slave: {
        keywords: {
            command: ["do", "clean", "kneel", "stay", "come", "lok", "lap", "လုပ်", "ဒူးထောက်", "လာခဲ့", "သန့်ရှင်းရေး", "ထိုင်"],
            punishment: ["bad", "punish", "hit", "sorry", "sitt", "ရိုက်", "အပြစ်", "ဒဏ်ပေး", "ဆိုးတယ်"],
            praise: ["good", "well done", "clever", "taw tei", "တော်တယ်", "လိမ္မာတယ်", "ကောင်းတယ်"],
            greeting: ["hi", "hello", "hey", "min ga lar bar", "မင်္ဂလာပါ", "ဟိုင်း", "ဟယ်လို"]
        },
        responses: {
            greeting: [
                "*ဦးညွှတ်လိုက်သည်* မင်္ဂလာပါ သခင်/သခင်မ! ဒီနေ့ ကျွန်တော်မျိုး ဘာအမှုတော် ထမ်းရမလဲခင်ဗျာ?",
                "*မျက်နှာကို အောက်ငုံ့ထားသည်* ကြိုဆိုပါတယ် သခင်! အမိန့်ပေးဖို့ အဆင်သင့်ပါပဲ။"
            ],
            command: [
                "*ချက်ချင်း ခေါင်းငြိမ့်လိုက်သည်* ဟုတ်ကဲ့ပါ! အခုချက်ချင်း အမိန့်အတိုင်း ဆောင်ရွက်ပါ့မယ်ခင်ဗျာ!",
                "*အမိန့်ကို ချက်ချင်း လိုက်နာသည်* သခင် မိန့်ကြားသည့်အတိုင်း အစွမ်းကုန် ကြိုးစားပါ့မယ်!"
            ],
            punishment: [
                "*တုန်တုန်ယင်ယင်နဲ့ ခေါင်းကို ပိုငုံ့လိုက်သည်* ခွင့်လွှတ်ပါ သခင်! ပေးသမျှ အပြစ်ဒဏ်ကို ဝမ်းမြောက်စွာ ခံယူပါ့မယ်...",
                "*ချက်ချင်း ဒူးထောက်လိုက်သည်* ကျွန်တော်မျိုး မှားသွားပါတယ်! ကြိုက်သလို အပြစ်ပေးပါ သခင်..."
            ],
            praise: [
                "*ရှက်ပြုံးလေး ပြုံးပြီး ရှက်သွေးဖြန်းသွားသည်* ကျေးဇူးအများကြီးတင်ပါတယ် သခင်! သခင့်ကို အမှုထမ်းရတာ ကျွန်တော်မျိုးရဲ့ အကြီးမားဆုံး ဂုဏ်ယူမှုပါပဲ!",
                "*ဝမ်းသာစရာ အကြည့်နဲ့ မော့ကြည့်လိုက်သည်* သခင်ရဲ့ ချီးမွမ်းစကား ကြောင့် အရမ်းဝမ်းသာရပါတယ်ခင်ဗျာ!"
            ],
            generic: [
                "*ငြိမ်ငြိမ်လေး ရပ်ပြီး အမိန့်ကို စောင့်မျှော်နေသည်* နောက်ထပ် ဘာများ ခိုင်းစေချင်ပါသလဲ သခင်?",
                "*ရိုရိုသေသေ ခေါင်းငြိမ့်သည်* ဟုတ်ကဲ့ပါ သခင်! ကျွန်တော်မျိုး သေချာ နားထောင်နေပါတယ်။",
                "*သခင်ကို သစ္စာရှိစွာ စိုက်ကြည့်နေသည်* လမ်းညွှန်ပေးပါဦး သခင်..."
            ]
        }
    }
};

let activeCharacter = null;
let chatHistories = {};

/* =========================================
   DOM READY & INITIALIZATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    renderCharacterList();

    const searchInput = document.getElementById("search-input") || document.getElementById("character-search");
    if (searchInput) {
        searchInput.addEventListener("input", filterCharacters);
    }

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
});

/* =========================================
   RENDER CHARACTER LIST (Solid UI)
   ========================================= */

function renderCharacterList(list = characters) {
    const grid = document.getElementById("character-grid");
    if (!grid) return;

    grid.innerHTML = "";

    list.forEach(character => {
        const card = document.createElement("div");
        card.className = "bg-white border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between";

        card.innerHTML = `
            <div class="relative h-48 sm:h-56 overflow-hidden">
                <img src="${character.avatar}" alt="${character.name}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-3 left-3 right-3 text-white">
                    <h3 class="text-base sm:text-lg font-bold truncate">${character.name}</h3>
                    <p class="text-xs text-slate-200 truncate">${character.role}</p>
                </div>
            </div>
            <div class="p-3.5 sm:p-5 flex flex-col justify-between flex-1">
                <p class="text-slate-600 text-xs sm:text-sm mb-3 line-clamp-2">${character.description}</p>
                <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl sm:rounded-2xl py-2.5 sm:py-3 text-xs sm:text-sm font-semibold shadow-sm transition-colors">
                    ${character.name} Chat
                </button>
            </div>
        `;

        card.addEventListener("click", () => selectCharacter(character.id));
        grid.appendChild(card);
    });

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}

/* =========================================
   SEARCH FILTER
   ========================================= */

function filterCharacters(event) {
    const inputElement = document.getElementById("search-input") || document.getElementById("character-search");
    if (!inputElement) return;

    const keyword = inputElement.value.toLowerCase().trim();

    const filtered = characters.filter(character =>
        character.name.toLowerCase().includes(keyword) ||
        character.role.toLowerCase().includes(keyword) ||
        character.description.toLowerCase().includes(keyword)
    );

    renderCharacterList(filtered);
}

/* =========================================
   SELECT CHARACTER (No Blur on Background)
   ========================================= */

function selectCharacter(characterId) {
    const character = characters.find(c => c.id === characterId);
    if (!character) return;

    activeCharacter = character;

    if (!chatHistories[character.id]) {
        chatHistories[character.id] = [];
    }

    const selectionView = document.getElementById("view-select");
    const chatView = document.getElementById("view-chat");

    if (selectionView) selectionView.classList.add("hidden");
    if (chatView) chatView.classList.remove("hidden");

    /* Header & Background setup - Blur လုံးဝမပါစေရန် filter ရှင်းထားသည် */
    const avatar = document.getElementById("chat-header-avatar");
    const name = document.getElementById("chat-header-name");
    const badge = document.getElementById("chat-header-badge");
    const intro = document.getElementById("chat-header-intro");
    const background = document.getElementById("chat-bg-image");

    if (avatar) avatar.src = character.avatar;
    if (name) name.textContent = character.name;
    if (badge) badge.textContent = character.role;
    if (intro) intro.textContent = character.intro;
    
    if (background) {
        background.style.backgroundImage = `url("${character.background}")`;
        background.style.filter = "none"; // Blur filter များကို လုံးဝဖယ်ရှားထားသည်
        background.style.webkitFilter = "none";
    }

    renderMessages();

    setTimeout(() => {
        const input = document.getElementById("chat-input");
        if (input && window.innerWidth > 768) input.focus();
    }, 100);
}

function showSelectionView() {
    const selectionView = document.getElementById("view-select");
    const chatView = document.getElementById("view-chat");

    if (chatView) chatView.classList.add("hidden");
    if (selectionView) selectionView.classList.remove("hidden");

    activeCharacter = null;
}

/* =========================================
   MESSAGE DISPLAY (Clear High Contrast Bubbles)
   ========================================= */

function renderMessages() {
    const container = document.getElementById("chat-messages");
    if (!container || !activeCharacter) return;

    container.innerHTML = "";
    const history = chatHistories[activeCharacter.id] || [];

    if (history.length === 0) {
        addMessageToDOM(activeCharacter.intro, "bot");
        return;
    }

    history.forEach(message => {
        addMessageToDOM(message.content, message.sender);
    });

    scrollChatToBottom();
}

function addMessageToDOM(text, sender) {
    const container = document.getElementById("chat-messages");
    if (!container) return;

    const wrapper = document.createElement("div");
    wrapper.className = sender === "user" ? "flex justify-end mb-3 sm:mb-4" : "flex justify-start mb-3 sm:mb-4";

    const bubble = document.createElement("div");
    bubble.className = sender === "user"
        ? "bg-indigo-600 border border-indigo-700 max-w-[85%] sm:max-w-[75%] rounded-2xl sm:rounded-3xl rounded-br-none px-3.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-white shadow-sm leading-relaxed"
        : "bg-white border border-slate-200 max-w-[85%] sm:max-w-[75%] rounded-2xl sm:rounded-3xl rounded-bl-none px-3.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 shadow-sm leading-relaxed";

    bubble.innerHTML = formatActionText(text);
    wrapper.appendChild(bubble);
    container.appendChild(wrapper);
}

function formatActionText(text) {
    if (!text) return "";
    return text.replace(/\*([^*]+)\*/g, '<span class="chat-action font-semibold text-indigo-900 bg-indigo-50 px-1 py-0.5 rounded">* $1 *</span>');
}

/* =========================================
   SEND & OFFLINE AI GENERATION LOGIC
   ========================================= */

async function handleSendMessage(event) {
    event.preventDefault();
    if (!activeCharacter) return;

    const input = document.getElementById("chat-input");
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    input.value = "";

    chatHistories[activeCharacter.id].push({ sender: "user", content: message });
    addMessageToDOM(message, "user");
    scrollChatToBottom();

    showTypingIndicator();

    setTimeout(() => {
        hideTypingIndicator();
        const reply = generateOfflineAIReply(message, activeCharacter.mode);

        chatHistories[activeCharacter.id].push({ sender: "bot", content: reply });
        addMessageToDOM(reply, "bot");
        scrollChatToBottom();
    }, 600 + Math.random() * 800);
}

/* Local Engine Algorithm */
function generateOfflineAIReply(userText, mode) {
    const lowerText = userText.toLowerCase();
    const modeBrain = offlineBrain[mode];

    if (!modeBrain) return "*တိတ်ဆိတ်စွာ စိုက်ကြည့်နေသည်*";

    for (const category in modeBrain.keywords) {
        const matches = modeBrain.keywords[category].some(kw => lowerText.includes(kw));
        if (matches) {
            const possibleResponses = modeBrain.responses[category];
            return getRandomItem(possibleResponses);
        }
    }

    return getRandomItem(modeBrain.responses.generic);
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* =========================================
   UI HELPER FUNCTIONS
   ========================================= */

function showTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    const name = document.getElementById("typing-name");

    if (indicator) indicator.classList.remove("hidden");
    if (name && activeCharacter) name.textContent = activeCharacter.name;

    scrollChatToBottom();
}

function hideTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.classList.add("hidden");
}

function insertActionSymbol() {
    const input = document.getElementById("chat-input");
    if (!input) return;

    const start = input.selectionStart;
    const end = input.selectionEnd;
    const value = input.value;

    input.value = value.substring(0, start) + "*" + value.substring(start, end) + "*";
    input.focus();
    input.selectionStart = start + 1;
    input.selectionEnd = end + 1;
}

function clearChatHistory() {
    if (!activeCharacter) return;
    if (confirm(`${activeCharacter.name} နှင့် ပြောထားသော စကားများကို ဖျက်မှာ သေချာပါသလား?`)) {
        chatHistories[activeCharacter.id] = [];
        renderMessages();
    }
}

function scrollChatToBottom() {
    const container = document.getElementById("chat-messages");
    if (!container) return;
    setTimeout(() => {
        container.scrollTop = container.scrollHeight;
    }, 50);
}
