"use strict";
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
// REDUX
const ADD = "ADD";
const MINUS = "MINUS";
/*
    reducer - takes in state and action
    keeping an "action" allows you to keep history.
    
    Reducer delievers to
    
*/
function numberReducer(state, action) {
    // return new state
    // action = { type: "ADD" }
    if (action.type == ADD) {
        return {
            number: state.number + 1
        };
    }
    if (action.type == MINUS) {
        return {
            number: state.number - 1
        };
    }
    return state;
}
let store = redux_1.createStore(numberReducer);
class FizzBuzzDisplay extends react_1.Component {
    render() {
        if ((this.props.number) % 3 == 0) {
            return react_1.default.createElement("div", null, "\"Fizz\"");
        }
        else if ((this.props.number) % 5 == 0) {
            return react_1.default.createElement("div", null, "\"Buzz\"");
        }
        else {
            return react_1.default.createElement("div", null, this.props.number);
        }
    }
}
class FizzBuzz extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(ConnectedFizzBuzzDisplay, null),
            react_1.default.createElement("button", { onClick: this.props.minus }, "-"),
            react_1.default.createElement("button", { onClick: this.props.plus }, "+")));
    }
}
class BuzzFizzDisplay extends react_1.Component {
    render() {
        if ((this.props.number) % 3 == 0) {
            return react_1.default.createElement("div", null, "\"Buzz\"");
        }
        else if ((this.props.number) % 5 == 0) {
            return react_1.default.createElement("div", null, "\"Fizz\"");
        }
        else {
            return react_1.default.createElement("div", null, this.props.number);
        }
    }
}
class BuzzFizz extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(ConnectedBuzzFizzDisplay, null),
            react_1.default.createElement("button", { onClick: this.props.minus }, "-"),
            react_1.default.createElement("button", { onClick: this.props.plus }, "+")));
    }
}
function mapDispatchToFizzBuzzProps(dispatch, ownProp) {
    return {
        plus: () => dispatch({ type: ADD }),
        minus: () => dispatch({ type: MINUS })
    };
}
function mapStateToFizzBuzzDisplayProps(state, ownProp) {
    return {
        number: state.number
    };
}
let fizzBuzzFactory = react_redux_1.connect(() => { }, mapDispatchToFizzBuzzProps);
let ConnectedFizzBuzz = fizzBuzzFactory(FizzBuzz);
let fizzBuzzDisplayFactory = react_redux_1.connect(mapStateToFizzBuzzDisplayProps);
let ConnectedFizzBuzzDisplay = fizzBuzzDisplayFactory(FizzBuzzDisplay);
let ConnectedBuzzFizz = fizzBuzzFactory(BuzzFizz);
let ConnectedBuzzFizzDisplay = fizzBuzzDisplayFactory(FizzBuzzDisplay);
react_dom_1.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(ConnectedFizzBuzz, null),
    react_1.default.createElement(ConnectedBuzzFizz, null)), document.getElementById("root"));
//# sourceMappingURL=challenge3.js.map