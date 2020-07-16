import { ListFactory } from "./ListFactory";
import { ListModel } from "./ListModel";

export class DetailListFactory implements ListFactory {
  createListItem(data: ListModel) {
    return (
      <div>
        <span>
          {data.firstName}, {data.lastName}
        </span>
        <span>{data.mail}</span>
        <a>{data.twitter}</a>
        <span>{data.age}</span>
        <span>{data.address}</span>
      </div>
    );
  }
}
