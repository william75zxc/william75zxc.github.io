export const cv = {
  name: "Jing-Jhong Chen",
  zhName: "陳敬忠",
  title: "Ph.D. Student in Biomedical Engineering",
  bio: "I am a direct-entry Ph.D. student at National Yang Ming Chiao Tung University (NYCU) focused on Health Research. My work bridges the gap between clinically-aligned, rigorous algorithm development—such as my proposed DBI-MambaUNet and Size-Aware Focal Tversky Loss for micro-lesion sensitivity—and the stringent demands of actual medical workflows. Rather than stopping at theoretical performance, I build end-to-end systems. My research spans contrast-free brain tumor MRI analysis via knowledge distillation, the development of 3D medical vision-language models (VLM) for automated clinical report generation, hallucination-resistant structured reporting natively integrated with clinical PACS, and leading teams to scale TFDA/FDA-facing oncology systems.",
  email: "abc2001925@gmail.com",
  phone: "+886 975306639",
  location: "New Taipei City, Taiwan",
  birthDate: "2001-09-25",
  age: 24,
  profileImage: "/images/profile.jpg",
  website: "https://william75zxc.github.io/",
  researchInterests: [
    "Medical image analysis",
    "Multimodal deep learning",
    "Generative models",
    "Large language models",
    "Brain tumor analysis",
    "Standards-based clinical AI integration (DICOM, FHIR)"
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
          description: "Led the development of a vendor-neutral, PACS-native clinical AI system built upon international IHE standards (DICOM, DICOMweb, FHIR). Achieved a mean end-to-end latency of 89.82s and reduced reporting turnaround time from 5.37 to 2.23 days. Received TFDA clearance; FDA review pending."
        },
        {
          title: "FHIR-Driven Clinical Decision Support and Report Translation",
          period: "2025-Present",
          description: "Transformed structured AI outputs into interoperable FHIR resources and integrated RAG-enhanced LLMs for clinically contextualized summarization and report translation."
        },
        {
          title: "Multimodal Clinical Imaging Analysis with LLMs and VLMs",
          period: "2025-Present",
          description: "Developed multimodal AI frameworks for lung CT and brain tumor imaging interpretation by integrating LLMs and VLMs for structured report generation and clinically grounded decision support."
        },
        {
          title: "Brain Tumor MRI Analysis and Generative Modeling",
          period: "2024-2025",
          description: "Developed multimodal MRI-based deep learning frameworks, leveraging GAN and diffusion models to synthesize realistic small tumor lesions, increasing sensitivity by 16 points for 4–6 mm lesions."
        },
        {
          title: "Non-Contrast MRI Translation and Tumor Classification",
          period: "2024-2025",
          description: "Leveraged GAN- and diffusion-based models to synthesize T1C MRI from non-contrast T1-weighted inputs for downstream detection and classification."
        },
        {
          title: "Deep Learning for MRI Sequence Classification",
          period: "2024-2025",
          description: "Developed deep learning models for automatic classification of multiple MRI sequence types (T1+C, T2, etc.) for fully automated workflows."
        }
      ]
    }
  ],
  publications: {
    journals: [
      {
        id: "j1",
        title: "A Standards-Based, PACS-Native AI Integration Architecture for Background Inference in Radiology Reporting Workflows",
        venue: "Journal of Medical Systems (IF 5.52)",
        status: "Under Peer Review",
        authors: ["Jing-Jhong Chen"],
        year: 2024,
        role: "1st Author"
      },
      {
        id: "j2",
        title: "DBI-MambaUNet with Size-Aware Focal Tversky Loss: A Holistic Framework for Multi-Subtype Brain Tumor Micro-Lesion Segmentation in Stereotactic Radiosurgery",
        venue: "Medical Image Analysis (IF 11.8)",
        status: "Under Review",
        authors: ["Jing-Jhong Chen (3rd Author)"],
        year: 2024,
        role: "3rd Author"
      }
    ],
    conferences: [
      {
        id: "c1",
        title: "A Method for Rapidly Integrating Artificial Intelligence Models into Existing PACS via DICOMweb",
        venue: "Society for Imaging Informatics in Medicine Annual Meeting (SIIM) 2024",
        type: "Poster Presentation",
        authors: ["Jing-Jhong Chen"],
        year: 2024,
        role: "1st Author"
      },
      {
        id: "c2",
        title: "Real-time and Continuous AI Inference Workflow with PACS Integration",
        venue: "IEEE International Conference on AI, Machine Learning, and Data Science (AMLDS) 2025",
        type: "Oral Presentation",
        authors: ["Jing-Jhong Chen"],
        year: 2025,
        role: "1st Author",
        indexed: "IEEE"
      },
      {
        id: "c3",
        title: "Lightweight 3D IDC-MambaUNet for Multi-Modal MRI Brain Tumor Segmentation Using Multi-Resolution Ensemble",
        venue: "IEEE International Conference on AI, Machine Learning, and Data Science (AMLDS) 2025",
        type: "Oral Presentation",
        authors: ["Jing-Jhong Chen (2nd Author)"],
        year: 2025,
        role: "2nd Author",
        indexed: "IEEE"
      },
      {
        id: "c4",
        title: "Lesion-Wise False-Positive Reduction for Brain Tumor Candidate Masks in Multi-Modal MRI via Mask-Gated 2.5D Spatiotemporal Classification",
        venue: "IEEE International Conference on AI, Machine Learning, and Data Science (AMLDS) 2026",
        type: "Accepted",
        authors: ["Jing-Jhong Chen (3rd Author)"],
        year: 2026,
        role: "3rd Author",
        indexed: "IEEE"
      },
      {
        id: "c5",
        title: "Design and Implementation of an Open-Source Integrated Digital Pathology Workflow with DICOM WSI Management and AI-Assisted Analysis",
        venue: "European Congress on Digital Pathology (ECDP)",
        type: "Submitted",
        authors: ["Jing-Jhong Chen (4th Author)"],
        year: 2025,
        role: "4th Author"
      }
    ]
  },
  patents: [
    {
      title: "DICOM Metadata-Driven Decision Platform and Method for Automated Medical Imaging Inference",
      status: "Taiwan invention patent granted in 2025; U.S. pending"
    },
    {
      title: "Automated Worklist Generation and Multi-Model Inference Work Order Data Structure for Medical Imaging AI",
      status: "Taiwan and U.S. patent applications pending"
    }
  ],
  honors: [
    "Co-developed AItewan DeepBT Detector Plus (TFDA medical device clearance; FDA pending)",
    "Independently developed AItewan Liger MedAI Management Platform (TFDA in progress)",
    "Shortlisted for Smart Innovation Award with AItewan AI-Assisted Brain Tumor Analysis System",
    "Research and Creative Award, 2023 NSTC Undergraduate Research Project",
    "MITW Taiwan Medical Imaging Datathon 2024 (Selected for Track 4 & 8)",
    "Third Prize, 2021 National Health Technology Innovation and Creativity Competition (MR Glasses Project)"
  ],
  skills: {
    languages: ["Python", "JavaScript", "Node.js", "React.js", "PyTorch"],
    domains: ["Medical Imaging AI", "Computer Vision", "Deep Learning", "LLMs & VLMs", "3D Segmentation"],
    standards: ["DICOM", "DICOMweb", "FHIR", "IHE Standards", "Structured Reporting"]
  }
};
