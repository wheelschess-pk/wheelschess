
export class UnauthorizedError extends Error {
  constructor() {
    super("Login required.");
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super("Admin access required.");
    this.name = "ForbiddenError";
  }
}

/**
 * Placeholder until a real authentication provider is configured.
 * Never treat request data or a client-supplied role as proof of admin access.
 */
export async function requireAdmin(): Promise<never> {
  throw new UnauthorizedError();
}
