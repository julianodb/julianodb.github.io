export const en = {
  language: { label: 'Language' },
  navigation: { primary: 'Primary navigation', home: 'Home' },
  actions: { contact: 'Contact Juliano', projects: 'View projects' },
  hero: {
    eyebrow: 'Biomedical electronics, cloud architecture, and health technology',
    title: 'Juliano Dawid Barboza',
    summary: 'Software and systems engineer in Santiago, Chile, teaching biomedical electronics while building a path toward medtech, computational biology, longevity biotech, and bioelectronic medicine.',
    visualLabel: 'Biomedical signal and circuit board visualization',
  },
  visual: { course: 'Analog Electronics for Biomedical Engineers', signal: 'PPG / EMG / airflow / audio' },
  profile: {
    eyebrow: 'Profile',
    title: 'Engineering across software, devices, and healthcare systems',
    paragraphOne: 'Juliano is a multidisciplinary engineer with more than eight years at Siemens Digital Industries Software, where he contributes to large-scale engineering platforms, JVM-based distributed systems, cloud-native architecture, AWS modernization, microservices adoption, and sustainable software architecture.',
    paragraphTwo: 'He also teaches electronics in the Biomedical Engineering program at Universidad de Santiago, mentoring student teams through working prototypes of medical devices. This portfolio is shaped for his next chapter: international healthcare technology work, computational biology, longevity biotech, medical AI, and bioelectronic medicine.',
  },
  cv: {
    eyebrow: 'Brief CV',
    title: 'Selected experience',
    items: [
      'Senior Software Engineer / Cloud Architecture Lead at Siemens Digital Industries Software, 2018-present.',
      'Lecturer for Biomedical Engineering electronics at Universidad de Santiago, 2023-present.',
      'Healthcare systems engineer at Hospital El Carmen, supporting clinical technology operations, 2017-2018.',
      'AI / Industry 4.0 engineer at Vesat, contributing to image-recognition industrial monitoring, 2017.',
      'Neurotechnology project engineer at Neurotech, working on functional electrical stimulation systems, 2016-2017.',
      'Project lead for a low-cost pulse oximeter in the Chile Medical Devices Project, 2013-2014.',
      'M.Sc. in Electrical Engineering, Universidad de Concepcion; B.Sc. in Mechatronics Engineering, Universidade de Sao Paulo.',
      'AWS Certified Solutions Architect - Professional, September 2024.',
    ],
  },
  projects: {
    eyebrow: 'Teaching portfolio',
    title: 'Biomedical device prototype projects',
    intro: 'Each semester, student teams move from analog electronics fundamentals into a working healthcare prototype, connecting circuits, sensors, signal acquisition, PCB design, and practical engineering constraints.',
    open: 'Open project',
  },
  projectDetail: {
    learningArc: 'Learning arc',
    futureContent: 'Planned content',
    futureItems: ['Student guide PDFs', 'Circuit schematics and PCB files', 'Prototype photos and validation notes', 'Clinical or physiological context', 'Reusable design lessons'],
    artifactNote: 'Source material placeholder: {{folder}}. Future documents can be published from a public assets folder and linked from this page.',
  },
  projectCatalog: {
    ppg2023: {
      title: 'Photoplethysmograph prototype',
      summary: 'Semester-long reflective PPG project in which students designed an analog medical-device prototype from LED current limiting through sensing, amplification, filtering, pulse shaping, and power regulation.',
      learning: 'Students connected light-tissue interaction, sensor conditioning, noise rejection, transistor/op-amp design, timing circuits, and power budgeting into a complete biomedical signal acquisition device.',
      detail: {
        overview: 'This project was organized as a progressive analog-electronics design sequence for a functional photoplethysmograph. The system used optical reflectance from a finger to obtain a pulse-related signal, amplified a small AC component riding on a large DC level, filtered unwanted DC and high-frequency noise, converted detected beats into uniform visual pulses, and generated regulated supply rails from a battery.',
        architectureTitle: 'System architecture',
        architecture: [
          'Optical output block: visible LEDs chosen by each group, driven from a 5 V input through calculated current-limiting resistor networks.',
          'Reflective sensor block: Vishay CNY70, combining an infrared LED and phototransistor to detect light reflected by the user finger.',
          'LED driver block: 2N2222 transistor switch sized for saturation so the signal-generation circuit did not need to source the full LED current.',
          'Amplifier 1: common-emitter BJT stage used as the first gain stage for the low-amplitude PPG AC component.',
          'Amplifier 2: non-inverting operational-amplifier stage used to continue gain toward a signal capable of driving the visual pulse output.',
          'Filter network: high-pass sections for DC rejection and low-pass sections around 35 Hz to attenuate noise such as 50 Hz mains interference.',
          'Monostable block: pulse-width normalizer that turns each detected heartbeat into a consistent light pulse of roughly 100 to 300 ms, targeting about 200 ms.',
          'Power block: 9 V battery, LM7805 fixed 5 V regulator, and a 2.5 V bias reference generated with a divider and stabilization capacitor.',
        ],
        phasesTitle: 'Phase-by-phase organization',
        phases: [
          { title: 'T1 - LED indicator circuit and PCB/stripboard preparation', goal: 'Design the visual heartbeat LED block from first principles.', details: ['Each group selected a fixed LED color and compared two or more datasheets for that LED family.', 'Students extracted maximum forward voltage, maximum reverse voltage, maximum forward current, maximum dissipated power, test current, and forward voltage at the test current.', 'They calculated the current-limiting resistance for one LED at the chosen/test current, checked resistor power dissipation against the available 1/4 W resistors, and repeated the analysis for maximum current.', 'The final resistor value had to be approximated within ±1 ohm using no more than four available resistor values in series and/or parallel.', 'The CAD exercise introduced Autodesk Eagle: update the schematic, choose 3 to 6 LEDs using 3 mm and/or 5 mm packages, run ERC, place components on the board, route manually or with autorouter, run DRC, inspect manufacturing preview, and send the design to Fusion 360 for 3D preview.'] },
          { title: 'T2 - CNY70 sensor and transistor LED driver', goal: 'Introduce the optical sensor and isolate the LEDs from the low-power signal circuit.', details: ['Students modeled the CNY70 as an infrared emitter plus phototransistor and used datasheet curves to estimate LED current, LED voltage, and collector current.', 'The reflective target from the datasheet was adapted to the real PPG context by assuming a finger produced one quarter of the reference reflectivity.', 'They evaluated phototransistor operating mode and output voltage with R1 = 150 ohm and R2 = 10 kohm.', 'For the LED driver, teams used a 2N2222 transistor and verified that collector current capacity exceeded the total LED current.', 'The base resistor was calculated for saturated switching with a forced beta of 10 and a 5 V input, then rounded to the closest available resistor and rechecked.'] },
          { title: 'T3 - First amplification stage', goal: 'Design the first gain stage for a millivolt-scale PPG signal.', details: ['The guide framed the CNY70 output as a signal with a large DC component, potentially between 1 V and 4 V, and a small AC component typically below 15 mV.', 'The target was to start amplifying that AC component toward a 5 V amplitude so the downstream LED driver could blink with the cardiac pulse.', 'Students designed a common-emitter amplifier, determining RC, the quiescent collector voltage, the divider resistors R3 and R4, and the resulting voltage gain.', 'A bias-network requirement constrained the equivalent resistance of R3 in parallel with R4 to approximately 50 kohm.', 'The transistor assumptions included very high beta for the simplified analysis, VCE(sat) around 0.7 V, and VBE around 1 V.'] },
          { title: 'T4 - Second amplification stage', goal: 'Add an op-amp gain stage and analyze interstage loading.', details: ['Students designed a non-inverting operational-amplifier stage as the second amplifier.', 'The assignment constrained the feedback network so R5 was as large as possible while maintaining more than 6 microamp through R5 when output voltage was 5 V.', 'R5 and R6 had to be selected from the same available resistor set used in earlier work.', 'Teams calculated the stage gain and then recalculated total two-stage gain while considering the output impedance of amplifier 1 and a 47 kohm input impedance for amplifier 2.', 'This phase forced students to confront loading instead of treating cascaded blocks as ideal.'] },
          { title: 'T5 - Stability and sensitivity redesign', goal: 'Fix a bias design that became too sensitive to resistor changes.', details: ['The guide showed that rounding R3 and R4 could push the common-emitter transistor out of active mode and into saturation, eliminating amplification.', 'An example demonstrated that a -12% change in R3 and +10% change in R4 could move ICQ from about 1 mA to more than 30 mA, a roughly 3000% change.', 'Students derived sensitivities of ICQ with respect to R3 and R4 and used them to predict the observed current shift.', 'The redesign increased ICQ to 5 mA and increased the Thevenin resistance target to 250 kohm while preserving the gain requirement.', 'Teams were allowed to use up to two resistors in series to approximate RC, R3, and R4 more closely than with single available values.'] },
          { title: 'T6 - DC rejection and noise filtering', goal: 'Shape the frequency response around the physiology of pulse measurement.', details: ['The project identified the useful cardiac signal as typically around 1 to 2 Hz.', 'High-pass filters were specified around 0.7 Hz to remove DC while keeping the settling time acceptable; the guide notes about 3 seconds to stabilize at this cutoff.', 'Low-pass filtering was specified around 35 Hz to reduce non-measurement noise, including 50 Hz mains interference, without removing the pulse waveform.', 'Filter 1 used the input coupling capacitor C1 together with amplifier 1 input impedance.', 'Filter 2 used amplifier 1 output impedance with capacitor CR.', 'Filter 3 combined the non-inverting amplifier, coupling capacitor C2, Rbias of 570 kohm, and added CG and CF to set high-pass and low-pass behavior.'] },
          { title: 'T7 - Monostable pulse normalizer', goal: 'Convert variable heartbeat detections into consistent visual pulses.', details: ['After T1 to T6, the guide states that the design was already sufficient to fabricate a functional photoplethysmograph if amplifier 2 was connected directly to the LED driver.', 'The monostable block was introduced because raw pulse widths could vary, for example 300 ms, 500 ms, or 700 ms depending on sensor waveform shape.', 'The desired behavior was a consistent LED-on interval of roughly 200 ms after each detected heartbeat, making manual pulse counting easier.', 'Students designed R7, R8, R9, R10, C3, and C4 from available parts, with ceramic capacitors required.', 'Constraints included R8/R9 = 10, maximum current through R10 no greater than 1 mA, a 2.5 V bias reference, and Schottky diode forward voltage around 0.3 V when needed.'] },
          { title: 'T8 - Power supply, bias reference, BOM, and final integration', goal: 'Close the design as a complete battery-powered device.', details: ['The final phase replaced the assumed ideal 5 V source with a real 9 V battery and voltage regulation stage.', 'Students used the LM7805 datasheet fixed-output regulator circuit and selected recommended capacitors from the available capacitor list.', 'They estimated regulator efficiency at a 9 V battery voltage.', 'As an extra analysis, they estimated total current consumption with LEDs off and on, including the CNY70, Q2 bias current, op-amp quiescent current, and a 20% LED-on duty cycle based on 200 ms per 1000 ms.', 'They designed a Vbias = 2.5 V reference using a voltage divider plus capacitor, requiring a low cutoff frequency below 0.5 Hz, settling to 90% in under 11 seconds, Cbias between 1 microfarad and 100 microfarad, and available resistor/capacitor values.', 'The final deliverable included the complete circuit, correction of pending filter values, and a bill of materials with passive values and part numbers: LM385 dual op-amp, 1N5819 Schottky diodes, MPSA13 for Q2, and 2N2222 for Q3.'] },
        ],
        technicalTitle: 'Technical constraints and component set',
        technicalHighlights: [
          'Nominal system supply: 5 V, eventually generated from a 9 V battery through an LM7805 regulator.',
          'Sensor front end: CNY70 reflective optical sensor, using finger reflectance rather than the datasheet reference card; finger reflectance was approximated as one quarter of the reference condition.',
          'Physiological band of interest: pulse-related signal around 1 to 2 Hz.',
          'Signal scale problem: CNY70 output could contain 1 to 4 V DC with an AC component below 15 mV, motivating AC coupling, high gain, and careful filtering.',
          'Noise strategy: DC removal through high-pass filters around 0.7 Hz and high-frequency attenuation through low-pass behavior around 35 Hz, partly to reject 50 Hz mains interference.',
          'Discrete design discipline: resistor and capacitor values were limited to provided lab inventories, so every calculated value had to be mapped to real parts and then re-evaluated.',
          'Build path: students moved from calculation and simulation-oriented design into physical stripboard assembly, soldering, debugging, and ownership of a working prototype.',
          'Power analysis: final work included regulator efficiency, current consumption in LED-off and LED-on states, average current under duty cycle assumptions, and battery-life estimation for a 600 mAh 9 V battery.',
        ],
        componentsTitle: 'From circuit design to student-owned prototypes',
        componentsIntro: 'The semester did not stop at analysis. Student teams assembled the designed PPG electronics in the lab, mostly soldering the selected through-hole parts onto stripboards, debugging the signal path, and keeping the resulting prototypes as their own built artifacts.',
        organizationTitle: 'Teaching and delivery model',
        organization: [
          'The semester was intentionally decomposed into small, assessable engineering essays, each adding one subsystem to the same device, and culminated in a physical build rather than a paper-only design.',
          'Students repeatedly moved between datasheets, hand calculations, available component inventories, circuit behavior, and implementation constraints.',
          'The project made earlier decisions matter later: LED current affected the driver, sensor output affected amplification, amplifier impedance affected filters, and pulse shape motivated the monostable.',
          'Assessment emphasized showing calculations and engineering reasoning, not only reporting final component values.',
          'Every student team fabricated the circuit physically, mostly by soldering through-hole components on stripboard; the finished prototype belonged to the students and could be taken home.',
        ],
      },
      componentEyebrow: 'Prototype build',
      componentImageAlt: 'Stripboard photoplethysmograph prototype with LEDs, resistors, capacitors, CNY70 sensor, transistors, op-amp, regulator, 9V battery clip, and jumper wires.',
      phaseImages: {
        t1: 'LED current-limiting circuit diagram',
        t2: 'CNY70 reflective sensor circuit diagram',
        t3: 'Common-emitter amplifier circuit diagram',
        t4: 'Non-inverting operational amplifier circuit diagram',
        t5: 'Integrated photoplethysmograph circuit diagram used for sensitivity redesign',
        t6: 'Band-pass filter around the non-inverting amplifier',
        t7: 'Monostable multivibrator circuit diagram',
        t8: 'Half-supply bias divider circuit diagram'
},
    },
    emg2023: {
      "title": "Electromyography prototype",
      "summary": "Portable surface-EMG project that guided students from biopotential acquisition to filtering, envelope detection, LED visualization, PCB layout, and dual-rail battery power.",
      "learning": "Students connected instrumentation-amplifier design, electrode constraints, active-filter stability, envelope extraction, board fabrication, current budgeting, and medtech-style subsystem integration.",
      "detail": {
            "overview": "This semester project turned surface electromyography into a complete portable analog device: electrodes and high-input-impedance instrumentation, band-limited amplification from the 50 Hz to 500 Hz EMG band, envelope extraction, gain and offset adaptation, an eight-LED activation display, a dual-rail battery power supply, and a fabrication plan split across four physical boards.",
            "architectureTitle": "System architecture",
            "architecture": [
                  "Electrode and preamplifier board: surface electrodes feed an LM324-based instrumentation amplifier with high input impedance, powered from +5 V and -5 V rails.",
                  "Filter 1: a second-order Sallen-Key high-pass section initially designed with gain, then corrected to unity gain after the stability analysis showed oscillation risk.",
                  "Filter 2 and envelope board: low-pass filtering around the upper EMG band, a negative-envelope detector, and a second amplifier that maps muscle activation into the LED-controller input range.",
                  "LED controller board: eight 3 mm LEDs, transistor stages, and diode-generated thresholds create a progressive bar display of EMG amplitude.",
                  "Power board: a 3.7 V 18650 lithium cell and TPS65133 regulator provide the assumed +5 V and -5 V rails for the analog chain.",
                  "Fabrication architecture: the complete circuit was divided into four boards: supply, electrode plus instrumentation/filter 1, filter 2 plus envelope/amplifier 2, and LED controller plus display."
            ],
            "phasesTitle": "Phase-by-phase organization",
            "phases": [
                  {
                        "title": "T1 - Eight-LED activation display",
                        "goal": "Define the user-facing indicator before designing the biopotential front end.",
                        "details": [
                              "The prototype target was a progressive eight-LED bar: more LEDs turn on as the detected EMG amplitude increases.",
                              "Students selected 3 mm LEDs in five colors and paired each LED with a 1/4 W current-limiting resistor from the available inventory.",
                              "The phase forced early attention to forward voltage, forward current, power dissipation, resistor rounding, and a physically realizable display block."
                        ]
                  },
                  {
                        "title": "T2 - Envelope detector",
                        "goal": "Convert raw EMG oscillations into a slowly varying muscle-activation amplitude.",
                        "details": [
                              "The guide framed EMG amplitude as approximately proportional to muscle activation, so the LED display should respond to signal envelope rather than instantaneous polarity.",
                              "The detector had to work across the EMG band, specified as approximately 20 Hz to 500 Hz; the slowest component has a 50 ms period.",
                              "Students designed the RC discharge so the envelope retained at least 50% of VMAX after 50 ms while still falling to 0.1 VMAX in 500 ms or less after contraction stops.",
                              "The detector diode was later specified as SD103AWS for the final bill of materials, reducing forward-voltage loss compared with a general silicon diode."
                        ]
                  },
                  {
                        "title": "T3 - LED control thresholds",
                        "goal": "Translate envelope voltage into an ordered LED bar graph.",
                        "details": [
                              "The LED controller used transistor stages and offset diodes so each LED has a different turn-on threshold.",
                              "Students analyzed cutoff, active, and saturation behavior for the switching transistors and calculated base resistors for the first and eighth LED stages.",
                              "The expected input range was -5 V to +5 V; the first LED should be fully on near -3.3 V, computed from -5 V + VBE + 1 V.",
                              "The controller was checked at envelope-controller input values of -5, -3, -1, 1, 3, and 5 V to verify progressive activation."
                        ]
                  },
                  {
                        "title": "T4 - Instrumentation amplifier",
                        "goal": "Acquire a differential biopotential without loading the electrode interface.",
                        "details": [
                              "Because electrode output impedance is high, the first active stage was an instrumentation amplifier with high input impedance.",
                              "The design used LM324 op-amps supplied by +5 V and -5 V rails, matching the rest of the portable analog system.",
                              "Students fixed R1 = R2 = R3 = R4 = 10 kohm and R5 = R6 = 10 kohm, then selected RG from available values so the differential gain was approximately 200.",
                              "They also calculated the maximum allowed V1, V2, and V2 - V1 before LM324 output saturation, using the 3.5 V positive swing limit implied by VCC - 1.5 V.",
                              "A resistor-mismatch exercise changed one of R1 through R4 to 11 kohm, demonstrating why matching matters in instrumentation amplifiers and common-mode rejection."
                        ]
                  },
                  {
                        "title": "T5 - Amplifier 2: gain and offset adaptation",
                        "goal": "Make the envelope detector compatible with the -5 V to +5 V LED controller input.",
                        "details": [
                              "The initial envelope output was in the 0 V to 5 V range, which would incorrectly turn on several LEDs even with no EMG activity.",
                              "The detector polarity was inverted so vi follows the negative envelope, simplifying the downstream op-amp circuit.",
                              "The required relation was vo = -(R1/R2)vi - (R1/R3)5, allowing one stage to invert, amplify, and subtract an adjustable offset.",
                              "R2 and R3 were implemented as a fixed resistor in series with a 0 to 10 kohm potentiometer, giving adjustable gain and adjustable subtraction.",
                              "Component values had to keep gain roughly between 1 and 100, and voltage subtraction roughly between 2.5 V and 7.5 V, within the assignment tolerance and available resistor set."
                        ]
                  },
                  {
                        "title": "T6 - Two-filter band definition",
                        "goal": "Reject non-EMG noise while preserving the useful muscle-activity spectrum.",
                        "details": [
                              "The design target was a useful EMG band from 50 Hz to 500 Hz, narrower than the detector-analysis band and better suited for a robust classroom prototype.",
                              "Filter 1 was specified as a Sallen-Key high-pass section with f0 = 50 Hz, R1 = R2, C1 approximately 2C2, and maximum gain AVMAX = 3.",
                              "Filter 2 was specified as a Sallen-Key low-pass section with f0 = 500 Hz under the same component-ratio and available-part constraints.",
                              "Students evaluated gain at 0 Hz, 50 Hz, 160 Hz, 500 Hz, and infinity, identified the filter types, and simulated a step response to inspect dynamic behavior."
                        ]
                  },
                  {
                        "title": "T7 - Stability correction for the filters",
                        "goal": "Turn an oscillating active-filter design into a reliable signal-conditioning block.",
                        "details": [
                              "The step-response simulation of the previous filters revealed instability: the circuit could behave like an oscillator instead of a filter.",
                              "Students modeled the op-amp plus Ra/Rb as amplifier A and the R1, R2, C1, C2 network as feedback beta, then derived beta for the low-pass filter.",
                              "Using their own T6 values, they calculated the ranges of A that produce stable and unstable behavior and verified that their original gain choice was unstable.",
                              "The corrected filters reduced maximum gain to 1, using unity-gain Sallen-Key high-pass and low-pass circuits that are stable for positive R and C values."
                        ]
                  },
                  {
                        "title": "T7 extra - Board partition and PCB fabrication workflow",
                        "goal": "Move from circuit theory to manufacturable physical boards.",
                        "details": [
                              "The final EMG was split into four boards: power, electrodes plus instrumentation amplifier plus filter 1, filter 2 plus envelope detector plus amplifier 2, and LED controller plus LEDs.",
                              "Board 1 was planned for fabrication by a specialized company; boards 2 and 3 used copper boards with surface-mount components and an artisanal fabrication process; board 4 used perfboard.",
                              "The layout task focused on board 3 and required Autodesk EAGLE schematic capture plus a single-sided board layout for filter 2, envelope detector, and amplifier 2.",
                              "The board area was constrained to 1968 x 1968, design-rule checks used 10 mil minimum width and 10 mil minimum clearance, and the autorouter had to be configured with the bottom layer disabled.",
                              "Groups produced their own copper layouts, visible here as different G1, G2, and G3 board solutions for the same functional block."
                        ]
                  },
                  {
                        "title": "T8 - Dual-rail power supply and final BOM",
                        "goal": "Close the portable EMG with power regulation, energy estimates, and a complete parts list.",
                        "details": [
                              "The ideal +5 V and -5 V supplies assumed throughout the semester were replaced by a real power board based on a 3.7 V 18650 lithium cell.",
                              "Students researched the TPS65133 datasheet, identified its inputs and outputs, and drew the typical application circuit showing battery terminals, ground, +5 V, and -5 V distribution.",
                              "They listed external capacitors, resistors, and inductors required by the regulator and estimated efficiency around a 100 mA EMG load.",
                              "The current budget compared all-LEDs-off and all-LEDs-on states, included op-amp quiescent current, assumed LEDs on 50% of the measurement time, and estimated runtime for a 3.7 V, 6000 mAh cell.",
                              "The final BOM specified two LM324 packages, 1N4007 diodes for LED thresholds, SD103AWS for the envelope detector, PN2222 transistors, and all passive component values."
                        ]
                  }
            ],
            "technicalTitle": "Technical constraints and component set",
            "technicalHighlights": [
                  "Physiological target: surface EMG acquisition for muscle activation, with the conditioning chain organized around a 50 Hz to 500 Hz useful band after the filter redesign.",
                  "Input stage: LM324 instrumentation amplifier powered from +5 V and -5 V, nominal differential gain around 200, and explicit analysis of output-swing limits and resistor-matching error.",
                  "Envelope timing: at least 50% amplitude retention after 50 ms, but decay to 10% of peak within 500 ms after muscle activity stops.",
                  "Display mapping: eight LED thresholds distributed across a -5 V to +5 V control range, using diode offsets and PN2222 transistor stages.",
                  "Gain/offset stage: op-amp relation vo = -(R1/R2)vi - (R1/R3)5, with potentiometer-adjustable gain and zero-activity offset calibration.",
                  "Filter design: Sallen-Key high-pass at 50 Hz and low-pass at 500 Hz, originally with AVMAX = 3 and then corrected to unity gain after stability analysis.",
                  "Power architecture: TPS65133 converts a single 3.7 V 18650 cell into regulated +5 V and -5 V rails, with battery-life estimation based on LED duty cycle and analog current draw.",
                  "Fabrication constraints: board 3 layout limited to 1968 x 1968 with 10 mil minimum trace width and clearance, implemented as a single-sided copper layout."
            ],
            "componentsTitle": "Four boards, one portable EMG prototype",
            "componentsIntro": "The EMG moved beyond schematic exercises into a concrete build strategy. Each team saw how the system decomposed into a power module, a wearable electrode/preamplifier module, an analog processing board, and an LED display board; the board images show both instructor schematics and student-generated copper layouts.",
            "organizationTitle": "Teaching and delivery model",
            "organization": [
                  "The semester was organized as a sequence of technical essays, each one adding or correcting a subsystem that later became part of the complete EMG.",
                  "Students repeatedly had to move between physiology, datasheets, hand calculations, simulations, available lab components, and physical implementation limits.",
                  "The project intentionally included an engineering correction cycle: the active filters first met frequency-response goals but then failed stability checks, requiring redesign.",
                  "Fabrication was not optional. The final circuit was split into boards so teams could manufacture and assemble real hardware using the fabrication method appropriate to each block.",
                  "The deliverables culminated in a complete circuit, corrected values, board-level implementation planning, current budget, battery-life estimate, and bill of materials."
            ]
      },
      "componentEyebrow": "Board-level prototype",
      "componentImageAlt": "Student copper layout for one of the electromyography signal-processing boards.",
      "gallery": {
            "placa2": "Schematic of EMG board 2 with electrodes, instrumentation amplifier, and first filter.",
            "placa3": "Schematic of EMG board 3 with second filter, envelope detector, and gain/offset amplifier.",
            "g1": "Copper layout designed by group 1 for the EMG signal-processing board.",
            "g3": "Copper layout designed by group 3 for the EMG signal-processing board."
      },
      "phaseImages": {
            "t1": "Eight-LED bar display circuit diagram.",
            "t2": "Envelope detector circuit diagram.",
            "t3": "Eight-LED controller with transistor and diode threshold stages.",
            "t4": "Instrumentation amplifier circuit diagram.",
            "t5": "Available op-amp and variable-resistor materials for amplifier 2.",
            "t6": "Sallen-Key high-pass filter with gain used in the initial EMG filter design.",
            "t7": "Corrected unity-gain Sallen-Key low-pass filter.",
            "t7extra": "Student copper layout for board 3 of the EMG prototype.",
            "t8": "Instructor schematic for an EMG subsystem board used in the final hardware partition."
      }
},
    spirometer2024: { title: 'Spirometer prototype', summary: 'Respiratory measurement project for sensing airflow and estimating pulmonary function through electronics, calibration, and signal processing.', learning: 'Students combine sensor physics, analog conditioning, calibration curves, and biomedical interpretation around respiratory physiology and accessible pulmonary screening.' },
    thermometer2024: { title: 'Electronic thermometer prototype', summary: 'Temperature measurement project covering sensor selection, conditioning, calibration, uncertainty, and clinically meaningful measurement design.', learning: 'The project uses a familiar medical device to teach precision, calibration discipline, PCB-ready design, and the relationship between circuit behavior and patient-facing reliability.' },
    ppg2025: { title: 'Photoplethysmograph with fabricated PCB', summary: 'Expanded PPG project that moves beyond breadboard prototyping toward manufactured circuit boards and a more production-aware device workflow.', learning: 'Students revisit optical pulse sensing while adding fabrication constraints, board layout, documentation, assembly planning, and engineering decisions closer to medtech product development.' },
    stethoscope2025: { title: 'Digital stethoscope prototype', summary: 'Auscultation device project focused on acoustic sensing, analog audio conditioning, filtering, and the path from body sounds to digital analysis.', learning: 'The project connects classical clinical examination with modern signal acquisition, giving students a bridge toward medical AI, remote monitoring, and bioacoustic health technology.' },
  },
};


