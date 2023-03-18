
# Assignment Seven

  

Assignment Checklist:-

1. Implement a CSS Grid and a flexbox in your pages wherever it fits.

2. Implement Below SASS Features

- Variables: _Variable.scss

- Custom Properties: Every where variables are used

Eg. `font-size: $font-lg;` used in `globals.scss`

- Nesting:

`Article.scss` in

```scss

.article {

&__grid {

display: grid;

grid-template-columns: 1fr;

gap: 1.875rem;

  

@include breakpoint-up(medium) {

grid-template-columns: repeat(2, 1fr);

}

@include breakpoint-up(large) {

grid-template-columns: repeat(4, 1fr);

}

}

  

&__item {

background-color: var(--clr-card);

border-radius: 0.3125rem;

overflow: hidden; //doubt -> for rounded borders to show-up

box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);

transition: all 150ms ease-in-out;

&:hover {

transform: scale(1.05);

}

}

  

&__img {

height: 12.5rem;

background-repeat: no-repeat;

background-position: center center;

}

  

&__text {

padding: 1.875rem 1.875rem 2.5rem 1.875rem;

color: $grayishBlue;

@include breakpoint-up(medium) {

padding: 1.875rem 1.5625rem;

}

}

  

&__author {

font-size: 0.625rem;

margin-bottom: 0.75rem;

}

  

&__title {

font-size: 1.0625rem;

color: var(--clr-title);

margin-bottom: 0.5rem;

line-height: 1.2;

font-weight: 300;

}

  

&__description {

font-size: 0.825rem;

color: var(--clr-text);

}

}

```

- Interpolation:

login.scss

```scss

$image-path: "/images";

.login-page {

background-image: url("#{$image-path}/login-bg.jpg");

```

- Placeholder Selectors
Login.scss
```scss
button {

@extend  %button;

background-color: $primary-color;

color: #fff;

  

&:hover {

background-color: darken($primary-color, 10%);

}

}
```

- Mixins
`mixins.scss`

- Functions
Login.scss
```scss
// Define function to convert pixels to rem

@function  rem($pixels) {

@return ($pixels  /  16) *  1rem;

}
```

> Extras

- Keyframe Animation using SCSS
  `animation.scss`

1. SCSS files are organized

2. Rich UI

3. README FILE