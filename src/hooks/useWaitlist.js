import { useState, useEffect } from "react";
import waitlistService from "@/services/api/waitlistService";

export const useWaitlist = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadEntries = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await waitlistService.getAll();
      setEntries(data);
    } catch (err) {
      setError("Failed to load waitlist entries");
      console.error("Error loading entries:", err);
    } finally {
      setLoading(false);
    }
  };

  const addEntry = async (entryData) => {
    try {
      const newEntry = await waitlistService.create(entryData);
      setEntries(prev => [...prev, newEntry]);
      return newEntry;
    } catch (err) {
      throw new Error(err.message || "Failed to add entry");
    }
  };

  const getEntryCount = async () => {
    try {
      return await waitlistService.getCount();
    } catch (err) {
      console.error("Error getting count:", err);
      return 0;
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return {
    entries,
    loading,
    error,
    loadEntries,
    addEntry,
    getEntryCount
  };
};