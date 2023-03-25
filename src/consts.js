const consts = {
    server_url: 'https://mern-ecommerce-project-backend.onrender.com/'
}


if (!(process.env.NODE_ENV === 'production')) {
    consts.server_url = 'http://localhost:3300/'
}

export default consts