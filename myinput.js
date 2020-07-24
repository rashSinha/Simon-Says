class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      message: "Welcome to Simon Says!"
    };
    this.boxClick = this.boxClick.bind(this);
    this.startClick = this.startClick.bind(this);
    this.restartClick = this.restartClick.bind(this);
  }

  boxClick = (color) => {
    this.setState(() => ({
      message: "Playing",
      bgColor: color
    }));
    usersSolution.push(color);
    let self = this;
    if(usersSolution.length==4){
      if(arraysMatch(usersSolution,answer)){
        self.setState(() => ({
          message: "Congrats!",
          bgColor: ""
        }));
        alert("Starting again");
        self.startClick();
      }
      else{
        self.setState(() => ({
          message: "Sorry, try again!",
          bgColor: ""
        }));
      }
      usersSolution = [];
    }
  };

  restartClick = () => {
    answer = [];
    usersSolution = [];
    this.setState(() => ({
      message: "Welcome to Simon Says!",
      bgColor: ""
    }));
  }

  startClick = () => {
    let colors = ["red", "blue", "green", "yellow"];
    shuffle(colors);
    answer = Array.from(colors);
    //Adding empty at the end
    colors.push("");
    let self = this;
    colors.forEach(function (color, index) {
      setTimeout(function () {
        self.setState({
          bgColor: color
        });
      }, 1000 * index + 1);
    });
  };

  render() {
    return (
      <div>
        <div id="message">{this.state.message}</div>
      <div className="parent-container">

        <div className="container">
          <div
            className="selected-option"
            style={{ backgroundColor: this.state.bgColor }}
          />
          <div className="flex-container">
            <button
              className="t-l"
              value="red"
              onClick={(e) => this.boxClick(e.target.value)}
            />
            <button
              className="t-r"
              value="blue"
              onClick={(e) => this.boxClick(e.target.value)}
            />
            <button
              className="b-l"
              value="green"
              onClick={(e) => this.boxClick(e.target.value)}
            />
            <button
              className="b-r"
              value="yellow"
              onClick={(e) => this.boxClick(e.target.value)}
            />
          </div>
        </div>
      </div>
        <div className="flex-buttons-container">
        <button className="btn-start" onClick={() => this.startClick()}>
          Start
        </button>
        <button className="btn-restart" onClick={() => this.restartClick()}>
          Restart
        </button>

        </div>
    </div>
    );
  }
}
ReactDOM.render(<MyInput />, document.getElementById("myinput"));

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function arraysMatch(arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};

var answer = [];
var usersSolution = [];
