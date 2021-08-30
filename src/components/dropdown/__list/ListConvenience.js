import { List } from './dropdown__list';

class ListConvenience extends List {
  getListValue = () => {
    const values = this._list.map((item) => item.getItemToString());
    return `${values.join(', ').slice(0, 20)}...`;
  };
}

export { ListConvenience };
