// By BigBearTechWorld this is for finding duplicate ports in docker-compose.yml
const fs = require("fs");
const path = require("path");

const baseDir = "apps/";

const findDuplicatePorts = (baseDir) => {
  const appDir = path.join(__dirname, baseDir);
  const portUsage = {};
  const duplicatePorts = new Set();

  // Loop through each app directory
  fs.readdir(appDir, (err, apps) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    apps.forEach((app) => {
      const configPath = path.join(appDir, app, "config.json");

      // Check if config.json exists
      if (fs.existsSync(configPath)) {
        fs.readFile(configPath, "utf8", (err, data) => {
          if (err) {
            console.error("Error reading config file:", err);
            return;
          }

          let config;
          try {
            config = JSON.parse(data);
          } catch (err) {
            console.error("Error parsing JSON:", err);
            return;
          }

          if (config.port) {
            if (portUsage[config.port]) {
              portUsage[config.port].push(app);
              duplicatePorts.add(config.port);
            } else {
              portUsage[config.port] = [app];
            }
          }
        });
      }
    });

    // Wait for all async operations to complete
    setTimeout(() => {
      if (duplicatePorts.size > 0) {
        console.log("Duplicate ports found:");
        duplicatePorts.forEach((port) => {
          console.log(`Port ${port} is used by: ${portUsage[port].join(", ")}`);
        });
      } else {
        console.log("No duplicate ports found.");
      }
    }, 1000);
  });
};

findDuplicatePorts(baseDir);
