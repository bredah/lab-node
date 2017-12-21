const fs = require('fs');

/**
 * Add a node
 * @param {string} title - Title of the note
 * @param {string} body - Note context
 */
var addNote = (title, body) => {
    var notes = [];

    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSyc('notes-data.json');
        notes = JSON.parse(notesString);

    } catch (e) {

    }

    notes.push(note);

    // Add content on file
    fs.writeFileSync('note.json', JSON.stringify(notes))
};

/**
 * Remove a note from notebook
 * @param {string} title - Title of the note
 */
var removeNote = (title) => {

};

module.exports = {
    addNote,
    removeNote,
};