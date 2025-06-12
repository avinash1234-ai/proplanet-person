import { useState } from "react";

export default function EcoAIHelper() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    setLoading(true);
    setResponse("");
    const res = await fetch("/api/ecoai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data.reply || "No response received.");
    setLoading(false);
  };

  return (
    <section>
      <h2>🌍 Eco AI Helper</h2>
      <input
        type="text"
        placeholder="Ask for eco-tips or new task ideas"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={askAI}>Ask AI</button>
      {loading ? <p>Loading...</p> : <p><strong>AI says:</strong> {response}</p>}
    </section>
  );
}
