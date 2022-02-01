import classNames from "classnames";
import React from "react";
import { TMattress } from "types/mattress";
import "./styles.scss";

const Select = ({
    matressesList,
    onSelect,
    selected,
    label,
}: TSelectProps): React.ReactElement => {
    return (
        <div className="ms-select">
            <div className="ms-select__label">{label}</div>
            <div className="ms-select__options-container">
                {matressesList.map(([name, mattress]) => (
                    <button
                        key={`select-opt-${name}`}
                        className={classNames("ms-select__option", {
                            "ms-select__option--active": selected === name,
                        })}
                        onClick={() => onSelect(name)}
                    >
                        {mattress.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

type TSelectProps = {
    selected: string;
    matressesList: [name: string, mattress: TMattress][];
    onSelect: (value: string) => void;
    label: string;
};

export default Select;
