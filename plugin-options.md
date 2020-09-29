<!-- THIS IS AN AUTO GENERATED FILE. -->

## Plugin Options

| Option              | Type    | Description                                                                             | Default | Required |
| ------------------- | ------- | --------------------------------------------------------------------------------------- | ------- | -------- |
| trackingId          | string  | The property ID; the tracking code won't be generated without it                        |         | Yes      |
| head                | boolean | Defines where to place the tracking script - `true` in the head and `false` in the body | false   |          |
| anonymize           | boolean |                                                                                         | false   |          |
| respectDNT          | boolean |                                                                                         | false   |          |
| exclude             | array   | Avoids sending pageview hits from custom paths                                          |         |          |
| pageTransitionDelay | number  | Delays sending pageview hits on route update (in milliseconds)                          | 0       |          |
| optimizeId          | string  | Enables Google Optimize using your container Id                                         |         |          |
| experimentId        | string  | Enables Google Optimize Experiment ID                                                   |         |          |
| variationId         | string  | Set Variation ID. 0 for original 1,2,3....                                              |         |          |
| defer               | boolean | Defers execution of google analytics script after page load                             |         |          |
| sampleRate          | number  |                                                                                         |         |          |
| siteSpeedSampleRate | number  |                                                                                         |         |          |
| cookieDomain        | string  |                                                                                         |         |          |
