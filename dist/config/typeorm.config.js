"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const student_entity_1 = require("../students/entities/student.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'SeekGaters',
    password: 'purelogics',
    entities: [student_entity_1.Student],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map