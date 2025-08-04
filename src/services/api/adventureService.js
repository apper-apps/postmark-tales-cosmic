import adventureData from "@/services/mockData/adventureTypes.json";

class AdventureService {
  constructor() {
    this.data = [...adventureData];
  }

  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [...this.data];
  }

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 150));
    return this.data.find(adventure => adventure.Id === parseInt(id));
  }

  async getByType(type) {
    await new Promise(resolve => setTimeout(resolve, 150));
    return this.data.find(adventure => adventure.type === type);
  }
}

export default new AdventureService();