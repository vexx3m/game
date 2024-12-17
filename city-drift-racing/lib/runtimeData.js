const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "MirraGames",
        productName: "City Drift Racing",
        productVersion: "1.0.0.0",
        sdkVersion: "3.17.18",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/City-Drift-Racing_Web_GameDistribution.loader.js",
        dataURL: "bin/City-Drift-Racing_Web_GameDistribution.data.unityweb",
        frameworkURL: "bin/City-Drift-Racing_Web_GameDistribution.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/City-Drift-Racing_Web_GameDistribution.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "ThreeJs",
        iconTextureName: "city_drift_racing_icon_512x512.jpg",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "gameDistributionWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "e87e80c099cb47a399d8c2ec4f0ca196",
        gameDistributionPrefix: "mirragames_",

    }

})();