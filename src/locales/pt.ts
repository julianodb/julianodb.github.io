export const pt = {
  language: { label: 'Idioma' },
  navigation: { primary: 'Navegação principal', home: 'Início' },
  actions: { contact: 'Contatar Juliano', projects: 'Ver projetos' },
  hero: {
    eyebrow: 'Eletrônica biomédica, arquitetura cloud e tecnologia em saúde',
    title: 'Juliano Dawid Barboza',
    summary: 'Engenheiro de software e sistemas em Santiago, Chile, professor de eletrônica biomédica e em transição para medtech, biologia computacional, longevidade biotech e medicina bioeletrônica.',
    visualLabel: 'Visualização de sinal biomédico e placa eletrônica',
  },
  visual: { course: 'Eletrônica Analógica para Engenharia Biomédica', signal: 'PPG / EMG / fluxo / áudio' },
  profile: {
    eyebrow: 'Perfil',
    title: 'Engenharia entre software, dispositivos e sistemas de saúde',
    paragraphOne: 'Juliano é um engenheiro multidisciplinar com mais de oito anos na Siemens Digital Industries Software, contribuindo para plataformas de engenharia em grande escala, sistemas distribuídos JVM, arquitetura cloud-native, modernização em AWS, adoção de microsserviços e arquitetura de software sustentável.',
    paragraphTwo: 'Ele também leciona eletrônica no curso de Engenharia Biomédica da Universidad de Santiago, orientando equipes de estudantes em protótipos funcionais de dispositivos médicos. Este portfólio apoia sua próxima etapa: tecnologia de saúde internacional, biologia computacional, longevidade biotech, IA médica e medicina bioeletrônica.',
  },
  cv: {
    eyebrow: 'CV breve',
    title: 'Experiência selecionada',
    items: [
      'Senior Software Engineer / Cloud Architecture Lead na Siemens Digital Industries Software, 2018-presente.',
      'Professor de eletrônica para Engenharia Biomédica na Universidad de Santiago, 2023-presente.',
      'Engenheiro de sistemas de saúde no Hospital El Carmen, apoiando operações tecnológicas clínicas, 2017-2018.',
      'Engenheiro de IA / Indústria 4.0 na Vesat, contribuindo para monitoramento industrial com reconhecimento de imagens, 2017.',
      'Engenheiro de projetos de neurotecnologia na Neurotech, trabalhando em sistemas de estimulação elétrica funcional, 2016-2017.',
      'Líder de projeto de um oxímetro de pulso de baixo custo no Chile Medical Devices Project, 2013-2014.',
      'Mestrado em Engenharia Elétrica, Universidad de Concepción; Engenharia Mecatrônica, Universidade de São Paulo.',
      'AWS Certified Solutions Architect - Professional, setembro de 2024.',
    ],
  },
  projects: { eyebrow: 'Portfólio docente', title: 'Protótipos de dispositivos biomédicos', intro: 'A cada semestre, equipes passam dos fundamentos de eletrônica analógica a um protótipo funcional de saúde, conectando circuitos, sensores, aquisição de sinais, projeto PCB e restrições reais de engenharia.', open: 'Abrir projeto' },
  projectDetail: { visualSummary: 'Project image summary', learningArc: 'Arco de aprendizagem', futureContent: 'Conteúdo planejado', futureItems: ['Guias PDF para estudantes', 'Esquemáticos e arquivos PCB', 'Fotos do protótipo e notas de validação', 'Contexto clínico ou fisiológico', 'Lições reutilizáveis de projeto'], artifactNote: 'Marcador para material fonte: {{folder}}. Documentos futuros podem ser publicados em uma pasta pública de recursos e vinculados a partir desta página.' },
  projectCatalog: {
    ppg2023: {
      title: 'Protótipo de fotopletismógrafo',
      summary: 'Projeto semestral de PPG reflexiva em que estudantes desenharam um protótipo analógico desde LEDs, sensor, amplificação, filtros, monoestável e fonte de alimentação.',
      learning: 'Os estudantes conectaram interação luz-tecido, condicionamento de sensores, rejeição de ruído, projeto com transistores e op-amps, temporização e orçamento de energia em um dispositivo biomédico completo.',
      detail: {
        overview: 'O projeto foi organizado como uma sequência progressiva de eletrônica analógica para construir um fotopletismógrafo funcional. O sistema detectava luz refletida pelo dedo, amplificava uma pequena componente AC sobre um nível DC grande, filtrava DC e ruído, convertia cada batimento em um pulso visual uniforme e gerava as tensões de alimentação a partir de uma bateria.',
        architectureTitle: 'Arquitetura do sistema',
        architecture: [
          'Bloco de saída óptica: LEDs visíveis escolhidos por cada grupo, alimentados por 5 V com redes calculadas de resistores limitadores.',
          'Bloco sensor reflexivo: CNY70 da Vishay, com LED infravermelho e fototransistor para detectar luz refletida pelo dedo.',
          'Driver dos LEDs: transistor 2N2222 dimensionado para saturação, evitando que o circuito de sinal forneça toda a corrente dos LEDs.',
          'Amplificador 1: etapa BJT em emissor comum como primeira amplificação da componente AC de PPG.',
          'Amplificador 2: etapa não inversora com amplificador operacional para continuar o ganho até uma saída capaz de acionar os LEDs.',
          'Rede de filtros: seções passa-alta para remover DC e passa-baixa em torno de 35 Hz para atenuar ruído, incluindo interferência de rede de 50 Hz.',
          'Bloco monoestável: normalizador de largura de pulso para transformar cada batimento detectado em pulso de luz consistente entre 100 e 300 ms, com alvo próximo de 200 ms.',
          'Bloco de energia: bateria de 9 V, regulador fixo LM7805 para 5 V e referência de polarização de 2.5 V gerada por divisor e capacitor de estabilização.',
        ],
        phasesTitle: 'Organização por fases',
        phases: [
          { title: 'T1 - Circuito indicador com LEDs e prática de preparação de PCB', goal: 'Projetar desde princípios básicos o bloco visual que indica o batimento.', details: ['Cada grupo escolheu uma cor fixa de LED e comparou duas ou mais folhas de dados.', 'Extraíram tensão direta máxima, tensão reversa máxima, corrente direta máxima, potência dissipada máxima, corrente de teste e tensão direta na corrente de teste.', 'Calcularam a resistência limitadora para um LED, verificaram a dissipação frente a resistores de 1/4 W e repetiram a análise para corrente máxima.', 'O valor final devia ser aproximado dentro de ±1 ohm usando no máximo quatro resistores disponíveis em série e/ou paralelo.', 'A extensão de preparação introduziu Autodesk Eagle: atualizar esquemático, escolher 3 a 6 LEDs de 3 mm e/ou 5 mm, executar ERC, posicionar componentes, rotear manualmente ou com autorouter, executar DRC, revisar manufatura e visualizar a placa no Fusion 360.'] },
          { title: 'T2 - Sensor CNY70 e driver com transistor', goal: 'Introduzir o sensor óptico e isolar os LEDs do circuito de sinal.', details: ['O CNY70 foi modelado como emissor infravermelho mais fototransistor, usando curvas do datasheet para estimar corrente e tensão do LED e corrente de coletor.', 'O cartão reflexivo do datasheet foi adaptado ao caso real assumindo que o dedo produz um quarto da refletividade de referência.', 'Foi avaliado o modo de operação do fototransistor e a tensão de saída com R1 = 150 ohm e R2 = 10 kohm.', 'Para o driver foi usado um 2N2222, verificando que sua corrente máxima de coletor superava a corrente total dos LEDs.', 'A resistência de base foi calculada para comutação saturada com beta forçado de 10 e entrada de 5 V; depois foi arredondada ao valor disponível mais próximo e recalculada.'] },
          { title: 'T3 - Primeira etapa de amplificação', goal: 'Projetar a primeira etapa de ganho para uma PPG de poucos milivolts.', details: ['A guia apresentou a saída do CNY70 como sinal com DC grande, potencialmente entre 1 V e 4 V, e componente AC geralmente menor que 15 mV.', 'O objetivo era iniciar a amplificação da componente AC até uma amplitude de 5 V para acionar depois o driver dos LEDs.', 'Os estudantes projetaram um amplificador em emissor comum, determinando RC, tensão de coletor em repouso, R3, R4 e ganho de tensão.', 'Foi exigido que a resistência equivalente de R3 em paralelo com R4 fosse aproximadamente 50 kohm.', 'A análise assumiu beta muito alto, VCE(sat) próximo de 0.7 V e VBE próximo de 1 V.'] },
          { title: 'T4 - Segunda etapa de amplificação', goal: 'Adicionar uma etapa com op-amp e analisar carga entre etapas.', details: ['Foi projetado um amplificador operacional não inversor como segunda etapa.', 'A rede de realimentação devia usar R5 o maior possível mantendo mais de 6 microamp por R5 quando a saída fosse 5 V.', 'R5 e R6 precisavam ser escolhidos do mesmo conjunto de resistores disponíveis.', 'Calculou-se o ganho da etapa e depois o ganho total considerando impedância de saída do amplificador 1 e impedância de entrada de 47 kohm no amplificador 2.', 'A fase obrigou a analisar carga entre blocos em vez de assumir etapas ideais.'] },
          { title: 'T5 - Redesenho por estabilidade e sensibilidade', goal: 'Corrigir uma polarização sensível demais a variações de resistores.', details: ['A guia mostrou que arredondar R3 e R4 podia tirar o transistor da região ativa e levá-lo à saturação, eliminando a amplificação.', 'Um exemplo indicava que -12% em R3 e +10% em R4 podia mover ICQ de cerca de 1 mA para mais de 30 mA, aproximadamente 3000% de variação.', 'Os estudantes derivaram sensibilidades de ICQ em relação a R3 e R4 e as usaram para prever o deslocamento observado.', 'O redesenho aumentou ICQ para 5 mA e elevou o alvo de resistência de Thevenin para 250 kohm, preservando o requisito de ganho.', 'Foi permitido usar até dois resistores em série para aproximar melhor RC, R3 e R4.'] },
          { title: 'T6 - Remoção de DC e filtragem de ruído', goal: 'Moldar a resposta em frequência em torno da fisiologia do pulso.', details: ['O sinal cardíaco útil foi identificado tipicamente na ordem de 1 a 2 Hz.', 'Filtros passa-alta foram especificados em torno de 0.7 Hz para remover DC sem tornar excessivo o tempo de estabilização; a guia menciona cerca de 3 segundos.', 'Filtros passa-baixa foram especificados em torno de 35 Hz para reduzir ruído, incluindo interferência de 50 Hz, sem eliminar a forma de onda do pulso.', 'O filtro 1 usou o capacitor C1 de acoplamento de entrada e a impedância de entrada do amplificador 1.', 'O filtro 2 usou a impedância de saída do amplificador 1 e o capacitor CR.', 'O filtro 3 combinou o amplificador não inversor, C2, Rbias = 570 kohm, CG e CF para estabelecer comportamento passa-alta e passa-baixa.'] },
          { title: 'T7 - Monoestável normalizador de pulsos', goal: 'Converter detecções variáveis em pulsos visuais consistentes.', details: ['Depois de T1 a T6, a guia indicava que o projeto já permitia fabricar um fotopletismógrafo funcional conectando o amplificador 2 ao driver.', 'O monoestável foi adicionado porque a largura do pulso podia variar, por exemplo 300 ms, 500 ms ou 700 ms segundo a forma do sinal.', 'O comportamento desejado era acender LEDs por cerca de 200 ms após cada batimento, facilitando a contagem manual.', 'Foram projetados R7, R8, R9, R10, C3 e C4 com componentes disponíveis e capacitores cerâmicos.', 'As restrições incluíram R8/R9 = 10, corrente máxima por R10 não maior que 1 mA, referência de 2.5 V e diodos Schottky com Vf próximo de 0.3 V.'] },
          { title: 'T8 - Fonte, referência, BOM e integração final', goal: 'Fechar o desenho como dispositivo completo alimentado por bateria.', details: ['A fase final substituiu a fonte ideal de 5 V por bateria de 9 V e regulação real.', 'Foi usado o circuito recomendado do LM7805 e capacitores escolhidos da lista disponível.', 'Estimou-se a eficiência do regulador com bateria de 9 V.', 'Como extra estimou-se consumo com LEDs apagados e acesos, incluindo CNY70, corrente de polarização de Q2, corrente quiescente dos op-amps e ciclo de trabalho de 20% baseado em 200 ms por 1000 ms.', 'Foi desenhada Vbias = 2.5 V com divisor e capacitor, exigindo corte menor que 0.5 Hz, estabilização a 90% em menos de 11 segundos, Cbias entre 1 microfarad e 100 microfarad e valores disponíveis.', 'A entrega final incluiu circuito completo, correção de valores pendentes dos filtros e BOM com passivos e partes: LM385, 1N5819, MPSA13 para Q2 e 2N2222 para Q3.'] },
        ],
        technicalTitle: 'Restrições técnicas e componentes',
        technicalHighlights: ['Alimentação nominal de 5 V gerada finalmente a partir de bateria de 9 V com LM7805.', 'Sensor CNY70 reflexivo; o dedo foi aproximado como um quarto da refletividade de referência.', 'Banda fisiológica de interesse em torno de 1 a 2 Hz.', 'Problema de escala: saída do CNY70 com 1 a 4 V DC e AC menor que 15 mV.', 'Estratégia de ruído: passa-alta em torno de 0.7 Hz e passa-baixa em torno de 35 Hz para atenuar interferência de 50 Hz.', 'Disciplina de componentes reais: resistores e capacitores restritos ao inventário do laboratório e recalculados após arredondamento.', 'Caminho de construção: esquemático, layout, ERC/DRC, vista de manufatura e prévia 3D.', 'Análise de energia: eficiência, estados LED apagado/aceso, corrente média e vida de bateria de 600 mAh.'],
        componentsTitle: 'Do desenho do circuito a protótipos dos estudantes',
        componentsIntro: 'O semestre não parou na análise. As equipes montaram a eletrônica PPG desenhada no laboratório, principalmente soldando componentes through-hole em stripboards, depurando o caminho do sinal e ficando com o protótipo resultante como artefato próprio.',
        organizationTitle: 'Modelo docente e entregas',
        organization: ['O semestre foi decomposto em pequenos ensaios técnicos, cada um adicionando um subsistema ao mesmo dispositivo.', 'Os estudantes alternaram entre datasheets, cálculos manuais, inventário real, comportamento de circuito e restrições de implementação.', 'Decisões iniciais impactavam fases posteriores: corrente dos LEDs, driver, saída do sensor, amplificação, impedâncias, filtros e monoestável.', 'A avaliação priorizou cálculos e raciocínio de engenharia, não apenas valores finais.', 'A rota de preparação de fabricação aproximou o protótipo de um artefato manufaturável de tecnologia médica.'],
      },
      componentEyebrow: 'Construção do protótipo',
      componentImageAlt: 'Protótipo de fotopletismógrafo em stripboard com LEDs, resistores, capacitores, sensor CNY70, transistores, op-amp, regulador, clip de bateria de 9 V e fios.',
      phaseImages: {
        t1: 'Diagrama do circuito limitador de corrente para LED',
        t2: 'Diagrama do circuito sensor reflexivo com CNY70',
        t3: 'Diagrama do amplificador em emissor comum',
        t4: 'Diagrama do amplificador operacional não inversor',
        t5: 'Diagrama integrado do fotopletismógrafo usado no redesenho de sensibilidade',
        t6: 'Filtro passa-banda em torno do amplificador não inversor',
        t7: 'Diagrama do multivibrador monoestável',
        t8: 'Diagrama do divisor para referência de meia alimentação'
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
    spirometer2024: { title: 'Protótipo de espirômetro', summary: 'Projeto de medição respiratória para detectar fluxo de ar e estimar função pulmonar com eletrônica, calibração e processamento de sinais.', learning: 'Os estudantes combinam física de sensores, condicionamento analógico, curvas de calibração e interpretação biomédica em torno da fisiologia respiratória e triagem pulmonar acessível.' },
    thermometer2024: { title: 'Protótipo de termômetro eletrônico', summary: 'Projeto de medição de temperatura cobrindo seleção de sensores, condicionamento, calibração, incerteza e desenho de medição clinicamente significativo.', learning: 'O projeto usa um dispositivo médico familiar para ensinar precisão, disciplina de calibração, desenho pronto para PCB e relação entre comportamento do circuito e confiabilidade para pacientes.' },
    ppg2025: { title: 'Fotopletismógrafo com PCB fabricada', summary: 'Projeto PPG expandido que avança do protótipo em protoboard para placas fabricadas e um fluxo de trabalho mais próximo de produção.', learning: 'Os estudantes retomam o sensoriamento óptico de pulso incorporando restrições de fabricação, layout de placa, documentação, planejamento de montagem e decisões mais próximas do desenvolvimento medtech.' },
    stethoscope2025: { title: 'Protótipo de estetoscópio digital', summary: 'Projeto de ausculta focado em sensoriamento acústico, condicionamento de áudio analógico, filtragem e caminho dos sons corporais para análise digital.', learning: 'O projeto conecta o exame clínico clássico à aquisição moderna de sinais, criando uma ponte para IA médica, monitoramento remoto e tecnologias bioacústicas.' },
  },
};


