/* eslint-comments/ no-unlimited-disable */
import { readdir, unlink } from 'node:fs'
import { extname, join } from 'node:path'
import SVGFixer from 'oslllo-svg-fixer'

const iconsFolder = './src/shared/assets/icons'
const destination = './src/shared/assets/icons/formated'

SVGFixer(iconsFolder, destination, {
  showProgressBar: true,
})
  .fix()
  .then(() => {
    deleteSVGFiles(iconsFolder)
  })

function deleteSVGFiles(directoryPath) {
  readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Ошибка чтения директории: ${err}`)
      return
    }

    files.forEach(file => {
      const filePath = join(directoryPath, file)
      if (extname(file) === '.svg') {
        unlink(filePath, () => {})
      }
    })
  })
}
