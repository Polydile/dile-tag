# \<dile-tag>

Web Component for a customized tag text, based on LitElement.

More details: [Go to DEMO page](https://dile-tag.polydile.com)

## Installation
```bash
npm i dile-tag
```

## Usage
```html
<script type="module">
  import 'dile-tag/dile-tag.js';
</script>

<dile-tag label="My fisrt tag" round shadow></dile-tag>
```

## Properties

- label: The label tag
- icon: The icon tag
- round: Customize round tag
- shadow: Customize shadow tag
- upper: Customize uppercase text tag
- allowClose: Allow add a button close in tag

## Styling

Custom property | Description | Default
----------------|-------------|---------
--dile-tag-text-color | Main Text Color | #000
--dile-tag-background | Main Background Color | #ddd
--dile-tag-padding | Main Padding Block | 0.5rem

## Events

### closed

Fires whenever click in button close

```javascript
dileTag.addEventListener('closed', () => console.log('closed'));
```

## Run the project

### 1. Install dependencies

```npm i```

### 2. Run server

```npm start```

### 3. Run storybook

```npm run storybook```
