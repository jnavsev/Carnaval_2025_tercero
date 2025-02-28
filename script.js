document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "La vida es un carnaval",
        "Más vale tarde que nunca",
        "No hay mal que por bien no venga",
        "A mal tiempo, buena cara",
        "El que madruga, Dios lo ayuda",
        "Lo único que te va a tocar, va a ser el urólogo las pelotas, más Tinder y menos rascas"
    ];
    
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById("random-phrase").textContent = phrases[randomIndex];
});