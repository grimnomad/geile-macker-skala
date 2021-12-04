import { QueryKey } from 'react-query';

class ScalesQueryFactory {
  static get all(): [QueryKey] {
    return ['scales'];
  }

  static detail(id: string): QueryKey {
    return [...this.all, id];
  }
}

export { ScalesQueryFactory };
