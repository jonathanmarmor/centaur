'use strict';

var Centaur = {};

Centaur.instruments = [];

Centaur.makeInstrument = function(){
    var i = new WebSynth();
    Centaur.instruments.push(i);
    return i;
};

Centaur.makeScale = function(){
    var cents,
        i,
        oneOctave,
        ratios = [1/1, 21/20, 9/8, 7/6, 5/4, 4/3, 7/5, 3/2, 14/9, 5/3, 7/4, 15/8],
        pitches = [],
        octaves = [0, 1, 2, 3];

    oneOctave = ratios.map(function(ratio){
        return (1200 * Math.log(ratio) / Math.log(2)) / 100;
    });

    octaves.forEach(function(octave){
        oneOctave.forEach(function(ps){
            pitches.push(ps + (12 * octave) + 5);  // raise everything by a 4th
            // because 5 octaves went too high and too low for this timbre.
        });
    });
    return pitches;
};

Centaur.chooseDuration = function(){
    var shortOrLong = Math.random(),
        min = 110,
        max = 310;
    if(shortOrLong > 0.72){  // play a long note 28% of the time
        min = 800;
        max = 2100;
    }
    return Math.random() * (max - min + 1) + min;
};

Centaur.choosePitch = function(lastPitch, pitches){
    var lastIndex = pitches.indexOf(lastPitch),
        min = lastIndex - 3,
        max = lastIndex + 3,
        i,
        indexes;
    if(min < 0){
        min = 0;
    }
    if(max > pitches.length){
        max = pitches.length;
    }
    i = Math.floor(Math.random() * (max - min + 1)) + min;
    if(i === lastIndex){
        // Don't repeat the last pitch
        return Centaur.choosePitch(lastPitch, pitches);
    }
    return pitches[i];
};

Centaur.chooseNote = function(lastPitch, pitches){
    return {
        'pitch': Centaur.choosePitch(lastPitch, pitches),
        'duration': Centaur.chooseDuration()
    };
};

Centaur.makePart = function(pitches){
    var numNotes = 1000,
        lastPitch = pitches[Math.floor(Math.random() * pitches.length)],  // initial pitch
        note,
        notes = [],
        n,
        rest,
        gapDuration;

    for(n = 0; n < numNotes; n++){
        note = Centaur.chooseNote(lastPitch, pitches);
        notes.push(note);
        lastPitch = note.pitch;

        // Add some rests here and there
        if((note.duration > 700) && (Math.random() > 0.85)){
            gapDuration = Math.random() * (3000 - 800 + 1) + 800;
            notes.push({'duration': gapDuration});
        }
    }
    return notes;
};

Centaur.playNotes = function(notes, instrument, offset){
    // Schedule the notes
    var timeout = offset || 100;
    notes.forEach(function(note){
        setTimeout(function(){
            if(note.pitch){
                instrument.play(note.pitch);
            }
            else {
                instrument.stop();
            }
        }, timeout);
        timeout += note.duration;
    });
    setTimeout(function(){
        instrument.stop();
    }, timeout);
};

Centaur.playPiece = function(){
    var pitches = Centaur.makeScale(),
        numParts = 3,
        instruments = [],
        parts = [],
        i;

    for(i = 0; i < numParts; i++){
        instruments.push(Centaur.makeInstrument());
        parts.push(Centaur.makePart(pitches));
    }

    for(i = 0; i < numParts; i++){
        Centaur.playNotes(parts[i], instruments[i], 500);
    }
};

window.onload = function(){
    Centaur.playPiece();
};
