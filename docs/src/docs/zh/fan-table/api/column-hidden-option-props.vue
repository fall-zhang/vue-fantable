<template>
    <div>
        <tpl
            :desc="desc"
            :anchor="anchor"
            :table-data="db.columnHiddenOption.data"
            :columns="db.columnHiddenOption.columns"
        />
    </div>
</template>
<script>
import tpl from "@/comp/api-tpl.vue";
import { db } from "./db";
export default {
    components: { tpl },
    props: {
        anchor: {
            type: String,
            default: "列隐藏配置",
        },
        desc: {
            type: String,
            default: "columnHiddenOption",
        },
    },
    data() {
        return {
            db: db,
        };
    },
};
</script>
