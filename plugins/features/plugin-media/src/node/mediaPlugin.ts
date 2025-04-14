import type { Plugin } from 'vuepress/core'
import type { MediaPluginOptions } from './options.js'
import { prepareClientConfigFile } from './prepareClientConfigFile.js'
import { PLUGIN_NAME } from './utils.js'

export const mediaPlugin = (options: MediaPluginOptions = {}): Plugin => ({
  name: PLUGIN_NAME,

  clientConfigFile: (app) => prepareClientConfigFile(app, options),
})
