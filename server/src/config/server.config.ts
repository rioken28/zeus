export const SERVER_CONFIG ={
    port: process.env.PORT as string || String("3002"),
    secretJwt: process.env.SECRETJWT
}