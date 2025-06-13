import { useState } from "react";

export default function EcoHelper() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/ecoai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      setResponse("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section>
      <h2>Ask Eco-Helper</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something like: How can I recycle electronics?"
      />
      <br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>
      {response && (
        <div>
          <h4>Response:</h4>
          <p>{response}</p>
        </div>
      )}
    </section>
  );
}
