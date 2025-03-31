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
        "Computer Engineering",
        "Creative Web Developer",
        "Aspiring AI Developer",
        "Network Engineering"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    const skillsSlider = new Splide('.skills-slider', {
      type       : 'loop',
      drag       : 'free',
      perPage    : 3,
      gap        : '3rem',
      arrows     : false,
      autoScroll : { speed: 5 },
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
    <img src="/craven.png" alt="Logo" class="h-15 w-auto relative left-10" />
    <nav class="flex space-x-4 pr-15">
      <a href="#home" class="font-bold text-white py-2 px-6 hover:underline hover:bg-gray-900 rounded-md">HOME</a>
      <a href="#profile" class="font-bold text-white py-2 px-6 hover:underline hover:bg-gray-900 rounded-md">PROFILE</a>
      <a href="#skills" class="font-bold text-white py-2 px-6 hover:underline hover:bg-gray-900 rounded-md">SKILLS</a>
      <a href="#projects" class="font-bold text-white py-2 px-6 hover:underline hover:bg-gray-900 rounded-md">PROJECTS</a>
    </nav>
  </header>
</div>  

<!-- Single Fixed Image Background -->
<img
  src="/MAIN_BG.jpg"
  alt="Background"
  class="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
/>


<section>
  <div>
    <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover z-[-1]"
    >
    <source src="projects.mp4" type="video/mp4" />
    Your browser does not support the video tag.
   </video>
  </div>
  <div>
    <h1> </h1>
      <p>

      </p>
  </div>
</section>


<!-- Main Content -->
<main
  id="home"
  data-aos-easing="ease-in-cubic"
  data-aos-duration="900"
  data-aos="fade-right"
  class="min-h-screen flex flex-col items-center justify-center pt-20 scroll-mt-20"
>   
  <!-- Video as background -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover z-[-1]"
    >
    <source src="profileVID.mp4" type="video/mp4" />
    Your browser does not support the video tag.
   </video>
   
  <div
  id="typedText"
  class="text-5xl text-white text-left font-bold relative left-100 bottom-10"
  >
  </div>

  <div class="absolute left-20 top-60 bg pb-1 pt-7 h-60 w-165">
    <div style="position: relative; overflow: hidden;">
      <!-- Video Background -->
      <video autoplay muted loop playsinline
             style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1; border-radius: 1rem;">
        <source src="profileVID.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    
      <!-- Header Content -->
      <h1 class="h-45 text-4xl text-white font-bold pt-12 pl-10 pr-10 pb-4"
          style="position: relative; z-index: 1;">
        I am Raven Jacinto – an aspiring software and AI engineer from PH
      </h1>
    </div>

    <button id="checkResume" class="button pl-15 relative left-1 top-10 font-bold">
      <div class="blob1"></div>
      <div class="blob2"></div>
      <div class="inner">Check Resume</div>
    </button>
    
    <script>
      document.getElementById('checkResume').addEventListener('click', function() {
        window.open('https://drive.google.com/file/d/1G2h4FZqvWCdxpprCJbpkCogqUIYErTBR/view?usp=sharing');
      });
    </script>
    
    <button id="reachOutBtn" href="#_" on:click|preventDefault={openModal} class="button pl-15 relative left-4 top-10 font-bold">
      <div class="blob1"></div>
      <div class="blob2"></div>
      <div class="inner">Reach Out</div>
    </button>
    
      <!-- Conditionally rendered Modal -->
      {#if showModal}
      <div
        data-aos="slide-left" data-aos-duration="800" class="modal-overlay relative font-bold pl-30 pt-25 left-175 bottom-67 z-50 radius-32px w-160 h-55 glass custom-glass"
        on:click={handleOverlayClick}
      >
        <div id="contactModal" class="relative w-70 h-20 p-4">
          <div class="flex items-center text-center left-50">
            <span id="emailAddress" class="text-white font-bold md:text-2xl relative bottom-6">{emailAddress}</span>
            <!-- Copy icon/button: copies email and closes modal -->
            <button
              id="copyEmailBtn"
              on:click={copyEmail}
              class="px-2 py-1 relative left-3 border rounded text-white hover:text-gray-300 hover:bg-blue-600 rounded-md bottom-6"
            >
              <!-- Inline SVG for a copy icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 
                        .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
                        16H8V7h11v14z"/>
              </svg>
            </button>
          </div>

          <div class="flex items-center text left-50">
            <span id="mobileNumber" class="text-white font-bold md:text-2xl pt-5 left-26 relative bottom-8">{mobileNumber}</span>
            <button
              id="copyNumberBtn"
              on:click={copyNumber}
              class="px-2 py-1 relative left-29 border rounded text-white hover:bg-blue-600 rounded-md bottom-5"
            >
              <!-- Inline SVG for a copy icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 
                        .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
                        16H8V7h11v14z"/>
              </svg>
            </button>
          </div>
        </div>
        <!-- CONTACT ME and Check Button aligned in a flex container -->
        <div class="flex items-center justify-start space-x-60 relative right-20 bottom-40">
          <div class="font-bold text-3xl text-white">CONTACT ME</div>
        </div>
        <button
            on:click={closeModal}
            class="relative bottom-49 left-118 px-2 py-1 border rounded text-white hover:bg-red-900 rounded-md"
          >✘
          </button>
      </div>
      {/if}
    </div>
</main>

<section
id="profile"
class="min-h-screen flex items-center justify-center py-10"
>
<!-- Glass container for text and image -->
<div
  data-aos-duration="900"
  data-aos="slide-up"
  class="glass custom-glass md:h-110 sw-[80%] max-w-5xl pl-19 pr-19 flex flex-col md:flex-row items-center gap-8"
>
  <div class="flex-1 text-left space-y-5">
    <h1 data-aos="zoom-out-right" data-aos-duration="" class="text-4xl text-white font-bold mt-7 mb-10 pt-[2px]">
      ABOUT ME
    </h1>
    <p data-aos="fade-left" class="text-white text-lg">
      I'm Raven Charles Roy P. Jacinto — just call me Ven.
    </p>
    <p data-aos="fade-left" class="text-white text-lg">
      I am a computer engineering student with a passion for the software and hardware side of technology.
    </p>
    <p data-aos="fade-left" class="text-white text-lg">
      My strength is companionship & empathy mixed with leadership and adaptability.
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
                <img src="/pandas.svg" alt="Pandas" class="h-16 w-16" />
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
                <img src="/flask.svg" alt="Flask" class="h-16 w-16" />
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
              <img src="a.PMOWA.png" alt="PMOWA" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 w-240 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  Packaging Material Optimization Web Application
                </h3>
                <p class="text-white text-center justify-center px-20">
                  I developed a web application that uses cameras to scan product dimensions and compute optimal packaging material to prevent overpackaging. The front end uses JavaScript, HTML, and CSS, while the backend is powered by OpenCV, Numpy, and Flask with AJAX.
                </p>
              </div>
            </div>
          </li>

          <!-- Project Card: CCAC -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <img src="b.CAAP.png" alt="CCAC" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 w-240 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  CNN-based Cognitive Animal Classification
                </h3>
                <p class="text-white text-center px-4 px-20">
                  I developed a model to identify cognitive animals from uploaded pictures, using PIL and OpenCV for image preprocessing, and TensorFlow for model development. The model is deployed on the Streamlit platform with Python.
                </p>
              </div>
            </div>
          </li>

          <!-- Project Card: Robotics -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <img src="ARVC.png" alt="Robotics" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 flex w-240 rounded-2xl flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  Automated Robotic Vacuum Cleaner
                </h3>
                <p class="text-white text-center px-4 px-20">
                  I created an autonomous robot vacuum cleaner with Arduino programming, ultrasonic sensors, DC motors, a water booster pump, a vacuum system, and a custom chassis. It's designed to clean dust, dirt, and simple floor stains efficiently for busy households.
                </p>
              </div>
            </div>
          </li>

          <!-- Project Card: Project 4 -->
          <li class="splide__slide">
            <div class="group relative overflow-hidden rounded-lg shadow-lg transition duration-300">
              <img src="c.PD.png" alt="Project 4" class="object-contain w-240 h-auto rounded-2xl" style="background-color: #000;">
              <div class="absolute inset-0 bg-black bg-opacity-50 flex w-240 rounded-2xl flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-4xl text-center font-bold text-white mb-2 pb-8">
                  City Recognition for Efficient Parcel Sorting
                </h3>
                <p class="text-white text-center px-4 px-20">
                  I developed a program for a parcel sorting center using Python, OpenCV, and PyTesseract to automate parcel address detection for faster sorting.
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
<footer
  class="pt-10 text-center text-white py-5 px-5 flex justify-between items-center"
  style="background-image: url('/FooterBG.jpg');"
>
  <!-- Left Side: Logo -->
  <img src="/craven.png" alt="Logo" class="h-20 w-auto"/>

  <!-- Right Side: Social Icons -->
  <div class="flex space-x-4">
    <!-- Facebook -->
    <a href="https://www.facebook.com/raven.charles.roy.jacinto/" target="_blank" rel="noopener noreferrer">
      <svg fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.03h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.676h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
      </svg>
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com/ravenjacinto/" target="_blank" rel="noopener noreferrer">
      <svg fill="currentColor" class="h-6 w-6" viewBox="0 0 24 20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.976 1.258 2.242 1.32 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.345 2.633-1.32 3.608-.976.975-2.242 1.258-3.608 1.32-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.976-1.258-2.242-1.32-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.345-2.633 1.32-3.608.976-.975 2.242-1.258 3.608-1.32 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.691 0 8.262.014 7.052.072 5.838.131 4.701.413 3.758 1.356c-.943.943-1.225 2.08-1.284 3.294C2.014 5.738 2 6.167 2 9.5s.014 3.762.072 4.972c.059 1.214.341 2.351 1.284 3.294.943.943 2.08 1.225 3.294 1.284 1.21.058 1.639.072 4.972.072s3.762-.014 4.972-.072c1.214-.059 2.351-.341 3.294-1.284.943-.943 1.225-2.08 1.284-3.294.058-1.21.072-1.639.072-4.972s-.014-3.762-.072-4.972c-.059-1.214-.341-2.351-1.284-3.294-.943-.943-2.08-1.225-3.294-1.284C15.738.014 15.309 0 12 0z"/>
        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
        <circle cx="18.406" cy="5.594" r="1.44"/>
      </svg>
    </a>

    <!-- GitHub -->
    <a href="https://github.com/RavensAwit" target="_blank" rel="noopener noreferrer">
      <svg fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.26 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    </a>

    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/raven-jacinto-97428b348/" target="_blank" rel="noopener noreferrer">
      <svg fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.85-3.037-1.853 0-2.137 1.444-2.137 2.937v5.669H9.349V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.602 0 4.268 2.368 4.268 5.455v6.286zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.271V1.729C24 .774 23.206 0 22.225 0z"/>
      </svg>
    </a>
  </div>
</footer>
