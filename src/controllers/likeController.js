import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";
import { errorCode, successCode } from "../configs/response.js"
const models = initModels(sequelize);

const likeRestaurant = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        await models.like_res.create(
            {
                user_id,
                res_id,
                date_like: new Date(),
            }
        );
        successCode(res, req.body, "Like thành công");
    }
    catch {
        errorCode(res, "Lỗi BE")
    }
}
const deleteLikeRestaurant = async (req, res) => {
    try {
        let { user_id, res_id } = req.params;
        await models.like_res.destroy(
            {
                where: {
                    user_id,
                    res_id,
                }
            }
        );
        successCode(res, "Unlike thành công");
    } catch {
        errorCode(res, "Lỗi BE");
    }
}

const getRestaurantLike = async (req, res) => {
    try {
        let { res_id } = req.params;
        let data = await models.restaurant.findAll({
            include: ["like_res"],
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
const getUserLike = async (req, res) => {
    try {
        let { user_id } = req.params;
        let data = await models.user.findAll({
            include: ["like_res"],
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
    likeRestaurant,
    deleteLikeRestaurant,
    getRestaurantLike,
    getUserLike,
}