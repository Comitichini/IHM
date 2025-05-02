// === Effet de traits néon au clic ===
document.addEventListener("click", function (e) {
    const burstCount = 6;
  
    for (let i = 0; i < burstCount; i++) {
      const ray = document.createElement("div");
      ray.classList.add("neon-burst");
  
      ray.style.left = `${e.pageX}px`;
      ray.style.top = `${e.pageY}px`;
      ray.style.position = "absolute";
  
      const angle = (360 / burstCount) * i;
      ray.style.setProperty("--angle", `${angle}deg`);
  
      document.body.appendChild(ray);
  
      setTimeout(() => {
        ray.remove();
      }, 600);
    }
  });
  
  // === Effet d’onde lumineuse au mouvement de souris + fond animé ===
  let lastRippleTime = 0;
  
  document.addEventListener("mousemove", function (e) {
    const now = Date.now();
    if (now - lastRippleTime < 80) return;
    lastRippleTime = now;
  
    const ripple = document.createElement("div");
    ripple.classList.add("mouse-ripple");
    ripple.style.left = `${e.pageX}px`;
    ripple.style.top = `${e.pageY}px`;
    document.body.appendChild(ripple);
  
    const distortion = document.createElement("div");
    distortion.classList.add("background-ripple");
    distortion.style.left = `${e.pageX}px`;
    distortion.style.top = `${e.pageY}px`;
    document.body.appendChild(distortion);
  
    setTimeout(() => {
      ripple.remove();
      distortion.remove();
    }, 600);
  });

  document.querySelectorAll('.carousel-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const direction = arrow.classList.contains('left') ? -1 : 1;
      const targetId = arrow.getAttribute('data-target');
      const carousel = document.getElementById(targetId);
      const items = carousel.querySelectorAll('.carousel-item');
  
      if (items.length === 0) return;
  
      // Trouver l'élément actuellement visible
      let index = 0;
      const itemWidth = items[0].offsetWidth + 15; // marge
  
      const scrollLeft = carousel.scrollLeft;
      index = Math.round(scrollLeft / itemWidth);
  
      // Nouveau index cyclique
      index = (index + direction + items.length) % items.length;
  
      // Scroll vers l’élément
      carousel.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    });
  });
  
  
  
  
  
  
  