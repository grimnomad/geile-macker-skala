class TitleFactory {
  private static title = 'Geile Macker Skala';

  static get TITLE(): string {
    return this.title;
  }

  static createTitle(input: string): string {
    return `${this.title} | ${input}`;
  }
}

export { TitleFactory };
