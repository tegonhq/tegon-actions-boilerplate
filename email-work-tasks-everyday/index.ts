import { ActionEventPayload, handler } from "@tegonhq/sdk";

async function run(eventPayload: ActionEventPayload) {
  return { event: eventPayload.type };
}

export default handler("slack-common-workflows", run);
