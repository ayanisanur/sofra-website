const loadComponent = async (id, file) => {
  try {
    const el = document.getElementById(id);
    if (!el) return;

    const res = await fetch(file);

    if (!res.ok) throw new Error("Component yüklenemedi");

    el.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
};

const initComponents = () => {
  ["header", "footer", "subscribe"].forEach((name) => {
    loadComponent(name, `/components/${name}.html`);
  });
};

const recipes = [
  {
    author: { name: "Yeşim Seferoğlu", image: "/images/recipeAuthor.png" },
    date: "05 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "kolay",
    time: "15 dakika",
    title: "Lor Peynirli İncirli Tart",
    description: "Lor peyniri ve incir ile süslenmesiyle hazırlanan bu tarif...",
    rating: 4.24,
    ratingCount: 186,
  },
  {
    author: { name: "Ahmet Yılmaz", image: "/images/recipeAuthor.png" },
    date: "10 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "orta",
    time: "30 dakika",
    title: "Çikolatalı Sufle",
    description: "Akışkan çikolatasıyla efsane bir tatlı...",
    rating: 4.8,
    ratingCount: 320,
  },
  {
    author: { name: "Elif Kaya", image: "/images/recipeAuthor.png" },
    date: "12 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "kolay",
    time: "20 dakika",
    title: "Avokadolu Tost",
    description: "Sağlıklı ve pratik bir kahvaltı alternatifi...",
    rating: 4.1,
    ratingCount: 98,
  },
  {
    author: { name: "Mehmet Demir", image: "/images/recipeAuthor.png" },
    date: "15 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "zor",
    time: "60 dakika",
    title: "Ev Yapımı Mantı",
    description: "El açması hamurla hazırlanan geleneksel lezzet...",
    rating: 4.95,
    ratingCount: 540,
  },
  {
    author: { name: "Zeynep Aydın", image: "/images/recipeAuthor.png" },
    date: "18 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "orta",
    time: "40 dakika",
    title: "Sebzeli Kiş",
    description: "Fırında nefis sebzelerle hazırlanan hafif bir tarif...",
    rating: 4.3,
    ratingCount: 210,
  },
  {
    author: { name: "Can Özkan", image: "/images/recipeAuthor.png" },
    date: "20 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "kolay",
    time: "10 dakika",
    title: "Muzlu Smoothie",
    description: "Enerji veren hızlı bir içecek alternatifi...",
    rating: 4.0,
    ratingCount: 75,
  },
  {
    author: { name: "Ayşe Çelik", image: "/images/recipeAuthor.png" },
    date: "22 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "orta",
    time: "25 dakika",
    title: "Tavuklu Salata",
    description: "Protein dolu sağlıklı bir öğün...",
    rating: 4.45,
    ratingCount: 190,
  },
  {
    author: { name: "Burak Şahin", image: "/images/recipeAuthor.png" },
    date: "25 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "kolay",
    time: "12 dakika",
    title: "Peynirli Omlet",
    description: "Kahvaltıların vazgeçilmez hızlı tarifi...",
    rating: 4.15,
    ratingCount: 130,
  },
];

const stories = [
  {
    author: { name: "Yeşim Seferoğlu", image: "/images/recipeAuthor.png" },
    image: "/images/story1.png",
    title: "Ekmeği ve Köfte Tarifiyle Ev Yapımı Gurme Burger",
  },
  {
    author: { name: "Ahmet Yılmaz", image: "/images/recipeAuthor.png" },
    image: "/images/story1.png",
    title: "5 Dakikada Hazır Sağlıklı Kahvaltı Önerileri",
  },
  {
    author: { name: "Elif Kaya", image: "/images/recipeAuthor.png" },
    image: "/images/story2.png",
    title: "Yaz İçin Ferahlatıcı Smoothie Tarifleri",
  },
  {
    author: { name: "Mehmet Demir", image: "/images/recipeAuthor.png" },
    image: "/images/story2.png",
    title: "Evde Kolay Pizza Yapımı (Fırınsız!)",
  },
];

const renderRecipes = () => {
  const grid = document.getElementById("recipesGrid");
  const template = document.getElementById("recipeCardTemp");

  if (!grid || !template) return;

  recipes.forEach((recipe) => {
    const card = template.cloneNode(true);

    card.removeAttribute("id");

    card.querySelector(".recipeAuthor span").textContent = recipe.author.name;
    card.querySelector(".recipeAuthor img").src = recipe.author.image;

    const dateEl = card.querySelector(".recipeDate span");
    if (dateEl) dateEl.textContent = recipe.date;

    card.querySelector(".recipeImg img").src = recipe.image;
    card.querySelector(".difficultyText").textContent = recipe.difficulty;
    card.querySelector(".timeText").textContent = recipe.time;
    card.querySelector(".sumTitle").textContent = recipe.title;

    const sumParagraph = card.querySelector(".sumParagraph");
    if (sumParagraph) sumParagraph.textContent = recipe.description;

    card.querySelector(".rating").textContent = recipe.rating;
    card.querySelector(".ratingCount").textContent = `(${recipe.ratingCount})`;

    grid.appendChild(card);
  });

  template.remove();
};

const renderStories = () => {
  const storyGrid = document.getElementById("storyGrid");
  const template = document.getElementById("storyTemp");

  if (!storyGrid || !template) return;

  stories.forEach((story) => {
    const card = template.cloneNode(true);

    card.classList.remove("hidden");
    card.removeAttribute("id");

    card.querySelector(".storyAuthor img").src = story.author.image;
    card.querySelector(".storyAuthor span").textContent = story.author.name;
    card.querySelector(".storyTitle a").textContent = story.title;
    card.querySelector(".storyImg").style.backgroundImage = `url(${story.image})`;

    storyGrid.appendChild(card);
  });

  template.remove();
};

const initFilterBtns = () => {
  const filterBtn1 = document.getElementById("filterBtn1");
  const filterBtn2 = document.getElementById("filterBtn2");
  const recipesGrid = document.getElementById("recipesGrid");

  if (!filterBtn1 || !filterBtn2 || !recipesGrid) return;

  const setActive = (activeBtn, inactiveBtn) => {
    if (!activeBtn.querySelector(".arrow-icon")) {
      const arrow = document.createElement("img");
      arrow.src = "/images/filterArrow.svg";
      arrow.classList.add("arrow-icon");
      activeBtn.appendChild(arrow);
    }

    const oldArrow = inactiveBtn.querySelector(".arrow-icon");
    if (oldArrow) oldArrow.remove();
  };

  setActive(filterBtn1, filterBtn2);

  filterBtn1.addEventListener("click", (e) => {
    e.preventDefault();
    recipesGrid.classList.remove("lg:grid-cols-1");
    recipesGrid.classList.add("lg:grid-cols-2");
    setActive(filterBtn1, filterBtn2);
  });

  filterBtn2.addEventListener("click", (e) => {
    e.preventDefault();
    recipesGrid.classList.remove("lg:grid-cols-2");
    recipesGrid.classList.add("lg:grid-cols-1");
    setActive(filterBtn2, filterBtn1);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initComponents();
  renderRecipes();
  renderStories();
  initFilterBtns();
});