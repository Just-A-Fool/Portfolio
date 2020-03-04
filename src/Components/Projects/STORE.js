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
                who use the correct settings, or "cipher," are able to decode this message. The app allows 
                these ciphers to be made and saved as well. Note: Since the Enigma was cracked, these messages 
                can also be decoded in a similar manner.`,
            live: 'https://aedan-enigma.now.sh/',
            clientGitHub: 'https://github.com/Just-A-Fool/Enigma-Client',
            serverGitHub: 'https://github.com/Just-A-Fool/Enigma-Server',
            tech: ['Javascript', 'CSS', 'HTML', 'Node', 'React', 'PostgreSQL', 'Mocha', 'Chai']
        },
        {
            title: 'Battleship',
            img: 'Battleship',
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
            title: 'Portfolio',
            img: 'Portfolio',
            imgAlt: 'A thumbnail of my portfolio.',
            desc: 'Along with being my portfolio I wanted to do something interesting. I decided to create a 2D simulation of Boids on an HTML5 canvas. Boids are the representation of movement between animals such as birds or fish. More information is available in the README on GitHub.',
            live: 'https://aedan-warfield-portfolio.now.sh/',
            gitHub: 'https://github.com/Just-A-Fool/Portfolio',
            tech: ['Javascript', 'CSS', 'HTML', 'Canvas', 'React']
        },
        {
            title: 'Currency Converter',
            img: 'Currency',
            imgAlt: 'A thumbnail showing my currency converter UI.',
            desc: `I wrote this as a coding challenge sent to me by a potential employer. It converts 
            between two different currencies based on the exchange rates of a third party API. This was my first time 
            using XML. I decided to stray from React in this project because React is overkill on this scale and I wanted to 
            show proficiency outside React.`,
            live: 'https://just-a-fool.github.io/Currency-Converter-Client/',
            clientGitHub: 'https://github.com/Just-A-Fool/Currency-Converter-Client',
            serverGitHub: 'https://github.com/Just-A-Fool/Currency-Converter-Server',
            tech: ['Javascript', 'CSS', 'HTML', 'jQuery', 'Node', 'Mocha', 'Chai']
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
            tech: ['Javascript', 'CSS', 'HTML', 'jQuery']
        }
    ]
};



export default STORE;