import React from 'react'

function HIgherFun() {

    function highaeroderFun(arg) {
        return arg
    }
    let myFun = highaeroderFun(<p>This is higher order functional component</p>)
    function seondFunction(highaeroderFun) {
        return highaeroderFun;
    }


    return (
        <>
            <myFun/>
        </>
    )
}

export default HIgherFun