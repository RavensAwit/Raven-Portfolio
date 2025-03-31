<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/css/splide.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/js/splide.min.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import Typed from 'typed.js';
  import Splide from '@splidejs/splide';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

  let showModal = false;
  const emailAddress = "wraven112302@gmail.com";
  const mobileNumber = "09696440210";

  onMount(() => {
    AOS.init();

    new Typed('#typedText', {
      strings: [
        "Computer Engineer",
        "Web Developer",
        "AI Developer",
        "Network Engineer"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });

    const skillsSlider = new Splide('.skills-slider', {
      type       : 'loop',
      drag       : 'free',
      perPage    : 3,
      gap        : '3rem',
      arrows     : false,
      autoScroll : { speed: 3 },
      pagination : false
    });
    skillsSlider.mount({ AutoScroll });

    const projectsSlider = new Splide('#projectCarousel', {
      type       : 'loop',
      perPage    : 1,
      start      : 1,
      arrows     : false,
      pagination : true,
      gap        : '55rem',
    });
    projectsSlider.mount();

    
  });

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function copyEmail() {
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        closeModal();
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  }

  function copyNumber() {
    navigator.clipboard.writeText(mobileNumber)
      .then(() => {
        closeModal();
      })
      .catch((err) => {
        console.error("Failed to copy number: ", err);
      });
  }

  function handleOverlayClick(event) {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  }
</script>
 
<div class="content">
  <header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8">
    <img src="/craven.png" alt="Logo" class="h-15 w-auto relative left-10"/>
    <nav class="flex space-x-4 pr-15">
      <a href="#home" class="font-bold text-md flex text-white py-2 px-6 hover:underline rounded-md">HOME</a>
      <a href="#profile" class="font-bold text-md flex text-white py-2 px-6 hover:underline rounded-md">PROFILE</a>
      <a href="#skills" class="font-bold text-md flex text-white py-2 px-6 hover:underline rounded-md">SKILLS</a>
      <a href="#certifications" class="font-bold text-md flex text-white py-2 px-6 hover:underline rounded-md">CERTIFICATIONS</a>
      <a href="#projects" class="font-bold text-md flex text-white py-2 px-6 hover:underline rounded-md">PROJECTS</a>
    </nav>
  </header>
</div>  

<!-- Single Fixed Image Background -->
<img
  src="/MAIN_BG.jpg"
  alt="Background"
  class="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
/>

<!-- Main Content -->
<main
  id="home"
  data-aos-easing="ease-in-cubic"
  data-aos-duration="900"
  data-aos="fade-right"
  class="min-h-screen flex flex-col items-center justify-center pt-20 scroll-mt-20"
>   
  <!-- Video as background -->
  <!-- <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover z-[-1] sm:w-full"
    >
    <source src="projects.mp4" type="video/mp4" />
    Your browser does not support the video tag.
   </video> -->
   
   <div
   id="typedText"
   class="flex flex-col mt-50 text-3xl text-white text-left font-bold
          md:flex-col-row md:text-4xl md:mt-10  
          xl:ml-190 xl:text-5xl xl:-mt-55
          2xl:-mt-45 2xl:text-6xl"
   >
   </div>

    <div class="absolute bg">
      <!-- Video Background -->
      <video autoplay muted loop playsinline
            class="w-85 h-70 -mt-60 ml-5
            md:w-155 md:h-70 md:-mt-100 md:ml-10
            xl:w-180 xl:h-70 xl:-mt-30 xl:mr-140
            2xl:-ml-30 2xl:-mt-25"
            style="object-fit: cover; border-radius: 1rem; z-index: -1;">
        <source src="profileVID.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <!-- Overlay Text -->
      <h1 class="flex-col-row text-white font-bold text-3xl -mt-35 ml-50 
                 md:-ml-80 md:-mt-65 md:text-4xl md:absolute
                 xl:-ml-218 xl:-mt-25 xl:mr-55 xl:text-5xl xl:absolute
                 2xl:-ml-220 2xl:-mt-20 2xl:text-5xl
                "
          style="top: 50%; left: 100%; transform: translate(-50%, -50%); z-index: 1;">
        I am Raven Jacinto – an aspiring software and AI engineer from PH
      </h1>

    <button id="checkResume" 
            class="button font-bold left-5 -top-15 w-40
                   md:top-5 md:ml-40 md:absolute
                   xl:top-5 xl:ml-5 xl:absolute
                   2xl:top-5 2xl:-ml-35 2xl:absolute"
            >
      <div class="blob1"></div>
      <div class="blob2"></div>
      <div class="inner">Resume</div>
    </button>
    
    <script>
      document.getElementById('checkResume').addEventListener('click', function() {
        window.open('https://drive.google.com/file/d/1G2h4FZqvWCdxpprCJbpkCogqUIYErTBR/view?usp=sharing');
      });
    </script>
    
    <button id="reachOutBtn" href="#_" on:click|preventDefault={openModal} 
            class="button font-bold -top-15 left-7
            md:top-5 md:ml-3 md:absolute
            xl:top-5 xl:ml-3
            2xl:top-5 2xl:ml-3 2xl:absolute"
            >
      <div class="blob1"></div>
      <div class="blob2"></div>
      <div class="inner">Reach Out</div>
    </button>
    
      <!-- Conditionally rendered Modal -->
    {#if showModal}
    <div
      data-aos="slide-up" data-aos-duration="700" class="modal-overlay absolute font-bold pl-30 custom-glass w-85 h-35 z-50 radius-32px left-5 top-60
            md:w-160 md:h-55 md:-bottom-30 md:-mt-40 md:left-8 md:absolute
            xl:w-180 xl:h-55 xl:bottom-90 xl:-mt-10 xl:ml-130 xl:absolute
            2xl:w-130 2xl:h-55 2xl:bottom-200 2xl:-mt-30 2xl:absolute 2xl:ml-170"
      on:click={handleOverlayClick}
      style="background-image: url('/amex2.jpg'); background-size: 650px; background-position: center; background-repeat: no-repeat !important;"
    >
      <div id="contactModal" class="absolute w-70 h-20 p-4 flex flex-col items-center">
        <!-- Contact Info Container -->
        <div class="text-center">
          <div class="absolute items-ceter justify-center space-x-4">
            <span id="emailAddress" class="absolute text-white font-bold -ml-58 mt-10
                      md:text-3xl md:-ml-40 md:mt-15 md:absolute
                      xl:text-4xl xl:-ml-55 xl:mt-17 xl:absolute 
                      2xl:text-2xl 2xl:mt-17 2xl:-ml-57 2xl:absolute
                      ">{emailAddress}</span>
            <button
              id="copyEmailBtn"
              on:click={copyEmail}
              class="absolute px-2 py-1 border rounded text-white hover:text-black-900 hover:bg-blue-300 
                     rounded-md -ml-5 mt-9
                     md:rounded-md md:ml-60 md:mt-16 md:absolute
                     xl:absolute xl:mt-19 xl:ml-65
                     2xl:absolute 2xl:ml-43 2xl:mt-18
                    "
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
          </div>
          <div class="absolute items-center justify-center space-x-4 mt-4">
            <span id="mobileNumber" class="absolute text-white font-bold -ml-58 mt-15
                                           md:text-3xl md:-ml-10 md:mt-25 md:absolute
                                           xl:text-4xl xl:-ml-55 xl:mt-29 xl:absolute
                                           2xl:text-2xl 2xl:mt-24 2xl:-ml-57 2xl:absolute
                                           ">{mobileNumber}</span>
            <button
              id="copyNumberBtn"
              on:click={copyNumber}
              class="absolute px-2 py-1 border rounded text-white hover:text-black-900 hover:bg-blue-300 
                     rounded-md -ml-5 mt-13
                     md:ml-60 md:mt-25 md:absolute
                     xl:absolute xl:mt-30 xl:ml-8
                     2xl:absolute 2xl:ml-43 2xl:mt-25
                     ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
          </div>
          <div>
            <span class="absolute font-bold text-xl text-white mt-0 -ml-58
                         md:text-3xl
                         xl:text-4xl 
                         2xl:text-3xl
                         ">CONTACT ME</span>
          </div>
        </div>
        <!-- Close Button -->
        <button
          on:click={closeModal}
          class="mt-0 ml-23 px-2 py-1 border text-white hover:bg-red-900 rounded-md
                 md:ml-170
                 xl:ml-210
                 2xl:ml-110
                "
        >✘</button>
      </div>
    </div>
    {/if}
    </div>
</main>

<section id="profile" class="min-h-screen flex flex-col items-center justify-center mt-20 py-10">
  <!-- Glass container for text and image -->
  <div
    data-aos-duration="900"
    data-aos="slide-up"
    class="glass custom-glass md:h-110 sw-[80%] max-w-5xl pl-19 pr-19 flex flex-col md:flex-row items-center gap-8"
  >
    <div class="flex-1 text-left space-y-5">
      <h1 data-aos="zoom-out-right" class="text-4xl text-white font-bold mt-7 mb-10 pt-[2px]">
        ABOUT ME
      </h1>
      <p data-aos="fade-left" class="text-white text-lg">
        I'm Raven Charles Roy P. Jacinto — just call me Ven.
      </p>
      <p data-aos="fade-left" class="text-white text-lg">
        I am a computer engineering student with a passion for the software and hardware side of technology.
      </p>
      <p data-aos="fade-left" class="text-white text-lg">
        My strength is companionship &amp; empathy mixed with leadership and adaptability.
      </p>
      <p data-aos="fade-left" class="text-white text-lg pb-10">
        My main goal is to become a philanthropist and achieve financial freedom by the age of 30, allowing me to travel freely around the world and help people.
      </p>
    </div>
  
    <!-- Right Column: Profile Picture -->
    <div class="flex-none flex justify-center">
      <img
        src="/noBG.png"
        alt="Raven Jacinto"
        data-aos="zoom-in-left" data-aos-duration="2500"
        class="w-[300px] h-[450px] object-cover rounded-lg pb-[20px]"
      />
    </div>
  </div>

  <!-- Social Icons Container -->
  <div data-aos="slide-up" data-aos-duration="1000" class="flex space-x-4 mt-5 -ml-170">
    <!-- Facebook -->
    <a href="https://www.facebook.com/raven.charles.roy.jacinto/" target="_blank" rel="noopener noreferrer">
      <img src="/fb.png" alt="Facebook" class="h-10 w-10">
    </a>
    <!-- Instagram -->
    <a href="https://www.instagram.com/ravenjacinto/" target="_blank" rel="noopener noreferrer">
      <img src="/IG-1.png" alt="Instagram" class="h-10 w-10">
    </a>
    <!-- GitHub -->
    <a href="https://github.com/RavensAwit" target="_blank" rel="noopener noreferrer">
      <img src="/GH.png" alt="GitHub" class="h-10 w-10">
    </a>
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/raven-jacinto-97428b348/" target="_blank" rel="noopener noreferrer">
      <img src="LI.png" alt="LinkedIn" class="h-10 w-10">
    </a>
  </div>
</section>



<!-- Skills Section -->
<section id="skills" class="min-h-screen flex items-center justify-center py-10">
  <div data-aos-duration="900" data-aos="slide-up" class="max-w-5xl pl-15 pr-15 flex flex-col pb-100 items-center w-500 md:h-[110px]">
    <!-- Use unique class "skills-slider" for this Splide slider -->
    <div class="splide skills-slider w-370">
      <div class="splide__track">
        <ul class="splide__list">
          <!-- Slide 1: Frontend Development -->
          <li class="splide__slide relative">
            <div class="absolute top-3 left-15 p-2 text-white text-3xl font-bold w-[400px] z-50">
              Frontend Development
            </div>
            <div class="pl-15 glass custom-glass rounded-lg shadow-md h-[400px] w-[450px] gap-8 flex flex-col justify-center">
              <div class="grid grid-cols-3 gap-3">
                <img src="/css.svg" alt="CSS" class="h-16 w-16" />
                <img src="/js.svg" alt="JavaScript" class="h-16 w-16" />
                <img src="/html.svg" alt="HTML" class="h-16 w-16" />
                <img src="/tailwindcss.svg" alt="Tailwind CSS" class="h-16 w-16" />
                <img src="/svelte.svg" alt="Svelte" class="h-16 w-16" />
                <img src="/react.svg" alt="React" class="h-16 w-16" />
              </div>
            </div>
          </li>

          <!-- Slide 2: AI Development -->
          <li class="splide__slide relative">
            <div class="absolute top-3 left-25 p-2 text-white text-3xl font-bold w-[300px] z-50">
              AI Development
            </div>
            <div class="pl-15 glass custom-glass rounded-lg shadow-md h-[400px] w-[450px] gap-8 flex flex-col justify-center">
              <div class="grid grid-cols-3 gap-4">
                <img src="/tensorflow.svg" alt="TensorFlow" class="h-16 w-16" />
                <img src="/pytorch.svg" alt="PyTorch" class="h-16 w-16" />
                <img src="/numpy.svg" alt="NumPy" class="h-16 w-16" />
                <img src="/matplotlib.png" alt="Matplotlib" class="h-16 w-16" />
                <img src="/pandaslegit.svg" alt="Pandas" class="h-16 w-16" />
                <img src="/scipy.png" alt="SciPy" class="h-16 w-16" />
              </div>
            </div>
          </li>

          <!-- Slide 3: Robotics -->
          <li class="splide__slide relative">
            <div class="absolute top-3 left-40 p-2 text-white text-3xl font-bold w-[300px] z-50">
              Robotics
            </div>
            <div class="pl-15 glass custom-glass rounded-lg shadow-md h-[400px] w-[450px] gap-8 flex flex-col justify-center">
              <div class="grid grid-cols-3 gap-4">
                <img src="/Arduino.svg" alt="Arduino" class="h-16 w-16" />
                <img src="/python.svg" alt="Python" class="h-16 w-16" />
                <img src="/tinkercad.png" alt="Tinkercad" class="h-16 w-16" />
              </div>
            </div>
          </li>

          <!-- Slide 4: Backend Development -->
          <li class="splide__slide relative">
            <div class="absolute top-3 left-15 p-2 text-white text-3xl font-bold w-[400px] z-50">
              Backend Development
            </div>
            <div class="pl-15 glass custom-glass rounded-lg shadow-md h-[400px] w-[450px] gap-8 flex flex-col justify-center">
              <div class="grid grid-cols-3 gap-4">
                <img src="/node.svg" alt="Node.js" class="h-16 w-16" />
                <img src="/python.svg" alt="Python" class="h-16 w-16" />
                <img src="/laravel.svg" alt="Laravel" class="h-16 w-16" />
                <img src="/flasklegit.png" alt="Flask" class="h-16 w-16" />
                <img src="/mysql.svg" alt="MySQL" class="h-16 w-16" />
              </div>
            </div>
          </li>

          <!-- Slide 5: Cisco Networks -->
          <li class="splide__slide relative">
            <div class="absolute top-3 left-27 p-2 text-white text-3xl font-bold w-[300px] z-50">
              Cisco Networks
            </div>
            <div class="pl-15 glass custom-glass rounded-lg shadow-md h-[400px] w-[450px] gap-8 flex flex-col justify-center">
              <div class="grid grid-cols-3 gap-4">
                <img src="/cisco.svg" alt="Cisco" class="h-16 w-16" />
                <img src="/putty.png" alt="PuTTY" class="h-16 w-16" />
                <img src="/packet-tracer.webp" alt="Packet Tracer" class="h-16 w-16" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="certifications" class="min-h-screen flex flex-col items-center justify-center py-10 bg-cover">
  <div data-aos="zoom-in" data-aos-duration="900" class="max-w-5xl px-15 flex flex-col items-center">
    <h2 class="text-5xl text-white font-bold mb-10 mt-10">CERTIFICATIONS</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Certification 1 -->
      <a href="https://drive.google.com/file/d/1LVUCKTk-y9DISwbw48fQijqU2E018lFd/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="cert-card">
        <img src="/ITCS.png" alt="Introduction to Cybersecurity" class="items-center object-contain w-50 h-auto rounded-2xl transition-transform duration-300 hover:scale-105" />
      </a>
      <!-- Certification 2 -->
      <a href="https://drive.google.com/file/d/19hub2wj7yn0rAc0DqPCLNl8LshNMl_VY/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="cert-card">
        <img src="/JVS.png" alt="Javascript Essentials 1" class="items-center object-contain w-50 h-auto rounded-2xl transition-transform duration-300 hover:scale-105" />
      </a>
      <!-- Certification 3 -->
      <a href="https://drive.google.com/file/d/1nb8z5o_2_qSKruiYBJvsecylMAbg2Gd0/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="cert-card">
        <img src="/DevNet.png" alt="DevNet Associate" class="items-center object-contain w-50 h-auto rounded-2xl transition-transform duration-300 hover:scale-105" />
      </a>
      <!-- Certification 4 -->
      <a href="https://drive.google.com/file/d/1NY7wwgIbEQ1xsl72-hdO8FmDfowNhuZc/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="cert-card">
        <img src="/ENS.png" alt="CCNA: Enterprise Networking, Security, and Automation" class="items-center object-contain w-50 h-auto rounded-2xl transition-transform duration-300 hover:scale-105" />
      </a>
      <!-- Certification 5 -->
      <a href="https://drive.google.com/file/d/1HenNko1pIuiLs7nsW0br6Qljn_XIOYCf/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="cert-card">
        <img src="/SWR.png" alt="CCNA: Switching, Routing, and Wireless Essentials" class="items-center object-contain w-50 h-auto rounded-2xl transition-transform duration-300 hover:scale-105" />
      </a>
      <!-- Certification 6 -->
      <a href="https://drive.google.com/file/d/1JcDJIEd2gjbSI9df8VbHlgR9k3ytc9lu/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="cert-card">
        <img src="/ITN.png" alt="CCNA: Introduction to Networks" class="items-center object-contain w-50 h-auto rounded-2xl transition-transform duration-300 hover:scale-105" />
      </a>
    </div>
  </div>
</section>


<!-- Projects Section -->
<section id="projects" class="min-h-screen flex flex-col items-center justify-center py-10">
  <div 
    data-aos-duration="900"
    data-aos="zoom-in"
    class="w-full max-w-5xl p-8 flex flex-col gap-8 relative"
  >

    <h2 class="text-5xl text-white font-bold absolute top-17 left-90 ">
      RECENT WORKS
    </h2>

    <!-- Splide Carousel -->
    <div id="projectCarousel" class="splide top-12 mt-16 w-250 h-150">
      <div class="splide__track">
        <ul class="splide__list gap-6">
          
          <!-- Project Card: PMOWA -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <a href="https://software-design48.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="a.PMOWA.png" alt="PMOWA" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
                <div class="absolute inset-0 bg-black bg-opacity-50 w-240 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                    Packaging Material Optimization Web Application
                  </h3>
                  <p class="text-white text-center justify-center px-20">
                    I developed a web application that uses cameras to scan product dimensions and compute optimal packaging material to prevent overpackaging. The front end uses JavaScript, HTML, and CSS, while the backend is powered by OpenCV, Numpy, and Flask with AJAX.
                  </p>
                </div>
              </a>
            </div>
          </li>

          <!-- Project Card: CCAC -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <a href="https://animalclassifier-qz3ik3haivsrjkhnztphxk.streamlit.app/" target="_blank" rel="noopener noreferrer">
              <img src="b.CAAP.png" alt="CCAC" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 w-240 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  CNN-based Cognitive Animal Classification
                </h3>
                <p class="text-white text-center px-4 px-20">
                  I developed a model to identify cognitive animals from uploaded pictures, using PIL and OpenCV for image preprocessing, and TensorFlow for model development. The model is deployed on the Streamlit platform with Python.
                </p>
              </div>
              </a>
            </div>
          </li>

          <!-- Project Card: Robotics -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <a href="https://drive.google.com/file/d/1IKUMDQKDjRBHMSzqL-Bhyhe2J5lPuWhb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src="ARVC.png" alt="Robotics" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 flex w-240 rounded-2xl flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  Automated Robotic Vacuum Cleaner
                </h3>
                <p class="text-white text-center px-4 px-20">
                  I created an autonomous robot vacuum cleaner with Arduino programming, ultrasonic sensors, DC motors, a water booster pump, a vacuum system, and a custom chassis. It's designed to clean dust, dirt, and simple floor stains efficiently for busy households.
                </p>
              </div>
              </a>
            </div>
          </li>

          <!-- Project Card: Project 4 -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <a href="https://drive.google.com/file/d/1OfoBbfcBtNbMpWpjxqKhCsPn6LBBuzpr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src="c.PD.png" alt="Project 4" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 flex w-240 rounded-2xl flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  City Recognition for Efficient Parcel Sorting
                </h3>
                <p class="text-white text-center px-4 px-20">
                  I developed a program for a parcel sorting center using Python, OpenCV, and PyTesseract to automate parcel address detection for faster sorting.
                </p>
              </div>
              </a>
            </div>
          </li>
          
          <!-- Project Card: Cisco Case Study -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <a>
              <img src="CCS2.png" alt="Cisco" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 flex w-240 rounded-2xl flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  Cisco Case Study on Packet Tracer
                </h3>
                <p class="text-white text-center px-4 px-20">
                  This is a group case study and I did the basic configuration and the ACL configuration setup of this network. I also tested its effect on the network and verify the addresses who have an access and not. 
                </p>
              </div>
              </a>
            </div>
          </li>

          <!-- Project Card: Cisco Case Study -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <img src="Portfolio.png" alt="Portfolio" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 flex w-240 rounded-2xl flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  Web Portfolio
                </h3>
                <p class="text-white text-center px-4 px-20">
                  This is my newly created portfolio. It uses tailwind and svelte-kit along with splideJS.
                </p>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="pt-10 text-white py-5 px-5 flex items-center footer-animation" style="background-image: url('/FooterBG.jpg');">
  <!-- Left Side: Logo -->
  <div class="flex-1 flex justify-start -mt-5">
    <img src="/craven.png" alt="Logo" class="h-18 w-auto"/>
  </div>

  <!-- Middle: Copyright -->
  <div class="flex-1 flex justify-center">
    <p class="text-lg text-gray-500 -mt-3">
      © {new Date().getFullYear()}. Made by <span class="font-bold text-white">Raven Charles Roy P. Jacinto</span>
    </p>
  </div>

  <!-- Right Side: Social Icons -->
  <div class="flex-1 flex justify-end">
    <div class="text-left -mt-6 text-xl">
      <h2 class="text-base text-xl font-bold">SOCIAL</h2>
      <div class="flex justify-center md:justify-start gap-3 mt-2">
        <!-- Facebook -->
        <a href="https://www.facebook.com/raven.charles.roy.jacinto/" target="_blank" rel="noopener noreferrer">
          <img src="/fb.png" alt="Facebook" class="h-6 w-6">
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com/ravenjacinto/" target="_blank" rel="noopener noreferrer">
          <img src="/IG-1.png" alt="Instagram" class="h-6 w-6">
        </a>
        <!-- GitHub -->
        <a href="https://github.com/RavensAwit" target="_blank" rel="noopener noreferrer">
          <img src="/GH.png" alt="GitHub" class="h-6 w-6">
        </a>
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/raven-jacinto-97428b348/" target="_blank" rel="noopener noreferrer">
          <img src="LI.png" alt="LinkedIn" class="h-6 w-6">
        </a>
      </div>
    </div>
  </div>
</footer>
