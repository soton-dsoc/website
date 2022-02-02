# 🚀 dSoc Website backend

## Question specification scheme
Because of many reasons, you can specify questions you want to be included in the form:

```json
[
  {
    "text": "<Question>",
    "description": "<Your description>",
    "type": "<Type of a control>",
    "required": <true/false>,
    "options": [
        "Option 1",
        "Option 2",
            ...
        "Option N"
    ]
  },
  {
      ...
  }
]
```
* `text` - your questions
* `description` - any additional info to the question`
* `type` is a [mantine](https://mantine.dev/core/) control with the exact casing. 
The following are currently supported:
  * Chips
* `required` - whether the field is required
* `options` (optional) - depending on a control, you can provide pre-defined responses for controls like chips, or select.


## Running the project

### `develop`

Start application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

# License
MIT