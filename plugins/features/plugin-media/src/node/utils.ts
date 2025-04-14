import { Logger, ensureEndingSlash, isModuleAvailable } from '@vuepress/helper'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const PLUGIN_NAME = 'vuepress-plugin-components'

export const logger = new Logger(PLUGIN_NAME)

export const CLIENT_FOLDER = ensureEndingSlash(
  path.resolve(__dirname, '../client'),
)

export const COMPONENT_PKG_MAP: Record<string, string[]> = {
  ArtPlayer: ['artplayer'],
  VidStack: ['vidstack'],
}

export const isInstalled = (pkg: string): boolean =>
  isModuleAvailable(pkg, import.meta)
