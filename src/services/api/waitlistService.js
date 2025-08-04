import waitlistData from "@/services/mockData/waitlistEntries.json";

class WaitlistService {
  constructor() {
    this.data = [...waitlistData];
    this.storageKey = "postmark-waitlist-entries";
    this.loadFromStorage();
  }

  loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsedData = JSON.parse(stored);
        this.data = parsedData.length > 0 ? parsedData : [...waitlistData];
      }
    } catch (error) {
      console.warn("Failed to load from storage:", error);
      this.data = [...waitlistData];
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (error) {
      console.warn("Failed to save to storage:", error);
    }
  }

  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.data];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.data.find(entry => entry.Id === parseInt(id));
  }

  async create(entry) {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Check if email already exists
    const existingEntry = this.data.find(e => e.email.toLowerCase() === entry.email.toLowerCase());
    if (existingEntry) {
      throw new Error("This email is already on our waitlist!");
    }

    const newId = this.data.length > 0 ? Math.max(...this.data.map(e => e.Id)) + 1 : 1;
    const newEntry = {
      Id: newId,
      name: entry.name,
      email: entry.email,
      selectedAdventure: entry.selectedAdventure || "",
      timestamp: new Date().toISOString()
    };
    
    this.data.push(newEntry);
    this.saveToStorage();
    return { ...newEntry };
  }

  async update(id, updates) {
    await new Promise(resolve => setTimeout(resolve, 350));
    const index = this.data.findIndex(entry => entry.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Entry not found");
    }
    
    this.data[index] = { ...this.data[index], ...updates };
    this.saveToStorage();
    return { ...this.data[index] };
  }

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, 250));
    const index = this.data.findIndex(entry => entry.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Entry not found");
    }
    
    const deleted = this.data.splice(index, 1)[0];
    this.saveToStorage();
    return deleted;
  }

  async getByEmail(email) {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.data.find(entry => entry.email.toLowerCase() === email.toLowerCase());
  }

  async getCount() {
    await new Promise(resolve => setTimeout(resolve, 150));
    return this.data.length;
  }
}

export default new WaitlistService();