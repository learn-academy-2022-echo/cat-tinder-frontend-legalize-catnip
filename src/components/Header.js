import React from "react"

const Header = () => {
    return (
        <div className="Top">

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Cat Tinder</a>
                </li>
                <div class="divider" />
                <li class="nav-item">
                    <a class="nav-link active" href="CatIndex">See our cats</a>
                </li>
                <div class="divider" />
                <li class="nav-item">
                    <a class="nav-link active" href="CatNew">Add a new cat</a>
                </li>
            </ul>

        </div>
    )
}

export default Header
