import { redirect } from "@sveltejs/kit";

export async function load() {
    throw redirect(303, "/s/admin/1")
}