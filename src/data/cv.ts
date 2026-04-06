export const cv = {
  name: "Jing-Jhong Chen",
  zhName: "陳敬忠",
  title: "Ph.D. Student in Biomedical Engineering",
  researchVision: "Medical AI • Computer Vision • Health Research",
  tagline: "Translating fundamental medical AI into clinically resilient, standards-based, and real-world deployment.",
  bio: `Focused on translational medical AI, with the goal of developing technologies that can be seamlessly integrated into real clinical workflows and bring meaningful benefits to clinical practice. Current work spans medical image analysis, multimodal deep learning, generative models, and large language model–based clinical applications, including brain tumor MRI analysis, micro-lesion detection, non-contrast MRI translation, and multimodal report generation.\n\nParticular emphasis is placed on standards-based clinical integration through DICOM, DICOMweb, and FHIR, enabling automated inference, structured reporting, and interoperable deployment within existing hospital systems. Long-term efforts center on making self-developed AI models not only technically strong, but also truly applicable in clinical settings—improving workflow efficiency, reducing report writing and treatment decision time, enhancing clinical support, and ultimately contributing to better healthcare quality and more seamless real-world adoption.`,
  heroText: "Translating Clinically Aligned AI into Real-World Practice",
  email: "abc2001925@gmail.com",
  phone: "+886 975306639",
  location: "New Taipei City, Taiwan",
  birthDate: "2001-09-25",
  age: 24,
  gpa: "4.10 / 4.30",
  profileImage: "/images/profile.jpg",
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
      description: "Authored 2 journal papers (including MedIA IF=11.8 under review) and 6 conference papers/presentations (mostly Oral).",
      icon: "BookOpen"
    },
    {
      title: "AI System Developer",
      description: "Independently developed Liger MedAI Management Platform; deployed brain tumor AI models at multiple medical centers including Taipei VGH.",
      icon: "Cpu"
    },
    {
      title: "Research Awards",
      description: "Received the NSTC Research and Creative Award (2023) and shortlisted for the Smart Innovation Award.",
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
      institution: "National Taipei University of Nursing and Health Sciences",
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
          description: "Led development of vendor-neutral, PACS-native clinical AI system built upon international IHE standards (DICOM, FHIR). Integrated brain tumor MRI analysis, contrast-free inference, and structured report generation. Received TFDA clearance; FDA review pending."
        },
        {
          title: "FHIR-Driven Clinical Decision Support and Report Translation",
          period: "2025-Present",
          description: "Transforming AI outputs into FHIR resources and integrating RAG-enhanced LLMs for clinically contextualized summarization and report translation."
        },
        {
          title: "Multimodal Clinical Imaging Analysis",
          period: "2025-Present",
          description: "Developed AI frameworks for lung CT interpretation integrating LLMs and VLMs for structured report generation and decision support."
        }
      ]
    }
  ],
  publications: {
    journals: [
      { id: "j1", title: "A Standards-Based, PACS-Native AI Integration Architecture...", venue: "J Med Syst (IF 5.52)", status: "Under Peer Review", year: 2024, role: "1st Author", authors: ["Jing-Jhong Chen"] },
      { id: "j2", title: "DBI-MambaUNet with Size-Aware Focal Tversky Loss...", venue: "MedIA (IF 11.8)", status: "Under Review", year: 2024, role: "3rd Author", authors: ["Jing-Jhong Chen (3rd Author)"] }
    ],
    conferences: [
      { id: "c1", title: "Rapidly Integrating AI Models into PACS via DICOMweb", venue: "SIIM 2024", type: "Poster", year: 2024, role: "1st Author", authors: ["Jing-Jhong Chen"] },
      { id: "c2", title: "Real-time AI Inference Workflow with PACS Integration", venue: "AMLDS 2025", type: "Oral", year: 2025, role: "1st Author", authors: ["Jing-Jhong Chen"] },
      { id: "c3", title: "Lightweight 3D IDC-MambaUNet...", venue: "AMLDS 2025", type: "Oral", year: 2025, role: "2nd Author", authors: ["Jing-Jhong Chen (2nd Author)"] },
      { id: "c4", title: "Lesion-Wise FP Reduction for Brain Tumor MRI...", venue: "AMLDS 2026", type: "Accepted", year: 2026, role: "3rd Author", authors: ["Jing-Jhong Chen (3rd Author)"] },
      { id: "c5", title: "Open-Source Integrated Digital Pathology Workflow", venue: "ECDP 2025", type: "Submitted", year: 2025, role: "4th Author", authors: ["Jing-Jhong Chen (4th Author)"] }
    ]
  },
  patents: [
    { title: "DICOM Metadata-Driven Decision Platform...", status: "Granted 2025 (Taiwan); U.S. Pending" },
    { title: "Automated Worklist Generation...", status: "Taiwan and U.S. Pending" }
  ],
  skills: {
    languages: ["Python", "JavaScript", "Node.js", "React.js", "PyTorch"],
    domains: ["Medical AI", "Computer Vision", "LLMs & VLMs", "3D Segmentation"],
    standards: ["DICOM", "DICOMweb", "FHIR", "IHE Standards"]
  }
};
