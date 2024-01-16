export function addClass(el: any, cls: any): void;
export function removeClass(el: any, cls: any): void;
export function hasClass(el: any, cls: any): any;
export function getViewportOffset(triggerEl: any): {
    offsetTop: any;
    offsetLeft: any;
    left: number;
    top: number;
    right: number;
    bottom: number;
    right2: number;
    bottom2: number;
};
export function getViewportOffsetWithinContainer(triggerEl: any, containerEl: any): {
    offsetTop: number;
    offsetLeft: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
    right2: number;
    bottom2: number;
};
export function getMousePosition(event: any): {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
/**
 * Returns caret position in text input.
 *
 * @author https://stackoverflow.com/questions/263743/how-to-get-caret-position-in-textarea
 * @param {HTMLElement} el An element to check.
 * @returns {number}
 */
export function getCaretPosition(el: HTMLElement): number;
/**
 * Sets caret position in text input.
 *
 * @author http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
 * @param {Element} element An element to process.
 * @param {number} pos The selection start position.
 * @param {number} endPos The selection end position.
 */
export function setCaretPosition(element: Element, pos: number, endPos: number): void;
