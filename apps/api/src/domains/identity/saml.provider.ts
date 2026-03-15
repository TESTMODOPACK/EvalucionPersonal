export interface SamlProvider {
  loginRedirect(): Promise<string>;
  consumeAssertion(payload: unknown): Promise<{ subject: string }>;
}

export class SamlProviderStub implements SamlProvider {
  async loginRedirect(): Promise<string> {
    return '/todo/saml/login';
  }

  async consumeAssertion(): Promise<{ subject: string }> {
    return { subject: 'saml-stub-subject' };
  }
}
