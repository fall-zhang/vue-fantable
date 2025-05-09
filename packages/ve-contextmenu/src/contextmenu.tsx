import { clsName } from './util/index'
import { VeIcon } from '@P/ve-icon/ve-icon'
import { ICON_NAMES } from '@P/ve-icon/src/util/constant'
import { getMousePosition, getViewportOffset } from '@P/src/utils/dom'
import {
  INIT_PARENT_DEEP,
  CONTEXTMENU_NODE_TYPES,
} from './util/constant'
import { getRandomId } from '@P/src/utils/random'
import { debounce, cloneDeep } from '@P/src/utils/index.js'
import eventsOutside from '@P/src/directives/events-outside'
import { computed, defineComponent, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
export default defineComponent({
  name: 'VeContextmenu',
  directives: {
    'events-outside': eventsOutside,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    // eventTarget: contextmenu event will register on it
    eventTarget: {
      type: [String, HTMLElement],
      required: true,
    },
  },

  setup(props, { expose, emit }) {
    const internalOptions = ref<any[]>([])
    const panelOptions = ref<any[]>([])
    const eventTargetEl = ref()
    const rootContextmenuId = ref('')
    // 如果点击了则不关闭 panels
    const isChildrenPanelsClicked = ref(false)
    // 决定了子 panel 默认展示方向
    const isPanelRightDirection = ref(true)
    /*
    is panels remove
    防止hover后菜单被移除，仍然显示子集菜单的问题
    */
    const isPanelsEmptied = ref(true)
    // active menus ids
    const activeMenuIds = computed(() => {
      return panelOptions.value.map((x:any) => x.parentId)
    })

    watch(() => props.options, (val) => {
      if (Array.isArray(val) && val.length > 0) {
        /*
        如果配置项修改,则重新销毁并创建
        */
        removeOrEmptyPanels(true)
        rootContextmenuId.value = getRandomIdWithPrefix()
        createInternalOptions()
        createPanelOptions({ options: internalOptions.value })
        resetContextmenu()
        addRootContextmenuPanelToBody()
      }
    },
    {
      immediate: true,
    })
    watch(() => props.eventTarget, (val) => {
      if (val) {
        registerContextmenuEvent()
      }
    },    {      immediate: true    })

    onMounted(() => {
      addRootContextmenuPanelToBody()
    })

    onUnmounted(() => {
      removeContextmenuEvent()
      removeOrEmptyPanels(true)
    })

    // get random id
    function getRandomIdWithPrefix() {
      return clsName(getRandomId())
    }

    // has children
    function hasChildren(option) {
      return Array.isArray(option.children) && option.children.length
    }

    // get panel option by menu id
    function getPanelOptionByMenuId(options, menuId) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].id === menuId) {
          return options[i].children
        }

        if (options[i].children) {
          const panelOption = getPanelOptionByMenuId(
            options[i].children,
            menuId,
          )
          if (panelOption) return panelOption
        }
      }
    }

    // get parent contextmenu panel element
    function getParentContextmenuPanelEl(contextmenuPanelId) {
      let result

      const panelIndex = panelOptions.value.findIndex(
        (x) => x.parentId === contextmenuPanelId,
      )
      if (panelIndex > 0) {
        // preview panel's panelId
        const parentPanelId = panelOptions.value[panelIndex - 1].parentId
        result = document.querySelector(`#${parentPanelId}`)
      }
      return result
    }

    // create panel by hover
    function createPanelByHover({ event, menu }) {
      // 如果被移除则不创建
      if (isPanelsEmptied) {
        return false
      }

      // has already exists
      if (panelOptions.value.findIndex((x) => x.parentId === menu.id) > -1) {
        return false
      }

      // remove panels
      // 移除 panel 深度大于等于当前悬浮菜单的。从后往前删除
      const deletePanelDeeps = panelOptions.value
        .filter((x) => x.parentDeep >= menu.deep)
        .map((x) => x.parentDeep)
        .reverse()

      if (deletePanelDeeps.length) {
        for (let i = deletePanelDeeps.length - 1; i >= 0; i--) {
          const delIndex = panelOptions.value.findIndex(
            (x) => x.parentDeep === deletePanelDeeps[i],
          )
          if (delIndex > -1) {
            panelOptions.value.splice(delIndex, 1)
          }
        }
      }

      const panelOption = getPanelOptionByMenuId(
        internalOptions.value,
        menu.id,
      )

      if (panelOption) {
        createPanelOptions({
          options: panelOption,
          currentMenu: menu,
        })

        nextTick(() => {
          addContextmenuPanelToBody({
            contextmenuId: menu.id,
          })

          showContextmenuPanel({
            event,
            contextmenuId: menu.id,
          })
        })
      }
    }

    // create panels option
    function createPanelOptions({ options, currentMenu }) {
      if (Array.isArray(options)) {
        //
        const menus = options.map((option) => {
          return {
            hasChildren: hasChildren(option),
            ...option,
          }
        })

        panelOptions.value.push({
          parentId: currentMenu ? currentMenu.id : rootContextmenuId.value,
          parentDeep: currentMenu
            ? currentMenu.deep
            : INIT_PARENT_DEEP,
          menus,
        })
      }
    }

    // create internal options recursion
    function createInternalOptionsRecursion(options, deep = 0) {
      options.id = getRandomIdWithPrefix()
      options.deep = deep
      deep++
      if (Array.isArray(options.children)) {
        options.children.map((option) => {
          return createInternalOptionsRecursion(option, deep)
        })
      }

      return options
    }

    // create internal options
    function createInternalOptions() {
      internalOptions.value = cloneDeep(props.options).map((option) => {
        return createInternalOptionsRecursion(option)
      })
    }

    // show root contextmenu panel
    function showRootContextmenuPanel(event) {
      event.preventDefault()
      if (rootContextmenuId.value) {
        // refresh contextmenu
        resetContextmenu()
        showContextmenuPanel({
          event,
          contextmenuId: rootContextmenuId.value,
          isRootContextmenu: true,
        })
        isPanelsEmptied.value = false
      }
    }

    // show contextmenu panel
    function showContextmenuPanel({ event, contextmenuId, isRootContextmenu }:any) {
      const contextmenuPanelEl = document.querySelector(`#${contextmenuId}`)

      if (contextmenuPanelEl) {
        // remove first
        contextmenuPanelEl.innerHTML = ''

        contextmenuPanelEl.appendChild(this.$refs[contextmenuId])

        contextmenuPanelEl.style.position = 'absolute'
        contextmenuPanelEl.classList.add(clsName('popper'))

        const { width: currentPanelWidth, height: currentPanelHeight } =
          contextmenuPanelEl.getBoundingClientRect()
        if (isRootContextmenu) {
          const {
            left: clickLeft,
            top: clickTop,
            right: clickRight,
            bottom: clickBottom,
          } = getMousePosition(event)

          let panelX = 0
          let panelY = 0

          // 右方宽度够显示
          if (clickRight >= currentPanelWidth) {
            panelX = clickLeft
            isPanelRightDirection.value = true
          } else { // 右方宽度不够显示在鼠标点击左方
            panelX = clickLeft - currentPanelWidth
            isPanelRightDirection.value = false
          }

          // 下方高度够显示
          if (clickBottom >= currentPanelHeight) {
            panelY = clickTop
          } else { // 下方高度不够显示在鼠标点击上方
            panelY = clickTop - currentPanelHeight
          }

          contextmenuPanelEl.style.left = panelX + 'px'
          contextmenuPanelEl.style.top = panelY + 'px'
        } else {
          const parentContextmenuPanelEl =
            getParentContextmenuPanelEl(contextmenuId)

          if (parentContextmenuPanelEl) {
            const {
              left: parentPanelLeft,
              right: parentPanelRight,
            } = getViewportOffset(parentContextmenuPanelEl)

            const { top: clickTop, bottom: clickBottom } =
              getMousePosition(event)

            const { width: parentPanelWidth } =
              parentContextmenuPanelEl.getBoundingClientRect()

            let panelX = 0
            let panelY = 0

            // 如果默认展示在右方向
            if (isPanelRightDirection.value) {
              // 右方宽度够显示
              if (parentPanelRight >= currentPanelWidth) {
                panelX = parentPanelLeft + parentPanelWidth
              } else { // 右方宽度不够显示在鼠标点击左方
                panelX = parentPanelLeft - parentPanelWidth
              }
            } else { // 如果默认展示在左方向
              // 左方宽度够显示
              if (parentPanelLeft >= currentPanelWidth) {
                panelX = parentPanelLeft - parentPanelWidth
              } else { // 左方宽度不够显示在鼠标点击右方
                panelX = parentPanelLeft + parentPanelWidth
              }
            }

            // 下方高度够显示
            if (clickBottom >= currentPanelHeight) {
              panelY = clickTop
            } else { // 下方高度不够显示在鼠标点击上方
              panelY = clickTop - currentPanelHeight
            }

            contextmenuPanelEl.style.left = panelX + 'px'
            contextmenuPanelEl.style.top = panelY + 'px'
          }
        }
      }
    }
    // empty contextmenu panels
    function emptyContextmenuPanels() {
    // wait for children panel clicked by setTimeout
    // 如果点击的是非 root panel 不关闭
      setTimeout(() => {
        if (isChildrenPanelsClicked.value) {
          isChildrenPanelsClicked.value = false
        } else {
          removeOrEmptyPanels()
          isPanelsEmptied.value = true
        }
      })
    }

    // remove or empty panels
    function removeOrEmptyPanels(isRemove?:boolean) {
      panelOptions.value.forEach((panelOption) => {
        const contextmenuPanelEl = document.querySelector(
          `#${panelOption.parentId}`,
        )
        if (contextmenuPanelEl) {
          if (isRemove) {
            contextmenuPanelEl.remove()
          } else {
            contextmenuPanelEl.innerHTML = ''
          }
        }
      })
    }

    // reset contextmeny
    function resetContextmenu() {
      panelOptions.value = []
      createPanelOptions({ options: internalOptions.value })
    }

    // add context menu panel to body
    function addContextmenuPanelToBody({ contextmenuId }) {
      const contextmenuPanelEl = document.querySelector(`#${contextmenuId}`)

      if (contextmenuPanelEl) {
        return false
      } else {
        const containerEl = document.createElement('div')

        containerEl.setAttribute('id', contextmenuId)

        document.body.appendChild(containerEl)
      }
    }

    // add root contextmenu panel to body
    function addRootContextmenuPanelToBody() {
      if (rootContextmenuId.value) {
        addContextmenuPanelToBody({
          contextmenuId: rootContextmenuId.value,
        })
      }
    }

    // 注册菜单事件
    function registerContextmenuEvent() {
      const  eventTarget  = props.eventTarget

      if (typeof eventTarget === 'string' && eventTarget.length > 0) {
        eventTargetEl.value = document.querySelector(eventTarget)
      } else {
        eventTargetEl.value = eventTarget
      }

      if (eventTargetEl.value) {
        // contextmenu is on the current element
        eventTargetEl.value.addEventListener(
          'contextmenu',
          showRootContextmenuPanel,
        )
      }
    }

    // unregister contextmenu event
    function removeContextmenuEvent() {
      if (eventTargetEl.value) {
        eventTargetEl.value.removeEventListener(
          'contextmenu',
          showRootContextmenuPanel,
        )
      }
    }

    // hide contextmenu
    function hideContextmenu() {
      emptyContextmenuPanels()
    }

    const contextmenuProps = {
      class: ['ve-contextmenu'],
      style: { display: 'none' },
    }
    const debounceCreatePanelByHover = debounce(
      createPanelByHover,      300,
    )
    return (
      <div {...contextmenuProps}>
        {panelOptions.value.map((panelOption, panelIndex) => {
          const contextmenuPanelProps = {
            ref: panelOption.parentId,
            class: clsName('panel'),
            onClick: () => {
              if (panelIndex !== 0) {
                isChildrenPanelsClicked.value = true
              }
            },
            onContextmenu: (e: Event) => {
              e.preventDefault()
            },
          }
          return (
            <div {...contextmenuPanelProps} v-events-outside={{
              events: ['click'],
              callback: (e: Event) => {
                // only for root panel
                if (panelIndex === 0) {
                  emptyContextmenuPanels()
                }
              },
            }}>
              <ul class={clsName('list')}>
                {panelOption.menus.map((menu) => {
                  let contextmenuNodeProps

                  if (menu.type !== CONTEXTMENU_NODE_TYPES.SEPARATOR) {
                    const nodeActive = clsName('node-active')
                    const nodeDisable = clsName('node-disabled')
                    contextmenuNodeProps = {
                      class: {
                        [clsName('node')]: true,
                        [nodeActive]: activeMenuIds.value.includes(menu.id),
                        [nodeDisable]: menu.disabled
                      },
                      onMouseover: (event:MouseEvent) => {
                        // disable
                        if (!menu.disabled) {
                          debounceCreatePanelByHover({ event, menu })
                        }
                      },
                      onClick: () => {
                        if (!menu.disabled && !hasChildren(menu)) {
                          // EMIT_EVENTS.ON_NODE_CLICK,
                          emit('nodeClick', menu.type)
                          setTimeout(() => {
                            emptyContextmenuPanels()
                          }, 50)
                        }
                      },
                    }
                  } else { // separator
                    contextmenuNodeProps = {
                      class: {
                        [clsName('node-separator')]: true,
                      },
                    }
                  }

                  if (menu.type !== CONTEXTMENU_NODE_TYPES.SEPARATOR) {
                    return (
                      <li {...contextmenuNodeProps}>
                        <span class={clsName('node-label')}>
                          {menu.label}
                        </span>
                        {menu.hasChildren && (
                          <VeIcon
                            class={clsName('node-icon-postfix')}
                            name={ICON_NAMES.RIGHT_ARROW}
                          />
                        )}
                      </li>
                    )
                  } else {
                    return (
                      <li {...contextmenuNodeProps}></li>
                    )
                  }
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  },
})
