import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-crack-gannet-40186.upstash.io',
  token: process.env.REDIS_KEY!,
})

