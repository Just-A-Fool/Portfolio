const STORE = {
    projects: [
        {
            title: 'Enigma',
            img: 'Enigma',
            imgAlt: 'A thumbnail showing a message being encrypted by my Enigma app.',
            desc: `A fullstack app designed around the German Enigma Machine. The Enigma 
                was used in WWII to encode messages between radio relay points, while the allies 
                were able to intercept these messages they were unable to decipher them. This app 
                allows a user to encrypt/decrypt a message using a virtual Enigma Machine. Only those 
                who use the correct settings or "cipher" are able to decode this message. The app allows 
                these ciphers to be made and saved as well. Note: Since the Enigma was cracked, these messages 
                can also be decoded in a similar manner.`,
            live: 'https://aedan-enigma.now.sh/',
            clientGitHub: 'https://github.com/Just-A-Fool/Enigma-Client',
            serverGitHub: 'https://github.com/Just-A-Fool/Enigma-Server',
            tech: ['Javascript', 'CSS', 'HTML', 'Node', 'React', 'PostgreSQL', 'Mocha', 'Chai']
        },
        {
            title: 'Battleship',
            img: 'BattleShip',
            imgAlt: 'A picture below the surface of the ocean along with the text "Battleship".',
            desc: `A fullstack app allowing the play of the classic boardgame battleship online. 
                This application uses websockets for live-communication between clients. Players are 
                able to play in real time or passively against their opponent. `,
            live: 'https://aedan-battleship.now.sh/',
            clientGitHub: 'https://github.com/Just-A-Fool/Battleship-Client',
            serverGitHub: 'https://github.com/Just-A-Fool/Battleship-Server',
            tech: ['Javascript', 'CSS', 'HTML', 'Node', 'React', 'Socket-io', 'PostgreSQL', 'Mocha', 'Chai']
        },
        {
            title: 'Spaced Repetition',
            img: 'SpacedRepetition',
            imgAlt: 'A thumbnail showing the UI for my spaced repetition app.',
            desc: `A fullstack app designed to help memorize through means of spaced repetition. 
                The idea of spaced repetition is based around the forgetting curve, it aims to have you 
                remember a detail around the time you start forgetting. This method of memorization is 
                very effective and is commonly used to learn new languages.`,
            live: 'https://spaced-repetition-aedan-adam.now.sh/',
            clientGitHub: 'https://github.com/thinkful-ei-heron/Aedan-Adam_spaced-repetition-client',
            serverGitHub: 'https://github.com/thinkful-ei-heron/Aedan-Adam_spaced-repetition-api',
            tech: ['Javascript', 'CSS', 'HTML', 'Node', 'React', 'PostgreSQL', 'Mocha', 'Chai']
        },
        {
            title: 'Bookmark App',
            img: 'Bookmarks',
            imgAlt: 'A thumbnail of my bookmark app.',
            desc: 'An app that lets one save bookmarks to their favorite websites.',
            live: 'https://thinkful-ei-heron.github.io/Aedan-bookmarks-app/',
            gitHub: 'https://github.com/thinkful-ei-heron/Aedan-bookmarks-app',
            tech: ['Javascript', 'CSS', 'HTML']
        }
    ]
};



export default STORE;