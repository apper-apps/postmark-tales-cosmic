import React, { useState, useEffect } from "react";
import AdventureCard from "@/components/molecules/AdventureCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import adventureService from "@/services/api/adventureService";

const AdventureTypes = ({ onAdventureSelect }) => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAdventures = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await adventureService.getAll();
      setAdventures(data);
    } catch (err) {
      setError("Failed to load adventure types. Please try again.");
      console.error("Error loading adventures:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdventures();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Loading className="py-12" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Error message={error} onRetry={loadAdventures} />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Every envelope transports your family to thrilling worlds of mystery, 
            exploration, and heroic courage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <AdventureCard
              key={adventure.Id}
              adventure={adventure}
              onSelect={onAdventureSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureTypes;