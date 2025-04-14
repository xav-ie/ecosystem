import { getModulePath } from '@vuepress/helper'
import type { App } from 'vuepress'
import { colors } from 'vuepress/utils'
import type { MediaPluginOptions } from './options.js'
import { CLIENT_FOLDER, isInstalled, logger } from './utils.js'

export const prepareClientConfigFile = (
  app: App,
  options: MediaPluginOptions,
): Promise<string> => {
  const imports: string[] = []
  let enhance = ''

  if (options.artplayer) {
    if (isInstalled('artplayer')) {
      imports.push(
        `import { ArtPlayer } from "${CLIENT_FOLDER}components/ArtPlayer.js";`,
      )
      enhance += `\
if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
`
    } else {
      logger.warn(
        `${colors.cyan('artplayer')} is not installed, please install it first.`,
      )
    }
  }

  if (options.bilibili) {
    imports.push(
      `import { BiliBili } from "${CLIENT_FOLDER}components/BiliBili.js";`,
    )
    enhance += `\
if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
`
  }

  if (options.vidstack) {
    if (isInstalled('vidstack')) {
      imports.push(
        `import { VidStack } from "${CLIENT_FOLDER}components/VidStack.js";`,
      )
      enhance += `\
if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
`
    } else {
      logger.warn(
        `${colors.cyan('vidstack')} is not installed, please install it first.`,
      )
    }
  }

  return app.writeTemp(
    `components/config.js`,
    `\
import { hasGlobalComponent } from "${getModulePath(
      '@vuepress/helper/client',
      import.meta,
    )}";
${imports.join('\n')}

import "${getModulePath('@vuepress/helper/sr-only.css', import.meta)}";

export default {
  enhance: ({ app }) => {
${enhance
  .split('\n')
  .map((item) => `    ${item}`)
  .join('\n')}
  },
};
`,
  )
}
