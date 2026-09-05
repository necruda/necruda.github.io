// Project modal data
const projects = {
  drum: {
    title: 'MINIDRUM 3000',
    tag: 'Embedded Systems',
    desc: 'A pocket-sized drum machine and sequencer. Designed and built a custom UI on a 2" OLED with three capacitive touch pads and three potentiometer dials, all driven by a PocketBeagle running a multithreaded audio engine. Recorded, played back, and saved patterns to onboard storage.',
    bullets: [
      'Designed a 3-screen menu system: splash → file manager → sequencer',
      'Built 3D-printed enclosure and routed a custom wiring harness',
      'Implemented record/play/pause/clear/save in C++ with multithreaded audio I/O',
      'Wrote an 8-step polyphonic sequencer with kit switching and tempo control'
    ],
    tech: ['PocketBeagle', 'C++', '2" OLED', 'Capacitive Touch', '3D Printing', 'PCB Design'],
    images: ['images/drum_1.png', 'images/drum_machine_2.png', 'images/drum_2.png']
  },
  transponder: {
    title: 'ECLIPSE Rocket Transponder',
    tag: 'PCB Design · RF',
    desc: 'Custom 4-layer RF PCB for a 915 MHz rocket transponder with GPS and long-distance communication. The first custom PCB of its kind in the ECLIPSE rocketry program. Slashed component costs 50% vs. the COTS alternative while meeting all flight-test DFM requirements.',
    bullets: [
      'Integrated TI CC1200/CC1190 RF transceivers with a NEO-M9N GNSS module',
      'Routed a 4-layer PCB with dual ground plane isolation and controlled-impedance traces',
      'Achieved 100% DRC pass rates and full DFM compliance for flight manufacturing',
      'Delivered a verified BOM that reduced component costs by 50%'
    ],
    tech: ['Fusion 360', 'KiCad', 'CC1200/CC1190', 'NEO-M9N', '915 MHz RF', '4-layer PCB'],
    images: ['images/transponder_1.png', 'images/transponder_2.png', 'images/transponder_3.png']
  },
  fsae: {
    title: 'Rice FSAE Aerodynamics Package',
    tag: 'CFD · Aerodynamics',
    desc: 'Founding Aero Lead. Built the first quantitative aerodynamic baseline for Rice FSAE by authoring the team\'s first Ansys Fluent SOP and running 386k-cell half-symmetry CFD at 20 m/s. Spearheaded the first full aerodynamic package CAD through 3 design revisions.',
    bullets: [
      'Authored Ansys Fluent SOP and executed 386k-cell half-symmetry CFD at 20 m/s',
      'Isolated a 93% pressure drag split to establish the team\'s first aero baseline',
      'Directed engineering of parameterized nose cones and diffuser-equipped undertrays',
      'Supervised baseline sidepod and bodywork modeling through 3 design revisions'
    ],
    tech: ['Ansys Fluent', 'SolidWorks', 'Onshape', 'CFD', 'Aerodynamics', 'Team Leadership'],
    images: ['images/fsae_1.png', 'images/placeholder_fsae_2.svg', 'images/placeholder_fsae_3.svg']
  },
  robot: {
    title: 'LLM Desktop Robot',
    tag: 'Robotics · Mechatronics',
    desc: 'Object-oriented, multithreaded Python and ROS2 control framework for an NVIDIA Jetson Orin Nano-based desktop robot. Routes both UI inputs and real-time LLM autonomous actions to physical actuators. Includes a custom hardware abstraction layer for multi-DOF actuators and integrated sensor suites.',
    bullets: [
      'Built object-oriented ROS2 control framework with CUDA optimization',
      'Designed power distribution and bus communication schematics',
      'Specified a complete hardware BOM for multi-DOF actuators and sensor suites',
      'Integrated LLM-driven autonomous actions with real-time actuator control'
    ],
    tech: ['NVIDIA Jetson Orin Nano', 'Python', 'ROS2', 'CUDA', 'PCB Design', 'LLM'],
    images: ['images/robot_1.png', 'images/robot_2.png', 'images/robot_3.png']
  }
};

// Modal logic
const modal = document.getElementById('projectModal');
const modalImages = document.getElementById('modalImages');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBullets = document.getElementById('modalBullets');
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
  modalBullets.innerHTML = p.bullets.map(b => `<li>${b}</li>`).join('');
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

// Subtle reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-group').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
