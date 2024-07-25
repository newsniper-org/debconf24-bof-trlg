import type { OIDCConfig } from '@auth/core/providers';
import { type GitLabProfile } from '@auth/core/providers/gitlab';

export default function DebianSalsa<P extends GitLabProfile> ({clientId, clientSecret}: {clientId?: string, clientSecret?: string}): OIDCConfig<P> {
    return {
        id: "debian-salsa",
        name: "Debian Salsa",
        type: "oidc",
        issuer: "https://salsa.debian.org",
        token: "https://salsa.debian.org/oauth/token",
        userinfo: "https://salsa.debian.org/oauth/userinfo",
        jwks_endpoint: "https://salsa.debian.org/oauth/discovery/keys",
        authorization: { parmas: { scope: "read_api read_user openid email profile" } },
        profile(profile) {
            return {
              name: profile.name,
              email: profile.email,
              image: profile.avatar_url,
            }
          },
        clientId,
        clientSecret
    }
}
