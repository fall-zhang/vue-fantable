<template>
    <div>
        <tpl
            :desc="desc"
            :anchor="anchor"
            :table-data="db.clipboardOption.data"
            :columns="db.clipboardOption.columns"
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
            default: "剪贴板配置",
        },
        desc: {
            type: String,
            default: "clipboardOption",
        },
    },
    data() {
        return {
            db: db,
        };
    },
};
</script>
