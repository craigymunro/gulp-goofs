# Gulp goofs
Goofin' around with gulp

Taking my first steps with gulp. This gulpfile does five things:

- Takes input from the `/less` directory
- Converts the LESS to CSS
- Runs the result through an autoprefixer
- Minifies it
- And outputs it to the `/css` directory.

Compare `/less/base.less` to `/css/base.css` to see the difference between the original input and final output.

It also can run in `watch` mode and automatically run whenever a LESS file changes.

## Quickstart

- Check this repo out
- Run `npm install` to install its dependencies
- Run the gulp tasks using `gulp`
