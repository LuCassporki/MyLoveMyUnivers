// Variables pour le texte de bienvenue (Sequentially)
let phraseIndexSeq = 0;
let charIndexSeq = 0;

// Variables pour le poème (Type/Erase)

const typedTextSpan = document.getElementById("typed-text");
const stopButton = document.getElementById("stopButton");
const playButton = document.getElementById("playButton");

//   #region poeme
// --- CONFIGURATION POÈME (Bouton) ---
let ecriture = false; // true = écrire , false = effacer
const typingSpeed = 75;
const erasingSpeed = 20; // Un peu plus lent pour voir l'effet
const nextPhraseDelay = 2000;

// Ton tableau poeme0 ici... (gardé tel quel)
//#region poeme zone
const poeme0 = [
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
const poeme1 = [
  "J’ai voulu être, ce que pour toi je ne suis peut-être",

  "J’ai voulu faire de ce rêve une voix dans mes songes",

  "Mais cet amour aujourd’hui petit à petit me ronge",

  "Je voudrai te faire savoir, te faire être sans actions concrètes",

  "Je voulais que tu sois mon soleil dans mon univers si sombre",

  "Mais ce rôle me revient et pour cette amour tu n’es qu’ombre",

  "Quand le soleil brille tu profite de sa douce chaleur",

  "Quand il se couche, tu vas dormir et ceux de bonne heure",

  "C’est dans la nuit que la lune devrait briller et me guider",

  "Mais sans soleil aucun reflet de nuit et trop peu de jour",

  "Comment faire fondre ma glace sans lumière ni détour",

  "le temps et l’amour réciproque viennent a manquer",

  "espère soins et continuer le combat de plus belle",

  "à chaque combat, chaque bataille, chaque duel",

  "mais tombe la nuit et le docteur est endormie",

  "compter que sur moi pour le garder en vie",

  "ce cœur meurt, triomphant de la haine",

  "jusqu’à ce que se brise ses chaines",

  "succombe des coups de sa reine",

  "libère de sa cage ses peines",

  "la douleur brise sa cage",

  "il ne reste que la rage",

  "tourne la page",

  "réécris ton livre au lieu de raturer le mien",

  "pour que la couverture soit notre",
  "que notre histoire ne fasse qu’un",
];
const poeme2 = [
  "Ce jour et pour toujours",

  "Aujourd’hui je dirais que je te déteste",
  "et demain je voudrai te dire que je t'adore",
  "car je t'ai dit hier que je t'aimais",

  "aujourd'hui tu es loin de moi vers l'Est",
  "et demain tu seras la contre moi quand je dors",
  "car j'ai tous fait hier pour qu'à moi tu sois à jamais",

  "je ne suis qu'un être vide et sans amour",
  "t'as ce qu'il me faut pour qu’après toi je cours",
  "aimes moi chaque seconde de ma vie",
  "plus que moi pour que l'on soit uni",
  "que rien ne nous sépare",
  "tous de toi sans hasard",

  "je te dédis ces lettres et ces mots",
  "qu'avec le temps ils soient les plus beaux",
  "dans ton cœur ils soient gravé",
  "que rien ne puissent les effacer",
  "je veux que tu puisses les lires",
  "dans tes yeux des larmes sans souffrir",
  "je veux que tu puisses les entendre",
  "qu'a ouïr ce refrain ton corps trembles",

  "je veux que tu puisse les voir",
  "qu'à tes yeux ce soit de l'art",
  "je veux que chaque jours tu les sentes",
  "que chaque nuit mes baisées te hante",
  "je veux que tu puisses les gouters",
  "devenir ton péché et repas préféré",

  "tu seras ma femme enfaite",
  "car je t'ai chaque seconde en tête",
  "tu seras ma source de tendresse",
  "car tu es déjà mon adoré déesse",
  "tu seras mon bonheur quand tu ris",
  "car tu es ma meilleur amie",
  "tu seras mon expérience préféré",
  "car pas un jour sans te désirer",
  "tu seras mon temple de l'amour",
  "car sans le faire ne passera pas un jour",
  "tu sera la mère et la pierre angulaire de ma famille",
  "car tu seras la préféré de mon garçon et ma fille",
  "tu ne seras mon début mais ma fin",
  "car tu es ma vie, mon but, mon dessein",

  "je sais de source certaine que tu aimes être le parcours de mes désirs",
  "et j'adore vagabonder sur tes formes que de mes plaisir tu puisses jouir",
  "si tu veux bien marché dans mes pas mes rêves et mes envies",
  "quand je te découvre de plaisir, te parcours de désir si ça te dit",
  "tu ne peux imaginer le plaisir que c'est, passion divine",
  "je t'emmènes sur ce parcours de mon amour sans limite",

  "quand mes yeux plongent dans les tiens",
  "mes mains vers toi sont comme attirées",
  "j’ai envie de caresser ton visage et ta nuque",
  "une main sur tes hanches pour te coller aux miennes",
  "mes lèvres allant dévorer les tiennes",
  "mes mains découvrant ton corps, le libérant",
  "que tu sois sans aucune barrière à mon amour",
  "préparant à déguster de mon corps le tien",
  "le plus beau des paysages comme une promesse",
  "les courbes de ton dos et celles de tes fesses",
  "pour parcourir les plus beaux des paysages",
  "remplis de passion, d'amour près pour massage",
  "tes yeux se ferme ton corps se détend, j'ai compris le message",
  "que tu aimes sentir mes mains sur ton corps leur passages",
  "faire glisser mes mains sur ton corps",
  "ta nuque, tes épaules, ton dos et ton bassin",
  "pour détendre ton corps et te faire sentir bien",
  "masser tes muscles, ta peau et tes formes",
  "avec hâte et désir descendre sur ton corps",

  "masser tes pieds, tes jambes et tes cuisses",
  "faire glisser mes doigts sur ta peau",
  "remonter tendrement sur tes cuisses",
  "passer mes doigts de l'intérieurs de tes cuisses à l'extérieur",
  "tout en tournant et remontant doucement",
  "dans ta détente, tu sentes de désir monter entre tes jambes",
  "remontant toujours plus haut vers tes fesses",
  "massant, tournant et écartant tes formes pour détendre ton corps",
  "que tu sentes ton corps se laissant mouvoir par mes mains",
  "se laissant aller à la sensation de mes doigts sur ta peau",
  "sentir tes cuisses tes fesses écarter et se laisser aller",
  "passé mes pouces de l’intérieur a l’extérieur pour détendre en descendant",
  "te laisser sentir mes doigts écarter tes fesses et passer de plus en plus à l’intérieur",
  "massant, tournant et écartant que tu sentes ton corps se laisser aller au plaisir",
  "massant entre tes fesses et enfonçant doucement mes doigts de plus en plus humide",
  "bien mouillé pour enfoncer un doigt de chaque coté",
  "tournant et caressant ton intérieurs par mes doigts et mon amour",
  "levant ton bassin pour enfoncer plus mes doigts et passer sur ton clitoris",
  "que tu sentes se plaisir monté de plus en plus fort",
  "ton désir se remplissant et coulant comme ton corps",
  "levant ton bassin et écartant tes cuisses de plus en plus",
  "élevant doucement mes doigts pour déguster avec passion",
  "laissant parcourir ma langue entre tes cuisses",
  "passant mes lèvres, ma langue sur ton clitoris",
  "léchant entre tes lèvres et tes fesses",
  "te laissant sentir mon amour et mon désir",

  "que tu sentes doucement s’enfoncer ma langue dans ton corps",
  "que tu sentes tes lèvres s’écarter et couler par ma langue",
  "que tu sentes cette chaleur humide entre tes fesses",
  "te laissant le plaisir de tes fesses s’écarter par ma langue",
  "s’enfonçant chaudement et doucement en caressant ton intérieurs",
  "revenant entre tes lèvres et caressant ton clitoris",
  "une fois ce désir trop fort, je te prends dans mes bras",
  "pour te faire un baiser rempli de passion et d'amour",
  "mes mains sur ton visage",
  "laissant tes lèvres descendre dans mon cou",
  "parcourant ma poitrine...mais..",
  "..c'est une autre histoire ça.",
];
const poeme3 = [" "];
const poeme5 = [" "];
const poeme6 = [" "];
const poeme7 = [" "];
const poeme8 = [" "];
const poeme9 = [" "];
const poeme10 = [" "];
const poeme11 = [" "];
const poeme12 = [" "];
const poeme13 = [" "];
const poeme14 = [" "];
const poeme15 = [" "];
const poeme16 = [" "];
const poeme17 = [" "];
const poeme18 = [" "];
const poeme19 = [" "];
const poeme20 = [" "];
const poeme21 = [" "];
const poeme22 = [" "];
const poeme23 = [" "];
const poeme24 = [" "];

//#endregion poeme zone
function ecritxt() {
  ecriture = true;
  if (playButton && stopButton) {
    playButton.style.backgroundColor = "green";
    playButton.style.color = "white";
    stopButton.style.backgroundColor = "rgba(255,0,0,0.3)"; // Rouge transparent
    stopButton.style.color = "black";
  }
}

function stoptxt() {
  ecriture = false;
  if (playButton && stopButton) {
    playButton.style.backgroundColor = "rgba(0,128,0,0.3)"; // Vert transparent
    stopButton.style.backgroundColor = "red";
    stopButton.style.color = "white";
  }
  // Réinitialisation
  typedTextSpan.textContent = "";
  phraseIndexPoeme = 0;
  charIndexPoeme = 0;
}

// #region texte entier
// Variables de contrôle
let phraseIndexPoeme = 0;
let charIndexPoeme = 0;
let isAnimating = false;

// window.typePoemeEntier = function (text) {
window.typePoeme = function (text) {
  if (isAnimating) return; // Empêche les clics multiples

  ecritxt(); // Active tes boutons Play/Stop
  isAnimating = true;

  // On vide la zone de texte au début
  typedTextSpan.innerHTML = "";
  phraseIndexPoeme = 0;
  charIndexPoeme = 0;

  startAddingLines(text);
};

function startAddingLines(text) {
  // Si on a cliqué sur STOP
  if (!ecriture) {
    isAnimating = false;
    return;
  }

  if (phraseIndexPoeme < text.length) {
    const currentPhrase = text[phraseIndexPoeme];

    // Écriture de la phrase caractère par caractère
    if (charIndexPoeme < currentPhrase.length) {
      typedTextSpan.innerHTML += currentPhrase.charAt(charIndexPoeme);
      charIndexPoeme++;
      setTimeout(() => startAddingLines(text), typingSpeed);
    }
    // Une fois la phrase finie
    else {
      typedTextSpan.innerHTML += "<br>"; // On passe à la ligne suivante
      phraseIndexPoeme++;
      charIndexPoeme = 0;
      // Petite pause entre deux lignes pour le réalisme
      setTimeout(() => startAddingLines(text), 500);
    }
  } else {
    // Fin du poème complet
    isAnimating = false;
  }
}
// #endregion texte entier
