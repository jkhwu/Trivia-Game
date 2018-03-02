// VARIABLES
const questions = [{
        q: 'What was the last Broadway musical Rodgers and Hammerstein created, which starred Mary Martin and debuted in 1959?',
        a: 2,
        choices: ['"Allegro"',
            '"South Pacific"',
            '"The Sound of Music"',
            '"The King and I"'
        ]
    },
    {
        q: 'The TKTs booth, which has been around since 1973, offers what?',
        aIndex: 0,
        choices: ['Discount theater tickets',
            'Free movie passes',
            'Specialty ice cream',
            'Horse and buggy rides'
        ]
    },
    {
        q: 'A helicopter was the unforgettable set piece of this musical, which opened in 1991:',
        aIndex: 2,
        choices: ["Evita",
            "This is the Army",
            "Miss Saigon",
            "Big Deal"
        ]
    },
    {
        q: 'Which of these original cast members from "Wicked" made their Broadway debut in the musical "Rent?"',
        aIndex: 1,
        choices: ['Kristin Chenoweth',
            'Idina Menzel',
            'Joel Grey',
            'Nobert Leo Butz'
        ]
    },
    {
        q: 'The first song in the original production of "Cabaret" opens with which of these lines?',
        aIndex: 3,
        choices: ['"Come to the Cabaret"',
            '"Hey, big spender"',
            '"Come on, babe"',
            '"Wilkommen, bienvenue"'
        ]
    },
    {
        q: 'Which titular Broadway character is the "demon barber"?',
        aIndex: '',
        choices: ['Sweeny Todd',
            'Oliver',
            'Annie',
            'Peter Pan'
        ]
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    },
    {
        q: '',
        aIndex: '',
        choices: ['', '', '', '']
    }
];
// FUNCTIONS
function shuffle(arr) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// OBJECTS


// CALLS
console.log(questions);