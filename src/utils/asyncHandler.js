// 1st approach

// promises approach - goood oneee
const asyncHandler = (requestHandler) => {
    return  (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
}

export {asyncHandler}

// 2nd approach - try catch

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//     try {
//         await requestHandler(req, res, next)
//     } catch (error) {
//         res.send(err.code || 500).json({
//             success: false,
//             message: err.message,
//         })
//     }
// }

