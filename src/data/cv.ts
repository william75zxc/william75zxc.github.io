export const cv = {
  name: "Jing-Jhong Chen",
  zhName: "陳敬忠",
  title: "Ph.D. Student in Biomedical Engineering",
  bio: "I am a Ph.D. student at the Institute of Biophotonics, National Yang Ming Chiao Tung University (NYCU), supervised by Prof. Yu-Te Wu. My research focuses on clinical AI integration, medical image analysis, and the implementation of standards-based workflows (DICOM/FHIR) to improve diagnostic efficiency and precision in radiology and thoracic imaging.",
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
          description: "Led development of vendor-neutral, PACS-native clinical AI system built upon IHE standards (DICOM, FHIR). Integrated brain tumor MRI analysis, contrast-free inference, and structured report generation. Achieved TFDA clearance; FDA review pending."
        },
        {
          title: "FHIR-Driven Clinical Decision Support and Report Translation",
          period: "2025-Present",
          description: "Transforming AI outputs into FHIR resources and integrating RAG-enhanced LLMs for clinically contextualized summarization and report translation."
        },
        {
          title: "Brain Tumor MRI Analysis and Generative Modeling",
          period: "2024-2025",
          description: "Developed multimodal deep learning for detection/segmentation. Used GAN/diffusion for lesion synthesis, increasing sensitivity by 16 points for 4–6 mm lesions."
        },
        {
          title: "Non-Contrast MRI Translation and Tumor Classification",
          period: "2024-2025",
          description: "Leveraged GAN/diffusion to synthesize T1C MRI from T1 inputs for tumor detection."
        },
        {
          title: "Multimodal Lung CT Analysis with LLMs and VLMs",
          period: "2025-Present",
          description: "Developing AI frameworks for lung CT interpretation integrating LLMs and VLMs for structured report generation."
        },
        {
          title: "Deep Learning for MRI Sequence Classification",
          period: "2024-2025",
          description: "Automatic classification of MRI sequence types (T1+C, T2, etc.) for automated workflows."
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
      status: "Taiwan invention patent granted; U.S. pending"
    }
  ],
  honors: [
    "Co-developed AItewan DeepBT Detector Plus (TFDA medical device clearance)",
    "Independently developed AItewan Liger MedAI Management Platform (TFDA application in progress)",
    "Shortlisted for Smart Innovation Award with AItewan AI-Assisted Brain Tumor Analysis System",
    "MITW Taiwan Medical Imaging Datathon 2024 (Selected for Track 4 & 8)",
    "NSTC Undergraduate Research Project: Research and Creative Award (2023)"
  ],
  skills: {
    languages: ["Python", "JavaScript", "Node.js", "React.js", "PyTorch"],
    domains: ["Medical Imaging AI", "Computer Vision", "Deep Learning", "3D Segmentation"],
    standards: ["DICOM", "DICOMweb", "FHIR", "IHE Standards"]
  }
};
