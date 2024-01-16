declare namespace _default {
    let name: string;
    namespace props {
        namespace colgroups {
            let type: ArrayConstructor;
            let required: boolean;
        }
        namespace enableColumnResize {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
    }
    namespace methods {
        function getValByUnit(item: any): any;
    }
    function render(): any;
}
export default _default;
