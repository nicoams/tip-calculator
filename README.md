# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

- Desktop:
  ![](./public/assets/screenshots/Tip%20calculator%20app%20-%20Desktop.png)

  ![](./public/assets/screenshots/Tip%20calculator%20app%20-%20Desktop%20Completed.png)

- Mobile:
  ![](./public/assets/screenshots/Tip%20calculator%20app%20-%20Mobile.png)

  ![](./public/assets/screenshots/Tip%20calculator%20app%20-%20Mobile%20Completed.png)


### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/responsive-tip-calculator-app-with-reactjs-ZOTfIR2KvS)
- Live Site URL: [GitHub](https://nicoams.github.io/tip-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS Preprocessor

### What I learned

#### React
I started learning React some time ago, but I haven't used it in a while. I decided start using it again on this one.

I remembered about dividing the code into components, so I did this:

```js
//App using the Card component

function App() {
  return (
    <div className="container">
      <header className="header">
      </header>

      <Card />

      <footer className="attribution">
      </footer>
    </div>
  );
}
```

```js
//Card using the Form and Results components

export default function Card() {
  return (
    <main className="content-wrapper">
      <Form />
      <Results />
    </main>
  );
}
```

The `Form` is about the inputs the user will insert (bill, tip, number of people) and the `Results` is about showing the results of the calculation. But, the Result couldn't use the state from the Form which made impossible to do the calculations. So, I learned about the `useContext` hook. If I used it on the parent, I could share the state all over its children.

```js
export const CalculationContext = createContext('');

export const CalculationProvider = ({ children }) => {
  const variables = {...
  };

  const functions = {...
  };
  return (
    <CalculationContext.Provider
      value={{
        variables,
        functions,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
};
```

At first, I wrapped the Card with the Provider because it is the parent of Form and Result, the components that need to share the states.

```js
export default function Card() {
  return (
    <CalculationProvider>
      <main className="content-wrapper">
        <Form />
        <Results />
      </main>
    </CalculationProvider>
  );
}
```

It was working really well, but later on I decided to use the a function to reset when the user pressed 'Esc' (just like the button). Then I wrapped the whole `App` on it, so it can be done anytime, everywhere on the application.

```js
index.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculationProvider>
      <App />
    </CalculationProvider>
  </React.StrictMode>
);
```

Aside what was asked, i wanted to make it useful for keyboard users (insight from another project from the plataform). Through the following code, the user can choose their option with 'Tab' and then select it with 'Enter'.

```js
  context.js

  const handleKeyDown = (e, value) => {
    if (e.key === 'Enter') {
      console.log(e.key);
      e.preventDefault();
      setSelectedOption(value);
      const name = 'tipPercentage';
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  form.js

    <label
      htmlFor="5"
      tabIndex={0}
      name="tipPercentage"
      onKeyDown={(e) => functions.handleKeyDown(e, '5')}
    >
      5%
    </label>
```

### Continued development

I also wanted to display thousand and decimal separators based on user's locale on the inputs type number. I got something with `react-number-format` lib, but it wasn't what I looked for so I left it out.

I intented to learn how to do that and come back to update this project.

### Useful resources

- [Como usar o useContext para compartilhar dados - SIMPLIFICANDO OS HOOKS DO REACT.](https://www.youtube.com/watch?v=OLtpJLQLOeM) - This helped me sharing the variables among the components of the project. It is in brazilian portuguese, but it shows how to use useContext.


## Author

- GitHub - [Nicholas ALbuquerque](github.com/nicoams)
- Frontend Mentor - [@nicoams](https://www.frontendmentor.io/profile/nicoams)
