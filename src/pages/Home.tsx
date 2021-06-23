import React from "react";
import HomeTemplate from "../templates/Home";
import Navigation from "../organisms/Navigation";

const Home = () => {
    return (
        <div>
            <Navigation/>
            <HomeTemplate/>
        </div>
    );
}

export default Home;