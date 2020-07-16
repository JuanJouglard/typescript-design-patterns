import { Strategy } from "./strategy.interface";
export class ImageScreen {
  img: string;
  render() {
    return (
      <div>
        <button onClick="handeImage">Handle image</button>
      </div>
    );
  }

  handeImage = () => {
    this.props.strategy.handleImage(this.img);
  };
}

ImageScreen.propTypes = {
  strategy: Strategy,
};
