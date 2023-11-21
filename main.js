// window.addEventListener("keydown", e=>{
//     console.log("keydown"); // key를 눌렀을 때 적용 됨
// })

window.addEventListener("keyup", e=>{
    //console.log("keyups");
    //key를 눌렀다 땠을때 적용 됨
    console.log(e);
    //let keyName = e.key;
    // if(keyName === "#"){
    //     console.log("#입니다");
    // }
})


function keyEvent(){
    let keyName = window.event.key
    if(keyName === "#"){
        const groups = document.querySelector('.deco_groups');
        groups.classList.add("on");
    }

    const btns = document.querySelectorAll(".list li");

btns.forEach((btn,index)=>{
    btn.addEventListener("click",e=>{
        //만약에 클릭한 버튼에 on이 있다면 return(종료시킨다)
        let isOn = e.currentTarget.classList.contains("on");
        if(isOn)return;
            // 함수 내부의 기능을 바깥으로 내보내준다. 
            //함수 실행을 강제로 종료해준다.
        for(let item of btns)item.classList.remove("on");
        btns[index].classList.add("on");
    })
})

}




