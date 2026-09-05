// Project data
const projects = {
  drum: {
    title: 'Mini Drum Machine',
    tag: 'Embedded Systems',
    desc: 'Created a DIY mini drum machine and sequencer with custom UI for on-the-go finger drumming. Also paired with a complete DIY guide on Hackster.io.',
    process: 'Built the Splash Screen, File System, and Sequencer UI all from scratch using Python. Engineered the circuit with 3 capacitive touchpads, 3 dials, 3 buttons for real-time control and a 2" OLED screen for heightened interactivity. Documented all of the process between a Hackster profile and GitHub College-Projects Repo, including exactly how to wire the circuit and code it.',
    results: 'Produced a prototype DIY Mini Drum Machine that provides recording, playback, and saving functionality alongside basic sequencing features. Made a publicly accessible step-by-step DIY guide with a complete BOM to make it easy to replicate for all skill levels.',
    tech: ['PocketBeagle', 'C++', '2" OLED', 'Capacitive Touch', '3D Printing', 'PCB Design'],
    images: ['images/drum_1.png', 'images/drum_machine_2.png', 'images/drum_2.png']
  },
  transponder: {
    title: 'Model Rocket Transponder',
    tag: 'PCB Design · RF',
    desc: 'Developed the first custom-made PCB transponder with GPS and long-distance communication capabilities for ECLIPSE rockets.',
    process: 'Led a team of 6 people in designing the RF PCB, teaching them the fundamentals of circuitry and how to build a PCB from scratch on Fusion and KiCAD. Authored detailed transponder PCB schematics on Fusion with TI CC1200 and CC1190 transmitter integration. Underwent design reviews with experts in the field to correct schematics and layout decisions; which led to a stronger emphasis on test points.',
    results: 'RF PCB to be manufactured in Fall of 2026. Verified BOM reduced expected component costs by 50%. Achieved 100% DRC pass rates on Fusion.',
    tech: ['Fusion 360', 'KiCad', 'CC1200/CC1190', 'NEO-M9N', '915 MHz RF', '4-layer PCB'],
    images: ['images/transponder_1.png', 'images/transponder_2.png', 'images/transponder_3.png']
  },
  fsae: {
    title: 'Rice FSAE Aerodynamics Package',
    tag: 'CFD · Aerodynamics',
    desc: 'Spearheaded the first complete CAD model Rice FSAE\'s aerodynamic package, including a nosecone, undertray with a diffuser, side pods, and bodywork.',
    process: 'Designed the first version of the nose cone, incorporating parametrization for easy optimization of aerodynamic features. Supervised the modeling of the first iterations of the undertray with diffuser, bodywork, and side pods. Documented a detailed guide on how to conduct a complete Ansys Fluent simulation of car components.',
    results: 'Ansys Fluent FSAE simulation guide yielded the first successful half-symmetry CFD simulation of the nosecone for Rice FSAE. Created the first fully fleshed out CAD models of the Rice FSAE aerodynamic package in under a month in time for Rice\'s OEDK Showcase.',
    tech: ['Ansys Fluent', 'SolidWorks', 'Onshape', 'CFD', 'Aerodynamics', 'Team Leadership'],
    images: ['images/fsae_1.png', 'images/fsae_2.png', 'images/fsae_3.png']
  },
  robot: {
    title: 'WALL-Ez Desktop Robot',
    tag: 'Robotics · Mechatronics',
    desc: 'Working on creating a prototype for a desktop robot that can provide expression and novelty through visible motion when using LLMs.',
    process: 'Finalized a BOM for all electrical components needed to build the robot; the first prototype will only test electromechanical functionality. Currently learning C++ and CUDA to optimize GPU usage when enabling autonomous control over physical actuators. Architected the power distribution and bus communication systems for the robot.',
    results: 'Still in beginning phases of project yet so results to come soon!',
    tech: ['NVIDIA Jetson Orin Nano', 'Python', 'ROS2', 'CUDA', 'PCB Design', 'LLM'],
    images: ['images/robot_1.png', 'images/robot_2.png', 'images/robot_3.png']
  }
};

// Modal
const modal = document.getElementById('projectModal');
const modalImages = document.getElementById('modalImages');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalProcess = document.getElementById('modalProcess');
const modalResults = document.getElementById('modalResults');
const modalTech = document.getElementById('modalTech');

function openProject(key) {
  const p = projects[key];
  if (!p) return;

  modalImages.innerHTML = p.images
    .map(src => `<img src="${src}" alt="${p.title}" onerror="this.style.background='#143a2a';this.style.display='flex';this.alt='Image coming soon';">`)
    .join('');

  modalTag.textContent = p.tag;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalProcess.textContent = p.process;
  modalResults.textContent = p.results;
  modalTech.innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Wire up project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

// Close handlers
document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeProject);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeProject();
});

// Fan: tag grid with hovered card index for proper left-side fanning
// CSS ~ only selects following siblings — can't target cards to the LEFT of hover
// Solution: JS sets data-hover on grid, CSS fans left-side cards via [data-hover="N"]
const projectGrid = document.querySelector('.project-grid');
if (projectGrid) {
  const gridCards = [...projectGrid.querySelectorAll('.project-card')];
  gridCards.forEach((card, i) => {
    card.addEventListener('mouseenter', () => { projectGrid.dataset.hover = String(i); });
    card.addEventListener('mouseleave', () => { projectGrid.dataset.hover = ''; });
  });
}
