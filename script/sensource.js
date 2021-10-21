import { COLORS } from './display/color.js';
import { LETTERS, displayLetter } from './display/letters.js';

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

  const letters = [
    LETTERS.S,
    LETTERS.E,
    LETTERS.N,
    LETTERS.S,
    LETTERS.O,
    LETTERS.U,
    LETTERS.R,
    LETTERS.C,
    LETTERS.E,
    LETTERS.off,
  ];

  let retn = Promise.resolve();

  for (const letter of letters) {
    retn = retn.then(() => displayLetter(launchPadOutput, 500, letter, colors));
  }

  return retn;
}

export async function go(launchPadOutput) {
  launchPadOutput.reset(0);

  await getSenSourcePromises(launchPadOutput);

  launchPadOutput.reset(0);
}
