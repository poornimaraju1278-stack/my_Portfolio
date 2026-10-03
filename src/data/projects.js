export const projectsData = [
  {
    id: "bhoomirakshak-ai",
    number: "01",
    title: "BHOOMIRAKSHAK AI",
    subtitle: "AI-Based Early Warning and Landslide Risk Monitoring System",
    category: "AI / ML",
    categoryTag: "AI · LANDSLIDE RISK MONITORING · WEB",
    description: "A smart landslide risk monitoring platform designed to analyze environmental and sensor-related data, identify high-risk areas, provide alerts, and support emergency response.",
    technologies: ["Python", "FastAPI", "React", "AI", "GIS", "Sensors"],
    problemStatement: "Landslide-prone mountainous areas often lack integrated early-warning systems that consolidate GIS spatial coordinates, meteorological feeds, and ground-level telemetry before catastrophic slope failures occur.",
    approach: "Combines spatial location data, weather telemetry, IoT ground moisture sensors, and AI risk analysis into a unified dashboard interface with alert dispatch triggers.",
    architecture: [
      { step: "01", title: "Data Ingestion Layer", detail: "Aggregates GIS coordinates, weather telemetry, and ground sensor data streams." },
      { step: "02", title: "FastAPI & AI Analysis Engine", detail: "Evaluates environmental metrics against risk thresholds to compute threat indices." },
      { step: "03", title: "React Alert Dashboard", detail: "Renders real-time spatial heatmaps, alert queues, and notification dispatch triggers." }
    ],
    currentState: "Prototype / Concept development showcasing real-time risk index computation and multi-source signal fusion.",
    visualType: "risk_map",
    links: {
      github: "https://github.com/poornimaraju1278-stack",
      demo: null
    }
  },
  {
    id: "routine-recommender",
    number: "02",
    title: "ROUTINE RECOMMENDER & PRODUCTIVE PLANNER",
    subtitle: "Python-Based Intelligent Routine & Productivity Engine",
    category: "PYTHON",
    categoryTag: "PYTHON · PRODUCTIVITY · RECOMMENDATION",
    description: "A Python-based intelligent application that helps users organize routines, improve productivity, and receive personalized recommendations.",
    technologies: ["Python", "Recommendation Logic", "Productivity Planning", "Data Handling"],
    problemStatement: "Traditional task managers act as static checklists without adapting to a user's peak focus hours, task difficulty, or daily habit consistency.",
    approach: "Uses algorithmic scheduling logic in Python to parse user productivity profiles, habit logs, and task urgency, generating optimized focus blocks and personalized routine recommendations.",
    architecture: [
      { step: "01", title: "Profile & Preference Parsing", detail: "Captures peak focus windows, task weights, and user habit history." },
      { step: "02", title: "Algorithmic Task Allocator", detail: "Schedules focus blocks using heuristic energy matching and break optimization." },
      { step: "03", title: "Habit Streak Engine", detail: "Tracks execution consistency and dynamically updates future daily recommendations." }
    ],
    currentState: "Functional Python software module with structured data handling and customizable task heuristic rules.",
    visualType: "planner_grid",
    links: {
      github: "https://github.com/poornimaraju1278-stack",
      demo: null
    }
  },
  {
    id: "phone-detection-alert",
    number: "03",
    title: "PHONE DETECTION & ALERT SYSTEM",
    subtitle: "Computer Vision & IoT Distraction Alert Concept",
    category: "VISION & IOT",
    categoryTag: "COMPUTER VISION · AI · IOT",
    description: "A computer-vision based system that detects mobile phone usage and can trigger alerts using camera-based detection and hardware integration.",
    technologies: ["Python", "OpenCV", "YOLO", "Arduino / ESP32", "Computer Vision"],
    problemStatement: "Maintaining concentration in focus-restricted environments (study stations, operator centers) requires automated, non-intrusive monitoring to prevent distraction-driven safety risks.",
    approach: "Processes camera video feeds via OpenCV and YOLO object detection models to locate mobile devices. When continuous detection exceeds a temporal threshold, it sends a serial command to an Arduino/ESP32 microcontroller to trigger a buzzer and LED alert.",
    architecture: [
      { step: "01", title: "OpenCV & YOLO Vision Feed", detail: "Processes incoming camera frames to detect smartphone spatial bounding boxes." },
      { step: "02", title: "Temporal Debounce Logic", detail: "Evaluates continuous detection duration to filter false positives before alert dispatch." },
      { step: "03", title: "Arduino / ESP32 Hardware Trigger", detail: "Sends serial signals to sound physical buzzers, illuminate LEDs, and record log timestamps." }
    ],
    currentState: "Hardware & computer vision prototype demonstrating bounding box tracking and microcontroller serial triggering.",
    visualType: "vision_frame",
    links: {
      github: "https://github.com/poornimaraju1278-stack",
      demo: null
    }
  }
];
