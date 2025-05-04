'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const cors_1 = __importDefault(require('@fastify/cors'));
const fastify_1 = __importDefault(require('fastify'));
const types_1 = require('./types');

const server = (0, fastify_1.default)();
server.register(cors_1.default, {
  origin: (origin, cb) => {
    const hostname = new URL(origin !== null && origin !== void 0 ? origin : '')
      .hostname;
    if (hostname === 'localhost') {
      //  Request from localhost will pass
      cb(null, true);
      return;
    }
    // Generate an error on other origins, disabling access
    cb(new Error('Not allowed'), false);
  },
});
server.get('/ping', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    return 'pong\n';
  }),
);
server.post(
  '/',
  {
    schema: {
      body: types_1.User,
      response: {
        200: types_1.User,
      },
    },
  },
  (request, reply) => {
    const { name, mail } = request.body;
    console.log(name, mail);
    reply.status(200).send({ name, mail });
  },
);
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
