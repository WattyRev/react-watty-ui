import ReactDOM from "react-dom";

/**
 * Body portal creates a ReactDOM portal to send the provided content to the end of the <body>
 * element.
 */
const bodyPortal = ({ children }) =>
  ReactDOM.createPortal(children, document.querySelector("body"));

export default bodyPortal;
