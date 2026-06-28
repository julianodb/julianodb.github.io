export const es = {
  language: { label: 'Idioma' },
  navigation: { primary: 'Navegación principal', home: 'Inicio' },
  actions: { contact: 'Contactar a Juliano', projects: 'Ver proyectos' },
  hero: {
    eyebrow: 'Electrónica biomédica, arquitectura cloud y tecnología en salud',
    title: 'Juliano Dawid Barboza',
    summary: 'Ingeniero de software y sistemas en Santiago de Chile, docente de electrónica biomédica y en transición hacia medtech, biología computacional, longevidad biotech y medicina bioelectrónica.',
    visualLabel: 'Visualización de señal biomédica y placa electrónica',
  },
  visual: { course: 'Electrónica Analógica para Ingeniería Biomédica', signal: 'PPG / EMG / flujo / audio' },
  profile: {
    eyebrow: 'Perfil',
    title: 'Ingeniería entre software, dispositivos y sistemas de salud',
    paragraphOne: 'Juliano es un ingeniero multidisciplinario con más de ocho años en Siemens Digital Industries Software, donde contribuye a plataformas de ingeniería de gran escala, sistemas distribuidos JVM, arquitectura cloud-native, modernización en AWS, adopción de microservicios y arquitectura de software sostenible.',
    paragraphTwo: 'También enseña electrónica en Ingeniería Biomédica en la Universidad de Santiago, guiando equipos de estudiantes en prototipos funcionales de dispositivos médicos. Este portafolio está orientado a su próxima etapa: tecnología de salud internacional, biología computacional, longevidad biotech, IA médica y medicina bioelectrónica.',
  },
  cv: {
    eyebrow: 'CV breve',
    title: 'Experiencia seleccionada',
    items: [
      'Senior Software Engineer / Cloud Architecture Lead en Siemens Digital Industries Software, 2018-presente.',
      'Docente de electrónica para Ingeniería Biomédica en la Universidad de Santiago, 2023-presente.',
      'Ingeniero de sistemas de salud en Hospital El Carmen, apoyando operaciones tecnológicas clínicas, 2017-2018.',
      'Ingeniero de IA / Industria 4.0 en Vesat, contribuyendo a monitoreo industrial con reconocimiento de imágenes, 2017.',
      'Ingeniero de proyectos de neurotecnología en Neurotech, trabajando en sistemas de estimulación eléctrica funcional, 2016-2017.',
      'Líder de proyecto de un oxímetro de pulso de bajo costo en Chile Medical Devices Project, 2013-2014.',
      'Magíster en Ingeniería Eléctrica, Universidad de Concepción; Ingeniería Mecatrónica, Universidade de São Paulo.',
      'AWS Certified Solutions Architect - Professional, septiembre de 2024.',
    ],
  },
  projects: { eyebrow: 'Portafolio docente', title: 'Prototipos de dispositivos biomédicos', intro: 'Cada semestre, los equipos pasan de fundamentos de electrónica analógica a un prototipo funcional de salud, conectando circuitos, sensores, adquisición de señales, diseño PCB y restricciones reales de ingeniería.', open: 'Abrir proyecto' },
  projectDetail: { visualSummary: 'Project image summary', learningArc: 'Arco de aprendizaje', futureContent: 'Contenido planificado', futureItems: ['Guías PDF para estudiantes', 'Esquemáticos y archivos PCB', 'Fotos del prototipo y notas de validación', 'Contexto clínico o fisiológico', 'Lecciones reutilizables de diseño'], artifactNote: 'Marcador para material fuente: {{folder}}. Los documentos futuros pueden publicarse desde una carpeta pública de recursos y enlazarse desde esta página.' },
  projectCatalog: {
    ppg2023: {
      title: 'Prototipo de fotopletismógrafo',
      summary: 'Proyecto semestral de PPG reflectiva donde los estudiantes diseñaron un prototipo analógico desde LEDs, sensor, amplificación, filtros, monoestable y fuente de alimentación.',
      learning: 'Los estudiantes conectaron interacción luz-tejido, acondicionamiento de sensores, rechazo de ruido, diseño con transistores y op-amps, temporización y presupuesto de energía en un dispositivo biomédico completo.',
      detail: {
        overview: 'El proyecto se organizó como una secuencia progresiva de diseño de electrónica analógica para construir un fotopletismógrafo funcional. El sistema detectaba luz reflejada por el dedo, amplificaba una componente AC pequeña montada sobre un nivel DC grande, filtraba DC y ruido, convertía cada latido en un pulso visual uniforme y generaba las tensiones de alimentación desde una batería.',
        architectureTitle: 'Arquitectura del sistema',
        architecture: [
          'Bloque de salida óptica: LEDs visibles elegidos por cada grupo, alimentados desde 5 V mediante redes de resistencias limitadoras calculadas.',
          'Bloque sensor reflectivo: CNY70 de Vishay, con LED infrarrojo y fototransistor para detectar luz reflejada por el dedo.',
          'Driver de LEDs: transistor 2N2222 dimensionado para saturación, evitando que el circuito de señal entregue toda la corriente de los LEDs.',
          'Amplificador 1: etapa BJT en emisor común como primera amplificación de la componente AC de PPG.',
          'Amplificador 2: etapa no inversora con amplificador operacional para continuar la ganancia hacia una señal capaz de accionar la salida visual.',
          'Red de filtros: secciones pasoalta para remover DC y secciones pasobaja alrededor de 35 Hz para atenuar ruido, incluida interferencia de red de 50 Hz.',
          'Bloque monoestable: normalizador de ancho de pulso para transformar cada latido detectado en un pulso de luz consistente entre 100 y 300 ms, con objetivo cercano a 200 ms.',
          'Bloque de energía: batería de 9 V, regulador fijo LM7805 a 5 V y referencia de polarización de 2.5 V generada con divisor y capacitor de estabilización.',
        ],
        phasesTitle: 'Organización por fases',
        phases: [
          { title: 'T1 - Circuito indicador con LEDs y práctica de preparación de PCB', goal: 'Diseñar desde primeros principios el bloque visual que indica el latido.', details: ['Cada grupo eligió un color fijo de LED y comparó dos o más hojas de datos.', 'Extrajeron tensión directa máxima, tensión reversa máxima, corriente directa máxima, potencia máxima disipada, corriente de prueba y tensión directa a corriente de prueba.', 'Calcularon la resistencia limitadora para un LED, verificaron la potencia disipada frente a resistores de 1/4 W y repitieron el análisis para corriente máxima.', 'El valor final debía aproximarse dentro de ±1 ohm usando no más de cuatro resistencias disponibles en serie y/o paralelo.', 'La extensión de preparación introdujo Autodesk Eagle: actualizar esquemático, elegir 3 a 6 LEDs de 3 mm y/o 5 mm, ejecutar ERC, posicionar componentes, rutear manualmente o con autorouter, ejecutar DRC, revisar manufactura y visualizar la placa en Fusion 360.'] },
          { title: 'T2 - Sensor CNY70 y driver con transistor', goal: 'Introducir el sensor óptico y aislar los LEDs del circuito de señal.', details: ['El CNY70 se modeló como emisor infrarrojo más fototransistor, usando curvas de datasheet para estimar corriente y tensión del LED y corriente de colector.', 'La tarjeta reflectiva del datasheet se adaptó al caso real suponiendo que el dedo produce un cuarto de la reflectividad de referencia.', 'Se evaluó el modo de operación del fototransistor y la tensión de salida con R1 = 150 ohm y R2 = 10 kohm.', 'Para el driver se usó un 2N2222 y se verificó que su corriente máxima de colector superara la corriente total de LEDs.', 'La resistencia de base se calculó para conmutación saturada con beta forzado de 10 y entrada de 5 V; luego se redondeó al valor disponible más cercano y se recalculó.'] },
          { title: 'T3 - Primera etapa de amplificación', goal: 'Diseñar la primera etapa de ganancia para una señal PPG de pocos milivoltios.', details: ['La guía presentó la salida del CNY70 como una señal con DC grande, potencialmente entre 1 V y 4 V, y una componente AC usualmente menor a 15 mV.', 'El objetivo era iniciar la amplificación de la componente AC hacia una amplitud de 5 V para accionar luego el driver de LEDs.', 'Los estudiantes diseñaron un amplificador en emisor común, determinando RC, tensión de colector en reposo, resistores R3 y R4 y ganancia de tensión.', 'Se exigió que la resistencia equivalente de R3 en paralelo con R4 fuese aproximadamente 50 kohm.', 'El análisis asumió beta muy alto, VCE(sat) cercano a 0.7 V y VBE cercano a 1 V.'] },
          { title: 'T4 - Segunda etapa de amplificación', goal: 'Agregar una etapa con op-amp y analizar carga entre etapas.', details: ['Se diseñó un amplificador operacional no inversor como segunda etapa.', 'La red de realimentación debía usar R5 lo más grande posible manteniendo más de 6 microamp por R5 cuando la salida era 5 V.', 'R5 y R6 debían elegirse desde el mismo conjunto de resistencias disponibles.', 'Se calculó la ganancia de etapa y luego la ganancia total considerando impedancia de salida del amplificador 1 e impedancia de entrada de 47 kohm en el amplificador 2.', 'La fase obligó a analizar carga entre bloques en lugar de asumir etapas ideales.'] },
          { title: 'T5 - Rediseño por estabilidad y sensibilidad', goal: 'Corregir una polarización demasiado sensible a cambios de resistencias.', details: ['La guía mostró que redondear R3 y R4 podía sacar al transistor de región activa y llevarlo a saturación, eliminando la amplificación.', 'Un ejemplo indicaba que -12% en R3 y +10% en R4 podía mover ICQ de cerca de 1 mA a más de 30 mA, alrededor de 3000% de variación.', 'Los estudiantes derivaron sensibilidades de ICQ respecto de R3 y R4 y las usaron para predecir el desplazamiento observado.', 'El rediseño aumentó ICQ a 5 mA y elevó el objetivo de resistencia de Thevenin a 250 kohm, preservando el requisito de ganancia.', 'Se permitió usar hasta dos resistencias en serie para aproximar mejor RC, R3 y R4.'] },
          { title: 'T6 - Remoción de DC y filtrado de ruido', goal: 'Dar forma a la respuesta en frecuencia alrededor de la fisiología del pulso.', details: ['La señal cardíaca útil se identificó típicamente en el orden de 1 a 2 Hz.', 'Los filtros pasoalta se especificaron alrededor de 0.7 Hz para remover DC sin hacer excesivo el tiempo de estabilización; la guía menciona alrededor de 3 segundos.', 'Los filtros pasobaja se especificaron alrededor de 35 Hz para reducir ruido, incluida interferencia de 50 Hz, sin eliminar la forma de onda de pulso.', 'El filtro 1 usó el capacitor C1 de acoplamiento de entrada y la impedancia de entrada del amplificador 1.', 'El filtro 2 usó la impedancia de salida del amplificador 1 y el capacitor CR.', 'El filtro 3 combinó el amplificador no inversor, C2, Rbias = 570 kohm, CG y CF para establecer comportamiento pasoalta y pasobaja.'] },
          { title: 'T7 - Monoestable normalizador de pulsos', goal: 'Convertir detecciones variables en pulsos visuales consistentes.', details: ['Después de T1 a T6, la guía indicaba que el diseño ya permitía fabricar un fotopletismógrafo funcional conectando el amplificador 2 al driver.', 'El monoestable se agregó porque el ancho del pulso podía variar, por ejemplo 300 ms, 500 ms o 700 ms según la forma de la señal.', 'El comportamiento deseado era encender LEDs por cerca de 200 ms después de cada latido, facilitando el conteo manual.', 'Se diseñaron R7, R8, R9, R10, C3 y C4 con componentes disponibles y capacitores cerámicos.', 'Las restricciones incluyeron R8/R9 = 10, corriente máxima por R10 no mayor a 1 mA, referencia de 2.5 V y diodos Schottky con Vf cercano a 0.3 V.'] },
          { title: 'T8 - Fuente, referencia, BOM e integración final', goal: 'Cerrar el diseño como dispositivo completo alimentado por batería.', details: ['La fase final reemplazó la fuente ideal de 5 V por batería de 9 V y regulación real.', 'Se usó el circuito recomendado del LM7805 y se eligieron capacitores desde la lista disponible.', 'Se estimó la eficiencia del regulador con batería de 9 V.', 'Como extra se estimó consumo con LEDs apagados y encendidos, incluyendo CNY70, corriente de polarización de Q2, corriente quiescente de op-amps y ciclo útil de 20% basado en 200 ms por 1000 ms.', 'Se diseñó Vbias = 2.5 V con divisor y capacitor, exigiendo corte menor a 0.5 Hz, estabilización al 90% en menos de 11 segundos, Cbias entre 1 microfarad y 100 microfarad y valores disponibles.', 'La entrega final incluyó circuito completo, corrección de valores pendientes de filtros y BOM con pasivos y partes: LM385, 1N5819, MPSA13 para Q2 y 2N2222 para Q3.'] },
        ],
        technicalTitle: 'Restricciones técnicas y componentes',
        technicalHighlights: ['Alimentación nominal de 5 V generada finalmente desde batería de 9 V con LM7805.', 'Sensor CNY70 reflectivo; el dedo se aproximó como un cuarto de la reflectividad de referencia.', 'Banda fisiológica de interés alrededor de 1 a 2 Hz.', 'Problema de escala: salida del CNY70 con 1 a 4 V DC y AC menor a 15 mV.', 'Estrategia de ruido: pasoalta alrededor de 0.7 Hz y pasobaja alrededor de 35 Hz para atenuar interferencia de 50 Hz.', 'Disciplina de componentes reales: resistencias y capacitores restringidos al inventario del laboratorio y recalculados después del redondeo.', 'Camino de construcción: esquemático, layout, ERC/DRC, vista de manufactura y previa 3D.', 'Análisis de energía: eficiencia, estados LED apagado/encendido, corriente promedio y vida de batería de 600 mAh.'],
        componentsTitle: 'Del diseño del circuito a prototipos que los estudiantes conservaron',
        componentsIntro: 'El semestre no terminó en el análisis. Los equipos ensamblaron la electrónica PPG diseñada en el laboratorio, principalmente soldando componentes through-hole en stripboards, depurando la ruta de señal y conservando el prototipo resultante como un artefacto propio.',
        organizationTitle: 'Modelo docente y entregas',
        organization: ['El semestre se descompuso en ensayos técnicos pequeños, cada uno agregando un subsistema al mismo dispositivo.', 'Los estudiantes alternaron entre datasheets, cálculos manuales, inventario real, comportamiento de circuito y restricciones de implementación.', 'Las decisiones tempranas impactaban fases posteriores: corriente de LED, driver, salida de sensor, amplificación, impedancias, filtros y monoestable.', 'La evaluación priorizó mostrar cálculos y razonamiento de ingeniería, no solo valores finales.', 'La ruta de preparación de fabricación acercó el prototipo a un artefacto manufacturable de tecnología médica.'],
      },
      componentEyebrow: 'Construcción del prototipo',
      componentImageAlt: 'Prototipo de fotopletismógrafo en stripboard con LEDs, resistencias, capacitores, sensor CNY70, transistores, op-amp, regulador, clip de batería de 9 V y cables.',
      phaseImages: {
        t1: 'Diagrama del circuito limitador de corriente para LED',
        t2: 'Diagrama del circuito sensor reflectivo con CNY70',
        t3: 'Diagrama del amplificador en emisor común',
        t4: 'Diagrama del amplificador operacional no inversor',
        t5: 'Diagrama integrado del fotopletismógrafo usado para el rediseño de sensibilidad',
        t6: 'Filtro pasabanda alrededor del amplificador no inversor',
        t7: 'Diagrama del multivibrador monoestable',
        t8: 'Diagrama del divisor para referencia de media alimentación'
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
    spirometer2024: { title: 'Prototipo de espirómetro', summary: 'Proyecto de medición respiratoria para sensar flujo de aire y estimar función pulmonar con electrónica, calibración y procesamiento de señales.', learning: 'Los estudiantes combinan física de sensores, acondicionamiento analógico, curvas de calibración e interpretación biomédica en torno a fisiología respiratoria y tamizaje pulmonar accesible.' },
    thermometer2024: { title: 'Prototipo de termómetro electrónico', summary: 'Proyecto de medición de temperatura que cubre selección de sensores, acondicionamiento, calibración, incertidumbre y diseño de medición clínicamente significativo.', learning: 'El proyecto usa un dispositivo médico familiar para enseñar precisión, disciplina de calibración, diseño listo para PCB y relación entre comportamiento del circuito y confiabilidad para pacientes.' },
    ppg2025: { title: 'Fotopletismógrafo con PCB fabricada', summary: 'Proyecto PPG expandido que avanza del prototipado en protoboard hacia placas fabricadas y un flujo de trabajo más cercano a producción.', learning: 'Los estudiantes retoman el sensado óptico de pulso incorporando restricciones de fabricación, layout de placa, documentación, planificación de ensamblaje y decisiones más cercanas al desarrollo medtech.' },
    stethoscope2025: { title: 'Prototipo de estetoscopio digital', summary: 'Proyecto de auscultación centrado en sensado acústico, acondicionamiento de audio analógico, filtrado y transición desde sonidos corporales hacia análisis digital.', learning: 'El proyecto conecta el examen clínico clásico con adquisición moderna de señales, abriendo un puente hacia IA médica, monitoreo remoto y tecnologías bioacústicas.' },
  },
};


