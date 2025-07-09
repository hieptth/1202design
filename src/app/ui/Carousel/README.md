# Carousel UI Component

A powerful, customizable carousel component built with `@egjs/react-flicking` for React applications. This component is designed to be part of your UI component library with extensive customization options, presets, and hooks.

## Features

- 🎯 **Preset configurations** for common use cases
- 🎨 **Multiple visual variants** for controls and indicators
- 🔧 **Extensive customization options**
- ⌨️ **Keyboard navigation** support
- 📱 **Touch/swipe gestures** for mobile
- 🎭 **Custom render functions** for controls and indicators
- 🪝 **Utility hooks** for advanced use cases
- ♿ **Accessibility features** built-in
- 🎯 **TypeScript support** with full type definitions

## Installation

The component requires `@egjs/react-flicking` to be installed:

```bash
npm install @egjs/react-flicking
```

## Basic Usage

```tsx
import { Carousel } from '@/app/ui';

const MyComponent = () => {
  const items = [
    { id: 1, content: <div>Slide 1</div> },
    { id: 2, content: <div>Slide 2</div> },
    { id: 3, content: <div>Slide 3</div> },
  ];

  return <Carousel items={items} />;
};
```

## Using Presets

The component comes with built-in presets for common use cases:

```tsx
// Basic single-item carousel
<Carousel items={items} preset="basic" />

// Multi-item card carousel
<Carousel items={items} preset="cards" />

// Hero/banner carousel with auto-play
<Carousel items={items} preset="hero" />

// Mobile-friendly carousel
<Carousel items={items} preset="mobile" />

// Free-scroll gallery
<Carousel items={items} preset="gallery" />
```

## Customization Options

### Control Variants

```tsx
// Default controls (white background)
<Carousel items={items} controlsVariant="default" />

// Minimal controls (semi-transparent)
<Carousel items={items} controlsVariant="minimal" />

// Custom controls (use renderCustomControls)
<Carousel items={items} controlsVariant="custom" />
```

### Indicator Variants

```tsx
// Dot indicators
<Carousel items={items} indicatorsVariant="dots" />

// Line indicators
<Carousel items={items} indicatorsVariant="lines" />

// Number indicators
<Carousel items={items} indicatorsVariant="numbers" />
```

### Custom Controls

```tsx
<Carousel
  items={items}
  renderCustomControls={({ onPrev, onNext, currentIndex, totalItems }) => (
    <div className="flex justify-between mt-4">
      <button onClick={onPrev}>← Previous</button>
      <span>{currentIndex + 1} / {totalItems}</span>
      <button onClick={onNext}>Next →</button>
    </div>
  )}
/>
```

### Custom Indicators

```tsx
<Carousel
  items={items}
  renderCustomIndicators={({ currentIndex, totalItems, onIndicatorClick }) => (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalItems }, (_, index) => (
        <button
          key={index}
          onClick={() => onIndicatorClick(index)}
          className={index === currentIndex ? 'active' : 'inactive'}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )}
/>
```

## Advanced Usage with Hooks

### useCarousel Hook

```tsx
import { useCarousel } from '@/app/ui';

const MyComponent = () => {
  const items = [/* your items */];
  const { currentIndex, totalItems, goToSlide, nextSlide, prevSlide } = useCarousel(items);

  return (
    <div>
      <button onClick={prevSlide}>Previous</button>
      <span>{currentIndex + 1} / {totalItems}</span>
      <button onClick={nextSlide}>Next</button>
      <button onClick={() => goToSlide(0)}>Go to first</button>
    </div>
  );
};
```

### useCarouselAutoPlay Hook

```tsx
import { useCarouselAutoPlay } from '@/app/ui';

const MyComponent = () => {
  const flickingRef = useRef<Flicking>(null);
  
  // Enable auto-play with 3 second interval
  useCarouselAutoPlay(flickingRef, true, 3000);

  return <Carousel items={items} ref={flickingRef} />;
};
```

### useCarouselKeyboard Hook

```tsx
import { useCarouselKeyboard } from '@/app/ui';

const MyComponent = () => {
  const flickingRef = useRef<Flicking>(null);
  
  // Enable keyboard navigation
  useCarouselKeyboard(flickingRef, true);

  return <Carousel items={items} ref={flickingRef} />;
};
```

## Props Reference

### CarouselProps

| Prop                     | Type                       | Default     | Description                        |
| ------------------------ | -------------------------- | ----------- | ---------------------------------- |
| `items`                  | `CarouselItem[]`           | -           | Array of carousel items (required) |
| `className`              | `string`                   | `""`        | Additional CSS classes             |
| `options`                | `CarouselOptions`          | `{}`        | Carousel configuration options     |
| `preset`                 | `CarouselPreset`           | -           | Preset configuration               |
| `showControls`           | `boolean`                  | `true`      | Show navigation controls           |
| `showIndicators`         | `boolean`                  | `true`      | Show position indicators           |
| `controlsVariant`        | `CarouselVariant`          | `"default"` | Controls visual variant            |
| `indicatorsVariant`      | `CarouselIndicatorVariant` | `"dots"`    | Indicators visual variant          |
| `onMove`                 | `(event) => void`          | -           | Callback when carousel moves       |
| `onChanged`              | `(event) => void`          | -           | Callback when carousel stops       |
| `renderCustomControls`   | `(props) => ReactNode`     | -           | Custom controls render function    |
| `renderCustomIndicators` | `(props) => ReactNode`     | -           | Custom indicators render function  |

### CarouselOptions

| Option             | Type                           | Default    | Description                |
| ------------------ | ------------------------------ | ---------- | -------------------------- |
| `circular`         | `boolean`                      | `true`     | Enable circular navigation |
| `align`            | `"prev" \| "center" \| "next"` | `"center"` | Panel alignment            |
| `moveType`         | `"snap" \| "freeScroll"`       | `"snap"`   | Movement behavior          |
| `autoResize`       | `boolean`                      | `true`     | Auto-resize panels         |
| `panelsPerView`    | `number`                       | `1`        | Number of panels visible   |
| `gap`              | `number`                       | `20`       | Gap between panels (px)    |
| `duration`         | `number`                       | `500`      | Animation duration (ms)    |
| `autoPlay`         | `boolean`                      | `false`    | Enable auto-play           |
| `autoPlayInterval` | `number`                       | `3000`     | Auto-play interval (ms)    |

### CarouselItem

| Property  | Type               | Description        |
| --------- | ------------------ | ------------------ |
| `id`      | `string \| number` | Unique identifier  |
| `content` | `ReactNode`        | Content to display |

## Available Presets

| Preset    | Description          | Configuration                 |
| --------- | -------------------- | ----------------------------- |
| `basic`   | Single-item carousel | Center-aligned, snap movement |
| `cards`   | Multi-item card view | 3 panels, left-aligned        |
| `hero`    | Hero/banner carousel | Auto-play, center-aligned     |
| `mobile`  | Mobile-optimized     | 1.2 panels, smaller gap       |
| `gallery` | Free-scroll gallery  | 2.5 panels, free-scroll       |

## Accessibility

The component includes built-in accessibility features:

- ARIA labels for controls and indicators
- Keyboard navigation support (arrow keys, Home, End)
- Focus management
- Screen reader compatibility

## Keyboard Controls

- `←` / `→` - Navigate between slides
- `Home` - Go to first slide
- `End` - Go to last slide

## Browser Support

Supports all modern browsers. For older browser support, refer to the `@egjs/react-flicking` documentation.

## Examples

See `CarouselDemo.tsx` for comprehensive examples showing different configurations and use cases.

## Migration from Components

If you're migrating from the old `/components/Carousel`:

```tsx
// Before
import { Carousel } from '@/components';

// After
import { Carousel } from '@/app/ui';

// Use presets instead of manual options
<Carousel items={items} preset="hero" />
```
