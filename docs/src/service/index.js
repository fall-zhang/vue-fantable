import httpRequest from '@/plugins/http-request'

// get versions
export function getVersions() {
  return new Promise((resolve, reject) => {
    const net = window.location

    const isDev = process.env.NODE_ENV === 'development'

    let url = `${net.protocol}//${net.hostname}:${net.port}`

    // 包含 /vue-fantable/ 目录
    // if (!isDev) {
    url += '/vue-fantable'
    // }
    url += `/versions.json?t=${new Date().getTime()}`

    httpRequest({
      url,
      method: 'get',
    })
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
