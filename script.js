const flowerMessages = [
    "Cada día a tu lado es un regalo. 🌟",
    "Tu sonrisa es mi alegría diaria. 😊",
    "Eres mi sol en los días nublados. ☀️",
    "Tu ternura llena mi vida de luz. 🌸",
    "Contigo, cada momento es especial. 💖",
    "Tu amor es mi mayor bendición. 🌈",
    "A tu lado, cada día es una aventura. 🚀",
    "Tu sonrisa ilumina mi día. 😄",
    "Eres mi refugio en los días grises. 🌧️",
    "Cada día contigo es un sueño hecho realidad. 🌹",
    "Tu amor es un tesoro que guardo con cariño. 💕",
    "A tu lado, cada momento es un regalo. 🎁",
    "Tu ternura hace que mi vida sea más hermosa. 🌷",
    "Eres mi felicidad y mi paz. 💖",
    "Contigo, el amor es una maravilla constante. 🌟",
    "Tu sonrisa hace que mi corazón lata más rápido. ❤️",
    "Cada día a tu lado es una bendición. 🙏",
    "Tu amor es la luz que guía mi camino. ✨",
    "Eres mi sol, mi estrella, y mi amor eterno. 💖",
    "Tu amor ilumina mi vida de una manera mágica. 🌈",
    "Cada momento contigo es una bendición. 🙏",
    "Tu ternura y cariño son mi mayor felicidad. 🌺",
    "Eres mi amor eterno y mi paz. 🌟",
    "Tu amor llena mi vida de alegría. 🌟",
    "Contigo, cada día es una nueva oportunidad para amar. 💖",
    "Tu ternura y cariño son mi mayor felicidad. 🌺",
    "Eres mi amor eterno y mi razón de ser. 💖",
    "Tu amor hace que mi vida sea más hermosa. 🌷",
    "Contigo, el amor es una maravilla constante. 🌸",
    "Tu ternura y cariño son mi mayor tesoro. 💎",
    "Eres mi felicidad, mi paz, y mi amor eterno. 💕",
    "Tu amor es un sueño hermoso. 🌹",
    "Cada día a tu lado es una bendición. 🙏",
    "Eres mi amor, mi alegría, y mi paz. 💖",
    "Tu sonrisa hace que mi corazón lata más rápido. ❤️",
    "A tu lado, cada día es una celebración de amor. 🎉",
    "Tu amor es un regalo que valoro cada día. 🎁",
    "Contigo, cada día es un hermoso regalo. 🌟",
    "Tu ternura llena mi vida de amor. 🌸",
    "Eres mi sol, mi estrella, y mi amor eterno. 💖",
    "Tu amor es el mayor tesoro de mi vida. 💎",
    "A tu lado, cada día es una aventura maravillosa. 🌟",
    "Tu ternura hace que cada día sea especial. 🌷",
    "Eres mi felicidad y mi paz. 💖",
    "Cada momento contigo es un regalo. 🎁",
    "Tu amor llena mi vida de alegría y paz. 🌸",
    "A tu lado, cada día es una nueva oportunidad para amar. 🌈",
    "Tu ternura y cariño son mi mayor bendición. 💖",
    "Eres mi amor eterno y mi mayor felicidad. 🌟",
    "Tu sonrisa ilumina cada día. 😊",
    "Cada día a tu lado es un sueño hecho realidad. 🌟",
    "Tu amor es mi mayor bendición. 🌹",
    "Contigo, cada momento es especial. 💖",
    "Tu ternura y cariño hacen que mi vida sea más hermosa. 🌺",
    "Eres mi felicidad, mi paz, y mi amor eterno. 💖",
    "Cada día contigo es una nueva oportunidad para amar. 💕",
    "Tu amor hace que mi vida sea más hermosa. 🌟",
    "Eres mi sol en los días nublados. 🌈",
    "Tu ternura y cariño son mi mayor tesoro. 💎",
    "Cada día a tu lado es un regalo. 🎁",
    "Tu amor llena mi vida de alegría y esperanza. 🌸",
    "Eres mi felicidad y mi paz. 💖",
    "Contigo, cada momento es una bendición. 🌷",
    "Tu amor hace que cada día sea especial. 🌟",
    "Eres mi sol, mi estrella, y mi amor eterno. 💖",
    "Tu ternura y cariño llenan mi vida de amor. 💕",
    "Cada momento contigo es un sueño hecho realidad. 🌈",
    "Tu amor ilumina mi vida de una manera mágica. 🌹",
    "Eres mi mayor tesoro y mi mayor felicidad. 🌟",
    "Tu sonrisa hace que cada día sea especial. 😊",
    "A tu lado, cada día es un hermoso regalo. 💖",
    "Tu amor llena mi vida de alegría y paz. 🌸",
    "Eres mi sol en los días nublados. 🌈",
    "Cada día contigo es un sueño hecho realidad. 🌟",
    "Tu ternura y cariño hacen que mi vida sea más hermosa. 💖",
    "Eres mi amor eterno y mi mayor felicidad. 💕",
    "Cada momento contigo es un regalo especial. 🌷",
    "Tu amor es la luz que guía mi camino. ✨",
    "Eres mi sol, mi estrella, y mi amor eterno. 💖",
    "Tu amor hace que cada día sea un hermoso regalo. 🌟",
    "Cada día contigo es una bendición. 💖",
    "Eres mi mayor tesoro y mi mayor felicidad. 🌺",
    "Tu ternura y cariño llenan mi vida de amor. 💕",
    "A tu lado, cada día es una nueva oportunidad para amar. 🌈",
    "Tu amor hace que mi vida sea más hermosa. 🌟",
    "Eres mi sol en los días nublados. 🌹",
    "Cada día a tu lado es un sueño hecho realidad. 🌟",
    "Tu ternura y cariño hacen que cada día sea especial. 💖",
    "Eres mi amor eterno y mi mayor felicidad. 💕",
    "Cada momento contigo es un regalo especial. 🌷",
    "Tu amor es la luz que guía mi camino. 🌟",
    "Eres mi sol, mi estrella, y mi amor eterno. 💖",
    "Tu amor llena mi vida de alegría y paz. 💕",
    "A tu lado, cada día es una nueva oportunidad para amar. 🌈",
    "Tu ternura y cariño son mi mayor tesoro. 💎",
    "Eres mi felicidad, mi paz, y mi amor eterno. 💖",
    "Cada día contigo es un hermoso regalo. 🌸",
    "Tu amor ilumina mi vida de una manera mágica. 🌟",
    "Eres mi mayor felicidad y mi paz. 💖",
    "Tu ternura y cariño llenan mi vida de amor. 🌷",
    "A tu lado, cada día es una nueva aventura. 🌈",
    "Tu amor hace que mi vida sea más hermosa. 💖",
    "Eres mi sol en los días nublados. 🌟",
    "Cada día contigo es una bendición. 🌸",
    "Tu ternura y cariño son mi mayor tesoro. 💎",
    "Eres mi amor eterno y mi felicidad. 💖",
    "Tu amor llena mi vida de alegría y esperanza. 🌟",
    "A tu lado, cada día es un hermoso regalo. 🌸",
    "Tu ternura y cariño son mi mayor felicidad. 💕",
    "Eres mi amor eterno y mi mayor tesoro. 💎",
    "Tu amor hace que cada día sea especial. 🌟",
    "A tu lado, cada momento es un sueño hecho realidad. 💖",
    "Tu ternura y cariño llenan mi vida de amor. 🌷",
    "Eres mi sol en los días nublados. 🌟",
    "Cada día contigo es una nueva oportunidad para amar. 💕",
    "Tu amor ilumina mi vida de una manera mágica. 🌟",
    "A tu lado, cada día es una nueva aventura. 🌈"
];

document.getElementById('yesButton').addEventListener('click', function() {
    hideQuestion();
    hideButtons();
    showMessageButton();
    showFlowerTopLeft();
    showFlowerTopRight();
    showFlowerBottomLeft();
    showFlowerBottomRight();
});

document.getElementById('noButton').addEventListener('click', function() {
    randomizeNoButtonPosition();
});

document.getElementById('messageButton').addEventListener('click', function() {
    showSpecialMessage();
});

document.getElementById('albumButton').addEventListener('click', function() {
    hideSpecialMessage();
    showMemories();
    hideMessageButton();
    showBackButton();
});

document.getElementById('prevMemoriesButton').addEventListener('click', function() {
    showPreviousMemory();
});

document.getElementById('nextMemoriesButton').addEventListener('click', function() {
    showNextMemory();
});

document.getElementById('backButton').addEventListener('click', function() {
    showMessageButton();
    hideMemories();
    hideBackButton();
});

document.getElementById('flower-top-left').addEventListener('click', showFlowerMessage);
document.getElementById('flower-top-right').addEventListener('click', showFlowerMessage);
document.getElementById('flower-bottom-left').addEventListener('click', showFlowerMessage);
document.getElementById('flower-bottom-right').addEventListener('click', showFlowerMessage);

function hideQuestion() {
    document.getElementById('question').classList.add('hidden');
}

function hideButtons() {
    document.querySelector('.buttons').classList.add('hidden');
}

function showMessageButton() {
    document.getElementById('messageButton').classList.remove('hidden');
    document.getElementById('albumButton').classList.remove('hidden');
}

function hideMessageButton() {
    document.getElementById('messageButton').classList.add('hidden');
}

function showMemories() {
    document.getElementById('memories').classList.remove('hidden');
}

function hideMemories() {
    document.getElementById('memories').classList.add('hidden');
}

function showSpecialMessage() {
    document.getElementById('specialMessage').classList.remove('hidden');
    setTimeout(hideSpecialMessage, 5000); // Oculta el mensaje después de 5 segundos
}

function hideSpecialMessage() {
    document.getElementById('specialMessage').classList.add('hidden');
}

function showFlowerTopLeft() {
    document.getElementById('flower-top-left').classList.remove('hidden');
}

function showFlowerTopRight() {
    document.getElementById('flower-top-right').classList.remove('hidden');
}

function showFlowerBottomLeft() {
    document.getElementById('flower-bottom-left').classList.remove('hidden');
}

function showFlowerBottomRight() {
    document.getElementById('flower-bottom-right').classList.remove('hidden');
}

function showFlowerMessage() {
    const randomMessage = flowerMessages[Math.floor(Math.random() * flowerMessages.length)];
    const flowerMessageElement = document.getElementById('flowerMessage');
    flowerMessageElement.textContent = randomMessage;
    flowerMessageElement.classList.remove('hidden');
    setTimeout(() => flowerMessageElement.classList.add('hidden'), 3000); // Oculta el mensaje después de 3 segundos
}

function randomizeNoButtonPosition() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    container.insertBefore(noButton, container.children[Math.floor(Math.random() * container.children.length)]);
}

function showPreviousMemory() {
    const memoriesImage = document.getElementById('memoriesImage');
    let currentIndex = parseInt(memoriesImage.src.match(/(\d+)\.jpg/)[1]);
    let newIndex = (currentIndex - 1) > 0 ? (currentIndex - 1) : 11;
    showMemory(newIndex);
}

function showNextMemory() {
    const memoriesImage = document.getElementById('memoriesImage');
    let currentIndex = parseInt(memoriesImage.src.match(/(\d+)\.jpg/)[1]);
    let newIndex = (currentIndex + 1) <= 11 ? (currentIndex + 1) : 1;
    showMemory(newIndex);
}

function showMemory(index) {
    document.getElementById('memoriesImage').src = `${index}.jpg`;
}
