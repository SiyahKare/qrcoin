
import { EntitySchema } from "typeorm";
import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";
import BaseModel from '../models/Base';

export class BaseSchema<T extends BaseModel> extends EntitySchema<T> {
    constructor(options: EntitySchemaOptions<T>) {
        options.columns.Id = {
            primary: true,
            type: "int",
            generated: true
        };
        options.columns.CreatedDate = {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            nullable: true
        };
        options.columns.UpdatedDate = {
            type: "timestamp",
            nullable: true
        };
        super(options);
    }
}
