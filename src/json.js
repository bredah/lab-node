const fs = require('fs');

// Create a note object
var originalNote = {
    title: 'Simple title',
    body: 'Note content'
};
// Convert the object to string
var stringOriginalNote = JSON.stringify(originalNote);

// Write content on file
fs.writeFileSync('notes.json', stringOriginalNote);

// Read JSON file
var contentNote = fs.readFileSync('notes.json');

// Parse the string to JSON object
var note = JSON.parse(contentNote);

// Print JSON content
console.log(typeof note);
console.log(note.title);
console.log(note.body);