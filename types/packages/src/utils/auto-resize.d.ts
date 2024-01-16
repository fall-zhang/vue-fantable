/**
 * autoResize - resizes a DOM element to the width and height of another DOM element
 *
 * Copyright 2014, Marcin Warpechowski
 * Licensed under the MIT license
 * refer to https://github.com/handsontable/handsontable/blob/HEAD/handsontable/src/3rdparty/autoResize/index.js
 */
export function autoResize(): {
    init: (el_: any, config: any, doObserve: any) => void;
    unObserve: () => boolean;
    resize: (newChar: any) => void;
};
