const axios = require("axios");

class IfliveService {
  apiKey = process.env.API_KEY_IF;
  expertSessionId = process.env.SESSION_ID_IF;
  baseApiUrl = "https://api.infiniteflight.com/public/v2";

  #makeUrl(path) {
    return `${this.baseApiUrl}/${path}?apikey=${this.apiKey}`;
  }

  //   Flights
  async getAllFlights() {
    const res = await axios
      .get(this.makeUrl(`flights/${this.expertSessionId}`))
      .catch(console.error);

    return res.data;
  }

  async getFlightById(flightId) {
    const flights = await this.getAllFlights();
    const data = flights.result.find((f) => f.flightId === flightId);
    return data;
  }

  async getFlightPlan(flightId) {
    const res = await axios
      .get(this.makeUrl(`flight/${flightId}/flightplan`))
      .catch(console.error);
    const data = res.data;
    return data;
  }

  //   ATC
  async getActiveAtc() {
    const res = await axios
      .get(this.makeUrl(`atc/${this.expertSessionId}`))
      .catch(console.error);

    return res.data;
  }

  // User info
  async getUserStats(discourseNames) {
    if (typeof discourseNames === "string") discourseNames = [discourseNames];
    const res = await axios
      .post(this.makeUrl("user/stats"), {
        discourseNames,
      })
      .catch(console.error);

    return res.data;
  }

  async getUserGrade(userId) {
    const res = await axios
      .get(this.makeUrl(`user/grade/${userId}`))
      .catch(console.error);

    const data = res.data;
    if(!data) throw new NotFoundException(`No user with ID \`${userId}\``)
    return data;
  }

  // Airports
  async getAtis(icao) {
    try {
      const res = await axios.get(
        this.makeUrl(`airport/${icao}/atis/${this.expertSessionId}`),
      );

      return res.data.result;
    } catch (err) {
      return null;
    }
  }

  async getAirportStatus(icao) {
    const res = await axios
      .get(
        this.makeUrl(`airport/${icao}/status/${this.expertSessionId}`),
      )
      .catch(console.error);

    return res.data;
  }

  // Global
  async getWorldStatus() {
    const res = await axios
      .get(this.makeUrl(`world/status/${this.expertSessionId}`))
      .catch(console.error);

    return res.data;
  }

  async getTracks() {
    const res = await axios.get(this.makeUrl("tracks")).catch(console.error);
    return res.data;
  }
}

module.exports = IfliveService;