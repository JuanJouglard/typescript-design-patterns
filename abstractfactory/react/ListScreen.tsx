import { ListFactory } from "./ListFactory";

export class ListScreen extends React.Component {
    
    render() {
	return (
	    <FlatList data={listOfPeople} renderItem={this.renderItem}>
	    </FlatList>
	);
    }

    renderItem({item}) {
	return this.props.itemsFactory.createListItem(item);
    }
}

ListScreen.propTypes = {
    itemsFactory: ListFactory;
};
