import Redis from "ioredis";
let redisClient;
try {
   redisClient = new Redis(
    "redis://default:41b0a99c81e842d98fb3885452eb68bb@eu2-deep-bee-30997.upstash.io:30997"
  );
} catch (error) {
  console.log(error);
}

export { redisClient };
