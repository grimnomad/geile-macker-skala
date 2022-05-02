class RouteFactory {
  static get HOME(): string {
    return '/';
  }

  static get SIGN_UP(): string {
    return '/signup';
  }

  static get LOG_IN(): string {
    return '/login';
  }

  static get DASHBOARD(): string {
    return '/dashboard';
  }
}

export { RouteFactory };
