class ScalesResourceFactory {
  static get root(): string {
    return '/scales';
  }

  static byID(id: string): string {
    return `${this.root}/${id}`;
  }
}

export { ScalesResourceFactory };
