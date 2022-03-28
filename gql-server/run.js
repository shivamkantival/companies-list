const data = require('./src/dataFetchers/MOCK_DATA.json');
const { uniq } = require('lodash');

const result = data.map(data => ({ ...data, id: `${data.id}` }));

var fs = require('fs');
fs.writeFile(
  './MOCK_DATA.json',
  JSON.stringify(result, null, 2),
  'utf8',
  () => {}
);
