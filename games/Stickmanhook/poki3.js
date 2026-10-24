/* poki3.js - local stub. no network, no ads. */
(function () {
  'use strict';

  const resolved = () => Promise.resolve();
  const noop = () => {};

  window.PokiSDK = {
    init:                resolved,
    gameLoadingStart:    noop,
    gameLoadingFinished: noop,
    gameLoadingProgress: noop,
    gameplayStart:       noop,
    gameplayStop:        noop,
    commercialBreak:     resolved,
    rewardedBreak:       resolved,
    measure:             noop,
    setDebug:            noop,
    isAdBlocked:         () => false,
    getSessionId:        () => 'local',
    getLanguage:         () => 'en',
    getURLParam:         () => null,
    shareableURL:        resolved,
    shareableURLParams:  noop,
    happyTime:           noop,
  };

  /* globals some builds call directly */
  window.pokiGameLoadingStart    = window.PokiSDK.gameLoadingStart;
  window.pokiGameLoadingFinished = window.PokiSDK.gameLoadingFinished;
  window.pokiGameplayStart       = window.PokiSDK.gameplayStart;
  window.pokiGameplayStop        = window.PokiSDK.gameplayStop;
})();