async function renderCondition(query) {
    let {
        message,
        room_id
    } = query;
    let condition = {};
    if( message) {
         condition.message = message;
    }
    if(room_id) {
        condition.room_id = room_id;
    }
    return condition
}
export {
    renderCondition
}