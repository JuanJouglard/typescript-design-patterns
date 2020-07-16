import { ListScreen } from "./ListScreen";
import { SimpleListFactory } from "./SimpleListFactory";
import { DetailListFactory } from "./DetailListFactory";

export class HomeScreen extends React.Component {
  showSimple: TypeOfList;
  render() {
    switch (this.showSimple) {
      case TypeOfList.Simple:
        return <ListScreen itemsFactory={new SimpleListFactory()}></ListScreen>;
        break;
      case TypeOfList.Detail:
        return <ListScreen itemsFactory={new DetailListFactory()}></ListScreen>;
        break;
      default:
        break;
    }
  }
}

enum TypeOfList {
  Simple = 1,
  Detail = 2,
}
