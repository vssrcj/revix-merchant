# Revix merchant site

*This site is bootstrapped with [Gatsby](https://www.gatsbyjs.org/).  It is a powerful, well supported, mature static site generator.*

## Quickstart

To install
```
npm install
```

To build
```
npm run build
```

To run development environment
```
npm run develop
```

## Gastby vs react-biolerplate
The biggest difference is that **Gatsby** is statically generated, and **react-boilerplate** is client side rendered.

The only development differences are:
* ### Routing
In **Gatsby** you just put the different route components in */pages*.  In **react-boilerplate** you use *React Router* to define the routing yourself.
* ### Data fetching
Since the nature of getting data is different in static generation vs client rendering, getting data from a remote resource is different.  Basically, if using client rendering, just */sections/index/use-request.js* must change.

The rest of the code stays the same, including the components, testing, storybook, sections/containers, Ant Design, styled-components, etc.

## CMS

The site uses [Prismic](https://revix-merchant.prismic.io/).  It is a simple, cost effictive CMS.

You can log in with:
```
revix@mailinator.com
KQTP5Y721BPQfJl
```

## Storybook
It is a nice tool to view al of your components.
All the "stories" are defined in the root directory.

You can run it with:
```
npm run storybook
```
And then view the results at: http://localhost:6006/

## Other stuff

* The names */sections* and */containers* are probably interchangable.
* All the root files are simply configuration files.
* ESLint is included.  If you use VSCode and have the ESLint plugin is installed, then the files will auto-fix on save.  
To run an auto lint fix on the entire application, execute: `npm run lint-fix`.
* To run your tests, execute: `npm run test`.