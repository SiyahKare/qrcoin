class BaseEntity{
    Id: number;
    CreatedDate?: Date;
    UpdatedDate?: Date;
    constructor() {      
        this.CreatedDate = new Date(Date.now());
        this.UpdatedDate = new Date(Date.now());
    }
}

export default BaseEntity;