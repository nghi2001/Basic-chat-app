async function renderCondition(query) {
    let {
        name
    } = query;
    let condition = {};
    if( name) {
        condition.name = name
    }
    return condition;
}

export {
    renderCondition
}