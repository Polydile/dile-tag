```js script
import { html } from '@open-wc/demoing-storybook';
import '../dile-tag.js';

export default {
  title: 'DileTag',
  component: 'dile-tag',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# DileTag

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add dile-tag
```

```js
import 'dile-tag/dile-tag.js';
```

```js preview-story
export const byDefault = () => html`
  <dile-tag label="My fisrt tag"></dile-tag>
`;
```

## Variations

###### With round property

```js preview-story
export const withRound = () => html`
  <dile-tag label="Tag with round" round></dile-tag>
`;
```

```js preview-story
export const withShadow = () => html`
  <dile-tag label="Tag with shadow" shadow></dile-tag>
`;
```

```js preview-story
export const withShadowAndRound = () => html`
  <dile-tag label="Tag with shadow" shadow round></dile-tag>
`;
```

```js preview-story
export const withButtonClose = () => html`
  <dile-tag label="Tag with button close" allow-close @closed="${() => alert('closed!')}"></dile-tag>
`;
```

```js preview-story
export const withUpperText = () => html`
  <dile-tag label="Tag with upper text" upper></dile-tag>
`;
```

```js preview-story
export const withIcon = () => html`
  <dile-tag label="Tag with icon" icon="https://picsum.photos/seed/picsum/64"></dile-tag>
`;
```
