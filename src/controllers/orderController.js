import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";
import { errorCode, successCode } from "../configs/response.js";
const models = initModels(sequelize);

const addOrder = async (req, res) => {
    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body;
        await models.order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id,
        });
        successCode(res, req.body, "Order thành công");
    }
    catch (error) {
        errorCode(res, "Lỗi BE");
    }
};

export default addOrder;
