<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Feliz Cumplemes de Novios!</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>¡Feliz Cumplemes de Novios!</h1>
        <p id="question">¿Quieres seguir siendo mi novia?</p>
        <div class="buttons">
            <button id="yesButton">Sí</button>
            <button id="noButton">No</button>
        </div>
        <button id="messageButton" class="hidden">Ver Mensaje Especial</button>
        <button id="albumButton" class="hidden">Ver Álbum de Fotos</button>
        <button id="backButton" class="hidden">Volver</button>
        <div id="memories" class="hidden">
            <div id="memoriesImageContainer">
                <img id="memoriesImage" src="1.jpg" alt="Imagen de Recuerdos">
            </div>
            <div id="memoriesNavigationButtons">
                <button id="prevMemoriesButton">Anterior</button>
                <button id="nextMemoriesButton">Siguiente</button>
            </div>
        </div>
        <div id="specialMessage" class="hidden">
            <p>¡Gracias por estos maravillosos momentos juntos! 💖 Cada día a tu lado es un sueño hecho realidad. Espero con ansias el futuro que construiremos juntos, lleno de amor y alegría. 🌟 Eres mi mayor tesoro y mi felicidad eterna. 💕 ¡Te amo más de lo que las palabras pueden expresar! 🌸✨</p>
        </div>
        <div id="flowerMessage" class="hidden"></div>
        <div class="flower flower-top-left"></div>
        <div class="flower flower-top-right"></div>
        <div class="flower flower-bottom-left"></div>
        <div class="flower flower-bottom-right"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
