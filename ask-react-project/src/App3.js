import {useCallback, useEffect, useState} from "react";

//function Component
function PostDetailComponent({post}) {
    const {title, content} = post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

function PostDetail({postId}) {
    const [post, setPost] = useState();
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("postId is Change : ", postId);
        setPost({title: "포스팅 제목", content: `포스팅 내용 -> ${postId}`})
        return () => {
            //unmount 시에 호출
        }
    }, [postId])
    return (
        <div>
            <h1>post #{postId}</h1>
            {/*값이 없으면 화면에 노출 x*/}
            {!post && "Loading..."}
            {post && <PostDetailComponent post={post}/>}
        </div>
    )
}

function Clock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval)
    }, [])
    return <div>현재 시각은 {date.toISOString().slice(11, 19)} 입니다.</div>
}

function App3() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [value, setValue] = useState({val1: 0, val2: 0});
    const [postId, setPostId] = useState(1)

    //기본형
    useEffect(() => {
    }) //render시 호출 (잘 사용하지 않음)
    useEffect(() => {
        console.log("mount")
    }, []) //mount할때만 호출
    useEffect(() => {
        console.log("changed value ->", value)
    }, [value]) // value가 변경될때 호출

    // const onClick = e => {
    /* 클릭하는 순간 value 객체는 val2는 사라짐 */
    // setValue(prevState => ({...prevState, val1: value.val1 + 2}));
    // }
    const onClick = useCallback(() => {
        // value를 []에 넣어서 참조해야 콜백함수 호출
        setValue({...value, val1: 10});
        // setValue(prevState => ({...prevState, val1: value.val1 + 2}));
    }, [value]);

    return (
        <div>
            Hello World
            <hr/>
            {val1}
            <br/>
            {value.val1}
            <br/>
            {JSON.stringify(value)}
            <br/>
            <button onClick={onClick}>button</button>
            <button onClick={() => setPostId(100)}>100번 글</button>
            <PostDetail postId={postId}/>
            <Clock/>
        </div>
    )
}

export default App3;