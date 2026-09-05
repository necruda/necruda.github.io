const projects = {
  drum: {
    title: 'MINIDRUM 3000',
    tag: 'Embedded Systems',
    desc: 'A pocket-sized drum machine sequencer running on a PocketBeagle with a 2-inch OLED display. Designed for musicians who need a portable, tactile interface for recording and playback of patterns.',
    process: 'Built a multithreaded C++ audio engine with three-layer UI navigation: splash screen, file manager, and sequencer. Integrated capacitive touch pads and potentiometer dials for real-time control. Fabricated a 3D-printed enclosure and routed a custom wiring harness for reliable signal integrity.',
    results: 'Functional portable drum machine with recording, playback, and pattern management. Designed within physical footprint constraints while maintaining low power consumption. Ready for future Bluetooth MIDI expansion.',
    tech: ['PocketBeagle', 'C++', 'OLED', 'Capacitive Touch', '3D Printing'],
    images: ['images/drum_1.png', 'images/drum_machine_2.png', 'images/drum_2.png']
  },
  transponder: {
    title: 'ECLIPSE Rocket Transponder',
    tag: 'PCB Design · RF',
    desc: 'Custom 4-layer RF PCB for a 915 MHz rocket transponder with integrated GPS tracking. Designed to survive high-vibration rocket environments while maintaining reliable long-range telemetry.',
    process: 'Authored RF schematics integrating TI CC1200/CC1190 with a NEO-M9N GNSS module. Designed 4-layer stack-up with dual ground plane isolation and controlled-impedance traces. Verified with DRC and DFM checks before flight manufacturing.',
    results: 'First custom RF transponder PCB in the ECLIPSE program. Achieved 100% DRC pass rates with verified BOM reducing component costs 50%. Ready for flight-test qualification.',
    tech: ['Fusion 360 PCB', 'CC1200', 'NEO-M9N', '4-layer RF', '915 MHz'],
    images: ['images/transponder_1.png', 'images/transponder_2.png', 'images/transponder_3.png']
  },
  fsae: {
    title: 'Rice FSAE Aerodynamics',
    tag: 'CFD · Aerodynamics',
    desc: 'Founding aerodynamics lead for Rice FSAE Formula-style race car program. Established the team\'s first quantitative aero baseline through computational fluid dynamics and guided design of nose cones, undertrays, and bodywork.',
    process: 'Authoring the team\'s first Ansys Fluent SOP and running half-symmetry CFD at 20 m/s with 386k-cell domains. Directed parameterized nose cone and diffuser-equipped undertray design through three revisions, supervising baseline sidepod and bodywork modeling.',
    results: 'Established first quantitative aerodynamic baseline (93% pressure drag split identified). Completed first full aerodynamic package CAD model for the team. Ready for wind tunnel validation.',
    tech: ['Ansys Fluent', 'SolidWorks', 'CFD', 'Aerodynamics', 'Team Lead'],
    images: ['images/fsae_1.png', 'images/fsae_2.png', 'images/fsae_3.png']
  },
  robot: {
    title: 'LLM Desktop Robot',
    tag: 'Robotics · Mechatronics',
    desc: 'Object-oriented ROS2 control framework for a desktop robot powered by NVIDIA Jetson Orin Nano. Routes both UI inputs and autonomous LLM-driven actions to physical multi-DOF actuators.',
    process: 'Designed hardware abstraction layer and multi-threaded Python control architecture with CUDA optimization. Specified power distribution and bus communication schematics. Integrated real-time actuator control with language-model decision outputs.',
    results: 'Functional desktop robot framework with LLM integration. Completed hardware BOM for multi-DOF actuators and integrated sensor suites. Ready for autonomous task demonstration.',
    tech: ['Jetson Orin Nano', 'ROS2', 'Python', 'CUDA', 'PCB Design', 'LLM'],
    images: ['images/robot_1.png', 'images/robot_2.png', 'images/robot_3.png']
  }
};
