
(function() {
    // remember js is run-to-completion

    // 1-2s
    const similatedLoad = Math.ceil(Math.random() * 2000)

    const startTime = Date.now()

    let currTime = startTime


    while (currTime < (startTime + similatedLoad)) {
        currTime = Date.now()
    }

    console.log('Loaded')

})();