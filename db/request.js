const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

exports.prisma = prisma;
exports.User = prisma.user;
exports.Todo = prisma.todo;