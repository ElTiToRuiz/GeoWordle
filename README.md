# GEO WORDLE

Geo Wordle is a word-guessing game where players try to guess the name of a city. The game provides feedback on each guess, indicating which letters are correct and in the correct position, which letters are correct but in the wrong position, and which letters are not in the word at all.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with Geo Wordle, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/geowordle.git
    ```
2. Navigate to the project directory:
    ```bash
    cd geowordle
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Navigate to the API directory:
    ```bash
    cd API
    ````

## Usage

To start the development server go to the API directory, run:

```bash
    npm run dev
```
This will start the server and make the game available at `http://localhost:3000` unless you have a .env file it's not neccesary.

Then open another terminal and go to the main directory, run
```bash
    npm run dev
```

THis will start the app and will be the game available at `http://localhost:5173`.

## Features
- Word Guessing: 
    Guess the name of a city within a limited number of attempts.
- Feedback: 
    Get feedback on each guess to help you narrow down the correct city name.
- Persistence:
    Attempts of each are saved in LocalStorage
- Responsive Design: 
    Play the game on any device, whether it's a desktop, tablet, or mobile phone

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes and commit them:
```bash
git commit -m 'Add some feature'
```
4. Push to the branch:
```bash
git commit -m 'Add some feature'
```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.