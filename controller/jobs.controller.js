const fetch = require("node-fetch");

class JobsController {
  static async getlistJobs(req, res) {
    try {
      const url = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";
      let settings = { method: "Get" };

      const data = await fetch(url, settings).then((res) => res.json());
      res.status(200).send({ data });
    } catch (error) {
      console.log(error);
    }
  }

  static async searchJobs(req, res) {
    try {
      const { description, location, type } = req.query;

      if (description != null && location == null && type == null) {
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}`;
        let settings = { method: "Get" };
        const data = await fetch(url, settings).then((res) => res.json());
        res.status(200).send({ data });
      } else if (description != null && location != null && type == null) {
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}`;
        let settings = { method: "Get" };
        const data = await fetch(url, settings).then((res) => res.json());
        res.status(200).send({ data });
      } else if (description == null && location != null && type == null) {
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?location=${location}`;
        let settings = { method: "Get" };
        const data = await fetch(url, settings).then((res) => res.json());
        res.status(200).send({ data });
      } else if (description == null && location == null && type != null) {
        let payload = [];
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`;
        let settings = { method: "Get" };
        const rawdata = await fetch(url, settings).then((res) => res.json());
        for (let i = 0; i < rawdata.length; i++) {
          if (rawdata[i].type == "Full Time") {
            payload.push(rawdata[i]);
          }
        }
        res.status(200).send({ data: payload });
      } else if (description != null && location == null && type != null) {
        let payload = [];
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}`;
        let settings = { method: "Get" };
        const rawdata = await fetch(url, settings).then((res) => res.json());
        for (let i = 0; i < rawdata.length; i++) {
          if (rawdata[i].type == "Full Time") {
            payload.push(rawdata[i]);
          }
        }
        res.status(200).send({ data: payload });
      } else if (description == null && location != null && type != null) {
        let payload = [];
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?location=${location}`;
        let settings = { method: "Get" };
        const rawdata = await fetch(url, settings).then((res) => res.json());
        for (let i = 0; i < rawdata.length; i++) {
          if (rawdata[i].type == "Full Time") {
            payload.push(rawdata[i]);
          }
        }
        res.status(200).send({ data: payload });
      } else {
        let payload = [];
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}`;
        let settings = { method: "Get" };
        const rawdata = await fetch(url, settings).then((res) => res.json());
        for (let i = 0; i < rawdata.length; i++) {
          if (rawdata[i].type == "Full Time") {
            payload.push(rawdata[i]);
          }
        }
        res.status(200).send({ data: payload });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getJob(req, res) {
    try {
      const id = req.params.id;

      const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;
      let settings = { method: "Get" };

      const data = await fetch(url, settings).then((res) => res.json());

      res.status(200).send({ data: data });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = JobsController;
