export const COMMANDS = {
  TopButtons: 0xb0, // 176
  OtherButtons: 0x90, // 144
};

export const BUTTON_STATE = {
  Unpressed: 0,
  Pressed: 1,
};

export const ALL_BUTTONS = (new Array(80)).fill(0)
  .map((_, i) => [i % 9, (i - i % 9) / 9])
  .map((xy) => {
    xy.id = Symbol();
    xy.cmd = xy[1] >= 8 ? COMMANDS.TopButtons : COMMANDS.OtherButtons;
    xy.key = xy[1] >= 8 ? 0x68 + xy[0] : 0x10 * xy[1] + xy[0];

    return xy;
  });

export const GRID = ALL_BUTTONS.filter(([x, y]) => x < 8 && y < 8);
export const TOP = ALL_BUTTONS.filter(([_, y]) => y === 8);
export const SIDE = ALL_BUTTONS.filter(([x, _]) => x === 8);

const _mapById = new Map();
ALL_BUTTONS.forEach((b) => _mapById.set(b.id, b));

export const byId = (id) => _mapById.get(id);

export const byXy = (x, y) => ALL_BUTTONS[9 * y + x];
