
/**
 * test
 */

import note from 'opendsp/note';
import { sin, tri } from 'opendsp/osc';
import { Saw, Tri } from 'opendsp/wavetable-osc';
import Chords from 'stagas/chords/1.0.1';
import Chord from 'stagas/chord/1.1.0';
import Debug from 'debug';
import Progr from './index';

var debug = Debug('progr');
var chord = Chord(Tri, 5, true);
var progr = Progr(1,8);
var base = oct(8);

debug(progr);

progr = progr.map(Chords);

export function dsp(t){
  var c = progr[t%progr.length|0].map(note);
  var chord_out = chord(c.map(base).map(vibrato(tri(t, 5) * 5)));
  var mix = (
    4 * chord_out
  );
  return mix;
}

function vibrato(x){
  return function(y){
    return x + y;
  };
}

function oct(x){
  return function(y){
    return x * y;
  };
}
