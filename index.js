const puppeteer = require('puppeteer');
const redis = require('redis');
const redisClient = redis.RedisClient();

redisClient.on('error', error => {
    console.log('Redis error: ', error)
});
