// =========================================================================
// TOPIC SUMMARIES & OVERVIEWS FOR BBA NOTES PREVIEWS
// Provides concise, academic 2-3 sentence paragraph summaries for each syllabus
// topic, enabling clean previewing on book pages and quick study overviews.
// =========================================================================

export const CURATED_TOPIC_SUMMARIES = {
  "principles-of-management": {
    // Unit 1: Nature & Concept of Management
    1: [
      "Management is the continuous, goal-oriented process of planning, organizing, leading, and controlling human, financial, and physical resources to accomplish organizational goals economically and effectively. In modern BBA studies, it operates as a dynamic, multidisciplinary practice that balances internal operational efficiency with proactive external environmental adaptation.",
      "While often used interchangeably, administration represents the higher-level determinative function that formulates overarching policy, long-range objectives, and capital structures. In contrast, management is the executive function responsible for directing personnel, coordinating operations, and executing projects within those administrative guidelines.",
      "Management synthesizes systematic theories, verifiable principles, and empirical inquiry (Science) with personalized intuition, creative execution, and situational judgment (Art). In emerging economies like Nepal, management is rapidly maturing into a recognized profession backed by formal BBA/MBA credentials and ethical governance bodies.",
      "Professor Henry Mintzberg classifies managerial work into 10 interrelated roles across three broad clusters: Interpersonal (Figurehead, Leader, Liaison), Informational (Monitor, Disseminator, Spokesperson), and Decisional (Entrepreneur, Disturbance Handler, Resource Allocator, Negotiator) that managers execute concurrently.",
      "Robert Katz identified three fundamental competencies distributed across corporate hierarchy: Technical skills for frontline supervisors, Conceptual skills for strategic top executives, and Human interpersonal skills which remain uniformly vital across all managerial levels.",
      "Contemporary managers in Nepal face complex challenges including rapid digital transformation, high talent migration, volatile regulatory mandates, remittance-shaped consumer dynamics, and the imperative to institutionalize family-owned businesses into transparent corporate entities.",
    ],
    // Unit 2: Evolution of Management Thought
    2: [
      "Frederick Winslow Taylor pioneered scientific management by replacing arbitrary rules of thumb with empirical time-and-motion studies, standardized tools, differential piece-rate incentives, and a mutual mental revolution between management and workers to maximize industrial productivity.",
      "Henri Fayol synthesized 14 universal principles of operational management—including Division of Work, Unity of Command, and Scalar Chain—alongside the core POCCC administrative functions (Planning, Organizing, Commanding, Coordinating, Controlling) governing top-level corporate direction.",
      "Max Weber formulated the rational-legal bureaucracy characterized by fixed jurisdictions, clear hierarchical authority, formal written documentation, and impersonal rule compliance to ensure structural predictability, fairness, and administrative stability.",
      "The landmark Hawthorne experiments at Western Electric revealed that workplaces operate as complex social systems where informal peer norms, psychological recognition, and emotional belonging influence output far more than physical illumination or monetary incentives alone.",
      "Modern management views the enterprise as an open, organic system interacting with dynamic external environments, asserting that optimal managerial action is contingent upon specific situational variables rather than universal rigid rules.",
    ],
    // Unit 3: Organizational Environment & Planning
    3: [
      "Environmental scanning systematically assesses external forces shaping commercial survival through the PESTEL model (Political, Economic, Social, Technological, Environmental, and Legal factors), helping managers proactively convert external threats into sustainable market opportunities.",
      "Planning is the foundational management function of deciding in advance what to do, how to do it, when to do it, and who is to do it. It bridges the gap between current reality and strategic goals, minimizing operational uncertainty and preventing redundant expenditures.",
      "Organizations deploy hierarchical plans: long-range Strategic Plans (3–5 years) set by top executives, intermediate Tactical Plans (1–2 years) coordinated by divisional heads, and short-range Operational Plans (daily to monthly) executed by frontline supervisors.",
      "The formal planning sequence proceeds through eight sequential phases: environmental scanning, establishing SMART objectives, formulating planning premises, identifying alternatives, rigorous comparative evaluation, selecting optimal courses of action, formulating derivative plans, and ongoing review.",
      "Peter Drucker's Management by Objectives (MBO) framework establishes collaborative goal-setting where superiors and subordinates jointly determine specific performance benchmarks and periodically evaluate milestone achievement, fostering intrinsic accountability and organizational alignment.",
      "Decision making involves selecting the most effective alternative from available choices. While classical theory assumes perfect rationality, Herbert Simon's Bounded Rationality model demonstrates that real managers operate under information constraints and cognitive limits to make satisficing decisions.",
    ],
    // Unit 4: Organizing & Organizational Structure
    4: [
      "Organizing is the managerial process of identifying and grouping enterprise activities, assigning specific responsibilities to personnel, and establishing clear authority-responsibility relationships to translate strategic plans into coordinated collective performance.",
      "Departmentalization structures organizations by specialized operational functions, distinct product or customer divisions, or matrix project grids. While functional designs build deep expertise, matrix models provide dynamic cross-functional agility despite having dual reporting lines.",
      "Span of control defines the number of subordinates reporting directly to a single manager. A narrow span produces a tall organizational hierarchy with close supervision and higher overhead, whereas a wide span yields a flat, agile structure with greater employee autonomy.",
      "Authority is the legitimate formal right to command and allocate resources, power is the capacity to influence others' behavior, and responsibility is the obligatory commitment to execute assigned duties. Sound organizational design requires parity between authority and responsibility.",
      "Delegation passes operational decision-making authority downward while retaining ultimate supervisory accountability. Effective delegation requires overcoming managerial fears of losing control, establishing clear performance criteria, and providing supportive communication.",
      "Centralization concentrates decision authority at top corporate headquarters, while decentralization systematically disperses authority throughout operating units. In Nepal's expanding corporate sector, growing enterprises transition toward decentralization to prevent operational bottlenecks.",
    ],
    // Unit 5: Leading, Motivation & Controlling
    5: [
      "Leadership is the interpersonal art of inspiring and guiding followers to strive enthusiastically toward shared objectives. Leaders deploy autocratic, participative (democratic), or free-rein (laissez-faire) styles depending on follower maturity and situational urgency.",
      "Abraham Maslow theorized that human motivation is governed by five hierarchical tiers: Physiological, Safety, Social/Love, Esteem, and Self-Actualization needs, asserting that lower-order physiological and security needs must be substantially met before higher-order growth needs activate.",
      "Frederick Herzberg bifurcated workplace factors into extrinsic Hygiene factors (salary, working conditions, policies) which prevent dissatisfaction, and intrinsic Motivators (achievement, recognition, meaningful responsibility) which actively inspire high performance and job satisfaction.",
      "Douglas McGregor contrasted conventional authoritarian management (Theory X, assuming workers inherently dislike work and require coercion) with modern humanistic management (Theory Y, assuming workers are self-motivated, seek responsibility, and possess widespread creative potential).",
      "Controlling is the cybernetic process of establishing measurable performance standards, evaluating actual achievements against benchmarks, analyzing variances, and implementing corrective actions to ensure operations conform to strategic plans.",
      "Contemporary organizations maintain quality and fiscal discipline using budgetary controls, financial ratio analyses, break-even metrics, internal management audits, and real-time digital dashboards that provide continuous feedback across operations.",
    ],
  },
  "financial-accounting": {
    1: [
      "Financial accounting is the specialized branch of accounting focused on systematically recording, classifying, summarizing, and reporting financial transactions to provide external stakeholders with reliable statements of financial performance.",
      "Generally Accepted Accounting Principles (GAAP) and Nepal Financial Reporting Standards (NFRS) ensure financial statements maintain cross-company comparability, transparency, objectivity, and statutory compliance.",
      "The accounting cycle operates as a rigorous sequential workflow extending from initial source document verification and journalizing through ledger posting, trial balance preparation, adjusting entries, and financial statement publication.",
      "The fundamental accounting equation (Assets = Liabilities + Owner's Equity) enforces dual-aspect bookkeeping, ensuring that every debit entry has a corresponding and equal credit balancing entry.",
      "Cash basis accounting recognizes revenue and expenses only when liquid funds change hands, whereas accrual basis accounting matches revenues earned and expenses incurred within the specific accounting period.",
    ],
  },
};

/**
 * Returns a high-quality 2-3 sentence paragraph summary for any given unit topic.
 * Supports curated overrides, matching section text extraction, and smart fallbacks.
 */
export function getTopicSummary(unit, topicTitle, topicIndex, subjectSlug) {
  // 1. Check curated overrides
  if (subjectSlug && CURATED_TOPIC_SUMMARIES[subjectSlug]?.[unit?.id]?.[topicIndex]) {
    return CURATED_TOPIC_SUMMARIES[subjectSlug][unit.id][topicIndex];
  }

  // 2. Check if unit has explicit topicSummaries
  if (unit?.topicSummaries && unit.topicSummaries[topicIndex]) {
    return unit.topicSummaries[topicIndex];
  }

  // 3. Try finding a matching section in unit.lectureNotes.sections
  if (unit?.lectureNotes?.sections && unit.lectureNotes.sections.length > 0) {
    const matchedSec =
      unit.lectureNotes.sections.find((s) => {
        const h = s.heading.toLowerCase().replace(/^\d+[\.\-\s]*/, "").trim();
        const t = (topicTitle || "").toLowerCase().replace(/^\d+[\.\-\s]*/, "").trim();
        return h.includes(t) || t.includes(h);
      }) || unit.lectureNotes.sections[topicIndex];

    if (matchedSec && matchedSec.content) {
      const cleanText = matchedSec.content
        .replace(/•\s*/g, "")
        .replace(/\n+/g, " ")
        .replace(/^\d+[\.\-\s]*/, "")
        .replace(/\s+/g, " ")
        .trim();

      const sentences = cleanText.split(/(?<=[.?!])\s+/);
      if (sentences.length >= 2) {
        return sentences.slice(0, 2).join(" ");
      } else if (sentences.length === 1 && sentences[0].length > 40) {
        return sentences[0];
      }
    }
  }

  // 4. Try unit.summaryPoints
  if (unit?.summaryPoints && unit.summaryPoints[topicIndex]) {
    return unit.summaryPoints[topicIndex];
  }

  // 5. Intelligent academic fallback
  const cleanTitle = (topicTitle || "this topic").replace(/^\d+[\.\-\s]*/, "").trim();
  return `Covers the fundamental principles, theoretical frameworks, and practical applications of ${cleanTitle}. Essential study material for semester board examinations and analytical case evaluations.`;
}

