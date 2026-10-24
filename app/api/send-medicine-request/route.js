import { sendRequest } from "../../../lib/send-request";
export const runtime = "nodejs";
export async function POST(request) {
  return sendRequest(request, "missing");
}
