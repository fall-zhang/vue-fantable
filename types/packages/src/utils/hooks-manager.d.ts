export default class Hooks {
    hooks: {};
    /**
       * Add listener to plugin hooks system.
       *
       * @param {string} hookName The hook name.
       * @param {Function} callback The listener function to add.
       */
    addHook(hookName: string, callback: Function): void;
    /**
       * Trigger hook.
       *
       * @param {string} hookName The hook name.
       * @param {Argument} args
       */
    triggerHook(hookName: string, ...args: any[]): void;
}
