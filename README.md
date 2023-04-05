# FE TEST

The project is a drag and drop application where admin can create by drop, edit buttons and paragraphs. Then show the edited page for Consumer

## Setup

Clone this repository to your local machine, then run:

### `npm install`

Install all the dependencies needed for runing project

### `npm start`

Runs the app in the development mode.

## Result

### Screenshots

![Drag Button](./public/Screenshot%202023-04-06%20at%2006.18.12.png)
![Drag Paragraph](./public/Screenshot%202023-04-06%20at%2006.19.19.png)
![Show Alert](./public/Screenshot%202023-04-06%20at%2006.19.44.png)
![Consumer View](./public/Screenshot%202023-04-06%20at%2006.20.00.png)

### Apply

The UI is built using React.js framework with TailwindCSS as a utility-first CSS framework that makes it easy to style components without writing custom CSS. The application state is managed globally using GlobalState, makes it easy to share data between components, making the code more modular and maintainable.

#### Features:

```
Admin can add new buttons and paragraphs by drag one from panel left to panel right
Admin can edit the button text, alert message and paragraph content
Admin can save current page
Admin redo and undo
Admin can export page under JSON file
Consumer can view the created page and see alert message when click on each button

```

#### Shortcoming:

Undo/Redo function is not working as expected
Import function is not implemented
Lack of Unittest

### Estimation

5 working days
