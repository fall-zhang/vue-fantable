declare namespace _default {
    let name: string;
    namespace props {
        namespace pageCount {
            let type: NumberConstructor;
            let required: boolean;
        }
        namespace pageIndex {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace pagingCount {
            let type_2: NumberConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
    }
    namespace computed {
        function numOffset(): number;
        function showJumpPrev(): boolean;
        function showJumpNext(): boolean;
        function pagingCounts(): number[];
    }
    namespace methods {
        function jumpPage(pageIndex: any): void;
    }
    function render(): any;
}
export default _default;
