"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatGetClientData = ({ client }) => {
    const formatedClient = {
        id: client.id,
        name: client.name,
        cpf: client.cpf,
        birthDate: client.birthDate,
        cellphone: client.cellphone,
        created_at: client.created_at,
        updated_at: client.updated_at,
        status: client.status,
        hiredServices: client.hiredServices.map((hiredService) => {
            return {
                id: hiredService.id,
                start_date: hiredService.start_date,
                end_date: hiredService.end_date,
                bedroom_number: hiredService.bedroom_number,
                paid: hiredService.paid,
                total_price: hiredService.total_price,
                status: hiredService.status,
            };
        }),
    };
    return formatedClient;
};
exports.default = formatGetClientData;
