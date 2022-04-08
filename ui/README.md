# Fabstracta Template Project

Uses Webpack 5 together with Typescript and React.
https://fds.fnox.se/components/fabstracta

## Contributing

### `make`

One command to rule them all to verify that
[fabstracta-template](https://git.fnox.se/projects/FNX/repos/fabstracta-template)
continues to work after your change. See `Makefile` for more details. Jenkins
runs the same commands.

## Development

You must first install node modules by running:  
`npm install`

Run local development server:  
`npm run dev`

Visit https://localhost:9090

To log in, go to https://localhost:9090/fs/fs/login.php

### Vessel

To develop in vessel change `IS_VESSEL_APP` to `true` in `package.json` and restart server.  
Log in and then change path to `/app/<fid>/fabstracta-template`.  
or navigate to `/fabstracta-template/<fid>` to develop outside vessel iframe.

### Integration Tests

### Cypress

Run Cypress tests:  
`npm run e2e`

Run Cypress tests in headless mode with coverage:  
`npm run e2e:coverage`

#### Coverage

See `.nycrc.json` for excluding files from coverage.

Run `open coverage/lcov-report/index.html` to see html report of coverage.

### jBehave

In IntelliJ add `-Dselenium.webserver.port=9091` to "Run/Debug
Configurations" → Templates → Junit and then run tests against
webpack-dev-server instead:  
`npm run dev-jbehave`

Or instead make a production build for every change and then run tests from
IntelliJ or similar:  
`npm run prod`

### Linting & Formatting

Changed files are linted with ESLint and formatted with Prettier automatically
via a git pre-commit hook.

Lint changed files with ESLint:  
`npm run lint`

Lint all files with ESLint:  
`npm run lint:all`

Format all files with Prettier:  
`npm run lint:all`

## Jenkins Deployment

Run production build:

`npm run prod`

Set up continuous integration:
https://git.fnox.se/projects/FNX/repos/fnxctl/browse/docs/create.md

## Responsible Team

Magnetic
