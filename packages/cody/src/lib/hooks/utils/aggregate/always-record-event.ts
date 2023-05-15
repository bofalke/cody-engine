import {Node} from "@proophboard/cody-types";
import {AlwaysRule, ThenRecordEvent} from "../rule-engine/configuration";

export const alwaysRecordEvent = (event: Node): AlwaysRule => {
  return {
    rule: "always",
    then: {
      do: "record_event",
      event: event.getName(),
      mapping: "command"
    } as ThenRecordEvent
  }
}
