import { defineConfig } from 'auth-astro'
import DebianSalsa from 'salsa'

export default defineConfig({
	secret: import.meta.env.AUTH_SECRET,
	trustHost: import.meta.env.AUTH_TRUST_HOST,
	providers: [
		DebianSalsa({
			clientId: import.meta.env.DEBIAN_SALSA_CLIENT_ID,
			clientSecret: import.meta.env.DEBIAN_SALSA_CLIENT_SECRET
		})
	],
})