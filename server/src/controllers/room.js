async function renderCondition(query) {
    let {
        name,
        user_id
    } = query;
    let condition = {};
    if( name) {
         condition.name = name;
    }
    if( user_id) {
        condition.members = {
            "$elemMatch": {
                user_id: user_id
            }
        }
    }
    return condition
}
export {
    renderCondition
}