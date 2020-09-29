const fs = require("fs")
const _ = require("lodash")
const { pluginOptionsSchema } = require("./example-schema.js")

const tableRows = []
Object.entries(pluginOptionsSchema.describe().keys).forEach(([key, value]) => {
  const type = value.type
  const description = _.get(value, `flags.description`, ``)
  const defaultValue = _.get(value, `flags.default`, ``)
  const isRequired =
    _.get(value, `flags.presence`, null) === `required` ? `Yes` : ``

  tableRows.push(
    `| ${key} | ${type} | ${description} | ${defaultValue} | ${isRequired} |`
  )
})

const content = `
<!-- THIS IS AN AUTO GENERATED FILE. -->

## Plugin Options

| Option | Type | Description | Default | Required |
| ------ | ---- | ----------- | ------- | -------- |
${tableRows.join("\n")}

`

try {
  fs.writeFileSync("plugin-options.md", content, "utf8")
  console.log("Plugin options saved.")
} catch (e) {
  console.error(err)
}
