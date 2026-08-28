var PORTFOLIO_PAGE_TRANSLATIONS = {
  es: {
    "/about": [
      {
        selector: ".text-block p",
        htmls: [
          "Soy <strong class=\"bio-name\">Muhammad Ibrahim Qasmi</strong>, científico de datos e ingeniero de IA centrado en crear sistemas prácticos de aprendizaje automático. <strong class=\"bio-milestone\">Con 19 años</strong>, me convertí en el Gran Maestro de Kaggle 3x más joven de Pakistán y el primero del país en Notebooks, Discussions y Datasets, alcanzando el puesto <strong class=\"rank-one\">#1</strong> mundial. Trabajo en toda la pila de IA, desde aprendizaje automático clásico y aprendizaje profundo hasta visión por computador, sistemas RAG, aplicaciones con LLM e IA agéntica. Actualmente trabajo a tiempo completo como científico de datos en BluWhale, una startup estadounidense, y he creado más de 100 proyectos de IA en salud, educación, tecnología legal, exploración espacial y productos de datos. He participado en más de 50 hackatones, obtenido siete victorias internacionales y puestos de finalista, y acompaño a futuros científicos de datos mediante Topmate, talleres, seminarios web y programas comunitarios."
        ]
      },
      {
        selector: ".stat-item span",
        texts: ["Gran Maestro de Kaggle", "Ganador de hackatones", "Mentor de Topmate", "Proyectos de IA", "Horas de mentoría", "Clasificación global de Kaggle"]
      },
      { selector: ".stat-item strong", texts: ["3x", "7x", "Top 0,1%", "100+", "500+", "#1"] }
    ],
    "/education": [
      { selector: ".entry h2", texts: ["Licenciatura en Tecnología de la Información (En curso)"] },
      { selector: ".entry-meta", texts: ["Universidad Bahauddin Zakariya, Multan"] },
      {
        selector: ".entry-note",
        htmls: [
          "<strong>Estado:</strong> En curso",
          "<strong>Enfoque:</strong> Inteligencia artificial, ciencia de datos e ingeniería de software.",
          "Un programa integral de tecnología de la información con estudio y proyectos centrados en IA, ciencia de datos y sistemas de software modernos.",
          "<strong>Aspectos académicos destacados:</strong> Buen rendimiento en asignaturas relacionadas con IA, participación activa en competiciones tecnológicas universitarias y enfoque de investigación en aplicaciones de IA para la salud."
        ]
      },
      {
        selector: ".entry-list li",
        texts: [
          "Aprendizaje automático y aprendizaje profundo",
          "Estructuras de datos y algoritmos",
          "Sistemas de gestión de bases de datos",
          "Principios de ingeniería de software",
          "Visión por computador y procesamiento del lenguaje natural",
          "Análisis estadístico y minería de datos"
        ]
      }
    ],
    "/experience": [
      { selector: ".timeline-entry h2", texts: ["Científico de datos", "Ingeniero de IA/ML", "Ingeniero de IA"] },
      { selector: ".entry-meta", texts: ["BluWhale | Tiempo completo", "reimagine.dev | Contrato", "Grinda.ai | Tiempo completo"] },
      { selector: ".entry-dates", texts: ["Marzo de 2025 - Actualidad | EE. UU. (Remoto)", "Junio de 2025 - Diciembre de 2025 | Remoto", "Octubre de 2024 - Marzo de 2025 | Corea del Sur (Remoto)"] },
      {
        selector: ".timeline-entry li",
        texts: [
          "Crear y desplegar soluciones de análisis de datos para inteligencia empresarial.",
          "Desarrollar aplicaciones full-stack con tecnologías web modernas.",
          "Crear modelos de aprendizaje automático para análisis predictivo y automatización.",
          "Colaborar con equipos multidisciplinares para entregar soluciones escalables.",
          "Optimizar el rendimiento de las aplicaciones y mantener la calidad del código de producción.",
          "Creé sistemas de IA en producción para automatización web y asistencia inteligente.",
          "Desarrollé agentes de IA que mejoraron la forma en que los usuarios navegan e interactúan con contenido web.",
          "Contribuí al desarrollo de producto, campañas de marketing y estrategia de adquisición de usuarios.",
          "Desarrollé y desplegué canalizaciones de IA para agentes conversacionales y generación de clientes potenciales.",
          "Construí servicios backend de aprendizaje automático con FastAPI y frameworks modernos.",
          "Integré LangChain para flujos avanzados de procesamiento del lenguaje natural.",
          "Optimicé el rendimiento y la escalabilidad de modelos de IA para producción."
        ]
      }
    ],
    "/projects": [
      { selector: ".intro-note", texts: ["Selección de más de 100 proyectos de IA en salud, educación, tecnología legal, exploración espacial, herramientas para desarrolladores, telecomunicaciones y productos de datos."] },
      { selector: ".section-heading", texts: ["Proyectos destacados", "Archivo de proyectos", "Habilidades técnicas"] },
      { selector: ".project-badge", texts: ["1.er puesto", "1.er puesto", "Finalista", "2.º puesto", "2.º puesto", "Top 5", "IA legal", "IA generativa"] },
      {
        selector: ".project-card p",
        texts: [
          "Plataforma de salud femenina para el seguimiento del ciclo menstrual con información impulsada por IA y recomendaciones personalizadas.",
          "Panel de salud con IA para seguir métricas vitales, programar citas y recibir orientación personalizada.",
          "Plataforma global de descubrimiento de compradores de comercio electrónico asistida por IA que conecta empresas con compradores internacionales.",
          "Proyecto de exploración de Marte que aborda retos de colonización espacial mediante agentes de IA y tecnología espacial.",
          "Plugin de WordPress que agiliza el desarrollo mediante generación y optimización automatizadas de código.",
          "Creador de vídeos cortos con IA para TikTok y YouTube Shorts con edición y efectos automatizados.",
          "Plataforma de revisión y análisis de documentos legales con IA mediante generación aumentada por recuperación.",
          "Estudio de marketing con IA para generar contenido profesional de campañas y recursos visuales."
        ]
      },
      { selector: ".project-links a:not([href*='github.com'])", texts: ["Demo en vivo", "Demo en vivo", "Demo en vivo", "Demo en vivo", "Demo en vivo", "Demo en vivo"] },
      { selector: ".project-table th", texts: ["Proyecto", "Enfoque", "Repositorio"] },
      {
        selector: ".project-table tbody td:nth-child(2)",
        texts: [
          "Creación automatizada de contenido para redes sociales", "Doctor virtual y nutricionista con GPT-4", "Monitorización infantil con visión por computador", "Compañero de bienestar mental con IA", "Análisis de contratos y protección de documentos legales", "Plataforma educativa de IA con IBM watsonx", "Generación y calificación automatizadas de exámenes", "Visualización y análisis de datos con agentes", "Agente de productividad empresarial", "Generación de clientes B2B con GPT-5", "Acceso ciudadano a servicios gubernamentales", "Resolución de problemas de telecomunicaciones con IA", "Análisis y traducción de registros de red con IA", "Resiliencia predictiva de redes", "Optimización personalizada de LLM con NVIDIA NeMo", "Coordinación multiagente en Solana"
        ]
      },
      { selector: ".skill-card h2", texts: ["Lenguajes", "Bibliotecas", "Frameworks", "Aprendizaje automático e IA", "Visualización de datos", "Plataformas y herramientas"] },
      { selector: ".profile-link a", texts: ["Explorar el perfil completo de GitHub"] }
    ],
    "/competitions": [
      { selector: ".intro-note", htmls: ["Como Gran Maestro de Kaggle 3x que ha alcanzado el puesto <strong class=\"rank-one\">#1</strong> mundial, compito en NLP, visión por computador, imágenes biomédicas, diseño de arquitecturas neuronales y aprendizaje automático aplicado."] },
      { selector: ".competition-standing strong", texts: ["1.º", "26.º", "35.º", "65.º", "80.º", "137.º", "20.º", "60.º", "70.º"] },
      { selector: ".competition-standing span", texts: ["de 164 equipos", "de 2.963 equipos", "de 3.805 equipos", "de 1.564 equipos", "de 2.674 equipos", "de 1.424 equipos", "de más de 3.700 equipos", "de más de 300 equipos", "de 450 equipos"] }
    ],
    "/coding-competitions": [
      { selector: ".intro-note", texts: ["Resultados seleccionados de competiciones globales de programación y de estilo académico."] },
      {
        selector: ".achievement-card p",
        texts: [
          "Puesto 222.º mundial y 2.º en Pakistán en la competición anual de acertijos de programación.",
          "Avancé a la Ronda 1 del evento global de programación competitiva de Meta.",
          "Puesto 65.º entre más de 500 equipos como parte de Team BeTa Degree, resolviendo tareas avanzadas de algoritmos y optimización.",
          "Reconocimiento de nivel Bronce como parte de Team BeTa Force en el desafío de programación competitiva de Berkeley.",
          "Completé todas las rondas y obtuve certificación en la competición de resolución de acertijos de Harvard."
        ]
      }
    ],
    "/hackathons": [
      { selector: ".intro-note", texts: ["He participado en más de 50 hackatones y he sido juez u organizador en más de 3 eventos importantes. A continuación se muestran hackatones y resultados seleccionados."] },
      {
        selector: ".achievement-card p",
        texts: [
          "Medalla de oro - 1.er puesto entre 836 participantes y 109 equipos.",
          "Medalla de plata - 2.º puesto entre 1.056 participantes y 126 equipos.",
          "2.º puesto por un plugin de WordPress que agiliza los flujos de desarrollo con generación automática de código y funciones de optimización.",
          "1.er puesto por la plataforma sanitaria con IA Dr. Well entre más de 100 participantes.",
          "2.º puesto con PeriodCare, centrado en el seguimiento de la salud menstrual con apoyo de IA.",
          "Ganador de la publicación más votada entre 785 equipos y 3.736 participantes.",
          "Finalista Top 6 entre 511 participantes y 63 equipos."
        ]
      },
      { selector: ".profile-link", htmls: ["Más detalles: <a href=\"https://devpost.com/oppoibrahim23\" target=\"_blank\" rel=\"noopener\">Devpost</a> y <a href=\"https://lablab.ai/u/@qasmi92\" target=\"_blank\" rel=\"noopener\">LabLab.ai</a>"] }
    ],
    "/publications": [
      { selector: ".intro-note", htmls: ["Investigación seleccionada en IA explicable para la salud, análisis forense de imágenes biomédicas y sostenibilidad. <a href=\"https://scholar.google.com/citations?user=vo4psiEAAAAJ\" target=\"_blank\" rel=\"noopener\">Ver mi perfil de Google Scholar</a>."] },
      { selector: ".entry h2", texts: ["Un marco de IA explicable multifamilia alineado clínicamente para detectar retinopatía diabética en imágenes de fondo de ojo", "Uso de características autosupervisadas congeladas para localizar falsificaciones de copiar y mover en imágenes de investigación biomédica", "IA para reducir la huella de carbono industrial", "Investigación en curso"] },
      { selector: ".entry-meta", texts: ["Muhammad Ibrahim Qasmi, Aqib Rehman Pirzada, Saira Akram Mughal | Preprints.org", "Muhammad Ibrahim Qasmi | Preprints.org", "Segundo autor | ICCAS Dubai"] },
      { selector: ".entry-dates", texts: ["21 de mayo de 2026", "Mayo de 2026", "Aceptado - 2025"] },
      {
        selector: ".entry-note",
        htmls: [
          "Clasificador binario DenseNet121 entrenado con 3.662 imágenes de fondo de ojo de APTOS 2019, con una precisión de prueba del 95,45 % y un AUC-ROC de 0,9881. El estudio compara Occlusion Sensitivity, LIME, RISE, Integrated Gradients, Grad-CAM++ y Score-CAM para obtener explicaciones clínicamente útiles.",
          "Método basado en características autosupervisadas para detectar y localizar falsificaciones de copiar y mover en imágenes de investigación biomédica, abordando el análisis de integridad científica a escala.",
          "Predicción y optimización de emisiones mediante aprendizaje automático para sistemas industriales orientados a la sostenibilidad.",
          "<strong>IA agrícola:</strong> Desarrollo de modelos avanzados para predecir el rendimiento de cultivos y tareas relacionadas.",
          "<strong>Imágenes sanitarias e interpretabilidad:</strong> Ampliación de métodos de explicación clínicamente útiles y canalizaciones de análisis de imágenes.",
          "<strong>Interpretabilidad de modelos a gran escala:</strong> Investigación de métodos fiables para comprender sistemas modernos de aprendizaje de representaciones."
        ]
      },
      { selector: ".entry .profile-link a", texts: ["Leer el preprint", "Leer el preprint"] },
      { selector: ".section-heading", texts: ["Escritura técnica"] },
      { selector: ".comp-table th", texts: ["Artículo", "Publicado", "Tema"] },
      { selector: ".comp-table tbody a", texts: ["Despliega tu primer modelo de aprendizaje automático como una API pública", "Cómo participar en competiciones de Kaggle usando MCP en VS Code", "NLP: donde las máquinas encuentran el significado", "Acelera tu instalación de Python: consigue velocidades 100 veces mayores", "Cero: el héroe que solemos pasar por alto", "29 notebooks revolucionarios de Kaggle que todo científico de datos necesita"] },
      { selector: ".comp-table tbody td:nth-child(2)", texts: ["25 ene 2025", "1 abr 2025", "22 oct 2024", "16 jul 2024", "6 jul 2024", "2024"] },
      { selector: ".comp-table tbody td:nth-child(3)", texts: ["Python, despliegue de ML", "Kaggle, MCP", "NLP, IA", "Herramientas de Python", "Matemáticas", "Kaggle, ciencia de datos"] }
    ],
    "/community-leadership": [
      {
        selector: ".achievement-card p",
        htmls: [
          "<strong>Formador y juez</strong> - Formé a más de 2.000 profesionales de ingeniería y evalué 65 equipos en un hackatón de 48 horas durante un programa de 6 semanas patrocinado por el Pakistan Engineering Council.",
          "<strong>Juez, organizador y anfitrión</strong> - Dirigí las operaciones de un hackatón nacional de innovación en IA, orienté a los equipos y evalué soluciones en múltiples categorías. <a href=\"https://webmind-innovation-hackathon.devpost.com/\" target=\"_blank\" rel=\"noopener\">Ver el evento</a>.",
          "<strong>Formador técnico y moderador</strong> - Moderé un bootcamp de DSA de 6 semanas para más de 50 estudiantes, dirigí un curso de Python de 4 semanas para más de 30 principiantes e impartí un taller intensivo de IA generativa.",
          "<strong>Ponente técnico</strong> - Impartí cuatro sesiones sobre cómo empezar en Kaggle y avanzar hasta el nivel Grandmaster para más de 200 entusiastas de la ciencia de datos.",
          "<strong>Mentor Top 0,1 %</strong> - Realicé más de 70 sesiones individuales y más de 500 horas de mentoría sobre Kaggle, crecimiento profesional en IA, estrategia de hackatones y preparación de entrevistas técnicas, con una tasa de éxito declarada del 95 %. <a href=\"https://topmate.io/ibrahim_qasmi\" target=\"_blank\" rel=\"noopener\">Reservar una sesión</a>.",
          "<strong>Voluntario de ciencia de datos</strong> (marzo-abril de 2025) - Contribuí al análisis de oportunidades económicas mediante métodos aplicados de ciencia de datos.",
          "<strong>Ponente invitado</strong> - Impartí una sesión sobre las últimas tendencias tecnológicas de 2025, con énfasis en GenAI y agentes de IA."
        ]
      }
    ]
  },
  ko: {
    "/about": [
      { selector: ".text-block p", htmls: ["저는 실용적인 머신러닝 시스템을 만드는 데이터 과학자이자 AI 엔지니어 <strong class=\"bio-name\">Muhammad Ibrahim Qasmi</strong>입니다. <strong class=\"bio-milestone\">19세에</strong> 파키스탄 최연소이자 최초로 Notebooks, Discussions, Datasets 세 분야에서 Kaggle 그랜드마스터가 되어 세계 <strong class=\"rank-one\">#1</strong> 순위에 올랐습니다. 고전적 머신러닝과 딥러닝부터 컴퓨터 비전, RAG 시스템, LLM 애플리케이션, 에이전틱 AI까지 전체 AI 스택을 다룹니다. 현재 미국 스타트업 BluWhale에서 데이터 과학자로 근무하며 의료, 교육, 법률 기술, 우주 탐사, 데이터 제품 분야에서 100개 이상의 AI 프로젝트를 만들었습니다. 50개 이상의 해커톤에 참가해 7회의 국제 우승과 결선 진출을 기록했으며, Topmate, 워크숍, 웨비나, 커뮤니티 프로그램을 통해 예비 데이터 과학자들을 멘토링하고 있습니다."] },
      { selector: ".stat-item span", texts: ["Kaggle 그랜드마스터", "해커톤 우승", "Topmate 멘토", "AI 프로젝트", "멘토링 시간", "Kaggle 세계 순위"] },
      { selector: ".stat-item strong", texts: ["3x", "7x", "상위 0.1%", "100+", "500+", "#1"] }
    ],
    "/education": [
      { selector: ".entry h2", texts: ["정보기술 학사 (재학 중)"] },
      { selector: ".entry-meta", texts: ["Bahauddin Zakariya 대학교, Multan"] },
      { selector: ".entry-note", htmls: ["<strong>상태:</strong> 재학 중", "<strong>집중 분야:</strong> 인공지능, 데이터 과학, 소프트웨어 공학.", "AI, 데이터 과학, 현대 소프트웨어 시스템을 중심으로 학습하고 프로젝트를 수행하는 종합 정보기술 과정입니다.", "<strong>학업 주요 성과:</strong> AI 관련 과목에서 우수한 성과를 거두고, 대학 기술 대회에 적극 참여하며, 의료 AI 응용 분야를 연구하고 있습니다."] },
      { selector: ".entry-list li", texts: ["머신러닝과 딥러닝", "자료구조와 알고리즘", "데이터베이스 관리 시스템", "소프트웨어 공학 원칙", "컴퓨터 비전과 자연어 처리", "통계 분석과 데이터 마이닝"] }
    ],
    "/experience": [
      { selector: ".timeline-entry h2", texts: ["데이터 과학자", "AI/ML 엔지니어", "AI 엔지니어"] },
      { selector: ".entry-meta", texts: ["BluWhale | 정규직", "reimagine.dev | 계약직", "Grinda.ai | 정규직"] },
      { selector: ".entry-dates", texts: ["2025년 3월 - 현재 | 미국 (원격)", "2025년 6월 - 2025년 12월 | 원격", "2024년 10월 - 2025년 3월 | 대한민국 (원격)"] },
      { selector: ".timeline-entry li", texts: ["비즈니스 인텔리전스를 위한 데이터 분석 솔루션을 구축하고 배포합니다.", "현대적인 웹 기술로 풀스택 애플리케이션을 개발합니다.", "예측 분석과 자동화를 위한 머신러닝 모델을 만듭니다.", "다기능 팀과 협력해 확장 가능한 솔루션을 제공합니다.", "애플리케이션 성능을 최적화하고 프로덕션 코드 품질을 유지합니다.", "웹 자동화와 지능형 지원을 위한 프로덕션 AI 시스템을 구축했습니다.", "사용자가 웹 콘텐츠를 탐색하고 상호작용하는 방식을 개선하는 AI 에이전트를 개발했습니다.", "제품 개발, 마케팅 캠페인, 사용자 확보 전략에 기여했습니다.", "대화형 에이전트와 리드 생성을 위한 AI 파이프라인을 개발하고 배포했습니다.", "FastAPI와 현대적인 프레임워크로 백엔드 머신러닝 서비스를 구축했습니다.", "고급 자연어 처리 워크플로를 위해 LangChain을 통합했습니다.", "프로덕션 환경을 위한 AI 모델 성능과 확장성을 최적화했습니다."] }
    ],
    "/projects": [
      { selector: ".intro-note", texts: ["의료, 교육, 법률 기술, 우주 탐사, 개발자 도구, 통신, 데이터 제품 분야에서 진행한 100개 이상의 AI 프로젝트 중 일부입니다."] },
      { selector: ".section-heading", texts: ["주요 프로젝트", "프로젝트 아카이브", "기술 역량"] },
      { selector: ".project-badge", texts: ["1위", "1위", "준우승", "2위", "2위", "상위 5", "법률 AI", "생성형 AI"] },
      { selector: ".project-card p", texts: ["AI 기반 인사이트와 개인화된 추천을 제공하는 생리 주기 추적 여성 건강 플랫폼입니다.", "생체 지표 추적, 진료 예약, 개인화된 안내를 제공하는 AI 건강 대시보드입니다.", "기업과 해외 구매자를 연결하는 AI 지원 글로벌 전자상거래 구매자 발굴 플랫폼입니다.", "AI 에이전트와 우주 기술로 우주 식민지화 문제를 다루는 화성 탐사 프로젝트입니다.", "자동 코드 생성과 최적화로 개발 과정을 간소화하는 WordPress 플러그인입니다.", "자동 편집과 효과를 제공하는 TikTok 및 YouTube Shorts용 AI 숏폼 영상 제작 도구입니다.", "검색 증강 생성을 활용한 AI 기반 법률 문서 검토 및 분석 플랫폼입니다.", "전문적인 캠페인 콘텐츠와 시각 자료를 생성하는 AI 마케팅 스튜디오입니다."] },
      { selector: ".project-links a:not([href*='github.com'])", texts: ["라이브 데모", "라이브 데모", "라이브 데모", "라이브 데모", "라이브 데모", "라이브 데모"] },
      { selector: ".project-table th", texts: ["프로젝트", "주요 기능", "저장소"] },
      { selector: ".project-table tbody td:nth-child(2)", texts: ["소셜 미디어 콘텐츠 자동 생성", "GPT-4 가상 의사 및 영양사", "컴퓨터 비전 기반 영아 모니터링", "AI 정신 건강 동반자", "법률 문서 보호 및 계약 분석", "IBM watsonx 기반 AI 교육 플랫폼", "시험 자동 생성 및 채점", "에이전틱 데이터 시각화 및 분석", "비즈니스 생산성 에이전트", "GPT-5 B2B 리드 생성", "정부 서비스에 대한 시민 접근", "AI 통신 문제 해결", "AI 네트워크 로그 분석 및 번역", "예측형 네트워크 복원력", "NVIDIA NeMo 기반 맞춤형 LLM 최적화", "Solana 기반 멀티에이전트 조정"] },
      { selector: ".skill-card h2", texts: ["언어", "라이브러리", "프레임워크", "머신러닝 및 AI", "데이터 시각화", "플랫폼 및 도구"] },
      { selector: ".profile-link a", texts: ["전체 GitHub 프로필 보기"] }
    ],
    "/competitions": [
      { selector: ".intro-note", htmls: ["세계 <strong class=\"rank-one\">#1</strong> 순위에 오른 3x Kaggle 그랜드마스터로서 NLP, 컴퓨터 비전, 생의학 영상, 신경망 아키텍처 설계, 응용 머신러닝 분야에서 경쟁하고 있습니다."] },
      { selector: ".competition-standing strong", texts: ["1위", "26위", "35위", "65위", "80위", "137위", "20위", "60위", "70위"] },
      { selector: ".competition-standing span", texts: ["164개 팀 중", "2,963개 팀 중", "3,805개 팀 중", "1,564개 팀 중", "2,674개 팀 중", "1,424개 팀 중", "3,700개 이상 팀 중", "300개 이상 팀 중", "450개 팀 중"] }
    ],
    "/coding-competitions": [
      { selector: ".intro-note", texts: ["세계적인 코딩 및 학술형 대회에서 거둔 주요 성과입니다."] },
      { selector: ".achievement-card p", texts: ["연례 프로그래밍 퍼즐 대회에서 세계 222위, 파키스탄 2위를 기록했습니다.", "Meta의 글로벌 경쟁 프로그래밍 대회에서 1라운드에 진출했습니다.", "Team BeTa Degree의 일원으로 500개 이상 팀 중 65위를 기록하며 고급 알고리즘 및 최적화 문제를 해결했습니다.", "Berkeley 경쟁 프로그래밍 챌린지에서 Team BeTa Force의 일원으로 브론즈 티어를 획득했습니다.", "모든 라운드를 완료하고 Harvard 퍼즐 해결 대회 인증을 획득했습니다."] }
    ],
    "/hackathons": [
      { selector: ".intro-note", texts: ["50개 이상의 해커톤에 참가했으며 3개 이상의 주요 행사에서 심사위원 또는 운영자로 활동했습니다. 아래는 주요 해커톤과 성과입니다."] },
      { selector: ".achievement-card p", texts: ["금메달 - 836명의 참가자와 109개 팀 중 1위.", "은메달 - 1,056명의 참가자와 126개 팀 중 2위.", "자동 코드 생성과 최적화 기능으로 개발 워크플로를 간소화한 WordPress 플러그인으로 2위.", "100명 이상의 참가자 중 Dr. Well AI 의료 플랫폼으로 1위.", "AI 지원 생리 건강 추적에 초점을 둔 PeriodCare로 2위.", "785개 팀과 3,736명의 참가자 중 최다 좋아요 게시물 수상.", "511명의 참가자와 63개 팀 중 상위 6위 결선 진출."] },
      { selector: ".profile-link", htmls: ["자세히 보기: <a href=\"https://devpost.com/oppoibrahim23\" target=\"_blank\" rel=\"noopener\">Devpost</a> 및 <a href=\"https://lablab.ai/u/@qasmi92\" target=\"_blank\" rel=\"noopener\">LabLab.ai</a>"] }
    ],
    "/publications": [
      { selector: ".intro-note", htmls: ["설명 가능한 의료 AI, 생의학 이미지 포렌식, 지속 가능성 분야의 주요 연구입니다. <a href=\"https://scholar.google.com/citations?user=vo4psiEAAAAJ\" target=\"_blank\" rel=\"noopener\">Google Scholar 프로필 보기</a>."] },
      { selector: ".entry h2", texts: ["안저 이미지에서 당뇨망막병증을 탐지하기 위한 임상 정렬 다중 계열 설명 가능 AI 프레임워크", "생의학 연구 이미지의 복사-이동 위조 위치 탐지를 위한 고정 자기지도 특징 활용", "산업 탄소 발자국 감축을 위한 AI", "진행 중인 연구"] },
      { selector: ".entry-meta", texts: ["Muhammad Ibrahim Qasmi, Aqib Rehman Pirzada, Saira Akram Mughal | Preprints.org", "Muhammad Ibrahim Qasmi | Preprints.org", "제2저자 | ICCAS Dubai"] },
      { selector: ".entry-dates", texts: ["2026년 5월 21일", "2026년 5월", "게재 승인 - 2025"] },
      { selector: ".entry-note", htmls: ["APTOS 2019 망막 안저 이미지 3,662장으로 학습한 DenseNet121 이진 분류기로, 테스트 정확도 95.45%와 AUC-ROC 0.9881을 달성했습니다. 임상적으로 의미 있는 설명을 위해 Occlusion Sensitivity, LIME, RISE, Integrated Gradients, Grad-CAM++, Score-CAM을 비교했습니다.", "생의학 연구 이미지에서 복사-이동 위조를 탐지하고 위치를 찾는 자기지도 특징 기반 방법으로, 대규모 연구 무결성 분석을 다룹니다.", "지속 가능성 중심 산업 시스템을 위한 머신러닝 기반 배출량 예측 및 최적화 연구입니다.", "<strong>농업 AI:</strong> 작물 수확량과 관련 예측 작업을 위한 고급 모델을 개발하고 있습니다.", "<strong>의료 영상 및 해석 가능성:</strong> 임상적으로 유용한 설명 방법과 이미지 분석 파이프라인을 확장하고 있습니다.", "<strong>대규모 모델 해석 가능성:</strong> 현대 표현 학습 시스템을 이해하기 위한 신뢰할 수 있는 방법을 연구하고 있습니다."] },
      { selector: ".entry .profile-link a", texts: ["프리프린트 읽기", "프리프린트 읽기"] },
      { selector: ".section-heading", texts: ["기술 글쓰기"] },
      { selector: ".comp-table th", texts: ["글", "게시일", "주제"] },
      { selector: ".comp-table tbody a", texts: ["첫 머신러닝 모델을 공개 API로 배포하기", "VS Code에서 MCP로 Kaggle 대회 제출하기", "NLP: 기계와 의미가 만나는 곳", "Python 설치 속도를 100배 높이는 방법", "0: 우리가 자주 간과하는 영웅", "모든 데이터 과학자에게 필요한 혁신적인 Kaggle 노트북 29개"] },
      { selector: ".comp-table tbody td:nth-child(2)", texts: ["2025년 1월 25일", "2025년 4월 1일", "2024년 10월 22일", "2024년 7월 16일", "2024년 7월 6일", "2024"] },
      { selector: ".comp-table tbody td:nth-child(3)", texts: ["Python, ML 배포", "Kaggle, MCP", "NLP, AI", "Python 도구", "수학", "Kaggle, 데이터 과학"] }
    ],
    "/community-leadership": [
      { selector: ".achievement-card p", htmls: ["<strong>강사 및 심사위원</strong> - Pakistan Engineering Council이 후원한 6주 프로그램에서 2,000명 이상의 엔지니어를 교육하고 48시간 해커톤의 65개 팀을 심사했습니다.", "<strong>심사위원, 운영자 및 진행자</strong> - 전국 AI 혁신 해커톤 운영을 이끌고 팀을 멘토링했으며 여러 트랙의 솔루션을 평가했습니다. <a href=\"https://webmind-innovation-hackathon.devpost.com/\" target=\"_blank\" rel=\"noopener\">행사 보기</a>.", "<strong>기술 강사 및 진행자</strong> - 50명 이상의 학생을 위한 6주 DSA 부트캠프를 진행하고, 30명 이상의 초보자를 위한 4주 Python 과정을 이끌며, 집중 생성형 AI 워크숍을 제공했습니다.", "<strong>기술 연사</strong> - 200명 이상의 데이터 과학 학습자를 대상으로 Kaggle 시작부터 Grandmaster 성장 과정까지 네 차례 세션을 진행했습니다.", "<strong>상위 0.1% 멘토</strong> - Kaggle, AI 커리어 성장, 해커톤 전략, 기술 면접 준비에 대해 70회 이상의 일대일 세션과 500시간 이상의 멘토링을 진행했으며, 보고된 성공률은 95%입니다. <a href=\"https://topmate.io/ibrahim_qasmi\" target=\"_blank\" rel=\"noopener\">세션 예약</a>.", "<strong>데이터 과학 자원봉사자</strong> (2025년 3월-4월) - 응용 데이터 과학 방법을 활용한 경제적 기회 분석에 기여했습니다.", "<strong>초청 연사</strong> - GenAI와 AI 에이전트를 중심으로 2025년 최신 기술 동향 세션을 진행했습니다."] }
    ]
  }
};
