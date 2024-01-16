declare namespace _default {
    let name: string;
    namespace props {
        namespace parentRendered {
            let type: BooleanConstructor;
            let required: boolean;
        }
        namespace tableContainerEl {
            let type_1: any;
            export { type_1 as type };
            let _default: any;
            export { _default as default };
        }
        namespace hooks {
            let type_2: ObjectConstructor;
            export { type_2 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace colgroups {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace isColumnResizerHover {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        namespace isColumnResizing {
            let type_5: BooleanConstructor;
            export { type_5 as type };
            let required_4: boolean;
            export { required_4 as required };
        }
        namespace setIsColumnResizerHover {
            let type_6: FunctionConstructor;
            export { type_6 as type };
            let required_5: boolean;
            export { required_5 as required };
        }
        namespace setIsColumnResizing {
            let type_7: FunctionConstructor;
            export { type_7 as type };
            let required_6: boolean;
            export { required_6 as required };
        }
        namespace setColumnWidth {
            let type_8: FunctionConstructor;
            export { type_8 as type };
            let required_7: boolean;
            export { required_7 as required };
        }
        namespace columnWidthResizeOption {
            let type_9: ObjectConstructor;
            export { type_9 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
    }
    function data(): {
        columnResizerStartX: number;
        currentResizingColumn: any;
        columnResizerHandlerWidth: number;
        columnResizerRect: {
            top: number;
            left: number;
            height: number;
        };
    };
    namespace computed {
        function columnMinWidth(): number;
    }
    namespace watch {
        export namespace parentRendered_1 {
            function handler(val: any): void;
            let immediate: boolean;
        }
        export { parentRendered_1 as parentRendered };
    }
    namespace methods {
        function initColumnResizerPosition({ event, column }: {
            event: any;
            column: any;
        }): boolean;
        function setColumnResizerPositionByDrag(event: any): void;
        function columnResizerHandlerMousedown({ event }: {
            event: any;
        }): void;
        function columnResizerMouseup(event: any): boolean;
        function clearColumnResizerStatus(): void;
    }
    function render(): any;
}
export default _default;
