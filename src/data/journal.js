export const journalData = [
  {
    id: "note-01",
    tag: "SYSTEM ARCHITECTURE",
    date: "SEPTEMBER 2026",
    status: "PLACEHOLDER / PROOF OF WORK",
    title: "Building BhoomiRakshak AI — Aggregating Multi-Source Risk Signals",
    summary: "Architectural observations on integrating spatial GIS data, live weather streams, and IoT ground sensor feeds into an early warning pipeline.",
    readTime: "4 MIN READ",
    content: `### Architectural Background
In designing BhoomiRakshak AI, one of the core challenges was structuring data streams from disparate sources—GIS map coordinates, atmospheric weather endpoints, and micro-location ground sensors.

### Key Considerations
1. Signal Heterogeneity: Spatial GIS data updates slowly, whereas IoT moisture telemetry requires frequent polling.
2. FastAPI Microservice Layer: Offloading AI model evaluation to asynchronous Python workers allows the React frontend to remain fluid.
3. Threshold Logic: Defining clear thresholds between Low, Elevated, and Critical risk helps prevent warning fatigue in emergency response interfaces.

Note: This write-up represents an architectural note and proof of engineering thinking.`
  },
  {
    id: "note-02",
    tag: "COMPUTER VISION & HARDWARE",
    date: "AUGUST 2026",
    status: "PLACEHOLDER / PROOF OF WORK",
    title: "Exploring Computer Vision — Edge Detection & Object Tracking with YOLO",
    summary: "Reflections on spatial bounding box detection, frame-rate constraints, and interfacing Python vision pipelines with microcontrollers.",
    readTime: "5 MIN READ",
    content: `### Real-Time Video Feed Processing
Working with OpenCV and YOLO highlighted the balance required between inference speed and bounding box accuracy during smartphone detection tasks.

### Technical Takeaways
- Temporal Debouncing: Counting consecutive frame detections (> 3s threshold) avoids false triggers caused by transient objects.
- Serial Protocol Integration: Transferring detection flags over serial pins ('pyserial') to Arduino/ESP32 hardware enables instant physical alerts (buzzers/LEDs).
- Optimization: Reducing resolution on input video frames drastically cuts CPU usage without compromising detection bounds.

Note: Engineering experiment summary.`
  },
  {
    id: "note-03",
    tag: "FRONTEND ENGINEERING",
    date: "JULY 2026",
    status: "LEARNING LOG",
    title: "Learning Full-Stack Development — Designing Minimal Editorial Web Interfaces",
    summary: "Principles learned while transitioning from simple layouts to high-contrast, editorial typography and modern component architecture.",
    readTime: "3 MIN READ",
    content: `### Editorial Tech Studio Aesthetic
Standard modern web design often falls into repetitive SaaS layout patterns. Building custom portfolios requires focusing on:

- Typography Scale: Pairing heavy display titles with fine sans-serif body text.
- Visual Restraint: Relying on 1px borders, subtle spacing, and strong contrast instead of heavy glowing shadows.
- Component Modularity: Keeping data structures distinct from presentation components to maintain clean code architecture.

Note: Personal development log.`
  },
  {
    id: "note-04",
    tag: "HARDWARE & SYSTEMS",
    date: "JUNE 2026",
    status: "ENGINEERING NOTES",
    title: "Engineering Notes — System Design for Connected Devices & Microcontrollers",
    summary: "Fundamental takeaways from working with C/C++, Arduino pins, sensor input reading, and state machines.",
    readTime: "4 MIN READ",
    content: `### Embedded Systems Foundations
Connecting physical sensors to software interfaces demands careful state management and error resilience.

### Practical Observations
- Sensor noise requires analog averaging algorithms before making decision calls.
- Non-blocking code ('millis()') in C++/Arduino is essential for keeping hardware responsive to interrupts.
- Clear separation between raw sensor reads and processed application states.

Note: Practical embedded engineering notes.`
  }
];
