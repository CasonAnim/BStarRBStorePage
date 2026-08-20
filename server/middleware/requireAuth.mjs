import jwt from "jsonwebtoken"


function requireAuth(req , res ,next) {
    const authHeader = req.headers.authorization
    console.log(authHeader);
    if (!authHeader) return res.status(401).send("No Token");
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (!token) return res.status(401).send("Malformed Token");
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded
        next();

    } catch (error) {
        return res.status(401).send("Invalid or expired token");
    }
}
export default requireAuth;