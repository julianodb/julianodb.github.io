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
    spirometer2024: {
      "title": "Spirometer prototype",
      "summary": "Electronic spirometer project that measures peak expiratory flow and one-second forced expiratory volume using thermal flow sensing, analog memory, timing logic, PCB design, and surface-mount assembly.",
      "learning": "Students combined respiratory physiology, thermal sensing, analog computation, capacitor-based memory, reset/timing circuits, dual-rail power, EAGLE PCB completion, and reflow assembly into a clinically motivated medtech prototype.",
      "detail": {
            "overview": "This project guided student teams through the design and fabrication of an electronic spirometer: a device that converts exhaled airflow into voltages representing peak expiratory flow (PEF) and forced expiratory volume in one second (FEV1). The design combined thermal flow sensing, analog subtraction and filtering, peak detection, integration, sample-and-hold timing, reset logic, dual-rail power, and surface-mount PCB assembly.",
            "architectureTitle": "System architecture",
            "architecture": [
                  "Measurement block: a self-heated NTC thermistor flow sensor inside a tube converts airflow into a resistance and voltage change.",
                  "Sensor amplifier block: a duplicated/inverted thermistor bridge increases sensitivity, then a difference amplifier maps v1 - v2 into a single flow-proportional voltage.",
                  "PEF block: a Schottky peak detector captures the maximum expiratory-flow voltage and holds it for display.",
                  "Baseline and subtraction block: an RC average detector estimates the zero-flow baseline; a buffered subtractor computes promedio - vi so no-flow becomes approximately zero before integration.",
                  "FEV1 block: an op-amp integrator accumulates the flow-proportional signal for one second; an LF398MX sample-and-hold freezes the measured value for display.",
                  "Timing and reset block: a pulse generator, Schmitt inverter, monostable timer, transistor trigger, peak-detector reset, and integrator reset coordinate a repeatable measurement cycle.",
                  "Power block: a 3.7 V 18650 lithium cell and TPS65133 regulator generate +5 V and -5 V rails for the analog and mixed-signal circuitry.",
                  "Display and indication block: voltage displays show PEF and FEV1, while LEDs indicate power and the one-second measurement interval."
            ],
            "phasesTitle": "Phase-by-phase organization",
            "phases": [
                  {
                        "title": "T1 - Clinical metrics, indicators, and displays",
                        "goal": "Define the user-visible spirometer behavior around PEF and FEV1.",
                        "details": [
                              "The project was introduced as a medical instrument for lung volumes and capacities, with PEF reported as a maximum expiratory-flow value and FEV1 as the volume expired during the first second.",
                              "Students decomposed the full system into measurement, PEF, FEV1, energy, reset, and one-second timer blocks.",
                              "They designed power and measurement indicator LEDs from +5 V and -5 V rails, choosing LED colors, datasheets, forward currents, resistor values, and 1/4 W power margins.",
                              "Voltage-display modules were characterized from measured currents around 15.9 mA to 18.35 mA, asking students to estimate per-segment LED current and worst-case display consumption."
                        ]
                  },
                  {
                        "title": "T2 - PEF peak detector and baseline average",
                        "goal": "Capture the maximum flow signal and estimate the zero-flow baseline.",
                        "details": [
                              "The peak detector used a Schottky diode and storage capacitor: when vi exceeds vo, the diode charges the capacitor; otherwise the capacitor holds the previous maximum.",
                              "With VF assumed near 0.4 V, students analyzed the steady output for a 10 V Thevenin step source.",
                              "The peak capacitor had to charge to 95% of its final value in under 20 ms with Rth = 500 ohm, while losing less than 0.1 V over at least 1 second under 1 microamp leakage.",
                              "The average detector used a passive RC low-pass filter to estimate the no-flow sensor output; its output should move less than 10% during a 1 second measurement but settle to 95% in under 30 seconds after power-on."
                        ]
                  },
                  {
                        "title": "T3 - Peak-detector reset and pulse generation",
                        "goal": "Clear the previous PEF measurement quickly and repeatably when the user starts a new trial.",
                        "details": [
                              "A BC846BW transistor discharges the peak-detector capacitor when RESET is active, clearing the previous maximum before a new exhalation.",
                              "The discharge target was fast but controlled: complete enough within 10 ms to 100 ms for the measurement cycle.",
                              "Students calculated minimum discharge current from their T2 capacitor value, base-current ranges from transistor beta and maximum collector current, and allowable R5 values for RESET between 0 V and 5 V.",
                              "A capacitive pulse generator made RESET transient even if the user held the button, and R4, R6, and R7 handled capacitor recovery and leakage when the transistor was off."
                        ]
                  },
                  {
                        "title": "T4 - Thermal airflow sensor and differential amplification",
                        "goal": "Convert exhaled airflow into a voltage suitable for later analog computation.",
                        "details": [
                              "The flow sensor used an NCP15XQ471E03RC NTC thermistor inside an airflow tube; airflow increases thermal dissipation, cools the self-heated thermistor, and raises its resistance.",
                              "Students related Joule heating RI^2 to dissipation coefficient in mW/degC and ambient temperature, then estimated current and Vbias for a target 330 ohm operating point.",
                              "They compared the no-blow condition with dissipation coefficient 1 mW/degC against a blowing condition modeled as 2 mW/degC.",
                              "To increase sensitivity, the sensor was duplicated and inverted so the same airflow produced +Delta V in one branch and -Delta V in the other, doubling the differential change.",
                              "A BJT differential amplifier was designed with VCC = +5 V, VEE = -5 V, IEE = 2 mA, beta around 290, VBE around 660 mV, DC output near 0 V, and AC differential gain between 10 and 15."
                        ]
                  },
                  {
                        "title": "T5 - Buffer and subtractor",
                        "goal": "Prepare the flow signal so FEV1 integration starts from a zero-flow baseline.",
                        "details": [
                              "The integrator input needed to be promedio - vi, making no-flow approximately zero and flow a negative voltage before the inverting integration stage.",
                              "Students built a subtractor using only the provided op-amp/resistor elements and selected R1 through R4 from available values while keeping maximum resistor current below 10 mA.",
                              "A buffer was added after the average detector so the subtractor would not load the baseline RC circuit.",
                              "The finite op-amp gain exercise used A = 100,000 to estimate the maximum error between the buffer input and output."
                        ]
                  },
                  {
                        "title": "T6 - Integrator and sample-and-hold for FEV1",
                        "goal": "Transform flow into a one-second volume estimate and hold it on a display.",
                        "details": [
                              "The FEV1 path integrated the baseline-corrected flow signal for one second, producing a voltage proportional to expired volume.",
                              "For a constant input vi, students derived vo after one second as a function of vi, R, and C, with vo initialized at 0 V.",
                              "The design target used a maximum measurable flow corresponding to vi = 3.3 V and selected available R and C values so the integrator output reached approximately 5 V after one second.",
                              "An LF398MX sample-and-hold froze the integrator output after the measurement window, with students analyzing LOGIC/LOGIC REFERENCE control, hold-capacitor charge time, and voltage droop from leakage."
                        ]
                  },
                  {
                        "title": "T7 - Low-pass filter and PCB preparation",
                        "goal": "Reduce high-frequency noise while moving the circuit toward fabrication.",
                        "details": [
                              "The exhalation waveform was approximated as a one-second square pulse in a two-second period, so its Fourier series energy is concentrated at low frequencies.",
                              "Students chose a cutoff frequency where harmonics contributed less than 0.1% of the fundamental energy, with the cutoff constrained to be no greater than 50 Hz.",
                              "A Sallen-Key low-pass filter with equal R and equal C values was designed using available component inventories and a cutoff tolerance of plus/minus 2 Hz.",
                              "The fabrication preparation required students to open the preliminary spirometer schematic in Autodesk EAGLE, identify every previously designed block, and fill in all resistor and capacitor values from corrected assignments.",
                              "Each group also selected a black-and-white bitmap at least 2000 x 2000 px to personalize the manufactured board."
                        ]
                  },
                  {
                        "title": "T8 - One-second timer, robust reset, and sensor redesign",
                        "goal": "Coordinate the measurement cycle and improve the sensor front end before fabrication.",
                        "details": [
                              "A monostable multivibrator generated the SAMPLE signal, staying in its semi-stable state for 0.8 s to 1.2 s after RESET was pressed.",
                              "The trigger circuit used an NPN transistor driven by RESET to activate a PNP transistor and briefly raise V+ in the monostable without loading it during normal operation.",
                              "As more circuits consumed RESET, the pulse generator was strengthened with an output amplifier and a TC4S584F Schmitt inverter, whose positive and negative thresholds were derived from the datasheet at 25 degC.",
                              "The original BJT differential amplifier was replaced by an op-amp difference amplifier with gain between 10 and 15 and resistor currents between 0.1 mA and 1 mA.",
                              "Two Vbias strategies were supported on the PCB: a fixed resistor to +5 V and a feedback/control-temperature strategy where the output drives Vbias to keep the thermistor bridge balanced."
                        ]
                  },
                  {
                        "title": "T9 - Integrator reset and dual-rail power",
                        "goal": "Finish the analog measurement cycle and replace ideal supplies with battery-powered rails.",
                        "details": [
                              "Unlike the peak-detector capacitor, the integrator capacitor is not tied to -5 V, so its reset requires a bidirectional switch rather than a single NPN discharge path.",
                              "The assignment introduced the TC4S66F analog switch, asking students to identify CONTROL pin thresholds, on-resistance at 25 degC, and discharge time from 5 V to below 0.1 V with Rreset = 0.",
                              "The same phase replaced assumed +5 V and -5 V ideal rails with a 3.7 V 18650 lithium cell and TPS65133 regulator.",
                              "Students described TPS65133 inputs/outputs, regulator topology for +5 V and -5 V, typical application components, efficiency near a 100 mA load, quiescent op-amp/display current, and battery life for a 6000 mAh cell."
                        ]
                  },
                  {
                        "title": "T10 - Surface-mount assembly and student-owned boards",
                        "goal": "Fabricate working boards using the same assembly workflow students would use on their copies.",
                        "details": [
                              "The final work was practical fabrication: each team soldered the components onto the manufactured PCB with the values their group had designed.",
                              "The process photos guided students through stencil fabrication, aligning the stencil on the board, applying solder paste, placing surface-mount components, and heating the assembled board in a conventional oven.",
                              "Students demonstrated the assembled board working to the professor before the end of the semester.",
                              "Each student fabricated and kept their own copy of the board, turning the semester design into a physical artifact they could take home."
                        ]
                  }
            ],
            "technicalTitle": "Technical constraints and component set",
            "technicalHighlights": [
                  "Clinical outputs: PEF is represented by the held maximum flow voltage; FEV1 is represented by integrating the flow-proportional voltage for one second and holding the result.",
                  "Sensor physics: self-heated NTC thermistors couple electronics to airflow through thermal dissipation; no-flow and blowing cases were modeled with dissipation coefficients of 1 mW/degC and 2 mW/degC.",
                  "Signal range: several stages assume +5 V and -5 V rails, with displays reading the resulting voltages for PEF and FEV1.",
                  "Analog memory: peak detection, average detection, integration, and sample-and-hold all rely on capacitor charge, leakage, settling time, and reset behavior.",
                  "Timing: the FEV1 measurement window is explicitly one second, generated by a monostable multivibrator with a 0.8 s to 1.2 s acceptable range.",
                  "Noise control: the airflow signal was modeled through Fourier analysis to justify a low-pass filter cutoff below 50 Hz.",
                  "Mixed implementation: the final circuit uses thermistors, Schottky diodes, BJTs, op-amps, LF398MX sample-and-hold, TC4S584F Schmitt inverter, TC4S66F analog switch, TPS65133 regulator, voltage displays, LEDs, and surface-mount passives.",
                  "Manufacturing path: students moved from hand calculations to EAGLE schematic completion, manufactured PCB, stencil-based solder-paste application, manual component placement, oven reflow, demonstration, and ownership of the fabricated board."
            ],
            "componentsTitle": "From full schematic to reflowed student hardware",
            "componentsIntro": "The spirometer was designed as a real board, not a paper-only circuit. The final schematic, top and bottom PCB views, and process photos show the route from group-specific component values to stencil, solder paste, surface-mount placement, oven reflow, demonstration, and student-owned boards.",
            "organizationTitle": "Teaching and delivery model",
            "organization": [
                  "The project was decomposed into small assignments, each responsible for a clinically meaningful or implementation-critical subsystem.",
                  "Earlier choices were reused later: capacitor values affected reset and sample-and-hold behavior, baseline averaging affected subtraction, filter design affected the final schematic, and timing logic coordinated displays and memory circuits.",
                  "The course deliberately combined physiological interpretation, analog circuit theory, datasheet work, PCB CAD, manufacturing constraints, and hands-on assembly.",
                  "Fabrication was required. Students used stencil-applied solder paste and oven reflow to assemble boards containing the values selected by their own group.",
                  "The end-of-semester artifact was a working spirometer PCB demonstrated to the professor and kept by each student."
            ]
      },
      "componentEyebrow": "Surface-mount fabrication",
      "componentImageAlt": "Spirometer PCB during solder-paste and surface-mount assembly preparation.",
      "gallery": {
            "fullSchematic": "Full electronic spirometer schematic with the complete analog measurement, timing, reset, display, and power circuits.",
            "top": "Top view of the designed spirometer printed circuit board.",
            "bottom": "Bottom view of the designed spirometer printed circuit board.",
            "stencil": "Stencil-based solder-paste preparation photo for assembling the spirometer PCB."
      },
      "phaseImages": {
            "t1": "Power indicator LED circuit using the plus and minus five volt rails.",
            "t2": "Schottky diode peak detector used to hold the maximum expiratory-flow voltage.",
            "t3": "Complete peak-detector reset and pulse-generator circuit.",
            "t4": "Duplicated and inverted thermistor flow-sensor bridge for differential sensitivity.",
            "t5": "Buffered active low-pass average detector used for the baseline signal.",
            "t6": "Op-amp integrator used to convert flow into a volume-proportional voltage.",
            "t7": "Second-order Sallen-Key low-pass filter used to attenuate high-frequency flow-signal noise.",
            "t8": "Strengthened RESET generator and circuits consuming the reset signal.",
            "t9": "Integrator with bidirectional reset switch.",
            "t10": "Surface-mount spirometer board during oven/reflow-based assembly."
      }
},
    thermometer2024: {
      "title": "Electronic thermometer prototype",
      "summary": "Low-power clinical thermometer project powered by a CR2032 cell, with analog temperature scaling, configurable thresholds, stability detection, buzzer notification, auto-off, and a shared PCB supporting five group variants.",
      "learning": "Students connected vital-sign measurement, low-power design, analog sensor linearization, comparator logic, virtual-ground circuits, filtering, timing, boost regulation, configurable PCB assembly, and hands-on validation.",
      "detail": {
            "overview": "This semester project asked five student teams to design and fabricate low-power clinical thermometer prototypes powered from a CR2032 coin cell. The device measures temperature in degrees Celsius, displays it numerically with one decimal place, detects when the reading has stabilized, sounds a short buzzer alert, indicates whether the temperature is inside or outside configurable thresholds, supports a single on/off button, and turns itself off after an adjustable delay.",
            "architectureTitle": "System architecture",
            "architecture": [
                  "Temperature sensing block: each color group used a different linear analog temperature sensor, selected from MCP9700, MCP9701, LMT87, LMT86, and LMT85 variants.",
                  "Scaling block: an op-amp difference/amplifier stage converts each sensor output into Vtemperatura = 0.1 Tc, so 100 mV represents 1 degree Celsius and 37 degC is displayed as about 3.70 V.",
                  "Display block: a voltage display module shows the scaled temperature value, while a selector on the final board lets students inspect internal signals beyond only the temperature output.",
                  "Threshold block: potentiometers set high-temperature and low-temperature thresholds; LM393LVDR rail-to-rail open-drain comparators generate VA and VB logic signals.",
                  "Indicator block: group-specific transistor logic drives a 3 mm LED either inside the normal range or outside it, depending on the group color specification.",
                  "Stability block: low-pass filtering removes high-frequency noise, a differentiator/high-pass path estimates signal change, a full-wave rectifier takes the absolute derivative, and a comparator decides when the reading is stable.",
                  "Buzzer block: a short trigger pulse and monostable multivibrator drive a CPI-1375IC-80T indicator buzzer for roughly 0.5 s when the measurement is ready.",
                  "Power and control block: a one-button latch, auto-off integrator, TPS613222A boost regulator, and CR2032 cell form a low-power portable system with adjustable automatic shutdown."
            ],
            "phasesTitle": "Phase-by-phase organization",
            "phases": [
                  {
                        "title": "T1 - Requirements, low-power indicators, adjustments, and display",
                        "goal": "Define a clinical thermometer around temperature display, thresholds, stability, and battery life.",
                        "details": [
                              "The prototype requirements included measuring temperature in degC with one decimal digit, detecting stability, sounding a ready beep, lighting a high/low/normal indicator, and supporting one-button on/off plus auto-off.",
                              "Because the power source was a CR2032 coin cell, students were asked to minimize current throughout the design.",
                              "The LED indicator used a 3 mm LED in the group color and a resistor sized for only 10% of the LED datasheet test current to reduce consumption.",
                              "Three adjustable settings were introduced: high-temperature threshold, low-temperature threshold, stability criterion, and auto-off time, all implemented with potentiometer/resistor networks constrained to microamp-level currents.",
                              "The voltage-display module was characterized from measured currents around 15.9 mA to 18.35 mA, and the display convention was established as 100 mV per degree Celsius over a 0 degC to 50 degC range."
                        ]
                  },
                  {
                        "title": "T2 - LED logic, buzzer driver, and latch foundation",
                        "goal": "Turn clinical state signals into human feedback while beginning the one-button power circuit.",
                        "details": [
                              "Each group had a truth table mapping VA, VB, temperature state, and LED behavior; green/white LEDs indicated normal temperature, while red/yellow/blue indicated outside-normal conditions.",
                              "Students selected one of seven transistor LED-driver topologies and sized MMBT3904 base resistors for saturation using forced beta near 10.",
                              "The buzzer was specified as a CPI-1375IC-80T indicator type, requiring only DC drive rather than an external AC oscillator.",
                              "A transistor driver for the buzzer was designed so VU = 5 V saturates Q3 and enables the audible alert.",
                              "The first on/off circuit used a cross-coupled transistor RS latch, introducing memory so a momentary pushbutton could eventually control persistent on/off state."
                        ]
                  },
                  {
                        "title": "T3 - Temperature sensors, stability trigger, and one-button toggle",
                        "goal": "Select the analog temperature sensor and complete the single-button control concept.",
                        "details": [
                              "Groups used different sensors: MCP9700-E/TO, MCP9701-E/TO, LMT87LPGM, LMT86LPGM, or LMT85LPGM, all based on temperature-dependent diode voltage principles.",
                              "Students derived or linearized Vout = aTc + b over the clinically important 30 degC to 45 degC range, then computed coefficients c and d for Vtemperatura = cVout + d.",
                              "The stability trigger began with an RC high-pass response to the comparator output, producing a short pulse when the stable-temperature signal rises.",
                              "R15 and C5 were selected so the pulse stayed above 2 V for at least 10 ms and at most 100 ms, and Q6 was sized for saturated switching during that interval.",
                              "The two-button latch was converted into a one-button toggle using a resistor and capacitor that preserve enough state asymmetry when the pushbutton is pressed."
                        ]
                  },
                  {
                        "title": "T4 - Comparators, thresholds, and auto-off reference",
                        "goal": "Use comparator outputs as logic interfaces for temperature range, stability, and shutdown.",
                        "details": [
                              "The LM393LVDR comparator was introduced for rail-to-rail input operation and open-drain output behavior.",
                              "Students connected threshold potentiometers and V_TEMP to comparators so VA and VB implement the group-specific LED truth table.",
                              "For the buzzer trigger, another comparator switches when the magnitude of temperature derivative falls below the stability threshold set by Rpot2.",
                              "A pull-up resistor was chosen for the trigger comparator so the positive transition charges the trigger path while respecting the LM393LVDR output current limit.",
                              "A fourth comparator detects auto-off by comparing Vauto-apagado against VREF and pulling the latch/on signal low when the timeout is reached.",
                              "Students also designed a resistor-only VREF generator below 100 microamp total current and chose a bitmap image to personalize the manufactured board."
                        ]
                  },
                  {
                        "title": "T5 - Temperature scaling amplifier and virtual ground",
                        "goal": "Convert sensor voltage into display voltage while supporting single-supply analog stages.",
                        "details": [
                              "The main scaling task was to implement Vtemperatura = cVout + d with op-amp and resistor networks, allowing less than 10 mV error from 30 degC to 45 degC.",
                              "Because exact coefficients were not always achievable with available values, students could use series/parallel combinations for R1 through R4, all at least 1 kohm.",
                              "Some later stages needed negative-going signals even though the thermometer had only a +5 V supply, so the project introduced a 2.5 V virtual ground.",
                              "A weak divider generated Vbias_weak with less than 5 microamp divider current, and Cbias was selected to settle to 99% in under 5 seconds.",
                              "The MCP6009T-E/SL op-amp buffered the virtual ground, requiring students to analyze input impedance, output impedance, and loading error."
                        ]
                  },
                  {
                        "title": "T6 - Auto-off integrator and full-wave rectifier",
                        "goal": "Build the analog timing and absolute-derivative circuits behind shutdown and stability detection.",
                        "details": [
                              "The auto-off circuit uses an integrator whose output starts at 0 V and rises linearly until it reaches VREF, with timeout Delta t = 10 VREF / (2.5 - Vo).",
                              "Students chose R31 and C7 so the adjustable Vo network from T1 controls the shutdown delay, with a minimum around one minute.",
                              "To detect stability regardless of whether temperature is rising or falling, the derivative signal must be rectified before comparison.",
                              "The full-wave rectifier was decomposed into an inverting half-wave rectifier and an inverting summing amplifier implementing vo = -(vi + 2vx), which yields vo = |vi|.",
                              "All rectifier resistors had to be available values and at least 10 kohm, keeping the design compatible with low-current operation."
                        ]
                  },
                  {
                        "title": "T7 - Low-pass filtering and practical derivative estimation",
                        "goal": "Suppress measurement noise and create a bounded stability signal.",
                        "details": [
                              "Temperature is expected to change slowly as the probe reaches thermal equilibrium with the patient, so high-frequency variation is likely noise.",
                              "Students designed a second-order Sallen-Key low-pass filter near 10 Hz, then calculated attenuation of 50 Hz mains-related interference.",
                              "A differentiator was analyzed using V_TEMP = Vfinal(1 - exp(-t/tau)), connecting the derivative output to how far the reading is from final value.",
                              "The assignment showed why a pure differentiator is dangerous: gain grows as R6 C3 omega, amplifying high-frequency noise.",
                              "Adding R5 converted the differentiator into an active high-pass filter with bounded high-frequency gain between 10 and 50, preserving stability detection without unlimited noise amplification."
                        ]
                  },
                  {
                        "title": "T8 - Ready-beep monostable and final amplifier corrections",
                        "goal": "Convert the stability event into a controlled audible notification.",
                        "details": [
                              "A monostable multivibrator was designed to turn the buzzer on for approximately 500 ms, with 100 ms tolerance, after the temperature stabilizes.",
                              "The monostable operated around the virtual ground, using +2.5 V and -2.5 V rails rather than a true dual supply.",
                              "Students selected R19, R20, R21, and C6 while limiting current through R20 below 1 mA and through R18 below 500 microamp.",
                              "The trigger output from previous work needed a PNP stage, Q7 = MMBT3906, and R17 selected for forced beta near 10 when the active-low trigger goes near -2.5 V.",
                              "The phase also corrected the temperature-scaling amplifier by assigning version A to blue/white groups and version B to green/yellow/red groups."
                        ]
                  },
                  {
                        "title": "T9 - CR2032 power, boost regulator, and configurable PCB values",
                        "goal": "Replace ideal power assumptions and finalize group-specific assembly data for the manufactured board.",
                        "details": [
                              "The final power source was a 3 V CR2032 coin cell with nominal 225 mAh capacity, making current budgeting central to the design.",
                              "Students researched the TPS613222A boost regulator, described its inputs/outputs, identified it as the +5 V generation stage, and drew the recommended application circuit with external components.",
                              "The auto-off signal V_OFF was tied into the regulator enable/disable strategy through transistor circuitry adapted from the earlier latch design.",
                              "R33 was sized so Q8 could switch enough base/gate-control current for the regulator shutdown path, using transistor saturation assumptions for Q8 and Q4.",
                              "Students estimated regulator efficiency at roughly 1 mA load, total thermometer current including IC quiescent currents, and expected battery life from a 3 V 225 mAh cell.",
                              "The three final schematic pages included optional series/parallel resistor positions and 0 ohm/open-link choices so each group could implement its corrected values and circuit variant on the same PCB."
                        ]
                  },
                  {
                        "title": "T10 - Fabrication, selector, demonstration, and measurement extras",
                        "goal": "Turn the completed design into a working student-built board.",
                        "details": [
                              "Each team soldered the components onto its manufactured PCB under supervision, using the final files and images distributed through the course platform.",
                              "The board included a selector so the display could show internal circuit signals, not only the final temperature value, making debugging and characterization more transparent.",
                              "Students demonstrated the working board to the professor before the end of the semester; the fabrication assignment also counted as the corresponding laboratory grade.",
                              "Extra characterization encouraged students to measure off-current at 3 V, on-current at 3 V, minimum and maximum auto-off delay, buzzer duration, and how Rpot2 affects the time required to declare stable temperature.",
                              "As in the previous fabrication projects, the completed boards became student-built physical artifacts rather than disposable class exercises."
                        ]
                  }
            ],
            "technicalTitle": "Technical constraints and component set",
            "technicalHighlights": [
                  "Clinical scale: Vtemperatura = 0.1 Tc, so the display reads temperature directly as voltage with 100 mV per degree Celsius and one decimal digit.",
                  "Sensor set: MCP9700, MCP9701, LMT87, LMT86, and LMT85 group variants, each linearized over 30 degC to 45 degC for clinically relevant accuracy.",
                  "Power source: 3 V CR2032 coin cell, TPS613222A boost conversion to +5 V, regulator shutdown controlled by the auto-off/latch logic, and explicit current/battery-life budgeting.",
                  "Low-power discipline: LED current was reduced to 10% of datasheet test current, potentiometer networks targeted microamp currents, and divider/reference circuits were constrained below 100 microamp where applicable.",
                  "State logic: a single pushbutton controls on/off through a transistor latch/toggle network, while auto-off can force the ON node low after an adjustable timeout.",
                  "Stability detection: low-pass filtering near 10 Hz, derivative/high-pass estimation, full-wave rectification, threshold comparison, short trigger pulse, and 0.5 s monostable buzzer notification.",
                  "Analog reference strategy: a buffered 2.5 V virtual ground allows circuits to process positive and negative excursions while powered from a single +5 V rail.",
                  "PCB flexibility: the final board exposes alternative resistor footprints, 0 ohm jumpers, open links, and amplifier topology choices so all group-specific corrected designs can share one manufactured layout."
            ],
            "componentsTitle": "A configurable clinical thermometer PCB",
            "componentsIntro": "The final board was designed to accommodate five group variants: different sensors, LED colors, threshold logic, amplifier versions, corrected resistor networks, and optional 0 ohm/open links. The three schematic sheets and top/bottom board renders show a teaching-oriented PCB that is both a working device and a map of the design decisions students made through the semester.",
            "organizationTitle": "Teaching and delivery model",
            "organization": [
                  "The course split the thermometer into ten assignments: visible outputs, state logic, sensor modeling, comparator logic, scaling, virtual ground, analog timing, filtering, power, PCB configuration, and final fabrication.",
                  "Each group had a color identity and a slightly different sensor/indicator configuration, forcing students to adapt the same architecture rather than copy a single answer.",
                  "Assignments repeatedly tied calculations to real datasheet limits: current consumption, open-drain outputs, saturation, op-amp impedance, comparator thresholds, regulator efficiency, and battery capacity.",
                  "The final PCB intentionally included configurable footprints so each team could translate its own corrected values into the same manufactured hardware platform.",
                  "Students assembled, demonstrated, characterized, and kept the fabricated thermometer boards at the end of the semester."
            ]
      },
      "componentEyebrow": "Configurable PCB",
      "componentImageAlt": "Top view of the designed electronic thermometer printed circuit board.",
      "gallery": {
            "schematic1": "First sheet of the full electronic thermometer schematic.",
            "schematic2": "Second sheet of the full electronic thermometer schematic.",
            "schematic3": "Third sheet of the full electronic thermometer schematic.",
            "top": "Top view of the designed thermometer printed circuit board.",
            "bottom": "Bottom view of the designed thermometer printed circuit board."
      },
      "phaseImages": {
            "t1": "Low-current LED indicator circuit for high/low temperature indication.",
            "t2": "Transistor driver circuit for the thermometer ready buzzer.",
            "t3": "Single-pushbutton transistor toggle circuit for on/off control.",
            "t4": "Comparator-based stability trigger circuit.",
            "t5": "Buffered virtual-ground circuit used by single-supply analog stages.",
            "t6": "Auto-off integrator circuit that generates the shutdown timing ramp.",
            "t7": "Active high-pass filter used to bound derivative gain for stability detection.",
            "t8": "Monostable multivibrator circuit that controls buzzer duration.",
            "t9": "TPS613222A regulator on/off control circuit tied to auto-off logic.",
            "t10": "Top view of the final thermometer PCB used for fabrication."
      }
},
    ppg2025: { title: 'Fotopletismógrafo con PCB fabricada', summary: 'Proyecto PPG expandido que avanza del prototipado en protoboard hacia placas fabricadas y un flujo de trabajo más cercano a producción.', learning: 'Los estudiantes retoman el sensado óptico de pulso incorporando restricciones de fabricación, layout de placa, documentación, planificación de ensamblaje y decisiones más cercanas al desarrollo medtech.' },
    stethoscope2025: { title: 'Prototipo de estetoscopio digital', summary: 'Proyecto de auscultación centrado en sensado acústico, acondicionamiento de audio analógico, filtrado y transición desde sonidos corporales hacia análisis digital.', learning: 'El proyecto conecta el examen clínico clásico con adquisición moderna de señales, abriendo un puente hacia IA médica, monitoreo remoto y tecnologías bioacústicas.' },
  },
};


