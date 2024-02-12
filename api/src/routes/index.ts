import { FastifyInstance } from "fastify";
import { Users } from "./users";
import { Accounts } from "./accounts";
import { Categories } from "./catgories";
import { Transactions } from "./transactions";



export async function Routes( fastify: FastifyInstance )
{

    fastify.register( Users, { prefix: '/users' } )
    fastify.register( Accounts, { prefix: '/accounts' } )
    fastify.register( Categories, { prefix: '/categories' } )
    fastify.register( Transactions, { prefix: '/transactions' } )
}