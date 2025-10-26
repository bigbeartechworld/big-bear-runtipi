import fs from 'fs';
import jsyaml from 'js-yaml';

type FormField = {
  type: 'random';
  required: boolean;
};

interface AppConfig {
  id: string;
  port: number;
  categories: string[];
  requirements?: {
    ports?: number[];
  };
  name: string;
  description: string;
  version?: string;
  tipi_version: number;
  short_desc: string;
  author: string;
  source: string;
  available: boolean;
  form_fields?: FormField[];
  supported_architectures: string[];
  dynamic_config: boolean;
  created_at: number;
  updated_at: number;
}

const networkExceptions = [
  'matter-server',
  'mdns-repeater',
  'pihole',
  'tailscale',
  'homeassistant',
  'plex',
  'zerotier',
  'gladys',
  'scrypted',
  'homebridge',
  'cloudflared',
  'beszel-agent',
  'watchyourlan',
];

// Helper function to check if an app uses network_mode: host
const usesHostNetworking = (appId: string): boolean => {
  const dockerComposeFile = fs.readFileSync(`./apps/${appId}/docker-compose.yml`).toString();
  const dockerCompose: any = jsyaml.load(dockerComposeFile);
  
  // Check if any service uses network_mode: host
  const services = dockerCompose.services || {};
  return Object.values(services).some((service: any) => service.network_mode === 'host');
};

const getAppConfigs = (): AppConfig[] => {
  const apps: AppConfig[] = [];

  const appsDir = fs.readdirSync('./apps');

  appsDir.forEach((app: string) => {
    const path = `./apps/${app}/config.json`;

    if (fs.existsSync(path)) {
      const configFile = fs.readFileSync(path).toString();

      try {
        const config: AppConfig = JSON.parse(configFile);
        if (config.available) {
          apps.push(config);
        }
      } catch (e) {
        console.error('Error parsing config file', app);
      }
    }
  });

  return apps;
};

describe('App configs', () => {
  it('Get app config should return at least one app', () => {
    const apps = getAppConfigs();

    expect(apps.length).toBeGreaterThan(0);
  });

  describe('Each app should have an id', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.id).toBeDefined();
      });
    });
  });

  describe('Each app should have a md description', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        const path = `./apps/${app.id}/metadata/description.md`;

        if (fs.existsSync(path)) {
          const description = fs.readFileSync(path).toString();
          expect(description).toBeDefined();
        } else {
          expect(true).toBe(false);
        }
      });
    });
  });

  describe('Each app should have categories defined as an array', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.categories).toBeDefined();
        expect(app.categories).toBeInstanceOf(Array);
      });
    });
  });

  describe('Each app should have a name', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.name).toBeDefined();
      });
    });
  });

  describe('Each app should have a description', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.description).toBeDefined();
      });
    });
  });

  describe('Each app should have a port', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.port).toBeDefined();
        expect(app.port).toBeGreaterThan(999);
        expect(app.port).toBeLessThan(65535);
      });
    });
  });

  describe('Each app should have a supported architecture', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.supported_architectures).toBeDefined();
        expect(app.supported_architectures).toBeInstanceOf(Array);
      });
    });
  });

  test('Each app should have a different port', () => {
    const appConfigs = getAppConfigs();
    const ports = appConfigs.map((app) => app.port);
    expect(new Set(ports).size).toBe(appConfigs.length);
  });

  test('Each app should have a unique id', () => {
    const appConfigs = getAppConfigs();
    const ids = appConfigs.map((app) => app.id);
    expect(new Set(ids).size).toBe(appConfigs.length);
  });

  describe('Each app should have a version', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.version).toBeDefined();
        expect(app.tipi_version).toBeDefined();
        expect(app.tipi_version).toBeGreaterThan(0);
      });
    });
  });

  describe('Each app should have a docker-compose file beside it', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(fs.existsSync(`./apps/${app.id}/docker-compose.yml`)).toBe(true);
      });
    });
  });

  describe('Each app should have a metadata folder beside it', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(fs.existsSync(`./apps/${app.id}/metadata`)).toBe(true);
      });
    });
  });

  describe('Each app should have a file named logo.jpg in the metadata folder', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        expect(fs.existsSync(`./apps/${app.id}/metadata/logo.jpg`)).toBe(true);
      });
    });
  });

  describe('Each app should have a container name equals to its id', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        const dockerComposeFile = fs.readFileSync(`./apps/${app.id}/docker-compose.yml`).toString();

        const dockerCompose: any = jsyaml.load(dockerComposeFile);

        expect(dockerCompose.services[app.id]).toBeDefined();
        expect(dockerCompose.services[app.id].container_name).toBe(app.id);
      });
    });
  });

  describe('Each app should have the same version in config.json and docker-compose.yml', () => {
    const exceptions = ['revolt'];
    const apps = getAppConfigs().filter((app) => !exceptions.includes(app.id));

    apps.forEach((app) => {
      test(app.id, () => {
        const dockerComposeFile = fs.readFileSync(`./apps/${app.id}/docker-compose.yml`).toString();

        const dockerCompose: any = jsyaml.load(dockerComposeFile);

        expect(dockerCompose.services[app.id]).toBeDefined();
        expect(dockerCompose.services[app.id].image).toBeDefined();

        const dockerImage = dockerCompose.services[app.id].image;

        const version = dockerImage.split(':')[1];

        expect(version).toContain(app.version);
      });
    });
  });

  describe('Each app should have network tipi_main_network', () => {
    const apps = getAppConfigs();

    apps.forEach((app) => {
      test(app.id, () => {
        // Skip apps in network exceptions list or using host networking
        if (!networkExceptions.includes(app.id) && !usesHostNetworking(app.id)) {
          const dockerComposeFile = fs.readFileSync(`./apps/${app.id}/docker-compose.yml`).toString();

          const dockerCompose: any = jsyaml.load(dockerComposeFile);

          expect(dockerCompose.services[app.id]).toBeDefined();

          expect(dockerCompose.services[app.id].networks).toBeDefined();
          expect(dockerCompose.services[app.id].networks).toContain('tipi_main_network');
        }
      });
    });
  });

  describe('Each app should have label runtipi.managed=true', () => {
    const apps = getAppConfigs();
    apps.forEach((app) => {
      test(app.id, () => {
        const dockerComposeFile = fs.readFileSync(`./apps/${app.id}/docker-compose.yml`).toString();

        const dockerCompose: any = jsyaml.load(dockerComposeFile);

        const services = dockerCompose.services;
        const labelDoesNotExist = Object.keys(services).some((service) => {
          const labels = services[service].labels || {};
          if (labels) {
            return !labels['runtipi.managed'];
          }
          return true;
        });

        expect(labelDoesNotExist).toBe(false);
      });
    });
  });

  describe('All form fields with type random should not be marked as required', () => {
    const configs = getAppConfigs();
    configs.forEach((config) => {
      const formFields = config.form_fields;
      if (formFields) {
        formFields.forEach((field) => {
          if (field.type === 'random') {
            test(config.id, () => {
              expect(Boolean(field.required)).toBe(false);
            });
          }
        });
      }
    });
  });

  describe('All apps should have a createdAt field', () => {
    const apps = getAppConfigs();
    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.created_at).toBeDefined();
        expect(app.created_at).toBeGreaterThan(0);
        expect(app.created_at).toBeLessThan(Date.now());
        expect(new Date(app.created_at).getFullYear()).toBeGreaterThanOrEqual(2023);
      });
    });
  });

  describe('All apps should have an updatedAt field', () => {
    const apps = getAppConfigs();
    apps.forEach((app) => {
      test(app.id, () => {
        expect(app.updated_at).toBeDefined();
        expect(app.updated_at).toBeGreaterThan(0);
        expect(app.updated_at).toBeLessThan(Date.now());
        expect(new Date(app.updated_at).getFullYear()).toBeGreaterThanOrEqual(2023);
      });
    });
  });

  describe('Apps with network_mode host should not have ports in docker-compose.yml', () => {
    const apps = getAppConfigs();
    apps.forEach((app) => {
      test(app.id, () => {
        const dockerComposeFile = fs.readFileSync(`./apps/${app.id}/docker-compose.yml`).toString();
        const dockerCompose: any = jsyaml.load(dockerComposeFile);

        // Check all services for network_mode: host
        const services = dockerCompose.services;
        Object.keys(services).forEach((serviceName) => {
          const service = services[serviceName];
          
          // If service has network_mode: host, it should not have ports defined
          if (service.network_mode === 'host') {
            expect(service.ports).toBeUndefined();
          }
        });
      });
    });
  });
});
