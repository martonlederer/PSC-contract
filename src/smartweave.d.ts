import { SmartWeaveGlobal } from "smartweave/lib/smartweave-global"

declare function ContractAssert(assertion: boolean, errorMessage: string): void;

declare const ContractError: {
  new (message?: string): Error;
  (message?: string): Error;
  readonly prototype: Error;
};
declare const SmartWeave: Omit<SmartWeaveGlobal, "_activeTx">;
