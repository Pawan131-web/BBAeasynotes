import { NOTES_CATALOG } from "./notesData";

// =========================================================================
// CURRICULUM SYLLABUS & LESSON DATA STORE
// Provides detailed, realistic multi-unit lessons, university past questions,
// summaries, and downloadable PDF materials for each BBA subject.
// =========================================================================

export const DETAILED_SUBJECT_CURRICULUM = {
  // -----------------------------------------------------------------------
  // 1. PRINCIPLES OF MANAGEMENT (pom)
  // -----------------------------------------------------------------------
  "principles-of-management": {
    academicYear: "2026 Academic Syllabus",
    courseCode: "MGT 201",
    creditHours: "3 Credit Hours",
    fullMarks: 100,
    passMarks: 50,
    evaluationScheme: "Internal Assessment (40%) • University Board Exam (60%)",
    overview:
      "Principles of Management provides foundational knowledge of modern organizational administration, managerial thinking, strategic decision making, and leadership frameworks tailored for BBA scholars in Nepal.",
    units: [
      {
        id: 1,
        title: "Unit 1: Nature & Concept of Management",
        shortTitle: "Concept of Management",
        examMarks: "10-15 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "25 min read",
        examImportance: "High • Compulsory in Group B or Group C",
        topics: [
          "Meaning, Characteristics & Goals of Management",
          "Management vs. Administration",
          "Management as Science, Art & Profession",
          "Managerial Roles by Henry Mintzberg",
          "Managerial Skills & Hierarchy by Robert Katz",
          "Emerging Challenges for Managers in Nepal",
        ],
        learningObjectives: [
          "Define management and distinguish between efficiency (doing things right) and effectiveness (doing the right things).",
          "Differentiate between management and administration with structural parameters.",
          "Identify and evaluate Henry Mintzberg's 10 managerial roles across Interpersonal, Informational, and Decisional categories.",
          "Analyze Robert Katz's three managerial skills (Technical, Human, Conceptual) across top, middle, and operational tiers.",
        ],
        lectureNotes: {
          introduction:
            "Management is the art of getting things done through and with formally organized groups. In the words of Harold Koontz, 'Management is the art of getting things done through people in formally organized groups.' It creates an environment in which people can perform as individuals and yet cooperate towards the attainment of group goals.",
          sections: [
            {
              heading: "1. Core Characteristics of Management",
              content:
                "Management is universally applicable across business, government, NGOs, and educational institutions in Nepal. Key attributes include:\n• Goal-Oriented: Aims to achieve specific organizational objectives economically.\n• Continuous Process: Planning, organizing, actuating, and controlling operate in a perpetual cycle.\n• Dynamic Function: Adapts to changing PESTEL factors (Political, Economic, Social, Technological, Environmental, and Legal).\n• Multi-Disciplinary: Draws insights from psychology, economics, sociology, and statistics.",
            },
            {
              heading: "2. Management vs. Administration",
              content:
                "While often used interchangeably in Nepali business vernacular, modern theorists draw a clear distinction:\n• Administration is a higher-level, determinative function focused on setting policies, long-term goals, and capital structure.\n• Management is an executive function focused on executing plans, directing personnel, and achieving operational milestones within the administrative framework.",
            },
            {
              heading: "3. Mintzberg's 10 Managerial Roles",
              content:
                "Professor Henry Mintzberg conducted empirical studies and classified managerial activities into 10 roles grouped into 3 broad clusters:\n\n1. Interpersonal Roles:\n  • Figurehead: Symbolic head performing ceremonial and legal duties (e.g., CEO signing partnerships).\n  • Leader: Motivating, staffing, and guiding subordinates.\n  • Liaison: Cultivating external networks and contacts.\n\n2. Informational Roles:\n  • Monitor: Scanning internal operations and market trends for strategic information.\n  • Disseminator: Sharing vital insights with team members.\n  • Spokesperson: Transmitting official communication to external stakeholders, media, and regulators.\n\n3. Decisional Roles:\n  • Entrepreneur: Initiating new ventures, projects, and innovation.\n  • Disturbance Handler: Resolving strikes, supply chain bottlenecks, and crises.\n  • Resource Allocator: Budgeting funds, assigning manpower, and scheduling equipment.\n  • Negotiator: Representing the organization in trade union bargaining or supplier contracts.",
            },
            {
              heading: "4. Robert Katz's Three Managerial Skills",
              content:
                "• Technical Skills: Specialized knowledge and proficiency in operating equipment, coding, or accounting. Most crucial for First-Line (Lower) Managers.\n• Human Skills: Ability to communicate, empathize, motivate, and resolve interpersonal conflict. Equally essential across ALL management levels.\n• Conceptual Skills: Mental capacity to view the organization as a unified whole and foresee long-term strategic trends. Critical for Top Executives.",
            },
          ],
          nepalCaseStudy: {
            company: "Chaudhary Group (CG Corp Global)",
            scenario:
              "How Dr. Binod Chaudhary transformed a family textile business into Nepal's first multinational conglomerate by institutionalizing professional management. Rather than micro-managing daily production of Wai Wai noodles, top management focused on conceptual strategy (global expansion across 30+ countries) while delegating technical and human execution to specialized departmental managers.",
            takeaway:
              "Professional delegation and clear demarcation of Robert Katz's conceptual vs. technical skills are mandatory for local Nepali enterprises to scale internationally.",
          },
          comparisonTable: {
            title: "Comparison: Management vs. Administration",
            headers: ["Basis of Comparison", "Administration", "Management"],
            rows: [
              ["Nature", "Determinative & Policy-Making", "Executive & Operational"],
              ["Scope", "Broad, broad-level strategic choices", "Specific targets within defined policies"],
              ["Level in Hierarchy", "Top Level (Board of Directors, Owners)", "Middle and Lower Management"],
              ["Key Focus", "Allocation of capital and strategic purpose", "Utilization of human & material resources"],
              ["Influence", "Government policies, public opinion, market forces", "Internal company rules, team dynamics, efficiency"],
            ],
          },
        },
        summaryPoints: [
          "Management is the continuous, goal-oriented process of planning, organizing, leading, and controlling.",
          "Effectiveness = achieving stated targets. Efficiency = minimizing input resource cost (optimal cost-to-benefit).",
          "Administration formulates overarching policy; management executes and directs operational teams.",
          "Mintzberg's 10 roles: Interpersonal (3), Informational (3), Decisional (4).",
          "Top managers require high Conceptual skills; operational supervisors require high Technical skills; all need Human skills.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "Define management. Discuss the ten managerial roles identified by Henry Mintzberg with suitable corporate examples.",
            answerOutline:
              "1. Define management with references to Koontz or Drucker (2 Marks).\n2. Present a clean diagram illustrating the 3 clusters: Interpersonal, Informational, and Decisional (2 Marks).\n3. Detail all 10 roles with concrete examples like bank branch managers or factory CEOs (5 Marks).\n4. Conclude on how these roles overlap simultaneously during daily executive tasks (1 Mark).",
          },
          {
            university: "PU (Pokhara University)",
            year: "2022",
            marks: 10,
            question:
              "Explain the various skills required by managers at different levels of organizational hierarchy as proposed by Robert Katz.",
            answerOutline:
              "1. Introduction to Robert Katz's 1955 Harvard Business Review framework (2 Marks).\n2. Explain Technical, Human, and Conceptual skills (4 Marks).\n3. Draw the hierarchical pyramid diagram showing skill proportions across Top, Middle, and First-line tiers (3 Marks).\n4. Highlight why Human Skill remains uniformly critical across all levels (1 Mark).",
          },
          {
            university: "KU (Kathmandu University)",
            year: "2021",
            marks: 5,
            question:
              "Is management a true profession? Justify your stance in the context of corporate enterprises in Nepal.",
            answerOutline:
              "Examine criteria of a profession: specialized knowledge (yes), formal training (yes, BBA/MBA), representative body (Management Association of Nepal - MAN), code of ethics (emerging). Conclude that management is a fast-developing profession in Nepal.",
          },
        ],
        resources: [
          {
            name: "Unit 1 Master Notes — Complete Chapter Handout (PDF)",
            format: "PDF Document",
            size: "3.4 MB",
            downloads: 2450,
          },
          {
            name: "TU & PU Past 10 Years Solved Questions — Unit 1",
            format: "PDF Document",
            size: "2.1 MB",
            downloads: 3120,
          },
          {
            name: "Mintzberg 10 Roles & Katz Skills — Quick Revision Chart",
            format: "Infographic PDF",
            size: "1.2 MB",
            downloads: 1890,
          },
          {
            name: "Unit 1 Classroom Lecture Slide Deck",
            format: "PowerPoint PPTX",
            size: "4.8 MB",
            downloads: 980,
          },
        ],
      },
      {
        id: 2,
        title: "Unit 2: Evolution of Management Thought",
        shortTitle: "Management Thought",
        examMarks: "15 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "30 min read",
        examImportance: "Very High • Guaranteed Question on Fayol or Taylor",
        topics: [
          "Classical Theory: Scientific Management by F.W. Taylor",
          "Administrative Theory: Henri Fayol's 14 Principles of Management",
          "Bureaucratic Theory by Max Weber",
          "Neo-Classical Theory: Elton Mayo & Hawthorne Studies",
          "Modern Management: Systems Theory & Contingency Approach",
        ],
        learningObjectives: [
          "Analyze F.W. Taylor's Scientific Management and time-and-motion studies.",
          "Memorize and apply Henri Fayol's 14 universal principles of management in modern organizational contexts.",
          "Evaluate the strengths and dysfunctions of Max Weber's bureaucratic model.",
          "Understand the significance of the Hawthorne Experiments on human relations and informal social dynamics.",
        ],
        lectureNotes: {
          introduction:
            "Management thought has evolved over centuries from simple command structures during the Industrial Revolution to sophisticated behavioral and contingency frameworks. Understanding classical foundations helps modern managers avoid repeating historical errors.",
          sections: [
            {
              heading: "1. F.W. Taylor's Scientific Management (1911)",
              content:
                "Frederick Winslow Taylor is revered as the Father of Scientific Management. He replaced traditional 'rule of thumb' methods with scientific investigation of tasks.\nCore Principles:\n• Science, not Rule of Thumb: Scientifically design work methods rather than relying on intuition.\n• Harmony, not Discord: Promote mutual understanding between management and workers (Mental Revolution).\n• Cooperation, not Individualism: Mutual collaboration where management provides tools and guidance.\n• Maximum Output, in place of Restricted Output: Produce at maximum capacity with efficiency incentives.\n• Development of Each Person: Rigorous selection and systematic training of workers.",
            },
            {
              heading: "2. Henri Fayol's 14 Principles of Management",
              content:
                "Henri Fayol, the Father of Modern Operational Management, synthesized 14 universal management principles from his career as an industrial executive in France:\n1. Division of Work: Specialization increases output by making workers more efficient.\n2. Authority and Responsibility: Authority is the right to give orders; responsibility is its natural corollary.\n3. Discipline: Respect for agreements directed at achieving obedience, energy, and outward respect.\n4. Unity of Command: Each employee should receive orders from ONE superior only.\n5. Unity of Direction: One head and one plan for a group of activities with the same objective.\n6. Subordination of Individual Interest: Group goals supersede personal interests.\n7. Remuneration: Fair, satisfactory compensation for both employee and employer.\n8. Centralization: Optimum balance of centralized authority and decentralized execution.\n9. Scalar Chain (Line of Authority): Hierarchy from top executive to lowest rank, with Gangplank for emergency horizontal communication.\n10. Order: 'A place for everyone and everyone in their place' (Material & Social order).\n11. Equity: Kindness, fairness, and justice in dealing with subordinates.\n12. Stability of Tenure of Personnel: High employee turnover reduces efficiency.\n13. Initiative: Empowering workers to conceive and carry out plans.\n14. Esprit de Corps: Promoting team spirit and unity within the workforce.",
            },
            {
              heading: "3. Hawthorne Experiments & Human Relations",
              content:
                "Conducted by Elton Mayo and Fritz Roethlisberger at Western Electric's Hawthorne Works (1924–1932).\nMajor Findings:\n• The workplace is a social system; psychological factors often outweigh physical lighting or rest periods.\n• Informal group norms heavily govern individual productivity (the Hawthorne Effect).\n• Social recognition and belongingness drive motivation beyond pure monetary incentives.",
            },
          ],
          nepalCaseStudy: {
            company: "Nabil Bank Limited",
            scenario:
              "How Nabil Bank balances Fayol's Unity of Command and Scalar Chain with modern employee empowerment. While loan approvals over 5 Crore follow a strict scalar chain to the Board Credit Committee, relationship managers on the ground have the initiative to negotiate interest rates within set policy limits.",
            takeaway:
              "Classic principles like Unity of Command prevent confusion in financial institutions, while Mayo's human relations approach keeps employee turnover low in competitive banking.",
          },
          comparisonTable: {
            title: "Taylor's Scientific Management vs. Fayol's Administrative Theory",
            headers: ["Criteria", "F.W. Taylor (Scientific Management)", "Henri Fayol (Administrative Theory)"],
            rows: [
              ["Perspective", "Shop-floor & worker productivity (Bottom-up)", "Top-level executive governance (Top-down)"],
              ["Primary Focus", "Eliminating waste & improving mechanical efficiency", "Total organizational principles and structure"],
              ["Key Technique", "Time & Motion study, Differential piece-rate", "14 Universal management principles"],
              ["Applicability", "Specific manufacturing and production sectors", "Universally applicable across all organizational forms"],
              ["Title Revered", "Father of Scientific Management", "Father of Modern Operational Management"],
            ],
          },
        },
        summaryPoints: [
          "Taylor introduced scientific experimentation, standardizing tools, and the mental revolution.",
          "Fayol proposed the universal POCCC functions (Planning, Organizing, Commanding, Coordinating, Controlling) and 14 principles.",
          "Unity of Command prevents conflicting directives from dual reporting lines.",
          "Hawthorne studies proved workers are motivated by social recognition and group dynamics, not solely money.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 15,
            question:
              "Explain Henri Fayol's 14 principles of management. How are these principles relevant in modern Nepalese organizations?",
            answerOutline:
              "1. Introduction to Fayol's contribution (2 Marks).\n2. Enumerate and explain all 14 principles systematically (9 Marks).\n3. Contextualize 3-4 principles in Nepal (e.g., Unity of Command in banks, Division of Work in manufacturing) (3 Marks).\n4. Concluding critique (1 Mark).",
          },
          {
            university: "PU (Pokhara University)",
            year: "2021",
            marks: 10,
            question:
              "Compare and contrast the contributions of F.W. Taylor and Henri Fayol to management theory.",
            answerOutline:
              "Use a comparative table covering Origin, Perspective, Focus, Major Techniques, and Universal Applicability.",
          },
        ],
        resources: [
          {
            name: "Fayol's 14 Principles with Diagrams & Case Applications (PDF)",
            format: "PDF Document",
            size: "2.8 MB",
            downloads: 3890,
          },
          {
            name: "Comparative Analysis: Taylor vs Fayol vs Weber (PDF)",
            format: "PDF Document",
            size: "1.9 MB",
            downloads: 2150,
          },
        ],
      },
      {
        id: 3,
        title: "Unit 3: Organizational Environment & Planning",
        shortTitle: "Environment & Planning",
        examMarks: "12 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "24 min read",
        examImportance: "High • Frequent 10-Mark Question on Planning Steps",
        topics: [
          "Internal vs. External Environmental Forces (PESTEL)",
          "Concept, Importance & Limitations of Planning",
          "Types of Plans (Strategic, Tactical, Operational)",
          "Step-by-step Planning Process",
          "Management by Objectives (MBO by Peter Drucker)",
          "Decision Making Process & Behavioral Constraints",
        ],
        learningObjectives: [
          "Scan the business environment using PESTEL framework in Nepal's emerging market.",
          "Outline the formal step-by-step planning process from situational awareness to plan evaluation.",
          "Understand Peter Drucker's Management by Objectives (MBO) philosophy.",
          "Evaluate rational vs. bounded rationality decision-making models.",
        ],
        lectureNotes: {
          introduction:
            "Planning is looking ahead and preparing for the future. It is deciding in advance what to do, how to do it, when to do it, and who is to do it. Planning bridges the gap from where we are to where we want to be.",
          sections: [
            {
              heading: "1. Steps in the Planning Process",
              content:
                "1. Environmental Scanning: Identifying opportunities and threats in the external environment.\n2. Establishing Objectives: Formulating SMART (Specific, Measurable, Achievable, Relevant, Time-bound) targets.\n3. Developing Planning Premises: Forecasting future conditions, market demand, and raw material costs.\n4. Identifying Alternatives: Generating multiple pathways to achieve the targets.\n5. Evaluating Alternatives: Assessing options against costs, capital risk, and strategic fit.\n6. Selecting the Best Alternative: Choosing the optimal course of action.\n7. Formulating Derivative Plans: Creating secondary budgets, staffing plans, and procurement schedules.\n8. Execution & Review: Implementing plans and monitoring real-time performance against benchmarks.",
            },
            {
              heading: "2. Management by Objectives (MBO)",
              content:
                "Introduced by Peter Drucker in 1954 in 'The Practice of Management'. MBO is a collaborative management system where superiors and subordinates jointly define common goals, define each individual's major areas of responsibility in terms of expected results, and use these measures as guides for operating the unit.",
            },
          ],
          nepalCaseStudy: {
            company: "Daraz Nepal (Alibaba Group)",
            scenario:
              "How Daraz uses derivative planning for its annual '11.11' mega shopping festival. The strategic plan (gross merchandise value targets) cascades down to tactical logistics (onboarding 500 seasonal delivery riders) and operational contingency plans (redundant server bandwidth during flash sales).",
            takeaway:
              "Derivative planning ensures that logistical and operational tiers synchronize with high-level corporate revenue targets.",
          },
        },
        summaryPoints: [
          "Planning minimizes uncertainty and provides direction, but requires time, cost, and psychological flexibility.",
          "Strategic plans are formulated by top management (3-5 years); tactical by middle management (1-2 years); operational by first-line managers (<1 year).",
          "MBO emphasizes joint goal-setting and self-evaluation, fostering employee motivation and clarity.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2022",
            marks: 10,
            question:
              "Explain the steps involved in a formal planning process. Why is planning crucial in today's turbulent business environment?",
            answerOutline:
              "1. Define planning with diagram bridging 'where we are' to 'where we want to be'.\n2. Detail the 8 sequential steps of planning.\n3. Discuss strategic importance: risk reduction, economical operations, resource facilitation.\n4. Provide a corporate example.",
          },
        ],
        resources: [
          {
            name: "Unit 3 Planning Process & MBO Frameworks Handout (PDF)",
            format: "PDF Document",
            size: "2.2 MB",
            downloads: 1950,
          },
        ],
      },
      {
        id: 4,
        title: "Unit 4: Organizing & Organizational Structure",
        shortTitle: "Organizing & Structure",
        examMarks: "12 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "22 min read",
        examImportance: "High • Span of Control & Delegation Questions",
        topics: [
          "Meaning, Principles & Process of Organizing",
          "Departmentalization: Functional, Divisional, Matrix",
          "Span of Management (Narrow vs. Wide)",
          "Authority, Power & Responsibility",
          "Delegation of Authority: Barriers & Guidelines",
          "Centralization vs. Decentralization in Nepalese Context",
        ],
        learningObjectives: [
          "Explain the process of organizing: identification of activities, grouping, assignment of duties, and delegation.",
          "Compare functional, divisional, geographic, and matrix organizational structures.",
          "Analyze the factors determining Span of Control (Graicunas formula and practical variables).",
          "Identify barriers to effective delegation and methods to overcome them.",
        ],
        lectureNotes: {
          introduction:
            "Organizing is the process of defining and grouping the activities of the enterprise and establishing authority relationships among them. It translates plans into coordinated actions by assigning responsibilities to individuals and departments.",
          sections: [
            {
              heading: "1. Common Organizational Structures",
              content:
                "• Functional Structure: Groups activities by specialized business functions (Marketing, Finance, HR, Operations). Best for small to medium enterprises with single product lines.\n• Divisional Structure: Groups activities by product line, customer segment, or geographic territory. Enables autonomous profit centers.\n• Matrix Structure: Hybrid design combining functional and project command structures. Violates Fayol's Unity of Command (dual reporting lines) but excels in fast-paced tech and consulting firms.",
            },
            {
              heading: "2. Span of Control",
              content:
                "The number of subordinates who report directly to a manager. Determines whether an organization is Tall (narrow span, many levels, close supervision, high administrative overhead) or Flat (wide span, few levels, decentralized authority, high autonomy).",
            },
          ],
          nepalCaseStudy: {
            company: "Himalayan Bank & Banking Mergers",
            scenario:
              "During the merger between Himalayan Bank and Civil Bank, reorganizing branch networks required shifting from a centralized decision tree to regional hub structures to manage the doubled workforce without creating managerial bottlenecks.",
            takeaway:
              "As organizations expand, transitioning from centralized to decentralized structures becomes vital to prevent managerial paralysis.",
          },
        },
        summaryPoints: [
          "Organizing aligns human, physical, and financial assets to achieve strategic goals.",
          "Delegation passes authority downward, but the delegating manager retains ultimate accountability.",
          "Tall structures feature close control; flat structures enhance employee empowerment and communication speed.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "What is delegation of authority? Why are managers often reluctant to delegate? Suggest remedies.",
            answerOutline:
              "1. Define delegation (assignment of duty, grant of authority, creation of obligation).\n2. Barriers on manager's side: fear of subordinates outshining, lack of trust, 'I can do it better myself' fallacy.\n3. Barriers on subordinate's side: fear of criticism, lack of confidence, insufficient incentives.\n4. Remedies: establishing clear benchmarks, supportive culture, training, open communication.",
          },
        ],
        resources: [
          {
            name: "Organizational Design & Matrix Structure Notes (PDF)",
            format: "PDF Document",
            size: "2.5 MB",
            downloads: 1640,
          },
        ],
      },
      {
        id: 5,
        title: "Unit 5: Leading, Motivation & Controlling",
        shortTitle: "Leading & Control",
        examMarks: "15 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "28 min read",
        examImportance: "Very High • Guaranteed Question on Motivation Theories",
        topics: [
          "Leadership: Concept, Leadership Styles (Autocratic, Democratic, Laissez-faire)",
          "Maslow's Need Hierarchy Theory",
          "Herzberg's Two-Factor Motivation-Hygiene Theory",
          "McGregor's Theory X and Theory Y",
          "The Control Process: Standards, Measurement, Correction",
          "Modern Controlling Techniques (Budgetary, Financial, Audits)",
        ],
        learningObjectives: [
          "Distinguish between leadership and management.",
          "Critically compare Maslow's hierarchy of needs with Herzberg's two-factor theory.",
          "Assess Douglas McGregor's Theory X and Theory Y assumptions about human nature.",
          "Detail the four-stage control cycle and explain feedforward, concurrent, and feedback controls.",
        ],
        lectureNotes: {
          introduction:
            "Leading involves inspiring, influencing, and directing employees to accomplish organizational goals enthusiastically. Controlling completes the management loop by monitoring performance and ensuring activities conform to planned benchmarks.",
          sections: [
            {
              heading: "1. Motivation: Maslow vs. Herzberg",
              content:
                "• Abraham Maslow's Need Hierarchy: Humans are motivated by five levels of needs: Physiological, Safety, Social/Belonging, Esteem, and Self-Actualization. Lower-order needs must be substantially satisfied before higher-order needs motivate behavior.\n\n• Frederick Herzberg's Dual-Factor Theory:\n  1. Hygiene Factors (Extrinsic): Salary, company policy, physical working conditions, job security. Their absence causes dissatisfaction, but their presence merely prevents dissatisfaction (does NOT motivate).\n  2. Motivators (Intrinsic): Achievement, recognition, challenging work, responsibility, personal advancement. These actively drive high performance.",
            },
            {
              heading: "2. The Controlling Process",
              content:
                "1. Setting Performance Standards (SMART benchmarks).\n2. Measuring Actual Performance.\n3. Comparing Actual with Standards (identifying deviations).\n4. Taking Corrective Actions (re-engineering processes, additional training, resource reallocation).",
            },
          ],
          nepalCaseStudy: {
            company: "F1Soft International (eSewa Developers)",
            scenario:
              "How tech firms in Lalitpur maintain high software developer retention using Herzberg's motivators: flexible hackathons, autonomy in software architecture, and public recognition for bug-free releases, while ensuring hygiene factors (competitive salaries and comfortable ergonomic desks) are well maintained.",
            takeaway:
              "High salary alone cannot retain creative talent in knowledge industries; intrinsic motivators are essential for sustained excellence.",
          },
        },
        summaryPoints: [
          "Leaders influence through vision and trust; managers direct through positional authority.",
          "Hygiene factors eliminate dissatisfaction; motivators stimulate discretionary effort and excellence.",
          "Controlling without planning is blind; planning without controlling is futile.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "Critically evaluate Herzberg's Two-Factor Theory of motivation. How can a manager utilize it to motivate employees in Nepal?",
            answerOutline:
              "1. Outline Herzberg's research methodology and core thesis (2 Marks).\n2. Differentiate Hygiene Factors vs Motivators with diagram (4 Marks).\n3. Practical application: eliminate hygiene deficiencies first (fair pay, safe workspace), then introduce motivators (responsibility, career path) (3 Marks).\n4. Limitations of the theory (1 Mark).",
          },
          {
            university: "PU (Pokhara University)",
            year: "2022",
            marks: 10,
            question:
              "Describe the steps involved in the controlling process. Differentiate between feedforward and feedback control.",
            answerOutline:
              "1. Define controlling.\n2. Detail the 4 sequential steps.\n3. Differentiate Feedforward (preventive, before activity), Concurrent (real-time monitoring), and Feedback (post-mortem evaluation after completion).",
          },
        ],
        resources: [
          {
            name: "Motivation Theories Comparison & Control Process Notes (PDF)",
            format: "PDF Document",
            size: "3.1 MB",
            downloads: 2980,
          },
          {
            name: "Complete Principles of Management Solved Past Papers (2018-2024)",
            format: "Comprehensive Compilation PDF",
            size: "8.5 MB",
            downloads: 6240,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 2. FINANCIAL ACCOUNTING (fa)
  // -----------------------------------------------------------------------
  "financial-accounting": {
    academicYear: "2026 Academic Syllabus",
    courseCode: "ACC 201",
    creditHours: "3 Credit Hours",
    fullMarks: 100,
    passMarks: 50,
    evaluationScheme: "Internal Assessment (40%) • University Board Exam (60%)",
    overview:
      "Financial Accounting trains BBA students in the systematic recording, measurement, and reporting of business transactions in compliance with Nepal Financial Reporting Standards (NFRS) and International Accounting Standards (IAS).",
    units: [
      {
        id: 1,
        title: "Unit 1: Conceptual Framework & Accounting Principles",
        shortTitle: "Accounting Principles & GAAP",
        examMarks: "8-10 Marks in Board Exam",
        duration: "6 Lecture Hours",
        readTime: "20 min read",
        examImportance: "High • Compulsory Theory in Group A & B",
        topics: [
          "Meaning, Purpose & Users of Financial Accounting",
          "GAAP & Accounting Concepts: Entity, Going Concern, Accrual, Matching, Conservatism",
          "Nepal Financial Reporting Standards (NFRS) & ICAN Regulations",
          "The Fundamental Accounting Equation: Assets = Liabilities + Capital",
        ],
        learningObjectives: [
          "Explain the primary objectives of financial accounting and identify internal vs external users.",
          "Apply core accounting conventions (Accrual, Conservatism, Dual Aspect) to practical transactions.",
          "Master the Accounting Equation and analyze the balance sheet impact of complex corporate operations.",
        ],
        lectureNotes: {
          introduction:
            "Accounting is the language of business. According to the American Institute of Certified Public Accountants (AICPA), 'Accounting is the art of recording, classifying, and summarizing in a significant manner and in terms of money, transactions and events which are, in part at least, of a financial character, and interpreting the results thereof.'",
          sections: [
            {
              heading: "1. Core Accounting Principles & Conventions",
              content:
                "• Business Entity Concept: The business is treated as distinct and separate from its owners. Personal expenses of the owner cannot be mingled with company accounts.\n• Going Concern Concept: It is assumed that the business will continue operating indefinitely and will not liquidate in the foreseeable future.\n• Money Measurement Concept: Only transactions expressible in monetary units (NPR) are recorded.\n• Accrual Concept: Revenue is recognized when earned (not when cash is received); expenses are recognized when incurred (not when paid).\n• Matching Concept: Expenses incurred in an accounting period must be matched against revenues generated during that same period.\n• Conservatism / Prudence: Anticipate no profit, but provide for all possible future losses.",
            },
            {
              heading: "2. The Fundamental Accounting Equation",
              content:
                "Every transaction has a dual effect on the balance sheet:\nAssets = Liabilities + Owner's Equity (Capital)\nExpanded: Assets = Liabilities + Capital + Revenue - Expenses - Drawings",
            },
          ],
          nepalCaseStudy: {
            company: "Shikhar Insurance & NFRS Compliance",
            scenario:
              "How insurance firms in Nepal transitioned to NFRS 17 for insurance contracts, shifting from cash-basis premium recognition to unearned premium reserves, providing transparent actuarial valuations to the Nepal Insurance Authority (Beema Samiti).",
            takeaway:
              "Strict adherence to international standards like NFRS prevents misleading reporting of insurer solvency and protects policyholders.",
          },
        },
        summaryPoints: [
          "Assets = Liabilities + Equity must balance after every single business event.",
          "Accrual accounting is mandatory under Companies Act 2063 of Nepal.",
          "Conservatism dictates valuing inventory at lower of cost or net realizable value (NRV).",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 5,
            question:
              "Explain the 'Going Concern' and 'Conservatism' conventions with practical accounting examples.",
            answerOutline:
              "1. Going Concern: Fixed assets depreciated over useful life rather than written off immediately.\n2. Conservatism: Creating provisions for doubtful debts while ignoring unearned contingent gains.",
          },
        ],
        resources: [
          {
            name: "Accounting Principles & NFRS Guidelines Summary (PDF)",
            format: "PDF Document",
            size: "2.1 MB",
            downloads: 2100,
          },
        ],
      },
      {
        id: 2,
        title: "Unit 2: Mechanics of Accounting: Journals & Ledgers",
        shortTitle: "Journals & Ledgers",
        examMarks: "15 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "25 min read",
        examImportance: "Crucial • Practical Numerical Question",
        topics: [
          "Rules of Debit and Credit: Golden Rules vs. Modern Accounting Approach",
          "Recording Business Transactions in General Journal",
          "Specialized Subsidiary Books: Cash Book (Three-Column), Purchase & Sales Books",
          "Posting to General Ledger & Balancing Accounts",
        ],
        learningObjectives: [
          "Apply the Golden Rules (Personal, Real, Nominal) and Modern Approach (ALCER: Assets, Liabilities, Capital, Expenses, Revenue).",
          "Record complex multi-tier journal entries with VAT (13%), trade discounts, and cash discounts.",
          "Prepare Three-Column Cash Books with contra entries and bank reconciliations.",
        ],
        lectureNotes: {
          introduction:
            "The journal is the book of primary entry where financial events are chronologically entered for the first time. The ledger is the principal book where identical transactions are classified under individual heads.",
          sections: [
            {
              heading: "1. Rules of Debit and Credit",
              content:
                "Traditional (Golden Rules):\n• Personal Account: Debit the Receiver, Credit the Giver.\n• Real Account: Debit what comes in, Credit what goes out.\n• Nominal Account: Debit all expenses & losses, Credit all incomes & gains.\n\nModern American Approach:\n• Assets & Expenses: Increase is Debited (+), Decrease is Credited (-).\n• Liabilities, Capital & Revenue: Increase is Credited (+), Decrease is Debited (-).",
            },
          ],
        },
        summaryPoints: [
          "Every debit must have an equal corresponding credit.",
          "Trade discount is deducted on the invoice and NEVER recorded in the journal; Cash discount is recorded.",
          "Contra entries occur when cash is deposited into or withdrawn from the bank.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2022",
            marks: 10,
            question:
              "Journalize the following 5 transactions including VAT at 13% and cash discounts.",
            answerOutline:
              "Step-by-step journal entries showing calculation of VAT purchase/sales accounts and net cash settlement.",
          },
        ],
        resources: [
          {
            name: "Golden Rules & 50 Solved Journal Entries Guide (PDF)",
            format: "PDF Document",
            size: "3.2 MB",
            downloads: 4120,
          },
        ],
      },
      {
        id: 3,
        title: "Unit 3: Trial Balance & Rectification of Errors",
        shortTitle: "Trial Balance & Errors",
        examMarks: "10 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "22 min read",
        examImportance: "High • Guaranteed Numerical Problem",
        topics: [
          "Meaning, Objectives & Limitations of Trial Balance",
          "Errors Disclosed vs. Errors Not Disclosed by Trial Balance",
          "Errors of Principle, Omission, Commission & Compensating Errors",
          "Suspense Account Preparation & Rectification Entries",
        ],
        learningObjectives: [
          "Construct a balanced Trial Balance from given ledger balances.",
          "Differentiate between one-sided errors and two-sided errors.",
          "Pass journal entries to rectify errors before and after preparing the Suspense Account.",
        ],
        lectureNotes: {
          introduction:
            "A Trial Balance is a statement prepared with debit and credit balances of ledger accounts to verify arithmetic accuracy of records.",
          sections: [
            {
              heading: "1. Errors That Do NOT Affect the Trial Balance",
              content:
                "• Error of Complete Omission: Transaction omitted entirely from journal.\n• Error of Principle: Recording capital expenditure as revenue expenditure (e.g., machinery installation wages debited to Wages A/c).\n• Error of Original Entry: Incorrect amount entered in journal and posted to both accounts.\n• Compensating Errors: One error counterbalances the exact monetary impact of another error.",
            },
          ],
        },
        summaryPoints: [
          "Trial balance proves arithmetic accuracy, NOT absolute accounting perfection.",
          "Suspense account temporarily holds the net discrepancy until errors are discovered.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 8,
            question:
              "Pass rectification entries for errors identified after preparing a trial balance with a suspense account.",
            answerOutline:
              "Pass two-sided corrections and clear the Suspense account balance to zero.",
          },
        ],
        resources: [
          {
            name: "Error Rectification Master Problem Set (PDF)",
            format: "PDF Document",
            size: "1.8 MB",
            downloads: 2400,
          },
        ],
      },
      {
        id: 4,
        title: "Unit 4: Depreciation Accounting & Asset Valuation",
        shortTitle: "Depreciation & Assets",
        examMarks: "12 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "24 min read",
        examImportance: "High • Straight Line vs WDV Numericals",
        topics: [
          "Concept, Causes & Need for Providing Depreciation",
          "Straight Line Method (SLM) vs. Written Down Value Method (WDV)",
          "Accounting Treatment: Provision for Depreciation Account",
          "Disposal and Sale of Fixed Assets with Gain/Loss Calculation",
        ],
        learningObjectives: [
          "Calculate annual depreciation using Straight Line and Diminishing Balance methods.",
          "Maintain Machinery Account, Provision for Depreciation Account, and Asset Disposal Account.",
          "Account for changes in depreciation method and tax implications under Nepal Income Tax Act.",
        ],
        lectureNotes: {
          introduction:
            "Depreciation is the permanent, gradual, and continuous decrease in the book value of a fixed asset due to wear and tear, passage of time, or obsolescence.",
          sections: [
            {
              heading: "1. Formulae & Method Comparison",
              content:
                "• Straight Line Method (SLM): Annual Depreciation = (Cost of Asset - Scrap Value) / Estimated Useful Life.\n• Written Down Value (WDV): Depreciation is calculated at a fixed percentage on the opening book value of the asset each year.",
            },
          ],
        },
        summaryPoints: [
          "Depreciation matches asset cost against revenue generated over its operational life.",
          "Under Nepal Income Tax Act 2058, declining balance pool depreciation (Pools A to E) is mandatory for tax filings.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "A manufacturing firm purchased machinery for Rs. 500,000. Prepare Machinery Account for 3 years under WDV at 10% per annum.",
            answerOutline:
              "Systematic calculation of annual depreciation and year-end closing balances.",
          },
        ],
        resources: [
          {
            name: "Depreciation Accounting Numerical Solved Workbook (PDF)",
            format: "PDF Document",
            size: "2.4 MB",
            downloads: 3200,
          },
        ],
      },
      {
        id: 5,
        title: "Unit 5: Final Accounts & Financial Statements (NFRS Format)",
        shortTitle: "Financial Statements",
        examMarks: "15-20 Marks in Board Exam",
        duration: "12 Lecture Hours",
        readTime: "35 min read",
        examImportance: "Critical • Compulsory 15-Mark Long Numerical in Group C",
        topics: [
          "Preparation of Trading Account and Gross Profit Calculation",
          "Profit & Loss Account and Balance Sheet with Adjustments",
          "Common Year-End Adjustments: Closing Stock, Outstanding/Prepaid, Bad Debts, Depreciation",
          "Statement of Financial Position according to NFRS / Modern Formats",
          "Cash Flow Statement: Operating, Investing, and Financing Activities",
        ],
        learningObjectives: [
          "Prepare complete financial statements from adjusted trial balances.",
          "Handle double-entry adjustments for closing inventory, prepaid expenses, and provision for doubtful debts.",
          "Classify assets into Current and Non-Current; liabilities into Current and Non-Current per NFRS standards.",
        ],
        lectureNotes: {
          introduction:
            "Final Accounts summarize financial operations and current health. They provide the definitive answers: Did the company make a net profit or loss during the period? What is the enterprise worth today?",
          sections: [
            {
              heading: "1. Components of Modern Financial Statements",
              content:
                "• Statement of Profit or Loss (Income Statement): Revenue from operations minus Cost of Goods Sold = Gross Profit; subtracting administrative/selling expenses yields Net Profit.\n• Statement of Financial Position (Balance Sheet): Snapshot of Assets, Liabilities, and Equity on a specific date.\n• Statement of Cash Flows: Tracks actual cash inflows and outflows across Operating, Investing, and Financing segments.",
            },
          ],
        },
        summaryPoints: [
          "Adjusting entries always affect at least one Income Statement account and one Balance Sheet account.",
          "Closing stock appears in Trading Account credit side and Balance Sheet asset side.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 15,
            question:
              "From the given Trial Balance of a trading firm in Kathmandu, prepare Trading and Profit & Loss Account and Balance Sheet as of Ashad 31, 2080.",
            answerOutline:
              "Full comprehensive 15-mark solution with clear working notes for depreciation and outstanding expenses.",
          },
        ],
        resources: [
          {
            name: "Complete Final Accounts Solved Compilation (TU/PU 15-Mark Questions)",
            format: "Comprehensive PDF",
            size: "6.2 MB",
            downloads: 5800,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 3. MARKETING MANAGEMENT (mm)
  // -----------------------------------------------------------------------
  "marketing-management": {
    academicYear: "2026 Academic Syllabus",
    courseCode: "MKT 201",
    creditHours: "3 Credit Hours",
    fullMarks: 100,
    passMarks: 50,
    evaluationScheme: "Internal Assessment (40%) • University Board Exam (60%)",
    overview:
      "Marketing Management explores strategic market analysis, buyer behavior psychology, segmentation, targeting, positioning (STP), and the tactical marketing mix (4Ps/7Ps) within the fast-evolving South Asian and global economy.",
    units: [
      {
        id: 1,
        title: "Unit 1: Understanding Marketing & Customer Value",
        shortTitle: "Concept of Marketing",
        examMarks: "10-12 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "22 min read",
        examImportance: "High • Core Concept Questions",
        topics: [
          "Definition & Core Concepts: Needs, Wants, Demands, Value & Satisfaction",
          "Evolution of Marketing Philosophies: Production, Product, Selling, Marketing & Holistic Marketing",
          "Customer Relationship Management (CRM) & Customer Lifetime Value (CLV)",
          "Marketing Ethics and Social Responsibility in Nepal",
        ],
        learningObjectives: [
          "Differentiate between Needs, Wants, and Demands with consumer goods examples.",
          "Analyze the historical shift from the Selling Concept to the Holistic Marketing Concept.",
          "Explain how modern brands build enduring customer equity through CRM systems.",
        ],
        lectureNotes: {
          introduction:
            "As Peter Drucker famously remarked, 'Because the purpose of business is to create a customer, the business enterprise has two—and only two—basic functions: marketing and innovation.' Marketing is the management process responsible for identifying, anticipating, and satisfying customer requirements profitably.",
          sections: [
            {
              heading: "1. Evolution of Marketing Philosophies",
              content:
                "• Production Concept: Consumers favor products that are widely available and inexpensive. Focus on high production efficiency and low costs.\n• Product Concept: Consumers favor products offering the most quality, performance, and innovative features. Risk of marketing myopia.\n• Selling Concept: Consumers will not buy enough without aggressive selling and promotion efforts.\n• Marketing Concept: Customer-centered 'sense and respond' philosophy. The key to organizational goals is being more effective than competitors in creating, delivering, and communicating superior customer value.\n• Holistic Marketing: Recognizes that 'everything matters' in marketing: Relationship Marketing, Integrated Marketing, Internal Marketing, and Performance Marketing.",
            },
          ],
          nepalCaseStudy: {
            company: "Wai Wai Noodles & Instant Food Category",
            scenario:
              "How Wai Wai shifted from a pure production/selling orientation in the 1980s to emotional lifestyle branding and social responsibility (disaster relief supplies in Nepal), maintaining over 60% market share despite dozens of competing noodle brands.",
            takeaway:
              "Long-term category dominance requires transitioning from product feature selling to holistic customer value and emotional resonance.",
          },
        },
        summaryPoints: [
          "Needs pre-exist marketers; marketers shape wants into demands backed by purchasing power.",
          "Selling focuses on the seller's need to turn goods into cash; marketing focuses on satisfying customer needs.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "Compare and contrast the Selling Concept and the Marketing Concept. Why is holistic marketing gaining prominence?",
            answerOutline:
              "Draw the comparative table: Starting point, Focus, Means, and Ends. Explain the 4 pillars of holistic marketing.",
          },
        ],
        resources: [
          {
            name: "Unit 1 Marketing Concepts & Frameworks Guide (PDF)",
            format: "PDF Document",
            size: "2.3 MB",
            downloads: 2190,
          },
        ],
      },
      {
        id: 2,
        title: "Unit 2: Marketing Environment & Consumer Behavior",
        shortTitle: "Environment & Consumer Behavior",
        examMarks: "15 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "28 min read",
        examImportance: "Very High • Guaranteed Question on Buyer Behavior",
        topics: [
          "Micro-environment (Company, Suppliers, Intermediaries, Customers, Competitors, Publics)",
          "Macro-environment (Demographic, Economic, Socio-Cultural, Technological, Political, Legal)",
          "Consumer Buying Decision Process (5 Stages)",
          "Factors Influencing Consumer Behavior: Cultural, Social, Personal & Psychological",
        ],
        learningObjectives: [
          "Scan the micro and macro marketing environment of Nepal.",
          "Deconstruct the 5-stage consumer buying decision journey: Need Recognition to Post-purchase Behavior.",
          "Analyze cognitive dissonance and methods marketers use to minimize post-purchase regret.",
        ],
        lectureNotes: {
          introduction:
            "Consumer behavior examines how individuals, groups, and organizations select, buy, use, and dispose of goods, services, ideas, or experiences to satisfy their needs and desires.",
          sections: [
            {
              heading: "1. The 5-Stage Consumer Buying Process",
              content:
                "1. Problem/Need Recognition: Triggered by internal stimuli (hunger, thirst) or external stimuli (advertising, peer recommendations).\n2. Information Search: Personal sources (family, friends), commercial sources (ads, websites), public sources (social reviews).\n3. Evaluation of Alternatives: Assessing brand attributes and weighing trade-offs.\n4. Purchase Decision: Executing the transaction, influenced by attitudes of others and unanticipated situational factors.\n5. Post-Purchase Behavior: Evaluating satisfaction versus expectations. Minimizing cognitive dissonance.",
            },
          ],
        },
        summaryPoints: [
          "Cultural factors exert the broadest and deepest influence on consumer behavior in Nepal.",
          "Cognitive dissonance is buyer remorse after an expensive, high-involvement purchase.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2022",
            marks: 10,
            question:
              "Explain the consumer buying decision process with reference to purchasing a smartphone in Nepal.",
            answerOutline:
              "Detail the 5 stages with realistic local context (comparing brands on Daraz/YouTube reviews, purchasing at New Road, post-purchase warranty).",
          },
        ],
        resources: [
          {
            name: "Consumer Behavior Models & Buyer Journey Notes (PDF)",
            format: "PDF Document",
            size: "2.6 MB",
            downloads: 2850,
          },
        ],
      },
      {
        id: 3,
        title: "Unit 3: Segmentation, Targeting & Positioning (STP)",
        shortTitle: "STP Strategy",
        examMarks: "12-15 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "25 min read",
        examImportance: "High • Strategic Marketing Core",
        topics: [
          "Bases for Segmenting Consumer Markets: Geographic, Demographic, Psychographic & Behavioral",
          "Requirements for Effective Segmentation (Measurable, Accessible, Substantial, Actionable)",
          "Target Market Selection Strategies: Undifferentiated, Differentiated, Concentrated & Micromarketing",
          "Positioning Strategies & Perceptual Mapping (Value Proposition Formulation)",
        ],
        learningObjectives: [
          "Identify and segment markets across geographic, demographic, and psychographic criteria.",
          "Select optimal targeting strategies based on competitive intensity and company resources.",
          "Construct a perceptual positioning map to identify unserved market niches.",
        ],
        lectureNotes: {
          introduction:
            "A company cannot serve all customers in a broad market. Customers are too numerous, widely dispersed, and varied in their buying requirements. STP strategies allow firms to focus resources on the most profitable segments.",
        },
        summaryPoints: [
          "Segmentation divides the market; Targeting chooses which segments to enter; Positioning creates a distinct image in consumer minds.",
          "Effective segments must be measurable, accessible, substantial, differentiable, and actionable.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "Define market segmentation. Explain the demographic and behavioral bases of market segmentation with examples.",
            answerOutline:
              "Explain age, income, education (demographic) and usage rate, loyalty status, benefit sought (behavioral).",
          },
        ],
        resources: [
          {
            name: "STP Matrix & Perceptual Mapping Guide (PDF)",
            format: "PDF Document",
            size: "1.9 MB",
            downloads: 2400,
          },
        ],
      },
      {
        id: 4,
        title: "Unit 4: Product & Pricing Strategies (The First 2 Ps)",
        shortTitle: "Product & Pricing",
        examMarks: "15 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "30 min read",
        examImportance: "Very High • Guaranteed Question on PLC or Pricing",
        topics: [
          "Levels of Product: Core, Actual & Augmented Product",
          "Product Life Cycle (PLC): Stages, Characteristics & Marketing Strategies",
          "New Product Development Process (NPD)",
          "Pricing Objectives & Factors Influencing Price Decisions",
          "Pricing Strategies: Market Skimming, Market Penetration, Cost-Plus & Value-Based",
        ],
        learningObjectives: [
          "Analyze the four stages of the Product Life Cycle (Introduction, Growth, Maturity, Decline).",
          "Evaluate when to deploy price skimming versus penetration pricing strategies.",
          "Understand the 8 steps of New Product Development from idea generation to commercialization.",
        ],
        lectureNotes: {
          introduction:
            "Product is the heart of the marketing mix. Price is the ONLY element in the marketing mix that produces revenue; all other elements produce costs.",
        },
        summaryPoints: [
          "Price skimming charges high initial prices to recover R&D costs; Penetration charges low initial prices to capture mass market share.",
          "Maturity stage of PLC is characterized by peak sales, intense competition, and downward pressure on price.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "Explain the stages of the Product Life Cycle (PLC) and recommend appropriate marketing strategies for each stage.",
            answerOutline:
              "Provide the bell curve diagram. Tabulate strategies for Product, Price, Distribution, and Promotion across all 4 stages.",
          },
        ],
        resources: [
          {
            name: "PLC Strategies & Pricing Models Comprehensive Study Notes (PDF)",
            format: "PDF Document",
            size: "2.7 MB",
            downloads: 3300,
          },
        ],
      },
      {
        id: 5,
        title: "Unit 5: Distribution & Integrated Marketing Communications (IMC)",
        shortTitle: "Place & Promotion",
        examMarks: "15 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "26 min read",
        examImportance: "High • Promotion Mix & Digital Channels",
        topics: [
          "Marketing Channels: Functions, Channel Levels (Direct vs. Indirect)",
          "Channel Conflict: Horizontal vs. Vertical Conflict and Management",
          "The Promotion Mix: Advertising, Sales Promotion, Public Relations, Personal Selling & Direct Marketing",
          "Integrated Marketing Communications (IMC) Planning & Digital Marketing Channels in Nepal",
        ],
        learningObjectives: [
          "Design efficient multi-tier distribution channels in geographically challenging markets like Nepal.",
          "Coordinate the 5 elements of the promotion mix into a cohesive, non-contradictory brand voice.",
          "Leverage social media marketing and influencer campaigns within IMC frameworks.",
        ],
        lectureNotes: {
          introduction:
            "Distribution ensures products reach target consumers in the right place, at the right time, in the right quantity. Integrated Marketing Communications ensures that all brand contacts deliver a consistent, clear message across all media touchpoints.",
        },
        summaryPoints: [
          "Push strategy directs marketing to channel intermediaries; Pull strategy directs promotion to end-consumers.",
          "IMC prevents mixed signals by aligning PR, digital ads, point-of-sale promos, and packaging.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2022",
            marks: 10,
            question:
              "What is Integrated Marketing Communications (IMC)? Discuss the elements of the promotion mix.",
            answerOutline:
              "Define IMC. Detail Advertising, Sales Promo, PR, Personal Selling, and Direct Marketing with examples from Nepal.",
          },
        ],
        resources: [
          {
            name: "Complete Marketing Management Solved Past Exam Collection (PDF)",
            format: "Comprehensive PDF",
            size: "7.1 MB",
            downloads: 4920,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. BUSINESS LAW (bl)
  // -----------------------------------------------------------------------
  "business-law": {
    academicYear: "2026 Academic Syllabus",
    courseCode: "LAW 201",
    creditHours: "3 Credit Hours",
    fullMarks: 100,
    passMarks: 50,
    evaluationScheme: "Internal Assessment (40%) • University Board Exam (60%)",
    overview:
      "Business Law equips BBA students with thorough legal knowledge of the Nepalese legal system, Nepal Contract Act 2056, Companies Act 2063, Negotiable Instruments, and Consumer Protection laws vital for corporate executives.",
    units: [
      {
        id: 1,
        title: "Unit 1: Introduction to Law & Legal System of Nepal",
        shortTitle: "Legal System of Nepal",
        examMarks: "8-10 Marks in Board Exam",
        duration: "6 Lecture Hours",
        readTime: "20 min read",
        examImportance: "High • Foundation of Legal Studies",
        topics: [
          "Meaning, Nature & Classification of Law",
          "Sources of Nepalese Law: Legislation, Precedents, Custom, Agreements",
          "Hierarchy of Courts in Nepal (Supreme Court, High Courts, District Courts)",
          "Rule of Law & Principles of Natural Justice",
        ],
        learningObjectives: [
          "Understand the definition and fundamental purposes of commercial law.",
          "Identify the primary and secondary sources of Nepalese business law.",
          "Analyze the 3-tier judicial hierarchy in Nepal and the binding authority of Supreme Court precedents (Nazir).",
        ],
        lectureNotes: {
          introduction:
            "Law is a body of rules of conduct of binding legal force and effect, prescribed, recognized, and enforced by controlling authority. In business, law provides certainty, enforces commercial promises, and protects property rights.",
          sections: [
            {
              heading: "1. Hierarchy of Courts in Nepal",
              content:
                "Under the Constitution of Nepal 2072:\n• Supreme Court (Sarbochha Adalat): Apex court of record with ultimate power of judicial review and constitutional interpretation. Decisions and precedents (Nazir) are strictly binding on all subordinate courts.\n• High Courts (Uchha Adalat): Seven provincial appellate courts overseeing district courts.\n• District Courts (Jilla Adalat): Original courts of first instance for all civil and criminal commercial litigation.\n• Specialized Tribunals: Debt Recovery Tribunal (DRT), Labor Court, and Revenue Tribunal.",
            },
          ],
        },
        summaryPoints: [
          "Legislation passed by the Federal Parliament is the supreme source of written law in Nepal.",
          "Natural Justice requires two cardinal rules: Nemo judex in causa sua (No one should be a judge in their own cause) and Audi alteram partem (Hear the other side).",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 8,
            question:
              "Explain the various sources of Nepalese business law with special emphasis on judicial precedents.",
            answerOutline:
              "Discuss statutory legislation, Supreme Court Nazir published in Nepal Kanoon Patrika (NKP), commercial custom, and professional treaties.",
          },
        ],
        resources: [
          {
            name: "Nepal Legal Hierarchy & Sources of Commercial Law Handout (PDF)",
            format: "PDF Document",
            size: "1.9 MB",
            downloads: 2100,
          },
        ],
      },
      {
        id: 2,
        title: "Unit 2: Law of Contract in Nepal (Nepal Contract Act 2056)",
        shortTitle: "Law of Contract",
        examMarks: "20 Marks in Board Exam",
        duration: "14 Lecture Hours",
        readTime: "35 min read",
        examImportance: "Critical • Multiple Questions in Board Exam",
        topics: [
          "Definition & Essential Elements of a Valid Contract under Section 5",
          "Offer and Acceptance: Rules & Communication",
          "Consideration: Meaning, Types & Exceptions to 'No Consideration, No Contract'",
          "Capacity of Parties (Minors, Persons of Unsound Mind, Disqualified by Law)",
          "Free Consent: Coercion, Undue Influence, Fraud, Misrepresentation & Mistake",
          "Void, Voidable & Illegal Agreements",
        ],
        learningObjectives: [
          "Master the 10 essential elements of a legally enforceable contract.",
          "Identify factors that vitiate free consent and render a contract voidable under Section 14.",
          "Differentiate between void agreements (ab initio) and voidable contracts.",
        ],
        lectureNotes: {
          introduction:
            "Section 2(a) of the Nepal Contract Act 2056 defines a contract as: 'An agreement enforceable by law between two or more parties to do or not to do any act.' All contracts are agreements, but not all agreements are contracts.",
          sections: [
            {
              heading: "1. Essential Elements of a Valid Contract (Section 5)",
              content:
                "1. Offer and Acceptance: Lawful proposal accepted unconditionally.\n2. Intention to Create Legal Relations: Social or domestic promises are not contracts (Balfour v. Balfour).\n3. Lawful Consideration: Quid pro quo (something in return).\n4. Capacity of Parties: Must be of the age of majority (18 years in Nepal), sound mind, and not disqualified by statute.\n5. Free Consent: Consent given without coercion, undue influence, fraud, misrepresentation, or mistake.\n6. Lawful Object: The purpose must not be illegal, immoral, or opposed to public policy.\n7. Certainty & Possibility of Performance: Terms must be definite and physically/legally achievable.",
            },
          ],
        },
        summaryPoints: [
          "An agreement with a minor is void ab initio in Nepal.",
          "Coercion commits or threatens to commit an act forbidden by criminal code; Undue influence exploits a position of dominant trust.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 15,
            question:
              "'All contracts are agreements, but all agreements are not contracts.' Explain this statement with reference to the Nepal Contract Act 2056.",
            answerOutline:
              "1. Explain the scope of agreement vs contract.\n2. Detail all essential elements required to transform an agreement into a binding contract.\n3. Cite relevant sections of the Nepal Contract Act 2056.",
          },
        ],
        resources: [
          {
            name: "Nepal Contract Act 2056 Landmark Case Laws & Study Guide (PDF)",
            format: "PDF Document",
            size: "3.8 MB",
            downloads: 4890,
          },
        ],
      },
      {
        id: 3,
        title: "Unit 3: Performance, Discharge & Remedies for Breach of Contract",
        shortTitle: "Discharge & Remedies",
        examMarks: "12-15 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "25 min read",
        examImportance: "High • Practical Problem Question on Breach",
        topics: [
          "Modes of Discharge of Contract (Performance, Agreement, Impossibility, Breach)",
          "Doctrine of Frustration (Section 79 of Contract Act)",
          "Anticipatory vs. Actual Breach of Contract",
          "Remedies for Breach: Rescission, Damages (Ordinary, Special, Liquidated), Specific Performance, Injunction",
        ],
        learningObjectives: [
          "Explain the legal grounds under which contractual obligations are discharged.",
          "Understand the Doctrine of Frustration and force majeure clauses in commercial agreements.",
          "Calculate and apply legal damages per the rule in Hadley v. Baxendale.",
        ],
        lectureNotes: {
          introduction:
            "When one party breaks a promise without legal justification, the aggrieved party is entitled to legal remedies designed to place them in the financial position they would have enjoyed had the contract been performed.",
        },
        summaryPoints: [
          "Ordinary damages compensate for direct and natural losses arising in the usual course of business.",
          "Specific performance is granted by court discretion when monetary compensation is inadequate.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2022",
            marks: 10,
            question:
              "Discuss the various remedies available to an aggrieved party in the event of a breach of contract under Nepalese law.",
            answerOutline:
              "Detail Rescission, Suit for Damages, Suit for Specific Performance, Suit for Injunction, and Quantum Meruit.",
          },
        ],
        resources: [
          {
            name: "Breach of Contract Remedies & Case Study Solutions (PDF)",
            format: "PDF Document",
            size: "2.4 MB",
            downloads: 2900,
          },
        ],
      },
      {
        id: 4,
        title: "Unit 4: Special Contracts (Bailment, Pledge, Agency & Indemnity)",
        shortTitle: "Special Contracts",
        examMarks: "12 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "24 min read",
        examImportance: "High • Contract of Agency & Bailment Duties",
        topics: [
          "Contract of Indemnity & Guarantee: Rights & Duties of Surety",
          "Contract of Bailment: Rights and Duties of Bailor & Bailee",
          "Pledge / Pawn: Rights of Pawnor and Pawnee (Commercial Pledges)",
          "Contract of Agency: Creation of Agency, Rights & Liabilities of Agent, Termination",
        ],
        learningObjectives: [
          "Distinguish between a contract of indemnity (two parties) and a contract of guarantee (three parties).",
          "State the duties and standard of care expected from a bailee.",
          "Understand how agency is created and the scope of an agent's apparent authority.",
        ],
        lectureNotes: {
          introduction:
            "Special commercial arrangements like shipping, collateral lending, and corporate representation are governed by specific statutory provisions under the Nepal Contract Act.",
        },
        summaryPoints: [
          "A bailee must take reasonable care of bailed goods as an ordinary prudent person would of their own goods.",
          "An agent cannot delegate authority ('Delegatus non potest delegare') unless authorized by custom or necessity.",
        ],
        pastQuestions: [
          {
            university: "PU (Pokhara University)",
            year: "2023",
            marks: 10,
            question:
              "Define a contract of bailment. Explain the duties and responsibilities of a bailee under Nepalese law.",
            answerOutline:
              "Define bailment. List bailee duties: take care, avoid unauthorized use, do not mix goods, return goods, return accretion.",
          },
        ],
        resources: [
          {
            name: "Special Contracts (Agency, Bailment, Guarantee) Handout (PDF)",
            format: "PDF Document",
            size: "2.1 MB",
            downloads: 2300,
          },
        ],
      },
      {
        id: 5,
        title: "Unit 5: Company Law & Corporate Governance in Nepal",
        shortTitle: "Company Law",
        examMarks: "15-18 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "30 min read",
        examImportance: "Very High • Companies Act 2063 Provisions",
        topics: [
          "Salient Features of Companies Act 2063 of Nepal",
          "Types of Companies: Private, Public & Single Person Companies",
          "Incorporation Procedure: Office of Company Registrar (OCR)",
          "Memorandum of Association (MOA) & Articles of Association (AOA)",
          "Doctrine of Ultra Vires & Indoor Management",
          "Board of Directors: Powers, Duties & Corporate Social Responsibility (CSR)",
          "Annual General Meeting (AGM) and Winding Up Procedures",
        ],
        learningObjectives: [
          "Follow the legal procedure for registering a private or public limited company at the Office of the Company Registrar (OCR) in Nepal.",
          "Differentiate between the constitutional charter (MOA) and internal operating bylaws (AOA).",
          "Understand the legal implications of the Doctrine of Ultra Vires.",
        ],
        lectureNotes: {
          introduction:
            "A company is an incorporated artificial person created by law, having an independent legal entity with perpetual succession and a common seal (Salomon v. Salomon & Co. Ltd.).",
          sections: [
            {
              heading: "1. Key Characteristics of a Company under Companies Act 2063",
              content:
                "• Separate Legal Entity: The company is distinct from its shareholders.\n• Perpetual Succession: Existence does not end with the death, bankruptcy, or insanity of shareholders.\n• Limited Liability: Liability of shareholders is limited to the unpaid amount on shares subscribed.\n• Common Seal: Official signature of the corporate body.",
            },
          ],
          nepalCaseStudy: {
            company: "Office of the Company Registrar (OCR Nepal)",
            scenario:
              "Digital company incorporation via the OCR online portal. Mandatory compliance under Companies Act 2063 requires allocating 1% of net profits to Corporate Social Responsibility (CSR) for companies earning over 1 Crore net profit.",
            takeaway:
              "Directors must comply with corporate governance guidelines and timely filing of annual audit returns to avoid heavy fines and blacklisting.",
          },
        },
        summaryPoints: [
          "Public limited companies require minimum 7 promoters; Private limited companies can be formed by 1 person (max 101).",
          "Acts beyond the MOA object clause are ultra vires and void, incapable of ratification even by unanimous shareholder vote.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "What is a Memorandum of Association (MOA)? Explain the Doctrine of Ultra Vires and its legal consequences.",
            answerOutline:
              "Define MOA. Detail the 6 standard clauses. Explain Ashbury Railway Carriage case. Discuss consequences under Companies Act 2063.",
          },
        ],
        resources: [
          {
            name: "Nepal Companies Act 2063 Corporate Governance Notes (PDF)",
            format: "PDF Document",
            size: "3.5 MB",
            downloads: 3600,
          },
          {
            name: "Complete Business Law Master Solved Question Bank (PDF)",
            format: "Comprehensive PDF",
            size: "8.1 MB",
            downloads: 5120,
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 5. E-COMMERCE & DIGITAL BUSINESS (e-com)
  // -----------------------------------------------------------------------
  "ecommerce-digital-business": {
    academicYear: "2026 Academic Syllabus",
    courseCode: "IT 401",
    creditHours: "3 Credit Hours",
    fullMarks: 100,
    passMarks: 50,
    evaluationScheme: "Internal Assessment (40%) • University Board Exam (60%)",
    overview:
      "E-Commerce & Digital Business analyzes digital payment infrastructures, omnichannel marketing, cloud architectures, cyber security, and the Electronic Transactions Act within Nepal's rapid fintech boom.",
    units: [
      {
        id: 1,
        title: "Unit 1: Foundations of E-Commerce & Digital Economy",
        shortTitle: "E-Commerce Fundamentals",
        examMarks: "10-12 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "24 min read",
        examImportance: "High • Digital Business Models",
        topics: [
          "Definition, Scope & Evolution of E-Commerce",
          "E-Commerce Business Models: B2B, B2C, C2C, B2G, D2C",
          "Revenue Models: Advertising, Subscription, Transaction Fee, Affiliate",
          "Digital Disruption & Omnichannel Transformation in Nepal",
        ],
        learningObjectives: [
          "Categorize e-commerce enterprises by operational models.",
          "Assess digital payment readiness and mobile penetration metrics across Nepal.",
          "Identify network effects and economies of scale in digital marketplace platforms.",
        ],
        lectureNotes: {
          introduction:
            "E-Commerce refers to the buying and selling of goods, services, or information over electronically mediated networks like the Internet. Digital business incorporates this with end-to-end organizational digital transformation.",
        },
        summaryPoints: [
          "Network effects state that the value of a platform grows exponentially with each added user.",
          "Pure-play online stores are converging with brick-and-mortar into seamless omnichannel ecosystems.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "Explain the major business models of E-Commerce with examples from the Nepalese market.",
            answerOutline:
              "Examine B2C (Daraz, Gyapu), C2C (Hamrobazar), B2B (local wholesale apps), and Fintech gateways.",
          },
        ],
        resources: [
          {
            name: "Digital Business Models & E-Commerce Architecture Guide (PDF)",
            format: "PDF Document",
            size: "2.5 MB",
            downloads: 2100,
          },
        ],
      },
      {
        id: 2,
        title: "Unit 2: Digital Payment Systems & Fintech Infrastructure",
        shortTitle: "Digital Payments & Fintech",
        examMarks: "15 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "28 min read",
        examImportance: "Very High • NRB Directives & Payment Ecosystem",
        topics: [
          "Digital Wallets, QR Payments & Nepal Rastra Bank Directives",
          "Payment Gateway Integration: fonepay, eSewa, Khalti, ConnectIPS",
          "256-Bit SSL/TLS Encryption & Tokenization Security",
          "Central Bank Digital Currencies (CBDC) & Digital Lending",
        ],
        learningObjectives: [
          "Understand the settlement architecture of national payment switches like ConnectIPS.",
          "Analyze encryption standards securing merchant-to-bank gateway handshakes.",
          "Examine Nepal Rastra Bank (NRB) regulatory caps on daily digital wallet transactions.",
        ],
        lectureNotes: {
          introduction:
            "A seamless, secure payment layer is the circulatory system of modern e-commerce. In Nepal, interoperable NepalQR standards and mobile digital wallets have reduced Cash on Delivery (COD) dependency from 85% to under 45%.",
        },
        summaryPoints: [
          "Tokenization replaces sensitive 16-digit card numbers with randomized digital tokens.",
          "National payment switches provide real-time gross settlement (RTGS) between participating commercial banks.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "Discuss the growth of digital payment systems in Nepal. What are the key challenges facing mobile wallet adoption?",
            answerOutline:
              "Highlight fonepay interoperability, cybersecurity awareness, rural digital literacy, and internet penetration.",
          },
        ],
        resources: [
          {
            name: "Fintech Gateways & Nepal Rastra Bank Guidelines Summary (PDF)",
            format: "PDF Document",
            size: "2.8 MB",
            downloads: 2750,
          },
        ],
      },
      {
        id: 3,
        title: "Unit 3: Digital Marketing, SEO & Social Commerce",
        shortTitle: "SEO & Social Commerce",
        examMarks: "12 Marks in Board Exam",
        duration: "8 Lecture Hours",
        readTime: "22 min read",
        examImportance: "High • Digital Growth Strategies",
        topics: [
          "Search Engine Optimization (SEO): On-Page & Off-Page Fundamentals",
          "Pay-Per-Click (PPC) Advertising & Google Ads Auction Mechanics",
          "Social Commerce via TikTok, Instagram & Facebook Shop",
          "Conversion Rate Optimization (CRO) & Shopping Cart Abandonment",
        ],
        learningObjectives: [
          "Formulate keyword research strategies and on-page technical SEO audits.",
          "Calculate Customer Acquisition Cost (CAC) and Return on Ad Spend (ROAS).",
          "Implement remarketing pixels to recover abandoned shopping carts.",
        ],
        lectureNotes: {
          introduction:
            "Digital marketing leverages electronic devices and online channels to build brand awareness, acquire paying traffic, and maximize customer retention.",
        },
        summaryPoints: [
          "Organic SEO produces sustainable long-term traffic; PPC generates immediate targeted leads.",
          "Cart abandonment rates average 70%; simplified one-click checkouts recover significant revenue.",
        ],
        pastQuestions: [
          {
            university: "PU (Pokhara University)",
            year: "2022",
            marks: 10,
            question:
              "What is Search Engine Optimization (SEO)? Distinguish between On-Page and Off-Page SEO with examples.",
            answerOutline:
              "Define search algorithms, keyword density, meta tags (on-page) versus backlinks and domain authority (off-page).",
          },
        ],
        resources: [
          {
            name: "SEO Checklist & E-Commerce Marketing Toolkit (PDF)",
            format: "PDF Document",
            size: "2.2 MB",
            downloads: 2400,
          },
        ],
      },
      {
        id: 4,
        title: "Unit 4: Legal & Cybersecurity Frameworks in Nepal",
        shortTitle: "Cybersecurity & Law",
        examMarks: "15 Marks in Board Exam",
        duration: "10 Lecture Hours",
        readTime: "26 min read",
        examImportance: "Very High • Electronic Transaction Act 2063",
        topics: [
          "Electronic Transactions Act (ETA) 2063 of Nepal: Legal Status of Digital Signatures",
          "Cyber Crimes & Penalties: Hacking, Phishing, Identity Theft",
          "Data Privacy, GDPR Principles & Individual Rights",
          "Intellectual Property Rights (IPR) in Digital Software & Domain Names",
        ],
        learningObjectives: [
          "Understand the legal validity of electronic records and digital certificates under ETA 2063.",
          "Identify cyber offenses and adjudicating procedures in the Cyber Bureau of Nepal Police.",
          "Implement ISO 27001 cybersecurity policies within digital startups.",
        ],
        lectureNotes: {
          introduction:
            "Without a robust legal and cybersecurity umbrella, trust in digital commerce collapses. Nepal's Electronic Transactions Act 2063 grants evidentiary value to digital records and punishes computer-related crimes.",
        },
        summaryPoints: [
          "A digital signature verified by a licensed Certifying Authority holds the same legal standing as a handwritten signature in Nepal.",
          "Cyber offenses under ETA 2063 carry fines up to Rs. 200,000 and imprisonment up to 5 years.",
        ],
        pastQuestions: [
          {
            university: "TU (Tribhuvan University)",
            year: "2023",
            marks: 10,
            question:
              "Highlight the major provisions of the Electronic Transactions Act 2063 regarding digital signatures and cyber crimes.",
            answerOutline:
              "Discuss sections on authentication of records, duties of subscribers, unauthorized computer access penalties, and cyber court adjudication.",
          },
        ],
        resources: [
          {
            name: "Electronic Transactions Act 2063 Commentary & Study Notes (PDF)",
            format: "PDF Document",
            size: "3.2 MB",
            downloads: 3100,
          },
          {
            name: "Complete E-Commerce & Digital Business Solved Papers (PDF)",
            format: "Comprehensive PDF",
            size: "6.8 MB",
            downloads: 4100,
          },
        ],
      },
    ],
  },
};

// =========================================================================
// DYNAMIC SYLLABUS GENERATOR (FALLBACK FOR ANY OTHER SUBJECT IN CATALOG)
// Ensures 100% of all 19 BBA subjects have a rich, complete multi-unit template
// =========================================================================

export function getSubjectCurriculum(slug) {
  // 1. Direct match in curated high-detail store
  if (DETAILED_SUBJECT_CURRICULUM[slug]) {
    const curated = DETAILED_SUBJECT_CURRICULUM[slug];
    const catalogItem = NOTES_CATALOG.find((n) => n.slug === slug);
    return {
      ...curated,
      subject: catalogItem || {
        id: slug,
        title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        slug,
        semester: "Semester 1",
        category: "Management",
        description: "Comprehensive university study notes and syllabus modules.",
        universities: ["tu", "pu", "ku", "pu-east"],
        fileCount: "24 Files",
        modulesCount: `${curated.units.length} Modules`,
      },
    };
  }

  // 2. Find subject in catalog
  const catalogItem = NOTES_CATALOG.find((n) => n.slug === slug);
  if (!catalogItem) {
    return null;
  }

  // 3. Procedural multi-unit curriculum generator based on subject parameters
  const unitCount = parseInt(catalogItem.modulesCount, 10) || 5;
  const units = [];

  const unitTemplates = [
    {
      titleSuffix: "Foundations, Core Concepts & Scope",
      short: "Core Concepts",
      topics: [
        `Fundamental Principles of ${catalogItem.title}`,
        "Historical Evolution & Academic Frameworks",
        "Significance & Application in Modern Corporate Sector",
        "Key Challenges & Contemporary Trends in Nepal",
      ],
      examMarks: "10-12 Marks in Board Exam",
    },
    {
      titleSuffix: "Theoretical Frameworks & Classical Models",
      short: "Theoretical Models",
      topics: [
        "Primary Theories & Empirical Methodologies",
        "Behavioral Dimensions & Analytical Tools",
        "Quantitative Models vs Qualitative Assessments",
        "Comparative Analysis of Classical Paradigms",
      ],
      examMarks: "15 Marks in Board Exam",
    },
    {
      titleSuffix: "Strategic Planning, Process & Methodologies",
      short: "Process & Strategy",
      topics: [
        "Step-by-step Execution Frameworks",
        "Resource Allocation & Operational Scheduling",
        "Risk Mitigation & Scenario Forecasting",
        "Integration with Organizational Information Systems",
      ],
      examMarks: "12-15 Marks in Board Exam",
    },
    {
      titleSuffix: "Implementation, Structural Design & Systems",
      short: "Structural Systems",
      topics: [
        "Institutional Design & Operational Workflows",
        "Standard Operating Procedures (SOPs)",
        "Compliance with Regulatory & Statutory Directives in Nepal",
        "Monitoring Mechanisms & Quality Control",
      ],
      examMarks: "12 Marks in Board Exam",
    },
    {
      titleSuffix: "Performance Evaluation, Control & Future Trends",
      short: "Evaluation & Control",
      topics: [
        "Key Performance Indicators (KPIs) & Balanced Scorecard",
        "Audit Protocols & Internal Verification Systems",
        "Digital Transformation & Global Best Practices",
        "Case Analysis of Leading Enterprises in Nepal",
      ],
      examMarks: "15-20 Marks in Board Exam",
    },
    {
      titleSuffix: "Advanced Case Studies & Practical Applications",
      short: "Practical Applications",
      topics: [
        "In-depth Sectoral Analysis in Nepal",
        "Strategic Decision Making under Market Uncertainty",
        "Corporate Governance & Ethics",
        "Board Exam Solved Numerical & Analytical Models",
      ],
      examMarks: "15 Marks in Board Exam",
    },
    {
      titleSuffix: "Specialized Corporate Frameworks & Policies",
      short: "Corporate Policy",
      topics: [
        "Policy Drafting & Stakeholder Management",
        "Cross-Functional Team Collaboration",
        "Impact of Global Macro-Economic Shocks",
        "Comprehensive Project Revision",
      ],
      examMarks: "10-15 Marks in Board Exam",
    },
    {
      titleSuffix: "Comprehensive Review & University Past Papers",
      short: "Exam Review",
      topics: [
        "Past 10 Years TU, PU, KU Question Synthesis",
        "Model Answering Techniques for High Marks",
        "Critical Formulas & Conceptual Summary Tables",
        "Final Mock Examination Paper",
      ],
      examMarks: "20 Marks in Board Exam",
    },
  ];

  for (let i = 0; i < unitCount; i++) {
    const template = unitTemplates[i % unitTemplates.length];
    const unitNum = i + 1;
    units.push({
      id: unitNum,
      title: `Unit ${unitNum}: ${catalogItem.title} — ${template.titleSuffix}`,
      shortTitle: `Unit ${unitNum}: ${template.short}`,
      examMarks: template.examMarks,
      duration: `${6 + (i % 3) * 2} Lecture Hours`,
      readTime: `${20 + (i % 4) * 4} min read`,
      examImportance: i === 0 || i === 1 || i === unitCount - 1 ? "Very High • High Weightage" : "High",
      topics: template.topics,
      learningObjectives: [
        `Understand the core terminology and practical mechanisms of ${catalogItem.title}.`,
        "Analyze real-world corporate data and apply theoretical models to solve business problems.",
        "Synthesize academic knowledge to tackle university board exam questions with confidence.",
      ],
      lectureNotes: {
        introduction: `This unit establishes the critical academic foundation for ${catalogItem.title}, equipping BBA students with analytical tools required in modern organizational leadership and semester examinations across Tribhuvan University (TU), Pokhara University (PU), and Kathmandu University (KU).`,
        sections: [
          {
            heading: `1. Core Principles of ${catalogItem.title}`,
            content: `In the modern BBA curriculum of Nepal, ${catalogItem.title} bridges theoretical rigor with practical execution. Students must master both qualitative concepts and quantitative benchmarks to excel in semester examinations and corporate internships.`,
          },
          {
            heading: "2. Strategic Application in Nepalese Business Context",
            content: `Enterprises operating in Kathmandu, Pokhara, and industrial corridors like Biratnagar must align their operational systems with regulatory mandates, tax laws, and consumer dynamics. Understanding these nuances guarantees higher marks in analytical exam questions.`,
          },
        ],
        nepalCaseStudy: {
          company: "Leading Nepalese Corporate Enterprise",
          scenario: `Practical case application illustrating how successful commercial organizations in Nepal utilize principles of ${catalogItem.title} to gain sustainable competitive advantage and achieve higher operational efficiency.`,
          takeaway: `Sound conceptual understanding combined with systematic execution enables domestic firms to scale and navigate market disruptions.`,
        },
      },
      summaryPoints: [
        `Core principles of ${catalogItem.title} are foundational across all 8 BBA semesters.`,
        "Regular revision of university past questions significantly improves board exam performance.",
        "Always structure answers with definitions, diagrams, corporate examples, and concise conclusions.",
      ],
      pastQuestions: [
        {
          university: "TU (Tribhuvan University)",
          year: "2023",
          marks: 10,
          question: `Explain the fundamental concepts and practical significance of ${catalogItem.title} in the modern corporate sector of Nepal.`,
          answerOutline:
            "1. Define the core concepts with recognized academic citations (2 Marks).\n2. Detail the primary components and structural framework (5 Marks).\n3. Provide relevant examples from Nepalese banking, manufacturing, or service sectors (2 Marks).\n4. Conclude with strategic recommendations (1 Mark).",
        },
        {
          university: "PU (Pokhara University)",
          year: "2022",
          marks: 10,
          question: `Discuss the key challenges and emerging opportunities in ${catalogItem.title}. How should managers address these challenges?`,
          answerOutline:
            "Analyze internal organizational challenges, external environmental constraints (PESTEL), and strategic solutions.",
        },
      ],
      resources: [
        {
          name: `Unit ${unitNum} Comprehensive Lecture Notes (PDF)`,
          format: "PDF Document",
          size: "2.5 MB",
          downloads: 1850 + i * 150,
        },
        {
          name: `Unit ${unitNum} TU & PU Past Exam Questions Solved (PDF)`,
          format: "PDF Document",
          size: "1.9 MB",
          downloads: 2400 + i * 120,
        },
      ],
    });
  }

  return {
    academicYear: "2026 Academic Syllabus",
    courseCode: `${catalogItem.category.substring(0, 3).toUpperCase()} ${catalogItem.semester.replace("Semester ", "10")}`,
    creditHours: "3 Credit Hours",
    fullMarks: 100,
    passMarks: 50,
    evaluationScheme: "Internal Assessment (40%) • University Board Exam (60%)",
    overview: catalogItem.description,
    subject: catalogItem,
    units,
  };
}
