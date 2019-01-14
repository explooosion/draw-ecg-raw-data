let csvToJson = require('convert-csv-to-json');

let fileInputName = './csv_one.csv';
let fileOutputName = 'csv.json';

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
