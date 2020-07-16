import { ListFactory } from "./ListFactory";
import { ListModel } from "./ListModel";

export class SimpleListFactory implements ListFactory {
  createListItem(data: ListModel) {
    return (
      <div>
        <span>
          {data.firstName}, {data.lastName}
        </span>
        <span>{data.mail}</span>
      </div>
    );
  }
}
