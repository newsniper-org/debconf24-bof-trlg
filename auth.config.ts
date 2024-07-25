import { defineConfig } from 'auth-astro'
import DebianSalsa from 'salsa'

export default defineConfig({
	secret: import.meta.env.NEXT_AUTH_SECRET,
	trustHost: import.meta.env.NEXT_AUTH_TRUST_HOST,
	providers: [
		DebianSalsa({
			clientId: import.meta.env.NEXT_DEBIAN_SALSA_CLIENT_ID,
			clientSecret: import.meta.env.NEXT_DEBIAN_SALSA_CLIENT_SECRET
		})
	],
})