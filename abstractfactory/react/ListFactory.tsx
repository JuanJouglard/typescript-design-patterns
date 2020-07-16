import {ListModel} from "./ListModel";

export interface ListFactory {
    createListItem(data: ListModel);
}
