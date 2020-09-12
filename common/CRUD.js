// Model imports
const ResponseService = require('./ResponseService'); // Response service
const Post = require('../models/Post'); // Post model
const Types = require('./Types') // Model types


// Return model by type
function getModelByType(type) {
    // eslint-disable-next-line default-case
    switch (type) {
        case Types.POST:
            return Post;
    }
}


// Create
exports.create = function (val, type, res) {
    const model = getModelByType(type);
    model.create(val)
        .then(() => {
            ResponseService.generalResponse(null, res, undefined, "Inserted");
        }).catch(err => ResponseService.generalResponse(err, res, undefined, "Inserted"));
}



// Delete by ID
exports.deleteById = function (id, type, res) {
    const model = getModelByType(type);
    model.destroy({ where: { id: id } })
        .then(posts => {
            ResponseService.generalPayloadResponse(null, posts, res);
        })
        .catch(err => ResponseService.generalPayloadResponse(err, null, res));

}

// Read all
exports.getAll = function (type, res) {
    const model = getModelByType(type);
    model.findAll()
        .then(posts => {
            ResponseService.generalPayloadResponse(null, posts, res);
        })
        .catch(err => ResponseService.generalPayloadResponse(err, null, res));
}

// Read one by ID
exports.getById = function (id, type, res) {
    const model = getModelByType(type);
    model.findOne({ where: { id: id } })
        .then(post => {
            if (post !== null)
                ResponseService.generalPayloadResponse(null, post, res);
            else ResponseService.generalPayloadResponse(null, post, res, 404, "No record Found");
        })
        .catch(err => ResponseService.generalPayloadResponse(err, null, res));

}

// // Update by ID
// exports.updateById = function (id, val, type, res) {
//     const model = getModelByType(type);
//     model.findByIdAndUpdate(id, val, { new: true }, (err, doc) => {
//         ResponseService.generalPayloadResponse(err, doc, res, undefined, "Updated");
//     });
// }

// // Soft delete by ID
// exports.softDelete = function (id, type, res) {
//     const model = getModelByType(type);
//     model.findByIdAndUpdate(id, { status: 0 }, (err, doc) => {
//         ResponseService.generalResponse(err, res, undefined, "Deleted");
//     });
// }

// // Status change by ID
// exports.statusChangeById = function (id, type, res) {
//     const model = getModelByType(type);
//     model.findByIdAndUpdate(id, { status: 0 }, (err, doc) => {
//         ResponseService.generalResponse(err, res, undefined, "Deleted");
//     });
// }

/* Read by query
    [X] PAGINATION
    [X] SORTING
    [X] LIMIT
*/
// exports.getByQuery = function (query, type, res) {
//     const model = getModelByType(type);
//     model.find(query, (err, doc) => {
//         ResponseService.generalPayloadResponse(err, doc, res);
//     });
// }

/* Read n items by query [ NO PAGINATION ]
    [X] PAGINATION
    [X] SORTING
    [/] LIMIT
*/
// exports.getByQueryLimit = function (query, limit, type, res) {
//     const model = getModelByType(type);
//     model.find(query, (err, doc) => {
//         ResponseService.generalPayloadResponse(err, doc, res);
//     }).limit(limit);
// }

/* Read n items by query [ NO PAGINATION ]
    [X] PAGINATION
    [/] SORTING
    [/] LIMIT
*/
// exports.getByQueryLimitAndSort = function (query, limit, sortQuery, type, res) {
//     const model = getModelByType(type);
//     model.find(query, (err, doc) => {
//         ResponseService.generalPayloadResponse(err, doc, res);
//     }).sort(sortQuery).limit(limit);
// }

// /* Read n items by query [ NO PAGINATION ]
//     [/] PAGINATION
//     [/] SORTING
//     [/] LIMIT
// */
// exports.getByQueryPaginate = function (query, limit, sortQuery, page, type, res) {
//     const model = getModelByType(type);
//     model.find(query, (err, doc) => {
//         ResponseService.generalPayloadResponse(err, doc, res);
//     }).sort(sortQuery).skip(page * limit).limit(limit);
// }

// /* Read n items by query [ NO PAGINATION ]
//     [/] PAGINATION
//     [X] SORTING
//     [/] LIMIT
// */
// exports.getByQueryPaginateWithoutSort = function (query, limit, page, type, res) {
//     const model = getModelByType(type);
//     model.find(query, (err, doc) => {
//         ResponseService.generalPayloadResponse(err, doc, res);
//     }).skip(page * limit).limit(limit);
// }