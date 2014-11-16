
/**
 * @module progr
 * @author stagas
 * @version 1.0.0
 * @desc seedable random chord progression generator
 * @license mit
 */

import rand from 'anttisykari/seedable-random';
import Chords from 'stagas/chords/1.0.1';

var notes = 'c,c#,d,d#,e,f,f#,g,g#,a,a#,b'.split(',');
var ckeys = Object.keys(Chords.chords).slice(2);

export default function(n, size){
  rand.seed(n);
  var progr = Array(size);
  for (var i = 0; i < size; i++) {
    var note = notes[rand() * notes.length | 0];
    var c = ckeys[rand() * ckeys.length | 0];
    progr[i] = note.toUpperCase() + c;
  }
  return progr;
}
