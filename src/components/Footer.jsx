import React from "react";

const people = "Kenny Jung, Satwik Mishra, Ken Zou";

var year = new Date().getFullYear();

function Footer() {
    return (
        <p>Created by {people}. Copyright 2020-{year}.</p>
    );
}

export default Footer;