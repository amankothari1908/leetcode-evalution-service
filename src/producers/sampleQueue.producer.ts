import sampleQueue from "../queues/sample.queue";

export default async function (
  name: string,
  paylod: Record<string, unknown>,
  priority: number
) {
  await sampleQueue.add(name, paylod, { priority });
}
