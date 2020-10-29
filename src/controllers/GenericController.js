const db = require("../database/connection.js");

module.exports = {
    
    
    async read(request, response, next) {
        try {
            const msg = await db('hello').select();
            return response.status(200).send(msg);

        } catch (error) {
            console.error(error);
            return response.status(400).send({error: 'Unexpected error while finding Hello'})
        }
    }

/* 
    async create(request, response, next) {
        const { name, street, complement, number, neighborhood, cep, city_uf, phone, email, embedlink } = request.body;
        
        try {
            const insertedInfos = await db('informations').insert({
                name,
                street,
                complement,
                number, 
                neighborhood,
                cep,
                city_uf,
                phone,
                email,
                embedlink
            });

            const info_id = insertedInfos[0];

            return response.status(http.CREATED).send({id: info_id})
    
        } catch (error) {
            console.log(`error: ${error}`);
            return response.status(http.BAD_REQUEST).send({error: 'Unexpected error while creating new informations'})
        }
    }

    async edit(request, response, next) {
        const { name, street, complement, number, neighborhood, cep, city_uf, phone, email, embedlink } = request.body;
        const id = request.params.id;

        try {
            const info = await db('informations').where('id', '=', id).update({
                name,
                street,
                complement,
                number, 
                neighborhood,
                cep,
                city_uf,
                phone,
                email,
                embedlink
            });
            return response.status(http.OK).send()
        } catch (error) {
            console.log(`error: ${error}`);
            return response.status(http.BAD_REQUEST).send({error: 'Unexpected error while updating informations'})
        }
    }
    async delete(request, response, next) {
        const id = request.params.id;
        
        try {
            const posts = await db('informations').where('id', '=', id).delete();
            return response.status(http.OK).send()
        } catch (error) {
            console.log(`error: ${error}`);
            return response.status(http.BAD_REQUEST).send({error: 'Unexpected error while deleting informations'})
        }
    } */
}