/* ===== Pause and Planet – shared script ===== */

const PAGES = [
  { file: "index.html", label: "Home", key: "home" },
  { file: "invertebrates.html", label: "Invertebrates", key: "invertebrates" },
  { file: "terrestrial.html", label: "Terrestrial", key: "terrestrial" },
  { file: "water.html", label: "Water Animals", key: "water" },
  { file: "amphibians.html", label: "Amphibians", key: "amphibians" },
  { file: "mammals.html", label: "Mammals", key: "mammals" },
  { file: "reptiles.html", label: "Reptiles", key: "reptiles" },
  { file: "aerial.html", label: "Aerial", key: "aerial" },
];

const CATEGORIES = {
  invertebrates: {
    emoji: "🐛",
    title: "Invertebrates",
    intro: "Animals without a backbone, making up over 95% of all animal species on Earth.",
    animals: [
      { name: "Octopus", emoji: "🐙", tag: "Mollusc", habitat: "Oceans", diet: "Crabs, shrimp, fish", fact: "An octopus has three hearts and blue blood." },
      { name: "Butterfly", emoji: "🦋", tag: "Insect", habitat: "Gardens, forests", diet: "Nectar", fact: "Butterflies taste with their feet." },
      { name: "Honey Bee", emoji: "🐝", tag: "Insect", habitat: "Hives, meadows", diet: "Nectar, pollen", fact: "A single bee makes only about 1/12 teaspoon of honey in its life." },
      { name: "Snail", emoji: "🐌", tag: "Mollusc", habitat: "Gardens, damp places", diet: "Plants, algae", fact: "Some snails can sleep for up to three years." },
      { name: "Scorpion", emoji: "🦂", tag: "Arachnid", habitat: "Deserts, grasslands", diet: "Insects, spiders", fact: "Scorpions glow under ultraviolet light." },
      { name: "Jellyfish", emoji: "🪼", tag: "Cnidarian", habitat: "Oceans", diet: "Plankton, small fish", fact: "Jellyfish have no brain, heart, or bones." },
    ],
  },
  terrestrial: {
    emoji: "🌳",
    title: "Terrestrial Animals",
    intro: "Animals that live mainly on land, from dense forests to open grasslands and deserts.",
    animals: [
      { name: "Elephant", emoji: "🐘", tag: "Savanna & Forest", habitat: "Africa, Asia", diet: "Herbivore", fact: "Elephants are the largest land animals on Earth." },
      { name: "Tiger", emoji: "🐅", tag: "Big Cat", habitat: "Forests, grasslands", diet: "Carnivore", fact: "No two tigers have the same stripe pattern." },
      { name: "Camel", emoji: "🐪", tag: "Desert", habitat: "Deserts", diet: "Herbivore", fact: "A camel's hump stores fat, not water." },
      { name: "Giraffe", emoji: "🦒", tag: "Savanna", habitat: "African savanna", diet: "Herbivore", fact: "A giraffe's tongue can be about 45 cm long." },
      { name: "Rhinoceros", emoji: "🦏", tag: "Savanna", habitat: "Africa, Asia", diet: "Herbivore", fact: "A rhino's horn is made of keratin, like our nails." },
      { name: "Red Fox", emoji: "🦊", tag: "Forest", habitat: "Woods, fields", diet: "Omnivore", fact: "Foxes use Earth's magnetic field to hunt." },
    ],
  },
  water: {
    emoji: "🌊",
    title: "Water Animals",
    intro: "Creatures that spend their lives in oceans, rivers, and lakes.",
    animals: [
      { name: "Blue Whale", emoji: "🐋", tag: "Marine Mammal", habitat: "All oceans", diet: "Krill", fact: "The blue whale is the largest animal ever known to exist." },
      { name: "Dolphin", emoji: "🐬", tag: "Marine Mammal", habitat: "Oceans, rivers", diet: "Fish, squid", fact: "Dolphins call each other by unique signature whistles." },
      { name: "Shark", emoji: "🦈", tag: "Fish", habitat: "Oceans", diet: "Carnivore", fact: "Sharks have existed for over 400 million years." },
      { name: "Clownfish", emoji: "🐠", tag: "Reef Fish", habitat: "Coral reefs", diet: "Algae, plankton", fact: "Clownfish live safely among sea anemone tentacles." },
      { name: "Sea Turtle", emoji: "🐢", tag: "Marine Reptile", habitat: "Warm oceans", diet: "Jellyfish, seagrass", fact: "Turtles return to the beach where they were born to nest." },
      { name: "Seahorse", emoji: "🐟", tag: "Fish", habitat: "Seagrass, reefs", diet: "Tiny crustaceans", fact: "Male seahorses carry the babies until birth." },
    ],
  },
  amphibians: {
    emoji: "🐸",
    title: "Amphibians",
    intro: "Cold-blooded vertebrates that begin life in water and often live on land as adults.",
    animals: [
      { name: "Common Frog", emoji: "🐸", tag: "Frog", habitat: "Ponds, wet meadows", diet: "Insects, worms", fact: "Frogs absorb water through their skin instead of drinking." },
      { name: "Tree Frog", emoji: "🐸", tag: "Frog", habitat: "Rainforests", diet: "Insects", fact: "Sticky toe pads let tree frogs cling to smooth leaves." },
      { name: "Axolotl", emoji: "🦎", tag: "Salamander", habitat: "Lakes of Mexico", diet: "Worms, small fish", fact: "Axolotls can regrow limbs, and even parts of their heart." },
      { name: "Fire Salamander", emoji: "🦎", tag: "Salamander", habitat: "Damp forests", diet: "Slugs, insects", fact: "Its bright colours warn predators that it is toxic." },
      { name: "Indian Bullfrog", emoji: "🐸", tag: "Frog", habitat: "Wetlands, paddy fields", diet: "Insects, small animals", fact: "Males turn bright yellow during the breeding season." },
      { name: "Caecilian", emoji: "🪱", tag: "Legless Amphibian", habitat: "Moist soil", diet: "Worms, termites", fact: "Caecilians look like worms but are true amphibians." },
    ],
  },
  mammals: {
    emoji: "<img src='lion.jpg' width='70px' height='100px'>  ",
    title: "Mammals",
    intro: "Warm-blooded animals that have hair or fur and feed their young with milk.",
    animals: [
      { name: "Lion", emoji: "<img src='lion.jpg' width='70px' height='100px'>  ", tag: "Big Cat", habitat: "African savanna", diet: "Carnivore", fact: "Lions are the only cats that live in social groups called prides." },
      { name: "chimpanzee", emoji: "<img src='chimpanzee.jpg' width='70px' height='100px'>  ", tag: "Primate", habitat: "African forests", diet: "Omnivore", fact: "Chimpanzees share about 98% of their DNA with humans." },
      { name: "Bat", emoji: "🦇", tag: "Flying Mammal", habitat: "Caves, forests", diet: "Insects, fruit", fact: "Bats are the only mammals capable of true flight." },
      { name: "Polar Bear", emoji: "🐻‍❄️", tag: "Bear", habitat: "Arctic", diet: "Seals", fact: "A polar bear's skin is actually black." },
      { name: "Kangaroo", emoji: "🦘", tag: "Marsupial", habitat: "Australia", diet: "Herbivore", fact: "Kangaroos cannot walk backwards." },
      { name: "Panda", emoji: "🐼", tag: "Bear", habitat: "Bamboo forests of China", diet: "Bamboo", fact: "A panda eats up to 12 kg of bamboo every day." },
    ],
  },
  reptiles: {
    emoji: "🦎",
    title: "Reptiles",
    intro: "Scaly, cold-blooded vertebrates that mostly lay eggs and rely on the sun for warmth.",
    animals: [
      { name: "King Cobra", emoji: "🐍", tag: "Snake", habitat: "Forests of Asia", diet: "Other snakes", fact: "The king cobra is the world's longest venomous snake." },
      { name: "Crocodile", emoji: "🐊", tag: "Crocodilian", habitat: "Rivers, swamps", diet: "Carnivore", fact: "Crocodiles have barely changed in millions of years." },
      { name: "Chameleon", emoji: "🦎", tag: "Lizard", habitat: "Forests, Madagascar", diet: "Insects", fact: "Its eyes can move independently of each other." },
      { name: "Komodo Dragon", emoji: "🦎", tag: "Lizard", habitat: "Indonesian islands", diet: "Carnivore", fact: "It is the largest living lizard on Earth." },
      { name: "Giant Tortoise", emoji: "🐢", tag: "Tortoise", habitat: "Galápagos, Seychelles", diet: "Herbivore", fact: "Some tortoises live for more than 150 years." },
      { name: "Gharial", emoji: "🐊", tag: "Crocodilian", habitat: "Rivers of India", diet: "Fish", fact: "Its long, thin snout is perfect for catching fish." },
    ],
  },
  aerial: {
    emoji: "🦅",
    title: "Aerial Animals",
    intro: "Masters of the sky: birds, insects and mammals that fly.",
    animals: [
      { name: "Eagle", emoji: "🦅", tag: "Bird of Prey", habitat: "Mountains, forests", diet: "Carnivore", fact: "An eagle can spot prey from more than 3 km away." },
      { name: "Owl", emoji: "🦉", tag: "Night Bird", habitat: "Woods, farmland", diet: "Rodents, insects", fact: "Owls can rotate their heads about 270 degrees." },
      { name: "Peacock", emoji: "🦚", tag: "Bird", habitat: "Forests of India", diet: "Omnivore", fact: "The peacock is the national bird of India." },
      { name: "Hummingbird", emoji: "🐦", tag: "Bird", habitat: "The Americas", diet: "Nectar", fact: "It can flap its wings up to 80 times per second." },
      { name: "Dragonfly", emoji: "🪰", tag: "Insect", habitat: "Ponds, rivers", diet: "Mosquitoes, flies", fact: "Dragonflies can fly in any direction, even backwards." },
      { name: "Flamingo", emoji: "🦩", tag: "Wading Bird", habitat: "Lakes, lagoons", diet: "Algae, shrimp", fact: "Flamingos get their pink colour from their food." },
    ],
  },
};

/* ---------- Navbar ---------- */
function renderNavbar(activeKey) {
  const links = PAGES.map(
    (p) => `
      <li class="nav-item">
        <a class="nav-link ${p.key === activeKey ? "active" : ""}" href="${p.file}">${p.label}</a>
      </li>`
  ).join("");

  document.getElementById("navbar").innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top pp-navbar">
      <div class="container">
      <img src="logo.png" width="50px" height="50px" alt="logo">
        <a class="navbar-brand" href="index.html">🌿 Paws <span>&amp;</span> Planet</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-1">${links}</ul>
        </div>
      </div>
    </nav>`;
}

/* ---------- Footer ---------- */
function renderFooter() {
  document.getElementById("footer").innerHTML = `
    <footer class="pp-footer">
      <div class="container">🌍 Paws and Planet · Take a pause, protect the planet · © ${new Date().getFullYear()}</div>
    </footer>`;
}

/* ---------- Animal cards ---------- */
function cardHTML(a, i) {
  return `
    <div class="col-12 col-sm-6 col-lg-4 animal-col">
      <div class="animal-card fade-in" style="animation-delay:${i * 0.06}s">
        <div class="card-top">${a.emoji}</div>
        <div class="card-body p-4">
          <span class="tag">${a.tag}</span>
          <h5 class="card-title">${a.name}</h5>
          <p class="meta mb-1"><strong>Habitat:</strong> ${a.habitat}</p>
          <p class="meta mb-0"><strong>Diet:</strong> ${a.diet}</p>
          <div class="fact-box">💡 ${a.fact}</div>
        </div>
      </div>
    </div>`;
}

function renderCategoryPage(key) {
  const cat = CATEGORIES[key];
  document.title = `${cat.title} | Pause and Planet`;

  document.getElementById("page-header").innerHTML = `
    <div class="container page-header">
      <div class="badge-icon">${cat.emoji}</div>
      <h1>${cat.title}</h1>
      <p>${cat.intro}</p>
      <div class="search-box">
        <input type="search" id="searchInput" class="form-control" placeholder="Search ${cat.title.toLowerCase()}…" aria-label="Search animals">
      </div>
    </div>`;

  const grid = document.getElementById("cards");
  grid.innerHTML = cat.animals.map(cardHTML).join("");

  const noResult = document.getElementById("noResult");
  document.getElementById("searchInput").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    let shown = 0;
    cat.animals.forEach((a, i) => {
      const col = grid.children[i];
      const match = [a.name, a.tag, a.habitat, a.diet].join(" ").toLowerCase().includes(q);
      col.style.display = match ? "" : "none";
      if (match) shown++;
    });
    noResult.classList.toggle("d-none", shown !== 0);
  });
}

/* ---------- Home page category cards ---------- */
function renderHome() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = Object.keys(CATEGORIES)
    .map((key, i) => {
      const c = CATEGORIES[key];
      const page = PAGES.find((p) => p.key === key);
      return `
        <div class="col-6 col-md-4 col-lg-3">
          <a href="${page.file}" class="category-card fade-in" style="animation-delay:${i * 0.07}s">
            <div class="emoji">${c.emoji}</div>
            <h5>${c.title}</h5>
            <p>${c.animals.length} animals to explore</p>
          </a>
        </div>`;
    })
    .join("");
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  renderNavbar(page);
  renderFooter();
  if (page === "home") renderHome();
  else renderCategoryPage(page);
});
