<template>
    <div>
        <tpl
            :desc="desc"
            :anchor="anchor"
            :table-data="db.contextmenuHeaderOption.data"
            :columns="db.contextmenuHeaderOption.columns"
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
            default: "header 右键菜单配置",
        },
        desc: {
            type: String,
            default: "contextmenuHeaderOption",
        },
    },
    data() {
        return {
            db: db,
        };
    },
};
</script>
