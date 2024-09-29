import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/core/providers/google";


const {handle: authInitHandle, signIn, signOut} = SvelteKitAuth({
	providers: [Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })],
	trustHost: true,
});

export const handle = authInitHandle;
