// flow-typed signature: 4fdfa0e8dd0099eab7c89f191a4713f1
// flow-typed version: <<STUB>>/bowser_v1.9.3/flow_v0.74.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'bowser'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'bowser' {
  declare export type BowserPlatform = {
    ipad: boolean,
    ipod: boolean,
    iphone: boolean,
    /** If a tablet device is detected, the flag tablet is set instead of mobile. */
    tablet: boolean,
    /** All detected mobile OSes are additionally flagged mobile, unless it's a tablet */
    mobile: boolean,
  }

  declare export type BowserOS = {
    mac: boolean,
    /**other than Windows Phone */
    windows: boolean,
    windowsphone: boolean,
    /**other than android, chromeos, webos, tizen, and sailfish */
    linux: boolean,
    chromeos: boolean,
    android: boolean,
    /** also sets one of iphone/ipad/ipod */
    ios: boolean,
    blackberry: boolean,
    firefoxos: boolean,
    /** may also set touchpad */
    webos: boolean,
    bada: boolean,
    tizen: boolean,
    sailfish: boolean,
  }

  declare export type BowserVersions = {
    chrome: boolean,
    chromium: boolean,
    firefox: boolean,
    msie: boolean,
    msedge: boolean,
    safari: boolean,
    android: boolean,
    ios: boolean,
    opera: boolean,
    samsungBrowser: boolean,
    phantom: boolean,
    blackberry: boolean,
    webos: boolean,
    silk: boolean,
    bada: boolean,
    tizen: boolean,
    seamonkey: boolean,
    sailfish: boolean,
    ucbrowser: boolean,
    qupzilla: boolean,
    vivaldi: boolean,
    sleipnir: boolean,
    kMeleon: boolean,
  }

  declare export type BowserEngines = {
    /** IE <= 11 */
    msie: boolean,
    /**Chrome 0-27, Android <4.4, iOs, BB, etc. */
    webkit: boolean,
    /**Chrome >=28, Android >=4.4, Opera, etc. */
    blink: boolean,
    /**Firefox, etc. */
    gecko: boolean,
    /** IE > 11 */
    msedge: boolean,
  }

  declare export type BowserGrade = {
    /** Grade A browser */
    a: boolean,
    /** Grade C browser */
    c: boolean,
    /** Grade X browser */
    x: boolean,
    /** A human readable name for this browser. E.g. 'Chrome', '' */
    name: string,
    /** Version number for the browser. E.g. '32.0' */
    version: string | number,
    /** Name for this operating system. E.g. 'macOS' */
    osname: string,
    /** Version number for this operating system. E.g. '10.12.6' */
    osversion: string | number,
  }

  declare export type BowserDetection = BowserGrade &
    BowserEngines &
    BowserVersions &
    BowserOS &
    BowserPlatform

  declare export type BowserMinVersions = {
    // { msie: "11", "firefox": "4" }
    [index: string]: string,
  }

  declare type Bowser = BowserDetection & {
    test(browserList: Array<string>): boolean,
  }

  declare type BowserType = Bowser & {
    _detect: (ua: string) => BowserType,
    detect: (ua: string) => BowserType,
    compareVersions: (versions: Array<string>) => number,
    check: (
      minVersions: BowserMinVersions,
      strictMode?: boolean | string,
      ua?: string,
    ) => boolean,
    isUnsupportedBrowser: (
      minVersions: BowserMinVersions,
      strictMode?: boolean | string,
      ua?: string,
    ) => boolean,
  }

  declare export default BowserType
}
