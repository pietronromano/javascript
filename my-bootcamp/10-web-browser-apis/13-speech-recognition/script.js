/*
Speech Recognition API

The Speech Recognition API allows web applications to convert spoken language into text. 
It provides a way for users to interact with web applications using their voice, enabling functionalities such as voice commands, dictation, and voice-controlled navigation.

Key Features:
1. SpeechRecognition Interface: The main interface for speech recognition, allowing developers to create instances that can listen for and process spoken input.
2. Language Support: Developers can specify the language for recognition, enabling support for multiple languages and dialects.
3. Continuous Recognition: The ability to continuously listen for speech input without stopping after each recognition result.
4. Event Handling: Various

References: 
- MDN Web Docs - Speech Recognition API: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

*/ 
////////////////////////////////////////////////////////////////

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white',
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert('Please say a color');
    }
  }
};

rec.start();
