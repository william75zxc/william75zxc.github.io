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
          description: "Led the development of a vendor-neutral, PACS-native clinical AI system built upon international IHE standards, integrating DICOM, DICOMweb, and native DICOM SEG/SR/GSPS outputs to support fully automated background inference, standardized result return, and seamless clinical deployment within radiology workflows. The system incorporated modules for brain tumor MRI analysis, contrast-free inference, and structured report generation, enabling an end-to-end automated pipeline from image ingestion and AI analysis to PACS write-back. In real-world validation at a medical center, the system achieved a mean end-to-end latency of 89.82 ± 29.48 seconds and reduced the median reporting turnaround time for lesion-positive brain MRI studies from 5.37 days to 2.23 days. The initial version of the system has received TFDA clearance and is currently under FDA review."
        },
        {
          title: "FHIR-Driven Clinical Decision Support and Report Translation",
          period: "2025-Present",
          description: "Transformed structured AI outputs into interoperable FHIR resources and integrated RAG-enhanced large language models for clinically contextualized summarization, urgent case notification, and translation of AI-derived structured reports into physician-ready narratives. Improved the actionability of AI-assisted communication, reduced downstream response delays, and supported timely intervention within critical therapeutic windows; currently under clinical testing and effectiveness evaluation at a tertiary medical center."
        },
        {
          title: "Brain Tumor MRI Analysis and Generative Modeling",
          period: "2024-2025",
          description: "Developed multimodal MRI-based deep learning frameworks for brain tumor detection and segmentation, leveraging GAN and diffusion models to synthesize realistic small tumor lesions and incorporating the generated data into segmentation model evaluation and comparative performance analysis. This strategy increased sensitivity by 16 points for 4–6 mm lesions."
        },
        {
          title: "Non-Contrast MRI Translation and Tumor Classification",
          period: "2024-2025",
          description: "Leveraged GAN- and diffusion-based models to synthesize contrast-enhanced T1-weighted (T1C) MRI from non-contrast T1-weighted inputs, and evaluated whether the generated images improved tumor detection and segmentation performance. Further incorporated the synthesized contrast information into downstream classification pipelines to assess its utility for brain tumor characterization."
        },
        {
          title: "Multimodal Clinical Imaging Analysis with LLMs and VLMs",
          period: "2025-Present",
          description: "Developed multimodal AI frameworks for lung CT and brain tumor imaging interpretation by integrating large language models and vision-language models for structured report generation and clinically grounded decision support in pulmonary nodules, lung cancer screening, pneumonia, chronic obstructive pulmonary disease, pulmonary embolism, and brain tumors, enhancing the actionability of AI outputs in real-world clinical imaging workflows."
        },
        {
          title: "Deep Learning for MRI Sequence Classification",
          period: "2024-2025",
          description: "Developed deep learning models for automatic classification of multiple MRI sequence types, including contrast-enhanced T1-weighted (T1+C), T2-weighted (T2), and other clinically relevant sequences. Enabled reliable sequence identification and selection for fully automated model inference workflows, improving preprocessing standardization and supporting end-to-end deployment of MRI-based AI systems."
        }
      ]
    }
  ],
  additionalProjects: [
    { 
      title: "Vital Signs Home Assistance System | Medical Imaging Laboratory", 
      description: "Developed a machine learning-based home health monitoring system to detect abnormal physiological conditions and provide a user-oriented platform for home-based care and early risk awareness." 
    },
    { 
      title: "Precision Medicine Genomic Sequencing Management Platform | Medical Imaging Laboratory × Taipei Veterans General Hospital", 
      description: "Developed a precision medicine platform for genomic sequencing data management and visualization using Node.js and React.js, supporting automated comparison of abnormal gene variants and reducing physician workload in clinical review." 
    },
    { 
      title: "Breast Ultrasound Reporting System | Medical Imaging Laboratory × ASUS Cloud", 
      description: "Developed and optimized a breast ultrasound reporting system in collaboration with ASUS Cloud, establishing a complete imaging examination workflow and enhancing structured report authoring and report management to support more efficient clinical documentation." 
    },
    { 
      title: "AI Cloud Service Integration and Deployment | Medical Imaging Laboratory × Zhonglun Clinic", 
      description: "Proposed a cloud-based AI platform architecture for multi-model deployment and standardized result integration into clinical workflows, supporting scalable AI service delivery in real-world healthcare settings." 
    },
    { 
      title: "Intelligent Clinical Reporting Assistance System | Medical Imaging Laboratory × Good Liver Clinic × New England Clinic", 
      description: "Developed an intelligent clinical reporting system that converts voice input into text and integrates large language models to generate consolidated report summaries, enabling direct report drafting and improving the efficiency of clinical documentation." 
    },
    { 
      title: "FHIR-Based Claims Data Exchange and Adjudication System | Medical Imaging Laboratory × Cathay Financial Holdings", 
      description: "Developed an FHIR-based system for integrating patient clinical reports and insurance records, enabling standardized data transformation and simplifying the patient insurance claims process." 
    },
    { 
      title: "Cross-Platform Integration Testing for Intracranial Hemorrhage AI Models | Medical Imaging Laboratory × Brain Navi Biotechnology", 
      description: "Performed cross-platform integration testing for an intracranial hemorrhage AI model, verifying the feasibility of the proposed system architecture and its compatibility across different clinical deployment environments." 
    }
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
        "Accepted for presentation at CYBERSEC 2026: “AI Software Medical Device Cybersecurity in Practice.”",
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
    languages: ["Python", "JavaScript", "Node.js", "React.js", "PyTorch", "Git", "Docker", "Linux"],
    domains: ["Medical Imaging AI", "Computer Vision", "3D Segmentation", "Multimodal Learning"],
    technologies: ["GANs & Diffusion Models", "LLMs & RAG", "VLMs"],
    standards: ["DICOM", "DICOMweb", "FHIR", "IHE Standards"],
    evaluation: ["Lesion-wise sensitivity/precision", "F1 score", "False positives per scan"],
    naturalLanguages: ["Mandarin Chinese (Native)", "English (Professional)"]
  }
};
