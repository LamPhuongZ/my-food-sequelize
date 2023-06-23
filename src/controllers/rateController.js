import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";
import { errorCode, successCode } from "../configs/response.js"
const models = initModels(sequelize);

const addRate = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        await models.rate_res.create({
            user_id,
            res_id,
            date_rate: new Date(),
        })
        successCode(res, req.body, "Đánh giá thành công");
    }
    catch {
        errorCode(res, "Lỗi BE");
    }
}
const getRestaurantRate = async (req, res) => {
    try {
        let { res_id } = req.params;
        let data = await models.restaurant.findAll({
            include: ["rate_res"],
            where: {
                res_id,
            }
        })
        successCode(res, data, "Lấy dữ liệu thành công");
    }
    catch {
        errorCode(res, "Lỗi BE");
    }
}
const getUserRate = async (req, res) => {
    try {
        let { user_id } = req.params;
        let data = await models.user.findAll({
            include: ["rate_res"],
            where: {
                user_id,
            }
        })
        successCode(res, data, "Lấy dữ liệu thành công");
    }
    catch {
        errorCode(res, "Lỗi BE");
    }
}

export {
    addRate,
    getRestaurantRate,
    getUserRate,
}