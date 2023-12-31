function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "main" + shadowSelector + " {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1" + shadowSelector + " {color: #1fc117;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];