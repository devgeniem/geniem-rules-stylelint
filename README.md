# @geniem/geniem-rules-stylelint

> A shareable stylelint config for CSS used at Geniem

## Installation

```bash
npm install @geniem/geniem-rules-stylelint --save-dev
```

## Usage

If you've installed `@geniem/geniem-rules-stylelint` locally within your project, just set your `stylelint` config to `package.json`:

```json
{
    "name": "vendor/package",
    "version": "0.0.0",
    "stylelint": {
      "extends": [ "@geniem/geniem-rules-stylelint" ]
    }
}
```

If you've globally installed `@geniem/geniem-rules-stylelint` using the `-g` flag, then you'll need to use the absolute path to `@geniem/geniem-rules-stylelint` in your config e.g.

```json
{
    "name": "vendor/package",
    "version": "0.0.0",
    "stylelint": {
        "extends": [ "/absolute/path/to/@geniem/geniem-rules-stylelint" ]
    }
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "name": "vendor/package",
  "version": "0.0.0",
  "stylelint": {
    "extends": "@geniem/geniem-rules-stylelint",
    "rules": {
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [ "extends" ]
        }
      ],
      "block-no-empty": null,
      "unit-whitelist": [ "em", "rem", "s" ]
    }
  }
}
```

## License

Licensed under the [MIT license](http://opensource.org/licenses/MIT).
