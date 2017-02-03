class FizzBuzzDisplay extends React.Component {
    render() {
        if ((this.props.number) % 3 == 0) {
            return React.createElement("div", null, "\"Fizz\"");
        }
        else if ((this.props.number) % 5 == 0) {
            return React.createElement("div", null, "\"Buzz\"");
        }
        else {
            return React.createElement("div", null, this.props.number);
        }
    }
}
class FizzBuzz extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 1 };
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
    }
    minus() {
        this.setState(prevState => ({ number: prevState.number - 1 }));
    }
    plus() {
        this.setState(prevState => ({ number: prevState.number + 1 }));
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement(FizzBuzzDisplay, {number: this.state.number}), 
            React.createElement("button", {onClick: this.minus}, "-"), 
            React.createElement("button", {onClick: this.plus}, "+")));
    }
}
ReactDOM.render(React.createElement(FizzBuzz, null), document.getElementById("root"));
//# sourceMappingURL=challenge3.js.map