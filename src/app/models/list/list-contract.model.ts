
export interface Contract {
    tableHeader: string[];
    tableData: ContractModel[];
}

export interface ContractModel {
    sellerCode?: string;
    id?: string;
    code?: string;

    sellerName?: string;
    product?: string;
    created?: string;
    effectiveDate?: string;
    expiredDate?: string;
    feeAmount?: string,
    insuredFullName?: string;
    status?: string;
}

