# Kanddo UI Documentation

Kanddo UI is a modern, minimalistic design system focused on delivering clean, customizable, and accessible user interfaces. Built with **Tailwind CSS** as the foundation for styling, Kanddo UI is optimized for use with React, providing a set of UI components that can be easily integrated into your projects.

Whether you're building a simple landing page or a complex enterprise application, Kanddo UI empowers you to craft beautiful, responsive, and high-performance interfaces with ease.

---

## Installation

To get started with Kanddo UI, you’ll need to install the required packages via **npm** or **yarn**.

### Installing `@kanddo-ui/core`
The **`@kanddo-ui/core`** package contains the essential styles and foundational components for the Kanddo UI design system.

```bash
npm install @kanddo-ui/core
```

Alternatively, if you're using **yarn**:

```bash
yarn add @kanddo-ui/core
```

[Visit @kanddo-ui/core on npm](https://www.npmjs.com/package/@kanddo-ui/core)

### Installing `@kanddo-ui/react`
For React users, the **`@kanddo-ui/react`** package provides pre-built React components that work seamlessly with the core styles, ensuring a smooth development experience.

```bash
npm install @kanddo-ui/react
```

Or using **yarn**:

```bash
yarn add @kanddo-ui/react
```

[Visit @kanddo-ui/react on npm](https://www.npmjs.com/package/@kanddo-ui/react)

### Installing `kanddo-ui`
If you prefer a bundled installation, you can install the **`kanddo-ui`** package, which includes both core styles and React components.

```bash
npm install kanddo-ui
```

Or with **yarn**:

```bash
yarn add kanddo-ui
```

[Visit kanddo-ui on npm](https://www.npmjs.com/package/kanddo-ui)

---

## Getting Started

### Using `@kanddo-ui/core`

The **`@kanddo-ui/core`** package provides the necessary base styles for your project. Simply import the styles and use the utility classes and components throughout your application.

#### Example:

```javascript
import '@kanddo-ui/core/dist/style.css'; // Import core styles

function App() {
  return (
    <div className="bg-gray-100 p-4">
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}

export default App;
```

---

### Using `@kanddo-ui/react`

The **`@kanddo-ui/react`** package offers a suite of pre-styled React components. These components are fully customizable, and ready to use out of the box.

#### Example:

```javascript
import { Button } from '@kanddo-ui/react';

function App() {
  return (
    <div className="p-6">
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;
```

---

## Components

Kanddo UI includes a wide variety of components, each designed with flexibility and responsiveness in mind. Components are built with **Tailwind CSS** and are fully compatible with React, allowing for an easy integration process.

### Example Components:
- **Button**: Versatile buttons with customizable variants.
- **Card**: A clean and flexible card component for grouping content.
- **Input**: A set of inputs with focus states and modern styles.
- **Modal**: An accessible modal component for displaying content overlays.

Each component is designed to be easily extended and styled to fit your specific needs.

---

## Customization

Kanddo UI is designed to be highly customizable. You can extend or override the default styles and configuration to align with your brand and application needs.

### Customizing the Theme
To customize the theme, simply modify the **Tailwind CSS** configuration file or use the **Tailwind utility classes** to apply customizations to individual components.

Example:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff5733',
        secondary: '#33c1ff',
      },
    },
  },
};
```

---

## Contributing

Kanddo UI is open-source, and we welcome contributions! If you want to improve existing components, add new ones, or fix bugs, feel free to open a pull request.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a pull request to the main repository.

---

## Useful Links

- [Kanddo UI on npm](https://www.npmjs.com/package/kanddo-ui)
- [@kanddo-ui/core on npm](https://www.npmjs.com/package/@kanddo-ui/core)
- [@kanddo-ui/react on npm](https://www.npmjs.com/package/@kanddo-ui/react)

---

This documentation is tailored for developers and teams seeking to leverage a modern design system that aligns with **tailored UI components**, **clean design principles**, and **effortless customization**.
