document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "Sigue intentándolo, pero acabate este cubata, que esta noche se termina en la cabalgata de los niños ",
        "Venga que si pidele a otro un chupito",
        "No has tenido suerte, pero a ver si te encuentras a Pepe Quiñones diciendo Tonto",
        "Si vomitas no es perder, es hacer hueco es para mas cubatas.",
        "Si vomitas mañanaa, echale la culpa al kebab de la recena",
        "Una cosa Feria o Romeria ? Yo no me acuerdo de ninguna de las dos",
        "Si te han puesto los cuernos bebe, si no bebe tb",
        "Ami nunca me han metido en la friendzone, si no has bebido eres un fantasma",
        "Te invito al chupito si le chupas el cuello a Moisex",
        "Yo no te invito al chupito, pero el pagafantas de Julio seguro que si",
        "Preguntale al Trompetas, a ver si te invita",
        "Perreale un poco a Moisex y me lo pienso",
        "Venga si ganas una pelea de perreos con Moisex, alomejor te invito",
        "Si Gritas, JOSE LUIS CORNUDO DE MIERDA, alomejor Burillo te invita",
        "Si le perreas a Burillo, el hijo de Paco, te invitamos",
        "Venga metete un Hidalgo, que todavia no estas haciendo mucho el gilipollas",
        "No has tenido suerte, pero ya sabes el que tiene mala suerte en el juego, tiene suerte en el amor. Mira a Chicho, ni una ni otra",
        "El que madruga, Dios lo ayuda, pues que mañana Dios ayude a tus padres",
        "Lo único que te va a tocar, va a ser el urólogo las pelotas, más Tinder y menos rascas"
    ];
    
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById("random-phrase").textContent = phrases[randomIndex];
});
