## Internationalization

:::anchor Switch Languages

You can implement multilingual support using the `VeLocal` component, using `VeLocal.use` method toggles the currently used language.

```javascript
import { VeLocale } from "vue-fantable";
// import language
import enUS from "vue-fantable/libs/locale/lang/en-US.js";

VeLocale.use(enUS);
```

:::anchor Override Default Configs

Use `Locale.update` method to modify the default configs.

```javascript
import { VeLocale } from "vue-fantable";

const lang = {
    pagination: {
        goto: "goto",
    },
};

VeLocale.update(lang);
```

:::anchor Using By CDN

:::tip
1、import languages from "//unpkg.com/vue-fantable/libs/locale/lang/"<br>
2、Use `FanTable.VeLocale.use` method to switch languages.<br>
3、Language configs are fixed format `FanTable.lang.[Language config name]`,[Language config name] does not contain the '-' symbol, as shown in the following example
:::

```
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/vue-fantable"></script>
<script src="//unpkg.com/vue-fantable/src/libs/locale/lang/en-US.js"></script>
<script src="//unpkg.com/vue-fantable/src/libs/locale/lang/zh-CN.js"></script>

<script>
  // Switch to English
  FanTable.VeLocale.use(FanTable.lang.enUS);

  /*
  Switch to Chinese
  FanTable.VeLocale.use(FanTable.lang.zhCN);
  */
</script>
```

:::anchor Languages Configs
The following languages are currently supported：
| language | file name |
| -------- | ------ |
| Simplified Chinese | zh-CN |
| Traditional Chinese (Traditional) | zh-TW |
| English | en-US |
| South Africa (Afrikaans) | af-ZA |
| South Africa (ZA) | zu-ZA |
| French(FR) | fr-FR |
| Brazilian Portuguese | pt-BR |
| Korean(KR) | ko-KR |
| Russian (RU) | ru-RU |

If you need to use other languages, you are welcome to contribute PR: just add a language configuration file in [here](https://github.com/huangshuwei/vue-fantable/tree/master/packages/src/locale/lang).
