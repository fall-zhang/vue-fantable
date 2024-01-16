declare namespace _default {
    namespace pagination {
        let goto: string;
        let page: string;
        let itemsPerPage: string;
        function total(total: any): string;
        let prev5: string;
        let next5: string;
    }
    namespace table {
        let confirmFilter: string;
        let resetFilter: string;
        let cut: string;
        let copy: string;
        let insertRowAbove: string;
        let insertRowBelow: string;
        let removeRow: string;
        let emptyRow: string;
        let emptyColumn: string;
        let emptyCell: string;
        let leftFixedColumnTo: string;
        let cancelLeftFixedColumnTo: string;
        let rightFixedColumnTo: string;
        let cancelRightFixedColumnTo: string;
    }
}
export default _default;
