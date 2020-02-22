/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppHome {}
  interface AppRanking {}
  interface AppRoot {}
  interface AppTabs {}
  interface ConstructorRanking {}
  interface DriverRanking {}
  interface NextRace {}
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRankingElement extends Components.AppRanking, HTMLStencilElement {}
  var HTMLAppRankingElement: {
    prototype: HTMLAppRankingElement;
    new (): HTMLAppRankingElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {}
  var HTMLAppTabsElement: {
    prototype: HTMLAppTabsElement;
    new (): HTMLAppTabsElement;
  };

  interface HTMLConstructorRankingElement extends Components.ConstructorRanking, HTMLStencilElement {}
  var HTMLConstructorRankingElement: {
    prototype: HTMLConstructorRankingElement;
    new (): HTMLConstructorRankingElement;
  };

  interface HTMLDriverRankingElement extends Components.DriverRanking, HTMLStencilElement {}
  var HTMLDriverRankingElement: {
    prototype: HTMLDriverRankingElement;
    new (): HTMLDriverRankingElement;
  };

  interface HTMLNextRaceElement extends Components.NextRace, HTMLStencilElement {}
  var HTMLNextRaceElement: {
    prototype: HTMLNextRaceElement;
    new (): HTMLNextRaceElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-ranking': HTMLAppRankingElement;
    'app-root': HTMLAppRootElement;
    'app-tabs': HTMLAppTabsElement;
    'constructor-ranking': HTMLConstructorRankingElement;
    'driver-ranking': HTMLDriverRankingElement;
    'next-race': HTMLNextRaceElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppRanking {}
  interface AppRoot {}
  interface AppTabs {}
  interface ConstructorRanking {}
  interface DriverRanking {}
  interface NextRace {}

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-ranking': AppRanking;
    'app-root': AppRoot;
    'app-tabs': AppTabs;
    'constructor-ranking': ConstructorRanking;
    'driver-ranking': DriverRanking;
    'next-race': NextRace;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-ranking': LocalJSX.AppRanking & JSXBase.HTMLAttributes<HTMLAppRankingElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-tabs': LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
      'constructor-ranking': LocalJSX.ConstructorRanking & JSXBase.HTMLAttributes<HTMLConstructorRankingElement>;
      'driver-ranking': LocalJSX.DriverRanking & JSXBase.HTMLAttributes<HTMLDriverRankingElement>;
      'next-race': LocalJSX.NextRace & JSXBase.HTMLAttributes<HTMLNextRaceElement>;
    }
  }
}


