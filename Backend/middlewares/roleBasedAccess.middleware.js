export const roleBasedAccessControl = (allowedRoles)=>{
    return (req,res,next)=>{
        if(allowedRoles.includes(req.role)){
            next()
        }else{
            res.status(403).json({message:"Unauthorised"})
        }
    }
}
