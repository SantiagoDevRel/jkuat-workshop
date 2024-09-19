const ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "getMessage", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
  { inputs: [{ internalType: "string", name: "_newMessage", type: "string" }], name: "setMessage", outputs: [], stateMutability: "nonpayable", type: "function" },
];

export default ABI;
