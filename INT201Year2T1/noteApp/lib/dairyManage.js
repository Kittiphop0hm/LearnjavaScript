import {Dairy} from './dairy'

function dairyManagement() {
    const dairys = []

    function addDairy(text) {
        const dairy = new Dairy(text)
        dairys.push(dairy)
        return dairy.id
    }

    function findDairy(id) {
        return dairys.find((dairy) => dairy.id === id)
    }

    function findIndexDairy(id) {
        return dairys.findIndex((dairy) => dairy.id === id)
    }

    function removeDairy(id) {
        return dairys.splice(findIndexDairy(id), 1)
    }

    function getDairy() {
        return dairys
    }

    function clearDairy() {
        dairys.length = 0
    }

    return {addDairy, findDairy, findIndexDairy, removeDairy, getDairy, clearDairy}
}

const {addDairy, findDairy, findIndexDairy, removeDairy, getDairy, clearDairy} = dairyManagement()
export{addDairy, findDairy, findIndexDairy, removeDairy, getDairy, clearDairy}