export class Sound {

    constructor(debug) {
        if (!debug) {
            const sound = document.createElement('audio');
            sound.autoplay = true;
            sound.loop = true;
            sound.src = '/sound/port.mp3';
            sound.type = 'audio/mpeg';
            document.getElementById('app').appendChild(sound);
        }
    }

}