import cors from '@fastify/cors';
import postgres from '@fastify/postgres';
import fastify from 'fastify';
import { User, UserType } from './types';

const server = fastify();

server.register(cors, {
  origin: (origin, cb) => {
    const hostname = new URL(origin ?? '').hostname;
    if (hostname === 'localhost') {
      //  Request from localhost will pass
      cb(null, true);
      return;
    }
    // Generate an error on other origins, disabling access
    cb(new Error('Not allowed'), false);
  },
});

server.register(postgres, {
  connectionString: 'postgres://postgres@localhost/postgres',
});

server.get('/ping', async () => {
  return 'pong\n';
});

server.post<{ Body: UserType; Reply: UserType }>(
  '/',
  {
    schema: {
      body: User,
      response: {
        200: User,
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
