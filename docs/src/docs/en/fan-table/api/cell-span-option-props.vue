<template>
    <div>
        <tpl
            :desc="desc"
            :anchor="anchor"
            :table-data="db.cellSpanOption.data"
            :columns="db.cellSpanOption.columns"
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
            default: "Cell merge option",
        },
        desc: {
            type: String,
            default: "cellSpanOption",
        },
    },
    data() {
        return {
            db: db,
        };
    },
};
</script>
