import { COLORS } from '../launchpad/color.js';
import { LaunchpadOutput } from '../launchpad/output.js';
import { initialize } from '../midi.js';
import { wait } from '../util.js';

async function getSenSourcePromises(launchPadOutput) {
  const colors = [
    [[COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red]],
    [[COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red]],
    [[COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red]],
    [[COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red]],
    [[COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red]],
    [[COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red]],
    [[COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red]],
    [[COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red], [COLORS.Red]],
  ];

  const letters = ['S', 'E', 'N', 'S', 'O', 'U', 'R', 'C', 'E', 'off'];

  let retn = Promise.resolve();

  for (const letter of letters) {
    retn = retn.then(() => {
      return wait(500);
    }).then(() => {
      launchPadOutput.displayLetter(letter, colors);
      document.getElementById('text').innerText = letter === 'off' ? '' : letter;
    });
  }

  return retn;
}

export async function go() {
  const { output } = await initialize();

  const launchPadOutput = new LaunchpadOutput(output);

  launchPadOutput.reset(0);

  await getSenSourcePromises(launchPadOutput);

  launchPadOutput.reset(0);
}

go().catch(console.error);
