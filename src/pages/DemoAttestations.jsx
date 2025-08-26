import { useState } from 'react';

export default function DemoAttestations() {
  const [attestations, setAttestations] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;
    setAttestations([...attestations, input]);
    setInput("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-xl font-bold text-blue-600 mb-4">Demo Attestations</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter attestation..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {attestations.map((a, i) => (
          <li key={i} className="border p-2 rounded-lg">{a}</li>
        ))}
      </ul>
    </div>
  );
}