import glob from 'fast-glob'
import { fileURLToPath } from 'node:url'
import { resolve as pathResolve, basename } from 'node:path'
import footerLocale from './locale/zh.json'
const __dirname = fileURLToPath(new URL('.', import.meta.url))
const docRoot = pathResolve(__dirname, '../')
let compPaths = []
export function MarkdownTransform() {
  return {
    name: 'fan-table-md-transform',

    enforce: 'pre',

    async buildStart() {
      const pattern = `{zh,en}/component`

      compPaths = await glob(pattern, {
        cwd: docRoot,
        absolute: true,
        onlyDirectories: true,
      })
    },

    async transform(code, id) {
      if (!id.endsWith('.md')) return

      const componentId = basename(id, '.md')
      const append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('../../examples/${componentId}/*.vue')`,
        ],
      }

      code = transformVpScriptSetup(code, append)

      if (compPaths.some((compPath) => id.startsWith(compPath))) {
        code = transformComponentMarkdown(id, componentId, code, append)
      }

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      )
    },
  }
}

const combineScriptSetup = (codes) => `
<script setup>
${codes.join('\n')}
</script>
`
const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/
const transformVpScriptSetup = (code, append) => {
  const matches = code.match(vpScriptSetupRE)
  if (matches) code = code.replace(matches[0], '')
  const scriptSetup = matches?.[3] ?? ''
  if (scriptSetup) append.scriptSetups.push(scriptSetup)
  return code
}
const REPO_PATH = 'fall-zhang/fan-tbale'
const REPO_BRANCH = 'root'
const docsDirName = 'docs'

const GITHUB_BLOB_URL = `https://github.com/${REPO_PATH}/blob/${REPO_BRANCH}`
const GITHUB_TREE_URL = `https://github.com/${REPO_PATH}/tree/${REPO_BRANCH}`
const transformComponentMarkdown = (
  id,
  componentId,
  code,
  append
) => {
  const lang = 'zh'
  const docUrl = `${GITHUB_BLOB_URL}/${docsDirName}/en-US/component/${componentId}.md`
  const componentUrl = `${GITHUB_TREE_URL}/packages/components/${componentId}`

  const links = [[footerLocale[lang].docs, docUrl]]
  links.unshift([footerLocale[lang].component, componentUrl])
  const linksText = links
    .filter((i) => i)
    .map(([text, link]) => `[${text}](${link})`)
    .join(' • ')

  const sourceSection = `
## ${footerLocale[lang].source}

${linksText}`

  append.footers.push(sourceSection)

  return code
}

const combineMarkdown = (
  code,
  headers,
  footers
) => {
  const frontmatterEnds = code.indexOf('---\n\n')
  const firstHeader = code.search(/\n#{1,6}\s.+/)
  const sliceIndex =
    firstHeader < 0
      ? frontmatterEnds < 0
        ? 0
        : frontmatterEnds + 4
      : firstHeader

  if (headers.length > 0) { code = code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex) }
  code += footers.join('\n')

  return `${code}\n`
}