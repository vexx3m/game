const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "DarkPlay",
        productName: "Trial Xtreme",
        productVersion: "0.1",
        sdkVersion: "3.17.18",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/Trial Xtreme_Web_GameDistribution.loader.js",
        dataURL: "bin/Trial Xtreme_Web_GameDistribution.data.unityweb",
        frameworkURL: "bin/Trial Xtreme_Web_GameDistribution.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/Trial Xtreme_Web_GameDistribution.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "ThreeJs",
        iconTextureName: "game_logo_256x256.png",
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
        gameDistributionId: "04425491014a4c64a7578f725ba51415",
        gameDistributionPrefix: "mirragames_",

    }

})();