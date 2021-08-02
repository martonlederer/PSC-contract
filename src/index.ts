import { StateInterface } from "./faces";

export async function handle(state: StateInterface) {
  throw new ContractError("test")
}