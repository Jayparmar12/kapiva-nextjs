# Description 
This is to help developers to understand the conventions,developments standards and tools we are/will be using throughout the duration of this project.

### Component Breakdown of design 
* Original source [Adobe Xd design for kapiva mobile version ](https://xd.adobe.com/view/1c0278bf-8303-4914-ba37-b02cb547e5f4-4951/specs/)
* HomePage Design Breakdown [figma](https://www.figma.com/file/ipnAUv0pF1myVY3lWOwvQs/Untitled?node-id=0%3A1)
* Product Page Design Breakdown [figma](https://www.figma.com/file/s4A7mqSRyZzHO63zT4WheX/Kapiva---Component-Breakdown?node-id=0%3A1)

## <b>Conventions used</b>
* Naming a branch
 <br> `feat-{section name in hyphen separated format}-design` 
 <br> `e.g. feat-product-science-design`
* Commit Message Structure
<br>Ex. `feat: atom ReadMoreOrLess design` where `ReadMoreOrLess` is the name of organism/molecule/atom
  <br>we are using Conventional commit conventions while commiting messages
[![Conventional Commit](https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png)](https://www.conventionalcommits.org/en/v1.0.0/)
* File Naming Conventions <br>

  We are following [atomic design](https://atomicdesign.bradfrost.com/chapter-2/) methodoloy for breaking down the design into atoms , molecules and organisms .we are going from top-down approach (like we are building organisms first,then breaking it further into atoms/molecules) 
  <br>
  Component names should come from design breakdown  and place them accordingly into atoms/molecules/organims directory 

### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/KDSPL/kapiva-next.git
cd kapiva-next
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
|   ├── components                  # React Components
|   |    ├── atoms                  
|   |    ├── molecules              
|   |    ├── organisms  
│   ├── layouts                     # Layouts components
│   ├── pages                       # Next JS Pages
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```


# learning resources/tools 
- [React Gliders](https://github.com/kevinfarrugia/react-glider#readme) for implementing sliders in react
- [storybook](https://storybook.js.org/) for streamlining UI development, testing, and documentation
- [Zustand](https://github.com/pmndrs/zustand) for State Management in react
- [Tailwind CSS](https://tailwindcss.com/) for CSS framework
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for coding standards 
- [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) for Commit message conventions
- [Atomic Design ](https://bradfrost.com/blog/post/atomic-web-design/)  methodology for creating design systems
### Features Of Next JS Boilerplate

Developer experience first:  
- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 🦺 Testing with Jest and React Testing Library
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready


### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Boilerplate)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-js-Boilerplate)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---
