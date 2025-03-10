# Practical Implementation of JavaScript Course

## About This Project

This repository contains a website that I built as a practical implementation of the concepts learned from this course **[[The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/)]**. While I did not create the HTML and CSS files from scratch, I used the knowledge from the course to write the JavaScript functionality myself.

This project is part of my learning journey to eventually build projects from scratch.

## Features

- **HTML & CSS:** Provided by the course instructor.
- **JavaScript:** Implemented based on the course lessons and my own understanding.
- **Purpose:** Strengthen my skills in JavaScript by applying concepts in real-world projects.

## Future Improvements

- Refactoring the JavaScript code for better optimization.
- Rebuilding similar projects from scratch with my own design and structure.

## Acknowledgment

Credits to **[Jonas Schmedtmann]** for the HTML & CSS files and the course content.

# **Guess the Number Game**

## **Overview**

This is a simple number-guessing game where the player tries to guess a randomly generated number between 1 and 20. I used the provided HTML and CSS files from the course and wrote the JavaScript logic myself based on what I learned. This project is part of my effort to build similar projects from scratch in the future.

## **How It Works**

- The game generates a random number between 1 and 20.
- The player enters a guess, and the game provides feedback:
  - "Too High" if the guess is too large.
  - "Too Low" if the guess is too small.
  - "Correct Number" when the guess is right.
- The score starts at 20 and decreases with each incorrect guess.
- If the score reaches 0, the game ends with a "You lost the game" message.
- If the player wins:
  - The background color changes to green.
  - The high score updates if the new score is higher.
- Clicking "Again" resets the game.

## **Features**

- **DOM Manipulation** – Used `document.querySelector()` to dynamically update content.
- **Event Handling** – Implemented button click events for checking guesses and resetting the game.
- **Game Logic** – Managed score, high score, and conditions for winning or losing.
- **Styling Updates** – Adjusted background color and number box size based on game state.

## **Future Improvements**

- Optimize the JavaScript code for better efficiency.
- Rebuild the game from scratch with a custom design and improved logic.
