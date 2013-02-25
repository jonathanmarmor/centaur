## Demonstration of the Centaur tuning system

Three voices randomly walking around Kraig Grady's Centaur tuning system.

Hear it at [http://centaur.jonathanmarmor.com](http://centaur.jonathanmarmor.com).

Read more about the tuning at [The North American Embassy of Anaphoria Island](http://anaphoria.com/centaur.html).

Uses the synth file from [this](https://github.com/aike/webaudiosynth) [beautiful thing](http://aikelab.net/websynth/). Thank you, [@aike1000](https://twitter.com/aike1000).

### Installation and deployment

On Ubuntu

Install Nodejs and Git:

    sudo apt-get install python-software-properties python g++ make git
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs npm

Clone this repo:

    mkdir ~/apps
    cd ~/apps
    git clone https://github.com/jonathanmarmor/centaur.git

Install dependencies:

    cd centaur
    npm install
    sudo npm install -g forever

Serve the website:

    sudo forever start index.js


![Centaur](http://images.epilogue.net/users/jerry/centaur.jpg)
