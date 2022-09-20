import React from "react"

const Header = () => {
    return (
        <div className="Top">

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="">Cat Tinder</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="CatIndex">See our cats</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="CatNew">Add a new cat</a>
                </li>
                {/* <li class="nav-item">
                <a class="nav-link">Disabled</a>
            </li> */}
            </ul>

        </div>
    )
}

export default Header
