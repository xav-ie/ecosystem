import { rollupBundle } from '../../../scripts/rollup.js'

export default [
  ...rollupBundle('node/index'),
  ...rollupBundle(
    {
      base: 'client',
      files: [
        'components/ArtPlayer',
        'components/BiliBili',
        'components/VidStack',
      ],
    },
    {
      external: [
        'artplayer',
        'dashjs',
        'hls.js/dist/hls.min.js',
        'mpegts.js/dist/mpegts.js',
        'vidstack/global/player',
      ],
    },
  ),
]
