const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
        permission: { type: String, required: true },
        created_by: { type: mongoose.SchemaTypes.ObjectId, required: true }
    },
    {
        versionKey: false,
        timestamp: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

class RolePriviliges extends mongoose.Model {

}

schema.loadClass(RolePriviliges);
module.exports = mongoose.model("role_priviliges", schema);