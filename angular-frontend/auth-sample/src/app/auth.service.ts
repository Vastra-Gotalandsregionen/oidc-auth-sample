import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  private manager: UserManager;

  constructor() {
    const settings = {
      authority: environment.auth.authority,
      client_id: environment.auth.clientId,
      redirect_uri: environment.auth.redirectUri,
      post_logout_redirect_uri: environment.auth.postLogoutRedirectUri,
      response_type: 'id_token token',
      scope: 'openid profile',
      loadUserInfo: false,
      /*
       The ADFS implementation of OpenID Connect does not follow specification and uses a resource
       property to specify the resource.
      */
      resource: environment.auth.resource,
      /*
       The ADFS implementation of OpenID Connect does not support CORS. This forces us to specify the
       metadata and signing keys explicitly instead of getting them from the discovery endpoint.
      */
      metadata: {
        issuer: environment.auth.metadata.issuer,
        authorization_endpoint: environment.auth.metadata.authorizationEndpoint
      },
      signingKeys: environment.auth.signingKeys
    };

    this.manager = new UserManager(settings);

    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  get isLoggedIn(): boolean {
    return this.user && !this.user.expired;
  }

  startAuthentication(destination: string): Promise<void> {
    localStorage.setItem('authSampleRoute', destination);
    return this.manager.signinRedirect();
  }

  async completeAuthentication(): Promise<string> {
    await this.manager.signinRedirectCallback()
      .then(user => {
        this.user = user;
      })
      .catch(error => {
        throw new Error('Invalid user.');
      });

    const destination = localStorage.getItem('authSampleRoute');
    localStorage.removeItem('authSampleRoute');
    return destination;
  }

}
