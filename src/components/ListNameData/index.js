
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const ShowRows = ({id, name}) => (
    <div>
        <Link to={`/shows_data/${id}`}>{name}</Link>
    </div>
);
ShowRows.PropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default ShowRows;
