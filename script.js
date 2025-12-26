document.addEventListener("DOMContentLoaded", () => {
  const typedTextSpan2 = document.getElementById("typed-text2");
  //   #region bienvenue

  // --- CONFIGURATION BIENVENUE (Automatique) ---
  let phraseIndexSeq = 0;
  let charIndexSeq = 0;
  const phrases0 = [
    "Bienvenue sur ton site mon amour de ma vie !",
    "Je  développe mon amour et notre bonheur .",
    "J'adore t'aimer et encore plus te le montrer",
    "fais ton choix !",
    " ",
    "On commence ?",
  ];
  const typingSpeed0 = 50;

  function typeSequentially() {
    ecritxt();
    if (phraseIndexSeq < phrases0.length) {
      const currentPhrase = phrases0[phraseIndexSeq];
      if (charIndexSeq < currentPhrase.length) {
        typedTextSpan2.innerHTML += currentPhrase.charAt(charIndexSeq);
        charIndexSeq++;
        setTimeout(typeSequentially, typingSpeed0);
      } else {
        typedTextSpan2.innerHTML += "<br>";
        phraseIndexSeq++;
        charIndexSeq = 0;
        setTimeout(typeSequentially, 500);
      }
    } else {
      // Optionnel : Effacer tout après un délai
      setTimeout(eraseSequentially, 2000);
    }
  }

  function eraseSequentially() {
    let currentHTML = typedTextSpan2.innerHTML;
    if (currentHTML.length > 0) {
      if (currentHTML.endsWith("<br>")) {
        typedTextSpan2.innerHTML = currentHTML.slice(0, -4);
      } else {
        typedTextSpan2.innerHTML = currentHTML.slice(0, -1);
      }
      setTimeout(eraseSequentially, 10);
    }
  }

  typeSequentially(); // Lancement auto du message de bienvenue
  //   #endregion bienvenue

  // typePoeme(poeme0);
});
