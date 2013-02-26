# Centaur

A website demonstrating Kraig Grady's "Centaur" music tuning system.

## Hear it
1. Turn your volume down
1. Open Google Chrome or Safari
1. Visit [http://centaur.jonathanmarmor.com](http://centaur.jonathanmarmor.com)
1. Turn your volume back up carefully

## Music rules
- There are three voices
- All voices obey the following rules:
- A duration is chosen for each note, with no input from what has come before
- 72% of the time a note's duration is between 110 and 310 milliseconds
- 28% of the time a note's duration is between 800 and 2100 milliseconds
- If the previous duration was long (>800ms), 15% of the time rest for 800 to 3000ms
- Each pitch is within three steps up or down from the previous pitch
- Pitches can't be repetitions of the previous pitch in the same voice
- Pitches can't be outside a four octave range

## Kraig Grady's "Centaur" tuning

Read more about the tuning at [The North American Embassy of Anaphoria Island](http://anaphoria.com/centaur.html).

## Synth, credit

Uses the synth file from [this](https://github.com/aike/webaudiosynth) [beautiful thing](http://aikelab.net/websynth/). The sound used is a very slight modification of aike1000's analog synth sound.  Thank you, [@aike1000](https://twitter.com/aike1000).

## Run your own on Ubuntu

Locally:

    git clone https://github.com/jonathanmarmor/ops.git
    pip install fabric
    cd ops
    fab -H <hostname> centaur.install

![Centaur](http://images.epilogue.net/users/jerry/centaur.jpg)
(I found this photograph of a Centaur on the internet. I hope he doesn't mind me using his likeness and the photographer is happy splitting all proceeds 50/50.)
