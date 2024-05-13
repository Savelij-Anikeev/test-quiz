import { TestType, TestCategory, TestDifficulty } from "../types";

const tests: TestType[] = [
    {
        title: 'Russia under Peter I',
        description: 'Test that consists of questions related to the reign of Peter 1',
        imgUrl: 'https://кронштадт.рф/media/images/photo_2022-05-13_19-45-31.original.jpg',

        difficulty: TestDifficulty.MEDIUM,
        category: TestCategory.RUSSIA,
        questions: [
            {
                text: 'Petersburg became the capital in:',
                answers: [
                    {
                        isRight: false, 
                        text: '1701',
                    },
                    {isRight: false, text: '1707'},
                    {
                        isRight: true, 
                        text: '1712',
                        commentary: 'On May 27, 1703, Peter I founded St. Petersburg, establishing the Peter and Paul Fortress on Hare Island. Nine years later, on May 19, 1712, by order of the emperor, the Russian capital was moved from ancient Moscow to St. Petersburg.'
                    },
                    {isRight: false, text: '1720'},
                ]
            },
            {
                text: 'The basis of russian army was:',
                answers: [
                    {
                        isRight: false, 
                        text: 'archers and noble militia',
                    },
                    {
                        isRight: true, 
                        text: 'forced recruits',
                        commentary: 'Based on the experience of the 17th century, the army was formed on the basis of forced a set of so-called “dacha people” from among the landowner peasants, courtyard people and city suburbs. The norm of mobilization according to the yard layout is one foot datochny from 50 households and one horse from 100 households.'
                    },
                    {
                        isRight: false, 
                        text: 'foreign mercenaries',
                    },
                    {
                        isRight: false, 
                        text: 'there is no correct answer',
                    },
                    
                ]
            },
            {
                text: 'Dates of the reign of Peter I:',
                answers: [
                    {
                        isRight: false, 
                        text: '1672–1725',
                    },
                    {
                        isRight: false, 
                        text: '1675–1724',
                    },
                    {
                        isRight: true, 
                        text: '1682–1725',
                        commentary: 'Peter I is the Tsar of All Rus\' since 1682, the first Emperor of All Russia since 1721. He was proclaimed tsar at the age of 10 under Sofya Alekseevna, and began to rule independently in 1689.'
                    },
                    {
                        isRight: false, 
                        text: '1685–1750',
                    },
                ]
            },
            {
                text: 'In the field of foreign trade, Peter I:',
                answers: [
                    {
                        isRight: false, 
                        text: 'patronized imports',
                    },
                    {
                        isRight: true, 
                        text: 'introduced high import duties on goods not produced in Russia',
                        commentary: 'Patronizing his factories and plants, Peter, through almost prohibitive duties, greatly reduced the import of foreign manufactured goods into Russia, allowing only those that were not produced at all in Russia, or only those that were needed by Russian factories and plants'
                    },
                    {
                        isRight: false, 
                        text: 'pursued a moderate patronage policy',
                    },
                    {
                        isRight: false, 
                        text: 'banned imports',
                    }
                ]
            },
            {
                text: 'Peter I created manufactories mainly for:',
                answers: [
                    {
                        isRight: false, 
                        text: 'replenishment of the treasury',
                    },
                    {
                        isRight: true, 
                        text: 'meeting the needs of the army',
                        commentary: 'The goods produced by Russian factories did not differ in the level of quality and processing. Only everything that was needed for military supplies was of good quality, but purely industrial goods that were produced for the people were poor.'
                    },
                    {
                        isRight: false, 
                        text: 'creation of the merchant class as the backbone of the economy',
                    },
                    {
                        isRight: false, 
                        text: 'to give people jobs',
                    }
                ]
            },
            {
                text: 'The Senate is the highest:',
                answers: [
                    {
                        isRight: false, 
                        text: 'judicial and legislative body',
                    },
                    {
                        isRight: false, 
                        text: 'judicial and executive body',
                    },
                    {
                        isRight: true, 
                        text: 'legislative and legislative body',
                        commentary: 'On February 22, 1711, in Moscow, by decree of Peter I, the Governing Senate was established - the highest legislative and advisory body of state power, subordinate to the emperor.'
                    },
                    {
                        isRight: false, 
                        text: 'there is no correct answer',
                    }
                ]
            },
            {
                text: 'What was the name of the army that Peter 1 created in 1682?',
                answers: [
                    {
                        isRight: false, 
                        text: 'Russian Imperial Army',
                    },
                    {
                        isRight: false, 
                        text: 'Streletsky Regiment',
                    },
                    {
                        isRight: true, 
                        text: 'Regular Russian army',
                        commentary: 'The Army of Peter I is the regular army and navy of the Russian Empire, which existed from 1682 to 1721.'
                    }
                ]
            },
            {
                text: 'After the death of Peter 1,... began?',
                answers: [
                    {
                        isRight: true, 
                        text: 'The era of palace coups',
                        commentary: 'The Army of Peter I is the regular army and navy of the Russian Empire, which existed from 1682 to 1721.'
                    },
                    {
                        isRight: false, 
                        text: 'Troubles',
                    },
                    {
                        isRight: false, 
                        text: 'Civil war',
                    },
                ]
            }
        ]
    },
    {
        title: 'History of the USSR',
        description: 'This test will check how well you know hystory of Russia as a part of USSR',
        imgUrl: 'https://hcenter-irk.info/sites/default/files/1400885335_stalin-iosif-vissarionovich-1.jpg',
        category: TestCategory.RUSSIA,
        difficulty: TestDifficulty.HARD,
        questions: [
            {
                text: 'How many republics were originally part of the USSR?',
                answers: [
                    {
                        text: '4',
                        isRight: true,
                        commentary: '4 republics: the RSFSR, the Byelorussian SSR, the Ukrainian SSR and the Transcaucasian SFSR.'
                    },
                    {
                        text: '7',
                        isRight: false,
                    },
                    {
                        text: '10',
                        isRight: false,
                    },
                ]
            },
            {
                text: 'The Constitution of the USSR is the basic law of the Soviet Union. How many versions of the constitution have been written during the existence of the USSR?',
                answers: [
                    {
                        text: '2',
                        isRight: false,
                    },
                    {
                        text: '3',
                        isRight: true,
                        commentary: 'In 1924, 1936 and 1977.'
                    },
                    {
                        text: '4',
                        isRight: false,
                    },
                ]
            },
            {
                text: 'In 1929, the first five-year plan of the USSR was approved. During what period was this five-year plan completed?',
                answers: [
                    {
                        text: 'for 4 years and 9 months',
                        isRight: false,
                    },
                    {
                        text: 'for 4 years and 6 months',
                        isRight: false,
                    },
                    {
                        text: 'for 4 years and 3 months',
                        isRight: true,
                        commentary: 'The first five-year development plan of the USSR was adopted in 1928, for a five-year period from 1928 to 1932, and completed in 4 years and three months. However, in 1947, at a meeting of the Politburo, Stalin said that the plan had not been completed.'
                    },
                    {
                        text: 'for 4 years',
                        isRight: false
                    }
                ]
            },
            {
                text: 'On August 23, 1939, the USSR and Germany signed a non—aggression pact (contract). How many years was this pact supposed to be valid?',
                answers: [
                    {
                        text: '2 years',
                        isRight: false,
                    },
                    {
                        text: '5 years',
                        isRight: false,
                    },
                    {
                        text: '10 years',
                        isRight: true,
                        commentary: 'The diplomatic agreement included a non-aggression pact between Germany and the Soviet Union for a period of 10 years. It would be then automatically continued for 5 years.'
                    },
                ]
            },
            {
                text: 'Which of these achievements does NOT belong to the Soviet Union?',
                answers: [
                    {
                        text: 'Launch of the first Earth satellite',
                        isRight: false,
                    },
                    {
                        text: 'Launch of the first nuclear power plant',
                        isRight: false,
                    },
                    {
                        text: 'The world\'s first test of a thermonuclear explosive device',
                        isRight: true,
                        commentary: 'This test took place in the United States on November 1, 1952.'
                    },
                ]
            },
            {
                text: 'How many five-year plans were fulfilled in the USSR?',
                answers: [
                    {
                        text: '11',
                        isRight: false,
                    },
                    {
                        text: '12',
                        isRight: true,
                        commentary: 'Of the 13 plans, 12 were completed, the last one was not completed due to the collapse of the USSR'
                    },
                    {
                        text: '13',
                        isRight: false,
                    },
                ]
            },
            {
                text: 'How many full years did the Soviet Union exist?',
                answers: [
                    {
                        text: '68',
                        isRight: true,
                        commentary: 'On December 26, 1991, the Council of Republics adopted a declaration stating the end of existence of the USSR'
                    },
                    {
                        text: '70',
                        isRight: false,
                    },
                    {
                        text: '74',
                        isRight: false,
                    },
                ]
            },
            {
                text: 'Who was awarded the prize for the "invention" of the time machine in Soviet times?',
                answers: [
                    {
                        text: 'Wood sculptor Vyacheslav Pochechuev for the film “Ivan Vasilyevich changes his profession”',
                        isRight: true,
                        commentary: 'The time machine, which was the center of the film "Ivan Vasilyevich changes his profession," was invented and designed by Vyacheslav Pochechuev. In 1973, the sculptor received a 40-ruble prize and a certificate: "The money was given for the invention of a time machine."'
                    },
                    {
                        text: 'Vadim Chernobrov, an employee of one of the laboratories of the Moscow Aviation Institute, a graduate of the Faculty of Cosmonautics and Automatic Flight',
                        isRight: false,
                    },
                    {
                        text: 'Andrey Makarevich in the instruction of the first President of the USSR',
                        isRight: false,
                    },
                    {
                        text: 'Employees of theater, who made the remote control from a Rubik\'s cube for the film “Guest from the Future”',
                        isRight: false,
                    },
                ]
            },
        ]
    },
    {
        title: 'Russia in World War 1',
        description: 'This test will check how well you know Russian history in this hard period - World War 1',
        imgUrl: 'https://monastery.ru/upload/iblock/77e/77e7c330255a2222295f28741b0ad161.jpg',
        category: TestCategory.RUSSIA,
        difficulty: TestDifficulty.EXTREME,
        questions: [
            {
                text: 'Which of the battles of the First World War turned out to be the longest and most crucial?',
                answers: [
                    {
                        text: 'The Battle of Galicia',
                        isRight: false,
                    },
                    {
                        text: 'The Battle of the Marne',
                        isRight: false,
                    },
                    {
                        text: 'The Brusilov breakthrough',
                        isRight: false,
                    },
                    {
                        text: 'The Battle of Verdun',
                        isRight: true,
                        commentary: 'The Verdun meat grinder lasted ten months, becoming an example of a war of attrition. Nevertheless, the French and their allies managed to hold off the German offensive.'
                    },
                ],
            },
            {
                text: 'There were allies on one side, including Russia, Great Britain and ...',
                answers: [
                    {
                        text: 'Italy',
                        isRight: false,
                    },
                    {
                        text: 'France',
                        isRight: true,
                        commentary: 'Entente Cordiale, a bloc of England, France and Russia'
                    },
                    {
                        text: 'Japan',
                        isRight: false,
                    }
                ],
            },
            {
                text: 'What was the reason for the outbreak of the First World War:',
                answers: [
                    {
                        text: 'creation in the late XlX – early XX centuries.. The Entente and the Triple Alliance blocs',
                        isRight: false,
                    },
                    {
                        text: 'contradictions between the major powers due to influence in Europe and in the world',
                        isRight: false,
                    },
                    {
                        text: 'the assassination of the Austrian Archduke Frank Ferdinand in Sarajevo',
                        isRight: true,
                        commentary: 'It happened on July 28, 1914.'
                    },
                ],
            },
            {
                text: 'When did the war finally end?',
                answers: [
                    {
                        text: 'On August 9th',
                        isRight: false,
                    },
                    {
                        text: 'December 15th',
                        isRight: false,
                    },
                    {
                        text: 'September 18th',
                        isRight: false,
                    },
                    {
                        text: 'November 11th',
                        isRight: true,
                        commentary: 'The war finally came to an end on November 11, 1918, with the signing of the Armistice, which marked the defeat of the Central Powers.'
                    }
                ],
            },
            {
                text: 'In what year did the United States enter the war?',
                answers: [
                    {
                        text: '1915',
                        isRight: false,
                    },
                    {
                        text: '1917',
                        isRight: true,
                        commentary: 'Before that, they remained neutral. American troops fought from October 1917 on the Western Front and from July 1918 on the Italian Front.'
                    },
                    {
                        text: '1919',
                        isRight: false,
                    },
                    {
                        text: '1918',
                        isRight: false,
                    },
                ],
            },
            {
                text: 'Specify what is superfluous in the above sentence. In 1914, they fought on the side of the Triple Alliance',
                answers: [
                    {
                        text: 'Austria-Hungary',
                        isRight: false,
                    },
                    {
                        text: 'Italy',
                        isRight: false,
                    },
                    {
                        text: 'Germany',
                        isRight: false,
                    },
                    {
                        text: 'Bulgaria',
                        isRight: true,
                        commentary: 'The Triple Alliance is a military—political bloc of Germany, Austria-Hungary and Italy, formed in 1882, which marked the beginning of the division of Europe into hostile camps'
                    },
                ],
            },
            {
                text: 'The Treaty of Versailles, which ended the war, was signed in',
                answers: [
                    {
                        text: '1919',
                        isRight: true,
                        commentary: 'The Treaty of Versailles, submitted for signature to the German leaders on May 7, 1919, forced Germany to transfer territories to Belgium, Czechoslovakia and Poland'
                    },
                    {
                        text: '1920',
                        isRight: false,
                    },
                    {
                        text: '1918',
                        isRight: false,
                    },
                ],
            },
            {
                text: 'What new technologies were used in the First World War?',
                answers: [
                    {
                        text: 'Atomic bombs',
                        isRight: false,
                    },
                    {
                        text: 'Chemical weapons',
                        isRight: true,
                        commentary: 'In April 1915, during the battle of Ypres, chlorine was first used by the Germans.'
                    },
                    {
                        text: 'Radar',
                        isRight: false,
                    },
                ],
            },
        ]
    }
];

export default tests;