// This file was added by layer0 init.
// You should commit this file to source control.

import {Router} from '@layer0/core/router'

// const ONE_HOUR = 60 * 60
// const ONE_DAY = 24 * ONE_HOUR

export default new Router()

    // Here is an example where we cache api/* at the edge but prevent caching in the browser
    // .match('/api/:path*', ({ proxy, cache }) => {
    //   cache({
    //     edge: {
    //       maxAgeSeconds: ONE_DAY,
    //       staleWhileRevalidateSeconds: ONE_HOUR,
    //     },
    //     browser: {
    //       maxAgeSeconds: 0,
    //       serviceWorkerSeconds: ONE_DAY,
    //     },
    //   })
    //   proxy('origin')
    // })

    .noIndexPermalink()
    .static('docs/.vitepress/dist', ({cache}) => {
        cache({
            edge: {
                maxAgeSeconds: 60 * 60 * 60 * 365,
                forcePrivateCaching: true,
            },
            browser: {
                maxAgeSeconds: 0,
                serviceWorkerSeconds: 60 * 60 * 24,
            },
        })
    })

    // send any unmatched request to origin
    .fallback(({proxy}) => proxy('origin'))
