import React, {Component} from "react";
import style from "./Select.module.css";
import PropTypes from 'prop-types';

class Select extends Component {
    state = {
        open: false
    };

    handleOpen = () => this.setState({open: true});

    handleSelect = (e, selectedValue) => {
        e.stopPropagation();
        const {oneChange} = this.props;
        oneChange(selectedValue);
        this.setState({open: false});
    }

    render () {
        const {value, options} = this.props;
        const {open} = this.state;
        
        return (

            <span className={style.wrapper} onClick={this.handleOpen}>
                <span> {value || "select ..."} </span>
                {open && (
                    <ul>
                        {options.map(o => (
                            <li
                                key={o.label}
                                className={style.option}
                                onClick = {(e) => this.handleSelect(e, o.value)}
                            >
                                {o.label}
                            </li>
                        ))}

                    </ul>
                )}
            </span>
        );
    }
}

Select.PropTypes = {
    oneChange: PropTypes.func,
    options: PropTypes.arrayOf (
        PropTypes.shape({
            label: PropTypes.value,
            value: PropTypes.any
        })
    ),
    value: PropTypes.string
};

export default Select;

