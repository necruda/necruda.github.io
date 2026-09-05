// Project data
const projects = {
  drum: {
    title: 'MINIDRUM 3000',
    tag: 'Embedded Systems',
    desc: 'A pocket-sized drum machine and sequencer. Designed and built a custom UI on a 2" OLED with three capacitive touch pads and three potentiometer dials, all driven by a PocketBeagle running a multithreaded audio engine. Recorded, played back, and saved patterns to onboard storage.',
    process: 'Built a multithreaded C++ audio engine with three-layer UI navigation: splash screen, file manager, and sequencer. Integrated capacitive touch pads and potentiometer dials for real-time control. Fabricated a 3D-printed enclosure and routed a custom wiring harness for reliable signal integrity.',
    results: 'Functional portable drum machine with recording, playback, and pattern management. Designed within physical footprint constraints while maintaining low power consumption. Ready for future Bluetooth MIDI expansion.',
    tech: ['PocketBeagle', 'C++', '2" OLED', 'Capacitive Touch', '3D Printing', 'PCB Design'],
    images: ['images/drum_1.png', 'images/drum_machine_2.png', 'images/drum_2.png']
  },
  transponder: {
    title: 'ECLIPSE Rocket Transponder',
    tag: 'PCB Design · RF',
    desc: 'Custom 4-layer RF PCB for a 915 MHz rocket transponder with GPS and long-distance communication. The first custom PCB of its kind in the ECLIPSE rocketry program. Slashed component costs 50% vs. the COTS alternative while meeting all flight-test DFM requirements.',
    process: 'Authored RF schematics integrating TI CC1200/CC1190 with a NEO-M9N GNSS module. Designed 4-layer stack-up with dual ground plane isolation and controlled-impedance traces. Verified with DRC and DFM checks before flight manufacturing.',
    results: 'First custom RF transponder PCB in the ECLIPSE program. Achieved 100% DRC pass rates with verified BOM reducing component costs 50%. Ready for flight-test qualification.',
    tech: ['Fusion 360', 'KiCad', 'CC1200/CC1190', 'NEO-M9N', '915 MHz RF', '4-layer PCB'],
    images: ['images/transponder_1.png', 'images/transponder_2.png', 'images/transponder_3.png']
  },
  fsae: {
    title: 'Rice FSAE Aerodynamics Package',
    tag: 'CFD · Aerodynamics',
    desc: 'Founding Aero Lead. Built the first quantitative aerodynamic baseline for Rice FSAE by authoring the team\'s first Ansys Fluent SOP and running 386k-cell half-symmetry CFD at 20 m/s. Spearheaded the first full aerodynamic package CAD through 3 design revisions.',
    process: 'Authoring the team\'s first Ansys Fluent SOP and running half-symmetry CFD at 20 m/s with 386k-cell domains. Directed parameterized nose cone and diffuser-equipped undertray design through three revisions, supervising baseline sidepod and bodywork modeling.',
    results: 'Established first quantitative aerodynamic baseline (93% pressure drag split identified). Completed first full aerodynamic package CAD model for the team. Ready for wind tunnel validation.',
    tech: ['Ansys Fluent', 'SolidWorks', 'Onshape', 'CFD', 'Aerodynamics', 'Team Leadership'],
    images: ['images/fsae_1.png', 'images/fsae_2.png', 'images/fsae_3.png']
  },
  robot: {
    title: 'LLM Desktop Robot',
    tag: 'Robotics · Mechatronics',
    desc: 'Object-oriented, multithreaded Python and ROS2 control framework for an NVIDIA Jetson Orin Nano-based desktop robot. Routes both UI inputs and real-time LLM autonomous actions to physical actuators. Includes a custom hardware abstraction layer for multi-DOF actuators and integrated sensor suites.',
    process: 'Designed hardware abstraction layer and multi-threaded Python control architecture with CUDA optimization. Specified power distribution and bus communication schematics. Integrated real-time actuator control with language-model decision outputs.',
    results: 'Functional desktop robot framework with LLM integration. Completed hardware BOM for multi-DOF actuators and integrated sensor suites. Ready for autonomous task demonstration.',
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
