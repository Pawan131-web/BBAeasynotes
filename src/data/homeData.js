export const POPULAR_SUBJECTS = [
  { label: "Financial Accounting", href: "/notes?q=Financial+Accounting" },
  { label: "Principles of Management", href: "/notes?q=Principles+of+Management" },
  { label: "Business Statistics", href: "/notes?q=Business+Statistics" },
  { label: "Marketing", href: "/notes?q=Marketing" },
];

export const UNIVERSITIES = [
  {
    id: "tu",
    code: "TU",
    name: "Tribhuvan University",
    established: "Est. 1959",
    colleges: "60+ affiliated colleges",
    description:
      "Nepal's oldest and largest university, offering structured BBA programs across dozens of constituent and private colleges.",
    cover: "/tu-campus.jpg",
    logo: "/tu-logo.svg",
    href: "/universities/tu",
  },
  {
    id: "pu",
    code: "PU",
    name: "Pokhara University",
    established: "Est. 1997",
    colleges: "40+ affiliated colleges",
    description:
      "Renowned for its practical semester system, strong business project work, and wide network of business schools.",
    cover: "/pu-campus.jpg",
    logo: "/pu-logo.jpg",
    href: "/universities/pu",
  },
  {
    id: "ku",
    code: "KU",
    name: "Kathmandu University",
    established: "Est. 1991",
    colleges: "KUSOM & Affiliated",
    description:
      "Premier management institution known for academic rigor, case-based learning, and global corporate readiness.",
    cover: "/ku-campus.jpg",
    logo: "/ku-logo.svg",
    href: "/universities/ku",
  },
  {
    id: "purbanchal",
    code: "PU-East",
    name: "Purbanchal University",
    established: "Est. 1993",
    colleges: "30+ affiliated colleges",
    description:
      "Major statutory university offering a comprehensive 8-semester BBA curriculum focusing on modern management and digital applications.",
    cover: "/purbanchal-campus.jpg",
    logo: "/purbanchal-logo.png",
    href: "/universities/purbanchal",
  },
];

export const STUDY_RESOURCES = [
  {
    letter: "S",
    title: "Syllabus",
    description: "Semester-wise course outlines",
    meta: "120+ files",
    href: "/syllabus",
    bgColor: "bg-syllabus-light",
    badgeColor: "bg-syllabus",
    textColor: "text-syllabus",
    borderColor: "border-syllabus/25",
    realImage: "/real-syllabus.jpg",
  },
  {
    letter: "N",
    title: "Chapter notes",
    description: "Clean, exam-focused notes",
    meta: "450+ files",
    href: "/notes",
    bgColor: "bg-notes-light",
    badgeColor: "bg-notes",
    textColor: "text-notes",
    borderColor: "border-notes/25",
    realImage: "/real-notes.jpg",
  },
  {
    letter: "Q",
    title: "Past questions",
    description: "Previous papers sorted by year",
    meta: "300+ files",
    href: "/past-questions",
    bgColor: "bg-questions-light",
    badgeColor: "bg-questions",
    textColor: "text-questions",
    borderColor: "border-questions/25",
    realImage: "/real-questions.jpg",
  },
  {
    letter: "M",
    title: "Model papers",
    description: "Practice sets before exams",
    meta: "85+ files",
    href: "/model-papers",
    bgColor: "bg-papers-light",
    badgeColor: "bg-papers",
    textColor: "text-papers",
    borderColor: "border-papers/25",
    realImage: "/real-papers.jpg",
  },
];

export const RESULTS_RESOURCE = {
  title: "Results",
  subtitle: "TU • PU • KU",
  meta: "Check Online",
  href: "/results",
  realImage: "/result.jpg",
};

export const NOTICES = [
  {
    date: "01 Nov",
    dateDay: "01",
    dateMonth: "Nov",
    tag: "Exam",
    tagType: "exam",
    text: "Check official university notices for exam routines",
    href: "/notices/exam-routines",
    isFeatured: true,
  },
  {
    date: "28 Oct",
    dateDay: "28",
    dateMonth: "Oct",
    tag: "Update",
    tagType: "update",
    text: "Sem 5 question papers added",
    href: "/notices/sem-5-papers",
  },
  {
    date: "25 Oct",
    dateDay: "25",
    dateMonth: "Oct",
    tag: "Reminder",
    tagType: "reminder",
    text: "Practical exam schedule released for all departments",
    href: "/notices/practical-schedule",
  },
  {
    date: "20 Oct",
    dateDay: "20",
    dateMonth: "Oct",
    tag: "News",
    tagType: "news",
    text: "Digital library access extended to 24/7",
    href: "/notices/digital-library",
  },
];

export const BBA_AT_A_GLANCE = [
  {
    key: "duration",
    label: "Duration",
    subtitle: "4 Years (8 Semesters)",
    icon: "calendar",
  },
  {
    key: "subjects",
    label: "Subjects",
    subtitle: "Core + Electives",
    description: "Finance, Marketing, HR, Management and more.",
    icon: "book",
  },
  {
    key: "careers",
    label: "Career Opportunities",
    subtitle: "Banking, Marketing, Consulting, Entrepreneurship and beyond.",
    icon: "briefcase",
  },
  {
    key: "next-step",
    label: "Next Step",
    subtitle: "Build your career with a BBA degree.",
    hasActionArrow: true,
    href: "/universities",
    icon: "trend",
  },
];

export const BEFORE_YOU_START_FAQS = [
  {
    id: 1,
    qNum: "Q1",
    theme: "red",
    tag: "Access & Pricing",
    studentQuery: "Hey BBA Easy Notes, is all the study material really 100% free to use?",
    question: "Is all study material completely free to use?",
    answer:
      "Yes, 100% free! Every chapter note, past question paper, model question, and semester syllabus on BBA Easy Notes is openly accessible with no paywalls or mandatory subscriptions.",
    highlights: ["Zero Paywalls", "No Credit Card Needed", "Open Access Across Nepal"],
  },
  {
    id: 2,
    qNum: "Q2",
    theme: "blue",
    tag: "University Coverage",
    studentQuery: "Which universities are covered on this platform? Can I find my specific syllabus?",
    question: "Which universities are covered on this platform?",
    answer:
      "We provide dedicated semester course materials tailored specifically for Tribhuvan University (TU), Pokhara University (PU), Kathmandu University (KU), and Purbanchal University (PU-East).",
    highlights: ["Tribhuvan University", "Pokhara University", "Kathmandu University", "Purbanchal University"],
  },
  {
    id: 3,
    qNum: "Q3",
    theme: "red",
    tag: "Syllabus Updates",
    studentQuery: "Are the notes and past papers updated for the latest 2026 academic year?",
    question: "Are the notes and past papers updated for 2026?",
    answer:
      "Yes. Materials are regularly reviewed and updated in accordance with current semester routines, newly revised syllabuses, and recent university board exam patterns.",
    highlights: ["2026 Board Patterns", "Revised Syllabus Aligned", "Regularly Updated"],
  },
  {
    id: 4,
    qNum: "Q4",
    theme: "blue",
    tag: "Offline Study",
    studentQuery: "Can I download notes and question banks to study offline when I don't have internet?",
    question: "Can I download notes and question banks offline?",
    answer:
      "Absolutely. You can view all notes directly in your browser or download PDFs to study offline on your smartphone, tablet, or laptop anytime without an active internet connection.",
    highlights: ["One-Click PDF Download", "Mobile & Tablet Friendly", "Zero Data Usage Offline"],
  },
  {
    id: 5,
    qNum: "Q5",
    theme: "red",
    tag: "Quality & Verification",
    studentQuery: "Who prepares and verifies the study materials to ensure accuracy before exams?",
    question: "Who prepares and verifies the study materials?",
    answer:
      "Our chapter summaries and numerical solutions are contributed and verified by high-scoring BBA seniors, college toppers, and experienced university management faculty members.",
    highlights: ["College Toppers", "High-Scoring Seniors", "Faculty Verified Solutions"],
  },
];

export const ABOUT_US_CONTENT = {
  title: "About us",
  subtitle: "Nepal's student-first management learning platform",
  description:
    "BBA Easy Notes is built to take the stress out of business administration education. We bridge the gap between heavy university syllabuses and effective exam preparation by organizing verified chapter notes, past paper solutions, and course routines under one clean, distraction-free platform.",
  highlights: [
    {
      title: "4 Major Universities",
      desc: "Tailored course paths for TU, PU, KU, and Purbanchal University.",
    },
    {
      title: "1,000+ Verified Files",
      desc: "Exam-oriented chapter notes, numerical solutions & model question sets.",
    },
    {
      title: "100% Free Access",
      desc: "Open educational resources with zero paywalls, subscriptions, or hidden charges.",
    },
    {
      title: "Student-Led Community",
      desc: "Curated with input from college toppers, seniors, and subject faculty.",
    },
  ],
};
