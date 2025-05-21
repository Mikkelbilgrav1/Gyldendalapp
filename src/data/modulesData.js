// data/modulesData.js
export const modulesData = [
  {
    id: 'module1',
    title: 'Modul 1',
    subtitle: 'Hvad er en idé?',
    color: 'module-1',
    enabled: true,
    lesson: {
      content: [
        'I Platons filosofi findes der en verden bag vores verden. Det er idéernes verden!',
        'I idéernes verden findes alt det perfekte. En stol dér er ikke bare en stol – det er den perfekte idé om en stol.',
        'Det vi ser i vores verden er bare kopier – skygger – af det, der findes i idéernes verden.'
      ]
    },
    quiz: {
      questions: [
        {
          question: "Hvad mente Platon med idéernes verden?",
          options: [
            "At alt er en illusion",
            "At alt i vores verden er kopier af perfekte idéer",
            "At man ikke kan stole på sine sanser"
          ],
          correctAnswer: 1
        },
        {
          question: "Hvad kalder Platon de ting, vi ser i vores verden?",
          options: [
            "Skygger",
            "Illusioner",
            "Kopier"
          ],
          correctAnswer: 2
        },
        {
          question: "Hvorfor kan vi ifølge Platon aldrig se en 'perfekt' stol i vores verden?",
          options: [
            "Fordi mennesker ikke kan lave perfekte ting",
            "Fordi den perfekte stol kun findes som idé",
            "Fordi vores sanser er upålidelige"
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'module2',
    title: 'Modul 2',
    subtitle: 'Skygger og virkelighed',
    color: 'module-2',
    enabled: true,
    lesson: {
      content: [
        'Platon fortæller en berømt historie, som kaldes "Hulelignelsen".',
        'Her sidder mennesker i en hule og ser kun skygger på væggen – de tror, skyggerne er virkeligheden!',
        'Filosoffen er som en person, der slipper fri af hulen og ser den ægte verden udenfor.'
      ]
    },
    quiz: {
      questions: [
        {
          question: "Hvad symboliserer hulen i Platons hulelignelse?",
          options: [
            "Vores fysiske verden",
            "Vores tanker",
            "Idéernes verden"
          ],
          correctAnswer: 0
        },
        {
          question: "Hvad symboliserer skyggerne på væggen?",
          options: [
            "Idéerne",
            "De ting vi ser i vores verden",
            "Filosofiske tanker"
          ],
          correctAnswer: 1
        },
        {
          question: "Hvad sker der med personen, der forlader hulen?",
          options: [
            "De bliver blinde af sollyset",
            "De ser den sande virkelighed",
            "De vender frivilligt tilbage til hulen"
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'module3',
    title: 'Modul 3',
    subtitle: 'Tænk som en filosof',
    color: 'module-3',
    enabled: true,
    lesson: {
      content: [
        'At tænke som en filosof betyder at stille spørgsmål ved alt.',
        'Sokrates, Platons lærer, sagde: "Jeg ved, at jeg intet ved."',
        'At undre sig over verden er begyndelsen på al filosofi.'
      ]
    },
    quiz: {
      questions: [
        {
          question: "Hvad er den 'sokratiske metode'?",
          options: [
            "At søge viden gennem bøger",
            "At stille spørgsmål for at udfordre antagelser",
            "At samle data gennem eksperimenter"
          ],
          correctAnswer: 1
        },
        {
          question: "Hvad betyder det at 'filosofere'?",
          options: [
            "At lære udenad",
            "At elske visdom",
            "At acceptere autoriteter"
          ],
          correctAnswer: 1
        },
        {
          question: "Hvad var Sokrates' profession, før han blev filosof?",
          options: [
            "Soldat",
            "Stenhugger",
            "Lærer"
          ],
          correctAnswer: 1
        }
      ]
    }
  }
];