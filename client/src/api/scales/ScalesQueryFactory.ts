class ScaleQueryFactory {
  static get all(): string[] {
    return ['scale'];
  }

  static detail(id: string): string[] {
    return [...this.all, id];
  }
}

export { ScaleQueryFactory };
