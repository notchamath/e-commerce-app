const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/userModel');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

// decrypt token, find user from db then add user details to req
module.exports = (passport) => {
    passport.use(new JwtStrategy(options, 
        async (jwt_payload, done) => {
            try{
                const user = await User.findById(jwt_payload.id).select('-password');

                if(user) return done(null, user);
                
                return done(null, false);

            } catch(err) {
                throw new Error('Error Authorizing');
            }
        }
    ));
}