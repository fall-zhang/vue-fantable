declare namespace _default {
    let name: string;
    namespace props {
        namespace colgroups {
            let type: ArrayConstructor;
            let required: boolean;
        }
    }
    namespace computed {
        function trClass(): {
            [x: string]: boolean;
        };
    }
    function render(): any;
}
export default _default;
