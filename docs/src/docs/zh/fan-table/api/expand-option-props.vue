<template>
    <div>
        <tpl
            :desc="desc"
            :anchor="anchor"
            :table-data="db.expandOption.data"
            :columns="db.expandOption.columns"
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
            default: "行展开配置",
        },
        desc: {
            type: String,
            default: "expandOption",
        },
    },
    data() {
        return {
            db: db,
        };
    },
};
</script>
