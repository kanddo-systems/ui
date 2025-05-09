import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Getting Started', 'Tokens', ['Components']],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
