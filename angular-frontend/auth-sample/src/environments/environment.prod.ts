export const environment = {
  production: true,
  apiUrl: 'https://RESOURCE_URL_PRODUCTION',
  auth: {
    authority: 'https://adfs.vgregion.se/adfs',
    clientId: 'CLIENT_ID_PRODUCTION',
    redirectUri: 'https://APP_URL/auth-callback',
    postLogoutRedirectUri: 'https://APP_URL/login',
    resource: 'RESOURCE_PRODUCTION',
    metadata: {
      issuer: 'https://adfs.vgregion.se/adfs',
      authorizationEndpoint: 'https://adfs.vgregion.se/adfs/oauth2/authorize'
    },
    signingKeys: [{
      kty: 'RSA',
      use: 'sig',
      alg: 'RS256',
      kid: 'kAhRrtlEumxetVxzqHf2VBps5VU',
      x5t: 'kAhRrtlEumxetVxzqHf2VBps5VU',
      n: 'yZJEMW8eEyRn4q8tjwIuCEq7VJWVhr8RCAzPsW522gee0RcovD9Bo1uu2bpH0e7cvQjN5y0VoUQOiEwDAR4wMqVBST53g7j_YOZ51ezCHJgqLCKuBn7fgq7LoP-2V2Cjglzk2_EGss_AKjZr9HZPgmBCi3r81Nf7QDV3zr_bzTkcnqQkEyPPs8VVwt1GRA6j9Na2c2SUIHpFJNgrUeRE91jUsG8TKfIOV5lKOII9204e8gJZi_tk40Hk1XMPs-t71XiIkTvXmSyPZtKNbI6DWoqL7JLJ3Ps4cC6Sq_YjqMdTo2rSKy9rp3ojbubrrs9_9Qf6lCx9MUlBNn7GPApToQ',
      e: 'AQAB',
      x5c: ['MIIC3DCCAcSgAwIBAgIQYUIVClWtSL1BNYPsOz+f9DANBgkqhkiG9w0BAQsFADAqMSgwJgYDVQQDEx9BREZTIFNpZ25pbmcgLSBhZGZzLnZncmVnaW9uLnNlMB4XDTE1MDEyNjA5Mzk1MVoXDTE5MDEyNTA5Mzk1MVowKjEoMCYGA1UEAxMfQURGUyBTaWduaW5nIC0gYWRmcy52Z3JlZ2lvbi5zZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMmSRDFvHhMkZ+KvLY8CLghKu1SVlYa\/EQgMz7FudtoHntEXKLw\/QaNbrtm6R9Hu3L0IzectFaFEDohMAwEeMDKlQUk+d4O4\/2DmedXswhyYKiwirgZ+34Kuy6D\/tldgo4Jc5NvxBrLPwCo2a\/R2T4JgQot6\/NTX+0A1d86\/2805HJ6kJBMjz7PFVcLdRkQOo\/TWtnNklCB6RSTYK1HkRPdY1LBvEynyDleZSjiCPdtOHvICWYv7ZONB5NVzD7Pre9V4iJE715ksj2bSjWyOg1qKi+ySydz7OHAukqv2I6jHU6Nq0isva6d6I27m667Pf\/UH+pQsfTFJQTZ+xjwKU6ECAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAg9d6mkzB+ckBnMP5AWQoLqBnvicFyPwTYrSZU732s+Fq0hcQzZCfBix3v4rc2rcipr6lkZZelIXuK7arHq3AcPIeaXN1xkjNwWIFEtHxTUrDa73TO4lIC7DKZBwn4HkUPFDQkzx3NAJQ2Vqqhcl137phbOXzrQqHyFHOFPMNEKxE37jRN3LxXIBPfCxbeOUGDfX9kHwpZtz3eEvyOnD3hgJzD\/cpTjK9+IjHXPHvlP74ofRUZYwGdRT\/NhgZ5xa\/sATBJP0BuLXxEMU75dbZXMq4fJ9Urkb5kfirRX5WEphmlD57io04Z6RguJXp93iJ7FqguZo+G8yaK5N4X3N2eA==']
    }]
  }
};
