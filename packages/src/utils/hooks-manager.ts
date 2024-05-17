// hook system
export default class Hooks {
  hooks:Record<string, any>
  constructor() {
    this.hooks = {
      // table-scroll1:[
      //     function(){},
      //     function(){}
      // ],
      // table-scroll2:[
      //     function(){},
      //     function(){}
      // ]
    }
  }

  /**
   * Add listener to plugin hooks system.
   * @param {string} hookName The hook name.
   * @param {Function} callback The listener function to add.
   */
  addHook(hookName:string, callback:any) {
    if (!this.hooks[hookName]) {
      this.hooks[hookName] = []
    }

    const hooks = this.hooks[hookName]

    // exclude repeat hook
    let isRepeat = false
    for (let i = 0; i < hooks.length; i++) {
      if (hooks[i] === callback) {
        isRepeat = true
        break
      }
    }

    if (isRepeat) {
      console.warn(`Repeat hook name:${hookName}`)
    } else {
      hooks.push(callback)
    }
  }

  /**
   * Trigger hook.
   * @param {string} hookName The hook name.
   * @param {Argument} args
   */
  triggerHook(hookName:string, ...args:any[]) {
    const hooks = this.hooks[hookName]

    if (hooks && hooks.length) {
      // 移除 argument 的使用
      // const args = Array.prototype.slice.call(arguments)

      hooks.forEach((hook:any) => {
        // exclude hookName param
        hook.apply(null, args)
      })
    }
    // else {
    //     console.warn(`Can't find hook name:${hookName}`);
    // }
  }
}
