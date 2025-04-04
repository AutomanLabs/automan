document.addEventListener("DOMContentLoaded", () => {
    // Navbar toggle
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  
    // Expandable cards
    document.querySelectorAll('.toggle-more').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.card-text');
        const isExpanded = card.classList.toggle('expanded');
  
        // Detect current lang
        const lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
        const isItalian = lang === "it";
  
        // Toggle text
        btn.textContent = isExpanded
          ? (isItalian ? "Nascondi" : "Less")
          : (isItalian ? "Scopri di più" : "More");
      });
    });
  
    // Language detection + switching
    const langSwitcher = document.getElementById("lang-switcher");
    const browserLang = navigator.language.slice(0, 2);
    const storedLang = localStorage.getItem('lang');
    const preferred = (storedLang || browserLang) === "it" ? "it" : "en";
  
    function switchLang(selectedLang) {
      document.querySelectorAll('.lang-en, .lang-it').forEach(el =>
        el.classList.remove('active')
      );
      document.querySelectorAll('.lang-' + selectedLang).forEach(el =>
        el.classList.add('active')
      );
      langSwitcher.value = selectedLang;
      localStorage.setItem("lang", selectedLang);
    }
  
    langSwitcher.addEventListener("change", (e) => {
      switchLang(e.target.value);
    });
  
    switchLang(preferred);
  });
  