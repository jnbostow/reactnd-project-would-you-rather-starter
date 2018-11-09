export default function (arrOfObjs, objPropAccessor) {
    return arrOfObjs.reduce((users, currUser) => {
        const largerNumIdx = users.findIndex(elem =>
            objPropAccessor(currUser) > objPropAccessor(elem)
        )

        largerNumIdx === -1 ? users.push(currUser) : users.splice(largerNumIdx, 0, currUser)

        return users
    },[])
}