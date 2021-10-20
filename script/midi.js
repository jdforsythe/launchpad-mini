/**
 * Initialize MIDI and get inputs / outputs
 *
 * @returns {Object}
 */
export const initialize = async (inputCb) => {
  if (navigator.requestMIDIAccess) {
    return navigator.requestMIDIAccess().then(({ inputs, outputs }) => {
      if (!inputs.size || !outputs.size) {
        throw new Error('Missing MIDI input or output device');
      }

      const input = inputs.values().next().value;
      input.onmidimessage = inputCb;

      // TODO: work with multiple MIDI devices attached
      return {
        input,
        output: outputs.values().next().value,
      };
    });
  }
  else {
    // TODO: use polyfill
    throw new Error('No MIDI support in your browser.');
  }
};


