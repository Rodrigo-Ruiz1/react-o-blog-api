'use strict';
const db = require('./conn');

class QuotesModel {
    constructor(id, quote, character, image, episode) {
        this.id = id;
        this.quote = quote;
        this.character = character;
        this.image = image;
        this.episode = episode;
    }

    static async getAll() {
        try {
            const response = await db.any('SELECT * FROM quotes;');
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getById(id) {
        try {
            const response = await db.any(`SELECT * FROM quotes WHERE id = ${id}`)
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = QuotesModel;