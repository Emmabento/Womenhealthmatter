export interface CurrencyOption {
  code: string;
  symbol: string;
  regularPrice: number;
  salePrice: number;
  addonPrice: number;
  label: string;
}

export const CURRENCIES: Record<string, CurrencyOption> = {
  NGN: {
    code: 'NGN',
    symbol: '₦',
    regularPrice: 15000,
    salePrice: 4999,
    addonPrice: 2000,
    label: 'NGN (₦)',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    regularPrice: 25,
    salePrice: 9.99,
    addonPrice: 3.99,
    label: 'USD ($)',
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    regularPrice: 20,
    salePrice: 7.99,
    addonPrice: 3.49,
    label: 'GBP (£)',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    regularPrice: 22,
    salePrice: 8.99,
    addonPrice: 3.79,
    label: 'EUR (€)',
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    regularPrice: 30,
    salePrice: 12.99,
    addonPrice: 4.99,
    label: 'CAD ($)',
  },
  GHS: {
    code: 'GHS',
    symbol: 'GH₵',
    regularPrice: 350,
    salePrice: 120,
    addonPrice: 45,
    label: 'GHS (GH₵)',
  },
  KES: {
    code: 'KES',
    symbol: 'KSh',
    regularPrice: 3500,
    salePrice: 1300,
    addonPrice: 500,
    label: 'KES (KSh)',
  },
  ZAR: {
    code: 'ZAR',
    symbol: 'R',
    regularPrice: 450,
    salePrice: 180,
    addonPrice: 70,
    label: 'ZAR (R)',
  },
};

export const CORE_SOLUTIONS = [
  {
    id: 'pain',
    title: 'Painful Menstruation',
    headline: 'Real Relief for Debilitating Cramps',
    desc: 'Understand prostaglandins, how uterine contractions cause pain, gentle at-home heat therapy, stretching, safe pain-relief guidelines, and ginger tea protocols backed by clinical research.',
    tag: 'Solution #1',
  },
  {
    id: 'flow',
    title: 'Irregular & Heavy Periods',
    headline: 'Restoring Cycle Rhythm & Iron Levels',
    desc: 'Practical guide to cycle tracking, knowing why periods get delayed or skipped (stress, PCOS, weight shifts), recognizing heavy flow red flags, and fighting anemia with everyday local foods.',
    tag: 'Solution #2',
  },
  {
    id: 'myths',
    title: 'Herbal Safety & Myth Busting',
    headline: 'The Honest Truth About Herbs, Agbo & Hygiene',
    desc: 'Clear, respectful facts on traditional Nigerian remedies (moringa, zobo, herbal mixtures), dangerous practices to avoid, and busting 10 common myths keeping women in silence.',
    tag: 'Solution #3',
  },
];

export const PAIN_POINTS = [
  {
    title: 'Severe Cramps in Belly, Back & Thighs',
    desc: 'Pain that forces you to miss work, arrive late, close your shop early, cancel plans, or spend days curled up in bed with a hot-water bottle.',
  },
  {
    title: 'Heaviness, Large Clots & Constant Pad Changes',
    desc: 'Soaking through pads every hour or two, doubling up on pads, getting up in the middle of the night, and feeling exhausted, dizzy, or pale.',
  },
  {
    title: 'Unpredictable, Delayed, or Skipped Cycles',
    desc: 'Never knowing when your period will show up, stress over missed dates, and confusion about how to accurately count cycle days.',
  },
  {
    title: 'Dangerous Herbal Advice & Cultural Myths',
    desc: 'Being told "all women suffer it" or pushed to drink untested bitter mixtures ("agbo") to "force" periods or "wash the womb."',
  },
];

export const CHAPTER_CATEGORIES = [
  {
    category: 'Part 1: Understanding & Relieving Pain',
    chapters: [
      {
        number: '01',
        title: 'Understanding Your Period',
        summary: 'How the womb works, the difference between your period and your full cycle, and how to count cycle days accurately.',
      },
      {
        number: '02',
        title: 'Why Do Periods Hurt?',
        summary: 'The biology of prostaglandins, why cramps spread to the lower back and thighs, and primary vs. secondary pain (fibroids, endometriosis).',
      },
      {
        number: '03',
        title: 'Natural Ways to Manage Menstrual Pain at Home',
        summary: '10 gentle, low-cost comfort measures: safe heat application, Child’s pose & knee hugs, light movement, abdominal massage, hydration, and safe pain reliever rules.',
      },
    ],
  },
  {
    category: 'Part 2: Nourishing Foods, Drinks & Traditional Herbs',
    chapters: [
      {
        number: '04',
        title: 'Nigerian Foods to Eat During Your Period',
        summary: 'Affordable market staples: beans, moi moi, fish, eggs, ugu (fluted pumpkin), efo, okra, fruits, oats, and fighting iron deficiency and fatigue.',
      },
      {
        number: '05',
        title: 'A Simple Seven-Day Nigerian Meal Plan',
        summary: 'Full week of realistic breakfast, lunch, and dinner recipes with budget swaps and easy recipe cards (Moi moi, Ugu-egg stir-fry, Warm oatmeal).',
      },
      {
        number: '06',
        title: 'Homemade Drinks and Ingredients Women Should Know',
        summary: 'Evidence-based breakdown: how to brew food-strength ginger tea, warm water, lemon water, peppermint tea, zobo facts, and hydration secrets.',
      },
      {
        number: '07',
        title: 'Traditional Nigerian Herbs and Home Remedies',
        summary: 'Honest evidence on moringa, zobo, herbal bitters & agbo. Dangerous practices to avoid, and a respectful way to talk to family elders.',
      },
    ],
  },
  {
    category: 'Part 3: Irregular Flow, Heavy Bleeding & Myths',
    chapters: [
      {
        number: '08',
        title: 'Heavy Periods and Painful Bleeding',
        summary: 'Clear signs of heavy bleeding (soaking pads, large clots), anemia warning signs, and critical red flags when bleeding is an emergency.',
      },
      {
        number: '09',
        title: 'Irregular Periods',
        summary: 'Why cycles change (stress, weight, PCOS, thyroid), how to maintain an accurate period record, and when to seek medical evaluation.',
      },
      {
        number: '10',
        title: 'Missed Periods: What Should You Do?',
        summary: 'Step-by-step calm guide: home pregnancy testing instructions, negative vs positive results, and why you must never use herbs to "force" a period.',
      },
      {
        number: '11',
        title: 'Common Period Myths',
        summary: 'Clear, compassionate answers to 10 myths: "every pain is normal", "menstrual blood is toxic", "food cures cramps", and "women should stay silent."',
      },
    ],
  },
  {
    category: 'Part 4: Your Care Toolkit & Clinic Readiness',
    chapters: [
      {
        number: '12',
        title: 'Your Three-Month Period Tracker',
        summary: 'Printable daily log sheets (flow, pain 0-10, location, remedies, helpfulness), spotting log, and heavy bleeding check to spot patterns.',
      },
      {
        number: '13',
        title: 'Your Seven-Day Period Wellness Plan',
        summary: 'A day-by-day gentle self-care routine balancing water, food, movement, rest, heat, and body check-ins from Day 1 to Day 7.',
      },
      {
        number: '14',
        title: 'When to Seek Medical Help',
        summary: 'Crystal-clear distinctions between emergency symptoms (fainting, soaking pads hourly) and non-urgent appointment triggers.',
      },
      {
        number: '15',
        title: 'How to Prepare for a Clinic Visit',
        summary: 'What to write down, exact phrases to describe pain, 10 questions to ask your doctor, and a full pre-and-post visit checklist.',
      },
    ],
  },
];

export const SAMPLE_EXCERPTS = [
  {
    title: 'Chapter 2: The Biological Reason Behind Cramps',
    category: 'Why Periods Hurt',
    page: 'Page 14',
    content: `The womb is a muscle. During a period, it squeezes (contracts) to help push out the lining. The body makes natural chemicals called prostaglandins that help this squeezing happen.

In many women with painful periods, the body makes a lot of these chemicals. More prostaglandins can mean stronger squeezes, and stronger squeezes can mean more pain. They may also contribute to nausea, loose stools, or headaches that some women feel at the same time.

The nerves that carry pain signals from the womb connect with nerves that serve the lower back and upper legs. That is why some women feel period pain as backache or a heavy ache in the thighs, not only in the lower belly.`,
  },
  {
    title: 'Chapter 3: Safe Heat Therapy & 15-Minute Comfort',
    category: 'Home Care',
    page: 'Page 20',
    content: `Place a warm (not hot) water bottle or heating pad on your lower belly or lower back.

How to do it safely:
• Never use boiling water. Let freshly boiled water cool for a few minutes before filling the bottle.
• Fill the bottle only partly, push out the extra air, and close the cap tightly.
• Cover it with a soft cloth or towel. Never place it directly on bare skin.
• Use it for about 15 to 20 minutes at a time, then take a break and check your skin.

Heat can relax tight muscles and bring comfort. It is one of the most widely recommended home measures for period cramps.`,
  },
  {
    title: 'Chapter 6: Ginger Tea — Research & Preparation',
    category: 'Homemade Drinks',
    page: 'Page 53',
    content: `Of all homemade drinks, ginger has the most research related to period pain. Several small trials and systematic reviews have found that ginger reduced period pain compared with placebo, and some found it similar to common pain medicines.

How to make a food-strength cup:
1. Wash and peel a small piece of fresh ginger, about the size of your thumb tip, and slice it thinly or crush it lightly.
2. Add it to about one cup of water and simmer gently for 5 to 10 minutes.
3. Strain, let it cool slightly, and sip slowly. A little honey or lemon is fine if you like.

Keep to ordinary food-sized amounts. More is not better, and ginger tea is never a substitute for emergency medical care.`,
  },
  {
    title: 'Chapter 7: The Honest Truth About "Agbo" and Herbs',
    category: 'Herbal Safety',
    page: 'Page 71',
    content: `In many Nigerian homes, herbs are part of how families care for each other. But respect and honesty go together.

Never use herbs or mixtures to “force” a period. A late period may mean pregnancy, and these mixtures can harm both you and a pregnancy. They can also cause serious bleeding.

Never insert herbs, powders, leaves, or mixtures into the vagina. This can cause burns, infection, and injury.

Be cautious of claims that a remedy “cleans the womb,” “removes dirt,” or “opens blocked blood.” These claims are not supported by reliable medical evidence.`,
  },
  {
    title: 'Chapter 11: Debunking Common Period Myths',
    category: 'Myth Busting',
    page: 'Page 97',
    content: `MYTH: “Every painful period is normal, and severe pain must simply be endured.”
FACT: Some period discomfort is common, but pain that is severe, getting worse, or stopping you from school, work, or daily life is not something you must accept. Needing help is not weakness.

MYTH: “Menstrual blood is dirty or poisonous.”
FACT: Menstrual blood is not dirty or toxic. It is made up of blood and tissue from the womb lining, and it is a normal part of a healthy body. A woman on her period is not unclean, and does not need to be excluded from normal life.`,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Ngozi E.',
    location: 'Lagos, Nigeria',
    role: 'Trader & Mother',
    rating: 5,
    highlight: 'No more missing market days because of pain',
    text: 'For years I believed severe cramps were my cross to bear. Chapter 3 taught me safe heat methods, breathing, and proper rest. The 7-day meal plan with affordable ugu and moi moi gave my body so much strength. I survived my last two periods without fainting!',
    verified: 'Verified Reader',
  },
  {
    name: 'Fatima A.',
    location: 'Abuja, Nigeria',
    role: 'Civil Servant',
    rating: 5,
    highlight: 'Saved me from drinking dangerous herbal concoctions',
    text: 'People kept giving me dark bitter mixtures to "clean my womb" for irregular periods. Chapter 7 opened my eyes to the real risks. Following the 3-month tracker helped me take real facts to my doctor, and we found the exact cause. Every Nigerian woman must read this.',
    verified: 'Verified Reader',
  },
  {
    name: 'Chioma O.',
    location: 'Port Harcourt, Nigeria',
    role: 'University Student',
    rating: 5,
    highlight: 'The clinic visit checklist gave me courage to speak',
    text: 'I was always shy to speak about heavy flow and clots. Chapter 15 gives you the exact 10 questions to ask a doctor and words to describe your pain. The book is written in such gentle, simple English. It feels like a caring older sister talking to you.',
    verified: 'Verified Reader',
  },
];

export const BONUSES = [
  {
    title: 'The 7-Day Nigerian Period Meal Plan',
    value: 'Included in Book',
    desc: 'Day-by-day breakfast, lunch, and dinner using affordable market staples (pap, beans, yam, ugu, fish) plus recipe cards for moi moi and quick stir-fry.',
  },
  {
    title: 'Printable 3-Month Period Tracker & Daily Log',
    value: 'Included in Book',
    desc: 'Structured daily charts to record pain (0-10 scale), flow, pad counts, and what remedies helped, so you have solid records for your doctor.',
  },
  {
    title: 'The 10-Question Clinic Visit Checklist',
    value: 'Included in Book',
    desc: 'A complete preparation guide with exact medical questions, words to describe pain, and a pre-visit checklist so you are heard and respected.',
  },
];

export const FAQS = [
  {
    q: 'How do I receive the ebook after making payment?',
    a: 'Immediately upon placing your order, you will see a direct download button on your screen for the official 140-page PDF ebook. A backup copy and download link will also be delivered straight to your email address within seconds.',
  },
  {
    q: 'What makes this ebook different from random advice online?',
    a: 'This book gives honest, research-backed evidence (cited from Cochrane Reviews, PubMed, and medical guidelines) combined with everyday Nigerian foods and culturally safe practices. It avoids false promises, warns against dangerous "agbo" mixtures, and tells you clearly when to see a doctor.',
  },
  {
    q: 'Can I read it on my smartphone?',
    a: 'Yes! The ebook comes in high-quality PDF format, designed to be read comfortably on any Android phone, iPhone, iPad, tablet, laptop, or computer without needing any special app.',
  },
  {
    q: 'Is this book suitable for young girls and teenagers?',
    a: 'Yes, absolutely. It is written in simple, respectful, and crystal-clear English. It teaches young women how their bodies work, how to count cycles, and what to do when cramps start, without shame or taboos.',
  },
  {
    q: 'What if I am not satisfied with the book?',
    a: 'We offer an ironclad 30-Day Money-Back Guarantee. If you read the guide and feel it did not give you practical, reassuring, and valuable cycle care, simply email support for an immediate full refund.',
  },
];
