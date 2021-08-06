// cache data
const CACHE_NAME = 'version-1'
const urlsToCache = ['index.htm', 'offline.html' ]

const self = this;

// install SW
self.addEventListener('install', (eve) =>{
    eve.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log('cache opened')
            return cache.addAll(urlsToCache);
        })
    )
})

// listen for req
self.addEventListener('fetch', (eve) =>{
    eve.respondWith(
        caches.match(eve.request)
        .then(()=>{
            return fetch(eve.request)
            // if NO INTERNET connection
                .catch(()=> caches.match('offline.html'))
        })
    )
})

// activate the SW
self.addEventListener('activate', (eve) =>{
    // erasing the perv cache
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME)

    eve.waitUntil(
        caches.keys()
            .then(cacheNames => Promise.all(
                cacheNames.map((cacheName) =>{
                    if(!cacheWhiteList.includes(cacheName))
                        return caches.delete(cacheName)
                }) 
            ))
    )

})
