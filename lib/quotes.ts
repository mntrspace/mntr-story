// Quote Off — quotes I keep coming back to, with the story behind each.
// Public, rendered at /quote-off.
//
//   origin = factual history (where it's from).
//   note   = personal "why it matters to me", first person.
//
// NOTE: the `note` fields are DRAFTS written in Mantra's voice as a starting
// point — review and rewrite them so they're genuinely his.

export type QuoteEntry = {
  text: string;
  author: string | null;
  origin?: string;
  note?: string;
};

export const quoteOff: QuoteEntry[] = [
  {
    text: "Per Ardua Ad Astra",
    author: null,
    origin:
      "Latin for 'through adversity to the stars.' The motto of the British and Indian air forces since 1912, with roots often traced to Virgil. It frames the heights as something you reach only by passing through hardship.",
    note: "I keep this one close as a reminder that the hard, unglamorous stretches are the path — not a detour from it. The climb is the point.",
  },
  {
    text: "He who has a Why to live for can bear almost any How.",
    author: "Friedrich Nietzsche",
    origin:
      "From Nietzsche's Twilight of the Idols (1889). Viktor Frankl later made it famous in Man's Search for Meaning, using it to explain who endured the camps. The claim: a strong enough 'why' makes almost any 'how' bearable.",
    note: "Whenever the work gets brutal, this sends me back to find the why again. With a real reason, the grind stops feeling like a grind.",
  },
  {
    text: "Life is not primarily a quest for pleasure, as Freud believed, or a quest for power, as Alfred Adler taught, but a quest for meaning. The greatest task for any person is to find meaning in his or her life.",
    author: "Viktor Frankl, Man's Search for Meaning",
    origin:
      "Viktor Frankl was a Viennese psychiatrist and Holocaust survivor who founded logotherapy. Against Freud (pleasure) and Adler (power), he argued our deepest drive is meaning. He wrote Man's Search for Meaning in 1946, drawn from his years in the camps.",
    note: "This reframed ambition for me — from chasing outcomes to chasing meaning. It's why I care so much about what I'm building and who it's for, not just the metrics.",
  },
  {
    text: "At any moment, man must decide, for better or for worse, what will be the monument of his existence.",
    author: "Rollo May",
    origin:
      "Rollo May was a founder of American existential psychology (The Courage to Create). His recurring theme: freedom comes with responsibility — every decision, big or small, is a brick in the 'monument' of who you become.",
    note: "A quiet nudge that my choices compound into a person, not just a track record. It makes the small daily calls feel like they actually matter.",
  },
  {
    text: "A life is a tragedy in close up but a comedy in a long/wide shot.",
    author: "Charlie Chaplin",
    origin:
      "Attributed to Charlie Chaplin, the silent-era auteur who built a career turning hardship into comedy. The line is about perspective: what feels like tragedy up close becomes comedy from far enough away.",
    note: "My favourite stress reliever. When something feels catastrophic in the moment, I try to pull back to the wide shot — it's usually funnier than it felt.",
  },
  {
    text: "It is easier to be fearless than to be brave.",
    author: "Naval Ravikant",
    origin:
      "Naval Ravikant — AngelList founder and one of the sharper modern aphorists (The Almanack of Naval Ravikant). The distinction: fearlessness is the absence of fear; bravery is acting in spite of it — which is rarer and harder.",
    note: "A good gut-check. I'd rather be honestly scared and do the thing anyway than pretend I feel nothing. Bravery is the muscle I'm actually trying to build.",
  },
  {
    text: "Retrospection is a really powerful habit.",
    author: "Ray Dalio",
    origin:
      "Ray Dalio built Bridgewater into the world's largest hedge fund and wrote Principles. His whole method is reflecting on mistakes to distill repeatable principles — turning hindsight into an edge.",
    note: "This is basically my operating system. I'm a compulsive retrospector — a lot of my best decisions came from sitting honestly with what went wrong last time.",
  },
  {
    text: "Growth is driven by compounding which takes time, whereas destruction is driven by a single point of failure.",
    author: "Navid Zolfaghari",
    origin:
      "A sharp take on asymmetry: the things worth having — companies, skills, trust — are built slowly through compounding, but can be undone by a single point of failure. It argues defense matters as much as growth.",
    note: "As a PM this is a constant reminder to protect the downside. Years of compounding can vanish in one avoidable break, so I obsess over the single points of failure.",
  },
  {
    text: "In the quiet of solitude, we find clarity.",
    author: null,
    origin:
      "An unattributed maxim in the spirit of Thoreau and the Stoics — the idea that signal only emerges once you turn down the noise. (It shows up in my own story too, so it may well be mine.)",
    note: "My best thinking never happens in the meeting — it happens on a walk, alone, afterwards. I've learned to protect that quiet on purpose.",
  },
  {
    text: "Greatness was not achieved by consensus.",
    author: null,
    origin:
      "A modern leadership aphorism, kin to Bezos's 'disagree and commit.' Committees tend to average ideas toward safe; breakthrough work usually needs someone willing to be unpopular for a while.",
    note: "A reminder not to sand the bold idea down just to get everyone nodding. Conviction first, alignment second.",
  },
];
