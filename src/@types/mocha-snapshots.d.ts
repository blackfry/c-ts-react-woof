declare function mochaSnapshot(chai: any, utils: any): void;
export = mochaSnapshot;

declare global {
  namespace Chai {
    /*tslint:disable-next-line */
    interface Assertion {
      matchSnapshot(): Assertion;
    }
  }
}
