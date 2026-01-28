const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const eventsDir = path.join(__dirname, "../_data/events");
const schema = require("../schemas/event-v1.json");

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(schema);

let hasErrors = false;

for (const file of fs.readdirSync(eventsDir)) {
  if (!file.endsWith(".yml") || file.includes("template")) continue;

  const data = yaml.load(fs.readFileSync(path.join(eventsDir, file), "utf8"));
  if (!validate(data)) {
    console.error(`❌ ${file}`, validate.errors);
    hasErrors = true;
  }
}

if (hasErrors) process.exit(1);
