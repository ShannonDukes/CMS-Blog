const withAuth = (req, res, next) => {
    console.log("Request Session", req.session.userId)
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;