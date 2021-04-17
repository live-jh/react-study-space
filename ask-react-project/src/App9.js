import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import queryString from "query-string";

const App9 = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>App9</h1>
                <ul>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/about/company/">AboutCompany</Link>
                    </li>
                    <li>
                        <Link to="/profile/">Profile</Link>
                    </li>
                    <li>
                        <Link to="/weblog/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/hello/">Hello</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/about/" component={AboutPage}/>
                    <Route exact path="/about/company/" component={AboutCompnanyPage}/>
                    <Route exact path="/profile/" component={ProfilePage}/>
                    <Route path="/weblog/:post_id/" component={PostDetail}/>
                    <Route path="/weblog/" component={PostList}/>
                    <Route component={RouteNoMatch}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const AboutPage = () => {
    return (
        <div>
            <h1>AboutPage</h1>
        </div>
    )
}

const AboutCompnanyPage = () => {
    return (
        <div>
            <h1>AboutCompnanyPage</h1>
        </div>
    )
}

const ProfilePage = ({location}) => {
    const {token} = queryString.parse(location.search); //object change
    console.log(queryString.parse(location.search))

    return (
        <div>
            <h1>ProfilePage</h1>
            token : {token}
        </div>
    )
}

const PostDetail = ({match}) => {
    const {params: {post_id}} = match;
    const [post, setPost] = useState();
    useEffect(() => {
        console.log("get post detail API call -> ", post_id);
        setPost({
            title: `post #${post_id}`,
            content: "포스팅 내용"
        })
    }, [post_id])
    return (
        <div>
            <h2>PostDetail #{post_id}</h2>
            {JSON.stringify(post)}
        </div>
    )
}

const PostList = ({history, location, match}) => {
    return (
        <div>
            <h1>PostList</h1>
            <ul>
                <li>
                    <Link to={`${match.url}100/`}>100번 포스팅</Link>
                </li>
                <li>
                    <Link to={`${match.url}200/`}>200번 포스팅</Link>
                </li>
            </ul>
        </div>
    )
}

const RouteNoMatch = ({location}) => {
    return (
        <div>잘못된 경로로 접근하였습니다. {location.pathname}</div>
    )
}
export default App9;