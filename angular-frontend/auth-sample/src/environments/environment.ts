// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
  auth: {
    authority: 'https://adfs-test.vgregion.se/adfs',
    clientId: 'CLIENT_ID_TEST',
    redirectUri: 'http://localhost:4200/auth-callback',
    postLogoutRedirectUri: 'http://localhost:4200/login',
    resource: 'RESOURCE_TEST',
    metadata: {
      issuer: 'https://adfs-test.vgregion.se/adfs',
      authorizationEndpoint: 'https://adfs-test.vgregion.se/adfs/oauth2/authorize'
    },
    signingKeys: [{
      kty: 'RSA',
      use: 'sig',
      alg: 'RS256',
      kid: 'jm4Zz_A_svxuNkJZJUTeyUuIduI',
      x5t: 'jm4Zz_A_svxuNkJZJUTeyUuIduI',
      n: 'ryH3Cr6X1fR2Y4ih-F9XH_sLmbVCuzNHUIv3INBsKhwuedHumP9x4PrTRYqdJdI2ulaRk9N2838CGhItL7pyKq7JvZyFWjE_9NIpMdasU8-8KYkUyBwo8ch4ursAoJzasmKDo5oXdKOEutp9qS_w1IWBTPUKFi6N1rLgGP9HSILylnivJrGBXFlK4ZqIb4QjTln_XpMHFjV7k6BDyA4vM9QGotNd9350RVN657hJaVSw9yfVfN8IUu6BIdhBrxbMdSJPXrBeBjFg6YTyIfEl8HBKDftolqj_suzVgQ83q0YbNsjses8m0puxObkG-8l562q8SxdeLK2nzkomyIfLmQ',
      e: 'AQAB',
      x5c: ['MIIC5jCCAc6gAwIBAgIQGwUcu8nFA5xK1JqSlVLP2DANBgkqhkiG9w0BAQsFADAvMS0wKwYDVQQDEyRBREZTIFNpZ25pbmcgLSBhZGZzLXRlc3QudmdyZWdpb24uc2UwHhcNMTcwNjE1MDc0OTE3WhcNMjcwNjEzMDc0OTE3WjAvMS0wKwYDVQQDEyRBREZTIFNpZ25pbmcgLSBhZGZzLXRlc3QudmdyZWdpb24uc2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCvIfcKvpfV9HZjiKH4X1cf+wuZtUK7M0dQi\/cg0GwqHC550e6Y\/3Hg+tNFip0l0ja6VpGT03bzfwIaEi0vunIqrsm9nIVaMT\/00ikx1qxTz7wpiRTIHCjxyHi6uwCgnNqyYoOjmhd0o4S62n2pL\/DUhYFM9QoWLo3WsuAY\/0dIgvKWeK8msYFcWUrhmohvhCNOWf9ekwcWNXuToEPIDi8z1Aai0133fnRFU3rnuElpVLD3J9V83whS7oEh2EGvFsx1Ik9esF4GMWDphPIh8SXwcEoN+2iWqP+y7NWBDzerRhs2yOx6zybSm7E5uQb7yXnrarxLF14srafOSibIh8uZAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAE0cdvYbPM2EUIqBIqbrLPrn9dWgKJRRIUWA4HO999i5pHuqhkFt5\/Nli7ElsfmfUGG0z7OIQssT9igJsU8+Th66e7ntSXYK+czBelV1T0VJ0k1BiTVRYWMNGpzl4KOSoU2k\/iQqjqntivGCZdWHt9txCeoEPmAvrvkf\/BQ1QrOtchXu0J3ms+cpmZFeYd0HWvuODCqi61bZni9C1y0BU3AFE7h7rrs+Se1kMx08H3bHBi\/ceLRaEcSvu4g4An\/PQ39EWUyZweORQckCzOIzHSZ1aVS6zaB71Z33Yz3phWXOn7BXtttvWf5xO6I6JTx45yduIJ4YUt6SXhZI\/OquPY8=']
    }]
  }
};
