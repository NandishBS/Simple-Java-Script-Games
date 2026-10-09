# 🎮 Simple JavaScript Games

A collection of **four interactive browser-based games** built using **HTML, CSS, and Vanilla JavaScript** during my college days.

I created these games to move beyond learning JavaScript concepts theoretically and start applying them to real problems. Each game helped me explore different aspects of web development, including **DOM manipulation, event handling, asynchronous JavaScript, game logic, animations, and state management**.

The primary goal was to strengthen my JavaScript fundamentals, logical thinking, and problem-solving skills by building interactive applications from scratch, without relying on frontend frameworks.

**[🎮 Play the Games](https://nandishbs.github.io/Simple-Java-Script-Games/)** · **[💻 Source Code](https://github.com/NandishBS/Simple-Java-Script-Games)**

## 🕹️ Games Included

### 1. Make Some Boxes (Dots and Boxes)

A two-player strategy game where players take turns connecting lines to complete squares. The player who claims the most boxes wins.

**Features**
- Dynamically generated game board
- Two-player turn-based gameplay
- Detection of completed boxes
- Automatic box ownership assignment
- Score calculation and winner detection
- Restart functionality

**Concepts Applied**
- DOM manipulation (`createElement`, `appendChild`, `querySelectorAll`)
- Dynamic HTML element creation and styling
- Nested loops and coordinate calculations
- Arrays and objects for storing completed box patterns
- Event handling using `onclick`
- Conditional statements and logical operators
- Game state and turn management
- Duplicate pattern detection
- CSS class manipulation
- Winner and draw detection

### 2. 3×3 Sliding Puzzle

A classic sliding puzzle consisting of eight numbered tiles and one empty space. The objective is to arrange the numbers in ascending order by moving adjacent tiles.

**Features**
- Randomized puzzle generation
- Puzzle solvability validation
- Tile movement restricted to adjacent positions
- Animated tile transitions
- Move queue for handling rapid interactions
- Visual feedback for correctly positioned tiles
- Automatic win detection

**Concepts Applied**
- Arrays and array operations (`push`, `includes`, `shift`, `find`, `fill`)
- Random number generation using `Math.random()`
- Puzzle solvability and inversion-count logic
- Grid-based calculations using row and column indices
- Manhattan distance for adjacency validation
- DOM creation and manipulation
- Event listeners (`addEventListener`)
- CSS transitions and animations
- `setTimeout` for animation sequencing
- Move queues and state synchronization
- Boolean flags for interaction control
- Win-condition validation

### 3. Rock Paper Scissors

An interactive game where the player competes against the computer. The first participant to score three points wins the match.

**Features**
- Player versus computer gameplay
- Random computer move generation
- Animated move selection and reveal
- Round-by-round winner detection
- Live score tracking
- Automatic match completion
- Interaction disabling during animations
- Restart functionality

**Concepts Applied**
- Asynchronous JavaScript with `async/await`
- Promises and asynchronous execution
- `setTimeout` for delayed operations
- Sequential animation handling
- Random number generation
- DOM manipulation and dynamic image updates
- Event handling (`onclick`, `onmouseenter`, `onmouseleave`)
- Conditional statements
- Score and game state management
- CSS animations and hover effects
- Enabling and disabling interactions

### 4. Tic Tac Toe

A two-player game played on a 3×3 grid. Players alternate between O and X, attempting to form three matching symbols in a row, column, or diagonal.

**Features**
- Two-player turn-based gameplay
- Automatic player switching
- Detection of all eight winning combinations
- Winning combination highlighting
- Draw detection
- Prevention
