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
  ["header", "footer"].forEach(name => {
    loadComponent(name, `/components/${name}.html`);
  });
};

const stories = [
  {
    author: {
      name: "Yeşim Seferoğlu",
      image: "/images/recipeAuthor.png",
    },
    image: "/images/story1.png",
    title: "Ekmeği ve Köfte Tarifiyle Ev Yapımı Gurme Burger",
    isLiked: false,
    number: "14 B Görüntülenme"
  },
  {
    author: {
      name: "Ahmet Yılmaz",
      image: "/images/recipeAuthor.png"
    },
    image: "/images/story1.png",
    title: "5 Dakikada Hazır Sağlıklı Kahvaltı Önerileri",
    isLiked: true,
    number: "14 B Görüntülenme"
  },
  {
    author: {
      name: "Elif Kaya",
      image: "/images/recipeAuthor.png"
    },
    image: "/images/story2.png",
    title: "Yaz İçin Ferahlatıcı Smoothie Tarifleri",
    isLiked: false,
    number: "14 B Görüntülenme"
  },
  {
    author: {
      name: "Mehmet Demir",
      image: "/images/recipeAuthor.png"
    },
    image: "/images/story2.png",
    title: "Evde Kolay Pizza Yapımı (Fırınsız!)",
    isLiked: true,
    number: "14 B Görüntülenme"
  },
  {
    author: {
      name: "Mehmet Demir",
      image: "/images/recipeAuthor.png"
    },
    image: "/images/story2.png",
    title: "Evde Kolay Pizza Yapımı (Fırınsız!)",
    isLiked: true,
    number: "14 B Görüntülenme"
  },
  {
    author: {
      name: "Mehmet Demir",
      image: "/images/recipeAuthor.png"
    },
    image: "/images/story2.png",
    title: "Evde Kolay Pizza Yapımı (Fırınsız!)",
    isLiked: true,
    number: "14 B Görüntülenme"
  }
];

const recipes = [
  {
    author: {
      name: "Yeşim Seferoğlu",
      image: "/images/recipeAuthor.png"
    },
    date: "05 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "kolay",
    time: "15 dakika",
    title: "Lor Peynirli İncirli Tart",
    description: "Lor peyniri ve incir ile süslenmesiyle hazırlanan bu tarif...",
    rating: 4.24,
    ratingCount: 186,
    isSaved: false,
    isLiked: false
  },
  {
    author: {
      name: "Ahmet Yılmaz",
      image: "/images/recipeAuthor.png"
    },
    date: "10 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "orta",
    time: "30 dakika",
    title: "Çikolatalı Sufle",
    description: "Akışkan çikolatasıyla efsane bir tatlı...",
    rating: 4.80,
    ratingCount: 320,
    isSaved: true,
    isLiked: true
  },
  {
    author: {
      name: "Elif Kaya",
      image: "/images/recipeAuthor.png"
    },
    date: "12 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "kolay",
    time: "20 dakika",
    title: "Avokadolu Tost",
    description: "Sağlıklı ve pratik bir kahvaltı alternatifi...",
    rating: 4.10,
    ratingCount: 98,
    isSaved: false,
    isLiked: true
  },
  {
    author: {
      name: "Mehmet Demir",
      image: "/images/recipeAuthor.png"
    },
    date: "15 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "zor",
    time: "60 dakika",
    title: "Ev Yapımı Mantı",
    description: "El açması hamurla hazırlanan geleneksel lezzet...",
    rating: 4.95,
    ratingCount: 540,
    isSaved: true,
    isLiked: true
  },
  {
    author: {
      name: "Zeynep Aydın",
      image: "/images/recipeAuthor.png"
    },
    date: "18 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "orta",
    time: "40 dakika",
    title: "Sebzeli Kiş",
    description: "Fırında nefis sebzelerle hazırlanan hafif bir tarif...",
    rating: 4.30,
    ratingCount: 210,
    isSaved: false,
    isLiked: false
  },
  {
    author: {
      name: "Can Özkan",
      image: "/images/recipeAuthor.png"
    },
    date: "20 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "kolay",
    time: "10 dakika",
    title: "Muzlu Smoothie",
    description: "Enerji veren hızlı bir içecek alternatifi...",
    rating: 4.00,
    ratingCount: 75,
    isSaved: false,
    isLiked: true
  },
  {
    author: {
      name: "Ayşe Çelik",
      image: "/images/recipeAuthor.png"
    },
    date: "22 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "orta",
    time: "25 dakika",
    title: "Tavuklu Salata",
    description: "Protein dolu sağlıklı bir öğün...",
    rating: 4.45,
    ratingCount: 190,
    isSaved: true,
    isLiked: false
  },
  {
    author: {
      name: "Burak Şahin",
      image: "/images/recipeAuthor.png"
    },
    date: "25 Mayıs 2024",
    image: "/images/recipeImage.png",
    difficulty: "kolay",
    time: "12 dakika",
    title: "Peynirli Omlet",
    description: "Kahvaltıların vazgeçilmez hızlı tarifi...",
    rating: 4.15,
    ratingCount: 130,
    isSaved: false,
    isLiked: true
  }
];

const renderRecipes = () => {
  const grids = document.querySelectorAll(".recipes-grid");

  if (!grids.length) return;

  grids.forEach(grid => {
    const template = grid.querySelector(".recipeCard");
    if (!template) return;

  
    const templateClone = template.cloneNode(true);
    template.remove();

    recipes.forEach(recipe => {
      const card = templateClone.cloneNode(true);
      card.classList.remove("hidden");
      card.removeAttribute("id");

      const authorImg = card.querySelector(".recipeAuthor img");
      const authorSpan = card.querySelector(".recipeAuthor span");
      if (authorImg) authorImg.src = recipe.author.image;
      if (authorSpan) authorSpan.textContent = recipe.author.name;

      const dateEl = card.querySelector(".recipeDate span");
      if (dateEl) dateEl.textContent = recipe.date;

      const recipeImg = card.querySelector(".recipeImg img");
      if (recipeImg) recipeImg.src = recipe.image;

      const difficultyEl = card.querySelector(".difficultyText");
      if (difficultyEl) difficultyEl.textContent = recipe.difficulty;

      const timeEl = card.querySelector(".timeText");
      if (timeEl) timeEl.textContent = recipe.time;

      const titleEl = card.querySelector(".sumTitle");
      if (titleEl) titleEl.textContent = recipe.title;

      const descEl = card.querySelector(".sumParagraph");
      if (descEl) descEl.textContent = recipe.description;

      const ratingEl = card.querySelector(".rating");
      if (ratingEl) ratingEl.textContent = recipe.rating;

      const ratingCountEl = card.querySelector(".ratingCount");
      if (ratingCountEl) ratingCountEl.textContent = `(${recipe.ratingCount})`;

      grid.appendChild(card);
    });
  });
};

const renderStories = () => {

  const storyGrids = document.querySelectorAll(".storyContent");

  if (!storyGrids.length) return;

  storyGrids.forEach(storyGrid => {
    const template = storyGrid.querySelector(".story");
    if (!template) return;

    const templateClone = template.cloneNode(true);
    template.remove();

    stories.forEach(story => {
      const card = templateClone.cloneNode(true);
      card.classList.remove("hidden");
      card.removeAttribute("id");

      card.querySelector(".storyImg").style.backgroundImage = `url(${story.image})`;

      const authorImg = card.querySelector(".storyAuthor img");
      const authorSpan = card.querySelector(".storyAuthor span");
      if (authorImg) authorImg.src = story.author.image;
      if (authorSpan) authorSpan.textContent = story.author.name;

      const titleLink = card.querySelector(".storyTitle a");
      if (titleLink) titleLink.textContent = story.title;

      const shownNum = card.querySelector(".shownNum");
      if (shownNum) shownNum.textContent = story.number;

      storyGrid.appendChild(card);
    });
  });
};

const initFilterBtns = () => {
  const filterBtn1 = document.getElementById("filterBtn1");
  const filterBtn2 = document.getElementById("filterBtn2");
  const recipesGrid = document.getElementById("recipesGrid");

  if (!filterBtn1 || !filterBtn2 || !recipesGrid) return;

  const setActive = (activeBtn, inactiveBtn) => {
    if (!activeBtn.querySelector('.arrow-icon')) {
      const arrow = document.createElement('img');
      arrow.src = '/images/filterArrow.svg';
      arrow.classList.add('arrow-icon');
      activeBtn.appendChild(arrow);
    }
    const oldArrow = inactiveBtn.querySelector('.arrow-icon');
    if (oldArrow) oldArrow.remove();
  };

  setActive(filterBtn1, filterBtn2);

  filterBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    recipesGrid.classList.remove('lg:grid-cols-1');
    recipesGrid.classList.add('lg:grid-cols-2');
    setActive(filterBtn1, filterBtn2);
  });
  filterBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    recipesGrid.classList.remove('lg:grid-cols-2');
    recipesGrid.classList.add('lg:grid-cols-1');
    setActive(filterBtn2, filterBtn1);
  });
};

const heroSlides = [
  {
    tag: "Sofralarınıza lezzet katacak!",
    title: "Dondurmalı Meyveli İrmik Tatlısı",
    image: "/images/slide1.png"
  },
  {
    tag: "Hafta sonu önerisi!",
    title: "Kırmızı Meyve Soslu Pancake",
    image: "/images/hero2.png"
  },
  {
    tag: "Sağlıklı alternatif!",
    title: "Pancarlı Humus",
    image: "/images/hero3.png"
  },
  {
    tag: "Kolay ve lezzetli!",
    title: "Avokadolu Tost",
    image: "/images/hero4.png"
  },
  {
    tag: "Atıştırmalık!",
    title: "Fıstık Ezmeli Kurabiye",
    image: "/images/hero5.png"
  },
  {
    tag: "Yaz favori!",
    title: "Limonlu Dondurma",
    image: "/images/hero6.png"
  }
];

const renderHeroSlider = () => {
  const sliderMobile = document.getElementById("heroSlides");
  const templateMobile = document.getElementById("heroSlideTemp");
  if (!sliderMobile || !templateMobile) return;

  templateMobile.remove();
  let currentMobile = 0;

  heroSlides.forEach((slide, i) => {
    const el = templateMobile.cloneNode(true);
    el.removeAttribute("id");
    el.style.backgroundImage = `url(${slide.image})`;
    el.querySelector(".heroTag").textContent = slide.tag;
    el.querySelector(".heroTitle").textContent = slide.title;
    el.querySelector(".heroCounter").innerHTML = `${i + 1}<sup style="font-size:14px">/${heroSlides.length}</sup>`;

    el.querySelector(".heroPrev").addEventListener("click", () => {
      currentMobile = (currentMobile - 1 + heroSlides.length) % heroSlides.length;
      sliderMobile.style.transform = `translateX(-${currentMobile * 100}%)`;
      updateCounterMobile();
    });
    el.querySelector(".heroNext").addEventListener("click", () => {
      currentMobile = (currentMobile + 1) % heroSlides.length;
      sliderMobile.style.transform = `translateX(-${currentMobile * 100}%)`;
      updateCounterMobile();
    });

    sliderMobile.appendChild(el);
  });

  const updateCounterMobile = () => {
    sliderMobile.querySelectorAll(".heroCounter").forEach((el) => {
      el.innerHTML = `${currentMobile + 1}<sup style="font-size:12px">/${heroSlides.length}</sup>`;
    });
  };

  const sliderDesktop = document.getElementById("heroSlidesDesktop");
  const templateDesktop = document.getElementById("heroSlideDesktopTemp");
  const sideCards = document.getElementById("heroSideCards");
  const templateSide = document.getElementById("heroSideCardTemp");
  if (!sliderDesktop || !templateDesktop || !sideCards || !templateSide) return;

  templateDesktop.remove();
  templateSide.remove();
  let currentDesktop = 0;

  const mainEl = templateDesktop.cloneNode(true);
  mainEl.removeAttribute("id");
  mainEl.querySelector(".heroPrev").addEventListener("click", () => {
    currentDesktop = (currentDesktop - 1 + heroSlides.length) % heroSlides.length;
    updateDesktop();
  });
  mainEl.querySelector(".heroNext").addEventListener("click", () => {
    currentDesktop = (currentDesktop + 1) % heroSlides.length;
    updateDesktop();
  });
  sliderDesktop.appendChild(mainEl);

  [0, 1].forEach(() => {
    const card = templateSide.cloneNode(true);
    card.removeAttribute("id");
    card.classList.add("flex-1");
    sideCards.appendChild(card);
  });

  const updateDesktop = () => {
    const activeSlide = heroSlides[currentDesktop];

    const mainSlide = sliderDesktop.querySelector(".heroSlideDesktop");
    if (mainSlide) {
      mainSlide.style.backgroundImage = `url(${activeSlide.image})`;
      mainSlide.querySelector(".heroTag").textContent = activeSlide.tag;
      mainSlide.querySelector(".heroTitle").textContent = activeSlide.title;
      mainSlide.querySelector(".heroCounter").innerHTML = `${currentDesktop + 1}<sup style="font-size:14px">/${heroSlides.length}</sup>`;
    }

    sideCards.querySelectorAll(".heroSideCard").forEach((card, i) => {
      const idx = (currentDesktop + i + 1) % heroSlides.length;
      card.style.backgroundImage = `url(${heroSlides[idx].image})`;
      card.querySelector(".heroSideTitle").textContent = heroSlides[idx].title;
    });
  };

  updateDesktop();
};

const categories = [
  {
    image: "/images/cat/corba.svg",
    title: "Çorba",
  },
  {
    image: "/images/cat/denizUrun.png",
    title: "Deniz Ürünleri",
  },
  {
    image: "/images/cat/ekmek.png",
    title: "Ekmek",
  },
  {
    image: "/images/cat/et.png",
    title: "Etler",
  },
  {
    image: "/images/cat/hamur.png",
    title: "Hamur İşleri",
  },
  {
    image: "/images/cat/salata.png",
    title: "Salata",
  },
  {
    image: "/images/cat/sebze.png",
    title: "Sebzeler",
  },
  {
    image: "/images/cat/tavuk.png",
    title: "Tavuk",
  },
  {
    image: "/images/cat/zeytinyag.png",
    title: "Zeytinyağlılar",
  },
];

const renderCategories = () => {
  const categoryTab = document.getElementById("categoryTab");
  const template = categoryTab ? categoryTab.querySelector(".foodCat") : null;

  if (!categoryTab || !template) return;

  const templateClone = template.cloneNode(true);
  template.remove();

  categories.forEach(category => {
    const card = templateClone.cloneNode(true);
    card.classList.remove("hidden");
    card.removeAttribute("id");

    card.querySelector(".catImg img").src = category.image;
    card.querySelector(".catTitle").textContent = category.title;

    categoryTab.appendChild(card);
  });
};

const renderAuthors = () => {
  const authorTab = document.getElementById("authorTab");
  const template = authorTab ? authorTab.querySelector(".authorCat") : null;

  if (!authorTab || !template) return;

  const templateClone = template.cloneNode(true);
  template.remove();

  authors.forEach(author => {
    const card = templateClone.cloneNode(true);
    card.classList.remove("hidden");
    card.removeAttribute("id");

    card.querySelector(".authorName").textContent = author.name;
    card.querySelector(".authorTitle").textContent = author.title;
    card.querySelector("img").src = author.image || AUTHOR_IMAGE;

    authorTab.appendChild(card);
  });
};

const AUTHOR_IMAGE = "/images/author.png";

const authors = [
  { name: "Yıldız Şahinler", title: "Yemek Danışmanı", image: "/images/author.png" },
  { name: "Zeynep Aydın", title: "Beslenme Uzmanı", image: "/images/author.png" },
  { name: "Ahmet Yılmaz", title: "Şef", image: "/images/author.png" },
  { name: "Elif Kaya", title: "Tatlı Uzmanı", image: "/images/author.png" },
  { name: "Mehmet Demir", title: "Ev Yemekleri Uzmanı", image: "/images/author.png" },
  { name: "Ayşe Karaca", title: "Diyetisyen", image: "/images/author.png" }
];

document.addEventListener("DOMContentLoaded", () => {
  initComponents();
  renderHeroSlider();
  renderRecipes();
  renderStories();
  renderCategories();
  renderAuthors();
  initFilterBtns();
});