export type AvailableComponent = 'ArtPlayer' | 'BiliBili' | 'VidStack' | 'XiGua'

/**
 * Options for @vuepress/plugin-media
 */
export interface MediaPluginOptions {
  components?: AvailableComponent[]
}
