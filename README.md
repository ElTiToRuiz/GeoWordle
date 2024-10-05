# GEO WORDLE

Geo Wordle is an interactive word-guessing game where players try to guess the name of a city. The game provides feedback on each guess, indicating:

- Letters that are correct and in the correct position.
- Letters that are correct but in the wrong position.
- Letters that are not part of the city name at all


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

To start the development environment:
    
1. Run the API server

   In the API directory, start the backend server:
    
    ```bash
        npm run dev
    ```

   This will start the API server, making it available at `http://localhost:3000`. If no .env file is provided, the default port will be used.


3. Run the frontend application

   Open another terminal window, navigate back to the main directory, and run:

   ```bash
        npm run dev
    ```

   This will start the frontend app, making the game accessible at `http://localhost:5173`.

You're now ready to play Geo Wordle locally!


## Features

- Word Guessing:

Guess the name of a city within a limited number of attempts.

- Feedback:

Receive hints after each guess, indicating which letters are correct or misplaced.

- Persistence:

Your previous guesses and attempts are saved in LocalStorage, allowing you to continue from where you left off.

- Responsive Design:

Enjoy the game on any device—whether it's a desktop, tablet, or mobile phone.


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

This project is licensed under the MIT License. For more information, please refer to the [LICENSE](LICENSE) file.
