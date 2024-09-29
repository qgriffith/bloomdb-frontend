import { SvelteKitAuth } from "@auth/sveltekit"
import {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} from "$env/static/private"
import Google from "@auth/core/providers/google";


const {handle: authInitHandle, signIn, signOut} = SvelteKitAuth({
	providers: [Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })],
});

export const handle = authInitHandle;