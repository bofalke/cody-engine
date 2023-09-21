import {AnyRule} from "@cody-engine/cody/hooks/utils/rule-engine/configuration";
import {Command} from "@event-engine/messaging/command";
import {Event} from "@event-engine/messaging/event";
import {ProcessingFunctionWithDeps} from "@event-engine/infrastructure/commandHandling";
import {execRuleAsync} from "@cody-play/infrastructure/rule-engine/make-executable";
import {PlayEventRegistry, PlaySchemaDefinitions} from "@cody-play/state/types";
import Definitions from "@app/shared/types/definitions";

export const makeCommandHandler = (
  commandHandlerRules: AnyRule[],
  eventRegistry: PlayEventRegistry,
  schemaDefinitions: PlaySchemaDefinitions
): ProcessingFunctionWithDeps => {
  return async function* (state: any, command: Command, dependencies: Record<string, any>): AsyncGenerator<Event> {
    let ctx = {information: state, command: command.payload, meta: command.meta, ...dependencies, eventRegistry, schemaDefinitions};

    for (const rule of commandHandlerRules) {
      const [result, nextRule] = await execRuleAsync(rule, ctx);

      if(result.event) {
        yield result.event;
        delete result.event;
      }

      if(!nextRule) {
        return;
      }

      ctx = result;
    }
  }
}
