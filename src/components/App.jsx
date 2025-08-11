import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'What is React and why is it popular?',
    answer:
      'React is a JavaScript library for building UIs. It’s popular because it’s fast, component-based, and has a large community.',
  },
  {
    id: 2,
    question: 'What are the main features of React?',
    answer:
      'Virtual DOM, component-based architecture, one-way data binding, hooks, and declarative UI.',
  },
  {
    id: 3,
    question: 'What is JSX and why is it used in React?',
    answer:
      'JSX lets you write HTML inside JavaScript, making UI code more readable.',
  },
  {
    id: 4,
    question: 'What are components in React?',
    answer:
      'Reusable UI building blocks that can be functional or class-based.',
  },
  {
    id: 5,
    question: 'What is the difference between functional and class components?',
    answer:
      'Functional components are simpler, use hooks; class components use this and lifecycle methods.',
  },
  {
    id: 6,
    question: 'What is the virtual DOM and how does it work?',
    answer:
      'A lightweight copy of the real DOM. React updates it first, compares changes, and updates only the necessary parts of the real DOM.',
  },
  {
    id: 7,
    question: 'What is reconciliation in React?',
    answer:
      'The process React uses to update the DOM efficiently by comparing virtual DOM trees.',
  },
  {
    id: 8,
    question: 'What are props in React?',
    answer: 'Read-only data passed from parent to child components.',
  },
  {
    id: 9,
    question: 'What is state in React?',
    answer:
      'Data managed inside a component that can change over time and trigger re-renders.',
  },
  {
    id: 10,
    question: 'What is the difference between state and props?',
    answer:
      'Props are read-only and passed from outside; state is internal and mutable.',
  },
  {
    id: 11,
    question: 'What are React hooks and why were they introduced?',
    answer:
      'Hooks let you use state and lifecycle features in functional components, avoiding classes.',
  },
  {
    id: 12,
    question: 'How does useState work?',
    answer: 'Returns a state variable and a function to update it.',
  },
  {
    id: 13,
    question: 'How does useEffect work?',
    answer:
      'Runs side effects after render, like fetching data or subscriptions.',
  },
  {
    id: 14,
    question: 'What is the difference between useEffect and componentDidMount?',
    answer:
      'useEffect works in functional components and can run on mount, update, or unmount; componentDidMount is for class components and runs only after mount.',
  },
  {
    id: 15,
    question: 'How does useContext work?',
    answer: 'Lets you access context data without passing props down manually.',
  },
  {
    id: 16,
    question: 'What is useRef used for?',
    answer:
      'Stores mutable values without re-rendering or accesses DOM elements directly.',
  },
  {
    id: 17,
    question: 'How does useMemo help with performance?',
    answer:
      'Memoizes the result of a computation to avoid recalculating on every render.',
  },
  {
    id: 18,
    question: 'What is the purpose of useCallback?',
    answer:
      'Memoizes a function to prevent re-creation on every render, useful for passing stable callbacks.',
  },
  {
    id: 19,
    question: 'What is useReducer and when should you use it?',
    answer:
      'A hook for managing complex state logic, similar to Redux reducers.',
  },
  {
    id: 20,
    question: 'Can you create custom hooks? How?',
    answer:
      "Yes, by creating a function starting with 'use' that uses other hooks inside.",
  },
  {
    id: 21,
    question: 'What is React Fiber?',
    answer:
      'React’s internal rendering engine enabling concurrent rendering and better scheduling.',
  },
  {
    id: 22,
    question: 'What are controlled and uncontrolled components?',
    answer:
      'Controlled: form data handled by React state. Uncontrolled: form data handled by the DOM.',
  },
  {
    id: 23,
    question: 'How does React handle forms?',
    answer:
      'With controlled components (value + onChange) or uncontrolled components using refs.',
  },
  {
    id: 24,
    question: 'What is code splitting in React and why is it important?',
    answer:
      "Splitting app into smaller chunks to load only what's needed, improving performance.",
  },
  {
    id: 25,
    question: 'What is lazy loading in React?',
    answer:
      'Loading components only when needed using React.lazy and Suspense.',
  },
  {
    id: 26,
    question: 'How does React’s Suspense work?',
    answer:
      'Lets you show a fallback UI while waiting for lazy components or async data.',
  },
  {
    id: 27,
    question: 'What is the difference between memo and useMemo?',
    answer:
      'memo is for memoizing components; useMemo is for memoizing values.',
  },
  {
    id: 28,
    question: 'How do error boundaries work in React?',
    answer:
      'Class components with componentDidCatch and getDerivedStateFromError catch errors in children.',
  },
  {
    id: 29,
    question: 'What is the purpose of key in React lists?',
    answer:
      'Helps React identify which items changed for efficient re-rendering.',
  },
  {
    id: 30,
    question: 'Why is it not recommended to use array indexes as keys?',
    answer: 'It can cause incorrect UI updates when list order changes.',
  },
  {
    id: 31,
    question: 'How do you prevent unnecessary re-renders in React?',
    answer:
      'Use React.memo, useCallback, useMemo, and avoid changing references unnecessarily.',
  },
  {
    id: 32,
    question: 'What is React.memo and when should you use it?',
    answer:
      'A higher-order component that memoizes functional components to prevent re-renders if props don’t change.',
  },
  {
    id: 33,
    question:
      'What are some techniques for optimizing performance in React applications?',
    answer:
      'Code splitting, memoization, virtualization, avoiding inline functions, proper keys.',
  },
  {
    id: 34,
    question: 'How do you optimize large lists in React?',
    answer: 'Use windowing libraries like react-window or react-virtualized.',
  },
  {
    id: 35,
    question: 'What is windowing or virtualization in React?',
    answer: 'Rendering only visible items in a list to improve performance.',
  },
  {
    id: 36,
    question: 'What is React Router and how does it work?',
    answer:
      'A library for navigation in React apps using components like Route and Link.',
  },
  {
    id: 37,
    question:
      'What is the difference between client-side routing and server-side routing?',
    answer:
      'Client-side: handled in browser without page reload. Server-side: server sends new HTML for each route.',
  },
  {
    id: 38,
    question: 'How does Next.js differ from React?',
    answer:
      'Next.js is a framework built on React with SSR, SSG, routing, and optimizations.',
  },
  {
    id: 39,
    question: 'What is the difference between SSR, SSG, and CSR?',
    answer:
      'SSR: render on server at request time. SSG: render at build time. CSR: render in browser after JS loads.',
  },
  {
    id: 40,
    question: 'How do you handle global state in React applications?',
    answer:
      'Use Context API, Redux, Zustand, or other state management libraries.',
  },
  {
    id: 41,
    question: 'How do you test React components?',
    answer: 'Use Jest and React Testing Library to test UI and behavior.',
  },
  {
    id: 42,
    question:
      'What is the difference between unit testing and integration testing in React?',
    answer:
      'Unit: tests small pieces in isolation. Integration: tests combined components and flows.',
  },
  {
    id: 43,
    question: 'What tools can you use to test React applications?',
    answer: 'Jest, React Testing Library, Cypress, Playwright.',
  },
  {
    id: 44,
    question: 'How do you debug React applications?',
    answer: 'Use React DevTools, browser console, breakpoints in VS Code.',
  },
  {
    id: 45,
    question: 'How do you ensure accessibility (a11y) in React apps?',
    answer: 'Use semantic HTML, aria attributes, and test with screen readers.',
  },
  {
    id: 46,
    question: 'What are concurrent features in React 18?',
    answer: 'Features that make rendering interruptible, like useTransition.',
  },
  {
    id: 47,
    question: 'What is React Server Components?',
    answer: 'Components rendered on the server, sending less JS to the client.',
  },
  {
    id: 48,
    question:
      'What is the difference between useTransition and useDeferredValue?',
    answer:
      'useTransition: defers a state update. useDeferredValue: defers a value computation.',
  },
  {
    id: 49,
    question: 'How does automatic batching work in React 18?',
    answer: 'Groups multiple state updates in one render, even in async code.',
  },
  {
    id: 50,
    question: 'What are the new features of React 19?',
    answer:
      'Likely improvements in Server Components, form actions, and compiler optimizations.',
  },
];

export default function App() {
  return (
    <>
      <Flashcards />
    </>
  );
}

function Flashcards() {
  const [selectedId, seSelectedId] = useState(null);

  function handleClick(id) {
    seSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map(question => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? 'selected' : ''}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
