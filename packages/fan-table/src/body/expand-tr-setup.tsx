import { clsName } from '../util/index'
import { COMPS_NAME } from '../util/constant'
import { computed, defineComponent, h } from 'vue'
// 比 expand 少了个 render 中的 h

export default defineComponent({
  name: COMPS_NAME.FAN_TABLE_EXPAND_TR,
  props: {
    tableViewportWidth: {
      type: Number,
      default: 0,
    },
    // expand column
    expandColumn: {
      type: Object,
      default: function () {
        return null
      },
    },
    colgroups: {
      type: Array,
      required: true,
    },
    // expand row option
    expandOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // expanded row keys
    expandedRowkeys: {
      type: Array,
      default: function () {
        return []
      },
    },
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    rowKeyFieldName: {
      type: String,
      default: null,
    },
  },

  setup(props) {
    // computed start
    const columnCount = computed(() => {
      return props.colgroups.length
    },)
    // current row key
    const currentRowKey = computed(() => {
      return props.rowData[props.rowKeyFieldName]
    },)
    // is row expanded
    const isRowExpanded = computed(() => {
      let result = false

      // defalut expand all rows
      if (props.expandOption.defaultExpandAllRows) {
        result = true
      } else if (props.expandedRowkeys.includes(currentRowKey.value)) {
        // defaultExpandedRowKeys includes currentRowKey
        result = true
      }

      return result
    },)
    // expand row class
    const expanRowClass = computed(() => {
      const result = {
        [clsName('expand-tr')]: true,
      }
      return result
    },)

    // has left fixed column
    const hasLeftFixedColumn = computed(() => {
      return props.colgroups.some((x:any) => x.fixed === 'left')
    })

    // expand td content style
    const expandTdContentStyle = computed(() => {
      const result:Record<'width', string> = {
        width: '0'
      }
      if (hasLeftFixedColumn.value) {
        // table width
        if (props.tableViewportWidth) {
          result.width = props.tableViewportWidth + 'px'
        }
      }

      return result
    },)
    // get expande row content
    function getExpandRowContent() {
      const result = props.expandOption.render && props.expandOption.render({
        row: props.rowData,
        column: props.expandColumn,
        rowIndex: props.rowIndex,
      }, h)

      return result
    }
    let result = null

    if (isRowExpanded.value) {
      const content = getExpandRowContent()
      result = (
        <tr class={expanRowClass.value}>
          <td class={clsName('expand-td')} colSpan={columnCount.value}>
            <div
              class={clsName('expand-td-content')}
              style={expandTdContentStyle.value}
            >
              {content}
            </div>
          </td>
        </tr>
      )
    }
    return result
  },
}
)