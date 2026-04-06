export const cv = {
  name: "Jing-Jhong Chen",
  title: "Ph.D. Student in Biomedical Engineering",
  researchVision: "Medical AI • Computer Vision • Standardized DICOM/FHIR • Clinical System Deployment",
  tagline: "Bridging Research and Practice: Engineering Scalable, Standards-Driven Medical AI for Resilient Clinical Workflows and Real-World Impact.",
  bio: `Focused on translational medical AI, with the goal of developing technologies that can be seamlessly integrated into real clinical workflows and bring meaningful benefits to clinical practice. Current work spans medical image analysis, multimodal deep learning, generative models, and large language model–based clinical applications, including brain tumor MRI analysis, micro-lesion detection, non-contrast MRI translation, and multimodal report generation.\n\nParticular emphasis is placed on standards-based clinical integration through DICOM, DICOMweb, and FHIR, enabling automated inference, structured reporting, and interoperable deployment within existing hospital systems. Long-term efforts center on making self-developed AI models not only technically strong, but also truly applicable in clinical settings—improving workflow efficiency, reducing report writing and treatment decision time, enhancing clinical support, and ultimately contributing to better healthcare quality and more seamless real-world adoption.`,
  heroText: "From Bench to Bedside: Engineering Resilient, Standards-Based, and Trusted AI for Modern Healthcare.",
  email: "abc2001925@gmail.com",
  phone: "+886 975306639",
  location: "New Taipei City, Taiwan",
  birthDate: "2001-09-25",
  age: 24,
  gpa: "4.10 / 4.30",
  profileImage: "/images/profile_suit.png",
  cvPdf: "/cv.pdf",
  website: "https://william75zxc.github.io/",
  researchInterests: [
    "Medical image analysis",
    "Multimodal deep learning",
    "Generative models",
    "Large language models",
    "Brain tumor analysis",
    "Standards-based clinical AI integration (DICOM, FHIR)"
  ],
  highlights: [
    {
      title: "TFDA & U.S. FDA",
      description: "Contributed to Brain Tumor SaMD operations, securing TFDA approval with U.S. FDA clearance under review.",
      icon: "ShieldCheck"
    },
    {
      title: "GPA: 4.10 / 4.30",
      description: "Achieved a near-perfect GPA in NYCU's highly competitive Direct-Entry Ph.D. program, balancing rigorous coursework with pioneering medical AI research.",
      icon: "GraduationCap"
    },
    {
      title: "2 Medical AI Patents",
      description: "Granted a Taiwan invention patent for DICOM-driven automated inference; additional Taiwan and U.S. patents pending.",
      icon: "FileSignature"
    },
    {
      title: "8 Publications",
      description: "Authored 2 journal papers (including Medical Image Analysis (MedIA) IF=11.8 under review) and 6 conference papers/presentations (mostly Oral).",
      icon: "BookOpen"
    },
    {
      title: "AI System Developer",
      description: "Independently developed Liger MedAI Management Platform; deployed brain tumor AI models at multiple medical centers including Taipei Veterans General Hospital (Taipei VGH).",
      icon: "Cpu"
    },
    {
      title: "Research Awards",
      description: "Received the National Science and Technology Council (NSTC) Research and Creative Award (2023) and shortlisted for the Smart Innovation Award.",
      icon: "Trophy"
    }
  ],
  education: [
    {
      institution: "National Yang Ming Chiao Tung University (NYCU)",
      location: "Taiwan",
      period: "2024–Present",
      degree: "Direct Pursuit of Ph.D. Program, Institute of Biophotonics"
    },
    {
      institution: "National Taipei University of Nursing and Health Sciences (NTUNHS)",
      location: "Taiwan",
      period: "2020–2024",
      degree: "B.B.A. in Information Management"
    }
  ],
  experience: [
    {
      institution: "National Yang Ming Chiao Tung University, Institute of Biophotonics",
      role: "Ph.D. Researcher",
      advisor: "Prof. Yu-Te Wu",
      period: "2024–Present",
      projects: [
        {
          title: "Standards-Based Clinical AI Integration for Radiology Workflows",
          period: "2024-2025",
          description: "Led the development of a vendor-neutral, PACS-native clinical AI system built upon international IHE standards. Achieved mean end-to-end latency of 89.82s and reduced reporting turnaround from 5.37 to 2.23 days. Received TFDA clearance; FDA review pending."
        },
        {
          title: "FHIR-Driven Clinical Decision Support and Report Translation",
          period: "2025-Present",
          description: "Transforming structured AI outputs into interoperable FHIR resources and integrated RAG-enhanced LLMs for clinically contextualized summarization and report translation."
        },
        {
          title: "Brain Tumor MRI Analysis and Generative Modeling",
          period: "2024-2025",
          description: "Developed multimodal MRI deep learning frameworks, leveraging GAN and diffusion models to synthesize small tumor lesions. Increased sensitivity by 16 points for 4–6 mm lesions."
        },
        {
          title: "Non-Contrast MRI Translation and Tumor Classification",
          period: "2024-2025",
          description: "Synthesized contrast-enhanced T1C MRI from non-contrast T1 inputs using GANs/Diffusion models to improve downstream classification and detection utility."
        },
        {
          title: "Multimodal Clinical Imaging Analysis with LLMs and VLMs",
          period: "2025-Present",
          description: "Developing AI frameworks for lung CT and brain tumor imaging interpretation integrating LLMs and VLMs for structured report generation and decision support."
        },
        {
          title: "Deep Learning for MRI Sequence Classification",
          period: "2024-2025",
          description: "Developed models for automatic classification of multiple MRI sequences (T1+C, T2, etc.) to enable preprocessing standardization and end-to-end deployment."
        }
      ]
    }
  ],
  additionalProjects: [
    { title: "Vital Signs Home Assistance System", description: "ML-based monitoring for early risk awareness in home care." },
    { title: "Precision Medicine Genomic Sequencing Platform", description: "Visualization platform (Node.js/React) for clinical review at Taipei VGH." },
    { title: "Breast Ultrasound Reporting System", description: "Optimized examination workflow with ASUS Cloud for structured report authoring." },
    { title: "AI Cloud Service Integration", description: "Cloud architecture for multi-model deployment at Zhonglun Clinic." },
    { title: "Intelligent Clinical Reporting Assistance", description: "Voice-to-text integration with LLMs for consolidated report summaries." },
    { title: "FHIR-Based Claims Data Exchange", description: "Data transformation system for integrating clinical reports with insurance records." },
    { title: "Cross-Platform Intracranial Hemorrhage Testing", description: "Integration testing for ICH AI models with Brain Navi Biotechnology." }
  ],
  publications: {
    journals: [
      { id: "j1", title: "A Standards-Based, PACS-Native AI Integration Architecture for Background Inference in Radiology Reporting Workflows", venue: "J Med Syst (IF 5.52)", status: "Under Peer Review", year: 2024, role: "1st Author", authors: ["Jing-Jhong Chen"] },
      { id: "j2", title: "DBI-MambaUNet with Size-Aware Focal Tversky Loss: A Holistic Framework for Multi-Subtype Brain Tumor Micro-Lesion Segmentation in Stereotactic Radiosurgery", venue: "MedIA (IF 11.8)", status: "Under Review", year: 2024, role: "3rd Author", authors: ["Jing-Jhong Chen (3rd Author)"] }
    ],
    conferences: [
      { id: "c1", title: "A Method for Rapidly Integrating Artificial Intelligence Models into Existing PACS via DICOMweb", venue: "SIIM 2024", type: "Poster", year: 2024, role: "1st Author", authors: ["Jing-Jhong Chen"] },
      { id: "c2", title: "Real-time and Continuous AI Inference Workflow with PACS Integration (Indexed by IEEE)", venue: "AMLDS 2025", type: "Oral", year: 2025, role: "1st Author", authors: ["Jing-Jhong Chen"] },
      { id: "c3", title: "Lightweight 3D IDC-MambaUNet for Multi-Modal MRI Brain Tumor Segmentation Using Multi-Resolution Ensemble (Indexed by IEEE)", venue: "AMLDS 2025", type: "Oral", year: 2025, role: "2nd Author", authors: ["Jing-Jhong Chen (2nd Author)"] },
      { id: "c4", title: "Lesion-Wise False-Positive Reduction for Brain Tumor Candidate Masks in Multi-Modal MRI via Mask-Gated 2.5D Spatiotemporal Classification", venue: "AMLDS 2026", type: "Accepted", year: 2026, role: "3rd Author", authors: ["Jing-Jhong Chen (3rd Author)"] },
      { id: "c5", title: "Design and Implementation of an Open-Source Integrated Digital Pathology Workflow with DICOM WSI Management and AI-Assisted Analysis", venue: "ECDP 2025", type: "Submitted", year: 2025, role: "4th Author", authors: ["Jing-Jhong Chen (4th Author)"] }
    ],
    presentations: [
      { event: "SIIM 2024, Washington, DC, USA", role: "Poster Presentation, 1st Author" },
      { event: "AMLDS 2025, Tokyo, Japan", role: "Oral Presentation, 1st Author & 2nd Author" }
    ]
  },
  patents: [
    { title: "DICOM Metadata-Driven Decision Platform and Method for Automated Medical Imaging Inference", status: "Granted 2025 (Taiwan); U.S. Pending" },
    { title: "Automated Worklist Generation and Multi-Model Inference Work Order Data Structure for Medical Imaging AI", status: "Taiwan and U.S. Pending" }
  ],
  honors: [
    {
      category: "Awards", items: [
        "Research & Creative Award, 2023 NSTC Undergraduate Research Project (Project: Cloud-Based BI-RADS Classification Model for Breast Ultrasound in Primary Care Clinics)",
        "Third Prize, Project Competition, National Taipei University of Nursing and Health Sciences",
        "Third Prize, Smart Technology Division, 2021 National Health Technology Innovation Competition (MR Glasses Project)",
        "Shortlisted, Smart Innovation Award with the AItewan AI-Assisted Brain Tumor Analysis System"
      ]
    },
    {
      category: "Selected Achievements", items: [
        "Co-developed AItewan DeepBT Detector Plus (TFDA clearance; FDA pending)",
        "Independently developed Liger MedAI Management Platform (TFDA in progress)",
        "Clinical Deployment: Taipei VGH, Taichung VGH, Shin Kong Hospital",
        "Selected: CYBERSEC 2026 Preliminary Review",
        "Selected: MITW Taiwan Medical Imaging Datathon 2024 (Track 4 & 8)",
        "Passed SAS Campus Hackathon Preliminary Round"
      ]
    }
  ],
  certifications: [
    "Certified Medical Information Manager",
    "APMP Project Management Certification",
    "Certified Assistant Specialist in Smart Healthcare",
    "Completion, Medical Informatics Program, NTUNHS"
  ],
  academicService: [
    "Teaching Assistant, DICOM and FHIR Training Program",
    "Teaching Assistant, Database Management Systems",
    "Teaching Assistant, Object-Oriented Programming",
    "Teaching Assistant, Deep Learning and Biomedical Applications",
    "Teaching Assistant, Machine Learning and Biomedical Applications",
    "Exhibition and Demonstration Coordinator, MITW Taiwan Medical Imaging Datathon 2025"
  ],
  skills: {
    languages: ["Python", "JavaScript", "Node.js", "React.js", "Git"],
    domains: ["Medical Imaging AI", "Computer Vision", "3D Segmentation", "Multimodal Learning"],
    technologies: ["GANs & Diffusion Models", "LLMs & RAG", "VLMs"],
    standards: ["DICOM", "DICOMweb", "FHIR", "IHE Standards"],
    evaluation: ["Lesion-wise sensitivity/precision", "F1 score", "False positives per scan"],
    naturalLanguages: ["Mandarin Chinese (Native)", "English (Professional)"]
  }
};
