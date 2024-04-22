import React, { Component } from "react";
// import ErrorHandle from "./Components/ErrorHandle";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught by error boundary :", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-[20rem] bg-[#0f0f1a] text-white text-xl px-5">
          Heyy!! something went wrong with your code{" "}
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
