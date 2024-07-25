import type { OIDCConfig } from '@auth/core/providers';
import { type GitLabProfile } from '@auth/core/providers/gitlab';

export default function DebianSalsa<P extends GitLabProfile> ({clientId, clientSecret}: {clientId?: string, clientSecret?: string}): OIDCConfig<P> {
    return {
        id: "debian-salsa",
        name: "Debian Salsa",
        type: "oidc",
        issuer: "https://salsa.debian.org",
        wellKnown: "https://salsa.debian.org/.well-known/openid-configuration",
        authorization: { parmas: { scope: "read_api read_user openid email profile" } },
        profile(profile) {
            return {
              id: profile.id.toString(),
              name: profile.name ?? profile.username,
              email: profile.email,
              image: profile.avatar_url,
            }
          },
        clientId,
        clientSecret
    }
}
