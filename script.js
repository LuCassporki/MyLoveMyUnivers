// document.addEventListener('DOMContentLoaded', () => {
//     const typedTextSpan = document.getElementById('typed-text');
//     const cursorSpan = document.querySelector('.cursor'); // Sélectionnez le curseur
//     // const textToType = "Bonjour ! Je suis un effet d'écriture en direct."; // Le texte à afficher
//     const textToType = "Bonjour ! Je suis un effet d'écriture en direct.";
//     const typingSpeed = 100; // Vitesse d'écriture en millisecondes par caractère
//     let charIndex = 0;

//     function typeWriter() {
//         if (charIndex < textToType.length) {
//             typedTextSpan.textContent += textToType.charAt(charIndex);
//             charIndex++;
//             setTimeout(typeWriter, typingSpeed);
//         } else {
//             // Une fois que tout le texte est tapé, on peut faire clignoter le curseur
//             // Ou retirer le conteneur si on veut que le curseur ne s'affiche qu'à la fin
//             // Dans cet exemple, le curseur continue de clignoter.
//         }
//     }

//     // Lance l'effet d'écriture après un petit délai
//     setTimeout(typeWriter, 500);
// });

alert("Pour une meilleure expérience, utilise en mode paysage !");

document.addEventListener("DOMContentLoaded", () => {
  const typedTextSpan = document.getElementById("typed-text");

  // Ton tableau de phrases
  const phrases = [
    "Bienvenue sur ton site mon amour de ma vie !",
    "Je  développe mon amour et notre bonheur .",
    "J'adore t'aimer et encore plus te le montrer",
    "On commence ?",

    "Quoi de plus beau..",

    "..que le temps ? ",
    "Celui passé avec toi !",
    "..que la lune ? ",
    "Dans tes yeux son reflet!",
    "..que les étoiles ? ",
    "Celles que tu as en me regardant!",
    "..que la paix ? ",
    "Être contre toi!",
    "..que la vie ? ",
    "La partager avec toi!",
    "..que l'amour ? ",
    "Celui que tu me donne!",
    "..que manger ? ",
    "Cuisiner pour toi!",
    "..qu' être propre ? ",
    "Laver chaque part de toi!",
    "..que dormir ? ",
    "Te sentir en paix!",
    "..que le plaisir ? ",
    "Celui que tu redemandes!",
    "..que l'espace ? ",
    "Ton corps et tes courbes!",
    "..que tes yeux ? ",
    "me noyer dedans!",
    "..que ta douceur ? ",
    "Te toucher et la ressentir!",
    "..que ton odeur ?",
    "te sentir, t'humer et t'aimer!",
    "..que ton visage ? ",
    "l'admirer , l'adorer , le baiser!",
    "..que ton corps ? ",
    "l'aimer et le chérir!",
    "..que ton amour ?",
    "Rien..! ",
  ];

  const typingSpeed = 75; // Vitesse d'écriture
  const erasingSpeed = 5; // Vitesse d'effacement
  const nextPhraseDelay = 2000; // Temps d'attente avant de passer à la phrase suivante

  let phraseIndex = 0; // Index de la phrase actuelle dans le tableau
  let charIndex = 0; // Index du caractère actuel dans la phrase

  function type() {
    // Si on n'a pas fini d'écrire la phrase
    if (charIndex < phrases[phraseIndex].length) {
      typedTextSpan.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    }
    // Si la phrase est finie, on attend un peu avant d'effacer
    else {
      setTimeout(erase, nextPhraseDelay);
    }
  }

  function erase() {
    // Si on n'a pas fini d'effacer la phrase
    if (charIndex > 0) {
      typedTextSpan.textContent = phrases[phraseIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingSpeed);
    }
    // Si tout est effacé, on passe à la phrase suivante
    else {
      phraseIndex++;
      // Si on arrive à la fin du tableau, on recommence au début (boucle infinie)
      if (phraseIndex >= phrases.length) phraseIndex = 0;
      setTimeout(type, typingSpeed + 1100);
    }
  }

  // Lancement initial
  type();
});
