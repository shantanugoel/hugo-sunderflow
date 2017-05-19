# hugo-sunderflow

This a hugo theme developed for [securityunderflow.com](https://securityunderflow.com).

## Installation

Go to your hugo directory and clone the theme into the theme folder as follows:

```bash
cd /path/to/hugo/site
git clone https://github.com/oxalorg/hugo-sunderflow themes/sunderflow
```

Now enable the theme by changing the `theme` variable to `sunderflow`
in your root hugo config file:

```yaml
# in /config.toml
theme = "sunderflow"

# or if you're using yaml, in /config.yaml
theme: "sunderflow"
```

## Notes

css files are compiled and checked into version control, so there is no need for the user to mess around with node and sass.

But if they wish to do so, you can do it as following:

```bash
# make sure node/npm is installed
cd /path/to/hugo/site
npm install
npm run scss
# or to watch your scss files and recompile on every save, use:
npm run scss:watch
```