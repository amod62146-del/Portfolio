document.addEventListener("DOMContentLoaded", () => {
  
  /* --- Tab System Control --- */
  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.resume-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  /* --- Project Data Array --- */
  const projects = [
    {
      num: "01",
      title: "Coffee House Website",
      desc: "A modern, fully responsive e-commerce web application built for a local coffee shop in Kurunegala. Features a dynamic shopping cart, slick animations, and an advanced order tracking system integrated with EmailJS and WhatsApp Business API.",
      tech: "HTML5, CSS3, JavaScript, EmailJS API",
      liveLink: "https://coffe-shop-website-eosin.vercel.app/", 
      githubLink: "https://github.com/amod62146-del/Cafee-website",
      img: "coffe.png" 
    },
    {
      num: "02",
      title: "Creative Agency UI Portfolio",
      desc: "An immersive UI/UX concept developed for dynamic digital business bureaus. Incorporates smooth transitions, high fidelity custom layouts, and clean grid-based interaction flows.",
      tech: "Figma, HTML5, Vanilla CSS",
      liveLink: "#",
      githubLink: "#",
      img: "amod.jpg"
    },
    {
      num: "03",
      title: "Corporate SEO Strategy Tool",
      desc: "A lightweight frontend application displaying dashboard analysis metrics, metadata tagging properties, and performance optimization guidelines dynamically.",
      tech: "JavaScript, HTML5, CSS3 Grid",
      liveLink: "#",
      githubLink: "#",
      img: "amod.jpg"
    }
  ];

  let currentIndex = 0;

  const pNum = document.getElementById('p-num');
  const pTitle = document.getElementById('p-title');
  const pDesc = document.getElementById('p-desc');
  const pTech = document.getElementById('p-tech');
  const pLive = document.getElementById('p-live');
  const pGithub = document.getElementById('p-github');
  const pImg = document.getElementById('p-img');

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  function updateProject(index) {
    const project = projects[index];
    pNum.textContent = project.num;
    pTitle.textContent = project.title;
    pDesc.textContent = project.desc;
    pTech.textContent = project.tech;
    pLive.href = project.liveLink;
    pGithub.href = project.githubLink;
    pImg.src = project.img;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= projects.length) { currentIndex = 0; }
    updateProject(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) { currentIndex = projects.length - 1; }
    updateProject(currentIndex);
  });

  // Run initial call
  updateProject(currentIndex);


  /* --- Hero Section Dynamic Text Changer (Typewriter Effect) --- */
  const roles = ["Web Developer", "Blogger", "Youtuber", "Designer", "Coder"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 150;
  const erasingDelay = 80;
  const newWordDelay = 1500; 
  const typingTarget = document.getElementById("typing-text");

  function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingTarget.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingTarget.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, newWordDelay);
    } 
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex++;
      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
      setTimeout(typeEffect, 500);
    } 
    else {
      setTimeout(typeEffect, isDeleting ? erasingDelay : typingDelay);
    }
  }

  // Initial animation trigger
  setTimeout(typeEffect, 500);
});